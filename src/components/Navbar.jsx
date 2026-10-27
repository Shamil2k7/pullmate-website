import React, { useState, useEffect } from 'react';
import { Menu, X, GitPullRequest, ExternalLink } from 'lucide-react';
import DownloadButton from './DownloadButton';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const releasesUrl = (import.meta.env.VITE_RELEASES_URL || '').trim();

  // Handle header scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" aria-label="PullMate home">
          <div className="brand-icon-wrapper" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="28" height="28" className="brand-pip-svg">
              <rect x="6" y="8" width="28" height="28" rx="12" fill="#2D6A4F" />
              <rect x="11" y="14" width="18" height="13" rx="5" fill="#1C2229" />
              <circle cx="15.5" cy="20.5" r="1.5" fill="#34D399" />
              <circle cx="24.5" cy="20.5" r="1.5" fill="#34D399" />
              <path d="M 18 24 Q 20 25.5 22 24" stroke="#34D399" strokeWidth="1" strokeLinecap="round" fill="none" />
              <line x1="20" y1="8" x2="20" y2="4" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="20" cy="3" r="1.8" fill="#52B788" />
            </svg>
          </div>
          <span className="brand-name">
            Pull<span className="brand-name-accent">Mate</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#preview" className="nav-link">Preview</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
            <li><a href="#privacy" className="nav-link">Security & Privacy</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
            {releasesUrl && (
              <li>
                <a
                  href={releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link releases-nav-link"
                >
                  Releases <ExternalLink size={12} className="inline-icon" />
                </a>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions">
          <DownloadButton variant="nav" />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={closeMenu} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="brand-name">PullMate</span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              <li><a href="#preview" onClick={closeMenu} className="mobile-nav-link">Product Preview</a></li>
              <li><a href="#features" onClick={closeMenu} className="mobile-nav-link">Key Features</a></li>
              <li><a href="#how-it-works" onClick={closeMenu} className="mobile-nav-link">How It Works</a></li>
              <li><a href="#privacy" onClick={closeMenu} className="mobile-nav-link">Security & Privacy</a></li>
              <li><a href="#faq" onClick={closeMenu} className="mobile-nav-link">FAQ</a></li>
              {releasesUrl && (
                <li>
                  <a
                    href={releasesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="mobile-nav-link releases-mobile-link"
                  >
                    View All Releases <ExternalLink size={14} className="inline-icon" />
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <div className="mobile-drawer-cta">
            <DownloadButton variant="primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
