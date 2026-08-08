import { profile } from '../../data/resumeData'
import Reveal from '../Reveal/Reveal'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <Reveal className="section-heading">
          <span className="section-kicker">About</span>
          <h2 className="section-title">關於我</h2>
        </Reveal>

        <Reveal delay={80} className={styles.content}>
          <p>{profile.summary}</p>
          <p>
            主力技能為 React，並具備元件庫建置、Monorepo 架構規劃、
            Grafana／ElasticSearch／Kibana 監控系統搭建等經驗；也曾在實際專案中使用 Vue 3、
            Angular 6，持續累積跨專案的前端工程實務。
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default About
