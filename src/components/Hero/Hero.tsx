import { Mail, MapPin } from 'lucide-react'
import { profile } from '../../data/resumeData'
import { useTypewriter } from '../../hooks/useTypewriter'
import styles from './Hero.module.css'

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
      <div className={`container ${styles.inner}`}>
        <img
          src={profile.avatar}
          alt={`${profile.name} ${profile.nameEn}`}
          className={styles.avatar}
          width={128}
          height={128}
        />

        <p className={styles.eyebrow}>
          {typedTitle}
          <span className={styles.cursor} aria-hidden="true" />
        </p>
        <h1 className={styles.name}>
          {profile.name} <span className={styles.nameEn}>{profile.nameEn}</span>
        </h1>
        <p className={styles.summary}>{profile.summary}</p>

        <ul className={styles.meta}>
          <li>
            <MapPin className={styles.icon} size={17} strokeWidth={2.2} aria-hidden="true" />
            {profile.location}
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className={styles.metaLink}>
              <Mail className={styles.icon} size={17} strokeWidth={2.2} aria-hidden="true" />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.githubHref} className={styles.metaLink} target="_blank" rel="noreferrer">
              <GithubIcon className={styles.icon} size={17} />
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
    </section>
  )
}

export default Hero
