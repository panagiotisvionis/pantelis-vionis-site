import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import { faqItems } from '../data/faq.js'
import './FAQ.css'

const categories = ['Όλα', 'Θεραπεία', 'Συνεδρίες', 'Online', 'Ομάδες', 'Απόρρητο', 'Επικοινωνία']

function AccordionItem({ item, isOpen, onToggle }) {
  const id = `faq-${item.question.slice(0, 20).replace(/\s/g, '-')}`

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-trigger`}
      >
        <span>{item.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className="faq-item__answer"
        hidden={!isOpen}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex]       = useState(null)
  const [activeCategory, setCategory]   = useState('Όλα')

  const filtered = activeCategory === 'Όλα'
    ? faqItems
    : faqItems.filter((f) => f.category === activeCategory)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <>
      <SEOHead
        title="Συχνές Ερωτήσεις"
        description="Συχνές ερωτήσεις για ψυχολογική CBT συμβουλευτική, ομαδική θεραπεία, online συνεδρίες, απόρρητο, κόστος και ραντεβού. Παντελής Βιωνής, Αθήνα."
        path="/faq"
        schema={schema}
      />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Εισαγωγή σελίδας">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Έχεις απορίες</span>
            <h1>Συχνές Ερωτήσεις</h1>
            <p className="lead">
              Εδώ θα βρεις απαντήσεις στις πιο συχνές ερωτήσεις για τις συνεδρίες,
              τη θεραπεία, τα κόστη και το online πλαίσιο.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" aria-label="Ερωτήσεις και απαντήσεις">
        <div className="container faq-layout">

          {/* Category filter */}
          <ScrollReveal className="faq-categories" as="nav" aria-label="Κατηγορίες FAQ">
            <h3>Κατηγορίες</h3>
            <ul role="list">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    className={`faq-cat-btn ${activeCategory === c ? 'faq-cat-btn--active' : ''}`}
                    onClick={() => { setCategory(c); setOpenIndex(null) }}
                    aria-pressed={activeCategory === c}
                  >
                    {c}
                    <span className="faq-cat-btn__count">
                      {c === 'Όλα' ? faqItems.length : faqItems.filter((f) => f.category === c).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="faq-sidebar-cta">
              <p>Δεν βρήκες απάντηση;</p>
              <Link to="/contact" className="btn btn-primary btn-sm">Ρώτα με άμεσα</Link>
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <div className="faq-accordion" role="list" aria-live="polite">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.question} delay={i * 50} role="listitem">
                <AccordionItem
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--warm text-center" aria-labelledby="faq-cta-heading">
        <div className="container" style={{ maxWidth: '560px' }}>
          <ScrollReveal>
            <span className="eyebrow">Επικοινωνία</span>
            <h2 id="faq-cta-heading">Έχεις κι άλλες ερωτήσεις;</h2>
            <p style={{ marginBottom: '2rem' }}>
              Μπορείς να μου στείλεις μήνυμα ή να με καλέσεις και θα χαρώ να σου
              εξηγήσω οτιδήποτε σε απασχολεί.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Επικοινωνία</Link>
              <a href="tel:+306947036194" className="btn btn-outline">6947 036 194</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
