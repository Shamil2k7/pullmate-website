import React, { useState } from 'react';
import {
  Folder,
  GitBranch,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
  Download,
  Clock,
  Sliders,
  Bell,
  Search,
  Minus,
  Square,
  X
} from 'lucide-react';
import PipCharacter from './PipCharacter';

// Pip interactive demo states based on actual PullMate character logic
const PIP_STATES = [
  {
    id: 'idle',
    label: 'Idle / Monitoring',
    badgeText: 'Idle',
    orbClass: 'idle',
    message: "Watching your repositories in the background. Everything looks peaceful!",
    action: { label: 'Open Dashboard', type: 'dashboard' }
  },
  {
    id: 'updates_available',
    label: 'Updates Available',
    badgeText: 'Alert',
    orbClass: 'amber',
    message: "2 upstream commits available on origin/main! Ready to fast-forward pull?",
    action: { label: 'Pull Changes (ff-only)', type: 'pull' }
  },
  {
    id: 'checking',
    label: 'Background Sync Check',
    badgeText: 'Checking',
    orbClass: 'blue',
    message: "Fetching remote tracking references for tracked repositories...",
    action: null
  },
  {
    id: 'up_to_date',
    label: 'Up to Date',
    badgeText: 'Synced',
    orbClass: 'green',
    message: "All repositories are fully up to date with remote tracking branches!",
    action: { label: 'Open Project Folder', type: 'folder' }
  },
  {
    id: 'unsaved_changes',
    label: 'Unsaved Changes Blocked',
    badgeText: 'Protected',
    orbClass: 'orange',
    message: "Working directory is dirty. Pull blocked to prevent merge overwrites.",
    action: { label: 'Review Git Status', type: 'status' }
  },
  {
    id: 'sleeping',
    label: 'Quiet Hours',
    badgeText: 'Sleeping',
    orbClass: 'slate',
    message: "Quiet hours active (10:00 PM – 8:00 AM). Pip is snoozed so you can focus.",
    action: null
  }
];

export default function ProductPreview() {
  const [selectedStateIndex, setSelectedStateIndex] = useState(1); // Default to 'updates_available' to show value
  const currentState = PIP_STATES[selectedStateIndex];

  return (
    <section id="preview" className="section section-preview" aria-labelledby="preview-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Product Preview</div>
          <h2 id="preview-heading" className="section-title">
            The peaceful Git companion on your Windows desktop
          </h2>
          <p className="section-subtitle">
            PullMate combines an unobtrusive, floating companion (Pip) with a crisp dashboard.
            Try toggling Pip's states below to see how he alerts you without disrupting your focus.
          </p>
        </div>

        {/* State Selector Buttons */}
        <div className="preview-state-switcher" role="tablist" aria-label="Pip companion states">
          <span className="state-switcher-label">Simulate Pip State:</span>
          <div className="state-switcher-pills">
            {PIP_STATES.map((st, idx) => {
              const isActive = idx === selectedStateIndex;
              return (
                <button
                  key={st.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  className={`state-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedStateIndex(idx)}
                >
                  <span className={`pill-dot dot-${st.orbClass}`} aria-hidden="true" />
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Environment Mockup */}
        <div className="desktop-canvas-mockup">
          {/* Windows Title Bar */}
          <div className="windows-title-bar" aria-hidden="true">
            <div className="window-brand">
              <span className="window-app-icon" />
              <span className="window-title-text">PullMate — Repository Dashboard</span>
            </div>
            <div className="window-controls">
              <span className="win-btn win-minimize"><Minus size={11} /></span>
              <span className="win-btn win-maximize"><Square size={10} /></span>
              <span className="win-btn win-close"><X size={12} /></span>
            </div>
          </div>

          <div className="desktop-split-view">
            {/* Dashboard App View */}
            <div className="dashboard-content">
              {/* Dashboard Subheader */}
              <div className="dashboard-topbar">
                <div className="search-box-mock">
                  <Search size={14} className="search-icon" aria-hidden="true" />
                  <span className="search-placeholder">Filter repositories...</span>
                </div>
                <div className="dashboard-topbar-actions">
                  <div className="auth-pill">
                    <span className="auth-dot" aria-hidden="true" />
                    <span>GitHub Connected</span>
                  </div>
                  <button type="button" className="mock-btn-action" tabIndex={-1}>
                    <RefreshCw size={13} className="spin-on-hover" aria-hidden="true" />
                    <span>Check All</span>
                  </button>
                </div>
              </div>

              {/* Repositories List Mockup */}
              <div className="repo-cards-grid">
                {/* Repo 1: Updates Available */}
                <div className={`repo-card ${currentState.id === 'updates_available' ? 'card-highlighted' : ''}`}>
                  <div className="repo-card-header">
                    <div className="repo-title-row">
                      <Folder size={16} className="repo-folder-icon" aria-hidden="true" />
                      <span className="repo-name">core-api-service</span>
                    </div>
                    <span className="repo-status-badge badge-warning">2 commits behind</span>
                  </div>
                  <div className="repo-meta-row">
                    <span className="repo-branch">
                      <GitBranch size={13} aria-hidden="true" /> main
                    </span>
                    <span className="repo-path">C:\dev\core-api-service</span>
                  </div>
                  <div className="repo-footer-row">
                    <span className="repo-check-time">Checked 1m ago</span>
                    <div className="repo-card-actions">
                      <button type="button" className="mock-btn-pull" tabIndex={-1}>
                        <Download size={13} aria-hidden="true" />
                        <span>Pull (ff-only)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Repo 2: Up to date */}
                <div className={`repo-card ${currentState.id === 'up_to_date' ? 'card-highlighted' : ''}`}>
                  <div className="repo-card-header">
                    <div className="repo-title-row">
                      <Folder size={16} className="repo-folder-icon" aria-hidden="true" />
                      <span className="repo-name">client-web-dashboard</span>
                    </div>
                    <span className="repo-status-badge badge-success">Up to date</span>
                  </div>
                  <div className="repo-meta-row">
                    <span className="repo-branch">
                      <GitBranch size={13} aria-hidden="true" /> develop
                    </span>
                    <span className="repo-path">C:\dev\client-web-dashboard</span>
                  </div>
                  <div className="repo-footer-row">
                    <span className="repo-check-time">Checked 3m ago</span>
                    <span className="repo-clean-indicator">
                      <CheckCircle size={13} aria-hidden="true" /> Working tree clean
                    </span>
                  </div>
                </div>

                {/* Repo 3: Unsaved changes protection */}
                <div className={`repo-card ${currentState.id === 'unsaved_changes' ? 'card-highlighted' : ''}`}>
                  <div className="repo-card-header">
                    <div className="repo-title-row">
                      <Folder size={16} className="repo-folder-icon" aria-hidden="true" />
                      <span className="repo-name">docs-portal</span>
                    </div>
                    <span className="repo-status-badge badge-alert">Working tree dirty</span>
                  </div>
                  <div className="repo-meta-row">
                    <span className="repo-branch">
                      <GitBranch size={13} aria-hidden="true" /> main
                    </span>
                    <span className="repo-path">C:\dev\docs-portal</span>
                  </div>
                  <div className="repo-footer-row">
                    <span className="repo-check-time">Sync paused</span>
                    <span className="repo-dirty-warning">
                      <ShieldCheck size={13} aria-hidden="true" /> Fast-forward protected
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Overlay Preview: Pip Floating Companion */}
            <div className="desktop-pip-stage">
              <div className="pip-stage-header">
                <span className="pip-stage-pill">Floating Desktop Window</span>
              </div>

              {/* Pip Speech Bubble */}
              <div className="companion-bubble-mock">
                <div className="bubble-top">
                  <span className="bubble-name">Pip</span>
                  <div className="bubble-actions-mini" aria-hidden="true">
                    <span className="bubble-mini-icon"><Minus size={10} /></span>
                    <span className="bubble-mini-icon"><ExternalLink size={10} /></span>
                    <span className="bubble-mini-icon"><X size={10} /></span>
                  </div>
                </div>
                <p className="bubble-body-message">{currentState.message}</p>
                {currentState.action && (
                  <div className="bubble-btn-wrapper">
                    <button type="button" className="bubble-action-button" tabIndex={-1}>
                      {currentState.action.type === 'pull' && <Download size={12} />}
                      {currentState.action.type === 'folder' && <Folder size={12} />}
                      {currentState.action.type === 'dashboard' && <ExternalLink size={12} />}
                      {currentState.action.type === 'status' && <ShieldCheck size={12} />}
                      <span>{currentState.action.label}</span>
                    </button>
                  </div>
                )}
                <div className="bubble-pointer-tail" aria-hidden="true" />
              </div>

              {/* Pip Mascot SVG */}
              <div className="companion-mascot-container">
                <PipCharacter
                  state={currentState.id}
                  size={148}
                  isWaving={currentState.id === 'idle'}
                />
              </div>

              <div className="pip-position-hint">
                <span>Drag anywhere on your Windows desktop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
