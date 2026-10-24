import { fireConfetti } from '../utils/confettiHelper.js';
import { sendLeadToCRM } from '../utils/crm.js';
import { trackBrochureDownload } from '../utils/analytics.js';

export async function openCollegeDetail(college, initialTab = 'overview') {
  const detailOverlay = document.getElementById('portalDetailModalOverlay');
  const detailDialog = document.getElementById('portalDetailModalDialog');
  if (!detailOverlay || !detailDialog || !college) return;

  const { renderCollegeDetailModalContent } = await import('../pages/colleges.js');
  detailDialog.innerHTML = renderCollegeDetailModalContent(college, initialTab);
  detailOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  detailDialog.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      detailDialog.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      detailDialog.querySelectorAll('.modal-tab-pane').forEach(pane => pane.classList.remove('active'));
      const activePane = detailDialog.querySelector(`#tab-${targetTab}`);
      if (activePane) activePane.classList.add('active');
    });
  });

  const closeBtn = document.getElementById('closeDetailModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeCollegeDetail);

  detailDialog.querySelectorAll('[data-ask-ai]').forEach(aiBtn => {
    aiBtn.addEventListener('click', () => {
      const colName = aiBtn.getAttribute('data-ask-ai');
      closeCollegeDetail();
      window.location.href = `/ai-chat?query=${encodeURIComponent(`Tell me about ${colName} - admissions, cutoffs, and placements`)}`;
    });
  });

  detailDialog.querySelectorAll('[data-brochure-college], [data-apply-college]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeCollegeDetail();
      openBrochureModal(college);
    });
  });
}

export function closeCollegeDetail() {
  const detailOverlay = document.getElementById('portalDetailModalOverlay');
  if (detailOverlay) detailOverlay.style.display = 'none';
  document.body.style.overflow = '';
}

export async function openBrochureModal(college) {
  const brochureOverlay = document.getElementById('portalBrochureModalOverlay');
  const brochureDialog = document.getElementById('portalBrochureModalDialog');
  if (!brochureOverlay || !brochureDialog || !college) return;

  const { renderBrochureModalContent } = await import('../pages/colleges.js');
  brochureDialog.innerHTML = renderBrochureModalContent(college);
  brochureOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('closeBrochureModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeBrochureModal);

  const form = document.getElementById('brochureEnquiryForm') || document.getElementById('brochureForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = document.getElementById('brochureFullName')?.value || '';
      const mobile = document.getElementById('brochureMobile')?.value || '';
      const email = document.getElementById('brochureEmail')?.value || '';
      const percentile = document.getElementById('brochurePercentile')?.value || '';
      const year = document.getElementById('brochureYear')?.value || '2027-29';

      trackBrochureDownload(college.id, college.name);

      sendLeadToCRM({
        name: fullName,
        email,
        phone: mobile,
        message: `Official Brochure Request for ${college?.name || 'College'} (Batch: ${year}, %ile: ${percentile || 'N/A'})`,
        form_name: `Brochure Request (${college?.shortName || college?.name || 'MBA'})`,
        source: `College Brochure Modal - ${college?.name || 'Portal'}`,
        custom_fields: {
          collegeId: college?.id,
          collegeName: college?.name,
          targetBatch: year,
          expectedPercentile: percentile,
        },
      }).catch(() => {});

      fireConfetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      const container = document.getElementById('brochureFormContainer');
      if (container) {
        container.innerHTML = `
          <div class="brochure-success-state">
            <div class="success-icon">🎉</div>
            <h3>Official 2027-29 Brochure Dispatched!</h3>
            <p>We've sent the complete fee breakdown, syllabus, and placement audited report of <strong>${college.shortName || college.name}</strong> to your email.</p>
            <button class="btn-primary-pill" id="closeSuccessBrochureBtn">Done</button>
          </div>
        `;
        document.getElementById('closeSuccessBrochureBtn')?.addEventListener('click', closeBrochureModal);
      }
    });
  }
}

export function closeBrochureModal() {
  const brochureOverlay = document.getElementById('portalBrochureModalOverlay');
  if (brochureOverlay) brochureOverlay.style.display = 'none';
  document.body.style.overflow = '';
}

// Global window helpers for backdrop clicks and cross-module triggers
if (typeof window !== 'undefined') {
  window.openCollegeDetailModal = openCollegeDetail;
  window.openCollegeBrochureModal = openBrochureModal;
  window.closeCollegeDetailModal = closeCollegeDetail;
  window.closeCollegeBrochureModal = closeBrochureModal;
}
