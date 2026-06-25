import { imgUrl } from '../../utils/imgUrl.js'

const BG_IMAGES = {
  about:    '/images/pantelis-portrait.jpg',
  services: '/images/office-full.jpg',
  articles: '/images/office-room.jpg',
  contact:  '/images/office-waiting.jpg',
  faq:      '/images/office-fountain.jpg',
  podcast:  '/images/pantelis-portrait.jpg',
  default:  '/images/office-room.jpg',
}

export default function PageHeroBg({ page = 'default' }) {
  const src = BG_IMAGES[page] || BG_IMAGES.default
  return (
    <div className="page-hero__bg" aria-hidden="true">
      <img src={imgUrl(src)} alt="" decoding="async" loading="eager" />
    </div>
  )
}
