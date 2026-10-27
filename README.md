# PullMate Landing Page 🌱

> The official web landing page for **PullMate**, the friendly Windows desktop Git companion featuring **Pip**.

Built with **React**, **Vite**, **JavaScript (JSX)**, standard **CSS**, and **Lucide React** icons.

---

## 🌟 Overview

PullMate is a desktop Git companion designed for Windows developers. This repository hosts the static landing page showcasing PullMate's safe background synchronization engine, enterprise-grade DPAPI credential security, and its floating desktop companion, Pip.

### Key Highlights
- **Product Preview with Pip Simulator:** Visitors can interactively preview Pip's dynamic states (*Idle*, *Updates Available*, *Safe Checking*, *Up to Date*, *Dirty Tree Blocked*, *Quiet Hours*).
- **Graceful Download Handling:** Configured via Vite environment variables. If `VITE_DOWNLOAD_URL` is unset, the UI displays *"Windows installer coming soon"* instead of broken or fake download links.
- **Accessible & Responsive:** Accessible keyboard navigation, visible high-contrast focus rings, semantic landmark elements, skip-to-content links, and full mobile navigation drawer.
- **Design Aesthetic:** Warm off-white surfaces, crisp charcoal typography, and muted sage/forest green accents. Zero fake reviews, zero fake metrics, and zero purple gradients.
- **Zero Secrets / Electron Code:** This website repository contains zero Electron binaries or credentials.

---

## ⚙️ Environment Variables

Create a `.env` or `.env.local` file based on `.env.example`:

```env
# Direct download URL for the Windows installer (.exe)
# Leave empty to display the graceful fallback: "Windows installer coming soon"
VITE_DOWNLOAD_URL=

# Optional URL to view all releases and changelogs (e.g., GitHub Releases page)
VITE_RELEASES_URL=
```

### Behavior Matrix

| Variable | State | UI Result |
|---|---|---|
| `VITE_DOWNLOAD_URL` | Empty / Missing | Buttons display **"Windows installer coming soon"** (disabled, accessible status). |
| `VITE_DOWNLOAD_URL` | Set (e.g., `https://.../PullMate-Setup-1.0.0.exe`) | Buttons become active **"Download for Windows"** download links opening the installer. |
| `VITE_RELEASES_URL` | Empty / Missing | Releases link is omitted gracefully. |
| `VITE_RELEASES_URL` | Set (e.g., `https://github.com/.../releases`) | Adds an external link to **"All releases"** in Navbar, Hero, Specs row, and Footer. |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** v18.0.0 or later (tested on Node v24)
- **npm:** v9.0.0 or later

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/pullmate_web.git
cd pullmate_web

# Install dependencies
npm install
```

### Local Development
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
```
The compiled static assets are output to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment Instructions

### 1. Vercel (Recommended)

This repository includes a preconfigured [`vercel.json`](vercel.json) file with security headers and SPA rewrites.

#### Deploy with Vercel CLI:
```bash
npm install -g vercel
vercel
```

#### Deploy via Vercel Web Dashboard:
1. Push your code to a Git provider (GitHub, GitLab, or Bitbucket).
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the repository.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. In **Environment Variables**, optionally set:
   - `VITE_DOWNLOAD_URL`
   - `VITE_RELEASES_URL`
7. Click **Deploy**.

---

### 2. Netlify

1. In Netlify Dashboard, select **Add new site > Import an existing project**.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables in **Site configuration > Environment variables**.
5. Add a `_redirects` file in `public/` containing `/* /index.html 200` if necessary.

---

### 3. GitHub Pages / Static Hosting

Because this is a pure client-side static build, the contents of `dist/` can be served by any static file server (Nginx, Apache, Cloudflare Pages, AWS S3 + CloudFront).

When serving from a subdirectory on GitHub Pages, update `base` in `vite.config.js`:
```js
// vite.config.js
export default defineConfig({
  base: '/pullmate_web/',
  // ...
});
```

---

## 📁 Project Structure

```
pullmate_web/
├── public/
│   └── favicon.svg           # Scalable Pip mascot vector favicon
├── src/
│   ├── components/
│   │   ├── DownloadButton.jsx   # Dynamic installer / coming soon button logic
│   │   ├── DownloadSection.jsx  # Dedicated conversion CTA card
│   │   ├── Faq.jsx              # Accessible accordion FAQ
│   │   ├── Features.jsx         # Architecture & capabilities grid
│   │   ├── Footer.jsx           # Clean navigation & license metadata
│   │   ├── Hero.jsx             # Hero section with Pip teaser
│   │   ├── HowItWorks.jsx       # 4-step workflow breakdown
│   │   ├── Navbar.jsx           # Responsive header with mobile drawer
│   │   ├── PipCharacter.jsx     # Authentic vector SVG of Pip with animations
│   │   ├── ProductPreview.jsx   # Interactive desktop mockup & Pip state switcher
│   │   └── SecurityPrivacy.jsx  # DPAPI, process isolation & zero telemetry
│   ├── styles/
│   │   ├── animations.css       # Subtle CSS keyframes (floating, pulsing, blinking)
│   │   ├── base.css             # Resets, skip-link, focus-visible & typography
│   │   ├── components.css       # Clean, maintainable component stylesheets
│   │   └── variables.css        # Warm off-white, charcoal, and muted green tokens
│   ├── App.jsx                  # Main page layout structure
│   └── main.jsx                 # Application entry point
├── .env.example                 # Documented environment variable template
├── .gitignore                   # Standard git ignore rules
├── index.html                   # HTML shell with meta tags & preconnected fonts
├── package.json                 # React, Vite, Lucide dependencies
├── vercel.json                  # Vercel routing & security headers
├── vite.config.js               # Vite React configuration
└── README.md                    # Project documentation
```

---

## 🛡️ License

Released under the [MIT License](https://opensource.org/licenses/MIT).
