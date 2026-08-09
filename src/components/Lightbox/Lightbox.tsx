import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
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

/** 自動輪播間隔：每 2 秒切換下一張（客戶指定值）。 */
const AUTOPLAY_INTERVAL_MS = 2000

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
  const [isPlaying, setIsPlaying] = useState(true)
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

  // 自動輪播：每 2 秒切到下一張，到最後一張後循環回第一張。
  //
  // 用 setTimeout（而非 setInterval）並把 `index` 放進依賴陣列，是刻意設計：不論
  // index 的變化是來自這個 timer 自己觸發的 goNext，還是使用者手動點箭頭／按方向鍵
  // 造成的 onNavigate，effect 都會重新執行——先清掉舊的 timer（見 cleanup），再從
  //「現在這張」重新排一個全新的 2 秒倒數。這正好符合「手動切換要重置計時器、從該張
  // 重新倒數」的需求，不用另外寫一套「偵測到手動操作就重置」的邏輯。
  //
  // isPlaying 控制暫停/播放：false 時直接不排 timer；重新播放時同樣會從當下這張重新
  // 倒數 2 秒，而不是從上次剩餘的時間繼續（符合「重新從該張開始倒數」的直覺）。
  //
  // Lightbox 關閉時（呼叫端把 index 設回 null 而 unmount 這個元件），React 會自動跑
  // 這個 effect 最後一次的 cleanup，timer 一定會被清掉，不會有背景殘留計時器。
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return undefined
    const timer = window.setTimeout(goNext, AUTOPLAY_INTERVAL_MS)
    return () => window.clearTimeout(timer)
  }, [index, isPlaying, images.length, goNext])

  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  // 效能優化：切換左右箭頭時要立即顯示新圖，不能等瀏覽器現場下載/解碼。
  // 在目前圖片顯示的同時，於背景用隱藏的 Image 物件預先請求「上一張／下一張」，
  // 讓瀏覽器把它們放進 HTTP cache（GitHub Pages 這種純靜態環境沒有額外加速，預載
  // 才能讓使用者按左右鍵時圖片已經在快取裡，不必再等一次網路下載）。
  useEffect(() => {
    if (images.length <= 1) return
    const prevSrc = images[(index - 1 + images.length) % images.length]
    const nextSrc = images[(index + 1) % images.length]
    const preloads = [prevSrc, nextSrc].map((src) => {
      const img = new Image()
      img.src = src
      return img
    })
    return () => {
      preloads.forEach((img) => {
        img.src = ''
      })
    }
  }, [images, index])

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

          <div className={styles.bottomBar} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.playToggle}
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? t.lightbox.pause : t.lightbox.play}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause size={15} strokeWidth={2.25} /> : <Play size={15} strokeWidth={2.25} />}
            </button>

            <div className={styles.counter}>
              {index + 1} / {images.length}
            </div>
          </div>
        </>
      )}
    </div>,
    document.body,
  )
}

export default Lightbox
