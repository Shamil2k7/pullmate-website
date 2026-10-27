import React from 'react';
import { Download, Key, FolderGit2, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Install & Launch',
    subtitle: 'Lightweight Windows installer',
    description:
      'Run the Windows setup executable. PullMate creates desktop and Start Menu shortcuts and places Pip right on your screen with a system tray icon.',
    codeSnippet: 'PullMate Setup 1.0.0.exe'
  },
  {
    step: '02',
    title: 'Connect with GitHub',
    subtitle: 'Official Device Authorization Flow (RFC 8628)',
    description:
      'Click Connect and PullMate generates an 8-character device verification code. Confirm in your default browser on GitHub without touching personal access tokens.',
    codeSnippet: 'github.com/login/device  [ WXYZ-9876 ]'
  },
  {
    step: '03',
    title: 'Track Your Repositories',
    subtitle: 'Link local folders or clone from GitHub',
    description:
      'Select any existing project folder on your Windows drive, or clone directly from your GitHub repository list with customizable check intervals.',
    codeSnippet: 'git remote -v  =>  origin/main tracking'
  },
  {
    step: '04',
    title: 'Safe 1-Click Fast-Forward',
    subtitle: 'Zero merge conflict surprises',
    description:
      'When remote commits appear, Pip lights up. Click "Pull" to fast-forward cleanly. If you have uncommitted work in progress, PullMate halts to protect your changes.',
    codeSnippet: 'git pull --ff-only  (Safe: working tree checked)'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" aria-labelledby="how-it-works-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Simple 4-Step Setup</div>
          <h2 id="how-it-works-heading" className="section-title">
            How PullMate works seamlessly alongside your editor
          </h2>
          <p className="section-subtitle">
            No heavy server setups, no webhooks, and no background services that mess with your Git config.
            Everything happens strictly on your machine.
          </p>
        </div>

        <div className="steps-container">
          {STEPS.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-card-header">
                <span className="step-number" aria-hidden="true">{step.step}</span>
                <span className="step-subtitle-tag">{step.subtitle}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-code-preview" aria-label={`Terminal example: ${step.codeSnippet}`}>
                <span className="terminal-prompt">$</span>
                <code>{step.codeSnippet}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works-note">
          <div className="note-icon" aria-hidden="true">💡</div>
          <p className="note-text">
            <strong>PullMate never pulls automatically on a silent timer.</strong> Every fetch is a non-destructive
            inspection of remote branches. An actual <code>git pull</code> only happens when you explicitly click the button.
          </p>
        </div>
      </div>
    </section>
  );
}
