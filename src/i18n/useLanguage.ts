import { useContext } from 'react'
import { LanguageContext, type LanguageContextValue } from './context'
import { translations, type Translations } from './translations'

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage 必須在 LanguageProvider 底下使用')
  }
  return ctx
}

/** 取得目前語言對應的 UI 文案字典（見 src/i18n/translations.ts）。 */
export function useT(): Translations {
  const { lang } = useLanguage()
  return translations[lang]
}
