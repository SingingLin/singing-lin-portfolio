import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useT } from '../../i18n/useLanguage'
import styles from './Lightbox.module.css'

interface LightboxProps {
  images: string[]
  alt: string
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

/**
 * 點擊封面圖後跳出的全螢幕放大檢視 modal，支援鍵盤左右鍵切換與 Esc 關閉。
 *
 * 用 createPortal 掛到 document.body（而不是留在呼叫端的 DOM 樹裡），刻意脫離任何祖先節點。
 * 這是必要的：捲動進場動畫用的 .reveal class（見 src/index.css）在卡片 <li> 上設了
 * transform（即使是 translateY(0) 這種視覺上等同不動的值），任何非 none 的 transform
 * 都會讓該元素變成子孫 position:fixed 元素的 containing block —— 若 Lightbox 留在卡片
 * <li> 底下渲染，.backdrop { position:fixed; inset:0 } 就不會真的相對瀏覽器視窗鋪滿，而是
 * 被限制在那張卡片的框裡，造成畫面跑版、大片空白。createPortal 到 body 讓 Lightbox 的
 * containing block 永遠是 viewport，徹底避開這個 CSS 陷阱，不用擔心未來其他祖先加 transform
 * 又中招。
 *
 * 圖片統一用 object-fit: contain 置中顯示於扣掉安全邊距的滿版舞台內，不論原圖是直的橫的、
 * 大的小的都會完整顯示、不裁切、不變形。
 */
function Lightbox({ images, alt, index, onClose, onNavigate }: LightboxProps) {
  const t = useT()
  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  )
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate],
  )

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goPrev, goNext, onClose])

  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <div className={styles.stage}>
        <img
          src={images[index]}
          alt={t.lightbox.screenshotAlt(alt, index + 1)}
          className={styles.image}
          onClick={(event) => event.stopPropagation()}
        />
      </div>

      <button type="button" className={styles.close} onClick={onClose} aria-label={t.lightbox.close}>
        <X size={20} strokeWidth={2.25} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={(event) => {
              event.stopPropagation()
              goPrev()
            }}
            aria-label={t.lightbox.prev}
          >
            <ChevronLeft size={26} strokeWidth={2.25} />
          </button>

          <button
            type="button"
            className={`${styles.nav} ${styles.navNext}`}
            onClick={(event) => {
              event.stopPropagation()
              goNext()
            }}
            aria-label={t.lightbox.next}
          >
            <ChevronRight size={26} strokeWidth={2.25} />
          </button>

          <div className={styles.counter} onClick={(event) => event.stopPropagation()}>
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>,
    document.body,
  )
}

export default Lightbox
