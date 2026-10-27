import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Does PullMate automatically merge code in the background?',
    answer:
      'No. PullMate never pulls code on an automated timer. The background engine only fetches remote tracking branch metadata (e.g. comparing your local HEAD with origin/main). An actual pull only occurs when you explicitly click the Pull button, and it always runs as "git pull --ff-only" to avoid surprise merge commits.'
  },
  {
    question: 'What happens if I have uncommitted local changes when updates arrive?',
    answer:
      'PullMate inspects your working tree using "git status --porcelain" before attempting any operation. If uncommitted, modified, or staged files are present, Pip turns to his cautionary state and disables the direct pull action, preventing accidental git stash collisions or overwrites.'
  },
  {
    question: 'Where and how are my GitHub credentials stored?',
    answer:
      'Your GitHub access token is encrypted using the Windows Data Protection API (DPAPI) via Electron safeStorage and saved locally in your Windows %APPDATA% folder. It cannot be read in plaintext by other Windows user accounts, nor is it exposed to the React UI renderer.'
  },
  {
    question: 'Does PullMate upload my code or commit messages to any server?',
    answer:
      'Zero code or telemetry is transmitted to third parties. PullMate interacts exclusively with your local Git executable and the official GitHub API (api.github.com) directly from your PC. There is no PullMate cloud backend.'
  },
  {
    question: 'What are the system requirements for Windows?',
    answer:
      'PullMate requires Windows 10 or Windows 11 (64-bit architecture) and the standard Git CLI (version 2.25 or later) installed and available in your Windows PATH environment variable.'
  },
  {
    question: 'Can I hide Pip during meetings or deep work?',
    answer:
      'Yes. Pip can be minimized into a small 40px floating badge, hidden entirely to the Windows System Tray, or snoozed. You can also define custom Quiet Hours (e.g., 10 PM to 8 AM) during which Pip automatically goes to sleep.'
  },
  {
    question: 'How do I completely remove PullMate and erase my tokens?',
    answer:
      'Inside PullMate, navigate to Settings > GitHub Connection and click "Disconnect Account & Erase Token". This immediately deletes the encrypted credentials from your machine. You can then uninstall PullMate via standard Windows Settings > Installed Apps.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container container-narrow">
        <div className="section-header">
          <div className="section-badge">Frequently Asked Questions</div>
          <h2 id="faq-heading" className="section-title">
            Clear answers about safety and workflows
          </h2>
          <p className="section-subtitle">
            Everything you need to know about how PullMate interacts with your Git repositories,
            Windows system, and GitHub account.
          </p>
        </div>

        <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-header-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                <h3 className="faq-item-title">
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="faq-question-btn"
                    onClick={() => toggleItem(idx)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? 'chevron-rotated' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className="faq-answer-panel"
                >
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
