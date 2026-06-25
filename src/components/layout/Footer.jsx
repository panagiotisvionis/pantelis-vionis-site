import { Link } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  { to: '/',         label: 'Αρχική' },
  { to: '/about',    label: 'Σχετικά' },
  { to: '/services', label: 'Υπηρεσίες' },
  { to: '/articles', label: 'Άρθρα' },
  { to: '/podcast',  label: 'Podcast' },
  { to: '/faq',      label: 'FAQ' },
  { to: '/contact',  label: 'Επικοινωνία' },
]

const services = [
  { to: '/services', label: 'Ατομική Συμβουλευτική CBT' },
  { to: '/services', label: 'Ομαδική Ψυχοθεραπεία' },
  { to: '/services', label: 'Ομάδα Διατροφικής Εμπειρίας' },
  { to: '/services', label: 'Online Συνεδρίες' },
]

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Αρχική">
            <span className="footer-logo__name">Παντελής Βιωνής</span>
            <span className="footer-logo__sub">Σύμβουλος Ψυχικής Υγείας</span>
          </Link>
          <p className="footer-tagline">
            Ατομική &amp; ομαδική ψυχολογική υποστήριξη με CBT προσέγγιση.
            Γραφείο στα Κάτω Πετράλωνα και online μέσω Zoom.
          </p>
          <div className="footer-social" aria-label="Social media">
            <a
              href="https://www.facebook.com/profile.php?id=61576811345688"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pantelis.mindspace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h3 className="footer-heading">Πλοήγηση</h3>
          <ul role="list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-nav">
          <h3 className="footer-heading">Υπηρεσίες</h3>
          <ul role="list">
            {services.map((s) => (
              <li key={s.label}>
                <Link to={s.to}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-heading">Επικοινωνία</h3>
          <address>
            <ul role="list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Αιγηιδών 32β, Κάτω Πετράλωνα, Αθήνα</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+306947036194">6947 036 194</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:panteliscare@gmail.com">panteliscare@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Παντελής Βιωνής — ΚΑΔ 86901800
          </p>
          <p className="footer-disclaimer">
            Η ιστοσελίδα αυτή παρέχει γενικές πληροφορίες και δεν αντικαθιστά την επαγγελματική ψυχιατρική ή ψυχολογική βοήθεια.
            Σε περίπτωση κρίσης επικοινωνήστε με την Γραμμή Ψυχολογικής Υποστήριξης:{' '}
            <a href="tel:10306">10306</a> ή την Γραμμή ΣΟΣ Ψυχής:{' '}
            <a href="tel:1018">1018</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
