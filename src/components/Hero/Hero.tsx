import { Mail, MapPin } from 'lucide-react'
import { profile, projectGroups } from '../../data/resumeData'
import { useTypewriter } from '../../hooks/useTypewriter'
import { withBase } from '../../utils/url'
import styles from './Hero.module.css'

// 統計數字皆源自 resumeData：專案數為 projectGroups 實際攤平計數，避免手動寫死跟資料脫鉤誇大。
const PROJECT_COUNT = projectGroups.reduce((sum, group) => sum + group.projects.length, 0)

/** lucide-react 不含品牌 Logo，GitHub 標誌維持官方線稿 SVG，其餘一般 UI 圖示統一用 lucide-react。 */
function GithubIcon(props: { className?: string; size?: number }) {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"
        fill="currentColor"
      />
    </svg>
  )
}

function Hero() {
  const typedTitle = useTypewriter(profile.title)

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.statusPill}>
            <span className={styles.statusDot} aria-hidden="true" />
            Open to work・歡迎聯絡合作機會
          </span>

          <p className={styles.eyebrow}>
            {typedTitle}
            <span className={styles.cursor} aria-hidden="true" />
          </p>

          <h1 className={styles.name}>
            {profile.name} <span className={styles.nameEn}>{profile.nameEn}</span>
          </h1>

          <p className={styles.summary}>{profile.summary}</p>

          <ul className={styles.meta}>
            <li className={styles.chip}>
              <MapPin className={styles.icon} size={16} strokeWidth={2.2} aria-hidden="true" />
              {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className={`${styles.chip} ${styles.metaLink}`}>
                <Mail className={styles.icon} size={16} strokeWidth={2.2} aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.githubHref}
                className={`${styles.chip} ${styles.metaLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className={styles.icon} size={16} />
                {profile.githubLabel}
              </a>
            </li>
          </ul>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>
              聯絡我
            </a>
            <a href="#projects" className={styles.secondaryBtn}>
              查看作品
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.avatarFrame}>
            <img
              src={withBase(profile.avatar)}
              alt={`${profile.name} ${profile.nameEn}`}
              className={styles.avatar}
              width={320}
              height={320}
            />
            <div className={`${styles.statCard} ${styles.statCardOne}`}>
              <span className={styles.statNum}>7+</span>
              <span className={styles.statLabel}>年前端經驗</span>
            </div>
            <div className={`${styles.statCard} ${styles.statCardTwo}`}>
              <span className={styles.statNum}>{PROJECT_COUNT}</span>
              <span className={styles.statLabel}>專案作品</span>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollArrow}>↓</span> scroll
      </p>
    </section>
  )
}

export default Hero
