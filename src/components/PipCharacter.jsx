import React from 'react';

/**
 * Pip Character Component
 * Vector SVG representation of the real PullMate desktop companion
 * Supports states: 'idle', 'updates_available', 'checking', 'up_to_date', 'unsaved_changes', 'sleeping'
 */
export default function PipCharacter({
  state = 'idle',
  size = 140,
  isWaving = false,
  showShadow = true,
  className = ''
}) {
  // Antenna orb color based on current state
  const getOrbColor = () => {
    switch (state) {
      case 'up_to_date':
        return '#10B981'; // emerald
      case 'updates_available':
        return '#F59E0B'; // amber
      case 'checking':
        return '#3B82F6'; // blue
      case 'unsaved_changes':
        return '#FB923C'; // orange
      case 'sleeping':
        return '#64748B'; // slate
      case 'idle':
      default:
        return '#2D6A4F'; // muted green / sage
    }
  };

  const orbColor = getOrbColor();

  return (
    <div
      className={`pip-character-root ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, position: 'relative' }}
      role="img"
      aria-label={`Pip the PullMate companion in ${state.replace('_', ' ')} state`}
    >
      {/* Sleeping zZz particles */}
      {state === 'sleeping' && (
        <div className="sleeping-container" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          <span className="sleep-z z1">z</span>
          <span className="sleep-z z2">Z</span>
          <span className="sleep-z z3">Z</span>
        </div>
      )}

      <svg
        viewBox="0 0 140 140"
        width={size}
        height={size}
        className="pip-svg-element"
      >
        <defs>
          <linearGradient id="pipBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5EAE7" />
          </linearGradient>
          <linearGradient id="pipVisorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2328" />
            <stop offset="100%" stopColor="#13171B" />
          </linearGradient>
          <filter id="pipOrbGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Ground Shadow */}
        {showShadow && (
          <ellipse
            cx="70"
            cy="133"
            rx="38"
            ry="5.5"
            fill="rgba(30, 35, 40, 0.14)"
            className="pip-shadow-pulse"
          />
        )}

        {/* Floating mascot group */}
        <g className="pip-float-wrapper">
          {/* Left Arm */}
          <g className={`pip-arm pip-arm-left ${isWaving ? 'pip-arm-waving' : ''}`}>
            <rect
              x="18"
              y="74"
              width="15"
              height="12"
              rx="6"
              fill="#D4DCD7"
              stroke="#A8B5AE"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Arm */}
          <g className={`pip-arm pip-arm-right ${state === 'up_to_date' ? 'pip-arm-waving' : ''}`}>
            <rect
              x="107"
              y="74"
              width="15"
              height="12"
              rx="6"
              fill="#D4DCD7"
              stroke="#A8B5AE"
              strokeWidth="1.5"
            />
          </g>

          {/* Antenna Stem */}
          <line
            x1="70"
            y1="36"
            x2="70"
            y2="19"
            stroke="#9BAAA2"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Antenna Glowing Orb */}
          <circle
            cx="70"
            cy="15"
            r="7.5"
            fill={orbColor}
            filter="url(#pipOrbGlow)"
            className="pip-antenna-orb"
            style={{ color: orbColor }}
          />
          <circle cx="68" cy="13" r="2.2" fill="#FFFFFF" opacity="0.85" />

          {/* Main Rounded Robot Body */}
          <rect
            x="30"
            y="32"
            width="80"
            height="88"
            rx="38"
            fill="url(#pipBodyGradient)"
            stroke="#A8B5AE"
            strokeWidth="2.5"
          />

          {/* Subtle Chest Seam / Detail */}
          <path
            d="M 52 106 L 88 106"
            stroke="#C4CFCA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Dark Visor / Screen Face */}
          <rect
            x="42"
            y="48"
            width="56"
            height="40"
            rx="16"
            fill="url(#pipVisorGradient)"
            stroke="#2B323B"
            strokeWidth="1.5"
          />

          {/* Visor Screen Reflection */}
          <path
            d="M 46 54 Q 60 51 74 54"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.18"
          />

          {/* Facial Expressions */}
          {state === 'sleeping' ? (
            /* Sleeping eyes: gentle downward arcs */
            <g stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" fill="none">
              <path d="M 50 68 Q 55 72 60 68" />
              <path d="M 80 68 Q 85 72 90 68" />
              <path d="M 67 79 L 73 79" strokeWidth="1.5" />
            </g>
          ) : state === 'up_to_date' ? (
            /* Joyful / Happy smiling eyes & cheeks */
            <g>
              <g stroke="#10B981" strokeWidth="2.6" strokeLinecap="round" fill="none">
                <path d="M 50 70 Q 55 64 60 70" />
                <path d="M 80 70 Q 85 64 90 70" />
                <path d="M 64 78 Q 70 84 76 78" strokeWidth="2" />
              </g>
              {/* Cute Cheek Blush */}
              <circle cx="48" cy="74" r="3" fill="#E879A8" opacity="0.55" />
              <circle cx="92" cy="74" r="3" fill="#E879A8" opacity="0.55" />
            </g>
          ) : state === 'updates_available' ? (
            /* Alert amber eyes */
            <g>
              <circle cx="55" cy="68" r="5" fill="#F59E0B" />
              <circle cx="85" cy="68" r="5" fill="#F59E0B" />
              <circle cx="56.5" cy="66" r="1.6" fill="#FFFFFF" />
              <circle cx="86.5" cy="66" r="1.6" fill="#FFFFFF" />
              {/* Alert round mouth */}
              <circle cx="70" cy="80" r="2.2" fill="#F59E0B" />
            </g>
          ) : state === 'checking' ? (
            /* Scanning blue eyes */
            <g>
              <circle cx="55" cy="68" r="4.5" fill="#3B82F6" className="scan-eye-left" />
              <circle cx="85" cy="68" r="4.5" fill="#3B82F6" className="scan-eye-right" />
              <circle cx="56.5" cy="66" r="1.4" fill="#FFFFFF" />
              <circle cx="86.5" cy="66" r="1.4" fill="#FFFFFF" />
              {/* Inquisitive mouth */}
              <ellipse cx="70" cy="80" rx="3.5" ry="1.8" fill="#3B82F6" opacity="0.8" />
            </g>
          ) : state === 'unsaved_changes' ? (
            /* Cautionary / Warning expression */
            <g>
              <circle cx="55" cy="68" r="4.5" fill="#FB923C" />
              <circle cx="85" cy="68" r="4.5" fill="#FB923C" />
              <circle cx="56.5" cy="66" r="1.5" fill="#FFFFFF" />
              <circle cx="86.5" cy="66" r="1.5" fill="#FFFFFF" />
              {/* Flat line cautious mouth */}
              <path d="M 66 80 L 74 80" stroke="#FB923C" strokeWidth="1.8" strokeLinecap="round" />
            </g>
          ) : (
            /* Default / Idle friendly eyes with blink */
            <g>
              <g className="pip-eye-animated">
                <circle cx="55" cy="68" r="4.5" fill="#2D6A4F" />
                <circle cx="56.5" cy="66.5" r="1.5" fill="#FFFFFF" />
                <circle cx="85" cy="68" r="4.5" fill="#2D6A4F" />
                <circle cx="86.5" cy="66.5" r="1.5" fill="#FFFFFF" />
              </g>
              {/* Gentle smile */}
              <path
                d="M 66 79 Q 70 82 74 79"
                stroke="#2D6A4F"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
