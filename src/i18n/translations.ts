// 全站靜態 UI 文案（導覽、按鈕、Section 標題、Lightbox 等），跟 resumeData（履歷內容）
// 分開維護：這裡只放「介面本身的字」，不放履歷資料的字。
//
// 用法：元件內 `const t = useT()` 取得目前語言對應的這份物件（見 LanguageContext.tsx）。

export type Lang = 'zh' | 'en'

export interface Translations {
  meta: {
    title: string
    description: string
  }
  nav: {
    experience: string
    projects: string
    freelance: string
    toggleMenu: string
    toggleLanguage: string
  }
  hero: {
    ctaLabel: string
  }
  section: {
    experience: { caption: string }
    projects: { caption: string }
    freelance: { caption: string }
  }
  gallery: {
    zoomAria: (title: string) => string
    visitAria: (title: string) => string
  }
  lightbox: {
    screenshotAlt: (title: string, index: number) => string
    close: string
    prev: string
    next: string
  }
  footer: {
    githubLabel: string
  }
}

export const translations: Record<Lang, Translations> = {
  zh: {
    meta: {
      title: '林心韻 Singing Lin ｜ 網頁前端工程師作品集',
      description: '林心韻 Singing Lin — 網頁前端工程師作品集，7 年前端開發經驗，主力技能 React。',
    },
    nav: {
      experience: '經歷',
      projects: '專案作品',
      freelance: '接案作品',
      toggleMenu: '切換選單',
      toggleLanguage: '切換語言',
    },
    hero: {
      ctaLabel: '查看作品',
    },
    section: {
      experience: { caption: '經歷、學歷與技能' },
      projects: { caption: '專案作品' },
      freelance: { caption: '接案作品' },
    },
    gallery: {
      zoomAria: (title) => `放大檢視 ${title} 截圖`,
      visitAria: (title) => `前往 ${title}`,
    },
    lightbox: {
      screenshotAlt: (title, index) => `${title} 截圖 ${index}`,
      close: '關閉放大檢視',
      prev: '上一張',
      next: '下一張',
    },
    footer: {
      githubLabel: 'GitHub',
    },
  },
  en: {
    meta: {
      title: 'Singing Lin ｜ Frontend Engineer Portfolio',
      description: 'Singing Lin — Frontend Engineer portfolio. 7 years of frontend experience, specializing in React.',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      freelance: 'Freelance',
      toggleMenu: 'Toggle menu',
      toggleLanguage: 'Switch language',
    },
    hero: {
      ctaLabel: 'View My Work',
    },
    section: {
      experience: { caption: 'Experience, Education & Skills' },
      projects: { caption: 'Selected Projects' },
      freelance: { caption: 'Freelance Work' },
    },
    gallery: {
      zoomAria: (title) => `View ${title} screenshot`,
      visitAria: (title) => `Visit ${title}`,
    },
    lightbox: {
      screenshotAlt: (title, index) => `${title} screenshot ${index}`,
      close: 'Close preview',
      prev: 'Previous',
      next: 'Next',
    },
    footer: {
      githubLabel: 'GitHub',
    },
  },
}
