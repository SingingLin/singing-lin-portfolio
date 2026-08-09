import { profile } from '../../data/resumeData'
import { withBase } from '../../utils/url'
import Reveal from '../Reveal/Reveal'
import styles from './Hero.module.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  )
}

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal className={styles.statusBadge}>{profile.statusBadge}</Reveal>

          <Reveal delay={80}>
            <h1 className={styles.heroTitle}>
              <span className={styles.nameEn}>{profile.nameEn}</span>
              <span className={styles.nameZh}>{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className={styles.summary}>
              <span className={styles.leadLine}>{profile.heroLead}</span>
              <span className={styles.restLine}>{profile.heroRest}</span>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className={styles.meta}>
              <li>{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.githubHref} target="_blank" rel="noreferrer">
                  {profile.githubLabel}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className={styles.actions}>
              <a className={styles.btnPrimary} href="#projects">
                <span className={styles.btnLabel}>查看作品</span>
                <span className={styles.btnArrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className={styles.visual}>
          <div className={styles.avatarFrame}>
            <img
              className={styles.avatarPhoto}
              src={withBase(profile.avatar)}
              alt={`${profile.name} ${profile.nameEn}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
