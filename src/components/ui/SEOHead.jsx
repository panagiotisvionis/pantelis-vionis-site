import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Παντελής Βιωνής'
const SITE_URL  = 'https://pantelisvionis.gr'
const DEFAULT_IMAGE = '/images/office-room.jpg'

export default function SEOHead({
  title,
  description,
  image = DEFAULT_IMAGE,
  path = '',
  type = 'website',
  schema,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Σύμβουλος Ψυχικής Υγείας & Κλινικός Διαιτολόγος | Αθήνα`
  const canonical = `${SITE_URL}${path}`
  const absImage  = `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type"        content={type} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image"       content={absImage} />
      <meta property="og:locale"      content="el_GR" />
      <meta property="og:site_name"   content={SITE_NAME} />

      <meta name="twitter:card"       content="summary_large_image" />
      <meta name="twitter:title"      content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image"      content={absImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
