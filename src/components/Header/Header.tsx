import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/resumeData'
import { useScrolled, useScrollProgress } from '../../hooks/useScrollProgress'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { href: '#about', label: '關於我', idx: '01' },
  { href: '#skills', label: '技能', idx: '02' },
  { href: '#experience', label: '工作經歷', idx: '03' },
  { href: '#projects', label: '專案作品', idx: '04' },
  { href: '#other-works', label: '其餘作品', idx: '05' },
  { href: '#education', label: '學歷', idx: '06' },
  { href: '#contact', label: '聯絡我', idx: '07' },
]

const SECTION_IDS = ['top', ...NAV_ITEMS.map((item) => item.href.slice(1))]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('top')
  const scrollProgress = useScrollProgress()
  const scrolled = useScrolled()

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.scrollProgress} style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.logoMark} aria-hidden="true">
            {profile.initials}
          </span>
          {profile.nameEn}
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === `#${activeId}`
            return (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.navIdx} aria-hidden="true">
                  {item.idx}
                </span>
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label="切換選單"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
      </div>
    </header>
  )
}

export default Header
