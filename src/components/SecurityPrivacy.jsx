import React from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Database,
  Cpu,
  FileCode,
  Radio,
  Check
} from 'lucide-react';

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: 'Windows DPAPI Token Encryption',
    details:
      'OAuth access tokens are encrypted using Windows safeStorage via the native Windows Data Protection API (DPAPI). Only your Windows user account can decrypt them on this specific machine. No plaintext secrets ever exist on disk.'
  },
  {
    icon: Database,
    title: 'Zero Third-Party Telemetry',
    details:
      'PullMate contains zero analytics SDKs, zero crash reporters that harvest your environment, and zero telemetry pings. Your repository names, branch names, and code commits never leave your computer.'
  },
  {
    icon: Cpu,
    title: 'Strict Process Isolation',
    details:
      'The React user interface is strictly isolated from Node.js and system APIs (contextIsolation: true, nodeIntegration: false). Renderer code cannot execute arbitrary shell commands or access filesystem credentials directly.'
  },
  {
    icon: FileCode,
    title: 'Safe Array Command Execution',
    details:
      'All Git commands are invoked using child_process.execFile with structured parameter arrays. Command arguments are never passed to an OS shell, eliminating shell injection vulnerabilities completely.'
  }
];

export default function SecurityPrivacy() {
  return (
    <section id="privacy" className="section section-alt" aria-labelledby="privacy-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Privacy &amp; Security Architecture</div>
          <h2 id="privacy-heading" className="section-title">
            Your code, credentials, and branches stay strictly local
          </h2>
          <p className="section-subtitle">
            Developers trust tools that respect boundaries. Here is the exact architectural breakdown
            of how PullMate handles security and your data.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="privacy-grid">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="privacy-card">
                <div className="privacy-card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 className="privacy-card-title">{pillar.title}</h3>
                <p className="privacy-card-details">{pillar.details}</p>
              </div>
            );
          })}
        </div>

        {/* Security Matrix Table */}
        <div className="security-matrix-card">
          <h3 className="matrix-title">Security &amp; Data Boundary Matrix</h3>
          <div className="table-responsive">
            <table className="security-table" aria-label="Security and Data Boundary Matrix">
              <thead>
                <tr>
                  <th scope="col">Domain</th>
                  <th scope="col">PullMate Implementation</th>
                  <th scope="col">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">GitHub Tokens</th>
                  <td>
                    <code>Electron safeStorage (Windows DPAPI)</code>
                  </td>
                  <td>Tokens are non-extractable by unauthorized apps or users.</td>
                </tr>
                <tr>
                  <th scope="row">Git Pull Execution</th>
                  <td>
                    <code>git pull --ff-only</code>
                  </td>
                  <td>Never creates merge conflicts or overwrites uncommitted files.</td>
                </tr>
                <tr>
                  <th scope="row">Network Endpoints</th>
                  <td>
                    <code>api.github.com</code> &amp; local Git remote only
                  </td>
                  <td>No intermediary backend servers or proxy services involved.</td>
                </tr>
                <tr>
                  <th scope="row">Repo Removal</th>
                  <td>Non-destructive metadata dissociation</td>
                  <td>Removing a repo from PullMate never touches files on your disk.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
