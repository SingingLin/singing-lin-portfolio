import { useState } from 'react'
import { projectGroups, type ProjectItem } from '../../data/resumeData'
import { withBase } from '../../utils/url'
import Lightbox from '../Lightbox/Lightbox'
import Reveal from '../Reveal/Reveal'
import styles from './Projects.module.css'

/** 專案縮圖：有截圖才渲染，點擊開 Lightbox（沿用既有 createPortal 機制）。 */
function ProjectThumb({ project }: { project: ProjectItem }) {
  const [index, setIndex] = useState<number | null>(null)
  const images = project.images ?? []

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <button
        type="button"
        className={styles.projectThumb}
        onClick={() => setIndex(0)}
        aria-label={`放大檢視 ${project.title} 截圖`}
      >
        <img src={withBase(images[0])} alt="" loading="lazy" />
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
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="title">
            Projects<span className="dot">.</span>
          </h2>
          <p className="title-zh">專案作品</p>
        </Reveal>

        <p className="section-note" style={{ marginBottom: 'var(--space-7)' }}>
          依任職公司分組、依時間新到舊排列。每家公司的專案群組用淺灰底的圓角區塊包起來做視覺分組；區塊內個別專案維持橫條列表呈現，有截圖的橫條左側放縮圖，沒有截圖的橫條不留媒體欄位。
        </p>

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
