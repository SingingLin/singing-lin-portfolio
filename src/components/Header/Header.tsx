import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/resumeData'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { href: '#experience', label: '經歷' },
  { href: '#projects', label: '專案作品' },
  { href: '#freelance', label: '接案作品' },
]

const SECTION_IDS = ['top', ...NAV_ITEMS.map((item) => item.href.slice(1))]

/**
 * 左上角品牌標記：正臉線條插畫（v10 設計，取代 v9 的側臉輪廓）。
 * 依本人真實照片特徵繪製：圓框眼鏡、側分帶蓬鬆感的短髮、圓潤臉型、微笑唇線。
 * stroke 屬性刻意寫死 hex 色碼而非 CSS 變數，避免部分瀏覽器對「presentation attribute
 * 用 CSS 變數」支援不一致的問題（沿用 v9/v10 設計規格的既定做法）。
 */
function BrandMark() {
  return (
    <span className={styles.brandMark} aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.6 15.4 C8.3 10.2 11.4 5.1 17.7 4.6 C24.3 4.1 28.3 8.6 27 14.3
             C26.5 11.4 23.7 9.5 20.6 10 C21.6 8.2 19.4 6.9 17.5 8
             C15 6.1 11.9 8.1 11.1 12.3 C10.9 13.1 10.2 14.5 9.6 15.4Z"
          stroke="#2364aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8 15 C11 19.7 11.4 24.6 14.2 27.9 C16 30 20 30 21.8 27.9
             C24.6 24.6 25 19.7 24.2 15 C23.7 10.6 20.6 7.8 18 7.8 C15.4 7.8 12.3 10.6 11.8 15Z"
          stroke="#2364aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="18" r="3.3" stroke="#3da5d9" strokeWidth="1.3" />
        <circle cx="22" cy="18" r="3.3" stroke="#3da5d9" strokeWidth="1.3" />
        <path d="M17.3 18 H18.7" stroke="#3da5d9" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10.7 18.2 H9.2" stroke="#3da5d9" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M25.3 18.2 H26.8" stroke="#3da5d9" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M15.2 23.6 C16.3 25 19.7 25 20.8 23.6" stroke="#2364aa" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </span>
  )
}

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
          <BrandMark />
          {profile.name}
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
