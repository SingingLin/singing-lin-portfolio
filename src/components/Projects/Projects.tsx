import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { projectGroups, type ProjectItem } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Gallery from '../Gallery/Gallery'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Projects.module.css'

function ProjectCard({ project, defaultOpen }: { project: ProjectItem; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const { ref, visible } = useScrollReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`work-card reveal ${visible ? 'is-visible' : ''}`}>
      {project.images && project.images.length > 0 && <Gallery images={project.images} alt={project.title} />}

      <button
        type="button"
        className={styles.cardHeader}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <div className={styles.cardHeaderText}>
          <h4 className={styles.cardTitle}>{project.title}</h4>
          <div className={styles.cardMeta}>
            <span className={styles.techTag}>{project.tech}</span>
            {project.period && <span className={styles.period}>{project.period}</span>}
          </div>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
          <ChevronDown size={22} strokeWidth={2.25} />
        </span>
      </button>

      {open && (
        <ul className={styles.bullets}>
          {project.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeGroup = projectGroups[activeIndex]

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionHeading index="04" kicker="Projects" title="專案作品" />

        <div className={styles.tabs} role="tablist" aria-label="依公司分組的專案作品">
          {projectGroups.map((group, index) => (
            <button
              key={group.company}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {group.company}
            </button>
          ))}
        </div>

        <ul key={activeGroup.company} className={styles.cardList}>
          {activeGroup.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} defaultOpen={index === 0} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
