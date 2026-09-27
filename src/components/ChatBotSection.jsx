import React, { useState, useRef, useEffect } from 'react';

export default function ChatBotSection({ isVisible }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Ask me about needs, wants, savings, 50/30/20, or avoiding money mistakes.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isVisible) return null;

  function handleChat(question) {
    const text = (question || chatInput).trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    if (!question) setChatInput('');

    let reply = 'I can answer basic questions about student budgeting, savings, needs, wants, and the 50/30/20 rule.';
    const lower = text.toLowerCase();

    if (lower.includes('need')) {
      reply = 'A Need is an absolute essential: room rent, basic campus mess meals, books, or transport pass.';
    } else if (lower.includes('want')) {
      reply = 'A Want is an optional lifestyle treat: weekend restaurant outings, designer clothes, or video games.';
    } else if (lower.includes('save') || lower.includes('saving')) {
      reply = 'Aim to save at least 20% of your monthly allowance in an emergency fund before spending on wants.';
    } else if (lower.includes('50/30/20') || lower.includes('50-30-20') || lower.includes('rule')) {
      reply = 'The 50/30/20 rule divides your income into: 50% Needs, 30% Wants, and 20% Savings.';
    } else if (lower.includes('overspend') || lower.includes('mistake') || lower.includes('stop')) {
      reply = 'Try the 48-Hour delay rule: wait 2 days before buying any non-essential item online. It stops impulse buys!';
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 280);
  }

  return (
    <div className="col-lg-6">
      <section id="chatbot" className="content-card h-100 searchable-section" data-keywords="budget helper bot questions saving needs guide">
        <h2 className="card-heading">8. Financial Guide Bot</h2>
        <p className="card-subtext">Ask quick questions about student budgeting concepts.</p>

        <div className="chat-widget-box">
          <div className="chat-log" id="chat-log-box" ref={chatLogRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="mb-2">
            <span className="chat-prompt-pill" onClick={() => handleChat('What is a need?')}>
              What is a need?
            </span>
            <span className="chat-prompt-pill" onClick={() => handleChat('How much should I save?')}>
              How much should I save?
            </span>
            <span className="chat-prompt-pill" onClick={() => handleChat('How to stop overspending?')}>
              How to stop overspending?
            </span>
          </div>

          <form id="chat-form" className="d-flex gap-2" onSubmit={(e) => { e.preventDefault(); handleChat(); }}>
            <input
              type="text"
              id="chat-input-text"
              className="form-control form-control-custom"
              placeholder="Type a finance question..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-brand-primary">Ask</button>
          </form>
        </div>
        <p className="text-muted mt-2 mb-0" style={{ fontSize: '11px' }}>* For basic student educational awareness.</p>
      </section>
    </div>
  );
}
