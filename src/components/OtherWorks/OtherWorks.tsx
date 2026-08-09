import { useState } from 'react'
import type { OtherWork } from '../../data/resumeData.types'
import { useResumeData } from '../../data/useResumeData'
import { useLanguage, useT } from '../../i18n/useLanguage'
import { getProjectImages } from '../../utils/projectImages'
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
 * 判斷優先權（v11 客戶回饋修正）：以「有沒有真實外部連結（href）」為主，不是以有沒有截圖判斷。
 * - 有 href：不管有沒有截圖都優先走外連，hover 顯示「前往網站」icon，點擊開新分頁。
 *   若該項目也有截圖，截圖仍當作卡片底圖用（視覺不變），只是點擊行為改成外連而非開 Lightbox。
 * - 沒有 href：hover 顯示「查看圖片」icon，點擊開 Lightbox 查看截圖（沿用既有機制）。
 */
function FreelanceTile({ work }: { work: OtherWork }) {
  const [index, setIndex] = useState<number | null>(null)
  const t = useT()
  const images = getProjectImages(work.imagesDir)
  const thumbSrc = images[0]

  if (work.href) {
    return (
      <a
        className={styles.freelanceTile}
        href={work.href}
        target="_blank"
        rel="noreferrer"
        aria-label={t.gallery.visitAria(work.title)}
      >
        {thumbSrc ? <img src={thumbSrc} alt="" loading="lazy" /> : <div className={styles.linkBg} />}
        <div className={styles.freelanceTileOverlay}>
          <span className={styles.iconCircle}>
            <ExternalLinkIcon />
          </span>
        </div>
        <span className={styles.freelanceTileName}>{work.title}</span>
      </a>
    )
  }

  if (images.length > 0) {
    return (
      <>
        <button
          type="button"
          className={styles.freelanceTile}
          onClick={() => setIndex(0)}
          aria-label={t.gallery.zoomAria(work.title)}
        >
          <img src={thumbSrc} alt="" loading="lazy" />
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
    <div className={`${styles.freelanceTile} ${styles.isLinkOnly}`}>
      <div className={styles.linkBg} />
      <span className={styles.freelanceTileName}>{work.title}</span>
    </div>
  )
}

function OtherWorks() {
  const { otherWorks } = useResumeData()
  const t = useT()
  const { lang } = useLanguage()

  return (
    <section id="freelance" className="section alt">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="title">
            Freelance<span className="dot">.</span>
          </h2>
          {lang === 'zh' && <p className="title-zh">{t.section.freelance.caption}</p>}
        </Reveal>

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
