import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import { imgUrl } from '../utils/imgUrl.js'
import PageHeroBg from '../components/ui/PageHeroBg.jsx'
import './About.css'

const credentials = [
  {
    year: '20+ χρόνια',
    title: 'Κλινικός Διαιτολόγος-Διατροφολόγος (SRD)',
    org: 'Νόμιμη επιχείρηση – ΚΑΔ 86901800',
    desc: 'Δύο δεκαετίες συνεργασίας με ανθρώπους που αντιμετωπίζουν διατροφικές δυσκολίες, με έμφαση στη συναισθηματική σχέση με το φαγητό.',
  },
  {
    year: 'Σε εξέλιξη',
    title: 'BSc Ψυχολογίας',
    org: 'University of Essex, Αγγλία',
    desc: 'Ακαδημαϊκό υπόβαθρο στην ψυχολογία που συνδυάζεται με την κλινική εμπειρία στη διατροφή, δημιουργώντας μια μοναδική ολιστική προσέγγιση.',
  },
  {
    year: 'Ολοκληρώθηκε',
    title: 'Εξειδίκευση Γνωσιακής Συμπεριφορικής Θεραπείας (CBT)',
    org: 'EICP – Ευρωπαϊκό Ινστιτούτο Συμβουλευτικής & Ψυχοθεραπείας',
    desc: 'Εντατική εκπαίδευση στη CBT, μία από τις πιο αποτελεσματικές και επιστημονικά τεκμηριωμένες μεθόδους ψυχολογικής υποστήριξης.',
  },
  {
    year: 'Σε εξέλιξη',
    title: 'Εκπαίδευση Ομαδικής Ανάλυσης',
    org: 'ΕΛΕΚΙΝ – Ελληνικό Ινστιτούτο Αναλυτικής Ψυχοθεραπείας Ομάδας & Οικογένειας',
    desc: 'Εκπαίδευση στη θεωρία και πρακτική της ομαδικής ανάλυσης, με έμφαση στη δυναμική της ομάδας ως θεραπευτικό εργαλείο.',
  },
]

const values = [
  {
    title: 'Ανθρώπινη σύνδεση',
    desc: 'Η θεραπευτική σχέση είναι ο πυρήνας της δουλειάς μου. Η κατανόηση έρχεται πριν από οποιαδήποτε τεχνική.',
  },
  {
    title: 'Επιστημονική ακρίβεια',
    desc: 'Χρησιμοποιώ μόνο αποδεδειγμένες, επιστημονικά τεκμηριωμένες μεθόδους. Η CBT είναι gold standard παγκοσμίως.',
  },
  {
    title: 'Ολιστική ματιά',
    desc: 'Σώμα και ψυχή είναι αναπόσπαστα. Η εμπειρία μου στη διατροφή μού δίνει μια σπάνια ολιστική οπτική.',
  },
  {
    title: 'Σεβασμός στον ρυθμό',
    desc: 'Κάθε άνθρωπος αλλάζει με τον δικό του ρυθμό. Δεν πιέζω — υποστηρίζω.',
  },
]

export default function About() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Παντελής Βιωνής',
      jobTitle: 'Σύμβουλος Ψυχικής Υγείας – CBT Practitioner & Κλινικός Διαιτολόγος',
      description:
        'Κλινικός Διαιτολόγος με 20+ χρόνια εμπειρίας, BSc Ψυχολογίας (University of Essex), CBT Practitioner (EICP) και εκπαίδευση στην Ομαδική Ανάλυση (ΕΛΕΚΙΝ).',
      telephone: '+306947036194',
      email: 'panteliscare@gmail.com',
    },
  }

  return (
    <>
      <SEOHead
        title="Σχετικά"
        description="Ο Παντελής Βιωνής είναι Κλινικός Διαιτολόγος (SRD) με 20+ χρόνια εμπειρίας, BSc Ψυχολογίας (Essex), CBT Practitioner (EICP) και εκπαίδευση στην Ομαδική Ανάλυση (ΕΛΕΚΙΝ)."
        path="/about"
        schema={schema}
      />

      {/* Page Hero */}
      <section className="page-hero about-hero" aria-label="Εισαγωγή σελίδας">
        <PageHeroBg page="about" />
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Γνωριμία</span>
            <h1>Παντελής Βιωνής</h1>
            <p className="lead">
              Σύμβουλος Ψυχικής Υγείας &amp; Κλινικός Διαιτολόγος — μια διαδρομή δύο δεκαετιών
              που οδήγησε σε μια μοναδική ολιστική προσέγγιση.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section" aria-labelledby="bio-heading">
        <div className="container about-bio">
          <ScrollReveal direction="left" className="about-bio__image">
            <div className="img-frame about-bio__frame">
              <img
                src={imgUrl('/images/pantelis-portrait.jpg')}
                alt="Παντελής Βιωνής — Σύμβουλος Ψυχικής Υγείας & Κλινικός Διαιτολόγος"
                loading="eager"
                decoding="async"
                className="img-cover"
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="about-bio__text">
            <h2 id="bio-heading">Η πορεία μου</h2>
            <div className="divider" />
            <p className="lead">
              Ξεκίνησα πριν από 20 χρόνια ως Κλινικός Διαιτολόγος-Διατροφολόγος. Σύντομα
              κατάλαβα ότι το «τι τρώω» ήταν πολύ πιο μικρό από το «γιατί τρώω» — και αυτή
              η συνειδητοποίηση άλλαξε τη διαδρομή μου.
            </p>
            <p>
              Τα χρόνια δουλειάς με ανθρώπους που αντιμετώπιζαν συναισθηματική υπερφαγία,
              ενοχές γύρω από το φαγητό ή ψυχολογικό μπλοκάρισμα με οδήγησαν βαθύτερα
              στην ψυχολογία. Παρακολούθησα το πτυχίο Ψυχολογίας στο University of Essex,
              εξειδικεύτηκα στη Γνωσιακή Συμπεριφορική Θεραπεία μέσω του EICP και βρίσκομαι
              σε εκπαίδευση Ομαδικής Ανάλυσης στο ΕΛΕΚΙΝ.
            </p>
            <p>
              Πλέον εργάζομαι ως Σύμβουλος Ψυχικής Υγείας με έναν σπάνιο συνδυασμό: βαθιά
              γνώση της σχέσης ανθρώπου-διατροφής και επιστημονικά τεκμηριωμένη ψυχολογική
              υποστήριξη μέσα από CBT και Ομαδική Ανάλυση.
            </p>
            <div className="about-bio__ctas">
              <Link to="/contact" className="btn btn-primary">Επικοινωνία</Link>
              <Link to="/services" className="btn btn-outline">Υπηρεσίες</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials Timeline */}
      <section className="section section--warm" aria-labelledby="credentials-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="eyebrow">Εκπαίδευση &amp; Εξειδίκευση</span>
              <h2 id="credentials-heading">Ακαδημαϊκό &amp; Επαγγελματικό Υπόβαθρο</h2>
            </div>
          </ScrollReveal>

          <div className="credentials-timeline" role="list">
            {credentials.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100} role="listitem">
                <div className="credential-item">
                  <div className="credential-item__year">
                    <span>{c.year}</span>
                  </div>
                  <div className="credential-item__body">
                    <h3 className="credential-item__title">{c.title}</h3>
                    <div className="credential-item__org">{c.org}</div>
                    <p className="credential-item__desc">{c.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="eyebrow">Αξίες</span>
              <h2 id="values-heading">Πώς δουλεύω</h2>
              <p>Οι αρχές που καθοδηγούν κάθε μου συνεδρία — ατομική ή ομαδική.</p>
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="value-card">
                  <div className="value-card__num" aria-hidden="true">0{i + 1}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="section section--warm" aria-labelledby="office-heading">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="eyebrow">Ο χώρος</span>
              <h2 id="office-heading">Το Γραφείο</h2>
              <p>Ένας ζεστός, ασφαλής και ιδιωτικός χώρος στα Κάτω Πετράλωνα, Αθήνα.</p>
            </div>
          </ScrollReveal>
          <div className="office-gallery">
            <ScrollReveal className="office-gallery__main">
              <div className="img-frame" style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden' }}>
                <img
                  src={imgUrl('/images/office-full.jpg')}
                  alt="Πλήρης άποψη του θεραπευτικού χώρου — Κάτω Πετράλωνα"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '4/3' }}
                />
              </div>
            </ScrollReveal>
            <div className="office-gallery__side">
              <ScrollReveal delay={100}>
                <div className="img-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                  <img
                    src={imgUrl('/images/office-room.jpg')}
                    alt="Χώρος συνεδρίας με ζεστά φωτιστικά και έργα τέχνης"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1' }}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="img-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                  <img
                    src={imgUrl('/images/office-fountain.jpg')}
                    alt="Εσωτερικός καταρράκτης — λεπτομέρεια από το θεραπευτήριο"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1' }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal>
            <p className="office-address">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Αγηιδών 32β, Κάτω Πετράλωνα, Αθήνα · Online μέσω Zoom
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center" aria-labelledby="about-cta-heading">
        <div className="container" style={{ maxWidth: '640px' }}>
          <ScrollReveal>
            <span className="eyebrow">Ξεκίνα</span>
            <h2 id="about-cta-heading">Έτοιμος να μιλήσεις;</h2>
            <p style={{ marginBottom: '2rem' }}>
              Επικοινώνησε μαζί μου για οποιαδήποτε ερώτηση. Χωρίς δεσμεύσεις, χωρίς πίεση.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Πάρε επαφή</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
