export const EXAMS_DATA = [
  {
    id: 'cat',
    name: 'CAT 2026',
    fullName: 'Common Admission Test',
    tagline: 'The Gateway to 21 IIMs, FMS, SPJIMR, MDI & Top B-Schools',
    conductingBody: 'IIMs (Rotational basis)',
    badgeColor: 'blue',
    examDate: 'Nov 29, 2026',
    registrationPeriod: 'Aug 2 – Sep 18, 2026',
    resultDate: 'First week of Jan 2027',
    applicationFee: '₹2,500 (General) / ₹1,250 (Reserved)',
    totalQuestions: 66,
    durationMinutes: 120,
    totalMarks: 198,
    mode: 'Computer Based Test (CBT)',
    negativeMarking: '+3 for Correct, -1 for Incorrect MCQ, 0 for Non-MCQ (TITA)',
    difficulty: 'Very High',
    attemptsPerYear: 1,
    overview: 'CAT is India\'s most prestigious and competitive MBA entrance examination. Conducted annually by the Indian Institutes of Management (IIMs), a 99+ percentile in CAT opens doors to IIM Ahmedabad, Bangalore, Calcutta, FMS Delhi, and top private management institutes.',
    sections: [
      {
        name: 'VARC (Verbal Ability & Reading Comprehension)',
        questions: 24,
        timeMinutes: 40,
        marks: 72,
        topics: ['Reading Comprehension (4 passages, 16 Qs)', 'Para Jumbles', 'Para Summary', 'Odd One Out / Sentence Placement']
      },
      {
        name: 'DILR (Data Interpretation & Logical Reasoning)',
        questions: 20,
        timeMinutes: 40,
        marks: 60,
        topics: ['Caselets & Tabular DI', 'Arrangements (Linear, Matrix)', 'Games & Tournaments', 'Networks & Scheduling', 'Venn Diagrams']
      },
      {
        name: 'QA (Quantitative Aptitude)',
        questions: 22,
        timeMinutes: 40,
        marks: 66,
        topics: ['Arithmetic (Percentages, Profit-Loss, Time-Speed-Distance)', 'Algebra (Equations, Inequalities, Logarithms)', 'Geometry & Mensuration', 'Modern Math (P&C, Probability)', 'Number Systems']
      }
    ],
    eligibility: [
      'Bachelor’s Degree with at least 50% marks or equivalent CGPA (45% for SC, ST, PwD).',
      'Final year undergraduate students are eligible to apply.',
      'No upper age limit for appearing in CAT.'
    ],
    topColleges: [
      { name: 'IIM Ahmedabad (PGP)', cutoff: '99.5+ %ile', avgSalary: '₹34.4 LPA', fees: '₹26.5 Lakhs' },
      { name: 'IIM Bangalore (PGP)', cutoff: '99.4+ %ile', avgSalary: '₹35.3 LPA', fees: '₹26.0 Lakhs' },
      { name: 'IIM Calcutta (MBA)', cutoff: '99.6+ %ile', avgSalary: '₹35.1 LPA', fees: '₹31.0 Lakhs' },
      { name: 'FMS Delhi (MBA)', cutoff: '99.0+ %ile', avgSalary: '₹34.1 LPA', fees: '₹2.3 Lakhs (Ultra High ROI)' },
      { name: 'SPJIMR Mumbai (PGDM)', cutoff: '85+ %ile (Profile-based) / 98+ %ile', avgSalary: '₹33.0 LPA', fees: '₹24.0 Lakhs' },
      { name: 'MDI Gurgaon (PGDM)', cutoff: '96.5+ %ile', avgSalary: '₹27.6 LPA', fees: '₹25.0 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99.9%ile', score: '95 - 105 / 198' },
      { percentile: '99.5%ile', score: '82 - 88 / 198' },
      { percentile: '99.0%ile', score: '74 - 78 / 198' },
      { percentile: '95.0%ile', score: '55 - 60 / 198' },
      { percentile: '90.0%ile', score: '45 - 50 / 198' },
      { percentile: '85.0%ile', score: '38 - 42 / 198' }
    ],
    prepTips: [
      'Master Reading Speed: Read 2-3 editorial articles daily from The Economist, Aeon, and Mint.',
      'DILR Set Selection is Key: Cracking 2.5 full sets accurately guarantees a 98+ percentile.',
      'Quant Arithmetic & Algebra: These two domains make up over 70% of the entire QA section.'
    ]
  },
  {
    id: 'xat',
    name: 'XAT 2027',
    fullName: 'Xavier Aptitude Test',
    tagline: 'The Gateway to XLRI Jamshedpur & 160+ Premium Partner Institutes',
    conductingBody: 'XLRI Jamshedpur',
    badgeColor: 'rose',
    examDate: 'Jan 3, 2027',
    registrationPeriod: 'Jul 15 – Nov 30, 2026',
    resultDate: 'Third week of Jan 2027',
    applicationFee: '₹2,200 (+ ₹200 per XLRI program)',
    totalQuestions: 95,
    durationMinutes: 210,
    totalMarks: 95,
    mode: 'Computer Based Test (CBT)',
    negativeMarking: '+1 for Correct, -0.25 for Incorrect, -0.10 for >8 unattempted',
    difficulty: 'High to Very High',
    attemptsPerYear: 1,
    overview: 'XAT is renowned for testing ethical reasoning and leadership temperament through its signature Decision Making section. It is the sole gateway to XLRI (India\'s top HR and BM program) alongside premier colleges like XIMB, IMT, TAPMI, and GIM.',
    sections: [
      {
        name: 'VALR (Verbal Ability & Logical Reasoning)',
        questions: 26,
        timeMinutes: 175, // Part 1 combined
        marks: 26,
        topics: ['Poem Comprehension', 'Critical Reasoning', 'Fill in the blanks / Vocabulary', 'Analogies', 'Reading Comprehension']
      },
      {
        name: 'DM (Decision Making)',
        questions: 22,
        timeMinutes: 175,
        marks: 22,
        topics: ['Ethical Dilemmas', 'Business Strategy Cases', 'Managerial Decision Cases', 'Multi-stakeholder Tradeoffs']
      },
      {
        name: 'QADI (Quantitative Ability & Data Interpretation)',
        questions: 28,
        timeMinutes: 175,
        marks: 28,
        topics: ['Data Interpretation & Sufficiency', 'Higher Math & Functions', 'Geometry & Trigonometry', 'Arithmetic']
      },
      {
        name: 'GK & Analytical Essay Writing',
        questions: 20,
        timeMinutes: 30,
        marks: 20,
        topics: ['Current Affairs & Business Awareness', 'Static GK', 'Persuasive Essay (250 words)']
      }
    ],
    eligibility: [
      'Recognized Bachelor’s degree of minimum 3 years duration in any discipline.',
      'Students in final year graduating by June 2027.',
      'No minimum graduation percentage restriction.'
    ],
    topColleges: [
      { name: 'XLRI Jamshedpur (BM / HRM)', cutoff: '96+ %ile (BM) / 94+ %ile (HRM)', avgSalary: '₹32.7 LPA', fees: '₹28.0 Lakhs' },
      { name: 'XLRI Delhi-NCR (BM)', cutoff: '93+ %ile', avgSalary: '₹29.8 LPA', fees: '₹28.0 Lakhs' },
      { name: 'XIM University Bhubaneswar (BM)', cutoff: '91+ %ile', avgSalary: '₹20.0 LPA', fees: '₹21.0 Lakhs' },
      { name: 'IMT Ghaziabad (PGDM)', cutoff: '90+ %ile', avgSalary: '₹17.3 LPA', fees: '₹21.5 Lakhs' },
      { name: 'GIM Goa (PGDM)', cutoff: '85+ %ile', avgSalary: '₹15.2 LPA', fees: '₹19.5 Lakhs' },
      { name: 'TAPMI Manipal (MBA)', cutoff: '85+ %ile', avgSalary: '₹14.8 LPA', fees: '₹18.0 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99.0%ile', score: '42 - 45 / 76 (Part 1)' },
      { percentile: '96.0%ile', score: '36 - 39 / 76' },
      { percentile: '93.0%ile', score: '33 - 35 / 76' },
      { percentile: '90.0%ile', score: '30 - 32 / 76' },
      { percentile: '85.0%ile', score: '27 - 29 / 76' }
    ],
    prepTips: [
      'Master Decision Making using past 10 years XAT papers — solve without looking at answer keys first.',
      'Mind the Unattempted Penalty: Leaving more than 8 questions costs -0.10 marks each.',
      'Verbal section features heavy critical reasoning and poetic excerpts; focus on tone and nuances.'
    ]
  },
  {
    id: 'nmat',
    name: 'NMAT 2026',
    fullName: 'NMAT by GMAC',
    tagline: 'Candidate-Friendly Exam with 3 Attempts for NMIMS Mumbai & Global Schools',
    conductingBody: 'Graduate Management Admission Council (GMAC)',
    badgeColor: 'amber',
    examDate: 'Oct 10 – Dec 19, 2026',
    registrationPeriod: 'Aug 1 – Oct 10, 2026',
    resultDate: 'Scaled score given within 48 hours',
    applicationFee: '₹3,000 (+ taxes) per attempt',
    totalQuestions: 108,
    durationMinutes: 120,
    totalMarks: 360,
    mode: 'CBT at Test Center or Online Proctored',
    negativeMarking: 'Zero Negative Marking! (+1 to +3 scaled per correct)',
    difficulty: 'Moderate',
    attemptsPerYear: 3,
    overview: 'NMAT by GMAC is India\'s most aspirant-friendly management test. It features adaptive question delivery, section-order customization, zero negative marking, and allows up to 3 attempts with a 15-day cooling period.',
    sections: [
      {
        name: 'Language Skills',
        questions: 36,
        timeMinutes: 28,
        marks: 120,
        topics: ['Reading Comprehension', 'Para Forming', 'Error Identification', 'Prepositions & Syntax', 'Analogies']
      },
      {
        name: 'Quantitative Skills',
        questions: 36,
        timeMinutes: 52,
        marks: 120,
        topics: ['Arithmetic', 'Algebra & Probability', 'Tables, Bar Graphs & Pie Charts', 'Data Sufficiency']
      },
      {
        name: 'Logical Reasoning',
        questions: 36,
        timeMinutes: 40,
        marks: 120,
        topics: ['Critical Reasoning (Statement-Assumption, Inference)', 'Analytical Puzzles', 'Coding-Decoding', 'Blood Relations']
      }
    ],
    eligibility: [
      'Bachelor’s degree (10+2+3/4) with minimum 50% aggregate marks.',
      'Final year students eligible.',
      'Only the FIRST attempt is considered by NMIMS Mumbai core campus.'
    ],
    topColleges: [
      { name: 'NMIMS Mumbai (MBA Core)', cutoff: '235+ Score', avgSalary: '₹26.6 LPA', fees: '₹24.0 Lakhs' },
      { name: 'NMIMS Mumbai (MBA HR)', cutoff: '228+ Score', avgSalary: '₹19.5 LPA', fees: '₹23.0 Lakhs' },
      { name: 'NMIMS Bangalore / Hyderabad', cutoff: '215+ Score', avgSalary: '₹14.0 LPA', fees: '₹20.0 Lakhs' },
      { name: 'K J Somaiya Mumbai', cutoff: '225+ Score', avgSalary: '₹13.5 LPA', fees: '₹20.5 Lakhs' },
      { name: 'XIM University Bhubaneswar (HRM)', cutoff: '220+ Score', avgSalary: '₹16.5 LPA', fees: '₹21.0 Lakhs' },
      { name: 'SDA Bocconi Asia Center', cutoff: '200+ Score', avgSalary: '₹15.0 LPA', fees: '₹21.0 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99%ile', score: '250+ / 360' },
      { percentile: '95%ile', score: '235 - 245 / 360' },
      { percentile: '90%ile', score: '220 - 232 / 360' },
      { percentile: '85%ile', score: '205 - 215 / 360' }
    ],
    prepTips: [
      'Speed and Time Allocation: With 108 questions in 120 minutes, you have roughly 66 seconds per question.',
      'Never leave an answer blank since there is zero negative marking.',
      'Strengthen Critical Reasoning; it carries substantial weight in Logical Reasoning.'
    ]
  },
  {
    id: 'snap',
    name: 'SNAP 2026',
    fullName: 'Symbiosis National Aptitude Test',
    tagline: 'Fast-Paced 60-Minute Speed Test for 16 Symbiosis B-Schools',
    conductingBody: 'Symbiosis International (Deemed University) Pune',
    badgeColor: 'emerald',
    examDate: 'Dec 6, 13 & 20, 2026 (3 slots)',
    registrationPeriod: 'Aug 5 – Nov 22, 2026',
    resultDate: 'Second week of Jan 2027',
    applicationFee: '₹2,250 per test (+ ₹1,000 per Symbiosis institute)',
    totalQuestions: 60,
    durationMinutes: 60,
    totalMarks: 60,
    mode: 'CBT at Test Center',
    negativeMarking: '+1 for Correct, -0.25 for Incorrect',
    difficulty: 'Moderate (High Speed Required)',
    attemptsPerYear: 3,
    overview: 'SNAP is India’s quickest MBA exam: 60 questions in 60 minutes. Candidates can attempt up to 3 times, with the best score considered. It is the exclusive entrance test for SIBM Pune, SCMHRD, and 14 other prestigious Symbiosis institutes.',
    sections: [
      {
        name: 'General English (Reading & Verbal)',
        questions: 15,
        timeMinutes: 15,
        marks: 15,
        topics: ['Idioms & Proverbs', 'Parts of Speech', 'Fillers & Cloze Test', 'Prefix-Suffix & Vocabulary', 'No RC passages in recent years!']
      },
      {
        name: 'Analytical & Logical Reasoning',
        questions: 25,
        timeMinutes: 25,
        marks: 25,
        topics: ['Linear & Circular Arrangements', 'Clocks & Calendars', 'Number Series', 'Coding Decoding', 'Direction Sense', 'Input-Output']
      },
      {
        name: 'Quantitative, Data Interpretation & Data Sufficiency',
        questions: 20,
        timeMinutes: 20,
        marks: 20,
        topics: ['Arithmetic', 'Geometry & Mensuration', 'Modern Math (P&C, Probability)', 'Algebra', 'Charts & Tables']
      }
    ],
    eligibility: [
      'Graduate from any recognized University with minimum 50% marks (45% for SC/ST).',
      'Final year bachelor students eligible.',
      'Best score among all 3 attempts is selected.'
    ],
    topColleges: [
      { name: 'SIBM Pune (MBA Core)', cutoff: '98.5+ %ile', avgSalary: '₹28.1 LPA', fees: '₹27.0 Lakhs' },
      { name: 'SCMHRD Pune (MBA Core / BA / IDM)', cutoff: '97.0+ %ile', avgSalary: '₹23.7 LPA', fees: '₹26.0 Lakhs' },
      { name: 'SIIB Pune (International Business)', cutoff: '93.0+ %ile', avgSalary: '₹14.5 LPA', fees: '₹19.5 Lakhs' },
      { name: 'SIBM Bangalore', cutoff: '90.0+ %ile', avgSalary: '₹13.5 LPA', fees: '₹20.0 Lakhs' },
      { name: 'SIOM Nashik (Operations)', cutoff: '87.0+ %ile', avgSalary: '₹14.3 LPA', fees: '₹17.0 Lakhs' },
      { name: 'SICSR Pune (IT & Digital)', cutoff: '82.0+ %ile', avgSalary: '₹10.5 LPA', fees: '₹12.0 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99.5%ile', score: '44 - 46 / 60' },
      { percentile: '98.0%ile', score: '40 - 42 / 60' },
      { percentile: '95.0%ile', score: '37 - 39 / 60' },
      { percentile: '90.0%ile', score: '33 - 35 / 60' }
    ],
    prepTips: [
      'Pure Speed Strategy: 1 question per minute means skipping tough questions in under 15 seconds.',
      'Heavy focus on Clocks, Calendars, and Grammar rules which are standard SNAP favorites.',
      'Take at least 15 timed SNAP mocks to adjust your internal clock.'
    ]
  },
  {
    id: 'cmat',
    name: 'CMAT 2026',
    fullName: 'Common Management Admission Test',
    tagline: 'National Level Test Accepted by 1000+ AICTE Approved Institutes',
    conductingBody: 'National Testing Agency (NTA)',
    badgeColor: 'purple',
    examDate: 'May 15, 2026',
    registrationPeriod: 'Feb 15 – Apr 18, 2026',
    resultDate: 'First week of June 2026',
    applicationFee: '₹2,000 (Male Gen) / ₹1,000 (Female / Reserved)',
    totalQuestions: 100,
    durationMinutes: 180,
    totalMarks: 400,
    mode: 'CBT (Computer Based Test)',
    negativeMarking: '+4 for Correct, -1 for Incorrect',
    difficulty: 'Moderate',
    attemptsPerYear: 1,
    overview: 'CMAT is conducted by NTA for admission to all AICTE approved management programs across India. With 3 full hours for 100 questions, it is one of the least time-pressured exams, rewarding high accuracy and strong general awareness.',
    sections: [
      {
        name: 'Quantitative Techniques & Data Interpretation',
        questions: 20,
        timeMinutes: 36,
        marks: 80,
        topics: ['Arithmetic', 'Geometry', 'Algebra', 'Bar & Line Charts', 'Probability']
      },
      {
        name: 'Logical Reasoning',
        questions: 20,
        timeMinutes: 36,
        marks: 80,
        topics: ['Analytical Reasoning', 'Linear / Circular Seating', 'Blood Relations', 'Syllogisms']
      },
      {
        name: 'Language Comprehension',
        questions: 20,
        timeMinutes: 36,
        marks: 80,
        topics: ['RC Passages', 'Synonyms & Antonyms', 'Sentence Correction', 'Idioms']
      },
      {
        name: 'General Awareness',
        questions: 20,
        timeMinutes: 36,
        marks: 80,
        topics: ['Current Business & Economy', 'Awards & Honors', 'National & International Affairs', 'Static GK']
      },
      {
        name: 'Innovation & Entrepreneurship',
        questions: 20,
        timeMinutes: 36,
        marks: 80,
        topics: ['Startup Ecosystem & Terminology', 'Venture Capital & Funding', 'Government Schemes (Startup India)', 'Business Ethics']
      }
    ],
    eligibility: [
      'Graduates in any discipline with minimum 50% marks (45% for reserved category).',
      'Final year appearing students eligible.',
      'No age bar.'
    ],
    topColleges: [
      { name: 'JBIMS Mumbai (MMS)', cutoff: '99.9+ %ile (All India)', avgSalary: '₹28.0 LPA', fees: '₹6.1 Lakhs (Top ROI)' },
      { name: 'SIMSREE Mumbai (MMS)', cutoff: '99.8+ %ile', avgSalary: '₹15.3 LPA', fees: '₹1.4 Lakhs (Highest ROI in India)' },
      { name: 'GIM Goa (PGDM)', cutoff: '98.5+ %ile', avgSalary: '₹15.2 LPA', fees: '₹19.5 Lakhs' },
      { name: 'Great Lakes Chennai (PGDM)', cutoff: '95.0+ %ile', avgSalary: '₹15.1 LPA', fees: '₹19.8 Lakhs' },
      { name: 'K J Somaiya Mumbai (MBA)', cutoff: '98.0+ %ile', avgSalary: '₹13.5 LPA', fees: '₹20.5 Lakhs' },
      { name: 'Welingkar Mumbai (WeSchool)', cutoff: '85.0+ %ile', avgSalary: '₹12.5 LPA', fees: '₹14.0 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99.9%ile', score: '345 - 360 / 400' },
      { percentile: '99.0%ile', score: '315 - 330 / 400' },
      { percentile: '95.0%ile', score: '280 - 295 / 400' },
      { percentile: '90.0%ile', score: '250 - 265 / 400' }
    ],
    prepTips: [
      'Innovation & Entrepreneurship section is high scoring; learn venture capital terms, unicorn startups, and incubators.',
      'High accuracy wins CMAT: Because of ample time (180 mins), cutoffs for top colleges hover around 320+ marks.',
      'Revise daily Current Affairs of the past 6 months before exam day.'
    ]
  },
  {
    id: 'mat',
    name: 'MAT 2026',
    fullName: 'Management Aptitude Test',
    tagline: 'Conducted 4 Times a Year in PBT, CBT & IBT Modes by AIMA',
    conductingBody: 'All India Management Association (AIMA)',
    badgeColor: 'teal',
    examDate: 'Quarterly: Feb, May, Sep, Dec 2026',
    registrationPeriod: 'Rolling throughout the year',
    resultDate: 'Within 3 weeks of exam',
    applicationFee: '₹2,100 per mode (₹3,300 for dual mode)',
    totalQuestions: 150,
    durationMinutes: 120,
    totalMarks: 150,
    mode: 'PBT (Paper Based), CBT (Computer Based) & IBT (Remote Proctored)',
    negativeMarking: '+1 for Correct, -0.25 for Incorrect',
    difficulty: 'Easy to Moderate',
    attemptsPerYear: 4,
    overview: 'MAT is India’s most flexible MBA entrance examination, organized quarterly in February, May, September, and December. It is accepted by over 600+ business schools across India, making it an excellent fallback and tier-2 gateway.',
    sections: [
      {
        name: 'Language Comprehension',
        questions: 30,
        timeMinutes: 25,
        marks: 30,
        topics: ['Reading Comprehension', 'Sentence Correction', 'Synonyms-Antonyms', 'Idioms']
      },
      {
        name: 'Intelligence & Critical Reasoning',
        questions: 30,
        timeMinutes: 25,
        marks: 30,
        topics: ['Family Trees', 'Cause and Effect', 'Sequencing', 'Direction Sense', 'Puzzles']
      },
      {
        name: 'Mathematical Skills',
        questions: 30,
        timeMinutes: 30,
        marks: 30,
        topics: ['Arithmetic', 'Number Systems', 'Percentages & Ratio', 'Commercial Math']
      },
      {
        name: 'Data Analysis & Sufficiency',
        questions: 30,
        timeMinutes: 25,
        marks: 30,
        topics: ['Data Interpretation Charts', 'Tables', 'Data Sufficiency']
      },
      {
        name: 'Indian & Global Environment (Not counted in Composite Score)',
        questions: 30,
        timeMinutes: 15,
        marks: 30,
        topics: ['Current Affairs', 'Business News', 'Static GK (Score reported separately)']
      }
    ],
    eligibility: [
      'Graduates in any discipline from a recognized University.',
      'Final year degree students can apply.',
      'No minimum percentage required to appear.'
    ],
    topColleges: [
      { name: 'BIMTECH Greater Noida', cutoff: '85+ %ile (Composite 650+)', avgSalary: '₹11.2 LPA', fees: '₹14.0 Lakhs' },
      { name: 'XIME Bangalore', cutoff: '80+ %ile (Composite 600+)', avgSalary: '₹10.5 LPA', fees: '₹12.0 Lakhs' },
      { name: 'Balaji Institute of Modern Management (BIMM Pune)', cutoff: '75+ %ile', avgSalary: '₹10.2 LPA', fees: '₹11.0 Lakhs' },
      { name: 'Christ University Bengaluru', cutoff: '75+ %ile', avgSalary: '₹9.5 LPA', fees: '₹9.0 Lakhs' },
      { name: 'Amity Business School Noida', cutoff: '70+ %ile', avgSalary: '₹8.5 LPA', fees: '₹15.0 Lakhs' },
      { name: 'Alliance University Bangalore', cutoff: '70+ %ile', avgSalary: '₹8.8 LPA', fees: '₹15.0 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99%ile', score: 'Composite Score 750+' },
      { percentile: '95%ile', score: 'Composite Score 680 - 720' },
      { percentile: '90%ile', score: 'Composite Score 620 - 660' },
      { percentile: '80%ile', score: 'Composite Score 550 - 600' }
    ],
    prepTips: [
      'Note that section 5 (Indian & Global Environment) is NOT included in your composite scaled score out of 800.',
      'Focus intensely on Speed in Arithmetic and Reasoning; questions are straightforward compared to CAT.',
      'You can send your score report for free to up to 5 participating institutions.'
    ]
  },
  {
    id: 'mhcet',
    name: 'MAH MBA CET 2026',
    fullName: 'Maharashtra MBA Common Entrance Test',
    tagline: 'Direct Route to JBIMS, SIMSREE & Top Maharashtra MMS Colleges',
    conductingBody: 'State Common Entrance Test Cell, Maharashtra',
    badgeColor: 'orange',
    examDate: 'March 14 & 15, 2026',
    registrationPeriod: 'Jan 10 – Feb 20, 2026',
    resultDate: 'Mid April 2026',
    applicationFee: '₹1,200 (Open) / ₹1,000 (Reserved)',
    totalQuestions: 200,
    durationMinutes: 150,
    totalMarks: 200,
    mode: 'Computer Based Test (CBT)',
    negativeMarking: 'NO Negative Marking! (+1 for Correct, 0 for Incorrect)',
    difficulty: 'Moderate (Extreme Speed Test)',
    attemptsPerYear: 1,
    overview: 'MAH MBA CET is the coveted state entrance test for 330+ MBA/MMS colleges in Maharashtra, headlined by the "CEO Factory" JBIMS Mumbai and SIMSREE. With 200 questions in 150 minutes and zero negative marking, it is an electrifying test of speed and mental agility.',
    sections: [
      {
        name: 'Logical Reasoning',
        questions: 75,
        timeMinutes: 55,
        marks: 75,
        topics: ['Heavy Puzzles & Matrix', 'Input-Output Machines', 'Blood Relations', 'Syllogisms', 'Coding-Decoding']
      },
      {
        name: 'Abstract Reasoning (Visual Reasoning)',
        questions: 25,
        timeMinutes: 20,
        marks: 25,
        topics: ['Analogies of Shapes', 'Next in Series', 'Paper Folding', 'Mirror & Water Images']
      },
      {
        name: 'Quantitative Aptitude',
        questions: 50,
        timeMinutes: 40,
        marks: 50,
        topics: ['Data Interpretation (Tables & Graphs)', 'Arithmetic', 'Approximations & Number Series', 'Geometry']
      },
      {
        name: 'Verbal Ability & Reading Comprehension',
        questions: 50,
        timeMinutes: 35,
        marks: 50,
        topics: ['RC Passages', 'Cloze Test', 'Grammar Correction', 'Para Jumbles', 'Vocabulary']
      }
    ],
    eligibility: [
      'Bachelor’s degree with minimum 50% marks (45% for Maharashtra reserved candidates).',
      'Both Maharashtra State (MS) and All India (OMS) candidates can appear.',
      'All India seats are allotted via CET, CAT, and CMAT scores through CAP rounds.'
    ],
    topColleges: [
      { name: 'JBIMS Mumbai (MMS)', cutoff: '99.99 %ile (OMS) / 99.90 %ile (MS)', avgSalary: '₹28.0 LPA', fees: '₹6.1 Lakhs' },
      { name: 'SIMSREE Mumbai (MMS)', cutoff: '99.95 %ile (OMS) / 99.70 %ile (MS)', avgSalary: '₹15.3 LPA', fees: '₹1.4 Lakhs' },
      { name: 'PUMBA Pune (MBA)', cutoff: '99.40 %ile (OMS) / 98.60 %ile (MS)', avgSalary: '₹9.5 LPA', fees: '₹1.3 Lakhs' },
      { name: 'Welingkar Mumbai (MMS)', cutoff: '99.70 %ile (OMS) / 99.20 %ile (MS)', avgSalary: '₹12.5 LPA', fees: '₹7.0 Lakhs' },
      { name: 'SIES Navi Mumbai (MMS)', cutoff: '99.00 %ile (OMS) / 98.00 %ile (MS)', avgSalary: '₹10.0 LPA', fees: '₹6.5 Lakhs' },
      { name: 'Chetana’s Mumbai (MMS)', cutoff: '98.50 %ile (OMS) / 97.20 %ile (MS)', avgSalary: '₹9.0 LPA', fees: '₹5.5 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99.99%ile (JBIMS OMS)', score: '145 - 152 / 200' },
      { percentile: '99.90%ile (JBIMS MS)', score: '138 - 142 / 200' },
      { percentile: '99.00%ile', score: '122 - 128 / 200' },
      { percentile: '95.00%ile', score: '108 - 114 / 200' },
      { percentile: '90.00%ile', score: '96 - 102 / 200' }
    ],
    prepTips: [
      'Visual / Abstract Reasoning: 25 free marks if practiced thoroughly. Focus on pattern rotation and clockwise-anticlockwise shifts.',
      'Puzzles dominate Logical Reasoning (approx 35-40 Qs). Practice high-level 7-person 3-variable arrangements.',
      'Since there is zero negative marking, make sure you mark ALL 200 questions before the timer runs out.'
    ]
  },
  {
    id: 'cuetpg',
    name: 'CUET PG 2026',
    fullName: 'Common University Entrance Test PG (COQP12 - MBA)',
    tagline: 'Single Gateway to Central & State Universities (TISS, DAVV, BHU, JNU)',
    conductingBody: 'National Testing Agency (NTA)',
    badgeColor: 'cyan',
    examDate: 'March 18 – 28, 2026',
    registrationPeriod: 'Dec 25, 2025 – Feb 10, 2026',
    resultDate: 'Mid April 2026',
    applicationFee: '₹1,200 (General) / ₹1,000 (OBC/EWS) / ₹900 (SC/ST)',
    totalQuestions: 75,
    durationMinutes: 105,
    totalMarks: 300,
    mode: 'CBT (Computer Based Test)',
    negativeMarking: '+4 for Correct, -1 for Incorrect',
    difficulty: 'Moderate',
    attemptsPerYear: 1,
    overview: 'CUET PG (Test Code: COQP12 for General MBA) has emerged as one of India\'s largest national post-graduate examinations. It is now the mandatory admission test for prestigious institutes like TISS Mumbai (HRM & LR), Delhi University (FMS MBA is via CAT, but DFS/DBE uses CAT while other DU PG MBA programs accept CUET), BHU FMS, and DAVV Indore.',
    sections: [
      {
        name: 'Language Comprehension (English or Hindi)',
        questions: 15,
        timeMinutes: 20,
        marks: 60,
        topics: ['Reading Comprehension', 'Sentence Correction', 'Synonyms-Antonyms', 'Idioms & Phrases']
      },
      {
        name: 'Maths / Quantitative Ability',
        questions: 20,
        timeMinutes: 30,
        marks: 80,
        topics: ['Arithmetic', 'Time & Work', 'Percentages', 'Profit & Loss', 'Ratios', 'Basic Algebra']
      },
      {
        name: 'Logical Reasoning',
        questions: 20,
        timeMinutes: 30,
        marks: 80,
        topics: ['Ranking', 'Blood Relations', 'Syllogism', 'Analogy', 'Venn Diagrams']
      },
      {
        name: 'Data Interpretation & Computer Basics',
        questions: 20,
        timeMinutes: 25,
        marks: 80,
        topics: ['Tables & Charts', 'Computer Hardware, Software, Networking & Fundamentals']
      }
    ],
    eligibility: [
      'Bachelor’s Degree in any stream with minimum 50% marks (45% for SC/ST/PwD).',
      'No upper age limit for CUET PG.',
      'Students in the final year of graduation are eligible.'
    ],
    topColleges: [
      { name: 'TISS Mumbai (MA in HRM & LR - Equivalent to MBA)', cutoff: '275+ / 300', avgSalary: '₹27.2 LPA', fees: '₹2.8 Lakhs (World-Class ROI)' },
      { name: 'TISS Mumbai (Organization Development & Change)', cutoff: '260+ / 300', avgSalary: '₹23.0 LPA', fees: '₹2.8 Lakhs' },
      { name: 'BHU FMS Varanasi (MBA)', cutoff: '240+ / 300', avgSalary: '₹11.5 LPA', fees: '₹1.0 Lakh' },
      { name: 'DAVV IMS Indore (MBA Core)', cutoff: '230+ / 300', avgSalary: '₹9.0 LPA', fees: '₹1.2 Lakhs' },
      { name: 'Central University of Hyderabad (MBA)', cutoff: '235+ / 300', avgSalary: '₹9.5 LPA', fees: '₹1.5 Lakhs' },
      { name: 'Babasaheb Bhimrao Ambedkar University (BBAU)', cutoff: '200+ / 300', avgSalary: '₹7.5 LPA', fees: '₹1.1 Lakhs' }
    ],
    scoreVsPercentile: [
      { percentile: '99.5%ile (TISS Call)', score: '270 - 285 / 300' },
      { percentile: '98.0%ile', score: '250 - 265 / 300' },
      { percentile: '95.0%ile', score: '230 - 245 / 300' },
      { percentile: '90.0%ile', score: '205 - 225 / 300' }
    ],
    prepTips: [
      'TISS now accepts CUET PG COQP12 score for its flagship MA HRM&LR program instead of TISSNET.',
      'Pay special attention to Computer Basics and Fundamentals (MS Office, Operating Systems, Networking), which can fetch 20-30 direct marks.',
      'Accuracy is critical as 75 questions in 105 minutes allows sufficient time for checking.'
    ]
  }
];
