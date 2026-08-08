import { education, type EducationItem } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Reveal from '../Reveal/Reveal'
import styles from './Education.module.css'

function EducationRow({ item }: { item: EducationItem }) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`${styles.item} reveal ${visible ? 'is-visible' : ''}`}>
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <h3 className={styles.school}>{item.school}</h3>
          <span className={styles.period}>{item.period}</span>
        </div>
        {(item.degree || item.department) && (
          <p className={styles.department}>{[item.degree, item.department].filter(Boolean).join(' ・ ')}</p>
        )}
      </div>
    </li>
  )
}

function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <Reveal className="section-heading">
          <span className="section-kicker">Education</span>
          <h2 className="section-title">學歷</h2>
        </Reveal>

        <ol className={styles.timeline}>
          {education.map((item) => (
            <EducationRow key={item.school} item={item} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Education
