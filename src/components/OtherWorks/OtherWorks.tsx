import { ExternalLink } from 'lucide-react'
import { otherWorks, type OtherWork } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Gallery from '../Gallery/Gallery'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './OtherWorks.module.css'

function OtherWorkCard({ work }: { work: OtherWork }) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`work-card reveal ${visible ? 'is-visible' : ''}`}>
      {work.images && work.images.length > 0 && <Gallery images={work.images} alt={work.title} />}

      <div className="work-card__body">
        <p className="work-card__title">{work.title}</p>
        {work.linkLabel &&
          (work.href ? (
            <a href={work.href} className={styles.link} target="_blank" rel="noreferrer">
              {work.linkLabel}
              <ExternalLink size={13} strokeWidth={2.3} aria-hidden="true" />
            </a>
          ) : (
            <span className={styles.linkPending}>{work.linkLabel}（連結尚未確認）</span>
          ))}
      </div>
    </li>
  )
}

function OtherWorks() {
  return (
    <section id="other-works" className={`section ${styles.otherWorks}`}>
      <div className="container">
        <SectionHeading
          index="05"
          kicker="Other Works"
          title="其餘作品"
          note={<p className={styles.note}>以下為外包／接案作品，部分附有實際截圖與官方連結。</p>}
        />

        <ul className={styles.grid}>
          {otherWorks.map((work) => (
            <OtherWorkCard key={work.title} work={work} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OtherWorks
