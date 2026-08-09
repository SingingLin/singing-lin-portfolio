import { useState } from 'react'
import { otherWorks, type OtherWork } from '../../data/resumeData'
import { withBase } from '../../utils/url'
import Lightbox from '../Lightbox/Lightbox'
import Reveal from '../Reveal/Reveal'
import styles from './OtherWorks.module.css'

function MagnifierIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
}

/**
 * 有截圖的項目：圖片疊字，hover 圓形色塊底的放大鏡 icon，點擊開 Lightbox。
 * 純連結項目（無截圖）：實心藍底疊字，hover 圓形色塊底的外部連結箭頭，點擊前往網站。
 * 這次補圖後，原本 5 筆純連結項目多了 images，優先走 Lightbox（跟其餘有截圖項目一致）。
 */
function FreelanceTile({ work }: { work: OtherWork }) {
  const [index, setIndex] = useState<number | null>(null)
  const images = work.images ?? []

  if (images.length > 0) {
    return (
      <>
        <button
          type="button"
          className={styles.freelanceTile}
          onClick={() => setIndex(0)}
          aria-label={`放大檢視 ${work.title} 截圖`}
        >
          <img src={withBase(images[0])} alt="" loading="lazy" />
          <div className={styles.freelanceTileOverlay}>
            <span className={styles.iconCircle}>
              <MagnifierIcon />
            </span>
          </div>
          <span className={styles.freelanceTileName}>{work.title}</span>
        </button>

        {index !== null && (
          <Lightbox images={images} alt={work.title} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
        )}
      </>
    )
  }

  return (
    <a
      className={`${styles.freelanceTile} ${styles.isLinkOnly}`}
      href={work.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`前往 ${work.title}`}
    >
      <div className={styles.linkBg} />
      <div className={styles.freelanceTileOverlay}>
        <span className={styles.iconCircle}>
          <ExternalLinkIcon />
        </span>
      </div>
      <span className={styles.freelanceTileName}>{work.title}</span>
    </a>
  )
}

function OtherWorks() {
  return (
    <section id="freelance" className="section alt">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="title">
            Freelance<span className="dot">.</span>
          </h2>
          <p className="title-zh">接案作品</p>
        </Reveal>

        <p className="section-note" style={{ marginBottom: 'var(--space-7)' }}>
          三個一排網格呈現，每個項目只顯示專案名稱，疊在圖片左下角。滑鼠移入圖片，圓形色塊背景的
          icon 會從下方浮現、彈跳到畫面置中：有截圖項目顯示放大鏡（開啟 Lightbox），純連結項目顯示外部連結箭頭（前往網站）。
        </p>

        <div className={styles.freelanceGrid}>
          {otherWorks.map((work) => (
            <FreelanceTile key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherWorks
