import React from 'react';
import {
  ShieldCheck,
  Bot,
  KeyRound,
  Terminal,
  Moon,
  Laptop,
  CheckCircle2,
  Lock,
  GitPullRequest
} from 'lucide-react';

const FEATURES = [
  {
    icon: Bot,
    title: 'Draggable Floating Companion (Pip)',
    description:
      'Pip lives peacefully on your Windows desktop in a transparent, frameless window. Draggable anywhere, Pip expresses his state through subtle antenna glows and eye emotions.'
  },
  {
    icon: ShieldCheck,
    title: 'Fast-Forward Only Safeguards',
    description:
      'Pulls always execute as git pull --ff-only. If you have uncommitted changes or diverged history, PullMate halts cleanly to ensure your working tree is never overwritten.'
  },
  {
    icon: KeyRound,
    title: 'GitHub Device Authorization (RFC 8628)',
    description:
      'Connect via GitHub Device Flow with an 8-character code in your browser. You never enter or paste personal access tokens or passwords into the application.'
  },
  {
    icon: Lock,
    title: 'Windows DPAPI Secure Storage',
    description:
      'Authentication tokens are encrypted with the native Windows Data Protection API (safeStorage). Plaintext tokens never hit disk or get exposed to the UI renderer.'
  },
  {
    icon: Terminal,
    title: 'Safe Git Command Execution',
    description:
      'All Git operations execute directly with your local Git CLI using safe parameter arrays (child_process.execFile). Zero shell interpolation or command injection risk.'
  },
  {
    icon: Moon,
    title: 'Quiet Hours & System Tray',
    description:
      'Respects your focus. Pip automatically sleeps during custom quiet hours, minimizes to a tiny badge, or hides into the Windows system tray until you need him.'
  }
];

export default function Features() {
  return (
    <section id="features" className="section section-alt" aria-labelledby="features-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Engineered for Windows Developers</div>
          <h2 id="features-heading" className="section-title">
            Built for safety, privacy, and zero distraction
          </h2>
          <p className="section-subtitle">
            Most Git GUI tools are bloated dashboards or silent CLI commands.
            PullMate is built to give you continuous awareness without interrupting your flow.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper" aria-hidden="true">
                  <Icon size={22} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Technical Callout Banner */}
        <div className="features-banner">
          <div className="banner-icon-col" aria-hidden="true">
            <Laptop size={28} className="banner-icon" />
          </div>
          <div className="banner-text-col">
            <h4 className="banner-title">Native Windows 10 &amp; 11 Support</h4>
            <p className="banner-desc">
              PullMate hooks into Windows power management to automatically check sync when waking from sleep,
              minimizes to the Windows notification tray, and respects your Windows display scaling.
            </p>
          </div>
          <div className="banner-meta-col">
            <span className="banner-tag">64-bit Architecture</span>
            <span className="banner-tag">Git 2.25+ PATH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
