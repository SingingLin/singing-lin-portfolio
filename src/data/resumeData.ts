// 林心韻 Singing Lin 履歷資料
// 資料皆來自履歷 PDF 原文抽取，未列出的資訊一律不編造。
// 連結網址於 2026/08/08 由 https://www.cake.me/resumes/s--VT-ehNfJw5rr11aq3iMZ2Q--/zzzsing
// 之伺服器端渲染 HTML 逐一核對確認為真實網址（非猜測）。

export const profile = {
  name: '林心韻',
  nameEn: 'Singing Lin',
  title: '網頁前端工程師',
  /** Hero 狀態徽章文字（v10 設計：純文字英文職稱，無底色）。 */
  statusBadge: 'Frontend Engineer',
  initials: 'SL',
  /** Hero 自我介紹文案（v10 定案）：第一句獨立一行，其餘接續下一行。 */
  heroLead: '七年前端工程師經驗，主力技術為 React。',
  heroRest:
    '歷任國泰投信、華碩、網際威信等團隊，從企業後台系統、元件庫架構到銀行 Hybrid App 都實際做過；也曾獨立搭建 Grafana、ElasticSearch 監控系統。',
  location: 'Taipei, Taiwan',
  email: 'singinglin.0530@gmail.com',
  githubLabel: 'Github',
  githubHref: 'https://github.com/SingingLin',
  avatar: '/images/avatar.webp',
}

export interface EducationItem {
  school: string
  degree?: string
  department?: string
  period: string
}

export const education: EducationItem[] = [
  {
    school: '國立彰化師範大學',
    degree: '學士學位',
    department: '數學系',
    period: '2012 - 2016',
  },
  {
    school: '私立祐德高中',
    period: '2009 - 2012',
  },
]

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

/**
 * Experience 合併區塊裡的 Top Skills 膠囊清單（v10 設計：CSS Grid 固定 3 欄排列）。
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

export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
}

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

export interface ProjectItem {
  title: string
  tech: string
  period?: string
  bullets: string[]
  /** 專案實際截圖（真實素材），路徑對應 public/images/projects 下的檔案 */
  images?: string[]
}

export interface ProjectGroup {
  company: string
  projects: ProjectItem[]
}

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
          '新建各式共用元件（Tabs/Pagination/Button/Card/PopupBox/Modal/TitleSection/NoticeList/SvgIcon/Dropdown/DateRangePicker/SwitchButton）。',
          '建立程式碼排版及 Lint 規則、根據 UI Guideline 調整 tailwind 設定檔。',
          '修復字體與多次呼叫 API 問題、嘗試導入 TypeScript。',
        ],
        images: [
          '/images/projects/cathay/etf-app/01.jpg',
          '/images/projects/cathay/etf-app/02.png',
          '/images/projects/cathay/etf-app/03.png',
        ],
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
        images: ['/images/projects/cathay/ec-web/01.png', '/images/projects/cathay/ec-web/02.png'],
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
        images: [
          '/images/projects/foxconn/hr-meeting-pad/01.png',
          '/images/projects/foxconn/hr-meeting-pad/02.png',
        ],
      },
      {
        title: '人資儀表板管理系統',
        tech: 'Vue3 / Tailwind',
        period: '2023/05 - 2023/07',
        bullets: ['前後台人力佈局切版/功能開發、元件模組化。'],
        images: [
          '/images/projects/foxconn/hr-dashboard/01.png',
          '/images/projects/foxconn/hr-dashboard/02.png',
        ],
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
        images: [
          '/images/projects/asus/cms-elements/01.png',
          '/images/projects/asus/cms-elements/02.png',
          '/images/projects/asus/cms-elements/03.png',
        ],
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
        images: [
          '/images/projects/asus/modulize/01.png',
          '/images/projects/asus/modulize/02.png',
        ],
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
        images: ['/images/projects/hitrust/fbo/01.png', '/images/projects/hitrust/fbo/02.png'],
      },
      {
        title: '中信行動企業家',
        tech: 'HybridApp / Angular6',
        bullets: ['功能開發/Debug、全站 RWD、動態鍵盤開發。'],
        images: ['/images/projects/hitrust/ctbc/01.png', '/images/projects/hitrust/ctbc/02.png'],
      },
      {
        title: '模組化前端工具 Smart Jig',
        tech: 'Angular6',
        bullets: ['全站畫面設計/切版、元件開發、協助產品設計構想。'],
        images: [
          '/images/projects/hitrust/smart-jig/01.png',
          '/images/projects/hitrust/smart-jig/02.png',
        ],
      },
      {
        title: 'Grafana 監控面板',
        tech: 'Grafana',
        bullets: ['研究及架設 Grafana、製作監控儀表板、設置警告系統。'],
        images: [
          '/images/projects/hitrust/grafana/01.png',
          '/images/projects/hitrust/grafana/02.png',
        ],
      },
      {
        title: 'ElasticSearch 系統環境、Kibana 介面',
        tech: 'ElasticSearch / Kibana',
        bullets: ['研究及架設 ElasticSearch Cluster、Kibana、實現熱溫暖架構、Index Lifecycle Management。'],
        images: ['/images/projects/hitrust/ek/01.png', '/images/projects/hitrust/ek/02.png'],
      },
      {
        title: '微服務監控平台',
        tech: 'Kibana Plugin / ReactJS',
        bullets: ['全站畫面設計/切版、全站功能開發。'],
        images: [
          '/images/projects/hitrust/kibana-plugin/01.png',
          '/images/projects/hitrust/kibana-plugin/02.png',
          '/images/projects/hitrust/kibana-plugin/03.png',
        ],
      },
    ],
  },
]

export interface OtherWork {
  title: string
  linkLabel?: string
  /** 真實網址；僅在已從 cake.me 履歷頁核對確認的情況下填入，未確認一律留空，不編造 */
  href?: string
  /** 實際作品截圖 */
  images?: string[]
}

// 外包/接案作品
// v10：9 筆順序整個反過來（原第 9 筆排到第一個）；新增 5 筆真實截圖（images 欄位），
// 這 5 筆原本純連結、現在跟其他有截圖的項目一樣可透過 hover 圖示走 Lightbox 查看大圖。
export const otherWorks: OtherWork[] = [
  {
    title: 'LHDC Official Website',
    linkLabel: 'LHDC',
    href: 'https://lhdc.co/en',
    images: ['/images/projects/soho/lhdc-official/01.png'],
  },
  {
    title: 'LHDC ONE',
    linkLabel: 'LHDC ONE',
    href: 'https://one.lhdc.co/en/',
    images: ['/images/projects/soho/lhdc-one/01.png'],
  },
  {
    title: '中華機械',
    linkLabel: 'Capital Machinery',
    href: 'https://www.capitalmachinery.com.tw/',
    images: ['/images/projects/soho/capitalmachinery/01.png'],
  },
  {
    title: '中華賓士',
    linkLabel: 'Benz',
    href: 'https://www.cmi.mercedes-benz.com.tw/index',
    images: ['/images/projects/soho/mercedesbenz/01.png'],
  },
  {
    title: '火影忍者動畫20週年特展活動',
    images: ['/images/projects/soho/naruto20/01.png'],
  },
  {
    title: '收收UIUX設計顧問',
    linkLabel: 'UIUX Design',
    href: 'https://uiuxdesign.tw/',
    images: ['/images/projects/soho/uiuxdesign/01.png'],
  },
  {
    title: '叮噹營養師部落格',
    linkLabel: 'DinDon Dietitian',
    href: 'https://dindondietitian.com.tw/',
    images: ['/images/projects/soho/dindondietitian/01.png'],
  },
  {
    title: 'MIT微笑標章販促活動',
    images: ['/images/projects/soho/salemit/01.png'],
  },
  {
    title: '民泊専門の 清掃代行運営代行サービス（KURISAPO）',
    images: [
      '/images/projects/soho/kurisapo/01.png',
      '/images/projects/soho/kurisapo/02.png',
      '/images/projects/soho/kurisapo/03.png',
    ],
  },
]
