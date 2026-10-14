import { getAIResponse } from '../utils/aiAssistant.js';

export function renderAiChatPage() {
  return `
    <div class="page-ai-chat">
      <div class="ai-chat-wrapper">
        <!-- FindMyBSchool Counselor Smart Banner -->
        <div class="fmc-counselor-banner-bar">
          <div class="counselor-banner-left">
            <span class="c-sparkle">🎓</span>
            <div>
              <div class="c-title">FindMyBSchool Smart Admission Counselor</div>
              <div class="c-sub">Get personalized college matches by Location, Program & Budget in 2 minutes</div>
            </div>
          </div>
          <button type="button" class="btn-launch-counselor-now" onclick="window.openFindMyBSchoolChatBot ? window.openFindMyBSchoolChatBot() : (window.openFindMyCollegesChatBot ? window.openFindMyCollegesChatBot() : null)">
            <span>Launch 2-Min Matcher Bot</span>
            <span>⚡</span>
          </button>
        </div>

        <!-- AI Top Bar -->
        <div class="ai-header-bar">
          <div class="ai-brand-group">
            <div class="ai-sparkle-avatar">
              <span class="sparkle-icon">✨</span>
            </div>
            <div>
              <div class="ai-title-row">
                <h2 class="ai-main-title">AdmitIQ AI Guru</h2>
                <span class="ai-status-pill">
                  <span class="pulse-dot"></span> Online • Gemini Powered
                </span>
              </div>
              <p class="ai-header-subtitle">Gen-Z AI Mentor for CAT, XAT, Profile Evaluation & College Conversions</p>
            </div>
          </div>

          <div class="ai-header-actions">
            <button class="ai-action-btn" id="clearChatBtn" title="Clear Chat History">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              <span>Reset Chat</span>
            </button>
          </div>
        </div>

        <!-- Chat Conversation Messages Window -->
        <div class="ai-messages-window" id="aiMessagesWindow">
          <!-- Initial Welcome Message from AI -->
          <div class="chat-message ai-message">
            <div class="msg-avatar">✨</div>
            <div class="msg-bubble">
              <div class="msg-author-tag">AdmitIQ AI Mentor</div>
              <div class="msg-text-content">
                <p>Hey there! 👋 I'm <strong>AdmitIQ</strong>, your AI mentor for the 2026-27 MBA admission season.</p>
                <p>I analyze real percentile cutoffs, IIM selection composite criteria, MBA vs PGDM tradeoffs, and mock interview frameworks without coaching jargon.</p>
                <p>Pick a quick question below or ask me anything directly!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pre-populated Quick Prompt Chips -->
        <div class="quick-prompts-bar" id="quickPromptsBar">
          <button class="prompt-chip" data-prompt="What colleges can I convert with 92 percentile in CAT?">
            🎯 Colleges for 92%ile CAT
          </button>
          <button class="prompt-chip" data-prompt="What is the real difference between MBA and PGDM?">
            ⚖️ MBA vs PGDM Truth
          </button>
          <button class="prompt-chip" data-prompt="How do I evaluate my profile for IIM Ahmedabad?">
            🔥 Rate My IIM Profile
          </button>
          <button class="prompt-chip" data-prompt="Which B-schools have fees under 5 Lakhs and high packages?">
            💰 High ROI B-Schools
          </button>
          <button class="prompt-chip" data-prompt="Give me 3 tough GD-PI interview questions and answer frameworks">
            🎤 Mock GD-PI Questions
          </button>
          <button class="prompt-chip" data-prompt="What is the exam pattern and tips for XAT 2027?">
            🎯 XAT 2027 Pattern & Tips
          </button>
        </div>

        <!-- Chat Input Bar -->
        <div class="ai-input-dock">
          <form class="ai-input-form" id="aiInputForm">
            <div class="input-with-actions">
              <textarea 
                id="aiUserInput" 
                rows="1" 
                placeholder="Ask AdmitIQ anything... (e.g. 'I am GEM with 8/8/8 profile, what percentile do I need for IIM-B?')"
                required
              ></textarea>
              <button type="submit" class="ai-send-btn" id="aiSendBtn" title="Send message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </button>
            </div>
          </form>
          <div class="ai-input-disclaimer">
            AdmitIQ utilizes verified cutoffs from official NIRF, audited college placement reports, and IIM admission selection criteria.
          </div>
        </div>
      </div>
    </div>
  `;
}
