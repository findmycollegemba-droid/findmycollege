import confetti from 'canvas-confetti';

// State management for Inquiry Modal
export const inquiryModalState = {
  isOpen: false,
  hasAutoPopped: false,
  formData: {
    name: '',
    email: '',
    mobile: '',
    location: '',
    educationStatus: '', // 'pursuing' | 'completed'
    coursePlanning: '', // 'mba' | 'pgdm' | 'pgpm' | 'online-mba' | 'online-pgdm'
    budget: '', // 'under-5' | '5-10' | '10-13' | '13-15' | 'above-15'
    preferredCity: '', // 'delhi-ncr' | ... | 'other'
    otherCityName: '',
    specialization: '',
    educationLoan: '', // 'yes' | 'no'
    scholarship: '', // 'yes' | 'no'
    submittedAt: null
  }
};

export function renderInquiryModal() {
  return `
    <div class="inquiry-modal-backdrop" id="inquiryModalBackdrop" style="display: none;">
      <div class="inquiry-modal-dialog" id="inquiryModalDialog" role="dialog" aria-modal="true" aria-labelledby="inquiryModalTitle">
        
        <!-- Header Banner Graphic -->
        <div class="inquiry-modal-header">
          <div class="header-graphic-glow"></div>
          <button class="inquiry-modal-close" id="closeInquiryModalBtn" aria-label="Close inquiry form">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div class="inquiry-header-badge">
            <span class="badge-pulsing-dot"></span>
            <span>🎓 Admissions 2026-27 • Official Inquiry</span>
          </div>

          <h2 class="inquiry-header-title" id="inquiryModalTitle">
            Get 1-on-1 MBA & PGDM <span class="highlight-gradient">Admission Counseling</span>
          </h2>
          <p class="inquiry-header-sub">
            Fill your academic profile & preferences below. Our expert mentors will evaluate your profile and provide verified campus shortlists, fee concessions & GD-PI prep.
          </p>

          <div class="inquiry-trust-strip">
            <div class="trust-item"><span>🏛️</span> 500+ Verified B-Schools</div>
            <div class="trust-item"><span>💰</span> Up to 100% Scholarships</div>
            <div class="trust-item"><span>🔒</span> Zero Spam Guarantee</div>
          </div>
        </div>

        <!-- Form Body -->
        <div class="inquiry-modal-body" id="inquiryFormBody">
          <form id="admissionInquiryForm" class="inquiry-form-grid" novalidate>
            
            <!-- ALERT BOX FOR VALIDATION ERRORS -->
            <div class="inquiry-error-banner" id="inquiryErrorBanner" style="display: none;">
              <span class="error-banner-icon">⚠️</span>
              <span id="inquiryErrorText">Please fill in all mandatory fields with valid details.</span>
            </div>

            <!-- SECTION 1: PERSONAL & CONTACT INFORMATION -->
            <div class="form-section-group">
              <div class="section-group-header">
                <span class="step-num">1</span>
                <div>
                  <h3 class="section-group-title">Personal & Contact Details</h3>
                  <p class="section-group-desc">Your contact information is strictly confidential under TRAI & GDPR compliance.</p>
                </div>
              </div>

              <div class="inquiry-fields-2col">
                <!-- 1. Name -->
                <div class="form-input-box" id="boxName">
                  <label for="inqName" class="input-label">Full Name <span class="req">*</span></label>
                  <div class="input-wrap">
                    <span class="input-icon">👤</span>
                    <input type="text" id="inqName" class="form-control" placeholder="e.g. Rahul Sharma" required />
                  </div>
                  <span class="field-error-msg" id="errName">Please enter your full name</span>
                </div>

                <!-- 2. Email -->
                <div class="form-input-box" id="boxEmail">
                  <label for="inqEmail" class="input-label">Email Address <span class="req">*</span></label>
                  <div class="input-wrap">
                    <span class="input-icon">✉️</span>
                    <input type="email" id="inqEmail" class="form-control" placeholder="rahul.sharma@example.com" required />
                  </div>
                  <span class="field-error-msg" id="errEmail">Please enter a valid email address</span>
                </div>
              </div>

              <div class="inquiry-fields-2col">
                <!-- 3. Mobile Number (TRAI 10 Digits) -->
                <div class="form-input-box" id="boxMobile">
                  <div class="label-with-badge">
                    <label for="inqMobile" class="input-label">Mobile Number <span class="req">*</span></label>
                    <span class="trai-tag" id="mobileTraiTag">TRAI 10-Digit Valid</span>
                  </div>
                  <div class="input-wrap mobile-input-wrap">
                    <div class="country-code-pill">
                      <span class="flag">🇮🇳</span>
                      <span class="code">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      id="inqMobile" 
                      class="form-control mobile-control" 
                      placeholder="9876543210" 
                      maxlength="10" 
                      autocomplete="tel"
                      required 
                    />
                    <span class="mobile-count-pill" id="mobileDigitCount">0/10</span>
                  </div>
                  <div class="mobile-validation-feedback" id="mobileFeedback">
                    <span class="feedback-icon">ℹ️</span>
                    <span id="mobileFeedbackText">Enter valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9)</span>
                  </div>
                  <span class="field-error-msg" id="errMobile">Must be a valid 10-digit Indian mobile number</span>
                </div>

                <!-- 4. Location -->
                <div class="form-input-box" id="boxLocation">
                  <label for="inqLocation" class="input-label">Your Current Location / City <span class="req">*</span></label>
                  <div class="input-wrap">
                    <span class="input-icon">📍</span>
                    <input type="text" id="inqLocation" class="form-control" placeholder="e.g. Lucknow, Kanpur, Patna" required />
                  </div>
                  <span class="field-error-msg" id="errLocation">Please enter your current city or state</span>
                </div>
              </div>
            </div>

            <!-- SECTION 2: ACADEMIC & COURSE PREFERENCES -->
            <div class="form-section-group">
              <div class="section-group-header">
                <span class="step-num">2</span>
                <div>
                  <h3 class="section-group-title">Education Status & Planned Course</h3>
                  <p class="section-group-desc">Select your current academic stage and target management degree.</p>
                </div>
              </div>

              <!-- 5. Education Status -->
              <div class="form-choice-block" id="boxEducationStatus">
                <label class="choice-title">Education Status <span class="req">*</span></label>
                <div class="choice-cards-grid grid-2">
                  <label class="choice-card">
                    <input type="radio" name="inqEducationStatus" value="pursuing graduation" />
                    <div class="choice-card-content">
                      <div class="card-icon-wrap">🎓</div>
                      <div class="card-text-wrap">
                        <span class="card-main-title">Pursuing Graduation</span>
                        <span class="card-sub-title">Currently in Final or Pre-Final Year (Expected 2026/27)</span>
                      </div>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>

                  <label class="choice-card">
                    <input type="radio" name="inqEducationStatus" value="completed graduation" />
                    <div class="choice-card-content">
                      <div class="card-icon-wrap">📜</div>
                      <div class="card-text-wrap">
                        <span class="card-main-title">Completed Graduation</span>
                        <span class="card-sub-title">Graduate degree obtained / Working professional</span>
                      </div>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>
                </div>
                <span class="field-error-msg" id="errEducationStatus">Please select your education status</span>
              </div>

              <!-- 6. Which course you are planning? -->
              <div class="form-choice-block" id="boxCoursePlanning">
                <label class="choice-title">Which Course Are You Planning? <span class="req">*</span></label>
                <div class="choice-cards-grid grid-3-2">
                  <label class="choice-card compact">
                    <input type="radio" name="inqCoursePlanning" value="mba" />
                    <div class="choice-card-content">
                      <span class="course-badge">Degree</span>
                      <span class="card-main-title">MBA</span>
                      <span class="card-sub-title">University Master of Business Administration</span>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>

                  <label class="choice-card compact">
                    <input type="radio" name="inqCoursePlanning" value="pgdm" />
                    <div class="choice-card-content">
                      <span class="course-badge accent-purple">Industry</span>
                      <span class="card-main-title">PGDM</span>
                      <span class="card-sub-title">AICTE Approved Autonomous Diploma</span>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>

                  <label class="choice-card compact">
                    <input type="radio" name="inqCoursePlanning" value="pgpm - 1 year" />
                    <div class="choice-card-content">
                      <span class="course-badge accent-amber">Fast Track</span>
                      <span class="card-main-title">PGPM - 1 Year</span>
                      <span class="card-sub-title">Accelerated Executive Certificate</span>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>

                  <label class="choice-card compact">
                    <input type="radio" name="inqCoursePlanning" value="online mba" />
                    <div class="choice-card-content">
                      <span class="course-badge accent-green">Flexible</span>
                      <span class="card-main-title">Online MBA</span>
                      <span class="card-sub-title">UGC-Entitled Remote & Working Execs</span>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>

                  <label class="choice-card compact">
                    <input type="radio" name="inqCoursePlanning" value="online pgdm" />
                    <div class="choice-card-content">
                      <span class="course-badge accent-blue">Distance</span>
                      <span class="card-main-title">Online PGDM</span>
                      <span class="card-sub-title">AICTE Recognized Hybrid / E-Learning</span>
                      <div class="card-check-bubble"></div>
                    </div>
                  </label>
                </div>
                <span class="field-error-msg" id="errCoursePlanning">Please select the course you are planning</span>
              </div>
            </div>

            <!-- SECTION 3: BUDGET & STUDY DESTINATION -->
            <div class="form-section-group">
              <div class="section-group-header">
                <span class="step-num">3</span>
                <div>
                  <h3 class="section-group-title">Program Budget & Preferred City</h3>
                  <p class="section-group-desc">We match colleges that fit your financial bandwidth and location goals.</p>
                </div>
              </div>

              <!-- 7. How much budget for program? -->
              <div class="form-choice-block" id="boxBudget">
                <label class="choice-title">How Much Is Your Budget for the Program? <span class="req">*</span></label>
                <div class="budget-pills-row">
                  <label class="budget-pill-card">
                    <input type="radio" name="inqBudget" value="under 5 lacs" />
                    <div class="budget-pill-content">
                      <span class="budget-amt">Under 5 Lacs</span>
                      <span class="budget-tag">High ROI Universities</span>
                    </div>
                  </label>

                  <label class="budget-pill-card">
                    <input type="radio" name="inqBudget" value="5 to 10 lacs" />
                    <div class="budget-pill-content">
                      <span class="budget-amt">5 to 10 Lacs</span>
                      <span class="budget-tag">Quality B-Schools</span>
                    </div>
                  </label>

                  <label class="budget-pill-card">
                    <input type="radio" name="inqBudget" value="10 to 13 lacs" />
                    <div class="budget-pill-content">
                      <span class="budget-amt">10 to 13 Lacs</span>
                      <span class="budget-tag">Premier Deemed & Autonomous</span>
                    </div>
                  </label>

                  <label class="budget-pill-card">
                    <input type="radio" name="inqBudget" value="13 to 15 lacs" />
                    <div class="budget-pill-content">
                      <span class="budget-amt">13 to 15 Lacs</span>
                      <span class="budget-tag">Top Tier-2 Institutes</span>
                    </div>
                  </label>

                  <label class="budget-pill-card">
                    <input type="radio" name="inqBudget" value="15 and above" />
                    <div class="budget-pill-content">
                      <span class="budget-amt">15 Lacs & Above</span>
                      <span class="budget-tag">IIMs, XLRI & Global B-Schools</span>
                    </div>
                  </label>
                </div>
                <span class="field-error-msg" id="errBudget">Please select your total budget range</span>
              </div>

              <!-- 8. Preferred city for study? -->
              <div class="form-choice-block" id="boxCity">
                <label class="choice-title">Preferred City for Study? <span class="req">*</span></label>
                <div class="cities-grid-select">
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="delhi ncr" />
                    <span class="city-chip-inner"><span>🏙️</span> Delhi NCR</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="jaipur" />
                    <span class="city-chip-inner"><span>🏰</span> Jaipur</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="chandigarh" />
                    <span class="city-chip-inner"><span>🌲</span> Chandigarh</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="dehradun" />
                    <span class="city-chip-inner"><span>🏔️</span> Dehradun</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="pune" />
                    <span class="city-chip-inner"><span>🌿</span> Pune</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="mumbai" />
                    <span class="city-chip-inner"><span>🌊</span> Mumbai</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="hydrabad" />
                    <span class="city-chip-inner"><span>💎</span> Hyderabad</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="bangalore" />
                    <span class="city-chip-inner"><span>💻</span> Bangalore</span>
                  </label>
                  <label class="city-chip-card">
                    <input type="radio" name="inqCity" value="kolkata" />
                    <span class="city-chip-inner"><span>🏛️</span> Kolkata</span>
                  </label>
                  <label class="city-chip-card other-city-card" id="otherCityCard">
                    <input type="radio" name="inqCity" value="other city" id="radioOtherCity" />
                    <span class="city-chip-inner"><span>📍</span> Other City</span>
                  </label>
                </div>
                <span class="field-error-msg" id="errCity">Please select your preferred study city</span>

                <!-- Conditional Input: Manual City Name if "other city" selected -->
                <div class="conditional-other-city-box" id="conditionalOtherCityBox" style="display: none;">
                  <label for="inqOtherCityInput" class="input-label">Type Your Preferred City Name <span class="req">*</span></label>
                  <div class="input-wrap">
                    <span class="input-icon">✏️</span>
                    <input 
                      type="text" 
                      id="inqOtherCityInput" 
                      class="form-control" 
                      placeholder="e.g. Ahmedabad, Indore, Bhopal, Kochi, Bhubaneswar..." 
                    />
                  </div>
                  <span class="field-error-msg" id="errOtherCityInput">Please type your preferred city name</span>
                </div>
              </div>
            </div>

            <!-- SECTION 4: SPECIALIZATION, LOAN & SCHOLARSHIP -->
            <div class="form-section-group">
              <div class="section-group-header">
                <span class="step-num">4</span>
                <div>
                  <h3 class="section-group-title">Specialization, Loan & Scholarship</h3>
                  <p class="section-group-desc">Tailor your career tracks and funding requirements.</p>
                </div>
              </div>

              <!-- 9. Which specialization you are planning in MBA? -->
              <div class="form-input-box" id="boxSpecialization">
                <label for="inqSpecialization" class="input-label">
                  Which Specialization Are You Planning in MBA / PGDM? <span class="req">*</span>
                </label>
                <div class="input-wrap">
                  <span class="input-icon">🎯</span>
                  <input 
                    type="text" 
                    id="inqSpecialization" 
                    class="form-control" 
                    placeholder="e.g. Marketing, Business Analytics, Finance, HR..." 
                    required 
                  />
                </div>
                
                <!-- Quick clickable specialization suggestions -->
                <div class="spec-suggestions-strip">
                  <span class="suggestions-label">Popular tags (click to add):</span>
                  <div class="spec-tags-wrap" id="specTagsWrap">
                    <button type="button" class="spec-tag-btn" data-spec="Marketing">Marketing</button>
                    <button type="button" class="spec-tag-btn" data-spec="Finance">Finance</button>
                    <button type="button" class="spec-tag-btn" data-spec="Business Analytics">Business Analytics</button>
                    <button type="button" class="spec-tag-btn" data-spec="Human Resources (HR)">Human Resources (HR)</button>
                    <button type="button" class="spec-tag-btn" data-spec="Operations & Supply Chain">Operations & SCM</button>
                    <button type="button" class="spec-tag-btn" data-spec="FinTech">FinTech</button>
                    <button type="button" class="spec-tag-btn" data-spec="International Business">International Business</button>
                    <button type="button" class="spec-tag-btn" data-spec="Digital Marketing">Digital Marketing</button>
                  </div>
                </div>
                <span class="field-error-msg" id="errSpecialization">Please type or select at least one specialization</span>
              </div>

              <!-- 10 & 11: Education Loan & Scholarship -->
              <div class="inquiry-fields-2col">
                <!-- 10. Education Loan -->
                <div class="form-choice-block" id="boxLoan">
                  <label class="choice-title">Want to Take Education Loan? <span class="req">*</span></label>
                  <div class="yes-no-cards-grid">
                    <label class="yes-no-card">
                      <input type="radio" name="inqLoan" value="yes" />
                      <div class="yes-no-content">
                        <span class="yn-icon">🏦</span>
                        <div class="yn-text">
                          <span class="yn-title">Yes</span>
                          <span class="yn-sub">Need assistance</span>
                        </div>
                        <div class="card-check-bubble"></div>
                      </div>
                    </label>

                    <label class="yes-no-card">
                      <input type="radio" name="inqLoan" value="no" />
                      <div class="yes-no-content">
                        <span class="yn-icon">💳</span>
                        <div class="yn-text">
                          <span class="yn-title">No</span>
                          <span class="yn-sub">Self-financing</span>
                        </div>
                        <div class="card-check-bubble"></div>
                      </div>
                    </label>
                  </div>
                  <span class="field-error-msg" id="errLoan">Please choose Yes or No</span>
                </div>

                <!-- 11. Scholarship -->
                <div class="form-choice-block" id="boxScholarship">
                  <label class="choice-title">Want to Take Scholarship? <span class="req">*</span></label>
                  <div class="yes-no-cards-grid">
                    <label class="yes-no-card">
                      <input type="radio" name="inqScholarship" value="yes" />
                      <div class="yes-no-content">
                        <span class="yn-icon">🏆</span>
                        <div class="yn-text">
                          <span class="yn-title">Yes</span>
                          <span class="yn-sub">Merit/need aid</span>
                        </div>
                        <div class="card-check-bubble"></div>
                      </div>
                    </label>

                    <label class="yes-no-card">
                      <input type="radio" name="inqScholarship" value="no" />
                      <div class="yes-no-content">
                        <span class="yn-icon">❌</span>
                        <div class="yn-text">
                          <span class="yn-title">No</span>
                          <span class="yn-sub">Not needed</span>
                        </div>
                        <div class="card-check-bubble"></div>
                      </div>
                    </label>
                  </div>
                  <span class="field-error-msg" id="errScholarship">Please choose Yes or No</span>
                </div>
              </div>
            </div>

            <!-- MANDATORY LEGAL NOTICE -->
            <div class="mandatory-note-box">
              <span class="note-icon">📌</span>
              <p>
                <strong>Mandatory Note:</strong> All 11 questions are mandatory. Indian mobile numbers are validated strictly under TRAI standard (10 digits starting with 6, 7, 8, or 9).
              </p>
            </div>

            <!-- SUBMIT BUTTON -->
            <div class="inquiry-submit-row">
              <button type="submit" class="inquiry-submit-btn" id="inquirySubmitBtn">
                <span class="btn-text">Submit Admission Inquiry 2026</span>
                <span class="btn-sparkle">🚀</span>
              </button>
            </div>
          </form>
        </div>

        <!-- SUCCESS STATE DISPLAY -->
        <div class="inquiry-success-container" id="inquirySuccessContainer" style="display: none;">
          <div class="success-celebration-hero">
            <div class="success-badge-glow">🎉</div>
            <h2 class="success-heading">Inquiry Submitted Successfully!</h2>
            <p class="success-subheading">
              Your MBA & PGDM admission preferences have been dispatched to our senior counseling panel.
            </p>
          </div>

          <!-- Submitted Summary Ticket -->
          <div class="inquiry-summary-ticket" id="inquirySummaryTicket">
            <!-- Injected via JavaScript -->
          </div>

          <div class="success-action-buttons">
            <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hi%20FindMyBSchool,%20I%20just%20submitted%20my%20MBA%20Admission%20Inquiry%20Form.%20Please%20share%20my%20college%20shortlist." target="_blank" class="whatsapp-connect-btn">
              <span>💬 Connect with Senior Mentor on WhatsApp</span>
            </a>
            <button type="button" class="view-colleges-btn" id="inquiryExploreCollegesBtn">
              <span>🏛️ Explore 620+ MBA Colleges Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Floating Re-open Trigger Pill (Visible on screen so user can re-open inquiry anytime) -->
    <div class="inquiry-floating-trigger" id="inquiryFloatingTrigger" title="Click to open MBA Admission Inquiry Form">
      <div class="floating-trigger-inner">
        <span class="trigger-sparkle">📝</span>
        <span class="trigger-text">Admission Inquiry 2026</span>
        <span class="trigger-pulse">Free</span>
      </div>
    </div>
  `;
}

// Function to open the inquiry modal
export function openInquiryModal() {
  const backdrop = document.getElementById('inquiryModalBackdrop');
  if (backdrop) {
    backdrop.style.display = 'flex';
    document.body.classList.add('modal-open');
    inquiryModalState.isOpen = true;
    
    // Focus first input
    setTimeout(() => {
      const nameInput = document.getElementById('inqName');
      if (nameInput) nameInput.focus();
    }, 150);
  }
}

// Function to close the inquiry modal
export function closeInquiryModal() {
  const backdrop = document.getElementById('inquiryModalBackdrop');
  if (backdrop) {
    backdrop.style.display = 'none';
    document.body.classList.remove('modal-open');
    inquiryModalState.isOpen = false;
  }
}

// Indian Mobile Number TRAI Validator
// Must be exactly 10 digits and start with 6, 7, 8, or 9
export function validateIndianMobile(number) {
  const cleanNumber = (number || '').replace(/[^0-9]/g, '');
  const isValid = /^[6-9]\d{9}$/.test(cleanNumber);
  return {
    cleanNumber,
    length: cleanNumber.length,
    isValid
  };
}

// Initialize all interactions for the Inquiry Form
export function initInquiryModal() {
  const backdrop = document.getElementById('inquiryModalBackdrop');
  const dialog = document.getElementById('inquiryModalDialog');
  const closeBtn = document.getElementById('closeInquiryModalBtn');
  const floatingTrigger = document.getElementById('inquiryFloatingTrigger');
  const form = document.getElementById('admissionInquiryForm');
  const mobileInput = document.getElementById('inqMobile');
  const mobileFeedback = document.getElementById('mobileFeedback');
  const mobileFeedbackText = document.getElementById('mobileFeedbackText');
  const mobileDigitCount = document.getElementById('mobileDigitCount');
  const mobileTraiTag = document.getElementById('mobileTraiTag');
  const otherCityRadio = document.getElementById('radioOtherCity');
  const conditionalOtherCityBox = document.getElementById('conditionalOtherCityBox');
  const otherCityInput = document.getElementById('inqOtherCityInput');
  const specInput = document.getElementById('inqSpecialization');
  const specTagsWrap = document.getElementById('specTagsWrap');
  const errorBanner = document.getElementById('inquiryErrorBanner');
  const errorText = document.getElementById('inquiryErrorText');
  const exploreCollegesBtn = document.getElementById('inquiryExploreCollegesBtn');

  // Close Handlers
  closeBtn?.addEventListener('click', closeInquiryModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeInquiryModal();
    }
  });

  // Floating trigger button
  floatingTrigger?.addEventListener('click', openInquiryModal);

  // Keyboard escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && inquiryModalState.isOpen) {
      closeInquiryModal();
    }
  });

  // Real-time TRAI Indian Mobile Validation
  if (mobileInput) {
    mobileInput.addEventListener('input', (e) => {
      // Allow only numbers
      let val = e.target.value.replace(/[^0-9]/g, '');
      if (val.length > 10) val = val.slice(0, 10);
      e.target.value = val;

      mobileDigitCount.textContent = `${val.length}/10`;

      if (val.length === 0) {
        mobileFeedback.className = 'mobile-validation-feedback';
        mobileFeedbackText.textContent = 'Enter valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9)';
        mobileTraiTag.className = 'trai-tag';
        mobileTraiTag.textContent = 'TRAI 10-Digit';
      } else if (val.length < 10) {
        mobileFeedback.className = 'mobile-validation-feedback warning';
        mobileFeedbackText.textContent = `Needs ${10 - val.length} more digits (starts with 6-9)`;
        mobileTraiTag.className = 'trai-tag warning';
        mobileTraiTag.textContent = 'Incomplete';
      } else if (!/^[6-9]/.test(val)) {
        mobileFeedback.className = 'mobile-validation-feedback error';
        mobileFeedbackText.textContent = 'Invalid prefix: TRAI mobile must start with 6, 7, 8, or 9';
        mobileTraiTag.className = 'trai-tag error';
        mobileTraiTag.textContent = 'Invalid Prefix';
      } else {
        mobileFeedback.className = 'mobile-validation-feedback valid';
        mobileFeedbackText.textContent = '✓ Valid 10-Digit TRAI Indian Mobile Number';
        mobileTraiTag.className = 'trai-tag valid';
        mobileTraiTag.textContent = '✓ Verified';
      }
    });
  }

  // Preferred City - Toggle "Other City" input
  document.querySelectorAll('input[name="inqCity"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'other city') {
        conditionalOtherCityBox.style.display = 'block';
        setTimeout(() => otherCityInput?.focus(), 100);
      } else {
        conditionalOtherCityBox.style.display = 'none';
        if (otherCityInput) otherCityInput.value = '';
      }
    });
  });

  // Specialization Tags - Click to fill / append
  if (specTagsWrap && specInput) {
    specTagsWrap.querySelectorAll('.spec-tag-btn').forEach(tag => {
      tag.addEventListener('click', () => {
        const specName = tag.dataset.spec;
        let current = specInput.value.trim();
        if (!current) {
          specInput.value = specName;
        } else if (!current.toLowerCase().includes(specName.toLowerCase())) {
          specInput.value = `${current}, ${specName}`;
        }
        tag.classList.add('selected');
        specInput.focus();
      });
    });
  }

  // Handle Form Submission with Strict Mandatory Checks
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      errorBanner.style.display = 'none';

      // Clear all existing errors
      document.querySelectorAll('.field-error-msg').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));

      const errors = [];

      // 1. Name Check
      const name = document.getElementById('inqName')?.value.trim();
      if (!name || name.length < 2) {
        errors.push({ field: 'boxName', errId: 'errName', msg: 'Full name is mandatory' });
      }

      // 2. Email Check
      const email = document.getElementById('inqEmail')?.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        errors.push({ field: 'boxEmail', errId: 'errEmail', msg: 'Valid email address is mandatory' });
      }

      // 3. Mobile Number Check (STRICT TRAI 10 Digits)
      const mobileVal = document.getElementById('inqMobile')?.value.trim();
      const mobileResult = validateIndianMobile(mobileVal);
      if (!mobileResult.isValid) {
        errors.push({ 
          field: 'boxMobile', 
          errId: 'errMobile', 
          msg: mobileResult.length !== 10 
            ? 'Mobile number must be exactly 10 digits' 
            : 'Mobile number must start with 6, 7, 8, or 9 per TRAI regulations' 
        });
      }

      // 4. Location Check
      const location = document.getElementById('inqLocation')?.value.trim();
      if (!location) {
        errors.push({ field: 'boxLocation', errId: 'errLocation', msg: 'Current city or location is mandatory' });
      }

      // 5. Education Status Check
      const eduStatus = document.querySelector('input[name="inqEducationStatus"]:checked')?.value;
      if (!eduStatus) {
        errors.push({ field: 'boxEducationStatus', errId: 'errEducationStatus', msg: 'Education status selection is mandatory' });
      }

      // 6. Course Planning Check
      const course = document.querySelector('input[name="inqCoursePlanning"]:checked')?.value;
      if (!course) {
        errors.push({ field: 'boxCoursePlanning', errId: 'errCoursePlanning', msg: 'Target course selection is mandatory' });
      }

      // 7. Budget Check
      const budget = document.querySelector('input[name="inqBudget"]:checked')?.value;
      if (!budget) {
        errors.push({ field: 'boxBudget', errId: 'errBudget', msg: 'Budget range selection is mandatory' });
      }

      // 8. Preferred City Check
      const city = document.querySelector('input[name="inqCity"]:checked')?.value;
      if (!city) {
        errors.push({ field: 'boxCity', errId: 'errCity', msg: 'Preferred city selection is mandatory' });
      } else if (city === 'other city') {
        const otherCity = otherCityInput?.value.trim();
        if (!otherCity) {
          errors.push({ field: 'conditionalOtherCityBox', errId: 'errOtherCityInput', msg: 'Please type your preferred city name' });
        }
      }

      // 9. Specialization Check
      const spec = specInput?.value.trim();
      if (!spec) {
        errors.push({ field: 'boxSpecialization', errId: 'errSpecialization', msg: 'Specialization name is mandatory' });
      }

      // 10. Education Loan Check
      const loan = document.querySelector('input[name="inqLoan"]:checked')?.value;
      if (!loan) {
        errors.push({ field: 'boxLoan', errId: 'errLoan', msg: 'Please indicate if you need an education loan' });
      }

      // 11. Scholarship Check
      const scholarship = document.querySelector('input[name="inqScholarship"]:checked')?.value;
      if (!scholarship) {
        errors.push({ field: 'boxScholarship', errId: 'errScholarship', msg: 'Please indicate if you want scholarship assistance' });
      }

      // If ANY error exists, halt and show feedback
      if (errors.length > 0) {
        errorBanner.style.display = 'flex';
        errorText.textContent = `Please complete all mandatory fields (${errors.length} incomplete). Make sure mobile number is exactly 10 digits.`;

        // Highlight fields
        errors.forEach(err => {
          const el = document.getElementById(err.field);
          if (el) el.classList.add('has-error');
          const errEl = document.getElementById(err.errId);
          if (errEl) {
            errEl.textContent = err.msg;
            errEl.style.display = 'block';
          }
        });

        // Scroll first error into view
        const firstErrorEl = document.getElementById(errors[0].field);
        if (firstErrorEl) {
          firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // SUCCESS SUBMISSION
      const finalPreferredCity = city === 'other city' ? `${otherCityInput.value.trim()} (Other)` : city;
      const inquiryPayload = {
        id: 'FMC-INQ-' + Math.floor(100000 + Math.random() * 900000),
        name,
        email,
        mobile: `+91 ${mobileResult.cleanNumber}`,
        location,
        educationStatus: eduStatus,
        coursePlanning: course,
        budget,
        preferredCity: finalPreferredCity,
        specialization: spec,
        educationLoan: loan,
        scholarship,
        submittedAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
      };

      // Save to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('fmc_admissions_inquiries') || '[]');
        stored.unshift(inquiryPayload);
        localStorage.setItem('fmc_admissions_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage save error:', err);
      }

      // Confetti Burst Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Render Summary Ticket
      const summaryTicket = document.getElementById('inquirySummaryTicket');
      if (summaryTicket) {
        summaryTicket.innerHTML = `
          <div class="ticket-header-row">
            <span class="ticket-id-tag">Inquiry Ref: #${inquiryPayload.id}</span>
            <span class="ticket-date">${inquiryPayload.submittedAt}</span>
          </div>

          <div class="ticket-student-profile">
            <div class="ticket-avatar">🎓</div>
            <div>
              <h4 class="ticket-name">${inquiryPayload.name}</h4>
              <p class="ticket-contact">${inquiryPayload.mobile} • ${inquiryPayload.email} • 📍 ${inquiryPayload.location}</p>
            </div>
          </div>

          <div class="ticket-details-grid">
            <div class="ticket-item">
              <span class="t-label">Education Status</span>
              <span class="t-value">${inquiryPayload.educationStatus.toUpperCase()}</span>
            </div>
            <div class="ticket-item">
              <span class="t-label">Planned Course</span>
              <span class="t-value badge-course">${inquiryPayload.coursePlanning.toUpperCase()}</span>
            </div>
            <div class="ticket-item">
              <span class="t-label">Budget Range</span>
              <span class="t-value">${inquiryPayload.budget.toUpperCase()}</span>
            </div>
            <div class="ticket-item">
              <span class="t-label">Preferred Study City</span>
              <span class="t-value">📍 ${inquiryPayload.preferredCity.toUpperCase()}</span>
            </div>
            <div class="ticket-item full-span">
              <span class="t-label">Target Specialization(s)</span>
              <span class="t-value text-accent">${inquiryPayload.specialization}</span>
            </div>
            <div class="ticket-item">
              <span class="t-label">Education Loan</span>
              <span class="t-value ${inquiryPayload.educationLoan === 'yes' ? 'status-yes' : 'status-no'}">
                ${inquiryPayload.educationLoan === 'yes' ? '✅ Requested' : '❌ Not Needed'}
              </span>
            </div>
            <div class="ticket-item">
              <span class="t-label">Scholarship Guidance</span>
              <span class="t-value ${inquiryPayload.scholarship === 'yes' ? 'status-yes' : 'status-no'}">
                ${inquiryPayload.scholarship === 'yes' ? '🏆 Requested' : '❌ Not Needed'}
              </span>
            </div>
          </div>

          <div class="ticket-next-steps">
            <h5>⚡ What Happens Next?</h5>
            <ul>
              <li>Our senior IIM/XLRI admission counselor has been assigned to your profile.</li>
              <li>You will receive a curated PDF shortlist of colleges matching your budget & city on WhatsApp.</li>
              <li>Free mock GD-PI & entrance exam scorecard evaluation will be scheduled.</li>
            </ul>
          </div>
        `;
      }

      // Switch view to success
      document.getElementById('inquiryFormBody').style.display = 'none';
      document.getElementById('inquirySuccessContainer').style.display = 'block';
    });
  }

  // Explore colleges button from success screen
  exploreCollegesBtn?.addEventListener('click', () => {
    closeInquiryModal();
    window.location.hash = '#colleges';
  });

  // AUTO POPUP ON USER VISIT
  // Trigger inquiry modal automatically 2.2 seconds after page load if not popped in this session
  if (!sessionStorage.getItem('fmc_inquiry_popped')) {
    setTimeout(() => {
      if (!inquiryModalState.isOpen) {
        openInquiryModal();
        sessionStorage.setItem('fmc_inquiry_popped', 'true');
        inquiryModalState.hasAutoPopped = true;
      }
    }, 2200);
  }
}
