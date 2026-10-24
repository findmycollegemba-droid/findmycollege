import { getAIResponse } from '../utils/aiAssistant.js';

let chatHistory = [];

export function initAiChatInteractions() {
  const chatWindow = document.getElementById('aiMessagesWindow');
  const chatForm = document.getElementById('aiInputForm');
  const userInput = document.getElementById('aiUserInput');
  const promptChips = document.querySelectorAll('.prompt-chip');
  const clearBtn = document.getElementById('clearChatBtn');

  // Auto-scroll chat
  const scrollChatToBottom = () => {
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  };

  const appendUserMessage = (msg) => {
    if (!chatWindow) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'chat-message user-message';
    msgEl.innerHTML = `
      <div class="msg-avatar">👤</div>
      <div class="msg-bubble">
        <div class="msg-author-tag">You</div>
        <div class="msg-text-content">
          <p>${escapeHtml(msg)}</p>
        </div>
      </div>
    `;
    chatWindow.appendChild(msgEl);
    scrollChatToBottom();
  };

  const appendAiMessage = (responseObj) => {
    if (!chatWindow) return;

    // Simulate typing delay
    const typingEl = document.createElement('div');
    typingEl.className = 'chat-message ai-message typing-indicator';
    typingEl.innerHTML = `
      <div class="msg-avatar">✨</div>
      <div class="msg-bubble">
        <div class="msg-author-tag">AdmitIQ AI</div>
        <div class="msg-text-content"><p>Thinking & analyzing B-School data...</p></div>
      </div>
    `;
    chatWindow.appendChild(typingEl);
    scrollChatToBottom();

    setTimeout(() => {
      typingEl.remove();

      const msgEl = document.createElement('div');
      msgEl.className = 'chat-message ai-message';
      msgEl.innerHTML = `
        <div class="msg-avatar">✨</div>
        <div class="msg-bubble">
          <div class="msg-author-tag">AdmitIQ AI</div>
          <div class="msg-text-content">
            ${formatMarkdownToHtml(responseObj.text)}
          </div>
        </div>
      `;
      chatWindow.appendChild(msgEl);
      scrollChatToBottom();
    }, 600);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    appendUserMessage(text);
    if (userInput) userInput.value = '';

    const aiRes = getAIResponse(text, chatHistory);
    chatHistory.push({ role: 'user', content: text });
    chatHistory.push({ role: 'model', content: aiRes.text });
    appendAiMessage(aiRes);
  };

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSendMessage(userInput?.value || '');
    });
  }

  // Quick prompt chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) handleSendMessage(prompt);
    });
  });

  // Clear Chat
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      chatHistory = [];
      if (chatWindow) {
        chatWindow.innerHTML = `
          <div class="chat-message ai-message">
            <div class="msg-avatar">✨</div>
            <div class="msg-bubble">
              <div class="msg-author-tag">AdmitIQ AI Mentor</div>
              <div class="msg-text-content">
                <p>Chat history cleared. How can I help you today?</p>
              </div>
            </div>
          </div>
        `;
      }
    });
  }
}

// Helpers
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatMarkdownToHtml(markdown) {
  let html = markdown;

  // Tables
  const tableRegex = /\|(.+)\|\n\|([\s\-:|]+)\|\n((?:\|.+\|\n?)+)/g;
  html = html.replace(tableRegex, (match, header, divider, rows) => {
    const headers = header.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`).join('');
    const rowLines = rows.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<div class="table-responsive"><table><thead><tr>${headers}</tr></thead><tbody>${rowLines}</tbody></table></div>`;
  });

  // Headers
  html = html.replace(/### (.+)/g, '<h3>$1</h3>');
  html = html.replace(/#### (.+)/g, '<h4>$1</h4>');

  // Bold & Italics
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Lists
  html = html.replace(/(?:^|\n)- (.+)/g, '<li>$1</li>');
  html = html.replace(/(<li>.+<\/li>)+/g, '<ul>$&</ul>');

  // Paragraphs
  html = html.split('\n\n').map(p => {
    if (p.startsWith('<h') || p.startsWith('<div') || p.startsWith('<ul') || p.startsWith('<table')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return html;
}
