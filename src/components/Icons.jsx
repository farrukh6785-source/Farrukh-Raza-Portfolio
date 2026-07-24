// Custom SVG icon components — hand-crafted brand & utility icons matching Flutter theme
const s = { width: '1em', height: '1em', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', verticalAlign: '-0.125em' }

// Flutter Logo (Double Chevron)
export const IconFlutter = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', verticalAlign: '-0.125em' }} {...props}>
    <path d="M14.314 2.298L2.3 14.314l4.072 4.072 16.08-16.094L14.314 2.298zM22.45 14.636l-4.073-4.072-8.033 8.034 4.072 4.072 8.034-8.034z" />
  </svg>
)

// Dart Logo (Rhombus hexagon with inset)
export const IconDart = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', verticalAlign: '-0.125em' }} {...props}>
    <path d="M21.1 11.1l-9.5-9.5c-.8-.8-2-.8-2.8 0L2.3 8.1c-.8.8-.8 2 0 2.8l9.5 9.5c.8.8 2 .8 2.8 0l6.5-6.5c.8-.8.8-2 0-2.8z" />
    <path d="M12 6.5l5.5 5.5-5.5 5.5-5.5-5.5L12 6.5z" fill="#00d4aa" />
  </svg>
)

// Firebase Logo
export const IconFirebase = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', verticalAlign: '-0.125em' }} {...props}>
    <path d="M3.89 15.67L5.26 6.8c.1-.69.67-1.22 1.36-1.25.69-.04 1.3.4 1.52 1.05l1.6 4.96 1.77-3.41c.29-.56.88-.91 1.51-.91s1.22.35 1.51.91l6.28 12.09c.32.61.16 1.37-.38 1.79-.53.43-1.28.41-1.79-.04L12 16.5 3.89 15.67z" />
  </svg>
)

// Supabase Logo
export const IconSupabase = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', verticalAlign: '-0.125em' }} {...props}>
    <path d="M19.123 11.123h-6.23v-8.12a.5.5 0 0 0-.84-.37L3.14 11.88a.5.5 0 0 0 .37.843h6.23v8.12a.5.5 0 0 0 .84.37l8.913-9.25a.5.5 0 0 0-.37-.843z" />
  </svg>
)

// Mobile phone outline
export const IconMobile = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5" />
  </svg>
)

// AI Sparkle / Robot
export const IconAI = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
    <path d="M8 10v1a4 4 0 0 0 8 0v-1" />
    <line x1="12" y1="15" x2="12" y2="18" />
    <path d="M8 18h8" />
    <circle cx="9.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    <path d="M4 14l-2 2" />
    <path d="M20 14l2 2" />
    <path d="M4 8L2 6" />
    <line x1="20" y1="8" x2="22" y2="6" />
  </svg>
)

// Fire
export const IconFire = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z" />
    <path d="M12 22a6 6 0 0 1-6-6c0-3 2-5 4-7 2 2 4 4 4 7a6 6 0 0 1-2 6z" fill="none" />
  </svg>
)

// Target (concentric circles)
export const IconTarget = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

// Graduation Cap
export const IconGrad = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 0 2.5 3 6 3s6-3 6-3v-5" />
    <line x1="22" y1="10" x2="22" y2="16" />
  </svg>
)

// Checked checkbox circle
export const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

// Database
export const IconDatabase = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

// Star
export const IconStar = (props) => (
  <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', verticalAlign: '-0.125em' }} fill="currentColor" stroke="none" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

// Server
export const IconServer = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2.5" />
  </svg>
)

// Message Circle
export const IconMessageCircle = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

// Sun
export const IconSun = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

// Moon
export const IconMoon = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

// Globe
export const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

// Briefcase
export const IconBriefcase = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

// Palette
export const IconPalette = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C4.85857 19 4.5 20 5.5 21C6.5 22 8 21 8 21C9.18437 21.652 10.548 22 12 22Z" />
    <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

// Link / Chain
export const IconLink = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

// Wrench
export const IconWrench = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

// Rocket
export const IconRocket = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 3.5s2-1 3.5-2.5M12 5l3.5 3.5M3.5 20.5L2 22l1.5-1.5M9 15l-3-3M22 2s-3.5.5-6 3c-2.5 2.5-3.5 6-3.5 6l4 4s3.5-1 6-3.5c2.5-2.5 3-6 3-6z" />
  </svg>
)

// Mail / Envelope
export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export const IconEnvelope = IconMail

// Phone receiver
export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

// Map pin
export const IconPin = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

// Linkedin Logo
export const IconLinkedin = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Github Logo
export const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" {...s} {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)
