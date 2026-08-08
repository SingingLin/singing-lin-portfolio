import type { ReactNode } from 'react'
import Reveal from '../Reveal/Reveal'

interface SectionHeadingProps {
  /** 對應 Header NAV_ITEMS 的 idx（01～07），延伸全站統一的編號系統。 */
  index: string
  kicker: string
  title: string
  /** 深色語境（如 Contact 面板）使用，切換 kicker/title/index 的配色。 */
  onDark?: boolean
  /** 標題區下方的補充說明（目前僅 OtherWorks 使用）。 */
  note?: ReactNode
  /** 是否自帶捲動進場動畫；已經包在外層 Reveal 內的用法（如 Contact）請關閉，避免雙重動畫。 */
  reveal?: boolean
  delay?: number
}

/** 全站 section 標題共用元件：延伸 Header 既有的 01/02/03 導覽編號語言到每個 section-heading。 */
function SectionHeading({ index, kicker, title, onDark = false, note, reveal = true, delay }: SectionHeadingProps) {
  const className = `section-heading ${onDark ? 'on-dark' : ''}`.trim()

  const content = (
    <>
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <div className="section-heading-text">
        <span className="section-kicker">{kicker}</span>
        <h2 className="section-title">{title}</h2>
        {note}
      </div>
    </>
  )

  if (!reveal) {
    return <div className={className}>{content}</div>
  }

  return (
    <Reveal delay={delay} className={className}>
      {content}
    </Reveal>
  )
}

export default SectionHeading
