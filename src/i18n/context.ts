import { createContext } from 'react'
import type { Lang } from './translations'

export const STORAGE_KEY = 'sl-portfolio-lang'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'zh'
}
