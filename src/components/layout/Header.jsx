import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/',         label: 'Αρχική' },
  { to: '/about',    label: 'Σχετικά' },
  { to: '/services', label: 'Υπηρεσίες' },
  { to: '/articles', label: 'Άρθρα' },
  { to: '/podcast',  label: 'Podcast' },
  { to: '/faq',      label: 'FAQ' },
  { to: '/contact',  label: 'Επικοινωνία' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { pathname }              = useLocation()
  const menuRef                   = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`} role="banner">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__logo" aria-label="Αρχική σελίδα">
            <span className="logo-name">Παντελής Βιωνής</span>
            <span className="logo-subtitle">Σύμβουλος Ψυχικής Υγείας</span>
          </Link>

          <nav className="site-header__nav" aria-label="Κύρια πλοήγηση">
            <ul role="list">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link--active' : ''}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/contact" className="btn btn-primary btn-sm site-header__cta" aria-label="Κλείστε ραντεβού">
            Ραντεβού
          </Link>

          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Κινητή πλοήγηση"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map((l, i) => (
            <li key={l.to} style={{ '--i': i }}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__footer">
          <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Κλείστε Ραντεβού
          </Link>
          <div className="mobile-menu__contact">
            <a href="tel:+306947036194" aria-label="Τηλεφωνική επικοινωνία">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              6947 036 194
            </a>
            <a href="mailto:panteliscare@gmail.com" aria-label="Αποστολή email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              panteliscare@gmail.com
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
