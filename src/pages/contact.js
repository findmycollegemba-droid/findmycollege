export function renderContactPage() {
  return `
    <div class="page-contact">
      <!-- Contact Hero Section -->
      <section class="contact-hero-redesign">
        <div class="section-container">
          <div class="contact-hero-badge">
            <span class="pulse-dot"></span>
            <span>Official MBA & PGDM Admissions Helpline 2027-29</span>
          </div>
          <h1 class="contact-hero-title">Speak Directly with MBA Admission Advisors</h1>
          <p class="contact-hero-subtitle">
            Get 100% transparent, unbiased guidance on B-school cutoffs, tuition fees, profile evaluations, and scholarship shortlists from verified IIM & XLRI alumni mentors.
          </p>

          <!-- Quick Trust Metrics Strip -->
          <div class="contact-trust-strip">
            <div class="trust-strip-item">
              <span class="trust-strip-icon">📞</span>
              <div>
                <strong>Official Helpline</strong>
                <span>+91 88001 26446</span>
              </div>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-icon">⚡</span>
              <div>
                <strong>Response Time</strong>
                <span>Under 60s on Call</span>
              </div>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-icon">🛡️</span>
              <div>
                <strong>100% Free Advisory</strong>
                <span>Zero Hidden Fees</span>
              </div>
            </div>
            <div class="trust-strip-item">
              <span class="trust-strip-icon">🎓</span>
              <div>
                <strong>Verified Mentors</strong>
                <span>IIM & XLRI Alumni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Container -->
      <div class="section-container" style="margin-top: -30px; position: relative; z-index: 10;">
        
        <!-- Official Contact Channels Cards Grid -->
        <div class="official-channels-grid">
          
          <!-- Card 1: Official Call Helpline -->
          <div class="channel-card channel-card-featured">
            <div class="channel-badge primary-badge">Official Primary Helpline</div>
            <div class="channel-icon-wrap phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="channel-content">
              <h2 class="channel-title">Official Contact Number</h2>
              <div class="channel-number-row">
                <a href="tel:8800126446" class="channel-phone-link" id="contactOfficialPhone">
                  +91 88001 26446
                </a>
                <button type="button" class="copy-number-btn" id="copyPhoneBtn" title="Copy Number" aria-label="Copy Official Contact Number">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span class="copy-text">Copy</span>
                </button>
              </div>
              <p class="channel-sub">Direct counseling line • Mon - Sat: 9:00 AM – 8:00 PM IST</p>
              <div class="channel-actions">
                <a href="tel:8800126446" class="btn-channel btn-call">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>Call 8800126446</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Official WhatsApp Helpdesk -->
          <div class="channel-card">
            <div class="channel-badge whatsapp-badge">Instant WhatsApp Support</div>
            <div class="channel-icon-wrap whatsapp-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
              </svg>
            </div>
            <div class="channel-content">
              <h2 class="channel-title">WhatsApp Counseling Desk</h2>
              <div class="channel-number-row">
                <a href="https://wa.me/918800126446?text=Hi%20FindMyBSchool%20Team%2C%20I%20need%20expert%20guidance%20for%20MBA%20Admissions%202027-29" target="_blank" rel="noopener noreferrer" class="channel-phone-link">
                  +91 88001 26446
                </a>
              </div>
              <p class="channel-sub">Fastest response for cutoff queries, fee breakdown & brochure requests.</p>
              <div class="channel-actions">
                <a href="https://wa.me/918800126446?text=Hi%20FindMyBSchool%20Team%2C%20I%20need%20expert%20guidance%20for%20MBA%20Admissions%202027-29" target="_blank" rel="noopener noreferrer" class="btn-channel btn-whatsapp">
                  <span>Chat on WhatsApp</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Official Founder & Admissions Email -->
          <div class="channel-card">
            <div class="channel-badge email-badge">Founder's Desk</div>
            <div class="channel-icon-wrap email-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="channel-content">
              <h2 class="channel-title">Official Founder & Admissions Desk</h2>
              <div class="channel-number-row">
                <a href="mailto:founder@findmybschool.com" class="channel-phone-link channel-email-link">
                  founder@findmybschool.com
                </a>
              </div>
              <p class="channel-sub">Direct founder desk for student profile reviews, institutional tie-ups, and escalations.</p>
              <div class="channel-actions">
                <a href="mailto:founder@findmybschool.com" class="btn-channel btn-email">
                  <span>Email Founder Desk</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- ADMISSION INQUIRY HERO BANNER -->
        <div class="contact-inquiry-hero-card">
          <div class="ci-hero-badge">
            <span class="badge-dot"></span>
            <span>Comprehensive B-School Profile Evaluation 2027-29</span>
          </div>
          <h2 class="ci-hero-title">Need a Tailored College Shortlist Across Top 500+ B-Schools?</h2>
          <p class="ci-hero-desc">
            Submit your target degree, budget, preferred state/city, and exam scores in our 11-question admission intake. Get verified cutoff estimates, merit scholarship prospects, and direct application deadlines.
          </p>
          <button type="button" class="ci-launch-btn" onclick="window.openInquiryModal()">
            <span>📝 Start Full MBA Admission Inquiry (11 Steps)</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        <!-- 2-Column Main Contact & Booking Layout -->
        <div class="contact-redesign-layout">
          
          <!-- Left Column: Interactive 1-on-1 Mentorship Booking Card -->
          <div class="mentorship-booking-card">
            
            <div class="booking-card-top">
              <div class="mentor-badge-row">
                <span class="badge-slot-pill">⭐ 1-on-1 Strategy Session</span>
                <span class="badge-free-pill">100% Free • No Charges</span>
              </div>
              <h2 class="booking-headline">Book Free 30-Min MBA Mentorship Call</h2>
              <p class="booking-subtext">
                Speak directly with an IIM or XLRI alumnus mentor to review your profile, evaluate composite score cutoffs, and map your exam strategy.
              </p>
              
              <!-- Mentor Proof Bar -->
              <div class="mentor-proof-bar">
                <div class="mentor-avatars">
                  <div class="avatar-circle">IIM-A</div>
                  <div class="avatar-circle">XLRI</div>
                  <div class="avatar-circle">IIM-C</div>
                  <div class="avatar-circle">FMS</div>
                </div>
                <div class="mentor-proof-text">
                  <strong>Senior Mentors Panel</strong>
                  <span>Alumni with 8+ years MBA advisory expertise</span>
                </div>
              </div>

              <!-- Immediate Helpline Callout -->
              <div class="mentor-instant-callout" style="margin-top: 14px; padding: 10px 14px; background: #EDE7FE; border: 1px solid rgba(107, 44, 245, 0.2); border-radius: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                <div style="font-size: 0.86rem; color: #14103A; font-weight: 600;">
                  Need answers right now? Call mentor helpline: <a href="tel:8800126446" style="color: #6B2CF5; font-weight: 800; text-decoration: none; font-family: var(--font-mono, monospace);">+91 88001 26446</a>
                </div>
                <div style="display: flex; gap: 8px;">
                  <a href="tel:8800126446" style="padding: 6px 12px; background: #6B2CF5; color: #fff; border-radius: 6px; font-size: 0.8rem; font-weight: 700; text-decoration: none;">
                    📞 Call 8800126446
                  </a>
                  <a href="https://wa.me/918800126446?text=Hi%20Mentor%2C%20I%20am%20looking%20for%20MBA%20admission%20guidance" target="_blank" rel="noopener noreferrer" style="padding: 6px 12px; background: #25D366; color: #fff; border-radius: 6px; font-size: 0.8rem; font-weight: 700; text-decoration: none;">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <!-- Booking Form -->
            <form class="mentorship-form-redesign" id="mentorshipBookingForm">
              
              <div class="form-grid-2">
                <div class="form-field-group">
                  <label for="mentorName">Full Name *</label>
                  <div class="input-icon-wrap">
                    <svg class="input-svg-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input type="text" id="mentorName" placeholder="e.g. Aryan Sharma" required class="form-input" />
                  </div>
                </div>

                <div class="form-field-group">
                  <label for="mentorPhone">WhatsApp / Mobile Number *</label>
                  <div class="input-icon-wrap">
                    <span class="country-prefix">+91</span>
                    <input type="tel" id="mentorPhone" pattern="[0-9]{10}" placeholder="9876543210" required class="form-input with-prefix" />
                  </div>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-field-group">
                  <label for="mentorEmail">Email Address *</label>
                  <div class="input-icon-wrap">
                    <svg class="input-svg-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <input type="email" id="mentorEmail" placeholder="aryan.sharma@example.com" required class="form-input" />
                  </div>
                </div>

                <div class="form-field-group">
                  <label for="mentorTargetExam">Primary Target Exam *</label>
                  <div class="input-icon-wrap">
                    <svg class="input-svg-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    <select id="mentorTargetExam" class="form-select" required>
                      <option value="CAT">CAT 2026 (IIMs / FMS / SPJIMR • Session 2027-29)</option>
                      <option value="XAT">XAT 2027 (XLRI Jamshedpur • Session 2027-29)</option>
                      <option value="SNAP">SNAP 2026 (SIBM / SCMHRD • Session 2027-29)</option>
                      <option value="NMAT">NMAT by GMAC (NMIMS Mumbai)</option>
                      <option value="CMAT">CMAT 2027 (JBIMS / GIM • Session 2027-29)</option>
                      <option value="MHCET">MAH MBA CET 2027 (Mumbai / Pune)</option>
                      <option value="CUETPG">CUET PG (TISS Mumbai)</option>
                      <option value="MAT">MAT / ATMA 2026-27</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-field-group">
                  <label for="mentorStream">Academic Background</label>
                  <select id="mentorStream" class="form-select">
                    <option value="engineering">Engineering (B.Tech / B.E.)</option>
                    <option value="commerce">Commerce / Economics (B.Com / BBA)</option>
                    <option value="science">Sciences (B.Sc / BCA / Biotech)</option>
                    <option value="arts">Arts / Humanities / Law</option>
                    <option value="medical">Medical / Pharmacy / Others</option>
                  </select>
                </div>

                <div class="form-field-group">
                  <label for="mentorWorkEx">Work Experience</label>
                  <select id="mentorWorkEx" class="form-select">
                    <option value="fresher">Fresher (Final Year / Graduate)</option>
                    <option value="1-2">1 - 2 Years</option>
                    <option value="2-3">2 - 3 Years (Optimal IIM Composite)</option>
                    <option value="3+">3+ Years (Executive / PGPX Target)</option>
                  </select>
                </div>
              </div>

              <!-- Time Slot Selector -->
              <div class="form-field-group">
                <div class="slot-label-row">
                  <label>Select Preferred 30-Min Mentorship Slot *</label>
                  <span class="slot-hint">Google Meet / Phone Call</span>
                </div>
                <div class="slot-buttons-grid">
                  <button type="button" class="slot-btn active" data-slot="Tomorrow 11:00 AM">
                    <span class="slot-day">Tomorrow</span>
                    <span class="slot-time">11:00 AM</span>
                  </button>
                  <button type="button" class="slot-btn" data-slot="Tomorrow 03:00 PM">
                    <span class="slot-day">Tomorrow</span>
                    <span class="slot-time">03:00 PM</span>
                  </button>
                  <button type="button" class="slot-btn" data-slot="Tomorrow 07:00 PM">
                    <span class="slot-day">Tomorrow</span>
                    <span class="slot-time">07:00 PM</span>
                  </button>
                  <button type="button" class="slot-btn" data-slot="Saturday 11:00 AM">
                    <span class="slot-day">Saturday</span>
                    <span class="slot-time">11:00 AM</span>
                  </button>
                  <button type="button" class="slot-btn" data-slot="Saturday 04:00 PM">
                    <span class="slot-day">Saturday</span>
                    <span class="slot-time">04:00 PM</span>
                  </button>
                  <button type="button" class="slot-btn" data-slot="Sunday 12:00 PM">
                    <span class="slot-day">Sunday</span>
                    <span class="slot-time">12:00 PM</span>
                  </button>
                </div>
              </div>

              <!-- Doubts / Notes -->
              <div class="form-field-group">
                <label for="mentorNotes">Target B-Schools or Specific Preparation Doubts</label>
                <textarea id="mentorNotes" rows="3" placeholder="e.g. Evaluating my chances for SPJIMR & MDI Gurgaon with 8/8/7 profile and non-engineer background..." class="form-textarea"></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="booking-submit-btn" id="submitBookingBtn">
                <span>Confirm 1-on-1 Mentorship Call</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              
              <div class="form-guarantee-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C795" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Zero Spam Guarantee • Your details are strictly confidential and never shared with telemarketers.</span>
              </div>
            </form>

            <!-- Success Box -->
            <div class="booking-success-box" id="bookingSuccessBox" style="display: none;">
              <div class="success-icon-wrap">🎉</div>
              <h3 class="success-title">Mentorship Session Confirmed!</h3>
              <p class="success-msg" id="bookingSuccessMsg">
                We have reserved your slot for <strong>Tomorrow 11:00 AM</strong>. You will receive an invite on WhatsApp and Email along with a preparatory profile evaluation sheet.
              </p>
              <div class="success-actions">
                <button type="button" class="btn-reschedule" onclick="document.getElementById('bookingSuccessBox').style.display='none'; document.getElementById('mentorshipBookingForm').style.display='block';">
                  Book Another Session
                </button>
                <a href="https://wa.me/918800126446?text=Hi%20FindMyBSchool%20Team%2C%20I%20just%20booked%20a%20mentorship%20call.%20Looking%20forward%20to%20connecting!" target="_blank" class="btn-whatsapp-confirm">
                  <span>Confirm on WhatsApp</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

          </div>

          <!-- Right Column: Official Helpline & Advisory Trust Center (NO regional office hub!) -->
          <div class="contact-sidebar-redesign">
            
            <!-- Widget 1: Direct Support Card -->
            <div class="sidebar-action-card">
              <div class="action-card-header">
                <div class="action-header-badge">
                  <span class="live-blink"></span>
                  <span>Advisors Online Now</span>
                </div>
                <h3 class="action-card-title">Need Immediate Admission Answers?</h3>
                <p class="action-card-sub">
                  Don't want to wait for an appointment? Connect directly with our on-duty MBA counselor right away.
                </p>
              </div>

              <div class="action-buttons-stack">
                <a href="tel:8800126446" class="btn-action-primary">
                  <div class="btn-action-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div class="btn-action-text">
                    <span class="action-label">Call Official Number</span>
                    <strong class="action-val">+91 88001 26446</strong>
                  </div>
                </a>

                <a href="https://wa.me/918800126446?text=Hi%20FindMyBSchool%20Team%2C%20I%20need%20urgent%20help%20with%20MBA%20admissions" target="_blank" rel="noopener noreferrer" class="btn-action-whatsapp">
                  <div class="btn-action-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/></svg>
                  </div>
                  <div class="btn-action-text">
                    <span class="action-label">WhatsApp Counselors</span>
                    <strong class="action-val">Chat on WhatsApp</strong>
                  </div>
                </a>
              </div>

              <div class="action-card-footer">
                <span class="dot-indicator"></span>
                <span>Average Call Pickup: <strong>under 45 seconds</strong></span>
              </div>
            </div>

            <!-- Widget 2: FindMyBSchool Advisory Code of Ethics -->
            <div class="sidebar-ethics-card">
              <h3 class="ethics-heading">Why 45,000+ Aspirants Trust Us</h3>
              
              <div class="ethics-item">
                <div class="ethics-icon">🎯</div>
                <div class="ethics-details">
                  <h4>100% Unbiased College Advisory</h4>
                  <p>We do not promote lower-tier private universities for commissions. Every recommendation matches your genuine percentile and budget.</p>
                </div>
              </div>

              <div class="ethics-item">
                <div class="ethics-icon">📊</div>
                <div class="ethics-details">
                  <h4>Audited Placements & Real Fees</h4>
                  <p>All salary statistics, ROI figures, and hostel fees are cross-verified with official NIRF disclosures and audited placement reports.</p>
                </div>
              </div>

              <div class="ethics-item">
                <div class="ethics-icon">🛡️</div>
                <div class="ethics-details">
                  <h4>Strict Zero-Spam Protection</h4>
                  <p>Your phone number and academic profile remain strictly encrypted. We will never sell your information to telemarketing agencies.</p>
                </div>
              </div>

              <div class="ethics-item">
                <div class="ethics-icon">⚡</div>
                <div class="ethics-details">
                  <h4>Rapid Grievance & Escalation Desk</h4>
                  <p>Any query or grievance directed to our counseling desk receives a documented review within 2 to 4 business hours.</p>
                </div>
              </div>
            </div>

            <!-- Widget 3: Central Admissions Office & Support Hours -->
            <div class="sidebar-office-card">
              <h3 class="office-heading">Official Admissions Desk & Support Hours</h3>
              
              <div class="office-row">
                <span class="office-icon">🏢</span>
                <div class="office-info">
                  <strong>National Admissions Secretariat</strong>
                  <span>Barakhamba Road, Connaught Place, New Delhi - 110001, India</span>
                </div>
              </div>

              <div class="office-row">
                <span class="office-icon">⏰</span>
                <div class="office-info">
                  <strong>Helpline Working Hours</strong>
                  <span>Mon – Sat: 9:00 AM – 8:00 PM IST<br>Sunday: 10:00 AM – 5:00 PM IST (WhatsApp Only)</span>
                </div>
              </div>

              <div class="office-row">
                <span class="office-icon">✉️</span>
                <div class="office-info">
                  <strong>Official Emails</strong>
                  <span>Founder Desk: <a href="mailto:founder@findmybschool.com" class="office-link">founder@findmybschool.com</a></span>
                  <span>Admissions: <a href="mailto:admissions@findmybschool.com" class="office-link">admissions@findmybschool.com</a></span>
                  <span>Grievances: <a href="mailto:grievance@findmybschool.com" class="office-link">grievance@findmybschool.com</a></span>
                </div>
              </div>
            </div>

            <!-- Widget 4: AdmitIQ AI Assistant Callout -->
            <div class="sidebar-ai-callout">
              <div class="ai-callout-header">
                <span class="ai-sparkle">✨</span>
                <strong>AdmitIQ AI Profile Engine</strong>
              </div>
              <p>Want instant cutoff predictions at 2 AM? Our AI evaluator is available 24/7 to benchmark your composite score.</p>
              <a href="/ai-chat" data-route="ai-chat" class="ai-callout-link">
                <span>Evaluate Profile with AI</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

          </div>

        </div>

      </div>

      <!-- FAQ Section -->
      <section class="section faq-section-redesign">
        <div class="section-container">
          <div class="section-title-center">
            <span class="section-tag-pill">❓ Aspirant Helpdesk FAQs</span>
            <h2 class="faq-main-title">Frequently Asked Questions</h2>
            <p class="faq-main-desc">Clear, candid answers regarding MBA counseling, cutoffs, and our official admissions helpline.</p>
          </div>

          <div class="faq-accordion-list">
            
            <div class="faq-item">
              <button class="faq-question">
                <span>What is the official contact number and support timing for FindMyBSchool?</span>
                <span class="faq-chevron">+</span>
              </button>
              <div class="faq-answer">
                <p>The official admissions helpline for FindMyBSchool is <strong>+91 88001 26446</strong>. You can call or WhatsApp our senior counseling desk from <strong>Monday to Saturday between 9:00 AM and 8:00 PM IST</strong>. Our dedicated email support and founder desk is available at <strong>founder@findmybschool.com</strong> / <strong>admissions@findmybschool.com</strong> with responses within 2 to 4 hours.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Is the 1-on-1 MBA admissions counseling really 100% free?</span>
                <span class="faq-chevron">+</span>
              </button>
              <div class="faq-answer">
                <p>Yes, absolutely. Our initial 30-minute 1-on-1 strategy call, college shortlist generation, and cutoff evaluations are <strong>100% free with zero hidden charges</strong>. We believe every aspirant deserves objective, transparent data without paying exorbitant consultation fees.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Can freshers without work experience convert top IIMs (Ahmedabad, Bangalore, Calcutta)?</span>
                <span class="faq-chevron">+</span>
              </button>
              <div class="faq-answer">
                <p>Yes, absolutely! Between 30% to 35% of the incoming batch at IIM Ahmedabad and IIM Calcutta are freshers. However, freshers must compensate for the absence of work-experience points by maintaining high graduation scores (80%+) and scoring a 99.6+ percentile in CAT (for engineers) or 98.5+ percentile (for non-engineers).</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>How much does Non-Engineering Academic Diversity help in CAT admissions?</span>
                <span class="faq-chevron">+</span>
              </button>
              <div class="faq-answer">
                <p>Academic diversity provides a massive competitive advantage. At IIM Ahmedabad, Bangalore, Lucknow, and Kozhikode, candidates from Commerce, Arts, Law, and Sciences receive 3 to 5 direct points in their preliminary composite score. Furthermore, minimum percentile cutoff percentiles for Non-Engineers are consistently 1.5 to 2 percentile points lower than those for General Engineering Males (GEM).</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Should I quit my job to prepare for CAT full-time?</span>
                <span class="faq-chevron">+</span>
              </button>
              <div class="faq-answer">
                <p>In 90% of cases, <strong>NO</strong>. Having an active job provides psychological security during mock fluctuations, awards you crucial work-experience points (up to 10-15% weightage in IIM selection), and prevents interview panels from grilling you on employment gaps. 2.5 hours of disciplined study on weekdays and 6 hours on weekends is more than sufficient.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>What is the actual difference between CAT and XAT difficulty?</span>
                <span class="faq-chevron">+</span>
              </button>
              <div class="faq-answer">
                <p>While CAT tests high-speed set selection across VARC, DILR, and QA in 120 minutes with sectional timers, XAT provides 175 minutes for Part 1 without individual sectional timers. XAT Verbal contains critical reasoning and poem comprehension, and includes the distinctive Decision Making section testing ethical and managerial judgment.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Toast Container for Copy Feedback -->
      <div id="contactToast" class="contact-toast">
        <span class="toast-icon">✓</span>
        <span class="toast-text">Copied +91 88001 26446 to clipboard!</span>
      </div>

    </div>
  `;
}
