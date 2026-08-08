import { experiences, type ExperienceItem } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Experience.module.css'

function TimelineItem({ item, isLatest }: { item: ExperienceItem; isLatest: boolean }) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`${styles.item} reveal ${visible ? 'is-visible' : ''}`}>
      <div className={`${styles.dot} ${isLatest ? styles.dotPulse : ''}`} aria-hidden="true" />
      <div className={styles.card}>
        <span className={styles.initial} aria-hidden="true">
          {item.company.slice(0, 1)}
        </span>
        <div className={styles.cardBody}>
          <div className={styles.cardHead}>
            <h3 className={styles.company}>{item.company}</h3>
            <span className={styles.period}>{item.period}</span>
          </div>
          <p className={styles.role}>{item.role}</p>
          <ul className={styles.bullets}>
            {item.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <SectionHeading index="03" kicker="Experience" title="工作經歷" />

        <ol className={styles.timeline}>
          {experiences.map((item, index) => (
            <TimelineItem key={`${item.company}-${item.period}`} item={item} isLatest={index === 0} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
