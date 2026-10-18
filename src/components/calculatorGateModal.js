/**
 * Universal Calculator Lead Gate Modal Component
 * Perfect College / FindMyBSchool Admissions Portal
 * 
 * Enforces mandatory student details submission (Name, Phone, Email, Location)
 * before revealing scores, scaled percentiles, and eligible B-School calls.
 * Dispatches verified lead with calculated total score to Admissions CRM.
 */

import confetti from 'canvas-confetti';
import { sendLeadToCRM } from '../utils/crm.js';
import { trackLeadSubmission } from '../utils/analytics.js';

const STORAGE_KEY = 'fmc_calculator_student_lead';

// Retrieve saved student details from localStorage
export function getSavedCalculatorLead() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.name && parsed.phone && parsed.email && parsed.location) {
      return parsed;
    }
  } catch (e) {
    // Ignore JSON parse errors
  }
  return null;
}

// Save student details to localStorage
export function saveCalculatorLead(lead) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
  } catch (e) {}
}

// Clear saved student details
export function clearCalculatorLead() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
}

let activePromptCallback = null;
let currentExamType = 'CAT';
let currentPendingResult = null;

export function renderCalculatorGateModal() {
  return `
    <div class="calc-gate-backdrop" id="calcGateModalBackdrop" style="display: none;">
      <div class="calc-gate-dialog" id="calcGateModalDialog" role="dialog" aria-modal="true" aria-labelledby="calcGateTitle">
        
        <!-- Header Banner -->
        <div class="calc-gate-header">
          <div class="calc-gate-glow"></div>
          <button type="button" class="calc-gate-close" id="btnCloseCalcGate" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div class="calc-gate-badge">
            <span class="pulse-indicator"></span>
            <span id="calcGateBadgeText">⚡ CAT 2026 Normalization & Score Engine</span>
          </div>

          <h2 class="calc-gate-title" id="calcGateTitle">
            Unlock Your <span class="highlight-gradient">Verified Scorecard</span> & B-School Calls
          </h2>
          <p class="calc-gate-subtitle" id="calcGateSubtitle">
            Enter your details to calculate and reveal your slot-normalized scaled score, All-India percentile rank, and 50+ matching IIM & PGDM calls.
          </p>

          <div class="calc-gate-trust-strip">
            <div class="cg-trust-item"><span>🏛️</span> 21 IIMs + Top 50 PGDM</div>
            <div class="cg-trust-item"><span>⚡</span> Instant Scaled Scores</div>
            <div class="cg-trust-item"><span>🔒</span> 100% Free & No Spam</div>
          </div>
        </div>

        <!-- Form Body -->
        <div class="calc-gate-body">
          <form id="calcGateForm" class="calc-gate-form" novalidate>
            
            <!-- Validation Error Alert -->
            <div class="calc-gate-error-banner" id="calcGateErrorBanner" style="display: none;">
              <span class="cg-err-icon">⚠️</span>
              <span id="calcGateErrorText">Please fill in all mandatory fields with valid details.</span>
            </div>

            <div class="calc-gate-fields-grid">
              <!-- 1. Full Name -->
              <div class="cg-form-group" id="cgBoxName">
                <label for="cgInputName" class="cg-label">Full Name <span class="req">*</span></label>
                <div class="cg-input-wrap">
                  <span class="cg-icon">👤</span>
                  <input 
                    type="text" 
                    id="cgInputName" 
                    class="cg-control" 
                    placeholder="e.g. Rahul Sharma" 
                    autocomplete="name" 
                    required 
                  />
                </div>
                <span class="cg-field-error" id="cgErrName">Please enter your full name (at least 2 letters)</span>
              </div>

              <!-- 2. Mobile Number -->
              <div class="cg-form-group" id="cgBoxPhone">
                <label for="cgInputPhone" class="cg-label">Mobile Number <span class="req">*</span></label>
                <div class="cg-input-wrap">
                  <span class="cg-phone-prefix">+91</span>
                  <input 
                    type="tel" 
                    id="cgInputPhone" 
                    class="cg-control has-prefix" 
                    placeholder="10-digit mobile number" 
                    maxlength="10" 
                    inputmode="numeric" 
                    autocomplete="tel" 
                    required 
                  />
                </div>
                <span class="cg-field-error" id="cgErrPhone">Please enter a valid 10-digit mobile number</span>
              </div>

              <!-- 3. Email Address -->
              <div class="cg-form-group" id="cgBoxEmail">
                <label for="cgInputEmail" class="cg-label">Email Address <span class="req">*</span></label>
                <div class="cg-input-wrap">
                  <span class="cg-icon">✉️</span>
                  <input 
                    type="email" 
                    id="cgInputEmail" 
                    class="cg-control" 
                    placeholder="rahul.sharma@example.com" 
                    autocomplete="email" 
                    required 
                  />
                </div>
                <span class="cg-field-error" id="cgErrEmail">Please enter a valid email address</span>
              </div>

              <!-- 4. Location / City -->
              <div class="cg-form-group" id="cgBoxLocation">
                <label for="cgInputLocation" class="cg-label">Current City / Location <span class="req">*</span></label>
                <div class="cg-input-wrap">
                  <span class="cg-icon">📍</span>
                  <input 
                    type="text" 
                    id="cgInputLocation" 
                    class="cg-control" 
                    placeholder="e.g. Delhi NCR, Mumbai, Bangalore..." 
                    list="cgLocationsList" 
                    autocomplete="address-level2" 
                    required 
                  />
                  <datalist id="cgLocationsList">
                    <option value="Delhi NCR">
                    <option value="Mumbai">
                    <option value="Bangalore">
                    <option value="Pune">
                    <option value="Hyderabad">
                    <option value="Chennai">
                    <option value="Kolkata">
                    <option value="Ahmedabad">
                    <option value="Lucknow">
                    <option value="Jaipur">
                    <option value="Chandigarh">
                    <option value="Indore">
                    <option value="Bhopal">
                    <option value="Patna">
                    <option value="Nagpur">
                    <option value="Dehradun">
                    <option value="Kochi">
                    <option value="Bhubaneswar">
                  </datalist>
                </div>
                <span class="cg-field-error" id="cgErrLocation">Please enter your city/location</span>
              </div>
            </div>

            <!-- Guarantee Note -->
            <div class="cg-guarantee-note">
              <span>🔒 <strong>Privacy Assured:</strong> Your score and profile details are encrypted. We strictly do not share your contact with unsolicited telemarketers.</span>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-gradient-pill full-width-btn cg-submit-btn" id="cgSubmitBtn">
              <span id="cgSubmitBtnText">Unlock My Scorecard & Eligible Calls 🚀</span>
              <div class="cg-btn-spinner" id="cgBtnSpinner" style="display: none;"></div>
            </button>
          </form>
        </div>

      </div>
    </div>
  `;
}

/**
 * Initializes listeners for the Gate Modal.
 */
export function initCalculatorGateModal() {
  const backdrop = document.getElementById('calcGateModalBackdrop');
  const closeBtn = document.getElementById('btnCloseCalcGate');
  const form = document.getElementById('calcGateForm');

  closeBtn?.addEventListener('click', () => closeCalculatorGate());
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeCalculatorGate();
  });

  // Numeric only for phone input
  const phoneInput = document.getElementById('cgInputPhone');
  phoneInput?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
  });

  // Handle Form Submission
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateGateForm()) return;

    const name = document.getElementById('cgInputName')?.value.trim();
    const phone = document.getElementById('cgInputPhone')?.value.trim();
    const email = document.getElementById('cgInputEmail')?.value.trim().toLowerCase();
    const location = document.getElementById('cgInputLocation')?.value.trim();

    const studentLead = { name, phone, email, location };

    const submitBtn = document.getElementById('cgSubmitBtn');
    const submitText = document.getElementById('cgSubmitBtnText');
    const spinner = document.getElementById('cgBtnSpinner');

    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.innerText = 'Calculating & Unlocking Scorecard...';
    if (spinner) spinner.style.display = 'inline-block';

    try {
      // 1. Calculate active score using current pending calculation
      let calculatedResult = null;
      if (typeof currentPendingResult === 'function') {
        calculatedResult = currentPendingResult();
      } else if (currentPendingResult) {
        calculatedResult = currentPendingResult;
      }

      // 2. Prepare Top Calls Summary
      let topCallsSummary = 'Top IIMs & Premier PGDM';
      if (calculatedResult?.collegeCalls?.length) {
        topCallsSummary = calculatedResult.collegeCalls.map(c => c.name || c).slice(0, 5).join(', ');
      }

      const totalScore = calculatedResult?.totalRaw ?? calculatedResult?.score ?? 0;
      const scaledScore = calculatedResult?.scaledScore ?? totalScore;
      const percentile = calculatedResult?.effectivePercentile ?? calculatedResult?.estimatedPercentile ?? 0;

      // 3. Dispatch to Admissions CRM
      const crmPayload = {
        name,
        phone,
        email,
        location,
        form_name: `${currentExamType} College Predictor - Scorecard Lead`,
        source: `${currentExamType} College Predictor Tool`,
        custom_fields: {
          location,
          city: location,
          exam: currentExamType,
          totalScore,
          score: totalScore,
          total_score: totalScore,
          scaledScore,
          percentile,
          slot: calculatedResult?.slot || '1',
          category: calculatedResult?.category || 'GEN',
          varcScore: calculatedResult?.varcScore ?? '',
          dilrScore: calculatedResult?.dilrScore ?? '',
          qaScore: calculatedResult?.qaScore ?? '',
          accuracy: calculatedResult?.accuracy ? `${calculatedResult.accuracy}%` : '',
          topCalls: topCallsSummary,
        },
        message: `${currentExamType} Scorecard Result: Total Raw Score: ${totalScore}, Scaled: ${scaledScore}, Percentile: ${percentile}%ile, Category: ${calculatedResult?.category || 'GEN'}, Slot: ${calculatedResult?.slot || '1'}, Location: ${location}. Eligible Calls: ${topCallsSummary}`,
      };

      // Send to CRM with automatic failover and cross-tab broadcast
      await sendLeadToCRM(crmPayload);

      // Report Lead to Google Analytics 4
      trackLeadSubmission({
        formName: `${currentExamType} Calculator Gate`,
        source: 'Percentile Predictor Gate',
        collegeName: topCallsSummary ? topCallsSummary.split(',')[0] : '',
        leadCategory: 'calculator_gate',
      });

      // 4. Save to LocalStorage
      saveCalculatorLead(studentLead);

      // 5. Close Gate Modal
      closeCalculatorGate();

      // 6. Confetti Burst
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}

      // 7. Trigger caller callback with fresh lead and result
      if (activePromptCallback) {
        activePromptCallback(studentLead, calculatedResult);
      }
    } catch (err) {
      console.error('[Calculator Gate Error]', err);
      // Still unlock for the student even if network had an issue
      saveCalculatorLead(studentLead);
      closeCalculatorGate();
      if (activePromptCallback) {
        activePromptCallback(studentLead, null);
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.innerText = 'Unlock My Scorecard & Eligible Calls 🚀';
      if (spinner) spinner.style.display = 'none';
    }
  });
}

function validateGateForm() {
  const nameEl = document.getElementById('cgInputName');
  const phoneEl = document.getElementById('cgInputPhone');
  const emailEl = document.getElementById('cgInputEmail');
  const locEl = document.getElementById('cgInputLocation');

  const errBanner = document.getElementById('calcGateErrorBanner');
  const errText = document.getElementById('calcGateErrorText');

  let isValid = true;
  let firstErrEl = null;

  // Clear previous errors
  ['cgBoxName', 'cgBoxPhone', 'cgBoxEmail', 'cgBoxLocation'].forEach(id => {
    document.getElementById(id)?.classList.remove('has-error');
  });
  if (errBanner) errBanner.style.display = 'none';

  // Name
  const name = nameEl?.value.trim() || '';
  if (name.length < 2) {
    document.getElementById('cgBoxName')?.classList.add('has-error');
    if (!firstErrEl) firstErrEl = nameEl;
    isValid = false;
  }

  // Phone: 10 Digits
  const phone = phoneEl?.value.trim() || '';
  const cleanPhone = phone.replace(/[^\d]/g, '');
  if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
    document.getElementById('cgBoxPhone')?.classList.add('has-error');
    if (!firstErrEl) firstErrEl = phoneEl;
    isValid = false;
  }

  // Email
  const email = emailEl?.value.trim() || '';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('cgBoxEmail')?.classList.add('has-error');
    if (!firstErrEl) firstErrEl = emailEl;
    isValid = false;
  }

  // Location
  const loc = locEl?.value.trim() || '';
  if (loc.length < 2) {
    document.getElementById('cgBoxLocation')?.classList.add('has-error');
    if (!firstErrEl) firstErrEl = locEl;
    isValid = false;
  }

  if (!isValid) {
    if (errBanner) {
      errBanner.style.display = 'flex';
      if (errText) errText.innerText = 'Please provide your valid Name, 10-digit Mobile, Email, and City.';
    }
    firstErrEl?.focus();
  }

  return isValid;
}

/**
 * Main function invoked by calculators to check gate or prompt details.
 * 
 * If the student has already submitted details, immediately calls onUnlocked.
 * If not, opens the modal with the pending calculation and captures details first!
 */
export function promptCalculatorGate({ exam = 'CAT', getResult, onUnlocked }) {
  const saved = getSavedCalculatorLead();
  if (saved) {
    // Already unlocked! Compute result and invoke immediately
    const res = typeof getResult === 'function' ? getResult() : getResult;
    if (onUnlocked) onUnlocked(saved, res);
    
    // Background sync updated calculation to CRM
    try {
      const totalScore = res?.totalRaw ?? res?.score ?? 0;
      const scaledScore = res?.scaledScore ?? totalScore;
      const percentile = res?.effectivePercentile ?? res?.estimatedPercentile ?? 0;
      const topCalls = res?.collegeCalls?.length ? res.collegeCalls.map(c => c.name || c).slice(0, 5).join(', ') : '';

      sendLeadToCRM({
        name: saved.name,
        phone: saved.phone,
        email: saved.email,
        location: saved.location,
        form_name: `${exam} College Predictor - Recalculated Score`,
        source: `${exam} College Predictor Tool`,
        custom_fields: {
          location: saved.location,
          city: saved.location,
          exam,
          totalScore,
          score: totalScore,
          total_score: totalScore,
          scaledScore,
          percentile,
          slot: res?.slot || '1',
          category: res?.category || 'GEN',
          varcScore: res?.varcScore ?? '',
          dilrScore: res?.dilrScore ?? '',
          qaScore: res?.qaScore ?? '',
          topCalls,
        },
        message: `Updated ${exam} Calculation: Score ${totalScore}, Percentile ${percentile}%ile, Location: ${saved.location}`,
      });
    } catch (e) {}

    return;
  }

  // Not yet unlocked: Show the Gate Modal
  currentExamType = exam;
  currentPendingResult = getResult;
  activePromptCallback = onUnlocked;

  openCalculatorGate(exam);
}

export function openCalculatorGate(exam = 'CAT') {
  currentExamType = exam;
  const backdrop = document.getElementById('calcGateModalBackdrop');
  const badgeText = document.getElementById('calcGateBadgeText');
  const title = document.getElementById('calcGateTitle');
  const subtitle = document.getElementById('calcGateSubtitle');

  if (badgeText) {
    badgeText.innerText = `⚡ ${exam} 2026 Normalization & Score Engine`;
  }
  if (title) {
    title.innerHTML = `Unlock Your <span class="highlight-gradient">${exam} Scorecard</span> & B-School Calls`;
  }
  if (subtitle) {
    subtitle.innerText = `Enter your details to calculate and reveal your slot-normalized score, All-India percentile rank, and 50+ matching colleges.`;
  }

  // Pre-fill if any partial info exists
  const nameEl = document.getElementById('cgInputName');
  const phoneEl = document.getElementById('cgInputPhone');
  const emailEl = document.getElementById('cgInputEmail');
  const locEl = document.getElementById('cgInputLocation');

  const saved = getSavedCalculatorLead();
  if (saved) {
    if (nameEl && !nameEl.value) nameEl.value = saved.name || '';
    if (phoneEl && !phoneEl.value) phoneEl.value = saved.phone || '';
    if (emailEl && !emailEl.value) emailEl.value = saved.email || '';
    if (locEl && !locEl.value) locEl.value = saved.location || '';
  }

  if (backdrop) {
    backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      nameEl?.focus();
    }, 100);
  }
}

export function closeCalculatorGate() {
  const backdrop = document.getElementById('calcGateModalBackdrop');
  if (backdrop) {
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }
}
