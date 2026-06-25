import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import { articles } from '../data/articles.js'
import { imgUrl } from '../utils/imgUrl.js'
import PageHeroBg from '../components/ui/PageHeroBg.jsx'
import './Articles.css'

export default function Articles() {
  return (
    <>
      <SEOHead
        title="Άρθρα & Σκέψεις"
        description="Άρθρα για ψυχική υγεία, ψυχολογία διατροφής και αυτογνωσία από τον Παντελή Βιωνή, Σύμβουλο Ψυχικής Υγείας & Κλινικό Διαιτολόγο."
        path="/articles"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Άρθρα – Παντελής Βιωνής',
          description: 'Σκέψεις και άρθρα για ψυχική υγεία και ψυχολογία διατροφής',
          url: 'https://pantelisvionis.gr/articles',
          author: {
            '@type': 'Person',
            name: 'Παντελής Βιωνής',
          },
        }}
      />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Εισαγωγή σελίδας">
        <PageHeroBg page="articles" />
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Σκέψεις &amp; Κείμενα</span>
            <h1>Άρθρα</h1>
            <p className="lead">
              Μερικές σκέψεις για ψυχική υγεία, ψυχολογία διατροφής και την τέχνη
              της αυτογνωσίας — από μια ανθρώπινη, ειλικρινή ματιά.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section" aria-label="Λίστα άρθρων">
        <div className="container">
          <div className="articles-grid">
            {/* Featured article */}
            <ScrollReveal className="articles-grid__featured">
              <article className="article-featured">
                <Link to={`/articles/${articles[0].slug}`} className="article-featured__img-wrap" tabIndex="-1" aria-hidden="true">
                  <img
                    src={imgUrl(articles[0].image)}
                    alt={articles[0].imageAlt}
                    loading="eager"
                    decoding="async"
                  />
                  <span className="article-featured__category">{articles[0].category}</span>
                </Link>
                <div className="article-featured__body">
                  <div className="article-featured__meta">
                    <time dateTime={articles[0].date}>
                      {new Date(articles[0].date).toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <h2 className="article-featured__title">
                    <Link to={`/articles/${articles[0].slug}`}>{articles[0].title}</Link>
                  </h2>
                  <p className="article-featured__subtitle">{articles[0].subtitle}</p>
                  <p className="article-featured__excerpt">{articles[0].excerpt}</p>
                  <Link to={`/articles/${articles[0].slug}`} className="btn btn-primary">
                    Διάβασε το άρθρο
                  </Link>
                </div>
              </article>
            </ScrollReveal>

            {/* Rest */}
            <div className="articles-grid__rest">
              {articles.slice(1).map((a, i) => (
                <ScrollReveal key={a.slug} delay={i * 100}>
                  <article className="article-card-v">
                    <Link to={`/articles/${a.slug}`} className="article-card-v__img-wrap" tabIndex="-1" aria-hidden="true">
                      <img src={imgUrl(a.image)} alt={a.imageAlt} loading="lazy" decoding="async" />
                      <span className="article-card-v__category">{a.category}</span>
                    </Link>
                    <div className="article-card-v__body">
                      <time className="article-card-v__date" dateTime={a.date}>
                        {new Date(a.date).toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </time>
                      <h3 className="article-card-v__title">
                        <Link to={`/articles/${a.slug}`}>{a.title}</Link>
                      </h3>
                      <p className="article-card-v__excerpt">{a.excerpt}</p>
                      <div className="article-card-v__footer">
                        <Link to={`/articles/${a.slug}`} className="btn btn-ghost btn-sm">
                          Διάβασε
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </Link>
                        <span className="article-card-v__time">
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
        </div>
      </section>
    </>
  )
}
