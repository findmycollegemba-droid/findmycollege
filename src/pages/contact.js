export function renderContactPage() {
  return `
    <div class="page-contact">
      <!-- Contact Hero -->
      <section class="contact-hero">
        <div class="section-container">
          <div class="hero-badge-pill">
            <span class="pulse-indicator"></span>
            <span class="badge-text">📞 1-on-1 Mentorship & Admissions Hub</span>
          </div>
          <h1 class="page-title">Connect with MBA Admission Mentors</h1>
          <p class="page-subtitle">
            Get your profile audited by IIM and XLRI alumni, plan your exam strategy, or book a free 30-minute counseling session.
          </p>
        </div>
      </section>

      <div class="section-container contact-layout">
        <!-- Left: Interactive Mentorship Slot Booking -->
        <div class="contact-main-card">
          <div class="booking-card-header">
            <div class="header-icon-box">📅</div>
            <div>
              <h2 class="booking-card-title">Book Free 30-Min MBA Mentorship Call</h2>
              <p class="booking-card-sub">Slots available for tomorrow with senior B-School admissions mentors.</p>
            </div>
          </div>

          <form class="mentorship-form" id="mentorshipBookingForm">
            <div class="form-row-2">
              <div class="form-group">
                <label>Full Name *</label>
                <input type="text" id="mentorName" placeholder="e.g. Aryan Sharma" required class="input-text" />
              </div>
              <div class="form-group">
                <label>WhatsApp / Phone Number *</label>
                <input type="tel" id="mentorPhone" placeholder="+91 98765 43210" required class="input-text" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label>Email Address *</label>
                <input type="email" id="mentorEmail" placeholder="aryan@example.com" required class="input-text" />
              </div>
              <div class="form-group">
                <label>Primary Target Exam *</label>
                <select id="mentorTargetExam" class="styled-select" required>
                  <option value="CAT">CAT 2026 (IIMs / FMS / SPJIMR)</option>
                  <option value="XAT">XAT 2027 (XLRI Jamshedpur)</option>
                  <option value="SNAP">SNAP 2026 (SIBM / SCMHRD)</option>
                  <option value="NMAT">NMAT by GMAC (NMIMS Mumbai)</option>
                  <option value="CMAT">CMAT 2026 (JBIMS / GIM)</option>
                  <option value="MHCET">MAH MBA CET 2026</option>
                  <option value="CUETPG">CUET PG (TISS Mumbai)</option>
                </select>
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label>Academic Background</label>
                <select id="mentorStream" class="styled-select">
                  <option value="engineering">Engineering (B.Tech / B.E.)</option>
                  <option value="commerce">Commerce / Economics (B.Com / BBA)</option>
                  <option value="science">Sciences (B.Sc / BCA / Biotech)</option>
                  <option value="arts">Arts / Humanities / Law</option>
                  <option value="medical">Medical / Pharmacy</option>
                </select>
              </div>
              <div class="form-group">
                <label>Work Experience</label>
                <select id="mentorWorkEx" class="styled-select">
                  <option value="fresher">Fresher (Final year or graduate)</option>
                  <option value="1-2">1 - 2 Years</option>
                  <option value="2-3">2 - 3 Years (Sweet spot)</option>
                  <option value="3+">3+ Years</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>Select Preferred Mentorship Time Slot *</label>
              <div class="slot-buttons-grid">
                <button type="button" class="slot-btn active" data-slot="Tomorrow 11:00 AM">Tomorrow 11:00 AM</button>
                <button type="button" class="slot-btn" data-slot="Tomorrow 03:00 PM">Tomorrow 03:00 PM</button>
                <button type="button" class="slot-btn" data-slot="Tomorrow 07:00 PM">Tomorrow 07:00 PM</button>
                <button type="button" class="slot-btn" data-slot="Saturday 11:00 AM">Saturday 11:00 AM</button>
                <button type="button" class="slot-btn" data-slot="Saturday 04:00 PM">Saturday 04:00 PM</button>
                <button type="button" class="slot-btn" data-slot="Sunday 12:00 PM">Sunday 12:00 PM</button>
              </div>
            </div>

            <div class="form-group">
              <label>Your Top Doubt or Target B-Schools</label>
              <textarea id="mentorNotes" rows="3" placeholder="e.g. Need help with DILR strategy and evaluating my IIM Bangalore composite score..." class="input-textarea"></textarea>
            </div>

            <button type="submit" class="btn-gradient-pill full-width-btn" id="submitBookingBtn">
              <span>Confirm Free Mentorship Call</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>

          <!-- Success Alert -->
          <div class="booking-success-box" id="bookingSuccessBox" style="display: none;">
            <div class="success-icon-wrap">🎉</div>
            <h3 class="success-title">Mentorship Session Confirmed!</h3>
            <p class="success-msg" id="bookingSuccessMsg">
              We have reserved your slot for <strong>Tomorrow 11:00 AM</strong>. You will receive an invite on your WhatsApp and Email along with a preparatory profile evaluation sheet.
            </p>
            <button class="btn-secondary-pill btn-sm" onclick="document.getElementById('bookingSuccessBox').style.display='none'">Book Another Slot</button>
          </div>
        </div>

        <!-- Right: Counseling Centers & Quick Contacts -->
        <div class="contact-sidebar">
          <!-- WhatsApp Quick Connect -->
          <div class="sidebar-box whatsapp-box">
            <div class="sidebar-box-icon">💬</div>
            <h3>Instant WhatsApp Helpdesk</h3>
            <p>Have an urgent query regarding exam deadlines or forms? Chat with our admission counselors directly.</p>
            <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hi%20FindMyCollege%20Team,%20I%20need%20help%20with%20MBA%20Admissions" target="_blank" class="whatsapp-btn">
              <span>Chat on WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>

          <!-- Regional Counseling Hubs -->
          <div class="sidebar-box">
            <h3 class="sidebar-heading">Regional Counseling Hubs</h3>
            <div class="hub-item">
              <div class="hub-city">🏛️ Delhi-NCR Center</div>
              <div class="hub-address">Barakhamba Road, Connaught Place, New Delhi - 110001</div>
              <div class="hub-contact">📞 +91 11 4567 8900 • delhi@findmycollege.in</div>
            </div>

            <div class="hub-item">
              <div class="hub-city">🌊 Mumbai Center</div>
              <div class="hub-address">Bandra-Kurla Complex (BKC), Bandra East, Mumbai - 400051</div>
              <div class="hub-contact">📞 +91 22 2654 3210 • mumbai@findmycollege.in</div>
            </div>

            <div class="hub-item">
              <div class="hub-city">🚀 Bengaluru Center</div>
              <div class="hub-address">Indiranagar 100ft Road, Bengaluru, Karnataka - 560038</div>
              <div class="hub-contact">📞 +91 80 4123 4567 • blr@findmycollege.in</div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <section class="section faq-section">
        <div class="section-container">
          <div class="section-title-center">
            <span class="section-tag-pill">❓ Aspirant FAQs</span>
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-desc">Straight answers to common admission and preparation doubts.</p>
          </div>

          <div class="faq-accordion-list">
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
                <p>In 90% of cases, **NO**. Having an active job provides psychological security during mock fluctuations, awards you crucial work-experience points (up to 10-15% weightage in IIM selection), and prevents interview panels from grilling you on employment gaps. 2.5 hours of disciplined study on weekdays and 6 hours on weekends is more than sufficient.</p>
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
    </div>
  `;
}
