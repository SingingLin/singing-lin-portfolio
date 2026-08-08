import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/resumeData'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {profile.name} {profile.nameEn}
        </p>
        <a href="#top" className={styles.backTop}>
          回到頂端
          <ArrowUp size={15} strokeWidth={2.3} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
