import { sendLeadToCRM } from '../utils/crm.js';
import { fireConfetti } from '../utils/confettiHelper.js';

export function initContactInteractions() {
  // Slot selection buttons
  const slotBtns = document.querySelectorAll('.slot-btn');
  let selectedSlot = 'Tomorrow 11:00 AM';

  slotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slotBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSlot = btn.getAttribute('data-slot');
    });
  });

  // Copy Official Number Button
  const copyBtn = document.getElementById('copyPhoneBtn');
  const contactToast = document.getElementById('contactToast');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const copyText = copyBtn.querySelector('.copy-text');
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText('8800126446');
        } else {
          const tempInput = document.createElement('input');
          tempInput.value = '8800126446';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        if (copyText) copyText.textContent = 'Copied!';
        if (contactToast) {
          contactToast.classList.add('show');
          setTimeout(() => {
            contactToast.classList.remove('show');
            if (copyText) copyText.textContent = 'Copy';
          }, 2500);
        }
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  }

  // Mentorship Form Submit
  const bookingForm = document.getElementById('mentorshipBookingForm');
  const successBox = document.getElementById('bookingSuccessBox');
  const successMsg = document.getElementById('bookingSuccessMsg');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('mentorName')?.value || 'Aspirant';
      const phone = document.getElementById('mentorPhone')?.value || '';
      const email = document.getElementById('mentorEmail')?.value || '';
      const exam = document.getElementById('mentorTargetExam')?.value || 'CAT';
      const stream = document.getElementById('mentorStream')?.value || '';
      const workEx = document.getElementById('mentorWorkEx')?.value || '';
      const notes = document.getElementById('mentorNotes')?.value || '';

      // Direct Ingestion to CRM with real-time sync
      sendLeadToCRM({
        name,
        email,
        phone,
        message: `1-on-1 Mentorship Booking for ${exam} (${selectedSlot}). Stream: ${stream}, WorkEx: ${workEx}. Notes: ${notes}`,
        form_name: 'Mentorship 1-on-1 Strategy Call',
        source: 'Contact Page Redesign',
        custom_fields: {
          targetExam: exam,
          academicStream: stream,
          workExperience: workEx,
          bookedSlot: selectedSlot,
          aspirantNotes: notes,
        },
      }).catch((err) => console.warn('[CRM Mentorship Sync Notice]', err));

      bookingForm.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
        if (successMsg) {
          successMsg.innerHTML = `
            Dear <strong>${name}</strong>, your 1-on-1 MBA admissions strategy call for <strong>${exam}</strong> is confirmed for <strong>${selectedSlot}</strong>. We've sent the Google Meet link and preparatory checklist to your WhatsApp & Email!
          `;
        }
      }

      try {
        if (typeof confetti === 'function') {
          fireConfetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
      } catch (err) {}
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const qBtn = item.querySelector('.faq-question');
    if (qBtn) {
      qBtn.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });
}