import React from 'react';
import { ExternalLink, ArrowUp, GitBranch } from 'lucide-react';

export default function Footer() {
  const releasesUrl = (import.meta.env.VITE_RELEASES_URL || '').trim();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand-logo" aria-label="PullMate home">
              <span className="brand-name">
                Pull<span className="brand-name-accent">Mate</span>
              </span>
            </a>
            <p className="footer-tagline">
              The peaceful, Windows desktop Git companion featuring Pip.
              Fast-forward sync notifications without breaking your development flow.
            </p>
            <div className="footer-meta-pill">
              <span className="footer-meta-dot" aria-hidden="true" />
              <span>Free &amp; Open Source (MIT License)</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <div className="footer-nav-group">
              <h4 className="footer-group-title">Product</h4>
              <ul className="footer-links-list">
                <li><a href="#preview" className="footer-link">Interactive Preview</a></li>
                <li><a href="#features" className="footer-link">Features</a></li>
                <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                <li><a href="#download" className="footer-link">Download</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4 className="footer-group-title">Integrity &amp; Docs</h4>
              <ul className="footer-links-list">
                <li><a href="#privacy" className="footer-link">Security &amp; DPAPI</a></li>
                <li><a href="#faq" className="footer-link">Frequently Asked Questions</a></li>
                {releasesUrl && (
                  <li>
                    <a
                      href={releasesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      Release Notes <ExternalLink size={12} className="inline-icon" />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4 className="footer-group-title">Platform</h4>
              <ul className="footer-links-list">
                <li className="footer-static-item">Windows 10 / 11 (64-bit)</li>
                <li className="footer-static-item">Git CLI 2.25+</li>
                <li className="footer-static-item">GitHub Device Flow (RFC 8628)</li>
                <li className="footer-static-item">100% Local Execution</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} PullMate. Built with care for developers who want a friendly companion by their side.</p>
          </div>

          <div className="footer-back-to-top">
            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
