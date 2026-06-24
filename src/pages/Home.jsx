import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import { articles } from '../data/articles.js'
import { faqItems } from '../data/faq.js'
import './Home.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Ατομική Συμβουλευτική',
    sub: 'CBT Προσέγγιση',
    desc: 'Εξατομικευμένες συνεδρίες με Γνωσιακή Συμπεριφορική Θεραπεία για άγχος, κατάθλιψη, αυτοκριτική και υπαρξιακές αναζητήσεις.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Ομαδική Ψυχοθεραπεία',
    sub: 'Ομαδική Ανάλυση',
    desc: 'Ομάδες έως 5–6 ατόμων, όπου η ίδια η ομάδα γίνεται θεραπευτικό εργαλείο. Αίσθηση κοινότητας, κατανόησης και ανάπτυξης.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 3h18v13H3z"/><path d="M8 21l4-5 4 5"/>
        <path d="M7 8h10M7 12h6"/>
      </svg>
    ),
    title: 'Online Συνεδρίες',
    sub: 'Zoom | Οπουδήποτε',
    desc: 'Όλες οι υπηρεσίες διατίθενται και online, σε ένα ασφαλές και ιδιωτικό ψηφιακό πλαίσιο. Ιδανικό για όσους βρίσκονται εκτός Αθήνας.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Ομάδα Διατροφικής Εμπειρίας',
    sub: '12 Εβδομάδες',
    desc: 'Μαθαίνω τι «φταίει»: ένας κύκλος 12 συναντήσεων για να ξαναχτίσεις τη σχέση σου με το φαγητό — χωρίς δίαιτες, χωρίς ενοχές.',
  },
]

const reasons = [
  { title: '20+ Χρόνια Εμπειρίας', desc: 'Στη διαιτολογία και τώρα στην ψυχολογική υποστήριξη.' },
  { title: 'Ολιστική Προσέγγιση', desc: 'Σώμα και ψυχή ως αναπόσπαστο σύνολο.' },
  { title: 'Αποδεδειγμένες Μέθοδοι', desc: 'CBT: επιστημονικά τεκμηριωμένη και αποτελεσματική.' },
  { title: 'Απόλυτη Εμπιστευτικότητα', desc: 'Κάθε συνεδρία διέπεται από επαγγελματικό απόρρητο.' },
]

export default function Home() {
  return (
    <>
      <SEOHead
        description="Σύμβουλος Ψυχικής Υγείας & Κλινικός Διαιτολόγος στα Κάτω Πετράλωνα. Ατομική CBT, ομαδική θεραπεία, ψυχολογία διατροφής και online συνεδρίες."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Εισαγωγή">
        <div className="container hero__inner">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="eyebrow">Σύμβουλος Ψυχικής Υγείας &amp; CBT Practitioner</span>
            </div>
            <h1 className="hero__headline">
              Ένα βήμα <em>μπορεί</em><br />να αλλάξει τα πάντα
            </h1>
            <p className="hero__desc">
              Ατομική και ομαδική ψυχολογική υποστήριξη με CBT προσέγγιση,
              σε συνδυασμό με 20 χρόνια εμπειρία στη διατροφή και την ψυχολογία της.
              Κάτω Πετράλωνα &amp; Online.
            </p>
            <div className="hero__free-session">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Δωρεάν εισαγωγική συνεδρία 15–20 λεπτών
            </div>
            <div className="hero__ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Κλείστε Ραντεβού
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Υπηρεσίες
              </Link>
            </div>
            <div className="hero__meta">
              <a href="tel:+306947036194" className="hero__contact-link" aria-label="Τηλεφωνική επικοινωνία">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                6947 036 194
              </a>
              <span className="hero__separator" aria-hidden="true">·</span>
              <a href="mailto:panteliscare@gmail.com" className="hero__contact-link" aria-label="Αποστολή email">
                panteliscare@gmail.com
              </a>
            </div>
          </div>

          <div className="hero__image-wrap" aria-hidden="true">
            <div className="hero__image-frame">
              <img
                src="/images/office-room.jpg"
                alt="Ο χώρος ψυχοθεραπείας του Παντελή Βιωνή στα Κάτω Πετράλωνα"
                loading="eager"
                decoding="async"
                className="hero__img"
              />
            </div>
            <div className="hero__badge-float hero__badge-float--1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Πλήρες απόρρητο</span>
            </div>
            <div className="hero__badge-float hero__badge-float--2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span>Online μέσω Zoom</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section section--warm" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="eyebrow">Τι προσφέρω</span>
              <h2 id="services-heading">Πώς μπορώ να βοηθήσω</h2>
              <p>Κάθε άνθρωπος έχει διαφορετική ανάγκη. Εδώ βρίσκεις όλα τα πλαίσια υποστήριξης που προσφέρω.</p>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <article className="service-card">
                  <div className="service-card__icon" aria-hidden="true">{s.icon}</div>
                  <div className="service-card__sub">{s.sub}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <Link to="/services" className="btn btn-ghost service-card__link">
                    Μάθε περισσότερα
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section" aria-labelledby="about-heading-home">
        <div className="container about-teaser">
          <ScrollReveal direction="left" className="about-teaser__image-wrap">
            <div className="img-frame about-teaser__frame">
              <img
                src="/images/pantelis-portrait.jpg"
                alt="Παντελής Βιωνής — Σύμβουλος Ψυχικής Υγείας & Κλινικός Διαιτολόγος"
                loading="lazy"
                decoding="async"
                className="img-cover"
                style={{ objectPosition: 'top center' }}
              />
            </div>
            <div className="about-teaser__accent-img">
              <img
                src="/images/office-chairs.jpg"
                alt="Χώρος συνεδρίας στα Κάτω Πετράλωνα"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="about-teaser__text">
            <span className="eyebrow">Σχετικά</span>
            <h2 id="about-heading-home">Παντελής Βιωνής</h2>
            <div className="divider" />
            <p className="lead">
              20 χρόνια στη διαιτολογία μου έδωσαν μια πολύτιμη εικόνα: οι άνθρωποι δεν δυσκολεύονται επειδή δεν ξέρουν τι να φάνε — δυσκολεύονται επειδή το φαγητό φέρει βαρύτερα συναισθήματα από αυτά που νομίζουν.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Αυτή η συνειδητοποίηση με οδήγησε βαθύτερα στην ψυχολογία. Πλέον συνδυάζω την εμπειρία της διατροφής με την εξειδίκευσή μου στη Γνωσιακή Συμπεριφορική Θεραπεία (CBT) και την Ομαδική Ανάλυση.
            </p>
            <div className="about-teaser__credentials">
              <span className="badge badge--accent">BSc Ψυχολογίας, Univ. Essex</span>
              <span className="badge badge--accent">CBT Practitioner – EICP</span>
              <span className="badge badge--accent">Κλινικός Διαιτολόγος SRD</span>
              <span className="badge badge--accent">Ομαδική Ανάλυση – ΕΛΕΚΙΝ</span>
            </div>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Μάθε περισσότερα για μένα
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="section section--warm quote-section" aria-label="Φιλοσοφία">
        <div className="container">
          <ScrollReveal>
            <blockquote className="site-quote">
              <p>
                "Η αλλαγή δεν είναι απόφαση —<br />είναι μια διαδικασία κατανόησης του εαυτού."
              </p>
              <footer>
                <cite>Παντελής Βιωνής</cite>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="eyebrow">Γιατί να με επιλέξεις</span>
              <h2 id="why-heading">Μια διαφορετική προσέγγιση</h2>
            </div>
          </ScrollReveal>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="reason-card">
                  <div className="reason-card__num" aria-hidden="true">0{i + 1}</div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="section section--warm" aria-labelledby="articles-home-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow">Σκέψεις &amp; Άρθρα</span>
                <h2 id="articles-home-heading">Μέσα από τα λόγια</h2>
              </div>
              <Link to="/articles" className="btn btn-outline btn-sm">Όλα τα άρθρα</Link>
            </div>
          </ScrollReveal>
          <div className="articles-preview-grid">
            {articles.map((a, i) => (
              <ScrollReveal key={a.slug} delay={i * 100}>
                <article className="article-card">
                  <Link to={`/articles/${a.slug}`} className="article-card__img-wrap" tabIndex="-1" aria-hidden="true">
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="article-card__category">{a.category}</span>
                  </Link>
                  <div className="article-card__body">
                    <time className="article-card__date" dateTime={a.date}>
                      {new Date(a.date).toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <h3 className="article-card__title">
                      <Link to={`/articles/${a.slug}`}>{a.title}</Link>
                    </h3>
                    <p className="article-card__excerpt">{a.excerpt}</p>
                    <div className="article-card__footer">
                      <Link to={`/articles/${a.slug}`} className="btn btn-ghost btn-sm">
                        Διάβασε περισσότερα
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </Link>
                      <span className="article-card__read-time">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {a.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER ── */}
      <section className="section" aria-labelledby="faq-home-heading">
        <div className="container faq-teaser">
          <ScrollReveal className="faq-teaser__header">
            <span className="eyebrow">Συχνές Ερωτήσεις</span>
            <h2 id="faq-home-heading">Έχεις απορίες;</h2>
            <p>Μερικές από τις πιο συχνές ερωτήσεις που λαμβάνω.</p>
          </ScrollReveal>
          <div className="faq-teaser__list">
            {faqItems.slice(0, 4).map((f, i) => (
              <ScrollReveal key={f.question} delay={i * 80} className="faq-teaser__item">
                <details>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link to="/faq" className="btn btn-outline">Δες όλες τις ερωτήσεις</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta-section__bg" aria-hidden="true">
          <img src="/images/office-waiting.jpg" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="container cta-section__inner">
          <ScrollReveal>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Ξεκίνα σήμερα</span>
            <h2 id="cta-heading" style={{ color: '#fff' }}>
              Το πρώτο βήμα<br />είναι η επικοινωνία
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px', marginBottom: '2rem' }}>
              Μπορείτε να επικοινωνήσετε μαζί μου για οποιαδήποτε ερώτηση. Η πρώτη μας επαφή είναι απλή και χωρίς δεσμεύσεις.
            </p>
            <div className="cta-section__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Επικοινωνία</Link>
              <a href="tel:+306947036194" className="btn btn-outline-light btn-lg">6947 036 194</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
