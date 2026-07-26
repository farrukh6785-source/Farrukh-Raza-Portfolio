import { useEffect, useRef } from 'react'
import { IconAI, IconRocket } from './Icons'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,170,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-grid">
        {/* ── LEFT CONTENT ── */}
        <div className="hero-content">
          <div className="hero-tag">Available for Freelance &amp; Full-time</div>

          <h1>
            Hi, I am <span className="highlight-name">Farrukh Raza</span><br />
            Flutter Developer
          </h1>

          <p className="hero-desc">
            Transforming ideas into scalable cross-platform mobile applications with Flutter, Firebase, Supabase &amp;  AI.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">30<span>+</span></div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat">
              <div className="stat-num">1<span>+ </span>year</div>
              <div className="stat-label">Experience</div>

            </div>
          </div>

          {/* tech pills */}
          <div className="hero-pills">
            {['Flutter', 'Dart', 'Firebase', 'Supabase', 'AI/ML'].map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL ── */}
        <div className="hero-visual">
          {/* outer glow ring */}
          <div className="img-glow-ring">
            <div className="img-inner-ring">
              <img src="/heroimg.png" alt="Farrukh Raza" className="hero-photo" />
            </div>
          </div>

          {/* orbiting dot */}
          <div className="orbit-ring">
            <div className="orbit-dot" />
          </div>


        </div>
      </div>

      {/* scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
