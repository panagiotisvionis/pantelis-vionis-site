import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import { articles } from '../data/articles.js'
import './ArticleDetail.css'

function renderBlock(block, i) {
  switch (block.type) {
    case 'paragraph':
      return <p key={i}>{block.text}</p>
    case 'heading':
      return <h2 key={i}>{block.text}</h2>
    case 'highlight':
      return (
        <blockquote key={i} className="article-highlight">
          <p>{block.text}</p>
        </blockquote>
      )
    case 'list':
      return (
        <ul key={i} className="article-list" role="list">
          {block.items.map((item, j) => (
            <li key={j}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  const otherArticles = articles.filter((a) => a.slug !== slug)

  if (!article) return <Navigate to="/articles" replace />

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://pantelisvionis.gr${article.image}`,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Παντελής Βιωνής',
      url: 'https://pantelisvionis.gr/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Παντελής Βιωνής',
      url: 'https://pantelisvionis.gr',
    },
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        image={article.image}
        type="article"
        schema={schema}
      />

      {/* Article Hero */}
      <section className="article-hero" aria-label="Εισαγωγή άρθρου">
        <div className="article-hero__img-wrap">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="eager"
            decoding="async"
          />
          <div className="article-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container article-hero__content">
          <ScrollReveal>
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb" role="list">
                <li><Link to="/">Αρχική</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/articles">Άρθρα</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{article.title}</li>
              </ol>
            </nav>
            <span className="eyebrow" style={{ color: 'var(--clr-accent-light)' }}>{article.category}</span>
            <h1 className="article-hero__title">{article.title}</h1>
            <p className="article-hero__subtitle">{article.subtitle}</p>
            <div className="article-hero__meta">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>Παντελής Βιωνής</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="section" aria-label="Περιεχόμενο άρθρου">
        <div className="container article-layout">
          <ScrollReveal className="article-body" as="article">
            {article.content.map(renderBlock)}

            <div className="article-author-card">
              <div className="article-author-card__info">
                <div className="article-author-card__avatar" aria-hidden="true">ΠΒ</div>
                <div>
                  <div className="article-author-card__name">Παντελής Βιωνής</div>
                  <div className="article-author-card__role">Σύμβουλος Ψυχικής Υγείας – CBT Practitioner &amp; Κλινικός Διαιτολόγος</div>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline btn-sm">Σχετικά με τον συγγραφέα</Link>
            </div>
          </ScrollReveal>

          <aside className="article-sidebar" aria-label="Πλευρική στήλη">
            <ScrollReveal delay={200}>
              <div className="sidebar-cta">
                <p className="sidebar-cta__label">Χρειάζεσαι υποστήριξη;</p>
                <h3>Μίλα μαζί μου</h3>
                <p>Ατομική ή ομαδική συνεδρία — δια ζώσης ή online.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Επικοινωνία
                </Link>
                <a href="tel:+306947036194" className="sidebar-cta__phone">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  6947 036 194
                </a>
              </div>
            </ScrollReveal>

            {otherArticles.length > 0 && (
              <ScrollReveal delay={300} className="sidebar-related">
                <h4>Σχετικά άρθρα</h4>
                <div className="sidebar-related__list">
                  {otherArticles.map((a) => (
                    <Link key={a.slug} to={`/articles/${a.slug}`} className="sidebar-related__item">
                      <img src={a.image} alt={a.imageAlt} loading="lazy" decoding="async" />
                      <div>
                        <span className="sidebar-related__cat">{a.category}</span>
                        <span className="sidebar-related__title">{a.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
