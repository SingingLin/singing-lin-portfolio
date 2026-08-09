import { useState, type SyntheticEvent } from 'react'
import type { ProjectItem } from '../../data/resumeData.types'
import { useResumeData } from '../../data/useResumeData'
import { useT } from '../../i18n/useLanguage'
import { getProjectImages } from '../../utils/projectImages'
import Lightbox from '../Lightbox/Lightbox'
import Reveal from '../Reveal/Reveal'
import styles from './Projects.module.css'

/**
 * 專案縮圖：有截圖才渲染，點擊開 Lightbox（沿用既有 createPortal 機制）。
 *
 * 根因修正（國泰投信 ETF App 破版）：縮圖框原本固定 4:3 橫式比例＋object-fit:cover，
 * 但手機 App 專案的截圖本身是直式（例如 1080x2340），塞進橫式框會被裁到只剩中間一小條，
 * 看起來擠壓、比例跟旁邊文字不協調。這裡改成載入後用 naturalWidth/naturalHeight 偵測圖片
 * 實際方向，直式圖片改套用直式比例的縮圖框（見 Projects.module.css 的 projectThumbPortrait），
 * 讓裁切幅度合理、縮圖看起來像正常的手機截圖，不再是被硬壓扁的長條。
 */
function ProjectThumb({ project }: { project: ProjectItem }) {
  const [index, setIndex] = useState<number | null>(null)
  const [isPortrait, setIsPortrait] = useState(false)
  const t = useT()
  const images = getProjectImages(project.imagesDir)

  if (images.length === 0) {
    return null
  }

  function handleImageLoad(event: SyntheticEvent<HTMLImageElement>) {
    const img = event.currentTarget
    setIsPortrait(img.naturalHeight > img.naturalWidth)
  }

  return (
    <>
      <button
        type="button"
        className={`${styles.projectThumb} ${isPortrait ? styles.projectThumbPortrait : ''}`}
        onClick={() => setIndex(0)}
        aria-label={t.gallery.zoomAria(project.title)}
      >
        <img src={images[0]} alt="" loading="lazy" onLoad={handleImageLoad} />
      </button>

      {index !== null && (
        <Lightbox images={images} alt={project.title} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
      )}
    </>
  )
}

function ProjectRow({ project }: { project: ProjectItem }) {
  return (
    <div className={styles.projectRow}>
      <ProjectThumb project={project} />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.projectTags}>
          {project.tech.split('/').map((tech) => (
            <span key={tech.trim()} className={styles.tag}>
              {tech.trim()}
            </span>
          ))}
          {project.period && <span className={styles.projectPeriod}>{project.period}</span>}
        </div>
        <ul className={styles.projectBullets}>
          {project.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Projects() {
  const { projectGroups } = useResumeData()
  const t = useT()

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="title">
            Projects<span className="dot">.</span>
          </h2>
          <p className="title-zh">{t.section.projects.caption}</p>
        </Reveal>

        {projectGroups.map((group, groupIndex) => (
          <Reveal key={group.company} delay={groupIndex * 60} className={styles.companyGroup}>
            <span className={styles.companyTag}>{group.company}</span>
            <div className={styles.projectList}>
              {group.projects.map((project) => (
                <ProjectRow key={project.title} project={project} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
