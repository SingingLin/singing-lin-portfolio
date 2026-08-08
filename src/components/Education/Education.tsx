import { education, type EducationItem } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Reveal from '../Reveal/Reveal'
import styles from './Education.module.css'

function EducationRow({ item }: { item: EducationItem }) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`${styles.item} reveal ${visible ? 'is-visible' : ''}`}>
      <div>
        <h3 className={styles.school}>{item.school}</h3>
        {(item.degree || item.department) && (
          <p className={styles.department}>{[item.degree, item.department].filter(Boolean).join(' ・ ')}</p>
        )}
      </div>
      <span className={styles.period}>{item.period}</span>
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

        <ul className={styles.list}>
          {education.map((item) => (
            <EducationRow key={item.school} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
