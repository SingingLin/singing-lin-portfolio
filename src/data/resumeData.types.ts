// 履歷資料型別定義：src/data/resumeData.zh.ts（中文版）與 src/data/resumeData.en.ts（英文版）
// 共用同一組型別，確保兩份資料結構完全一致，不會漏翻或漏欄位。

export interface Profile {
  name: string
  nameEn: string
  title: string
  /** Hero 狀態徽章文字（v10 設計：純文字英文職稱，無底色）。 */
  statusBadge: string
  initials: string
  /** Hero 自我介紹文案第一句（獨立一行）。 */
  heroLead: string
  /** Hero 自我介紹文案其餘內容（接續下一行）。 */
  heroRest: string
  location: string
  email: string
  githubLabel: string
  githubHref: string
  avatar: string
}

export interface EducationItem {
  school: string
  degree?: string
  department?: string
  period: string
}

export interface SkillItem {
  name: string
  /** 誠實反映熟練度差異的簡短註記，例如專案經驗長度／近況 */
  note?: string
  /** 是否為主力技能，會用較顯眼的樣式標示 */
  highlight?: boolean
}

export interface SkillCategory {
  category: string
  /** 分類層級的補充說明，例如語氣保留的提醒 */
  note?: string
  items: SkillItem[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface ProjectItem {
  title: string
  tech: string
  period?: string
  bullets: string[]
  /**
   * 專案截圖所在資料夾（對應 src/assets/projects/<company>/<slug>）；
   * 實際圖片清單由 src/utils/projectImages.ts 在 build time 自動掃描該資料夾取得，
   * 這裡不用也不該手動列出檔名陣列。
   */
  imagesDir?: string
}

export interface ProjectGroup {
  company: string
  projects: ProjectItem[]
}

export interface OtherWork {
  title: string
  linkLabel?: string
  /** 真實網址；僅在已核對確認的情況下填入，未確認一律留空，不編造 */
  href?: string
  /** 專案截圖所在資料夾，用法同 ProjectItem.imagesDir */
  imagesDir?: string
}
