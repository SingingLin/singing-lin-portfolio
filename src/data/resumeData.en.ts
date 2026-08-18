// Singing Lin — resume data (English version)
// Professional translation of resumeData.zh.ts for the EN site. Company names use
// commonly recognized English renderings; all facts (dates, tech stack, scope of work)
// match the Chinese source 1:1 — nothing invented, nothing omitted.
//
// imagesDir mirrors resumeData.zh.ts exactly (same folders under src/assets/projects/),
// since screenshots aren't language-specific.

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
  title: 'Frontend Engineer',
  statusBadge: 'Frontend Engineer',
  initials: 'SL',
  heroLead: '7 years of frontend engineering experience, specializing in React.',
  heroRest:
    "Worked across teams at Cathay Securities Investment Trust, ASUS, and HiTrust InfoTech — hands-on with enterprise back-office systems, component library architecture, and hybrid banking apps, plus independently built Grafana and Elasticsearch monitoring stacks.",
  location: 'Taipei, Taiwan',
  email: 'singinglin.0530@gmail.com',
  githubLabel: 'Github',
  githubHref: 'https://github.com/SingingLin',
  avatar: '/images/avatar.jpg',
}

export const education: EducationItem[] = [
  {
    school: 'National Changhua University of Education',
    degree: "Bachelor's Degree",
    department: 'Department of Mathematics',
    period: '2012 - 2016',
  },
]

/**
 * Top Skills pill list for the merged Experience section (v10 design).
 * A curated set of 9 representative skills, maintained separately from the full
 * skillCategories breakdown below.
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
    note: 'React is the primary framework; Vue 3 and Angular 6 were used on specific projects but are not primary skills — proficiency differences are noted honestly.',
    items: [
      { name: 'React 18', highlight: true, note: 'Primary skill · 7 years experience' },
      { name: 'Vue 3', note: '~3 months of project experience (Ingrasys Technology, 2023)' },
      { name: 'Angular 6', note: 'Earlier-career experience, used less in recent years (HiTrust InfoTech, 2017–2020)' },
    ],
  },
  {
    category: 'Build Tools',
    items: [
      { name: 'Webpack5' },
      { name: 'Rollup.js' },
      { name: 'Lerna' },
      { name: 'Yarn Workspaces' },
    ],
  },
  {
    category: 'Version Control',
    items: [{ name: 'Git' }, { name: 'SVN' }],
  },
  {
    category: 'Monitoring',
    items: [{ name: 'Grafana' }, { name: 'ElasticSearch' }, { name: 'Kibana' }],
  },
]

// Newest to oldest
export const experiences: ExperienceItem[] = [
  {
    company: 'Cathay Securities Investment Trust Co., Ltd.',
    role: 'Frontend Engineer (Contractor)',
    period: 'Feb 2024 - Aug 2025',
    bullets: [
      'Built the Cathay ETF app using React.',
      'Built the Cathay E-Family app using React.',
    ],
  },
  {
    company: 'Ingrasys Technology Inc.',
    role: 'Frontend Engineer',
    period: 'Apr 2023 - Jul 2023',
    bullets: [
      'Built a tablet meeting-room system with Vue 3 + PWA.',
      'Built an HR dashboard management system with Vue 3.',
    ],
  },
  {
    company: 'ASUSTeK Computer Inc.',
    role: 'Frontend Engineer (Contractor)',
    period: 'May 2020 - Dec 2022',
    bullets: [
      "Built ASUS's official-site back-office admin system with React TS.",
      'Built an in-house React boilerplate with React TS and Webpack5, now used as the starting architecture for every React project in the department.',
      'Implemented a monorepo with Lerna + Yarn Workspaces to build the company CMS component library.',
      'Built the ASUS Business back-office admin system with React TS.',
      'Built the ASUS Modulize 2.0 system with React TS.',
    ],
  },
  {
    company: 'HiTrust Inc.',
    role: 'Frontend Engineer',
    period: 'Jun 2017 - Feb 2020',
    bullets: [
      'Developed hybrid banking mobile apps with Angular via Cordova, including "Fubon Mobile Business" and "CTBC Mobile Enterprise."',
      'Fixed responsive-layout issues across mobile screen sizes site-wide for "Fubon Mobile Business."',
      'Assisted with frontend development for bank back-office pages.',
      'Helped teammates troubleshoot layout/markup issues.',
      'Built a "modular frontend toolkit" to speed up bank project frontend development.',
      'Independently built and researched a Grafana monitoring system, integrated with LINE Bot alerting.',
      'Independently built and researched an Elasticsearch distributed search/analytics environment and Kibana dashboards.',
      'Helped build a microservices monitoring platform, and independently built a Kibana plugin with ReactJS (upload, deploy, and monitor microservices).',
    ],
  },
]

// Grouped by company, in the same order as the experience timeline (newest to oldest)
export const projectGroups: ProjectGroup[] = [
  {
    company: 'Cathay Securities Investment Trust',
    projects: [
      {
        title: 'Cathay ETF App',
        tech: 'React / Vite',
        period: '2024/02 - 2025/03',
        bullets: [
          'Feature development and debugging; refactored the dividend-record feature; built the annual statement feature; integrated biometric authentication.',
          'Built a suite of shared components (Tabs/ Pagination/ Button/ Card/ PopupBox/ Modal/ TitleSection/ NoticeList/ SvgIcon/ Dropdown/ DateRangePicker/ SwitchButton).',
          'Established code formatting and lint rules; adjusted the Tailwind config to match the UI guideline.',
          'Fixed font-rendering and duplicate-API-call issues; explored adopting TypeScript.',
        ],
        imagesDir: 'cathay/etf-app',
      },
      {
        title: 'Cathay E-Family',
        tech: 'React / Gulp',
        period: '2025/02 - 2025/08',
        bullets: [
          'Feature development and debugging; built back-end-load fund features (redeem-and-reinvest / lump-sum subscription / transaction history).',
          'Helped optimize site performance.',
          'Instrumented GA events across the back-end-load fund flow.',
        ],
        imagesDir: 'cathay/ec-web',
      },
    ],
  },
  {
    company: 'Ingrasys Technology',
    projects: [
      {
        title: 'Tablet Meeting-Room System',
        tech: 'Vue3 / Tailwind / PWA',
        period: '2023/04 - 2023/07',
        bullets: [
          'Site-wide markup and feature development; set up the PWA environment.',
          'Built the automated deployment pipeline with GitLab CI and Docker.',
        ],
        imagesDir: 'foxconn/hr-meeting-pad',
      },
      {
        title: 'HR Dashboard Management System',
        tech: 'Vue3 / Tailwind',
        period: '2023/05 - 2023/07',
        bullets: ['Markup and feature development for front- and back-office workforce views; modularized components.'],
        imagesDir: 'foxconn/hr-dashboard',
      },
    ],
  },
  {
    company: 'ASUS',
    projects: [
      {
        title: 'ASUS Official Site CMS',
        tech: 'React TS',
        period: '2020/05 - 2021/09',
        bullets: ['Feature development and debugging; onboarded new team members to the project architecture.'],
      },
      {
        title: 'React Scaffold',
        tech: 'React TS / Webpack5',
        period: '2021/04 - 2021/05',
        bullets: [
          'Baseline React project architecture for the department, using Webpack5/Babel/tsconfig, eslint/stylelint/prettier/editorconfig, and husky/commitlint/lint-staged.',
          'Included React Router, Axios, and Redux (@reduxjs/toolkit, redux-saga) configuration.',
        ],
      },
      {
        title: 'CMS Component Library',
        tech: 'React TS / Webpack5 / Rollup / Lerna / Yarn Workspaces',
        period: '2021/05 - 2022/06',
        bullets: [
          'Lead owner of the component library project — triaged issues and drove the architecture in a monorepo setup.',
          'Published packages to a private registry via Rollup; built the user-guide site with Webpack5.',
          'Built Avatar/Badge/Card/Button/Text Field/Select/Radio/Checkbox/Pagination and other components.',
          'Implemented CSS-in-JS with Styled Components.',
        ],
        imagesDir: 'asus/cms-elements',
      },
      {
        title: 'ASUS Business CMS',
        tech: 'React TS',
        period: '2022/04 - 2022/10',
        bullets: ['Set up the project architecture; feature development and debugging; onboarded new team members.'],
      },
      {
        title: 'ASUS Modulize 2.0',
        tech: 'React TS',
        period: '2022/08 - 2022/12',
        bullets: ['Set up the project architecture; feature development and debugging.'],
        imagesDir: 'asus/modulize',
      },
    ],
  },
  {
    company: 'HiTrust InfoTech',
    projects: [
      {
        title: 'Fubon Mobile Business',
        tech: 'HybridApp / Angular4',
        bullets: ['Feature development and debugging; site-wide responsive design; built a charts plugin.'],
        imagesDir: 'hitrust/fbo',
      },
      {
        title: 'CTBC Mobile Enterprise',
        tech: 'HybridApp / Angular6',
        bullets: ['Feature development and debugging; site-wide responsive design; built a dynamic keyboard.'],
        imagesDir: 'hitrust/ctbc',
      },
      {
        title: 'Smart Jig — Modular Frontend Toolkit',
        tech: 'Angular6',
        bullets: ['Site-wide UI design and markup; component development; contributed to product design.'],
        imagesDir: 'hitrust/smart-jig',
      },
      {
        title: 'Grafana Monitoring Dashboard',
        tech: 'Grafana',
        bullets: ['Researched and set up Grafana; built monitoring dashboards; configured alerting.'],
        imagesDir: 'hitrust/grafana',
      },
      {
        title: 'Elasticsearch Environment & Kibana UI',
        tech: 'ElasticSearch / Kibana',
        bullets: ['Researched and set up an Elasticsearch cluster and Kibana; implemented a hot-warm architecture and index lifecycle management.'],
        imagesDir: 'hitrust/ek',
      },
      {
        title: 'Microservices Monitoring Platform',
        tech: 'Kibana Plugin / ReactJS',
        bullets: ['Site-wide UI design and markup; full feature development.'],
        imagesDir: 'hitrust/kibana-plugin',
      },
    ],
  },
]

// Freelance work — order matches resumeData.zh.ts (newest-feeling entry first).
// Whether a tile links out or opens the Lightbox is decided by the UI based on whether
// href is present (see OtherWorks.tsx), not by anything in this data.
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
    title: 'Capital Machinery Limited',
    linkLabel: 'Capital Machinery',
    href: 'https://www.capitalmachinery.com.tw/',
    imagesDir: 'soho/capitalmachinery',
  },
  {
    title: 'Capital Motors',
    linkLabel: 'Benz',
    href: 'https://www.cmi.mercedes-benz.com.tw/index',
    imagesDir: 'soho/mercedesbenz',
  },
  {
    title: 'Naruto 20th Anniversary Exhibition Campaign',
    imagesDir: 'soho/naruto20',
  },
  {
    title: 'UIUX Design Consulting',
    linkLabel: 'UIUX Design',
    href: 'https://uiux-retriever.vercel.app',
    imagesDir: 'soho/uiuxdesign',
  },
  {
    title: 'DinDon Dietitian Blog',
    linkLabel: 'DinDon Dietitian',
    href: 'https://dindondietitian.com.tw/',
    imagesDir: 'soho/dindondietitian',
  },
  {
    title: 'MIT Smile Mark Promotional Campaign',
    imagesDir: 'soho/salemit',
  },
  {
    title: 'KURISAPO — Vacation Rental Cleaning & Property Service (Japan)',
    imagesDir: 'soho/kurisapo',
  },
]
