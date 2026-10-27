import React from 'react';
import { ShieldCheck, GitBranch, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import DownloadButton from './DownloadButton';
import PipCharacter from './PipCharacter';

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Pill / Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">Windows Desktop Git Companion</span>
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="hero-title">
            Keep your local repos in sync with a calm, friendly companion.
          </h1>

          {/* Subtitle / Description */}
          <p className="hero-description">
            PullMate runs in your Windows system tray alongside <strong>Pip</strong>—an animated,
            unobtrusive desktop companion that watches remote tracking branches, protects your
            uncommitted code from merge collisions, and lets you pull upstream changes with one click.
          </p>

          {/* Primary Action Button */}
          <div className="hero-cta-group">
            <DownloadButton variant="primary" showMeta={true} />
            <div className="hero-secondary-links">
              <a href="#preview" className="btn btn-secondary">
                <span>Interactive Preview</span>
                <ChevronRight size={16} className="btn-icon-right" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Realistic Integrity Checkpoints */}
          <ul className="hero-guarantees-list" aria-label="Key technical guarantees">
            <li className="guarantee-item">
              <CheckCircle2 size={16} className="guarantee-icon" aria-hidden="true" />
              <span>Fast-forward only (<code>git pull --ff-only</code>)</span>
            </li>
            <li className="guarantee-item">
              <CheckCircle2 size={16} className="guarantee-icon" aria-hidden="true" />
              <span>Tokens encrypted via Windows DPAPI</span>
            </li>
            <li className="guarantee-item">
              <CheckCircle2 size={16} className="guarantee-icon" aria-hidden="true" />
              <span>Zero tracking &amp; 100% local execution</span>
            </li>
          </ul>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-mascot-card" aria-hidden="true">
          <div className="mascot-card-inner">
            <div className="mascot-speech-preview">
              <div className="speech-pill-header">
                <span className="speech-speaker-tag">Pip</span>
                <span className="speech-status-indicator status-idle">Active</span>
              </div>
              <p className="speech-text">
                "Hi! I'm watching your repositories. Everything on <code>main</code> is current!"
              </p>
            </div>
            <div className="hero-character-wrapper">
              <PipCharacter state="idle" isWaving={true} size={150} />
            </div>
            <div className="mascot-dock-label">
              <span>Always-on-top • Draggable • Quiet during meetings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
