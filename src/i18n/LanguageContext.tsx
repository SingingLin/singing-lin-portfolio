import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, getInitialLang } from './context'
import { translations, type Lang } from './translations'

/** 全站語言 Provider：管理目前語言、寫回 localStorage、同步 <html lang> 與 <title>/meta description。 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem('sl-portfolio-lang', lang)
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant'

    const t = translations[lang]
    document.title = t.meta.title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description)
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev: Lang) => (prev === 'zh' ? 'en' : 'zh')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
