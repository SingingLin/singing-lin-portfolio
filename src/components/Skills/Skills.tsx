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
                        {item.highlight && <span className={styles.highlightTag}>主力</span>}
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
