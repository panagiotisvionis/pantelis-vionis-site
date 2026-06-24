import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import { imgUrl } from '../utils/imgUrl.js'
import './Services.css'

const services = [
  {
    id: 'cbt',
    image: imgUrl('/images/office-chairs.jpg'),
    imageAlt: 'Χώρος ατομικής CBT συμβουλευτικής',
    eyebrow: 'Ατομική Υποστήριξη',
    title: 'Ατομική Συμβουλευτική CBT',
    lead: 'Η Γνωσιακή Συμπεριφορική Θεραπεία είναι μία από τις πιο επιστημονικά τεκμηριωμένες μεθόδους ψυχολογικής υποστήριξης παγκοσμίως.',
    body: 'Στόχος είναι να αναγνωρίσουμε μαζί τα μοτίβα σκέψης και συμπεριφοράς που σε κρατούν πίσω — και να χτίσουμε νέα, υγιή εργαλεία ζωής. Δεν πρόκειται για θεωρητικές συζητήσεις, αλλά για πρακτική δουλειά με αποτελέσματα που αισθάνεσαι.',
    forWhom: [
      'Άγχος και αγχώδεις διαταραχές',
      'Κατάθλιψη και συναισθηματική κόπωση',
      'Χαμηλή αυτοεκτίμηση και αυτοκριτική',
      'Υπαρξιακά ερωτήματα και έλλειψη νοήματος',
      'Δυσκολίες στις σχέσεις και τα συναισθήματα',
      'Αγχώδεις σκέψεις και φαύλοι κύκλοι',
    ],
    details: [
      { label: 'Διάρκεια συνεδρίας', value: '50–60 λεπτά' },
      { label: 'Τύπος', value: 'Δια ζώσης ή Online (Zoom)' },
      { label: 'Γλώσσα', value: 'Ελληνικά' },
      { label: 'Προγραμματισμός', value: 'Μετά από αρχική επαφή' },
    ],
  },
  {
    id: 'group',
    image: imgUrl('/images/office-room.jpg'),
    imageAlt: 'Ευρύς χώρος για ομαδική ψυχοθεραπεία',
    eyebrow: 'Ομαδική Υποστήριξη',
    title: 'Ομαδική Ψυχοθεραπεία',
    lead: 'Η ομάδα είναι από μόνη της ένα ισχυρό θεραπευτικό εργαλείο. Η συνειδητοποίηση ότι δεν είσαι μόνος αλλάζει τα πάντα.',
    body: 'Μέσα σε μικρές, κλειστές ομάδες (5–6 άτομα), δουλεύουμε με την ομαδική δυναμική ως κύριο μέσο θεραπείας. Κάθε μέλος επιλέγεται μετά από ατομική συνέντευξη, ώστε να εξασφαλίζεται η ομοιογένεια και η ασφάλεια του πλαισίου.',
    forWhom: [
      'Άτομα που νιώθουν απομόνωση ή δυσκολία σύνδεσης',
      'Όσοι θέλουν να εξερευνήσουν δυναμικές σχέσεων',
      'Άτομα που έχουν κάνει ατομική θεραπεία και θέλουν βάθος',
      'Εκείνοι που αναζητούν αίσθηση κοινότητας',
    ],
    details: [
      { label: 'Αριθμός μελών', value: 'Έως 5–6 άτομα' },
      { label: 'Τύπος', value: 'Δια ζώσης ή Online' },
      { label: 'Επιλογή', value: 'Μετά από ατομική συνέντευξη' },
      { label: 'Συχνότητα', value: 'Εβδομαδιαία' },
    ],
  },
  {
    id: 'dietary',
    image: imgUrl('/images/office-waiting.jpg'),
    imageAlt: 'Χώρος αναμονής — Ομάδα Διατροφικής Εμπειρίας',
    eyebrow: '12 Εβδομάδες',
    title: 'Ομάδα Διατροφικής Εμπειρίας',
    lead: 'Δεν είναι άλλη μία δίαιτα. Είναι μια ομαδική εμπειρία που σε βοηθά να ανακαλύψεις τι πραγματικά κρύβεται πίσω από τη σχέση σου με το φαγητό.',
    body: 'Ένας κύκλος 12 εβδομαδιαίων συναντήσεων που συνδυάζει την εικοσαετή εμπειρία στη διαιτολογία με την ψυχολογική κατανόηση. Δεν μαθαίνεις τι να φας — μαθαίνεις ποιος είσαι όταν τρως. Και αυτή η γνώση αλλάζει τα πάντα.',
    forWhom: [
      'Όσοι κουράστηκαν από δίαιτες που τελειώνουν και ξαναρχίζουν',
      'Άτομα με συναισθηματική υπερφαγία ή ενοχές γύρω από το φαγητό',
      'Εκείνοι που θέλουν να απολαμβάνουν το φαγητό χωρίς φόβο',
      'Άτομα με βουλιμία (όχι ανορεξία, που απαιτεί ψυχιατρική παρακολούθηση)',
    ],
    details: [
      { label: 'Διάρκεια κύκλου', value: '12 εβδομάδες' },
      { label: 'Αριθμός μελών', value: 'Έως 5–6 άτομα' },
      { label: 'Τύπος', value: 'Δια ζώσης ή Online (Zoom)' },
      { label: 'Επιλογή', value: 'Μετά από ατομική συνέντευξη' },
    ],
  },
  {
    id: 'online',
    image: imgUrl('/images/office-fountain.jpg'),
    imageAlt: 'Εσωτερικός καταρράκτης — σύμβολο ήρεμης ψυχολογικής υποστήριξης',
    eyebrow: 'Online',
    title: 'Online Συνεδρίες μέσω Zoom',
    lead: 'Όλες οι υπηρεσίες διατίθενται και online, σε ένα ασφαλές, ιδιωτικό ψηφιακό πλαίσιο εξίσου αποτελεσματικό με τις δια ζώσης συνεδρίες.',
    body: 'Η έρευνα επιβεβαιώνει ότι η CBT μέσω βιντεοκλήσης έχει συγκρίσιμα αποτελέσματα. Χρειάζεσαι μόνο έναν ήσυχο, ιδιωτικό χώρο και σύνδεση στο διαδίκτυο. Ιδανικό για όσους βρίσκονται εκτός Αθήνας ή απλώς προτιμούν την άνεση του σπιτιού τους.',
    forWhom: [
      'Ανθρώπους εκτός Αθήνας ή στο εξωτερικό',
      'Όσους έχουν περιορισμένο χρόνο ή κινητικά προβλήματα',
      'Εκείνους που νιώθουν πιο άνετα στον ιδιωτικό τους χώρο',
      'Άτομα που θέλουν να αρχίσουν θεραπεία χωρίς καθυστέρηση',
    ],
    details: [
      { label: 'Πλατφόρμα', value: 'Zoom' },
      { label: 'Τεχνικές απαιτήσεις', value: 'Σύνδεση internet, κάμερα, μικρόφωνο' },
      { label: 'Πλαίσιο', value: 'Ήσυχος, ιδιωτικός χώρος' },
      { label: 'Ισοδύναμο', value: 'Με τη δια ζώσης συνεδρία' },
    ],
  },
]

export default function Services() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Υπηρεσίες Ψυχολογικής Υποστήριξης – Παντελής Βιωνής',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `https://pantelisvionis.gr/services#${s.id}`,
    })),
  }

  return (
    <>
      <SEOHead
        title="Υπηρεσίες"
        description="Ατομική CBT, ομαδική ψυχοθεραπεία, ομάδα διατροφικής εμπειρίας (12 εβδομάδες) και online συνεδρίες μέσω Zoom. Κάτω Πετράλωνα, Αθήνα."
        path="/services"
        image={imgUrl('/images/office-chairs.jpg')}
        schema={schema}
      />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Εισαγωγή σελίδας">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Τι προσφέρω</span>
            <h1>Υπηρεσίες</h1>
            <p className="lead">
              Κάθε άνθρωπος έχει διαφορετική ανάγκη. Εδώ βρίσκεις όλα τα πλαίσια
              ψυχολογικής υποστήριξης και ψυχολογίας διατροφής που προσφέρω —
              δια ζώσης και online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section service-section ${i % 2 === 1 ? 'section--warm service-section--alt' : ''}`}
          aria-labelledby={`service-heading-${s.id}`}
        >
          <div className="container service-section__inner">
            <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'} className="service-section__image">
              <div className="img-frame service-section__frame">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="img-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} className="service-section__text">
              <span className="eyebrow">{s.eyebrow}</span>
              <h2 id={`service-heading-${s.id}`}>{s.title}</h2>
              <div className="divider" />
              <p className="lead">{s.lead}</p>
              <p>{s.body}</p>

              <div className="service-section__for-whom">
                <h4>Κατάλληλο για:</h4>
                <ul role="list">
                  {s.forWhom.map((item) => (
                    <li key={item}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-section__details">
                {s.details.map((d) => (
                  <div key={d.label} className="service-detail-item">
                    <span className="service-detail-item__label">{d.label}</span>
                    <span className="service-detail-item__value">{d.value}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Επικοινωνία για αυτή την υπηρεσία
              </Link>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section section--dark text-center" aria-labelledby="services-cta-heading">
        <div className="container" style={{ maxWidth: '640px' }}>
          <ScrollReveal>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Επόμενο βήμα</span>
            <h2 id="services-cta-heading" style={{ color: '#fff' }}>Δεν είσαι σίγουρος/η από πού να ξεκινήσεις;</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem' }}>
              Η πρώτη μας επαφή είναι πάντα αφιερωμένη στο να σε ακούσω και να βρούμε
              μαζί τι σου ταιριάζει καλύτερα. Χωρίς δεσμεύσεις.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Στείλε μήνυμα</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
