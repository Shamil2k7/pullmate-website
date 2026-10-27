import React from 'react';
import { Download, ExternalLink, ShieldCheck, Check, Clock } from 'lucide-react';
import PipCharacter from './PipCharacter';
import DownloadButton from './DownloadButton';

export default function DownloadSection() {
  const downloadUrl = (import.meta.env.VITE_DOWNLOAD_URL || '').trim();
  const releasesUrl = (import.meta.env.VITE_RELEASES_URL || '').trim();

  return (
    <section id="download" className="section section-download" aria-labelledby="download-heading">
      <div className="container">
        <div className="download-cta-card">
          <div className="download-card-grid">
            <div className="download-text-column">
              <div className="download-badge">
                <span className="badge-pulse-dot" aria-hidden="true" />
                <span>Windows 64-bit Desktop Application</span>
              </div>
              <h2 id="download-heading" className="download-card-title">
                Ready to work in harmony with your upstream repos?
              </h2>
              <p className="download-card-description">
                Download PullMate to invite Pip onto your Windows desktop. Experience calm,
                fast-forward Git synchronization with zero merge friction.
              </p>

              <div className="download-cta-actions">
                <DownloadButton variant="primary" showMeta={false} />
              </div>

              {/* Releases & Requirements Meta */}
              <div className="download-specs-row">
                <div className="spec-item">
                  <ShieldCheck size={15} className="spec-icon" aria-hidden="true" />
                  <span>Windows 10 / 11 (64-bit)</span>
                </div>
                <div className="spec-item">
                  <Check size={15} className="spec-icon" aria-hidden="true" />
                  <span>Git CLI 2.25+ in PATH</span>
                </div>
                {releasesUrl && (
                  <div className="spec-item">
                    <a
                      href={releasesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spec-link"
                    >
                      <span>View all releases</span>
                      <ExternalLink size={12} className="inline-icon" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="download-visual-column" aria-hidden="true">
              <div className="download-pip-wrapper">
                <PipCharacter
                  state={downloadUrl ? 'up_to_date' : 'idle'}
                  size={160}
                  isWaving={true}
                />
                <div className="download-pip-tag">
                  <span>Pip is ready to help</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
