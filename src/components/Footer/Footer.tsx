import { useResumeData } from '../../data/useResumeData'
import { useT } from '../../i18n/useLanguage'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()
  const { profile } = useResumeData()
  const t = useT()

  return (
    <footer id="contact" className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <p className={styles.footerLeft}>
          © {year} {profile.nameEn} · {profile.statusBadge}
        </p>
        <div className={styles.footerRight}>
          <ul className={styles.footerLinks}>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.githubHref} target="_blank" rel="noreferrer">
                {t.footer.githubLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
