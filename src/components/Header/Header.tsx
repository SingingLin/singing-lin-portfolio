import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/resumeData'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { href: '#about', label: '關於我' },
  { href: '#skills', label: '技能' },
  { href: '#experience', label: '工作經歷' },
  { href: '#projects', label: '專案作品' },
  { href: '#other-works', label: '其餘作品' },
  { href: '#education', label: '學歷' },
  { href: '#contact', label: '聯絡我' },
]

const SECTION_IDS = ['top', ...NAV_ITEMS.map((item) => item.href.slice(1))]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('top')

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
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
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
