import { useState } from 'react'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import PageHeroBg from '../components/ui/PageHeroBg.jsx'
import './Contact.css'

const services = [
  'Ατομική Συμβουλευτική CBT',
  'Ομαδική Ψυχοθεραπεία',
  'Ομάδα Διατροφικής Εμπειρίας',
  'Online Συνεδρία',
  'Δεν είμαι σίγουρος/η',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Παρακαλώ εισάγετε το όνομά σας.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Παρακαλώ εισάγετε έγκυρο email.'
    if (!form.message.trim()) e.message = 'Παρακαλώ γράψτε ένα μήνυμα.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate async — replace with EmailJS / Formspree / backend call
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Επικοινωνία – Παντελής Βιωνής',
    url: 'https://pantelisvionis.gr/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Παντελής Βιωνής',
      telephone: '+306947036194',
      email: 'panteliscare@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Αιγηιδών 32β',
        addressLocality: 'Κάτω Πετράλωνα',
        addressRegion: 'Αθήνα',
        addressCountry: 'GR',
      },
    },
  }

  return (
    <>
      <SEOHead
        title="Επικοινωνία"
        description="Επικοινωνήστε με τον Παντελή Βιωνή για ατομική CBT, ομαδική θεραπεία ή online συνεδρία. Τηλ: 6947 036 194 | panteliscare@gmail.com"
        path="/contact"
        schema={schema}
      />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Εισαγωγή σελίδας">
        <PageHeroBg page="contact" />
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Ξεκίνα σήμερα</span>
            <h1>Επικοινωνία</h1>
            <p className="lead">
              Η πρώτη επαφή είναι πάντα χωρίς δεσμεύσεις. Στείλε μήνυμα, τηλεφώνησε ή
              γέμισε τη φόρμα παρακάτω — θα απαντήσω εντός 24 ωρών.
            </p>
            <div className="contact-free-session">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>
                <strong>Δωρεάν εισαγωγική συνεδρία 15–20 λεπτών</strong> — για να δεις αν
                αισθανθείς άνετα μαζί μου πριν αποφασίσεις οτιδήποτε.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" aria-label="Φόρμα επικοινωνίας και στοιχεία">
        <div className="container contact-layout">

          {/* Info column */}
          <ScrollReveal direction="left" className="contact-info">
            <div className="contact-info__block">
              <h2>Στοιχεία επικοινωνίας</h2>
              <div className="divider" />
              <address>
                <ul className="contact-info__list" role="list">
                  <li>
                    <div className="contact-info__icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-info__label">Τηλέφωνο</span>
                      <a href="tel:+306947036194" className="contact-info__value">6947 036 194</a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info__icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-info__label">Email</span>
                      <a href="mailto:panteliscare@gmail.com" className="contact-info__value">panteliscare@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info__icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-info__label">Διεύθυνση</span>
                      <span className="contact-info__value">Αιγηιδών 32β, Κάτω Πετράλωνα, Αθήνα</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info__icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-info__label">Ώρες λειτουργίας</span>
                      <span className="contact-info__value">Δευτέρα–Παρασκευή, 09:00–21:00</span>
                    </div>
                  </li>
                </ul>
              </address>
            </div>

            <div className="contact-info__social">
              <span className="contact-info__label">Social Media</span>
              <div className="contact-social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61576811345688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/pantelis.mindspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                  @pantelis.mindspace
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map" aria-label="Χάρτης τοποθεσίας">
              <iframe
                title="Χάρτης: Αιγηιδών 32β, Κάτω Πετράλωνα"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.5!2d23.7092!3d37.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd27aa!2z0JrQsNGC0LUg0J_QtNGC0YDQsNC70YjQvdCw!5e0!3m2!1sel!2sgr!4v1"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
              />
              <p className="contact-map__address">
                Αιγηιδών 32β, Κάτω Πετράλωνα · Αθήνα
              </p>
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal direction="right" className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="alert">
                <div className="contact-success__icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h2>Το μήνυμά σου εστάλη!</h2>
                <p>Θα επικοινωνήσω μαζί σου εντός 24 ωρών. Σε ευχαριστώ που ήρθες σε επαφή.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                >
                  Αποστολή νέου μηνύματος
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Φόρμα επικοινωνίας"
              >
                <h2>Στείλε μήνυμα</h2>
                <p className="contact-form__subtitle">
                  Συμπλήρωσε τα στοιχεία σου και θα σου απαντήσω σύντομα.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Όνομα <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Το ονοματεπώνυμό σου"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Τηλέφωνο <span className="form-optional">(προαιρετικό)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="69xxxxxxxx"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">
                      Ενδιαφέρον για <span className="form-optional">(προαιρετικό)</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Επίλεξε υπηρεσία...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Μήνυμα <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Πες μου λίγα λόγια για αυτό που σε απασχολεί..."
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
                </div>

                <p className="contact-form__privacy">
                  Τα στοιχεία σου παραμένουν απόρρητα και δεν κοινοποιούνται σε τρίτους.
                  Σεβόμαστε πλήρως τον GDPR.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg contact-form__submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Αποστολή…
                    </>
                  ) : (
                    <>
                      Αποστολή μηνύματος
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
