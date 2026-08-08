import { experiences, type ExperienceItem } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Reveal from '../Reveal/Reveal'
import styles from './Experience.module.css'

function TimelineItem({ item }: { item: ExperienceItem }) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`${styles.item} reveal ${visible ? 'is-visible' : ''}`}>
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.card}>
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
    </li>
  )
}

function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <Reveal className="section-heading">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">工作經歷</h2>
        </Reveal>

        <ol className={styles.timeline}>
          {experiences.map((item) => (
            <TimelineItem key={`${item.company}-${item.period}`} item={item} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
