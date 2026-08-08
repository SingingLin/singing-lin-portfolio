import { Mail, MapPin } from 'lucide-react'
import { profile } from '../../data/resumeData'
import Reveal from '../Reveal/Reveal'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <Reveal className={styles.panel}>
          <div className="section-heading">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">聯絡我</h2>
          </div>

          <p className={styles.desc}>
            對合作機會或交流有興趣，歡迎透過以下方式聯絡我。
          </p>

          <div className={styles.infoRow}>
            <a href={`mailto:${profile.email}`} className={styles.infoItem}>
              <Mail className={styles.icon} size={18} strokeWidth={2.2} aria-hidden="true" />
              {profile.email}
            </a>
            <span className={styles.infoItem}>
              <MapPin className={styles.icon} size={18} strokeWidth={2.2} aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <a href={`mailto:${profile.email}`} className={styles.ctaBtn}>
            寄信給我
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
