import { useLanguage } from '../i18n/useLanguage'
import * as en from './resumeData.en'
import * as zh from './resumeData.zh'

export type ResumeData = typeof zh

/** 依目前語言（LanguageContext）回傳對應的履歷資料（中/英兩份，型別完全一致）。 */
export function useResumeData(): ResumeData {
  const { lang } = useLanguage()
  return lang === 'en' ? en : zh
}
