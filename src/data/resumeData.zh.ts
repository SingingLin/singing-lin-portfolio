// 林心韻 Singing Lin 履歷資料（中文版）
// 資料皆來自履歷 PDF 原文抽取，未列出的資訊一律不編造。
// 連結網址於 2026/08/08 由 https://www.cake.me/resumes/s--VT-ehNfJw5rr11aq3iMZ2Q--/zzzsing
// 之伺服器端渲染 HTML 逐一核對確認為真實網址（非猜測）。
//
// 專案截圖改用 imagesDir 指向 src/assets/projects/ 底下的資料夾，由
// src/utils/projectImages.ts 在 build time 自動掃描，不再手動列出檔名（見該檔說明）。

import type {
  EducationItem,
  ExperienceItem,
  OtherWork,
  Profile,
  ProjectGroup,
  SkillCategory,
} from './resumeData.types'

export const profile: Profile = {
  name: '林心韻',
  nameEn: 'Singing Lin',
  title: '網頁前端工程師',
  statusBadge: 'Frontend Engineer',
  initials: 'SL',
  heroLead: '七年前端工程師經驗，主力技術為 React。',
  heroRest:
    '歷任國泰投信、華碩、網際威信等團隊，從企業後台系統、元件庫架構到銀行 Hybrid App 都實際做過；也曾獨立搭建 Grafana、ElasticSearch 監控系統。',
  location: 'Taipei, Taiwan',
  email: 'singinglin.0530@gmail.com',
  githubLabel: 'Github',
  githubHref: 'https://github.com/SingingLin',
  avatar: '/images/avatar.jpg',
}

export const education: EducationItem[] = [
  {
    school: '國立彰化師範大學',
    degree: '學士學位',
    department: '數學系',
    period: '2012 - 2016',
  },
]

/**
 * Experience 合併區塊裡的 Top Skills 膠囊清單（v10 設計）。
 * 刻意挑 9 項最具代表性的技能，跟下面 skillCategories 的完整分類資料分開維護，
 * skillCategories 本身不刪，只是這次 UI 不逐分類渲染。
 */
export const topSkills: string[] = [
  'Html',
  'Css',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'Grafana',
  'ElasticSearch',
  'Kibana',
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Language',
    items: [
      { name: 'Html' },
      { name: 'Css/Scss' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'jQuery' },
      { name: 'Google App Script' },
    ],
  },
  {
    category: 'Framework',
    note: 'React 為主力技術；Vue 3、Angular 6 為專案中使用過但非主力的經驗，誠實標註熟練度差異',
    items: [
      { name: 'React 18', highlight: true, note: '主力技能・7 年經驗' },
      { name: 'Vue 3', note: '約 3 個月專案經驗（鴻佰科技，2023）' },
      { name: 'Angular 6', note: '較早期專案經驗，近年較少使用（網際威信，2017–2020）' },
    ],
  },
  {
    category: '打包／管理工具',
    items: [
      { name: 'Webpack5' },
      { name: 'Rollup.js' },
      { name: 'Lerna' },
      { name: 'Yarn Workspaces' },
    ],
  },
  {
    category: '版本控管',
    items: [{ name: 'Git' }, { name: 'SVN' }],
  },
  {
    category: '監控系統',
    items: [{ name: 'Grafana' }, { name: 'ElasticSearch' }, { name: 'Kibana' }],
  },
]

// 依時間新到舊排列
export const experiences: ExperienceItem[] = [
  {
    company: '國泰證券投資信託股份有限公司',
    role: '前端工程師/廠商',
    period: '2024年2月 - 2025年8月',
    bullets: ['使用 React 製作國泰投信 ETF 專案。', '使用 React 製作國泰E家人專案。'],
  },
  {
    company: '鴻佰科技股份有限公司',
    role: '前端工程師',
    period: '2023年4月 - 2023年7月',
    bullets: ['使用 Vue3 + PWA 製作平板會議室系統。', '使用 Vue3 製作人資儀表板管理系統。'],
  },
  {
    company: '華碩股份有限公司',
    role: '前端工程師/廠商',
    period: '2020年5月 - 2022年12月',
    bullets: [
      '使用 ReactTS 製作 ASUS 官網後台管理系統。',
      '使用 ReactTS 及 Webpack5 建置部門內部使用的公版，目前有任何需使用到 React 的專案皆以公版為初步架構下去開發。',
      '使用 Lerna 搭配 Yarn workspace 方式實踐 Monorepo 專案，以此架構建置公司 CMS 元件庫。',
      '使用 ReactTS 製作 ASUS Business 後台管理系統。',
      '使用 ReactTS 製作 ASUS Modulize2.0 系統。',
    ],
  },
  {
    company: '網際威信股份有限公司',
    role: '前端工程師',
    period: '2017年6月 - 2020年2月',
    bullets: [
      '使用 Angular 透過 Cordova 以 hybrid 方式開發銀行手機 App。經手專案有「富邦行動商務網」、「中信行動企業家」。',
      '處理「富邦行動商務網」全站各式手機尺寸跑版問題。',
      '協助銀行後台前端頁面開發。',
      '協助同事在切版上遇到的技術問題。',
      '開發一套「模組化前端工具」以利公司快速製作銀行專案前端。',
      '獨立搭建及研究 Grafana 監控系統，並結合 LINE BOT 設置警告。',
      '獨立搭建及研究 ElasticSearch 分散式搜尋分析系統環境、Kibana 儀表板。',
      '協助開發微服務監控平台，並使用 ReactJS 獨立製作 Kibana Plugin（上傳、部署、監控微服務）。',
    ],
  },
]

// 依公司分組，公司順序與工作經歷一致（新到舊）
export const projectGroups: ProjectGroup[] = [
  {
    company: '國泰投信專案',
    projects: [
      {
        title: '國泰投信 ETF App',
        tech: 'React / Vite',
        period: '2024/02 - 2025/03',
        bullets: [
          '功能開發/Debug、配息紀錄功能重構、年度帳單功能開發、生物辨識功能串接。',
          '新建各式共用元件（Tabs/ Pagination/ Button/ Card/ PopupBox/ Modal/ TitleSection/ NoticeList/ SvgIcon/ Dropdown/ DateRangePicker/ SwitchButton）。',
          '建立程式碼排版及 Lint 規則、根據 UI Guideline 調整 tailwind 設定檔。',
          '修復字體與多次呼叫 API 問題、嘗試導入 TypeScript。',
        ],
        imagesDir: 'cathay/etf-app',
      },
      {
        title: '國泰E家人',
        tech: 'React / Gulp',
        period: '2025/02 - 2025/08',
        bullets: [
          '功能開發/Debug、後收型基金功能開發（買回轉申購/單筆申購/交易紀錄）。',
          '協助處理網站效能優化。',
          '根據後收型基金流程埋設 GA。',
        ],
        imagesDir: 'cathay/ec-web',
      },
    ],
  },
  {
    company: '鴻佰科技專案',
    projects: [
      {
        title: '平板會議室系統',
        tech: 'Vue3 / Tailwind / PWA',
        period: '2023/04 - 2023/07',
        bullets: [
          '全站切版/功能開發、PWA 環境建置。',
          '使用 Gitlab-CI 及 Docker 建置自動化部署流程。',
        ],
        imagesDir: 'foxconn/hr-meeting-pad',
      },
      {
        title: '人資儀表板管理系統',
        tech: 'Vue3 / Tailwind',
        period: '2023/05 - 2023/07',
        bullets: ['前後台人力佈局切版/功能開發、元件模組化。'],
        imagesDir: 'foxconn/hr-dashboard',
      },
    ],
  },
  {
    company: '華碩專案',
    projects: [
      {
        title: 'ASUS官網CMS系統',
        tech: 'React TS',
        period: '2020/05 - 2021/09',
        bullets: ['功能開發/Debug、幫助新人了解專案架構。'],
      },
      {
        title: 'React scaffold',
        tech: 'React TS / Webpack5',
        period: '2021/04 - 2021/05',
        bullets: [
          '部門內部 React 專案基本架構，使用 Webpack5/Babel/tsconfig、eslint/stylelint/prettier/editorconfig、husky/commitlint/lint-staged。',
          '含 React Router、Axios、Redux（@reduxjs/toolkit, redux-saga）配置。',
        ],
      },
      {
        title: 'CMS 元件庫',
        tech: 'React TS / Webpack5 / Rollup / Lerna / Yarn Workspaces',
        period: '2021/05 - 2022/06',
        bullets: [
          '元件庫專案主負責人、分發 issue、架構構想、Monorepo 實踐。',
          'Rollup 打包發佈私有雲、Webpack5 建置使用者指南網站。',
          '已建置 Avatar/Badge/Card/Button/Text Field/Select/Radio/Checkbox/Pagination 等元件。',
          'Styled Component 實踐 CSS in JS。',
        ],
        imagesDir: 'asus/cms-elements',
      },
      {
        title: 'ASUS Business CMS系統',
        tech: 'React TS',
        period: '2022/04 - 2022/10',
        bullets: ['專案架構建置、功能開發/Debug、幫助新人了解專案架構。'],
      },
      {
        title: 'ASUS Modulize 2.0系統',
        tech: 'React TS',
        period: '2022/08 - 2022/12',
        bullets: ['專案架構建置、功能開發/Debug。'],
        imagesDir: 'asus/modulize',
      },
    ],
  },
  {
    company: '網際威信專案',
    projects: [
      {
        title: '富邦商務網',
        tech: 'HybridApp / Angular4',
        bullets: ['功能開發/Debug、全站 RWD、Charts Plugin 開發。'],
        imagesDir: 'hitrust/fbo',
      },
      {
        title: '中信行動企業家',
        tech: 'HybridApp / Angular6',
        bullets: ['功能開發/Debug、全站 RWD、動態鍵盤開發。'],
        imagesDir: 'hitrust/ctbc',
      },
      {
        title: '模組化前端工具 Smart Jig',
        tech: 'Angular6',
        bullets: ['全站畫面設計/切版、元件開發、協助產品設計構想。'],
        imagesDir: 'hitrust/smart-jig',
      },
      {
        title: 'Grafana 監控面板',
        tech: 'Grafana',
        bullets: ['研究及架設 Grafana、製作監控儀表板、設置警告系統。'],
        imagesDir: 'hitrust/grafana',
      },
      {
        title: 'ElasticSearch 系統環境、Kibana 介面',
        tech: 'ElasticSearch / Kibana',
        bullets: ['研究及架設 ElasticSearch Cluster、Kibana、實現熱溫暖架構、Index Lifecycle Management。'],
        imagesDir: 'hitrust/ek',
      },
      {
        title: '微服務監控平台',
        tech: 'Kibana Plugin / ReactJS',
        bullets: ['全站畫面設計/切版、全站功能開發。'],
        imagesDir: 'hitrust/kibana-plugin',
      },
    ],
  },
]

// 外包/接案作品
// v10：9 筆順序整個反過來（原第 9 筆排到第一個）；新增 5 筆真實截圖，
// 這 5 筆原本純連結、現在跟其他有截圖的項目一樣有真實素材。
// 是否走「外連」或「Lightbox 查看圖片」由 UI 端依 href 是否存在判斷（見 OtherWorks.tsx），
// 不是由這裡的資料本身決定。
export const otherWorks: OtherWork[] = [
  {
    title: 'LHDC Official Website',
    linkLabel: 'LHDC',
    href: 'https://lhdc.co/en',
    imagesDir: 'soho/lhdc-official',
  },
  {
    title: 'LHDC ONE',
    linkLabel: 'LHDC ONE',
    href: 'https://one.lhdc.co/en/',
    imagesDir: 'soho/lhdc-one',
  },
  {
    title: '中華機械',
    linkLabel: 'Capital Machinery',
    href: 'https://www.capitalmachinery.com.tw/',
    imagesDir: 'soho/capitalmachinery',
  },
  {
    title: '中華賓士',
    linkLabel: 'Benz',
    href: 'https://www.cmi.mercedes-benz.com.tw/index',
    imagesDir: 'soho/mercedesbenz',
  },
  {
    title: '火影忍者動畫20週年特展活動',
    imagesDir: 'soho/naruto20',
  },
  {
    title: '收收UIUX設計顧問',
    linkLabel: 'UIUX Design',
    href: 'https://uiuxdesign.tw/',
    imagesDir: 'soho/uiuxdesign',
  },
  {
    title: '叮噹營養師部落格',
    linkLabel: 'DinDon Dietitian',
    href: 'https://dindondietitian.com.tw/',
    imagesDir: 'soho/dindondietitian',
  },
  {
    title: 'MIT微笑標章販促活動',
    imagesDir: 'soho/salemit',
  },
  {
    title: '民泊専門の 清掃代行運営代行サービス（KURISAPO）',
    imagesDir: 'soho/kurisapo',
  },
]
