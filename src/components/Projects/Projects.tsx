import { useState } from 'react'
import type { ProjectItem } from '../../data/resumeData.types'
import { useResumeData } from '../../data/useResumeData'
import { useLanguage, useT } from '../../i18n/useLanguage'
import { getProjectImages } from '../../utils/projectImages'
import Lightbox from '../Lightbox/Lightbox'
import Reveal from '../Reveal/Reveal'
import styles from './Projects.module.css'

/** 專案縮圖：有截圖才渲染，點擊開 Lightbox（沿用既有 createPortal 機制）。 */
function ProjectThumb({ project }: { project: ProjectItem }) {
  const [index, setIndex] = useState<number | null>(null)
  const t = useT()
  const images = getProjectImages(project.imagesDir)

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <button
        type="button"
        className={styles.projectThumb}
        onClick={() => setIndex(0)}
        aria-label={t.gallery.zoomAria(project.title)}
      >
        <img src={images[0]} alt="" loading="lazy" />
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
  const { lang } = useLanguage()

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="title">
            Projects<span className="dot">.</span>
          </h2>
          {lang === 'zh' && <p className="title-zh">{t.section.projects.caption}</p>}
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
