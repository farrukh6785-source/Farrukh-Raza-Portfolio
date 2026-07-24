export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          Farrukh<span className="logo-dot"> </span><span className="logo-raza">Raza</span>
        </div>
        <p className="footer-copy">
          © {year} <span>Farrukh Raza</span> · Flutter Developer · Multan, Pakistan
        </p>
        <p className="footer-tagline">
          "Building AI-Powered Mobile Applications That Solve Real-World Problems"
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/farrukh-raza-91b64b379" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="footer-dot" />
          <a href="https://github.com/farrukh6785-source" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="footer-dot" />
          <a href="mailto:farrukh6785@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
