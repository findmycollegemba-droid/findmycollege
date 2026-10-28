/**
 * Cloudflare Pages Function: /api/scan-cat-response
 * Fetches and parses official CAT candidate response sheets from cdn.digialm.com / iimcat.ac.in
 * Bypasses client-side browser CORS limitations.
 */

export async function onRequestPost(context) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  try {
    const body = await context.request.json().catch(() => ({}));
    const rawUrl = (body.url || '').trim();

    if (!rawUrl) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing URL parameter. Please provide a valid response sheet URL.'
      }), { status: 400, headers });
    }

    // SSRF Security Protection: Only allow trusted Digialm & IIM CAT assessment domains
    let parsedUrl;
    try {
      parsedUrl = new URL(rawUrl);
    } catch {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid URL format. Please paste the full link copied from cdn.digialm.com.'
      }), { status: 400, headers });
    }

    const allowedHosts = [
      'cdn.digialm.com',
      'iimcat.ac.in',
      'www.iimcat.ac.in',
      'g01.digialm.com',
      'g06.digialm.com',
      'g21.digialm.com',
      'tcsion.com',
      'www.tcsion.com'
    ];

    const isAllowedHost = allowedHosts.some(host => 
      parsedUrl.hostname === host || parsedUrl.hostname.endsWith('.' + host)
    );

    if (!isAllowedHost) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Security Warning: Only official response sheet links from cdn.digialm.com or iimcat.ac.in are supported.'
      }), { status: 400, headers });
    }

    // Fetch response sheet from Digialm CDN
    const response = await fetch(rawUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({
        success: false,
        error: `Could not retrieve response sheet (HTTP ${response.status}). Please check your URL or paste the raw HTML source code directly.`
      }), { status: 502, headers });
    }

    const htmlContent = await response.text();

    if (!htmlContent || htmlContent.length < 500) {
      return new Response(JSON.stringify({
        success: false,
        error: 'The retrieved response sheet was empty or incomplete. Please paste the page source code directly.'
      }), { status: 422, headers });
    }

    // Parse Candidate Details
    let candidateName = 'CAT Aspirant';
    let rollNumber = 'CAT2026';
    let testDate = 'CAT 2026';
    let testTime = '';
    let slot = '1';

    const nameMatch = htmlContent.match(/Candidate Name\s*<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i);
    if (nameMatch) candidateName = nameMatch[1].replace(/<[^>]+>/g, '').trim();

    const rollMatch = htmlContent.match(/Roll Number\s*<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i);
    if (rollMatch) rollNumber = rollMatch[1].replace(/<[^>]+>/g, '').trim();

    const dateMatch = htmlContent.match(/Test Date\s*<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i);
    if (dateMatch) testDate = dateMatch[1].replace(/<[^>]+>/g, '').trim();

    const timeMatch = htmlContent.match(/Test Time\s*<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i);
    if (timeMatch) {
      testTime = timeMatch[1].replace(/<[^>]+>/g, '').trim();
      const timeText = testTime.toLowerCase();
      if (timeText.includes('8:30') || timeText.includes('morning')) slot = '1';
      else if (timeText.includes('12:30') || timeText.includes('afternoon')) slot = '2';
      else if (timeText.includes('4:30') || timeText.includes('evening')) slot = '3';
    }

    // Sectional Question Counters
    const sectionsData = {
      varc: { correctMcq: 0, wrongMcq: 0, correctTita: 0, wrongTita: 0, unattempted: 0 },
      dilr: { correctMcq: 0, wrongMcq: 0, correctTita: 0, wrongTita: 0, unattempted: 0 },
      qa: { correctMcq: 0, wrongMcq: 0, correctTita: 0, wrongTita: 0, unattempted: 0 }
    };

    // Split HTML by Question Panels or Section Headers
    const qBlocks = htmlContent.split(/(?=class="question-pnl"|class="section-lbl"|Section\s*:\s*(?:VARC|DILR|QA)|<table class="menu-tbl")/i);
    let currentSection = 'varc';

    for (let block of qBlocks) {
      if (/Section\s*:\s*VARC|Verbal Ability/i.test(block)) currentSection = 'varc';
      else if (/Section\s*:\s*DILR|Data Interpretation/i.test(block)) currentSection = 'dilr';
      else if (/Section\s*:\s*QA|Quantitative Aptitude/i.test(block)) currentSection = 'qa';

      const isSa = /Question Type\s*:\s*(?:SA|TITA|Non-MCQ)/i.test(block);

      const statusMatch = block.match(/Status\s*:\s*([^<\n]+)/i);
      const status = statusMatch ? statusMatch[1].trim() : '';

      const chosenMatch = block.match(/Chosen Option\s*:\s*([^<\n]+)/i);
      const chosenOption = chosenMatch ? chosenMatch[1].trim() : '';

      const isCorrect = /class="rightAns"|tick\.png|correct\.png|alt="Correct"|&#10004;/i.test(block);

      if (status.includes('Not Answered') || chosenOption === '--' || chosenOption === '') {
        sectionsData[currentSection].unattempted++;
      } else if (isCorrect) {
        if (isSa) sectionsData[currentSection].correctTita++;
        else sectionsData[currentSection].correctMcq++;
      } else {
        if (isSa) sectionsData[currentSection].wrongTita++;
        else sectionsData[currentSection].wrongMcq++;
      }
    }

    // Calculate Scores with Official +3 / -1 / 0 Marking Scheme
    const varcRaw = (sectionsData.varc.correctMcq * 3) - (sectionsData.varc.wrongMcq * 1) + (sectionsData.varc.correctTita * 3);
    const dilrRaw = (sectionsData.dilr.correctMcq * 3) - (sectionsData.dilr.wrongMcq * 1) + (sectionsData.dilr.correctTita * 3);
    const qaRaw = (sectionsData.qa.correctMcq * 3) - (sectionsData.qa.wrongMcq * 1) + (sectionsData.qa.correctTita * 3);
    const totalRaw = varcRaw + dilrRaw + qaRaw;

    return new Response(JSON.stringify({
      success: true,
      candidateName,
      rollNumber,
      testDate,
      testTime,
      slot,
      varc: sectionsData.varc,
      dilr: sectionsData.dilr,
      qa: sectionsData.qa,
      varcRaw,
      dilrRaw,
      qaRaw,
      totalRaw
    }), { status: 200, headers });

  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: `Internal parsing error: ${err.message}`
    }), { status: 500, headers });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
