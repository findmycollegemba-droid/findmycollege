/**
 * Verified MBA & PGDM Live Scholarships Database
 * Session 2027-29 & Academic Cycle 2026-27
 * Covers Corporate Foundations, IIMs, Central Government (NSP),
 * Women in Leadership, and Top Autonomous B-Schools.
 */

export const SCHOLARSHIPS_DATA = [
  {
    id: 'aditya-birla-scholarship',
    slug: 'aditya-birla-scholarship',
    title: 'Aditya Birla Scholarship Programme',
    provider: 'Aditya Birla Group Foundation',
    providerType: 'Corporate Foundation',
    category: 'corporate',
    badge: 'Premier Corporate Grant',
    amount: '₹3,00,000 / year (₹6,00,000 Total)',
    amountNumber: 600000,
    amountCategory: 'above-3l',
    coverage: ['Full/Partial Tuition', 'Hostel & Living Allowance', 'Mentorship from Birla Leaders'],
    targetInstitutes: 'IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, IIM Kozhikode, IIM Shillong, XLRI Jamshedpur',
    eligibilitySummary: 'Top 20 candidates in entrance rank at listed institutes; evaluated on academic records, essays, and leadership.',
    minGraduationMarks: '70% or 7.5 CGPA',
    minExamPercentile: 'CAT / XAT ≥ 98%ile',
    familyIncomeLimit: 'No Income Cap (Strictly Merit & Leadership)',
    incomeCategory: 'all',
    status: 'LIVE NOW',
    deadline: 'June 30, 2026',
    daysRemaining: 24,
    selectionProcess: [
      'Institutional nomination of top 20 entrance rankers by participating IIMs/XLRI',
      'Submission of Aditya Birla scholarship application and essay on vision/leadership',
      'Shortlisting of 160 students nationwide for final rounds',
      'In-person interview by distinguished jury of industry luminaries in Mumbai'
    ],
    documentsRequired: [
      'CAT / XAT Scorecard with sectional marks',
      'Official IIM / XLRI Admission Letter & Fee Receipt',
      '10th, 12th, and Undergraduate Degree Transcripts',
      'Detailed CV highlighting extracurricular achievements',
      'Aditya Birla Statement of Purpose (SOP)'
    ],
    officialUrl: 'https://www.adityabirlascholars.net',
    description: 'One of India\'s most prestigious corporate scholarships, established by Mrs. Rajashree Birla. Covers annual tuition and living expenses for 16 management scholars annually across IIMs and XLRI with direct executive mentorship.',
    faqs: [
      {
        q: 'Can 2nd year MBA students apply for the Aditya Birla scholarship?',
        a: 'The scholarship is awarded in the 1st year and renewed in the 2nd year based on maintaining top 25% academic rank in the institute cohort.'
      },
      {
        q: 'Is there an annual family income ceiling?',
        a: 'No. The Aditya Birla scholarship is purely merit and leadership based, regardless of parental income.'
      }
    ]
  },
  {
    id: 'reliance-foundation-pg-scholarship',
    slug: 'reliance-foundation-pg-scholarship',
    title: 'Reliance Foundation Postgraduate Scholarship',
    provider: 'Reliance Foundation',
    providerType: 'Corporate Foundation',
    category: 'corporate',
    badge: 'Flagship National Grant',
    amount: 'Up to ₹6,00,000 (Over 2-Year Duration)',
    amountNumber: 600000,
    amountCategory: 'above-3l',
    coverage: ['Tuition Fee Grant', 'Laptop & Tech Allowance', 'Nurture Development Modules', 'Global Alumni Network'],
    targetInstitutes: 'All AICTE / UGC Recognized B-Schools & Universities in India',
    eligibilitySummary: 'First-year postgraduate MBA/PGDM students with min 550+ in aptitude test or graduation 60%+, open to all Indian citizens.',
    minGraduationMarks: '60% or 6.5 CGPA',
    minExamPercentile: 'CAT / XAT / CMAT ≥ 75%ile or Reliance Online Aptitude Test',
    familyIncomeLimit: 'Preference for household income < ₹15 Lakhs (Income < ₹2.5L given highest priority)',
    incomeCategory: 'upto-15l',
    status: 'LIVE NOW',
    deadline: 'July 15, 2026',
    daysRemaining: 39,
    selectionProcess: [
      'Online application form submission on Reliance Foundation portal',
      'Aptitude test (60 minutes covering verbal, numerical, and logical reasoning)',
      'Academic and extracurricular profile evaluation',
      'Virtual panel interview for final selection of 100 postgraduate scholars'
    ],
    documentsRequired: [
      'Graduation Final Marksheet / Degree Certificate',
      'Bonafide Student Certificate / MBA Admission Offer Letter',
      'Family Income Proof (ITR / Form 16 / Tehsildar Certificate)',
      'Government Photo ID (Aadhaar / Voter ID)',
      'Recent passport-size photograph'
    ],
    officialUrl: 'https://www.reliancefoundation.org',
    description: 'Empowers India’s brightest postgraduate minds. Up to 100 selected scholars receive ₹6 Lakhs over their two-year degree alongside a curated leadership, mentorship, and professional development curriculum.',
    faqs: [
      {
        q: 'Is the Reliance Foundation scholarship open to Tier-2 & Tier-3 B-schools?',
        a: 'Yes! Unlike institute-restricted grants, any student enrolled in a full-time recognized 2-year postgraduate program across India can apply.'
      },
      {
        q: 'What is the duration of the scholarship grant disbursement?',
        a: 'The scholarship of up to ₹6 Lakhs is disbursed across the 2-year program duration in four semi-annual tranches.'
      }
    ]
  },
  {
    id: 'iim-ahmedabad-nbfa',
    slug: 'iim-ahmedabad-nbfa',
    title: 'IIM Ahmedabad Need-Based Financial Assistance (NBFA)',
    provider: 'Indian Institute of Management Ahmedabad',
    providerType: 'IIM Institute Endowment',
    category: 'iim-top-bschool',
    badge: '100% Fee Waiver Scheme',
    amount: 'Up to 100% Tuition Fee Waiver (₹25,00,000)',
    amountNumber: 2500000,
    amountCategory: 'full',
    coverage: ['100% Course Tuition Fee', 'Hostel Fees', 'Books & Case Materials', 'Laptop Reimbursement'],
    targetInstitutes: 'IIM Ahmedabad (PGP & PGP-FABM)',
    eligibilitySummary: 'Admitted students whose total gross annual family income is below ₹15 Lakhs during the previous financial year.',
    minGraduationMarks: 'Admission to IIM Ahmedabad',
    minExamPercentile: 'CAT Qualified (IIMA Cutoffs)',
    familyIncomeLimit: 'Gross Family Income < ₹15,00,000 / annum (Higher waiver for income < ₹6 LPA)',
    incomeCategory: 'upto-15l',
    status: 'LIVE NOW',
    deadline: 'July 31, 2026',
    daysRemaining: 55,
    selectionProcess: [
      'Enrollment in IIMA PGP/PGP-FABM program',
      'Online NBFA application submission with 3-year verified IT returns of parents',
      'Financial aid committee verification and slab allocation (10% to 100% waiver)',
      'Direct fee credit adjustment prior to term fee deadlines'
    ],
    documentsRequired: [
      'ITR Acknowledgement of Parents / Guardians for last 3 Assessment Years',
      'Computation of Total Income and Form 16 / Salary Slips',
      'Bank Account Statements of all family members for 12 months',
      'Affidavit of family assets, agricultural holdings, and loans',
      'IIM Ahmedabad Roll Number and Enrollment Receipt'
    ],
    officialUrl: 'https://www.iima.ac.in',
    description: 'IIM Ahmedabad firmly believes that no deserving student admitted to its programs should ever be denied education due to financial hardship. Over 150 students receive up to 100% fee waivers every single year.',
    faqs: [
      {
        q: 'Can I apply for NBFA after receiving my admission offer?',
        a: 'Yes, the NBFA application window opens immediately after offer acceptance and before registration day.'
      },
      {
        q: 'Are students with education loans eligible for NBFA?',
        a: 'Yes, if you receive NBFA, the institute adjusts your fee demand notes so you can reduce or cancel your loan drawdown.'
      }
    ]
  },
  {
    id: 'idfc-first-bank-mba-scholarship',
    slug: 'idfc-first-bank-mba-scholarship',
    title: 'IDFC FIRST Bank MBA Scholarship',
    provider: 'IDFC FIRST Bank CSR',
    providerType: 'Banking & CSR',
    category: 'corporate',
    badge: 'Guaranteed ₹2L Grant',
    amount: '₹2,00,000 (₹1,00,000 / year)',
    amountNumber: 200000,
    amountCategory: '1l-3l',
    coverage: ['Tuition Fee Support', 'Direct Bank Account Credit'],
    targetInstitutes: '115+ Partner Colleges (IIMs, NMIMS, SIBM, TAPMI, BIMTECH, GIM, Great Lakes, etc.)',
    eligibilitySummary: 'Enrolled in 1st year of 2-year full-time MBA/PGDM with annual family income strictly under ₹6,00,000.',
    minGraduationMarks: 'Minimum 50% in Bachelor’s Degree',
    minExamPercentile: 'CAT / XAT / CMAT / NMAT / SNAP Qualified',
    familyIncomeLimit: 'Gross Family Income strictly ≤ ₹6,00,000 / annum',
    incomeCategory: 'upto-6l',
    status: 'LIVE NOW',
    deadline: 'July 31, 2026',
    daysRemaining: 55,
    selectionProcess: [
      'Check if your B-school is listed in the 115+ IDFC FIRST partner list',
      'Online registration on buddy4study / IDFC FIRST CSR portal',
      'Telephonic interview and document authenticity screening',
      'Disbursement of ₹1 Lakh in Year 1 and ₹1 Lakh in Year 2 directly to student account'
    ],
    documentsRequired: [
      'College Admission Letter / Fee Receipt with institution seal',
      'Valid Family Income Certificate issued by Tehsildar / SDO / Competent Authority or ITR',
      '10th, 12th, and Graduation Marksheets',
      'Copy of Aadhaar Card and Bank Account Passbook / Cancelled Cheque',
      'Recent Color Photograph'
    ],
    officialUrl: 'https://www.idfcfirstbank.com',
    description: 'IDFC FIRST Bank’s social commitment to democratizing higher education. Provides ₹2,00,000 financial support to 350+ deserving MBA students annually whose household earnings are under ₹6 Lakhs.',
    faqs: [
      {
        q: 'Is there any service bond with IDFC FIRST Bank?',
        a: 'No! There is zero employment bond or service obligation. It is a 100% unconditional scholarship.'
      },
      {
        q: 'Can students with education loans also receive this grant?',
        a: 'Yes, you can use the grant towards living costs, books, laptop, or direct fee payment.'
      }
    ]
  },
  {
    id: 'opjems-scholarship',
    slug: 'opjems-scholarship',
    title: 'OP Jindal Engineering & Management Scholarship (OPJEMS)',
    provider: 'OP Jindal Group',
    providerType: 'Industrial Conglomerate',
    category: 'corporate',
    badge: 'National Prestige Award',
    amount: '₹1,50,000 Cash Award + Trophy',
    amountNumber: 150000,
    amountCategory: '1l-3l',
    coverage: ['Direct Cash Scholarship', 'OPJEMS Certificate of Honor', 'Fast-Track Corporate Placement Gateway'],
    targetInstitutes: 'Top 20 IIMs, XLRI Jamshedpur, SPJIMR Mumbai, FMS Delhi, MDI Gurgaon, IIFT, JBIMS',
    eligibilitySummary: 'Top 10 academic rankers in the 1st year batch from 24 premier management institutions across India.',
    minGraduationMarks: 'Top 10 percentile in 1st year B-School curriculum',
    minExamPercentile: 'CAT ≥ 95%ile (or equivalent institute rank)',
    familyIncomeLimit: 'No Income Cap (Academic & Competency Merit)',
    incomeCategory: 'all',
    status: 'LIVE NOW',
    deadline: 'August 30, 2026',
    daysRemaining: 85,
    selectionProcess: [
      'Institute registers top 10 academic performers from the batch',
      'Online OPJEMS Assessment Test (Aptitude, Innovation, Business Acumen)',
      'Personal behavioral interview with senior leadership of Jindal Group',
      'Award felicitation ceremony in New Delhi'
    ],
    documentsRequired: [
      'Official nomination confirmation from Dean / Director of the Institute',
      'Term 1 / Year 1 CGPA scorecard and verification letter',
      'Identity Proof and Resume',
      'Personal essay on industrial leadership and nation building'
    ],
    officialUrl: 'https://www.opjems.com',
    description: 'Founded to honor the visionary industrialist Shri O.P. Jindal. Celebrates academic brilliance and entrepreneurial leadership in premier business schools with direct industry exposure.',
    faqs: [
      {
        q: 'Can students self-apply for OPJEMS?',
        a: 'Applications are routed through the Academic Office of the participating 24 business schools.'
      }
    ]
  },
  {
    id: 'iim-bangalore-financial-aid',
    slug: 'iim-bangalore-financial-aid',
    title: 'IIM Bangalore Financial Aid & Need Assistance',
    provider: 'Indian Institute of Management Bangalore',
    providerType: 'IIM Institute Endowment',
    category: 'iim-top-bschool',
    badge: 'Up to 100% Tuition Waiver',
    amount: '20% to 100% Tuition Fee Waiver (₹24,50,000)',
    amountNumber: 2450000,
    amountCategory: 'full',
    coverage: ['Full Tuition Fee Waiver', 'Hostel Rent Waiver', 'Books & Technology Grant'],
    targetInstitutes: 'IIM Bangalore (PGP, PGP-BA, PGPEM)',
    eligibilitySummary: 'Admitted students with household annual earnings below ₹8,00,000 per annum qualify for substantial fee waivers.',
    minGraduationMarks: 'Admitted into IIM Bangalore',
    minExamPercentile: 'CAT Qualified (IIMB Cutoffs)',
    familyIncomeLimit: 'Annual Household Income < ₹8,00,000 (Evaluated on Income-to-Asset Index)',
    incomeCategory: 'upto-8l',
    status: 'LIVE NOW',
    deadline: 'August 10, 2026',
    daysRemaining: 65,
    selectionProcess: [
      'Financial Aid application submission on IIMB Intranet upon admission',
      'Financial evaluation score calculation based on family income, dependents, and assets',
      'Two-step verification by external audited agency',
      'Fee waiver waiver credits sanctioned across 6 academic terms'
    ],
    documentsRequired: [
      'Parents\' Income Tax Returns for preceding 3 years',
      'Bank statement for 12 months of all bank accounts in the family',
      'Statement of immovable properties and outstanding loans',
      'Salary certificate or pension slips from employer where applicable'
    ],
    officialUrl: 'https://www.iimb.ac.in',
    description: 'IIM Bangalore ensures equitable access through its multi-crore Financial Aid budget, supported by government schemes, corporate endowments, and alumni contributions.',
    faqs: [
      {
        q: 'How many students at IIM Bangalore receive financial assistance?',
        a: 'Roughly 20% to 25% of every incoming MBA batch at IIMB receives financial assistance ranging from 20% to 100% of their tuition.'
      }
    ]
  },
  {
    id: 'nsp-central-sector-sc-st',
    slug: 'nsp-central-sector-sc-st',
    title: 'NSP Central Sector Top Class Education Scheme',
    provider: 'Ministry of Social Justice & Empowerment, Govt. of India',
    providerType: 'Central Government of India',
    category: 'government',
    badge: '100% Govt Sponsored',
    amount: 'Full Tuition Waiver + ₹3,000/mo Stipend + ₹86,000 Allowance',
    amountNumber: 2200000,
    amountCategory: 'full',
    coverage: ['100% Non-refundable Tuition & Institute Fees', '₹3,000 Monthly Living Stipend', '₹86,000 Laptop & Book Grant'],
    targetInstitutes: 'All 265 Notified Institutes (All IIMs, XLRI, FMS, SPJIMR, IIFT, MDI, TISS, IITs)',
    eligibilitySummary: 'SC/ST students admitted to any of the 265 top-tier notified institutes with family income not exceeding ₹8,00,000 per year.',
    minGraduationMarks: 'Graduation Degree from recognized university',
    minExamPercentile: 'Admitted through open merit or reserved quota',
    familyIncomeLimit: 'Annual Family Income strictly ≤ ₹8,00,000',
    incomeCategory: 'upto-8l',
    status: 'APPLICATIONS OPEN',
    deadline: 'October 31, 2026',
    daysRemaining: 147,
    selectionProcess: [
      'Online registration on National Scholarship Portal (scholarships.gov.in)',
      'Upload caste certificate, income certificate, and admission fee receipt',
      'Institute Nodal Officer (INO) Level 1 Verification',
      'District / State Level 2 Verification followed by Direct Benefit Transfer (DBT) to bank account'
    ],
    documentsRequired: [
      'Digital SC / ST Caste Certificate issued by competent revenue authority',
      'Income Certificate issued by Tehsildar / SDM (Valid for current FY)',
      'Admission Letter and Breakup of Institute Fee receipt',
      'Aadhaar Seeded Active Bank Account details',
      'Bonafide Certificate from the B-School'
    ],
    officialUrl: 'https://scholarships.gov.in',
    description: 'The Government of India\'s flagship affirmative educational program covering 100% tuition, living allowance, and IT equipment for SC and ST students securing admission in premier business schools.',
    faqs: [
      {
        q: 'Is this scholarship disbursed directly to the college or the student?',
        a: 'Tuition fees are reimbursed directly to the institution, while living stipend (₹36,000/yr) and book/laptop allowance (₹86,000) are credited to the student\'s Aadhaar-linked bank account.'
      }
    ]
  },
  {
    id: 'mirae-asset-foundation-scholarship',
    slug: 'mirae-asset-foundation-scholarship',
    title: 'Mirae Asset Foundation MBA Scholarship',
    provider: 'Mirae Asset Foundation',
    providerType: 'Global Financial Foundation',
    category: 'corporate',
    badge: 'High Value Grant',
    amount: 'Up to ₹5,00,000 (Tuition Fee Relief)',
    amountNumber: 500000,
    amountCategory: 'above-3l',
    coverage: ['Tuition Fee Assistance', 'Financial Literacy & Investment Workshops'],
    targetInstitutes: 'IIMs, XLRI, FMS Delhi, SPJIMR, NMIMS Mumbai, TAPMI Manipal, XIMB',
    eligibilitySummary: 'Full-time 1st or 2nd year MBA students with family income < ₹8 LPA and consistent academic performance (min 60%).',
    minGraduationMarks: 'Minimum 60% in Class 10, 12, and Graduation',
    minExamPercentile: 'CAT / XAT ≥ 80%ile',
    familyIncomeLimit: 'Gross Annual Family Income ≤ ₹8,00,000',
    incomeCategory: 'upto-8l',
    status: 'LIVE NOW',
    deadline: 'June 25, 2026',
    daysRemaining: 19,
    selectionProcess: [
      'Online submission of application form with academic scorecards',
      'Financial need scoring and income document scrutiny',
      'Virtual interview assessing career goals and moral integrity',
      'Final grant disbursement directly to college fee account'
    ],
    documentsRequired: [
      'Academic transcripts for 10th, 12th, and Undergrad',
      'Admission proof and current semester fee demand voucher',
      'Income certificate or parent Form 16 / ITR',
      'Statement of Purpose (Why MBA & Financial Need)'
    ],
    officialUrl: 'https://miraeassetfoundation.org',
    description: 'Promotes inclusive growth in financial management and business education. Grants up to ₹5 Lakhs per student to remove educational debt barriers for high-potential business aspirants.',
    faqs: [
      {
        q: 'Can 2nd year students apply for this grant?',
        a: 'Yes, both 1st year and 2nd year MBA/PGDM students from partnered institutes are eligible.'
      }
    ]
  },
  {
    id: 'women-in-business-leadership',
    slug: 'women-in-business-leadership',
    title: 'Women in Business Leadership MBA Scholarship',
    provider: 'Consortium of Top Autonomous B-Schools & Corporate Leaders',
    providerType: 'Diversity Endowment',
    category: 'women',
    badge: 'Women in Leadership',
    amount: '₹1,50,000 to ₹5,00,000 Fee Waiver',
    amountNumber: 500000,
    amountCategory: 'above-3l',
    coverage: ['Tuition Fee Concession', 'Executive CXO Mentorship', 'Direct Access to Women in Tech & Finance Circles'],
    targetInstitutes: 'GIM Goa, Great Lakes, TAPMI, BIMTECH Greater Noida, FORE New Delhi, SOIL Gurgaon, Jaipuria',
    eligibilitySummary: 'Female candidates with strong academic credentials and demonstrated leadership in college, sports, arts, or entrepreneurship.',
    minGraduationMarks: 'Minimum 65% in Bachelor’s Degree',
    minExamPercentile: 'CAT ≥ 70%ile / XAT ≥ 70%ile / CMAT ≥ 80%ile',
    familyIncomeLimit: 'No Income Cap (Merit & Gender Diversity)',
    incomeCategory: 'all',
    status: 'LIVE NOW',
    deadline: 'July 31, 2026',
    daysRemaining: 55,
    selectionProcess: [
      'Profile application highlighting leadership roles, startup ideas, or community service',
      'Statement of Purpose on "Future of Women Leaders in Indian Industry"',
      'Interview round with female business leaders & professors',
      'Waiver automatically discounted from semester tuition dues'
    ],
    documentsRequired: [
      'Graduation & High School Marksheets',
      'CAT / XAT / CMAT Scorecard',
      'Certificates of Extracurricular Achievements / Leadership Proof',
      '500-word SOP on Career Roadmap'
    ],
    officialUrl: 'https://findmybschool.com/scholarships',
    description: 'Designed to elevate gender diversity in boardroom decision-making. Top autonomous B-schools offer substantial fee waivers up to ₹5,00,000 to empower ambitious women pursuing management.',
    faqs: [
      {
        q: 'Is work experience required to apply?',
        a: 'No, both fresh graduates and working professionals who identify as female are eligible.'
      }
    ]
  },
  {
    id: 'spjimr-merit-cum-means',
    slug: 'spjimr-merit-cum-means',
    title: 'SPJIMR Merit-cum-Means Financial Support Scheme',
    provider: 'S.P. Jain Institute of Management and Research',
    providerType: 'Autonomous B-School Endowment',
    category: 'iim-top-bschool',
    badge: 'Up to 100% PGDM Waiver',
    amount: 'Up to 100% Tuition Fee Waiver (₹22,00,000)',
    amountNumber: 2200000,
    amountCategory: 'full',
    coverage: ['Full / Partial Tuition Fee Waiver', 'Campus Accommodation Subsidy'],
    targetInstitutes: 'SPJIMR Mumbai (PGDM & PGDM-BM)',
    eligibilitySummary: 'Participants who demonstrate financial hardship with family earnings under ₹10,00,000 and good academic standing.',
    minGraduationMarks: 'SPJIMR Admitted Participant',
    minExamPercentile: 'CAT / GMAT Qualified',
    familyIncomeLimit: 'Annual Household Income < ₹10,00,000',
    incomeCategory: 'upto-10l',
    status: 'LIVE NOW',
    deadline: 'June 20, 2026',
    daysRemaining: 14,
    selectionProcess: [
      'Apply to SPJIMR Financial Aid Committee upon receiving admission offer',
      'Financial evaluation of family assets, income statements, and liabilities',
      'Confidential interaction with the Financial Aid Board',
      'Allocation of waiver percentage prior to batch commencement'
    ],
    documentsRequired: [
      '3-Year ITR of all earning family members',
      'Bank statements and loan liability proofs',
      'SPJIMR Offer Acceptance Letter and Scorecards'
    ],
    officialUrl: 'https://www.spjimr.org',
    description: 'SPJIMR believes pedagogical diversity drives leadership. Their merit-cum-means assistance ensures financial circumstances do not impede candidates from pursuing their globally ranked PGDM.',
    faqs: [
      {
        q: 'Can this be combined with external corporate scholarships?',
        a: 'Yes, if the external scholarship does not cover 100% of the tuition, SPJIMR can cover the remaining differential.'
      }
    ]
  },
  {
    id: 'tata-trusts-pg-education-grant',
    slug: 'tata-trusts-pg-education-grant',
    title: 'Tata Trusts Postgraduate Education Grant',
    provider: 'Sir Ratan Tata & Sir Dorabji Tata Trusts',
    providerType: 'Philanthropic Trust',
    category: 'corporate',
    badge: 'Historic Philanthropic Aid',
    amount: '₹1,00,000 to ₹3,50,000 (Partial Fee Grant)',
    amountNumber: 350000,
    amountCategory: '1l-3l',
    coverage: ['Tuition Fee Reimbursement', 'Direct College Fee Cheque'],
    targetInstitutes: 'All Accredited Universities & Institutes across India',
    eligibilitySummary: 'Indian students studying full-time Master’s degrees in India with minimum 60% in Bachelor’s.',
    minGraduationMarks: 'Minimum 60% in Bachelor’s degree',
    minExamPercentile: 'Any National / State Entrance exam score',
    familyIncomeLimit: 'Family Income < ₹6,00,000 / annum given preference',
    incomeCategory: 'upto-6l',
    status: 'LIVE NOW',
    deadline: 'July 20, 2026',
    daysRemaining: 44,
    selectionProcess: [
      'Online application on Tata Trusts Scholarship Portal',
      'Verification of marksheets and household financial proof',
      'Shortlisted applicants called for personal interview in Mumbai or virtual mode',
      'Direct grant transfer toward university fee receipt'
    ],
    documentsRequired: [
      'Original Fee Receipts for current academic year',
      'Graduation Degree & 10th/12th Marksheets',
      'Income Certificate / Form 16 of earning members',
      'Statement of Purpose on career aspirations'
    ],
    officialUrl: 'https://www.tatatrusts.org',
    description: 'For over a century, Tata Trusts has supported higher education in India. The Postgraduate Education Grant eases the burden of tuition fees for hardworking students pursuing professional masters degrees.',
    faqs: [
      {
        q: 'Is there any minimum percentage cutoff in graduation?',
        a: 'Yes, minimum 60% aggregate marks in undergraduate studies are strictly required.'
      }
    ]
  },
  {
    id: 'bimtech-birla-merit-scholarship',
    slug: 'bimtech-birla-merit-scholarship',
    title: 'BIMTECH Dr. G.D. Birla Merit-cum-Means Scholarship',
    provider: 'Birla Institute of Management Technology (BIMTECH)',
    providerType: 'Autonomous B-School Endowment',
    category: 'merit',
    badge: '100% Tuition Waiver',
    amount: 'Up to 100% Tuition Fee Waiver (₹14,00,000)',
    amountNumber: 1400000,
    amountCategory: 'full',
    coverage: ['100% Tuition Fee Waiver', 'Hostel Subsidy for Top Scorers'],
    targetInstitutes: 'BIMTECH Greater Noida (PGDM, PGDM-IB, PGDM-RM)',
    eligibilitySummary: 'High achievers in CAT / XAT with scores ≥ 85 percentile and good graduation records.',
    minGraduationMarks: 'Minimum 65% in Undergrad',
    minExamPercentile: 'CAT / XAT ≥ 85%ile or GMAT ≥ 680',
    familyIncomeLimit: 'No Cap for Merit Slabs; < ₹6 LPA for Means Category',
    incomeCategory: 'all',
    status: 'LIVE NOW',
    deadline: 'June 25, 2026',
    daysRemaining: 19,
    selectionProcess: [
      'Auto-evaluation during BIMTECH PI & GD admissions rounds',
      'Scholarship offer letter issued alongside final admission letter',
      'Maintenance of minimum 7.0 CGPA throughout 2-year study for renewal'
    ],
    documentsRequired: [
      'CAT / XAT official scorecard',
      'Graduation marksheet',
      'Income certificate if applying under means-based category'
    ],
    officialUrl: 'https://www.bimtech.ac.in',
    description: 'Dr. G.D. Birla scholarship acknowledges academic excellence and rewards top scorers in national exams with tuition waivers ranging from 25% to 100% across the 2-year PGDM curriculum.',
    faqs: [
      {
        q: 'Does BIMTECH offer scholarships for female candidates?',
        a: 'Yes! BIMTECH also offers a special 5% to 10% additional tuition waiver for all female candidates to promote gender diversity on campus.'
      }
    ]
  },
  {
    id: 'post-matric-obc-ebc-scholarship',
    slug: 'post-matric-obc-ebc-scholarship',
    title: 'Central Post-Matric Scholarship for OBC & EBC Students',
    provider: 'Ministry of Social Justice & Empowerment & State Govts',
    providerType: 'Central & State Government',
    category: 'government',
    badge: 'Government Welfare',
    amount: '₹50,000 to ₹2,00,000 / year (State Norms)',
    amountNumber: 200000,
    amountCategory: '1l-3l',
    coverage: ['Tuition Fee Subsidy', 'Maintenance Allowance', 'Hostel Charges Subsidy'],
    targetInstitutes: 'All Recognized UGC/AICTE MBA & PGDM Colleges in India',
    eligibilitySummary: 'OBC and Economically Backward Class (EBC) students whose parents\' total annual income is below ₹2.5 Lakhs.',
    minGraduationMarks: 'Passing marks in Graduation',
    minExamPercentile: 'Admitted in recognized full-time MBA/PGDM',
    familyIncomeLimit: 'Annual Family Income strictly ≤ ₹2,50,000',
    incomeCategory: 'upto-3l',
    status: 'APPLICATIONS OPEN',
    deadline: 'November 15, 2026',
    daysRemaining: 162,
    selectionProcess: [
      'Registration on State Scholarship Portal (e.g., MahaDBT, UP Scholarship, NSP, SSP Karnataka)',
      'Aadhaar biometric authentication and bank seeding',
      'Institute scrutiny and district officer verification',
      'DBT disbursement into Aadhaar-linked savings account'
    ],
    documentsRequired: [
      'OBC / Non-Creamy Layer (NCL) Certificate',
      'Current Financial Year Income Certificate from Revenue Authority',
      'MBA Admission Fee Challan & Bonafide Certificate',
      '10th, 12th, and Degree Marksheets',
      'Aadhaar Card copy'
    ],
    officialUrl: 'https://scholarships.gov.in',
    description: 'Enables backward class students to attain post-graduate professional degrees without severe financial stress. Administered by state welfare departments under Central Government funding.',
    faqs: [
      {
        q: 'Can students pursuing PGDM in private colleges apply?',
        a: 'Yes, if the PGDM institution is approved by AICTE and recognized on the National/State Scholarship portal.'
      }
    ]
  },
  {
    id: 'great-lakes-diversity-merit-grant',
    slug: 'great-lakes-diversity-merit-grant',
    title: 'Great Lakes Diversity & Academic Excellence Waiver',
    provider: 'Great Lakes Institute of Management',
    providerType: 'Autonomous B-School Endowment',
    category: 'merit',
    badge: 'Merit & Diversity Waiver',
    amount: '₹1,00,000 to ₹5,00,000 Fee Waiver',
    amountNumber: 500000,
    amountCategory: 'above-3l',
    coverage: ['Tuition Fee Waiver', 'Special Corporate Project Nominations'],
    targetInstitutes: 'Great Lakes Chennai & Great Lakes Gurgaon (PGPM & PGDM)',
    eligibilitySummary: 'Candidates with high CAT/XAT/GMAT percentiles or unique non-engineering backgrounds (Humanities, Medical, Law, Sports).',
    minGraduationMarks: 'Minimum 65% in Graduation',
    minExamPercentile: 'CAT / XAT ≥ 85%ile or GMAT ≥ 650',
    familyIncomeLimit: 'No Income Cap',
    incomeCategory: 'all',
    status: 'LIVE NOW',
    deadline: 'June 15, 2026',
    daysRemaining: 9,
    selectionProcess: [
      'Automatic consideration during Great Lakes application evaluation',
      'Interview assessment on diversity, analytical thinking, and career clarity',
      'Scholarship grant confirmation in candidate admission portal'
    ],
    documentsRequired: [
      'CAT / XAT / GMAT Official Scorecard',
      'Undergraduate transcripts and degree certificate',
      'Proof of extracurricular / sports / non-engineering diversity credentials'
    ],
    officialUrl: 'https://www.greatlakes.edu.in',
    description: 'Promotes classroom intellectual diversity by rewarding exceptional non-engineering candidates, women achievers, and top percentile rankers with tuition waivers up to ₹5 Lakhs.',
    faqs: [
      {
        q: 'Do I need to submit a separate application form for Great Lakes scholarship?',
        a: 'No, all admitted candidates are evaluated automatically based on their composite profile score.'
      }
    ]
  }
];

export function getScholarshipById(id) {
  return SCHOLARSHIPS_DATA.find(s => s.id === id || s.slug === id);
}

export function getScholarshipsByCategory(category) {
  if (!category || category === 'all') return SCHOLARSHIPS_DATA;
  return SCHOLARSHIPS_DATA.filter(s => s.category === category);
}

export function getLiveScholarshipsCount() {
  return SCHOLARSHIPS_DATA.length;
}
