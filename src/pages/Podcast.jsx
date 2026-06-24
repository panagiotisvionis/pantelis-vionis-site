import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import './Podcast.css'

const episodes = [
  {
    number: 3,
    title: 'Οριακή Διαταραχή Προσωπικότητας & Διατροφικές Διαταραχές',
    subtitle: 'Ποια είναι η σύνδεση;',
    description:
      'Η Οριακή Διαταραχή Προσωπικότητας (BPD) χαρακτηρίζεται από έντονα συναισθήματα, φόβο εγκατάλειψης, και μια συνεχής μάχη με την ταυτότητα. Σε αυτό το επεισόδιο εξερευνούμε γιατί η συναισθηματική αστάθεια μπορεί να οδηγεί σε επεισόδια υπερφαγίας ή στέρησης — και ποιος είναι ο ρόλος της παρορμητικότητας.',
    youtubeId: 'gYcbdByJd94',
    tags: ['BPD', 'Διατροφικές Διαταραχές', 'Συναισθηματικό Φαγητό'],
  },
  {
    number: 2,
    title: 'Τι τρως τελικά;',
    subtitle: 'Το Ψυγείο',
    description:
      'Δεν είναι διατροφική ανάλυση. Είναι εκείνη η ερώτηση που πρέπει να κάνουμε όταν τρώμε χωρίς να πεινάμε. Μήπως τρως για να καλύψεις τη μοναξιά; Μήπως τρως θυμό, φόβο, απόρριψη; Μήπως το φαγητό είναι πιο σταθερό από τους ανθρώπους γύρω σου;',
    youtubeId: 'ZEnwImYbPgU',
    tags: ['Συναισθηματική Πείνα', 'Αυτογνωσία', 'Ψυχολογία Διατροφής'],
  },
  {
    number: 1,
    title: 'Γιατί έφτιαξα το podcast',
    subtitle: 'Το πρώτο επεισόδιο είναι προσωπικό',
    description:
      'Συστήνομαι — όχι μόνο επαγγελματικά, αλλά ανθρώπινα. Μιλάω για το γιατί ξεκίνησα αυτό το εγχείρημα, για τη σχέση μου με το φαγητό, τον ψυχισμό, τις ιστορίες που κουβαλάμε πίσω από κάθε «κρίση» πείνας. Δεν ήρθα να σου πω τι να φας. Ήρθα να μιλήσουμε για το γιατί πολλές φορές «τρώμε» για να αντέξουμε.',
    youtubeId: 'z-qYHQllEj8',
    tags: ['Εισαγωγή', 'Ψυχή & Τροφή', 'Προσωπική Ιστορία'],
  },
]

export default function Podcast() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: 'Ψυχή και Τροφή',
    description:
      'Podcast για τη σχέση ψυχισμού και διατροφής, από τον Παντελή Βιωνή — Σύμβουλο Ψυχικής Υγείας & Κλινικό Διαιτολόγο.',
    url: 'https://pantelisvionis.gr/podcast',
    author: { '@type': 'Person', name: 'Παντελής Βιωνής' },
  }

  return (
    <>
      <SEOHead
        title="Podcast – Ψυχή και Τροφή"
        description="Podcast για τη σύνδεση ψυχισμού και διατροφής. Επεισόδια για συναισθηματικό φαγητό, BPD, αυτογνωσία και ψυχική υγεία — από τον Παντελή Βιωνή."
        path="/podcast"
        image="/images/pantelis-portrait.jpg"
        schema={schema}
      />

      {/* Hero */}
      <section className="podcast-hero" aria-label="Εισαγωγή podcast">
        <div className="podcast-hero__bg" aria-hidden="true">
          <img
            src="/images/pantelis-portrait.jpg"
            alt=""
            loading="eager"
            decoding="async"
          />
          <div className="podcast-hero__overlay" />
        </div>
        <div className="container podcast-hero__content">
          <ScrollReveal>
            <div className="podcast-hero__badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a3 3 0 013 3v6a3 3 0 01-6 0V5a3 3 0 013-3z"/>
                <path d="M19 10a7 7 0 01-14 0H3a9 9 0 0017.95 1H19v-1z"/>
                <line x1="12" y1="19" x2="12" y2="23" strokeWidth="2" stroke="currentColor" fill="none"/>
                <line x1="8" y1="23" x2="16" y2="23" strokeWidth="2" stroke="currentColor" fill="none"/>
              </svg>
              Podcast
            </div>
            <h1 className="podcast-hero__title">Ψυχή και Τροφή</h1>
            <p className="podcast-hero__desc">
              Μια σειρά ειλικρινών συνομιλιών για τη σχέση ψυχισμού και διατροφής.
              Δεν μιλάμε για θερμίδες — μιλάμε για αυτό που κρύβεται πίσω από κάθε
              παρόρμηση, κάθε «κρίση πείνας», κάθε στιγμή που τρώμε για να αντέξουμε.
            </p>
            <div className="podcast-hero__meta">
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
                YouTube
              </span>
              <span aria-hidden="true">·</span>
              <span>{episodes.length} Επεισόδια</span>
              <span aria-hidden="true">·</span>
              <span>Παντελής Βιωνής</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Episodes */}
      <section className="section" aria-labelledby="episodes-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">Επεισόδια</span>
              <h2 id="episodes-heading">Όλα τα επεισόδια</h2>
            </div>
          </ScrollReveal>

          <div className="episodes-list">
            {episodes.map((ep, i) => (
              <ScrollReveal key={ep.number} delay={i * 100} className="episode-card">
                <div className="episode-card__video">
                  <iframe
                    src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                    title={`Ψυχή και Τροφή – Επεισόδιο ${ep.number}: ${ep.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="episode-card__body">
                  <div className="episode-card__num">Επεισόδιο #{ep.number}</div>
                  <h3 className="episode-card__title">{ep.title}</h3>
                  <p className="episode-card__subtitle">{ep.subtitle}</p>
                  <p className="episode-card__desc">{ep.description}</p>
                  <div className="episode-card__tags">
                    {ep.tags.map((t) => (
                      <span key={t} className="badge badge--accent">{t}</span>
                    ))}
                  </div>
                  <a
                    href={`https://youtu.be/${ep.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm episode-card__yt-btn"
                    aria-label={`Άνοιγμα επεισοδίου ${ep.number} στο YouTube`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                    </svg>
                    Άνοιξε στο YouTube
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section section--warm" aria-labelledby="podcast-cta-heading">
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="eyebrow">Συνδρομή</span>
            <h2 id="podcast-cta-heading">Μην χάσεις κανένα επεισόδιο</h2>
            <p style={{ marginBottom: '2rem' }}>
              Κάνε subscribe στο κανάλι και ενεργοποίησε τις ειδοποιήσεις για να μαθαίνεις
              πρώτος/η για κάθε νέο επεισόδιο «Ψυχή και Τροφή».
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.youtube.com/@pantelis.mindspace"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
                Subscribe στο YouTube
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Μίλα μαζί μου
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
