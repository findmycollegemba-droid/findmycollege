import { COLLEGES_DATA } from '../data/collegesData.js';
import { EXAMS_DATA } from '../data/examsData.js';

export function getAIResponse(userMessage, conversationHistory = []) {
  const query = userMessage.trim().toLowerCase();

  // Profile evaluation matcher
  if (query.includes('profile') || query.includes('gem') || query.includes('non-gem') || query.includes('acads') || query.includes('rate my')) {
    return {
      text: `### 🎯 AdmitIQ Profile Intelligence Assessment

Here is how top IIMs (Ahmedabad, Bangalore, Calcutta) and Tier-1 institutes objectively evaluate your profile:

| Profile Factor | Standard Weightage | What Panellists Look For |
| :--- | :--- | :--- |
| **10th & 12th Marks** | 10% – 15% | 90%+ is awarded maximum rating points (typically 10/10). Below 80% usually scores 5-6 points. |
| **Graduation Score** | 10% – 20% | High score (>80% or 8.5+ CGPA) gives a major boost in IIM Bangalore and Lucknow criteria. |
| **Academic Diversity** | 5% – 10% | **Non-Engineers** (Commerce, Arts, Law, Medicine, Science) receive an automatic 5% diversity boost at IIM A, B, L, and I! |
| **Gender Diversity** | 5% | Female and transgender candidates receive 3–5 additional direct points across most IIMs. |
| **Work Experience** | 10% – 15% | Sweet spot is **24 to 36 months** of full-time, post-grad work experience for maximum points. |

💡 **Pro-Tip for GEM (General Engineering Male):**
Because competition is stiffest in this pool, GEM candidates generally target **99.6+ percentile in CAT** for BLACKI IIM calls, while Non-Engineers can receive calls at **97.5–98.5+ percentile**!

👉 *Want me to calculate your exact composite score? Drop your 10th %, 12th %, Grad %, stream, and work-ex in months!*`,
      suggestions: ['Calculate my composite score', 'I have 8/8/8 profile', 'Best colleges for Non-Engineers', 'Colleges with low acads weightage']
    };
  }

  // Percentile matcher
  const percMatch = query.match(/(\d{2,3}(?:\.\d+)?)\s*(?:percentile|%ile|%)/);
  if (percMatch || query.includes('score') || query.includes('colleges for') || query.includes('call')) {
    const p = percMatch ? parseFloat(percMatch[1]) : null;
    if (p) {
      let matchedColleges = [];
      let tierAdvice = '';

      if (p >= 99) {
        tierAdvice = '🔥 **Elite Tier 1 (Dream Calls)**: You are in the top 1% of the country! You qualify for all 21 IIMs, FMS Delhi, and premier institutes.';
        matchedColleges = [
          '**IIM Ahmedabad / Bangalore / Calcutta** (Avg ₹34-35 LPA)',
          '**FMS Delhi** (Fees ₹2.3L, Avg ₹34.1 LPA — King of ROI)',
          '**XLRI Jamshedpur** (via XAT 96+%ile)',
          '**JBIMS Mumbai** (MMS via MAH CET / CAT 99.9%ile)'
        ];
      } else if (p >= 95) {
        tierAdvice = '✨ **Tier 1 & Top Private B-Schools**: Extremely strong position with multiple high-package options.';
        matchedColleges = [
          '**IIM Lucknow / Kozhikode / Indore** (Based on category & profile)',
          '**MDI Gurgaon** (Avg ₹27.6 LPA)',
          '**SPJIMR Mumbai** (Profile + Score cutoffs)',
          '**IIT Bombay (SJMSOM) & IIT Delhi (DMS)** (Huge ROI, Fees ~₹14L)',
          '**New IIMs: Udaipur, Trichy, Ranchi, Raipur** (Avg ₹17-20 LPA)'
        ];
      } else if (p >= 90) {
        tierAdvice = '🚀 **Tier 1.5 & Premier Autonomous Institutes**: Consistent 100% placement track records.';
        matchedColleges = [
          '**Baby IIMs: Bodhgaya, Sirmaur, Sambalpur, Jammu, Nagpur**',
          '**IMT Ghaziabad** (Flagship Marketing, Avg ₹17.3 LPA)',
          '**IMI New Delhi** (Avg ₹17.1 LPA)',
          '**GIM Goa** (Flagship PGDM / BDA, Avg ₹15.2 LPA)',
          '**XIM University Bhubaneswar** (via XAT 91+%ile)'
        ];
      } else if (p >= 80) {
        tierAdvice = '🎯 **Tier 2 High-Growth Institutes**: Reputed brands with strong corporate recruitment.';
        matchedColleges = [
          '**TAPMI Manipal** (Avg ₹14.8 LPA, Bloomberg Lab)',
          '**Great Lakes Chennai (PGDM)** (Avg ₹15.1 LPA)',
          '**K J Somaiya Mumbai** (Avg ₹13.5 LPA)',
          '**FORE School of Management New Delhi** (Avg ₹14.5 LPA)',
          '**Welingkar Mumbai (WeSchool)** (Avg ₹12.5 LPA)'
        ];
      } else {
        tierAdvice = '📌 **Tier 2.5 & Emerging Business Schools**: Focused specialization programs.';
        matchedColleges = [
          '**BIMTECH Greater Noida** (Avg ₹11.2 LPA)',
          '**XIME Bangalore** (Avg ₹10.5 LPA)',
          '**BIMM Pune (Balaji)** (Avg ₹10.2 LPA)',
          '**Alliance University Bangalore** (Avg ₹8.8 LPA)'
        ];
      }

      return {
        text: `### 🎓 Personalized College Recommendation for **${p}%ile**

${tierAdvice}

#### Recommended Colleges You Can Target:
${matchedColleges.map(c => `- ${c}`).join('\n')}

#### Next Action Items:
1. **Apply Before Deadlines:** Many private schools (MDI, SPJIMR, IMT) close applications *before* CAT results are out!
2. **Back Up with Other Exams:** Register for XAT, NMAT, or SNAP to have multiple shots at ₹25+ LPA campuses.
3. **Start GD-PI Prep Today:** Personal interviews carry 30% to 50% final weightage in conversion!`,
        suggestions: ['How to prepare for GD-PI?', 'Tell me about FMS Delhi ROI', 'What is XAT registration deadline?', 'Top colleges for 85 percentile']
      };
    }
  }

  // MBA vs PGDM
  if (query.includes('mba vs pgdm') || query.includes('difference') || query.includes('diploma') || query.includes('degree')) {
    return {
      text: `### ⚖️ The Ultimate MBA vs PGDM Breakdown

Here is the direct comparison every Gen-Z MBA aspirant needs to know:

| Parameter | MBA (Master of Business Admin) | PGDM (Post Grad Diploma in Mgmt) |
| :--- | :--- | :--- |
| **Award Type** | University Degree | Autonomous Institute Diploma |
| **Regulation** | UGC / University Syndicate | AICTE Approved + AIU Equivalence |
| **Top Colleges** | FMS Delhi, JBIMS, IIMs (IIM Act), SIBM | XLRI, SPJIMR, MDI, IMT, GIM |
| **Fee Structure** | Often lower / Government subsidized (₹2L - ₹20L) | Market-driven (₹18L - ₹28L) |
| **Curriculum** | Theoretical & academic foundation | Case studies, corporate live projects |
| **Recruiters Value** | **100% Identical** at Tier-1 | **100% Identical** at Tier-1 |

⚡ **The Verdict:**
At top schools (XLRI vs FMS vs IIMs), top recruiters like McKinsey and Google **do not care** if your parchment says MBA or PGDM. Both receive the same roles and compensation. Choose based on college NIRF rank, alumni network, and ROI!`,
      suggestions: ['Top High-ROI MBA Colleges', 'Show me XLRI fees & package', 'Explore Programs Tab', 'Compare CAT vs XAT']
    };
  }

  // GD-PI Prep
  if (query.includes('gd') || query.includes('pi') || query.includes('interview') || query.includes('wat') || query.includes('question')) {
    return {
      text: `### 🎤 AdmitIQ GD-PI & WAT Interview Masterclass

Here are the highest frequency interview questions asked at IIMs, XLRI, and Symbiosis:

#### 1. The Classic Triad:
- **"Tell me about yourself without repeating your CV."** *(Focus on your core driver, formative experiences, and why you are in this room.)*
- **"Why MBA right now?"** *(Connect your past degree/work to your short-term 3-year goal and explain the specific gap an MBA bridges.)*
- **"What is your biggest personal failure?"** *(Choose a genuine failure, take full ownership, and detail the corrective systems you built afterward.)*

#### 2. Trending WAT / GD Topics for 2026-2027:
- *"Is Generative AI a threat to entry-level white collar jobs or a workforce multiplier?"*
- *"India as the global supply chain alternative: Feasibility vs Infrastructure reality."*
- *"Central Bank Digital Currency (CBDC) vs Cryptocurrencies: The future of sovereign money."*

Would you like to do a **Mock Interview Simulation** right now? Type your answer to: **"Why do you want an MBA?"** and I'll grade it on a 10-point scale!`,
      suggestions: ['Why MBA answer template', 'Mock Interview: Tell me about yourself', 'Current affairs topics for GD', 'WAT essay writing tips']
    };
  }

  // Specific Exam Query
  const matchedExam = EXAMS_DATA.find(e => query.includes(e.id) || query.includes(e.fullName.toLowerCase()));
  if (matchedExam) {
    return {
      text: `### 📝 Everything About ${matchedExam.fullName} (${matchedExam.name})

- **Tagline:** ${matchedExam.tagline}
- **Conducting Authority:** ${matchedExam.conductingBody}
- **Exam Date:** ${matchedExam.examDate}
- **Mode & Duration:** ${matchedExam.mode} | ${matchedExam.durationMinutes} Minutes (${matchedExam.totalQuestions} Questions)
- **Marking Scheme:** ${matchedExam.negativeMarking}
- **Difficulty Rating:** ${matchedExam.difficulty}

#### Key Sections:
${matchedExam.sections.map(s => `- **${s.name}**: ${s.questions} questions (${s.timeMinutes ? s.timeMinutes + ' mins' : 'Composite'})`).join('\n')}

#### Top Institutes Accepting ${matchedExam.name}:
${matchedExam.topColleges.slice(0, 4).map(c => `- **${c.name}** — Cutoff: *${c.cutoff}* | Avg CTC: *${c.avgSalary}*`).join('\n')}

👉 *Tip: Head over to our **Exams Tab** or **Tools Tab** to calculate your projected score!*`,
      suggestions: [`${matchedExam.name} syllabus breakdown`, `${matchedExam.name} score vs percentile`, 'Calculate my score', 'Check all 8 exams']
    };
  }

  // High ROI Colleges
  if (query.includes('roi') || query.includes('low fee') || query.includes('cheap') || query.includes('affordable')) {
    return {
      text: `### 💰 Top 5 High-ROI B-Schools in India (Low Fees + Monster CTC)

If you don't want to take a ₹25 Lakh education loan, these colleges are gold mines:

1. **FMS Delhi (Faculty of Management Studies)**
   - 💵 **Total Fees:** ~₹2.3 Lakhs
   - 💼 **Average Package:** ₹34.1 LPA
   - 🔑 **Entrance Exam:** CAT (Target 99.0+ %ile)

2. **SIMSREE Mumbai (Sydenham)**
   - 💵 **Total Fees:** ~₹1.4 Lakhs
   - 💼 **Average Package:** ₹15.3 LPA
   - 🔑 **Entrance Exam:** MAH CET / CAT / CMAT (Target 99.7+ %ile)

3. **JBIMS Mumbai (Jamnalal Bajaj)**
   - 💵 **Total Fees:** ~₹6.1 Lakhs
   - 💼 **Average Package:** ₹28.0 LPA
   - 🔑 **Entrance Exam:** MAH CET (99.9%ile) / CAT (99.9%ile)

4. **TISS Mumbai (School of Management & Labour Studies)**
   - 💵 **Total Fees:** ~₹2.8 Lakhs
   - 💼 **Average Package:** ₹27.2 LPA
   - 🔑 **Entrance Exam:** CUET PG (COQP12 Code)

5. **IIT Bombay (SJMSOM) & IIT Delhi (DMS)**
   - 💵 **Total Fees:** ~₹14 Lakhs
   - 💼 **Average Package:** ₹28.8 LPA
   - 🔑 **Entrance Exam:** CAT (98.5+ %ile, Engineers only at SJMSOM)`,
      suggestions: ['How to get into FMS Delhi?', 'TISS Mumbai CUET PG cutoff', 'JBIMS admission process', 'Open Score Calculators']
    };
  }

  // Default intelligent assistant response
  return {
    text: `### 👋 Hey Aspirant! I'm AdmitIQ, your Gen-Z AI MBA Mentor!

I can help you navigate everything about Indian MBA admissions without the typical coaching fluff. Here is what I can do:

- 📊 **Percentile to College Predictor:** Tell me your expected percentile (e.g., *"What can I get at 94%ile?"*).
- ⚖️ **MBA vs PGDM Clarity:** Learn why degrees and diplomas differ in fees and syllabus.
- 🎯 **Exam Mastery:** Details on CAT, XAT, NMAT, SNAP, CMAT, MAT, MH-CET, and CUET PG.
- 🎤 **GD-PI & WAT Prep:** Mock interview simulations and trending current affairs topics.
- 💼 **ROI Calculations:** Discover low-fee, high-package colleges across India.

What would you like to explore today?`,
    suggestions: [
      'Colleges for 95 percentile in CAT',
      'Tell me the difference between MBA and PGDM',
      'What is the exam pattern for XAT 2027?',
      'Best colleges with fees under 5 lakhs',
      'How to evaluate my profile for IIMs'
    ]
  };
}
