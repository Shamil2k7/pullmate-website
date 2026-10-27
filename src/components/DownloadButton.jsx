import React from 'react';
import { Download, ExternalLink, Clock, Monitor } from 'lucide-react';

/**
 * DownloadButton handles dynamic state according to:
 * - VITE_DOWNLOAD_URL: If missing/empty, renders "Windows installer coming soon"
 *                      If provided, opens/downloads the actual Windows installer
 * - VITE_RELEASES_URL: Link to all releases / changelog
 */
export default function DownloadButton({
  variant = 'primary', // 'primary', 'nav', 'card'
  className = '',
  showMeta = false
}) {
  const downloadUrl = (import.meta.env.VITE_DOWNLOAD_URL || '').trim();
  const releasesUrl = (import.meta.env.VITE_RELEASES_URL || '').trim();
  const isAvailable = Boolean(downloadUrl);

  if (!isAvailable) {
    return (
      <div className={`download-btn-group ${className}`}>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={`btn btn-coming-soon btn-${variant}`}
          title="The Windows installer package is currently being prepared. Check back soon!"
        >
          <Clock size={18} className="btn-icon" aria-hidden="true" />
          <span>Windows installer coming soon</span>
        </button>

        {showMeta && (
          <div className="download-meta-text">
            <span>Windows 10 / 11 (64-bit)</span>
            <span className="dot-divider">•</span>
            <span>Git CLI 2.25+ required</span>
            {releasesUrl && (
              <>
                <span className="dot-divider">•</span>
                <a
                  href={releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="releases-inline-link"
                >
                  View releases <ExternalLink size={12} className="inline-icon" />
                </a>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`download-btn-group ${className}`}>
      <a
        href={downloadUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-primary btn-${variant}`}
        aria-label="Download PullMate for Windows (64-bit installer)"
      >
        <Download size={18} className="btn-icon" aria-hidden="true" />
        <span className="btn-text-main">Download for Windows</span>
      </a>

      {showMeta && (
        <div className="download-meta-text">
          <span>Windows 10 / 11 (64-bit)</span>
          <span className="dot-divider">•</span>
          <span>Git CLI 2.25+ required</span>
          {releasesUrl && (
            <>
              <span className="dot-divider">•</span>
              <a
                href={releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="releases-inline-link"
              >
                All releases <ExternalLink size={12} className="inline-icon" />
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
