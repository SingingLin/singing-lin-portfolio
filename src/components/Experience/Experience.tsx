import { education, experiences, topSkills } from '../../data/resumeData'
import Reveal from '../Reveal/Reveal'
import styles from './Experience.module.css'

// 只顯示大學學歷；私立祐德高中資料保留在 resumeData 但這次 UI 不渲染（畫面上看不到即可）。
const universityEducation = education.filter((item) => item.degree)

function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="title">
            Experience<span className="dot">.</span>
          </h2>
          <p className="title-zh">經歷、學歷與技能</p>
        </Reveal>

        <Reveal delay={80} className={styles.expTopGrid}>
          {/* 左：Work Experience，只顯示公司名＋任職期間，bullet 細節資料保留在 resumeData 但不渲染 */}
          <div>
            <p className={styles.subLabel}>Work Experience</p>
            {experiences.map((item) => (
              <div key={`${item.company}-${item.period}`} className={styles.expItemLite}>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.period}>{item.period}</span>
              </div>
            ))}
          </div>

          {/* 右：Education（只留大學一筆）+ Top Skills */}
          <div>
            <p className={styles.subLabel}>Education</p>
            {universityEducation.map((item) => (
              <div key={item.school} className={styles.eduItemLite}>
                <p className={styles.eduSchool}>{item.school}</p>
                <p className={styles.eduDetail}>
                  {[item.degree, item.department].filter(Boolean).join('・')}{' '}
                  <span className={styles.eduPeriod}>{item.period}</span>
                </p>
              </div>
            ))}

            <div className={styles.skillsFlatWrap}>
              <p className={styles.subLabel}>Top Skills</p>
              <div className={styles.skillsFlat}>
                {topSkills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
