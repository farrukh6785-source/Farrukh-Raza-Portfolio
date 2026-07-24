import { useState, useEffect } from 'react'
import { IconSun, IconMoon } from './Icons'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [indicatorStyle, setIndicator] = useState({})
  const [dark, setDark] = useState(true)   // dark mode by default

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = navItems.map(i => i.href.slice(1))
      let cur = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sliding pill indicator
  useEffect(() => {
    const el = document.querySelector(`.nav-links a[href="#${active}"]`)
    if (el) {
      const li = el.parentElement
      setIndicator({
        width: li.offsetWidth,
        left: li.offsetLeft,
        opacity: 1
      })
    } else {
      setIndicator({ opacity: 0 })
    }
  }, [active])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo">Farrukh <span>Raza</span></div>

        <div className="nav-menu-wrapper">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={active === item.href.slice(1) ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Sliding background pill */}
            <li className="nav-indicator-pill" style={indicatorStyle} />
          </ul>

          <button
            className="theme-toggle"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle-track">
              <IconSun className="theme-icon theme-icon-sun" />
              <IconMoon className="theme-icon theme-icon-moon" />
            </span>
          </button>



          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        <div className="drawer-inner">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`drawer-link${active === item.href.slice(1) ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="drawer-bottom">
            <button
              className="drawer-theme-btn"
              onClick={() => setDark(d => !d)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
            >
              {dark ? (
                <>
                  <IconSun style={{ fontSize: '1.1em' }} /> Light Mode
                </>
              ) : (
                <>
                  <IconMoon style={{ fontSize: '1.1em' }} /> Dark Mode
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </>
  )
}
