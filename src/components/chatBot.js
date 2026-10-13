import { COLLEGES_DATA } from '../data/collegesData.js';
import confetti from 'canvas-confetti';

// State for ChatBot
export const chatBotState = {
  isOpen: false,
  isMinimized: false,
  isExpanded: false,
  soundEnabled: true,
  currentStep: 0, // 0: welcome/name, 1: mobile, 2: email, 3: currentLocation, 4: preferredLocation, 5: program, 6: budget, 7: loan, 8: results/qa
  studentData: {
    name: '',
    mobile: '',
    email: '',
    currentLocation: '',
    preferredLocation: '',
    program: '',
    budget: '',
    budgetLabel: '',
    loanPlanning: '',
    timestamp: null
  },
  messages: [],
  hasStarted: false
};

// Quick Preferred Locations defined by user prompt
const PREFERRED_LOCATIONS = [
  { id: 'delhi ncr', label: 'Delhi NCR', icon: '🏙️' },
  { id: 'jaipur', label: 'Jaipur', icon: '🏰' },
  { id: 'pune', label: 'Pune', icon: '🌿' },
  { id: 'bangalore', label: 'Bangalore', icon: '💻' },
  { id: 'mumbai', label: 'Mumbai', icon: '🌊' },
  { id: 'kolkata', label: 'Kolkata', icon: '🏛️' },
  { id: 'dehradun', label: 'Dehradun', icon: '🌲' },
  { id: 'pan india', label: 'Pan India', icon: '🇮🇳' },
  { id: 'other', label: 'Other Location', icon: '📍' }
];

// Programs defined by user prompt
const PROGRAMS_LIST = [
  { id: 'mba', num: '1', title: 'MBA', desc: 'Master of Business Administration (Degree)', icon: '🎓' },
  { id: 'pgdm', num: '2', title: 'PGDM', desc: 'Post Graduate Diploma in Management (AICTE)', icon: '💼' },
  { id: 'pgpm', num: '3', title: 'PGPM (1 year program)', desc: 'Accelerated Executive / 1-Year Fast Track', icon: '⚡' },
  { id: 'bba', num: '4', title: 'BBA', desc: 'Bachelor of Business Administration (Undergraduate)', icon: '📘' },
  { id: 'online mba', num: '5', title: 'Online MBA', desc: 'UGC-Entitled Flexible Distance/Online Degree', icon: '💻' },
  { id: 'online bba', num: '6', title: 'Online BBA', desc: 'Accredited Online Bachelor Degree', icon: '🌐' },
  { id: 'global mba', num: '7', title: 'Global MBA', desc: 'International Immersion & Dual Degree', icon: '✈️' }
];

// Budget options defined by user prompt
const BUDGET_LIST = [
  { id: 'under-7', max: 7, label: 'Under 7 Lacs', desc: 'High ROI, Central & State Universities' },
  { id: 'under-10', max: 10, label: 'Under 10 Lacs', desc: 'Quality B-Schools & Reputed Institutions' },
  { id: 'under-13', max: 13, label: 'Under 13 Lacs', desc: 'Premier Autonomous & Deemed Universities' },
  { id: 'under-15', max: 15, label: 'Under 15 Lacs', desc: 'Top Tier-2 & Renowned Management Campuses' },
  { id: 'above-15', max: 999, label: '15 Lacs and above', desc: 'Premier IIMs, XLRI, SPJIMR & Global Schools' }
];

// Education Loan options defined by user prompt
const LOAN_OPTIONS = [
  { id: 'self funded', num: '1', title: 'Self Funded', desc: 'Self/Family funding & direct term installments', icon: '💳' },
  { id: 'education loan', num: '2', title: 'Education Loan', desc: 'Pre-approved 0% collateral bank loan assistance', icon: '🏦' }
];

// Play notification sound
function playChatChime() {
  if (!chatBotState.soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

// Generate Chatbot HTML Skeleton
export function renderChatBotWidget() {
  return `
    <div class="fmc-chatbot-root" id="fmcChatbotRoot">
      <!-- Proactive Welcome Greeting Bubble -->
      <div class="fmc-bot-teaser-bubble" id="fmcBotTeaserBubble" style="display:none;">
        <div class="teaser-avatar">🎓</div>
        <div class="teaser-body">
          <div class="teaser-sender">FindMyColleges Admission Counselor</div>
          <p class="teaser-text">👋 Welcome to FindMyColleges! Click here to find your dream college in 2 minutes!</p>
        </div>
        <button class="teaser-close-btn" id="fmcCloseTeaserBtn" title="Dismiss">&times;</button>
      </div>

      <!-- Floating Launcher Button -->
      <button class="fmc-bot-launcher" id="fmcBotLauncher" aria-label="Open FindMyColleges Admission Assistant">
        <span class="launcher-pulse"></span>
        <div class="launcher-icon-wrapper">
          <div class="launcher-avatar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <span class="launcher-badge" id="fmcLauncherBadge">1</span>
        </div>
        <div class="launcher-caption">
          <span class="caption-title">FindMyColleges Bot</span>
          <span class="caption-sub">Instant Shortlist</span>
        </div>
      </button>

      <!-- Expandable Chatbot Window -->
      <div class="fmc-bot-window" id="fmcBotWindow" style="display:none;" role="dialog" aria-modal="true">
        <!-- Chat Header -->
        <div class="fmc-bot-header">
          <div class="fmc-header-info">
            <div class="fmc-header-avatar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div>
              <div class="fmc-header-title-row">
                <h3 class="fmc-header-title">FindMyColleges AI Counselor</h3>
                <span class="fmc-online-tag"><span class="fmc-dot"></span> Live</span>
              </div>
              <p class="fmc-header-subtitle">MBA • PGDM • PGPM • BBA • Online • Global</p>
            </div>
          </div>
          
          <div class="fmc-header-actions">
            <!-- Reset Button -->
            <button class="fmc-head-btn" id="fmcResetChatBtn" title="Restart Consultation">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            </button>
            <!-- Expand Toggle -->
            <button class="fmc-head-btn" id="fmcExpandChatBtn" title="Expand / Shrink">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
            <!-- Close Button -->
            <button class="fmc-head-btn" id="fmcCloseChatBtn" title="Close Chat">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <!-- Progress Step Bar -->
        <div class="fmc-bot-progress-bar">
          <div class="fmc-progress-track">
            <div class="fmc-progress-fill" id="fmcProgressFill" style="width: 12%;"></div>
          </div>
          <div class="fmc-progress-label" id="fmcProgressLabel">Step 1 of 8: Basic Info</div>
        </div>

        <!-- Chat Messages Container -->
        <div class="fmc-bot-messages" id="fmcBotMessages">
          <!-- Dynamic conversation turns injected here -->
        </div>

        <!-- Bottom Input Area -->
        <div class="fmc-bot-input-dock" id="fmcBotInputDock">
          <form class="fmc-bot-form" id="fmcBotInputForm" autocomplete="off">
            <div class="fmc-input-field-wrap">
              <input 
                type="text" 
                id="fmcBotUserInput" 
                class="fmc-bot-input" 
                placeholder="Type your answer..." 
                autocomplete="off"
                required
              />
              <button type="submit" class="fmc-bot-send-btn" id="fmcBotSendBtn" title="Send message">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </button>
            </div>
          </form>
          <div class="fmc-bot-footer-note">
            FindMyColleges Verified Directory • 100% Free Admission Guidance
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize Chatbot logic and event handlers
export function initChatBot() {
  const launcher = document.getElementById('fmcBotLauncher');
  const win = document.getElementById('fmcBotWindow');
  const closeBtn = document.getElementById('fmcCloseChatBtn');
  const expandBtn = document.getElementById('fmcExpandChatBtn');
  const resetBtn = document.getElementById('fmcResetChatBtn');
  const teaser = document.getElementById('fmcBotTeaserBubble');
  const closeTeaserBtn = document.getElementById('fmcCloseTeaserBtn');
  const form = document.getElementById('fmcBotInputForm');
  const input = document.getElementById('fmcBotUserInput');

  if (!launcher || !win) return;

  // Show proactive greeting teaser after 1.5 seconds if never opened
  const hasSeenTeaser = sessionStorage.getItem('fmc_teaser_dismissed');
  if (!hasSeenTeaser && teaser) {
    setTimeout(() => {
      if (!chatBotState.isOpen && teaser) {
        teaser.style.display = 'flex';
        playChatChime();
      }
    }, 1500);
  }

  // Teaser click opens chat
  if (teaser) {
    teaser.addEventListener('click', (e) => {
      if (e.target.closest('#fmcCloseTeaserBtn')) return;
      openChatBot();
      teaser.style.display = 'none';
    });
  }
  if (closeTeaserBtn) {
    closeTeaserBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (teaser) teaser.style.display = 'none';
      sessionStorage.setItem('fmc_teaser_dismissed', 'true');
    });
  }

  // Launcher click
  launcher.addEventListener('click', () => {
    toggleChatBot();
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeChatBot();
    });
  }

  // Expand / shrink button
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      chatBotState.isExpanded = !chatBotState.isExpanded;
      win.classList.toggle('expanded', chatBotState.isExpanded);
    });
  }

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetChatBot();
    });
  }

  // Form submit (Handles text responses: Name, Mobile, Email, Current Location, Manual Location, General QA)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      input.value = '';
      handleUserTextInput(val);
    });
  }

  // Global triggers
  window.openFindMyCollegesChatBot = openChatBot;

  // Delegated click handler for college chat cards
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.fmc-college-chat-card [data-action="detail"]');
    if (detailBtn) {
      e.preventDefault();
      const colId = detailBtn.getAttribute('data-college-id');
      const college = COLLEGES_DATA.find(c => c.id === colId);
      if (college && window.openCollegeDetailModal) {
        window.openCollegeDetailModal(college);
      }
      return;
    }

    const brochureBtn = e.target.closest('.fmc-college-chat-card [data-action="brochure"]');
    if (brochureBtn) {
      e.preventDefault();
      const colId = brochureBtn.getAttribute('data-college-id');
      const college = COLLEGES_DATA.find(c => c.id === colId);
      if (college && window.openCollegeBrochureModal) {
        window.openCollegeBrochureModal(college, chatBotState.studentData);
      }
      return;
    }
  });
}

// Toggle ChatBot Window
export function toggleChatBot() {
  if (chatBotState.isOpen) {
    closeChatBot();
  } else {
    openChatBot();
  }
}

// Open ChatBot
export function openChatBot() {
  const win = document.getElementById('fmcBotWindow');
  const teaser = document.getElementById('fmcBotTeaserBubble');
  const badge = document.getElementById('fmcLauncherBadge');

  if (!win) return;
  chatBotState.isOpen = true;
  win.style.display = 'flex';
  win.classList.add('animate-slide-up');
  if (teaser) teaser.style.display = 'none';
  if (badge) badge.style.display = 'none';

  // If first time open, run the introductory flow
  if (!chatBotState.hasStarted) {
    chatBotState.hasStarted = true;
    startConversationFlow();
  } else {
    scrollMessagesToBottom();
    focusCurrentInput();
  }
}

// Close ChatBot
export function closeChatBot() {
  const win = document.getElementById('fmcBotWindow');
  if (!win) return;
  chatBotState.isOpen = false;
  win.style.display = 'none';
}

// Reset ChatBot
export function resetChatBot() {
  chatBotState.currentStep = 0;
  chatBotState.studentData = {
    name: '',
    mobile: '',
    email: '',
    currentLocation: '',
    preferredLocation: '',
    program: '',
    budget: '',
    budgetLabel: '',
    loanPlanning: '',
    timestamp: null
  };
  chatBotState.messages = [];
  const container = document.getElementById('fmcBotMessages');
  if (container) container.innerHTML = '';
  startConversationFlow();
}

// Scroll messages to bottom smoothly
function scrollMessagesToBottom() {
  const container = document.getElementById('fmcBotMessages');
  if (container) {
    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 50);
  }
}

// Focus the active input
function focusCurrentInput() {
  const input = document.getElementById('fmcBotUserInput');
  if (input && chatBotState.isOpen) {
    setTimeout(() => input.focus(), 150);
  }
}

// Append a message bubble to UI
function appendMessage(sender, htmlContent, isCustomCard = false) {
  const container = document.getElementById('fmcBotMessages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `fmc-msg-row ${sender === 'bot' ? 'bot-row' : 'user-row'}`;
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (sender === 'bot') {
    msgDiv.innerHTML = `
      <div class="fmc-msg-avatar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>
      <div class="fmc-msg-content">
        <div class="fmc-msg-bubble ${isCustomCard ? 'custom-card-bubble' : ''}">
          ${htmlContent}
        </div>
        <span class="fmc-msg-time">${time}</span>
      </div>
    `;
    playChatChime();
  } else {
    msgDiv.innerHTML = `
      <div class="fmc-msg-content user-align">
        <div class="fmc-msg-bubble user-bubble">
          ${htmlContent}
        </div>
        <span class="fmc-msg-time">${time}</span>
      </div>
      <div class="fmc-msg-avatar user-avatar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    `;
  }

  container.appendChild(msgDiv);
  scrollMessagesToBottom();
}

// Show typing indicator
function showTypingIndicator(callback, delay = 600) {
  const container = document.getElementById('fmcBotMessages');
  if (!container) {
    if (callback) callback();
    return;
  }

  const typingDiv = document.createElement('div');
  typingDiv.className = 'fmc-msg-row bot-row fmc-typing-indicator';
  typingDiv.id = 'fmcActiveTyping';
  typingDiv.innerHTML = `
    <div class="fmc-msg-avatar">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    </div>
    <div class="fmc-msg-content">
      <div class="fmc-msg-bubble typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  container.appendChild(typingDiv);
  scrollMessagesToBottom();

  setTimeout(() => {
    const existing = document.getElementById('fmcActiveTyping');
    if (existing) existing.remove();
    if (callback) callback();
  }, delay);
}

// Update Progress Bar
function updateProgress(step, label) {
  const fill = document.getElementById('fmcProgressFill');
  const lbl = document.getElementById('fmcProgressLabel');
  const pct = Math.min(100, Math.round(((step + 1) / 8) * 100));
  if (fill) fill.style.width = `${pct}%`;
  if (lbl) lbl.textContent = label || `Step ${Math.min(8, step + 1)} of 8`;
}

// Set Input Dock State (placeholder, type, focus)
function configureInputDock(placeholder, type = 'text', disable = false) {
  const input = document.getElementById('fmcBotUserInput');
  const form = document.getElementById('fmcBotInputForm');
  if (!input || !form) return;
  input.placeholder = placeholder;
  input.type = type;
  input.disabled = disable;
  if (!disable) {
    focusCurrentInput();
  }
}

// -------------------------------------------------------------
// CONVERSATION STATE MACHINE
// -------------------------------------------------------------

// Step 0: Welcome Message & Ask Name
function startConversationFlow() {
  chatBotState.currentStep = 0;
  updateProgress(0, 'Step 1 of 8: Student Name');

  showTypingIndicator(() => {
    appendMessage(
      'bot',
      `
      <div class="fmc-welcome-card">
        <div class="fmc-welcome-badge">🎓 FindMyColleges Admission Counselor</div>
        <h4 class="fmc-welcome-title">Welcome to FindMyColleges! 👋</h4>
        <p class="fmc-welcome-desc">
          I am your personal AI Admission Assistant for the <strong>2026-27 admission cycle</strong>. 
          I will help you discover the perfect colleges tailored to your program, preferred city, and budget in just 2 minutes!
        </p>
        <div class="fmc-highlight-prompt">
          To get started, please tell me: <strong>What is your Full Name?</strong>
        </div>
      </div>
      `
    );
    configureInputDock('Enter your full name (e.g. Rahul Sharma)...', 'text', false);
  }, 400);
}

// Step 1: Ask Mobile Number
function askMobileNumber() {
  chatBotState.currentStep = 1;
  updateProgress(1, 'Step 2 of 8: Mobile Number');

  showTypingIndicator(() => {
    appendMessage(
      'bot',
      `
      <p>Nice to meet you, <strong>${chatBotState.studentData.name}</strong>! 😊</p>
      <p>Could you please share your <strong>Mobile Number</strong>?</p>
      <div class="fmc-subnote">
        📱 We will send your verified college shortlist, cutoff alerts & official brochures on WhatsApp/SMS.
      </div>
      `
    );
    configureInputDock('Enter 10-digit mobile number (e.g. 9876543210)...', 'tel', false);
  }, 450);
}

// Step 2: Ask Email Address
function askEmail() {
  chatBotState.currentStep = 2;
  updateProgress(2, 'Step 3 of 8: Email Address');

  showTypingIndicator(() => {
    appendMessage(
      'bot',
      `
      <p>Great! What is your <strong>Email Address</strong>?</p>
      <div class="fmc-subnote">
        ✉️ Official fee structures, application deadlines & IIM selection criteria will be shared here.
      </div>
      `
    );
    configureInputDock('Enter your email (e.g. name@gmail.com)...', 'email', false);
  }, 450);
}

// Step 3: Ask Current Location
function askCurrentLocation() {
  chatBotState.currentStep = 3;
  updateProgress(3, 'Step 4 of 8: Current Location');

  showTypingIndicator(() => {
    const popularCities = ['Delhi NCR', 'Jaipur', 'Mumbai', 'Pune', 'Bangalore', 'Kolkata', 'Dehradun', 'Lucknow', 'Indore'];
    const chipsHtml = popularCities.map(city => `
      <button type="button" class="fmc-quick-chip" data-current-loc="${city}">
        📍 ${city}
      </button>
    `).join('');

    appendMessage(
      'bot',
      `
      <p>Thanks ${chatBotState.studentData.name}! Where are you currently located?</p>
      <div class="fmc-field-tag">Your Current City / State:</div>
      <div class="fmc-chip-grid" id="currentLocChips">
        ${chipsHtml}
      </div>
      <div class="fmc-subnote" style="margin-top:8px;">
        💡 You can tap any city above or type your current city in the box below.
      </div>
      `,
      true
    );

    // Attach listeners to current location chips
    const chipBox = document.getElementById('currentLocChips');
    if (chipBox) {
      chipBox.querySelectorAll('[data-current-loc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const loc = btn.getAttribute('data-current-loc');
          handleUserTextInput(loc);
        });
      });
    }

    configureInputDock('Type your current city/town...', 'text', false);
  }, 450);
}

// Step 4: Ask Preferred Location (with "Other Location" manual input box)
function askPreferredLocation() {
  chatBotState.currentStep = 4;
  updateProgress(4, 'Step 5 of 8: Preferred Study Location');

  showTypingIndicator(() => {
    const pillsHtml = PREFERRED_LOCATIONS.map(item => `
      <button type="button" class="fmc-pref-loc-btn ${item.id === 'other' ? 'btn-other-loc' : ''}" data-pref-loc="${item.id}">
        <span class="btn-icon">${item.icon}</span>
        <span class="btn-text">${item.label}</span>
      </button>
    `).join('');

    appendMessage(
      'bot',
      `
      <p>Got it! What is your <strong>Preferred Study Location</strong> where you want to pursue your college?</p>
      <div class="fmc-pref-loc-grid" id="prefLocContainer">
        ${pillsHtml}
      </div>

      <!-- Manual Input Box for 'Other Location' -->
      <div class="fmc-manual-loc-card" id="fmcManualLocCard" style="display:none;">
        <div class="manual-loc-title">📍 Type your desired city / location:</div>
        <div class="manual-loc-input-row">
          <input 
            type="text" 
            id="fmcManualLocInput" 
            class="manual-loc-input" 
            placeholder="Type city or state (e.g. Ahmedabad, Hyderabad, Goa, Chandigarh, Chennai...)"
          />
          <button type="button" class="manual-loc-submit-btn" id="fmcManualLocSubmitBtn">
            Confirm Location
          </button>
        </div>
      </div>
      `,
      true
    );

    configureInputDock('Click an option above...', 'text', true);

    // Attach handlers to preferred location buttons
    const container = document.getElementById('prefLocContainer');
    const manualCard = document.getElementById('fmcManualLocCard');
    const manualInput = document.getElementById('fmcManualLocInput');
    const manualSubmit = document.getElementById('fmcManualLocSubmitBtn');

    if (container) {
      container.querySelectorAll('[data-pref-loc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const locId = btn.getAttribute('data-pref-loc');

          if (locId === 'other') {
            // Show the manual input box as requested by user!
            if (manualCard) {
              manualCard.style.display = 'block';
              container.querySelectorAll('[data-pref-loc]').forEach(b => b.classList.remove('selected'));
              btn.classList.add('selected');
              if (manualInput) {
                manualInput.focus();
              }
              scrollMessagesToBottom();
            }
          } else {
            // Standard location picked
            const selectedItem = PREFERRED_LOCATIONS.find(l => l.id === locId);
            const label = selectedItem ? selectedItem.label : locId;
            chatBotState.studentData.preferredLocation = locId;
            appendMessage('user', `📍 Preferred Location: <strong>${label}</strong>`);
            askProgramSelection();
          }
        });
      });
    }

    // Manual location submit
    if (manualSubmit && manualInput) {
      manualSubmit.addEventListener('click', () => {
        const customLoc = manualInput.value.trim();
        if (!customLoc) {
          manualInput.focus();
          return;
        }
        chatBotState.studentData.preferredLocation = customLoc;
        appendMessage('user', `📍 Preferred Location: <strong>${customLoc}</strong>`);
        askProgramSelection();
      });

      manualInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          manualSubmit.click();
        }
      });
    }
  }, 450);
}

// Step 5: Ask Program Selection (7 choices)
function askProgramSelection() {
  chatBotState.currentStep = 5;
  updateProgress(5, 'Step 6 of 8: Program Selection');

  showTypingIndicator(() => {
    const programsHtml = PROGRAMS_LIST.map(p => `
      <button type="button" class="fmc-program-choice-btn" data-program-id="${p.id}" data-program-title="${p.title}">
        <span class="prog-num">${p.num}</span>
        <span class="prog-icon">${p.icon}</span>
        <div class="prog-text-wrap">
          <div class="prog-title">${p.title}</div>
          <div class="prog-desc">${p.desc}</div>
        </div>
        <svg class="prog-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    `).join('');

    appendMessage(
      'bot',
      `
      <p>Which <strong>program</strong> are you planning?</p>
      <div class="fmc-programs-list" id="programChoicesContainer">
        ${programsHtml}
      </div>
      `,
      true
    );

    configureInputDock('Select your desired program above...', 'text', true);

    const container = document.getElementById('programChoicesContainer');
    if (container) {
      container.querySelectorAll('[data-program-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const progId = btn.getAttribute('data-program-id');
          const progTitle = btn.getAttribute('data-program-title');
          chatBotState.studentData.program = progId;
          appendMessage('user', `🎯 Program Selected: <strong>${progTitle}</strong>`);
          askBudgetSelection();
        });
      });
    }
  }, 450);
}

// Step 6: Ask Budget Selection (5 choices)
function askBudgetSelection() {
  chatBotState.currentStep = 6;
  updateProgress(6, 'Step 7 of 8: Budget Confirmation');

  showTypingIndicator(() => {
    const budgetHtml = BUDGET_LIST.map(b => `
      <button type="button" class="fmc-budget-choice-btn" data-budget-id="${b.id}" data-budget-label="${b.label}">
        <div class="budget-top-row">
          <span class="budget-label">💰 ${b.label}</span>
          <span class="budget-badge">Audited Fees</span>
        </div>
        <div class="budget-desc">${b.desc}</div>
      </button>
    `).join('');

    appendMessage(
      'bot',
      `
      <p>Kindly confirm your <strong>budget for the program</strong>:</p>
      <div class="fmc-budget-list" id="budgetChoicesContainer">
        ${budgetHtml}
      </div>
      `,
      true
    );

    configureInputDock('Select your program budget above...', 'text', true);

    const container = document.getElementById('budgetChoicesContainer');
    if (container) {
      container.querySelectorAll('[data-budget-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const bId = btn.getAttribute('data-budget-id');
          const bLabel = btn.getAttribute('data-budget-label');
          chatBotState.studentData.budget = bId;
          chatBotState.studentData.budgetLabel = bLabel;
          appendMessage('user', `💵 Budget: <strong>${bLabel}</strong>`);
          askEducationLoan();
        });
      });
    }
  }, 450);
}

// Step 7: Ask Education Loan Planning (2 choices)
function askEducationLoan() {
  chatBotState.currentStep = 7;
  updateProgress(7, 'Step 8 of 8: Education Loan');

  showTypingIndicator(() => {
    const loanHtml = LOAN_OPTIONS.map(opt => `
      <button type="button" class="fmc-loan-choice-btn" data-loan-id="${opt.id}" data-loan-title="${opt.title}">
        <span class="loan-icon">${opt.icon}</span>
        <div class="loan-text-wrap">
          <div class="loan-title">${opt.num}. ${opt.title}</div>
          <div class="loan-desc">${opt.desc}</div>
        </div>
      </button>
    `).join('');

    appendMessage(
      'bot',
      `
      <p>Are you <strong>planning education through education loan</strong>?</p>
      <div class="fmc-loan-list" id="loanChoicesContainer">
        ${loanHtml}
      </div>
      `,
      true
    );

    configureInputDock('Select funding preference above...', 'text', true);

    const container = document.getElementById('loanChoicesContainer');
    if (container) {
      container.querySelectorAll('[data-loan-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const lId = btn.getAttribute('data-loan-id');
          const lTitle = btn.getAttribute('data-loan-title');
          chatBotState.studentData.loanPlanning = lId;
          appendMessage('user', `🏦 Funding Mode: <strong>${lTitle}</strong>`);
          generateCollegeRecommendations();
        });
      });
    }
  }, 450);
}

// Step 8: Generate College Recommendations from website data
function generateCollegeRecommendations() {
  chatBotState.currentStep = 8;
  updateProgress(8, 'Completed: Your Curated Colleges');

  // Trigger celebration confetti
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  } catch (e) {
    // Canvas confetti optional
  }

  showTypingIndicator(() => {
    const student = chatBotState.studentData;
    student.timestamp = new Date().toISOString();

    // Query matched colleges from COLLEGES_DATA
    const matchedColleges = filterCollegesForStudent(student);

    // Save lead to local storage for portal pre-fills
    try {
      localStorage.setItem('fmc_student_lead', JSON.stringify(student));
    } catch (e) {}

    // 1. Build Student Profile Summary
    const profileSummaryHtml = `
      <div class="fmc-profile-card">
        <div class="profile-card-header">
          <span class="profile-badge">✓ Profile Verified</span>
          <span class="profile-date">Season 2026-27</span>
        </div>
        <div class="profile-grid">
          <div class="profile-item"><strong>Student:</strong> ${student.name}</div>
          <div class="profile-item"><strong>Phone:</strong> ${student.mobile}</div>
          <div class="profile-item"><strong>Email:</strong> ${student.email}</div>
          <div class="profile-item"><strong>Current City:</strong> ${student.currentLocation}</div>
          <div class="profile-item"><strong>Preferred City:</strong> <span class="highlight-val">${formatLocationTitle(student.preferredLocation)}</span></div>
          <div class="profile-item"><strong>Program:</strong> <span class="highlight-val">${student.program.toUpperCase()}</span></div>
          <div class="profile-item"><strong>Budget:</strong> ${student.budgetLabel}</div>
          <div class="profile-item"><strong>Funding:</strong> ${student.loanPlanning === 'education loan' ? '🏦 Education Loan' : '💳 Self Funded'}</div>
        </div>
      </div>
    `;

    // 2. Build Education Loan Assistance Card if Loan Selected
    let loanCardHtml = '';
    if (student.loanPlanning === 'education loan') {
      loanCardHtml = `
        <div class="fmc-loan-assist-card">
          <div class="loan-assist-header">
            <span class="loan-bank-icon">🏦</span>
            <div>
              <div class="loan-assist-title">100% Education Loan Pre-Approval Available</div>
              <div class="loan-assist-sub">Zero Collateral up to ₹40 Lakhs • Starting @ 8.5% p.a.</div>
            </div>
          </div>
          <div class="loan-banks-row">
            <span class="bank-pill">🏛️ SBI Scholar</span>
            <span class="bank-pill">🏦 HDFC Credila</span>
            <span class="bank-pill">💼 Axis Bank</span>
            <span class="bank-pill">⚡ ICICI Bank</span>
          </div>
          <p class="loan-assist-text">
            Based on your budget <strong>(${student.budgetLabel})</strong>, your estimated monthly EMI will be approximately 
            <strong>₹${calculateEstimatedEMI(student.budget)}/month</strong>.
          </p>
          <button type="button" class="fmc-loan-apply-btn" id="fmcLoanApplyBtn">
            Apply for Free Loan Pre-Approval & Assistance →
          </button>
        </div>
      `;
    }

    // 3. Build College Cards
    let collegeCardsHtml = '';
    if (matchedColleges.length > 0) {
      collegeCardsHtml = matchedColleges.slice(0, 8).map(college => `
        <div class="fmc-college-chat-card" data-college-id="${college.id}">
          <div class="col-card-top">
            <div class="col-logo-box">
              <span class="col-badge-symbol">🏛️</span>
            </div>
            <div class="col-title-wrap">
              <div class="col-rank-row">
                <span class="col-nirf-tag">NIRF #${college.nirfRank || 'Top'}</span>
                <span class="col-rating-tag">⭐ ${college.rating || '4.6'}</span>
              </div>
              <h5 class="col-name">${college.name}</h5>
              <div class="col-loc-row">
                <span>📍 ${college.location || college.city}</span>
                <span class="col-dot">•</span>
                <span>🎓 ${college.degreeTypes ? college.degreeTypes.join(', ') : 'MBA / PGDM'}</span>
              </div>
            </div>
          </div>

          <div class="col-stats-strip">
            <div class="col-stat-box">
              <span class="stat-lbl">Tuition Fees</span>
              <span class="stat-val fee-val">${college.fees || `₹${college.feeNum} Lakhs`}</span>
            </div>
            <div class="col-stat-box">
              <span class="stat-lbl">Average CTC</span>
              <span class="stat-val ctc-val">${college.avgSalary || `₹${college.avgSalaryNum} LPA`}</span>
            </div>
            <div class="col-stat-box">
              <span class="stat-lbl">Highest CTC</span>
              <span class="stat-val high-val">${college.highestSalary || '₹28 LPA'}</span>
            </div>
          </div>

          <div class="col-card-actions">
            <button type="button" class="col-btn-view" data-action="detail" data-college-id="${college.id}">
              View Details
            </button>
            <button type="button" class="col-btn-brochure" data-action="brochure" data-college-id="${college.id}">
              Brochure & Apply
            </button>
          </div>
        </div>
      `).join('');
    } else {
      collegeCardsHtml = `
        <div class="fmc-no-colleges-card">
          <p>No exact match in our top list for that specific filter. However, here are India's premier colleges accepting students nationwide:</p>
        </div>
      `;
    }

    // 4. Action bar below results
    const actionToolbarHtml = `
      <div class="fmc-results-toolbar">
        <a href="#colleges" class="fmc-portal-link-btn" id="fmcExplorePortalBtn">
          <span>Explore All 130+ Colleges on Directory</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <button type="button" class="fmc-download-shortlist-btn" id="fmcDownloadShortlistBtn">
          📥 Download My Shortlist
        </button>
        <button type="button" class="fmc-restart-consult-btn" id="fmcRestartConsultBtn">
          🔄 Start New Search
        </button>
      </div>
    `;

    // Render final results message
    appendMessage(
      'bot',
      `
      <div class="fmc-results-wrapper">
        <div class="fmc-results-hero">
          <span class="hero-sparkle">✨</span>
          <div>
            <h4 class="fmc-results-heading">Top Desired Colleges for ${student.name}</h4>
            <p class="fmc-results-sub">
              Found <strong>${matchedColleges.length} top colleges</strong> matching 
              <strong>${student.program.toUpperCase()}</strong> in 
              <strong>${formatLocationTitle(student.preferredLocation)}</strong> within 
              <strong>${student.budgetLabel}</strong>:
            </p>
          </div>
        </div>

        ${profileSummaryHtml}
        ${loanCardHtml}

        <div class="fmc-college-cards-grid">
          ${collegeCardsHtml}
        </div>

        ${actionToolbarHtml}

        <div class="fmc-followup-prompt">
          💬 <em>Have questions about CAT/XAT cutoffs, GD-PI interview preparation, or comparing colleges? Type below to ask FindMyColleges AI!</em>
        </div>
      </div>
      `,
      true
    );

    // Attach event handlers for college cards
    attachResultsEventHandlers(matchedColleges);

    // Switch input dock to open Q&A mode
    configureInputDock('Ask any question (e.g., "What is the cutoff for IIM?", "Compare IIM-A vs XLRI")...', 'text', false);
  }, 700);
}

// Attach interactive handlers to results cards & buttons
function attachResultsEventHandlers(colleges) {
  // Detail buttons
  document.querySelectorAll('.fmc-college-chat-card [data-action="detail"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const colId = btn.getAttribute('data-college-id');
      const college = COLLEGES_DATA.find(c => c.id === colId);
      if (college && window.openCollegeDetailModal) {
        window.openCollegeDetailModal(college);
      } else {
        window.location.hash = `#colleges?id=${colId}`;
      }
    });
  });

  // Brochure buttons
  document.querySelectorAll('.fmc-college-chat-card [data-action="brochure"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const colId = btn.getAttribute('data-college-id');
      const college = COLLEGES_DATA.find(c => c.id === colId);
      if (college && window.openCollegeBrochureModal) {
        window.openCollegeBrochureModal(college, chatBotState.studentData);
      } else {
        window.location.hash = `#colleges?id=${colId}`;
      }
    });
  });

  // Loan apply button
  const loanBtn = document.getElementById('fmcLoanApplyBtn');
  if (loanBtn) {
    loanBtn.addEventListener('click', () => {
      loanBtn.textContent = '✓ Loan Consultation Requested! Our Banking Officer Will Call You.';
      loanBtn.style.background = '#16a34a';
      loanBtn.disabled = true;
      try {
        confetti({ particleCount: 30, spread: 50 });
      } catch (e) {}
    });
  }

  // Download Shortlist button
  const dlBtn = document.getElementById('fmcDownloadShortlistBtn');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      downloadShortlistAsText(chatBotState.studentData, colleges);
    });
  }

  // Restart Consult button
  const restartBtn = document.getElementById('fmcRestartConsultBtn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      resetChatBot();
    });
  }
}

// Download text summary
function downloadShortlistAsText(student, colleges) {
  const lines = [
    `========================================`,
    `FindMyColleges — Personalized Admission Shortlist`,
    `========================================`,
    `Student Name: ${student.name}`,
    `Mobile: ${student.mobile}`,
    `Email: ${student.email}`,
    `Current Location: ${student.currentLocation}`,
    `Preferred Study Location: ${formatLocationTitle(student.preferredLocation)}`,
    `Target Program: ${student.program.toUpperCase()}`,
    `Budget: ${student.budgetLabel}`,
    `Funding Mode: ${student.loanPlanning === 'education loan' ? 'Education Loan' : 'Self Funded'}`,
    `Date Generated: ${new Date().toLocaleString()}`,
    `----------------------------------------`,
    `RECOMMENDED COLLEGES (${colleges.length} Matches):`,
    `----------------------------------------`
  ];

  colleges.forEach((c, idx) => {
    lines.push(
      `${idx + 1}. ${c.name}`,
      `   Location: ${c.location || c.city}`,
      `   Tuition Fees: ${c.fees || `₹${c.feeNum} Lakhs`}`,
      `   Average Salary: ${c.avgSalary || `₹${c.avgSalaryNum} LPA`}`,
      `   NIRF Rank: #${c.nirfRank || 'N/A'} | Rating: ${c.rating || '4.5'}/5`,
      `   Exams Accepted: ${(c.examsAccepted || []).join(', ')}`,
      ``
    );
  });

  lines.push(
    `========================================`,
    `FindMyColleges Admission Support: +91-9876543210`,
    `Website: http://localhost:5173/`,
    `========================================`
  );

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FindMyColleges_Shortlist_${student.name.replace(/\s+/g, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Helper: Filter COLLEGES_DATA based on user's choices
function filterCollegesForStudent(student) {
  let list = [...COLLEGES_DATA];

  // 1. Program Match
  const prog = student.program.toLowerCase();
  list = list.filter(c => {
    const degs = (c.degreeTypes || []).map(d => d.toLowerCase());
    const courses = (c.courses || []).map(crs => crs.name.toLowerCase());
    const progType = (c.programType || '').toLowerCase();

    if (prog === 'mba') {
      return degs.includes('mba') || progType.includes('mba') || courses.some(cs => cs.includes('mba'));
    } else if (prog === 'pgdm') {
      return degs.includes('pgdm') || progType.includes('pgdm') || courses.some(cs => cs.includes('pgdm'));
    } else if (prog === 'pgpm') {
      return degs.includes('pgpm') || progType.includes('pgpm') || courses.some(cs => /pgpm|1[- ]year|executive|pgpx|epgp|mbaex/i.test(cs));
    } else if (prog === 'bba') {
      return degs.includes('bba') || progType.includes('bba') || courses.some(cs => /bba|ipm|undergraduate/i.test(cs));
    } else if (prog === 'online mba') {
      return degs.includes('online mba') || progType.includes('online') || c.name.toLowerCase().includes('online');
    } else if (prog === 'online bba') {
      return degs.includes('online bba') || (degs.includes('bba') && c.name.toLowerCase().includes('online'));
    } else if (prog === 'global mba') {
      return degs.includes('global mba') || progType.includes('global') || courses.some(cs => /global|international|tri-city|escp/i.test(cs));
    }
    return true;
  });

  // 2. Location Match
  const loc = student.preferredLocation.toLowerCase().trim();
  if (loc && loc !== 'pan india') {
    const locFiltered = list.filter(c => {
      const city = (c.city || '').toLowerCase();
      const state = (c.state || '').toLowerCase();
      const location = (c.location || '').toLowerCase();

      if (loc === 'delhi ncr') {
        return city.includes('delhi') || location.includes('delhi') || location.includes('noida') || location.includes('gurgaon') || location.includes('ghaziabad') || location.includes('ncr');
      } else if (loc === 'jaipur') {
        return city.includes('jaipur') || location.includes('jaipur') || state.includes('rajasthan');
      } else if (loc === 'pune') {
        return city.includes('pune') || location.includes('pune');
      } else if (loc === 'bangalore') {
        return city.includes('bengaluru') || city.includes('bangalore') || location.includes('bangalore') || location.includes('bengaluru');
      } else if (loc === 'mumbai') {
        return city.includes('mumbai') || location.includes('mumbai');
      } else if (loc === 'kolkata') {
        return city.includes('kolkata') || location.includes('kolkata');
      } else if (loc === 'dehradun') {
        return city.includes('dehradun') || location.includes('dehradun') || location.includes('roorkee');
      } else {
        // Manual location input
        return city.includes(loc) || location.includes(loc) || state.includes(loc);
      }
    });

    // If matches found for the city, keep them! If no local campus, include top Pan-India options
    if (locFiltered.length > 0) {
      list = locFiltered;
    }
  }

  // 3. Budget Match
  const bObj = BUDGET_LIST.find(b => b.id === student.budget);
  if (bObj) {
    let budgetFiltered = [];
    if (student.budget === 'under-7') {
      budgetFiltered = list.filter(c => c.feeNum <= 7);
    } else if (student.budget === 'under-10') {
      budgetFiltered = list.filter(c => c.feeNum <= 10);
    } else if (student.budget === 'under-13') {
      budgetFiltered = list.filter(c => c.feeNum <= 13);
    } else if (student.budget === 'under-15') {
      budgetFiltered = list.filter(c => c.feeNum <= 15);
    } else if (student.budget === 'above-15') {
      budgetFiltered = list.filter(c => c.feeNum >= 15);
    }

    if (budgetFiltered.length > 0) {
      list = budgetFiltered;
    }
  }

  // Sort by NIRF Rank and rating
  list.sort((a, b) => (a.nirfRank || 999) - (b.nirfRank || 999));

  return list;
}

// Location title formatter
function formatLocationTitle(loc) {
  if (!loc) return 'Pan India';
  if (loc.toLowerCase() === 'delhi ncr') return 'Delhi NCR';
  if (loc.toLowerCase() === 'pan india') return 'Pan India';
  return loc.charAt(0).toUpperCase() + loc.slice(1);
}

// Calculate estimated monthly EMI
function calculateEstimatedEMI(budget) {
  let principal = 1000000; // default 10L
  if (budget === 'under-7') principal = 600000;
  else if (budget === 'under-10') principal = 900000;
  else if (budget === 'under-13') principal = 1200000;
  else if (budget === 'under-15') principal = 1400000;
  else if (budget === 'above-15') principal = 2000000;

  // 8.5% annual interest over 7 years (84 months)
  const r = 8.5 / 12 / 100;
  const n = 84;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi).toLocaleString('en-IN');
}

// Handle User Text Inputs
function handleUserTextInput(text) {
  const step = chatBotState.currentStep;

  if (step === 0) {
    // Step 0: Name input
    if (text.length < 2) {
      appendMessage('user', text);
      showTypingIndicator(() => {
        appendMessage('bot', 'Please enter your full name so we can address you properly:');
        configureInputDock('Enter your full name...', 'text', false);
      }, 300);
      return;
    }
    chatBotState.studentData.name = text;
    appendMessage('user', `My name is <strong>${text}</strong>`);
    askMobileNumber();
  } else if (step === 1) {
    // Step 1: Mobile number validation
    appendMessage('user', text);
    const cleanedPhone = text.replace(/[\s\-\+]/g, '').slice(-10);
    const phoneValid = /^[6-9]\d{9}$/.test(cleanedPhone);

    if (!phoneValid) {
      showTypingIndicator(() => {
        appendMessage(
          'bot', 
          `⚠️ <strong>${text}</strong> doesn't look like a valid 10-digit Indian mobile number. Please enter a valid number (e.g. 9876543210):`
        );
        configureInputDock('Enter 10-digit mobile number...', 'tel', false);
      }, 350);
      return;
    }

    chatBotState.studentData.mobile = cleanedPhone;
    askEmail();
  } else if (step === 2) {
    // Step 2: Email validation
    appendMessage('user', text);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

    if (!emailValid) {
      showTypingIndicator(() => {
        appendMessage(
          'bot',
          `⚠️ Please enter a valid email address so we can send the official brochure (e.g. yourname@gmail.com):`
        );
        configureInputDock('Enter valid email...', 'email', false);
      }, 350);
      return;
    }

    chatBotState.studentData.email = text;
    askCurrentLocation();
  } else if (step === 3) {
    // Step 3: Current location
    chatBotState.studentData.currentLocation = text;
    appendMessage('user', `📍 Current Location: <strong>${text}</strong>`);
    askPreferredLocation();
  } else if (step >= 8) {
    // Step 8+: User asking follow-up questions
    appendMessage('user', text);
    handleCounselorQnA(text);
  }
}

// Counselor AI follow-up response handler
function handleCounselorQnA(userQuestion) {
  showTypingIndicator(() => {
    const q = userQuestion.toLowerCase();
    let reply = '';

    if (q.includes('cutoff') || q.includes('cat') || q.includes('percentile')) {
      reply = `
        <p>🎯 <strong>CAT Cutoff Overview:</strong></p>
        <ul>
          <li><strong>IIM Ahmedabad / Bangalore / Calcutta:</strong> 99.4+ to 99.8+ percentile (General)</li>
          <li><strong>FMS Delhi:</strong> 99.0+ percentile with high VARC sectional weight</li>
          <li><strong>SPJIMR Mumbai:</strong> 85+ percentile for profile-based calls, 96+ percentile for score-based</li>
          <li><strong>MDI Gurgaon / IMT Ghaziabad:</strong> 93-95+ and 90+ percentile</li>
        </ul>
        <p>Would you like to evaluate your specific 10th/12th/Graduation academic profile?</p>
      `;
    } else if (q.includes('compare') || q.includes('difference') || q.includes('vs')) {
      reply = `
        <p>⚖️ <strong>B-School Comparison Insight:</strong></p>
        <p>When comparing programs, prioritize 3 core metrics:</p>
        <ol>
          <li><strong>Audited Median CTC:</strong> Real in-hand salary vs reported highest package.</li>
          <li><strong>Total Investment / ROI:</strong> Tuition + hostel fees vs first-year gross salary.</li>
          <li><strong>Alumni & Recruiter Base:</strong> Number of legacy companies visiting campus annually.</li>
        </ol>
        <p>You can also use our <strong>Compare Tool</strong> in the navigation bar to see side-by-side matrices!</p>
      `;
    } else if (q.includes('loan') || q.includes('bank') || q.includes('emi') || q.includes('interest')) {
      reply = `
        <p>🏦 <strong>Education Loan Guidance:</strong></p>
        <p>Under the Central Government Vidya Lakshmi scheme and SBI Scholar list, premier colleges qualify for <strong>100% tuition + hostel financing without collateral</strong> up to ₹40 Lakhs. Interest rates range between 8.2% and 8.9% with a 1-year post-graduation moratorium period.</p>
        <p>Our counseling desk can directly initiate your bank verification!</p>
      `;
    } else if (q.includes('placement') || q.includes('salary') || q.includes('package')) {
      reply = `
        <p>💼 <strong>Placements Insight:</strong></p>
        <p>Top colleges in your shortlist average <strong>₹18 LPA to ₹35 LPA</strong> for premier institutes, and <strong>₹7 LPA to ₹12 LPA</strong> for high-ROI BBA and regional management hubs. Top recruiting sectors this season are Management Consulting, BFSI, and Product Management.</p>
      `;
    } else {
      reply = `
        <p>Thank you for asking, <strong>${chatBotState.studentData.name || 'Student'}</strong>!</p>
        <p>Regarding your query: <em>"${userQuestion}"</em> — our senior admission counselor has logged this and can provide official 2026 cutoff brochures and fee concession updates directly to your registered number <strong>(${chatBotState.studentData.mobile || 'on file'})</strong>.</p>
        <p>Feel free to click any college card above to view full placement reports or download brochures!</p>
      `;
    }

    appendMessage('bot', reply);
  }, 600);
}
