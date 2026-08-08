import { useState } from 'react'
import { withBase } from '../../utils/url'
import Lightbox from '../Lightbox/Lightbox'

interface GalleryProps {
  images: string[]
  alt: string
}

/**
 * 作品卡片封面圖區塊（work-card__media）：顯示第一張截圖，多張圖時附「+N 張」徽章取代原本
 * 橫向縮圖 strip；點擊開 Lightbox，Lightbox 內可用左右箭頭切換看完整組圖。
 */
function Gallery({ images, alt }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <button
        type="button"
        className="work-card__media"
        onClick={() => setIndex(0)}
        aria-label={`放大檢視 ${alt} 截圖`}
      >
        <img src={withBase(images[0])} alt={`${alt} 截圖 1`} loading="lazy" />
        <span className="work-card__overlay" aria-hidden="true">
          🔍 放大檢視
        </span>
        {images.length > 1 && <span className="work-card__badge">+{images.length} 張</span>}
      </button>

      {index !== null && (
        <Lightbox images={images} alt={alt} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
      )}
    </>
  )
}

export default Gallery
