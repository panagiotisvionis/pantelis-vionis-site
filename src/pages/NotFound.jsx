import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'

export default function NotFound() {
  return (
    <>
      <SEOHead title="404 – Σελίδα δεν βρέθηκε" />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        paddingTop: 'var(--header-h)',
        background: 'var(--clr-bg-warm)',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 700,
          color: 'var(--clr-accent)',
          opacity: 0.25,
          lineHeight: 1,
        }}>404</p>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '1rem 0' }}>
          Αυτή η σελίδα δεν υπάρχει
        </h1>
        <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
          Η σελίδα που ψάχνεις δεν βρέθηκε. Ίσως το link είναι λάθος ή η σελίδα μετακινήθηκε.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">Αρχική Σελίδα</Link>
          <Link to="/contact" className="btn btn-outline">Επικοινωνία</Link>
        </div>
      </div>
    </>
  )
}
