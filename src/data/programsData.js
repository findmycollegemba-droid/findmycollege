export const PROGRAMS_DATA = {
  mba: {
    title: 'Master of Business Administration (MBA)',
    badge: 'University Degree',
    tagline: 'Globally recognized degree offered by UGC/University-affiliated institutions with deep conceptual grounding and high ROI.',
    keyAttributes: [
      { title: 'Conferring Body', value: 'Conferred by Universities (e.g. Delhi University, Mumbai University, IIM Act)' },
      { title: 'Regulatory Authority', value: 'UGC (University Grants Commission) / Ministry of Education' },
      { title: 'Average Fee Bracket', value: '₹2 Lakhs – ₹18 Lakhs (Generally subsidized / High ROI)' },
      { title: 'Higher Studies Path', value: 'Direct eligibility for Indian PhD programs without equivalence certificate' },
      { title: 'Pedagogy Balance', value: 'Academic rigor + foundational business theory + management fundamentals' }
    ],
    pros: [
      'Substantially lower tuition fees at top public universities (e.g. FMS Delhi ₹2.3L, JBIMS ₹6.1L, SIMSREE ₹1.4L).',
      'Globally standardized nomenclature recognized instantly by international employers and universities.',
      'Stable academic structure with university semester examinations.'
    ],
    cons: [
      'Curriculum revisions require university syndicate approval, so updates happen less frequently.',
      'Fewer corporate-sponsored guest labs compared to top autonomous private institutes.'
    ],
    topColleges: [
      'IIMs (Ahmedabad, Bangalore, Calcutta now award MBA degrees under IIM Act)',
      'FMS Delhi (Faculty of Management Studies, DU)',
      'JBIMS Mumbai (Jamnalal Bajaj Institute, Mumbai University)',
      'SIBM Pune (Symbiosis International University)',
      'NMIMS Mumbai (SBM, Deemed University)',
      'IIT Bombay (SJMSOM) & IIT Delhi (DMS)',
      'PUMBA Pune (Savitribai Phule Pune University)'
    ]
  },
  pgdm: {
    title: 'Post Graduate Diploma in Management (PGDM)',
    badge: 'Industry Autonomous Diploma',
    tagline: 'Cutting-edge corporate-aligned diploma offered by AICTE-approved autonomous B-schools, revised annually with CXO advisory councils.',
    keyAttributes: [
      { title: 'Conferring Body', value: 'Autonomous B-schools approved by AICTE (Association of Indian Universities AIU equates to MBA)' },
      { title: 'Regulatory Authority', value: 'AICTE (All India Council for Technical Education)' },
      { title: 'Average Fee Bracket', value: '₹16 Lakhs – ₹30 Lakhs (Self-financed world-class campuses)' },
      { title: 'Higher Studies Path', value: 'Eligible for PhD if institute holds AIU (Association of Indian Universities) MBA Equivalence' },
      { title: 'Pedagogy Balance', value: 'Harvard case-study method, simulations, executive guest faculty, live corporate projects' }
    ],
    pros: [
      'Dynamic curriculum updated every year to match AI, FinTech, ESG, and changing industry demand.',
      'Strong corporate linkages with intensive 2-3 month internships and live consulting projects.',
      'High-touch career services, soft-skill workshops, and executive mentoring.'
    ],
    cons: [
      'Tuition fees are higher due to private infrastructure and non-subsidized operational model.',
      'Ensure the institution has AIU MBA Equivalence status before enrolling.'
    ],
    topColleges: [
      'XLRI Jamshedpur (India\'s #1 autonomous B-school)',
      'SPJIMR Mumbai (S.P. Jain Institute of Management and Research)',
      'MDI Gurgaon (Management Development Institute)',
      'IMT Ghaziabad',
      'IIM Lucknow / Indore / Kozhikode (Flagship PGP programs)',
      'GIM Goa (Goa Institute of Management)',
      'Great Lakes Institute of Management, Chennai'
    ]
  },
  comparisonMatrix: [
    {
      feature: 'Award Type',
      mba: 'Degree (Awarded by a University)',
      pgdm: 'Diploma (Awarded by AICTE Autonomous Institute)'
    },
    {
      feature: 'Curriculum Agility',
      mba: 'Updated every 3-5 years via University board approval',
      pgdm: 'Updated every 12 months with corporate advisory board inputs'
    },
    {
      feature: 'Cost / Tuition Fees',
      mba: '₹1.5 Lakhs to ₹28 Lakhs (Many ultra-low fee options)',
      pgdm: '₹15 Lakhs to ₹32 Lakhs'
    },
    {
      feature: 'Case Study & Simulation Focus',
      mba: 'Moderate to High (Depending on college)',
      pgdm: 'Intensive (70%+ Harvard & Kellogg case studies)'
    },
    {
      feature: 'AIU Equivalence',
      mba: 'Not needed (Already a full degree)',
      pgdm: 'Required for PhD / UPSC / PSU eligibility (Provided by top 100 schools)'
    },
    {
      feature: 'Global Recognition',
      mba: 'Universal degree recognized worldwide',
      pgdm: 'Recognized when certified with AIU or Triple Crown / AACSB accreditation'
    },
    {
      feature: 'Placement Packages',
      mba: 'Identical at Tier 1 (FMS avg ₹34.1L, JBIMS avg ₹28L)',
      pgdm: 'Identical at Tier 1 (XLRI avg ₹32.7L, SPJIMR avg ₹33L)'
    }
  ],
  specializations: [
    {
      id: 'finance',
      name: 'Finance & Investment Banking',
      icon: '📈',
      avgSalary: '₹22 - 38 LPA',
      roles: ['Investment Banking Analyst', 'Private Equity Associate', 'Risk Management', 'Treasury & Corporate Finance', 'Wealth Manager'],
      topRecruiters: ['Goldman Sachs', 'J.P. Morgan', 'Morgan Stanley', 'Avendus Capital', 'Citigroup', 'Standard Chartered'],
      keySkills: ['Financial Modeling', 'DCF Valuation', 'Mergers & Acquisitions', 'Fixed Income', 'Derivatives']
    },
    {
      id: 'marketing',
      name: 'Marketing & Brand Strategy',
      icon: '🎯',
      avgSalary: '₹20 - 35 LPA',
      roles: ['Brand Manager', 'Product Marketing Manager (PMM)', 'Growth & Digital Marketing Lead', 'Category Manager'],
      topRecruiters: ['HUL', 'Procter & Gamble (P&G)', 'ITC', 'L\'Oréal', 'Nestlé', 'Mondelez', 'Amazon'],
      keySkills: ['Consumer Insights', 'GTM Strategy', 'Brand Positioning', 'Digital Analytics', 'CAC/LTV Optimization']
    },
    {
      id: 'consulting',
      name: 'Management Consulting & Strategy',
      icon: '💼',
      avgSalary: '₹25 - 40 LPA',
      roles: ['Management Consultant', 'Strategy Associate', 'Transformation Specialist', 'Chief of Staff'],
      topRecruiters: ['McKinsey & Company', 'Boston Consulting Group (BCG)', 'Bain & Company', 'Kearney', 'Strategy&', 'Accenture Strategy'],
      keySkills: ['Structured Problem Solving', 'MECE Frameworks', 'Market Sizing', 'Executive Communication', 'Financial Synergy']
    },
    {
      id: 'analytics',
      name: 'Business Analytics & AI Management',
      icon: '⚡',
      avgSalary: '₹20 - 36 LPA',
      roles: ['Product Manager (AI/Data)', 'Analytics Consultant', 'Business Intelligence Manager', 'Data Strategy Lead'],
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Fractal Analytics', 'Tiger Analytics', 'American Express'],
      keySkills: ['Python for Business', 'SQL & Data Warehousing', 'Predictive Modeling', 'GenAI Workflows', 'A/B Testing']
    },
    {
      id: 'operations',
      name: 'Supply Chain & Operations',
      icon: '🚀',
      avgSalary: '₹18 - 32 LPA',
      roles: ['Supply Chain Program Manager', 'Operations Excellence Lead', 'Procurement Strategy Lead', 'Logistics Director'],
      topRecruiters: ['Amazon', 'Apple', 'Flipkart', 'Asian Paints', 'Tata Steel', 'Unilever Supply Chain'],
      keySkills: ['Six Sigma & Lean', 'Inventory Optimization', 'Demand Forecasting', 'Network Design', 'ERP / SAP']
    },
    {
      id: 'hr',
      name: 'Human Resource Management (HRM)',
      icon: '🤝',
      avgSalary: '₹18 - 33 LPA',
      roles: ['HR Business Partner (HRBP)', 'Talent Acquisition Head', 'Compensation & Benefits Specialist', 'People Analytics Lead'],
      topRecruiters: ['XLRI Alumni Circles', 'TISS Recruiters', 'Aditya Birla Group', 'TAS', 'Reckitt', 'HUL'],
      keySkills: ['Labor Law & Industrial Relations', 'Total Rewards', 'Performance Management Systems', 'Culture & Change Management']
    }
  ]
};
