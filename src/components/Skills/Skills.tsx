import { Activity, Code2, GitBranch, Layers, Package } from 'lucide-react'
import type { ComponentType } from 'react'
import { skillCategories } from '../../data/resumeData'
import Reveal from '../Reveal/Reveal'
import styles from './Skills.module.css'

const CATEGORY_ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Language: Code2,
  Framework: Layers,
  '打包／管理工具': Package,
  版本控管: GitBranch,
  監控系統: Activity,
}

/**
 * 熟練度圓點視覺化：僅套用在 highlight（主力）技能，用來取代純文字「主力」標籤。
 * 依實際年資換算（React 18 有 7 年經驗 → 標 5 格），非誠實資料一律不編造，
 * 目前資料只有 React 18 是 highlight，其餘皆為誠實揭露的次要經驗（不套用此視覺）。
 */
const PROFICIENCY_DOTS: Record<string, number> = {
  'React 18': 5,
}
const DOTS_TOTAL = 5

function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <Reveal className="section-heading">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">技能</h2>
        </Reveal>

        <div className={styles.grid}>
          {skillCategories.map((group, groupIndex) => {
            const Icon = CATEGORY_ICONS[group.category]
            return (
              <Reveal key={group.category} delay={groupIndex * 60} className={styles.card}>
                <div className={styles.cardHead}>
                  {Icon && (
                    <span className={styles.cardIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={2.25} />
                    </span>
                  )}
                  <h3 className={styles.cardTitle}>{group.category}</h3>
                </div>
                {group.note && <p className={styles.categoryNote}>{group.note}</p>}
                <ul className={styles.badgeList}>
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={`${styles.badge} ${item.highlight ? styles.badgeHighlight : ''} ${
                        !item.highlight && item.note ? styles.badgeSecondary : ''
                      }`}
                    >
                      <span className={styles.badgeName}>
                        {item.name}
                        {item.highlight && (
                          <span className={styles.dots} aria-hidden="true">
                            {Array.from({ length: DOTS_TOTAL }, (_, dotIndex) => (
                              <span
                                key={dotIndex}
                                className={
                                  dotIndex < (PROFICIENCY_DOTS[item.name] ?? DOTS_TOTAL)
                                    ? styles.dotOn
                                    : styles.dotOff
                                }
                              />
                            ))}
                          </span>
                        )}
                      </span>
                      {item.note && <span className={styles.badgeNote}>{item.note}</span>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
