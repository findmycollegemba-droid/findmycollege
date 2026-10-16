/**
 * Official Pattern Free Mock Tests Data
 * Covers CAT 2026, XAT 2027, NMAT, SNAP, CMAT, and MAT
 * 
 * NOTE: When the user provides the Question & Answer PDF, the questions
 * can be plugged directly into the respective exam sections below or loaded dynamically.
 */

import { CAT_68_QUESTIONS_SECTIONS } from './catMock68Data.js';
import { NMAT_108_QUESTIONS_SECTIONS } from './nmatMock108Data.js';

export const MOCK_TESTS = [
  {
    id: 'cat-2026',
    slug: 'cat-2026',
    title: 'CAT 2026 Comprehensive Official Mock Test (68 Questions)',
    shortTitle: 'CAT 2026',
    badge: 'IIMs & FMS Official Pattern',
    tagline: 'Complete Practice Test: VARC (24) | DILR (22) | QA (22) with TCS iON CBT Interface',
    fullDurationMinutes: 120,
    quickDurationMinutes: 30, // For quick test mode
    totalQuestions: 68,
    totalMarks: 204,
    markingScheme: {
      correct: 3,
      incorrect: -1,
      unattempted: 0,
      description: '+3 for correct, -1 for wrong MCQ, 0 for TITA wrong'
    },
    sections: CAT_68_QUESTIONS_SECTIONS
  },
  {
    id: 'xat-2027',
    slug: 'xat-2027',
    title: 'XAT 2027 Official Pattern All-India Free Mock Test',
    shortTitle: 'XAT 2027',
    badge: 'XLRI Jamshedpur & Top Associates',
    tagline: 'Authentic Decision Making (DM), VALR, and Quantitative Ability with Negative Marking',
    fullDurationMinutes: 180,
    quickDurationMinutes: 30,
    totalQuestions: 21,
    totalMarks: 21,
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: -0.10,
      description: '+1 mark for correct, -0.25 for incorrect, -0.10 per question for unattempted beyond 8 questions'
    },
    sections: [
      {
        id: 'valr',
        name: 'VALR',
        fullName: 'Verbal Ability & Logical Reasoning',
        durationMinutes: 60,
        questions: [
          {
            id: 'xat-q1',
            sectionId: 'valr',
            type: 'mcq',
            text: 'Read the poem excerpt and answer the question:\n\n"Between the desire and the spasm,\nBetween the potency and the existence,\nBetween the essence and the descent\nFalls the Shadow."\n\nThe phrase "Falls the Shadow" most symbolically captures:',
            options: [
              { id: 'A', text: 'The inevitable triumph of physical darkness over human enlightenment.' },
              { id: 'B', text: 'The paralyzing chasm between human aspiration and its actualization.' },
              { id: 'C', text: 'The natural cosmic boundary between mortality and divine existence.' },
              { id: 'D', text: 'The psychological relief experienced when leaving an unresolved conflict.' }
            ],
            correctOption: 'B',
            explanation: 'The excerpt from T.S. Eliot\'s "The Hollow Men" contrasts intentionality/desire/potency with execution/existence/descent. The Shadow represents the debilitating barrier or hesitation that prevents ideal thought from transforming into completed action. Hence Option B.',
            topic: 'Poem & Literary Comprehension',
            difficulty: 'Hard'
          },
          {
            id: 'xat-q2',
            sectionId: 'valr',
            type: 'mcq',
            text: 'Choose the option that logically completes the following philosophical argument:\n\n"If moral values were entirely subjective products of cultural consensus, then moral disagreement between cultures would be meaningless, as neither culture could appeal to an external standard. However, we consistently argue that historical atrocities such as slavery were objectively abhorrent, not merely culturally unfashionable. Therefore, ____________."',
            options: [
              { id: 'A', text: 'cultural consensus is the ultimate metric of ethical validity.' },
              { id: 'B', text: 'moral discourse is fundamentally an illusion engineered for social order.' },
              { id: 'C', text: 'our moral convictions presuppose the reality of objective ethical standards.' },
              { id: 'D', text: 'historical slavery was justified under its contemporary consensus.' }
            ],
            correctOption: 'C',
            explanation: 'The argument sets up a modus tollens structure: If subjective -> moral disagreement is meaningless. But our practice proves we treat moral judgments as objectively binding. Thus, moral convictions presuppose objective ethical truths (Option C).',
            topic: 'Critical Reasoning',
            difficulty: 'Moderate'
          }
        ]
      },
      {
        id: 'dm',
        name: 'Decision Making',
        fullName: 'Decision Making & Business Ethics',
        durationMinutes: 60,
        questions: [
          {
            id: 'xat-q3',
            sectionId: 'dm',
            type: 'mcq',
            passage: `You are the Plant Manager at Zenith Pharmaceuticals. Your facility produces an essential pediatric asthma syrup. During a routine internal audit, a senior chemical technician discovers that a recently commissioned digital filtration unit had a microscopic calibration variance over the past 14 days. \n\nLaboratory tests reveal that the active therapeutic efficacy of the syrup is 96.5% rather than the statutory 98.0%, but it is completely non-toxic and causes zero adverse health effects. Recalling the 45,000 distributed bottles would cause immediate nationwide shortages in rural clinics and incur a financial loss of ₹6.2 Crores, jeopardizing the plant's annual performance bonus for 600 blue-collar workers.`,
            text: 'As Plant Manager, which course of action represents the most ethically sound and professionally defensible decision?',
            options: [
              { id: 'A', text: 'Immediately conceal the audit findings, as the batch is non-toxic and saving blue-collar bonuses is a paramount humanitarian responsibility.' },
              { id: 'B', text: 'Disclose the audit findings immediately to the Drug Controller Authority, request an expedited emergency review for the batch, and initiate a phased quarantine protocol.' },
              { id: 'C', text: 'Quietly compensate rural clinics with free future batches while allowing the current inventory to be consumed naturally.' },
              { id: 'D', text: 'Blame the external supplier of the filtration unit to deflect corporate liability from your local plant employees.' }
            ],
            correctOption: 'B',
            explanation: 'In XLRI Decision Making, transparency, statutory compliance, and public health ethics supersede short-term financial considerations or bonus preservation. Concealment (A/C) violates pharma regulations and medical ethics. Blaming others (D) lacks leadership accountability. Option B is transparent, consults the regulatory authority, and balances safety with emergency supply realities.',
            topic: 'Ethical Dilemma',
            difficulty: 'Hard'
          },
          {
            id: 'xat-q4',
            sectionId: 'dm',
            type: 'mcq',
            passage: `Nova FinServe, a tier-2 microfinance firm, has seen loan default rates rise by 18% among rural self-help groups. Field agents report that a competing regional lender is offering aggressive cash-back incentives that lure borrowers away into unserviceable debt. The Nova sales head proposes matching the competitor's high-risk cash-backs immediately.`,
            text: 'Which of the following actions by Nova\'s leadership would be the most sustainable strategic response?',
            options: [
              { id: 'A', text: 'Match the competitor\'s cash-back incentives dollar-for-dollar to prevent immediate loss of market share.' },
              { id: 'B', text: 'File a defamation lawsuit against the rival firm while refusing loans to all existing self-help groups.' },
              { id: 'C', text: 'Conduct borrower financial literacy workshops, restructure existing loan tenures with flexible repayments, and report predatory lending practices to the microfinance ombudsman.' },
              { id: 'D', text: 'Terminate all field agents whose portfolios experienced defaults over 10%.' }
            ],
            correctOption: 'C',
            explanation: 'Matching reckless competitor incentives (A) accelerates systemic default. Suing without basis (B) or firing staff (D) punishes symptoms rather than root causes. Option C addresses borrower capability, builds long-term loyalty, mitigates credit risk, and uses legal regulatory channels.',
            topic: 'Strategic Management',
            difficulty: 'Moderate'
          }
        ]
      },
      {
        id: 'qadi',
        name: 'QA & DI',
        fullName: 'Quantitative Ability & Data Interpretation',
        durationMinutes: 60,
        questions: [
          {
            id: 'xat-q5',
            sectionId: 'qadi',
            type: 'mcq',
            text: 'A spherical solid iron ball of radius 6 cm is melted and recast into three smaller solid spherical balls. If the radii of two of the smaller balls are 3 cm and 4 cm, what is the radius of the third ball?',
            options: [
              { id: 'A', text: '5 cm' },
              { id: 'B', text: '4.5 cm' },
              { id: 'C', text: '5.2 cm' },
              { id: 'D', text: '3.8 cm' }
            ],
            correctOption: 'A',
            explanation: 'Volume is conserved:\n(4/3) * π * R³ = (4/3) * π * (r1³ + r2³ + r3³)\n6³ = 3³ + 4³ + r3³\n216 = 27 + 64 + r3³\n216 = 91 + r3³\nr3³ = 216 - 91 = 125\nr3 = ∛125 = 5 cm (Option A).',
            topic: 'Mensuration & Geometry',
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },
  {
    id: 'nmat',
    slug: 'nmat',
    title: 'NMAT by GMAC Official Pattern Mock Test (108 Questions)',
    shortTitle: 'NMAT 2026',
    badge: 'NMIMS Mumbai & Top Global B-Schools',
    tagline: 'Comprehensive Practice Set: Language (36 Qs | 28m), Quant (36 Qs | 52m), Logic (36 Qs | 40m) with No Negative Marking',
    fullDurationMinutes: 120,
    quickDurationMinutes: 25,
    totalQuestions: 108,
    totalMarks: 324,
    markingScheme: {
      correct: 3,
      incorrect: 0,
      unattempted: 0,
      description: '+3 marks for correct answer, 0 marks for incorrect or unattempted (NO negative marking)'
    },
    sections: NMAT_108_QUESTIONS_SECTIONS
  },
  {
    id: 'snap',
    slug: 'snap',
    title: 'SNAP 2026 Official Pattern Free Mock Test',
    shortTitle: 'SNAP 2026',
    badge: 'Symbiosis SIBM Pune & SCMHRD',
    tagline: '60-Minute Fast-Paced Speed Exam with Negative Marking (+1 / -0.25)',
    fullDurationMinutes: 60,
    quickDurationMinutes: 20,
    totalQuestions: 15,
    totalMarks: 15,
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      description: '+1 mark for correct answer, -0.25 mark for incorrect answer'
    },
    sections: [
      {
        id: 'snap-eng',
        name: 'General English',
        fullName: 'General English (Reading, Verbal & Grammar)',
        durationMinutes: 15,
        questions: [
          {
            id: 'snap-q1',
            sectionId: 'snap-eng',
            type: 'mcq',
            text: 'Choose the idiom that best fits the sentence: "The startup founder refused to admit defeat, even though it was evident to everyone that the venture was ___________."',
            options: [
              { id: 'A', text: 'on the rocks' },
              { id: 'B', text: 'under the weather' },
              { id: 'C', text: 'in the pink' },
              { id: 'D', text: 'spilling the beans' }
            ],
            correctOption: 'A',
            explanation: '"On the rocks" means experiencing severe difficulties and likely to fail completely. Hence Option A.',
            topic: 'Idioms & Phrases',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'snap-lr',
        name: 'Analytical & Logical',
        fullName: 'Analytical & Logical Reasoning',
        durationMinutes: 25,
        questions: [
          {
            id: 'snap-q2',
            sectionId: 'snap-lr',
            type: 'mcq',
            text: 'Find the missing number in the series: 3, 7, 16, 35, 74, ?',
            options: [
              { id: 'A', text: '148' },
              { id: 'B', text: '151' },
              { id: 'C', text: '153' },
              { id: 'D', text: '155' }
            ],
            correctOption: 'C',
            explanation: 'Pattern: (Previous number * 2) + incremental integer:\n3 * 2 + 1 = 7\n7 * 2 + 2 = 16\n16 * 2 + 3 = 35\n35 * 2 + 4 = 74\n74 * 2 + 5 = 148 + 5 = 153 (Option C).',
            topic: 'Number Series',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'snap-qa',
        name: 'QA & DI',
        fullName: 'Quantitative, Data Interpretation & Data Sufficiency',
        durationMinutes: 20,
        questions: [
          {
            id: 'snap-q3',
            sectionId: 'snap-qa',
            type: 'mcq',
            text: 'A merchant sells an article at a discount of 20% on the marked price and still gains 20%. If the cost price of the article is ₹600, what is its marked price?',
            options: [
              { id: 'A', text: '₹800' },
              { id: 'B', text: '₹900' },
              { id: 'C', text: '₹950' },
              { id: 'D', text: '₹1000' }
            ],
            correctOption: 'B',
            explanation: 'Selling Price (SP) = Cost Price + 20% profit = 600 * 1.20 = ₹720.\nMarked Price (MP) with 20% discount gives SP:\nMP * (1 - 0.20) = 720  =>  MP * 0.80 = 720  =>  MP = 720 / 0.80 = ₹900 (Option B).',
            topic: 'Profit & Loss',
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },
  {
    id: 'cmat',
    slug: 'cmat',
    title: 'CMAT 2026 Official Pattern Free Mock Test',
    shortTitle: 'CMAT 2026',
    badge: 'JBIMS, SIMSREE & GIM Goa',
    tagline: 'Comprehensive National Test: 100 Questions, 400 Marks, +4 / -1 Marking',
    fullDurationMinutes: 180,
    quickDurationMinutes: 30,
    totalQuestions: 15,
    totalMarks: 60,
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      description: '+4 marks for correct answer, -1 mark for incorrect answer'
    },
    sections: [
      {
        id: 'cmat-qt',
        name: 'Quantitative Techniques',
        fullName: 'Quantitative Techniques & Data Interpretation',
        durationMinutes: 36,
        questions: [
          {
            id: 'cmat-q1',
            sectionId: 'cmat-qt',
            type: 'mcq',
            text: 'The compound interest on a sum for 2 years at 10% per annum is ₹1050. What will be the simple interest on the same sum at the same rate for 3 years?',
            options: [
              { id: 'A', text: '₹1400' },
              { id: 'B', text: '₹1500' },
              { id: 'C', text: '₹1550' },
              { id: 'D', text: '₹1600' }
            ],
            correctOption: 'B',
            explanation: 'CI for 2 years at 10% = P * [(1.10)² - 1] = 0.21 * P = 1050.\nPrincipal P = 1050 / 0.21 = ₹5000.\nSimple Interest for 3 years at 10% = (5000 * 10 * 3) / 100 = ₹1500 (Option B).',
            topic: 'Compound Interest',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'cmat-lr',
        name: 'Logical Reasoning',
        fullName: 'Logical Reasoning',
        durationMinutes: 36,
        questions: [
          {
            id: 'cmat-q2',
            sectionId: 'cmat-lr',
            type: 'mcq',
            text: 'Pointing to a gentleman, Deepak said, "His only brother is the father of my daughter\'s father." How is the gentleman related to Deepak?',
            options: [
              { id: 'A', text: 'Grandfather' },
              { id: 'B', text: 'Father' },
              { id: 'C', text: 'Uncle' },
              { id: 'D', text: 'Brother-in-law' }
            ],
            correctOption: 'C',
            explanation: '"My daughter\'s father" is Deepak himself.\n"The father of Deepak" is Deepak\'s father.\n"His only brother is the father of Deepak" => The gentleman is the brother of Deepak\'s father.\nTherefore, the gentleman is Deepak\'s Paternal Uncle (Option C).',
            topic: 'Blood Relations',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'cmat-gk',
        name: 'General Awareness',
        fullName: 'General Awareness & Current Affairs',
        durationMinutes: 36,
        questions: [
          {
            id: 'cmat-q3',
            sectionId: 'cmat-gk',
            type: 'mcq',
            text: 'Which Indian city is famously known as the "Silicon Valley of India" and hosts the headquarters of ISRO?',
            options: [
              { id: 'A', text: 'Hyderabad' },
              { id: 'B', text: 'Bengaluru' },
              { id: 'C', text: 'Pune' },
              { id: 'D', text: 'Chennai' }
            ],
            correctOption: 'B',
            explanation: 'Bengaluru (Karnataka) is known as the Silicon Valley of India and hosts the headquarters of the Indian Space Research Organisation (ISRO).',
            topic: 'Business & Geography GK',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'cmat-ie',
        name: 'Innovation & Entrepreneurship',
        fullName: 'Innovation & Entrepreneurship',
        durationMinutes: 36,
        questions: [
          {
            id: 'cmat-q4',
            sectionId: 'cmat-ie',
            type: 'mcq',
            text: 'In venture capital and startup parlance, what does the acronym "CAC" stand for?',
            options: [
              { id: 'A', text: 'Capital Appreciation Certificate' },
              { id: 'B', text: 'Customer Acquisition Cost' },
              { id: 'C', text: 'Corporate Asset Concentration' },
              { id: 'D', text: 'Cumulative Annuity Coefficient' }
            ],
            correctOption: 'B',
            explanation: 'CAC stands for Customer Acquisition Cost, a fundamental metric representing the total marketing and sales expenditure divided by the number of new customers acquired.',
            topic: 'Startup Fundamentals',
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },
  {
    id: 'mat',
    slug: 'mat',
    title: 'MAT 2026 Official Pattern All-India Free Mock Test',
    shortTitle: 'MAT 2026',
    badge: 'AIMA National Gateway (600+ B-Schools)',
    tagline: 'Standard AIMA Examination Pattern: 5 Sections, Scaled Composite Score up to 800',
    fullDurationMinutes: 150,
    quickDurationMinutes: 30,
    totalQuestions: 15,
    totalMarks: 15,
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      description: '+1 mark for correct answer, -0.25 mark for incorrect answer'
    },
    sections: [
      {
        id: 'mat-lang',
        name: 'Language Comprehension',
        fullName: 'Language Comprehension',
        durationMinutes: 30,
        questions: [
          {
            id: 'mat-q1',
            sectionId: 'mat-lang',
            type: 'mcq',
            text: 'Choose the word that best substitutes the given phrase: "A person who renounces a religious or political belief or principle."',
            options: [
              { id: 'A', text: 'Apostate' },
              { id: 'B', text: 'Iconoclast' },
              { id: 'C', text: 'Philistine' },
              { id: 'D', text: 'Ascetic' }
            ],
            correctOption: 'A',
            explanation: 'An apostate is a person who renounces or abandons a religious, political, or moral belief.',
            topic: 'One Word Substitution',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'mat-math',
        name: 'Mathematical Skills',
        fullName: 'Mathematical Skills',
        durationMinutes: 30,
        questions: [
          {
            id: 'mat-q2',
            sectionId: 'mat-math',
            type: 'mcq',
            text: 'A pipe can fill a cistern in 12 hours while another pipe empties it in 18 hours. If both pipes are opened simultaneously, in how many hours will the cistern be completely filled?',
            options: [
              { id: 'A', text: '24 hours' },
              { id: 'B', text: '30 hours' },
              { id: 'C', text: '36 hours' },
              { id: 'D', text: '42 hours' }
            ],
            correctOption: 'C',
            explanation: 'Net filling rate per hour = (1/12) - (1/18) = (3 - 2) / 36 = 1/36.\nTherefore, the cistern will be filled in 36 hours (Option C).',
            topic: 'Pipes & Cisterns',
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'mat-gk',
        name: 'Indian & Global Environment',
        fullName: 'Indian & Global Environment',
        durationMinutes: 30,
        questions: [
          {
            id: 'mat-q3',
            sectionId: 'mat-gk',
            type: 'mcq',
            text: 'Which institution serves as the monetary and regulatory authority of the banking system in India?',
            options: [
              { id: 'A', text: 'SEBI' },
              { id: 'B', text: 'Reserve Bank of India (RBI)' },
              { id: 'C', text: 'NITI Aayog' },
              { id: 'D', text: 'Ministry of Corporate Affairs' }
            ],
            correctOption: 'B',
            explanation: 'The Reserve Bank of India (RBI) is the central bank and primary monetary authority regulating Indian banks and monetary supply.',
            topic: 'Indian Economy',
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];

/**
 * Returns mock test by ID or slug
 */
export function getMockTestById(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().trim();
  return MOCK_TESTS.find(t => t.id === cleanId || t.slug === cleanId) || null;
}

/**
 * Flattened questions array for a test
 */
export function getAllQuestionsForTest(test) {
  if (!test || !test.sections) return [];
  const list = [];
  test.sections.forEach(sec => {
    sec.questions.forEach(q => {
      list.push({
        ...q,
        sectionName: sec.name,
        sectionFullName: sec.fullName
      });
    });
  });
  return list;
}

/**
 * Estimate percentile based on exam and raw percentage score
 */
export function estimatePercentile(examId, score, maxScore) {
  if (!maxScore || maxScore <= 0) return '80.00';
  const percentage = Math.max(0, (score / maxScore) * 100);

  if (examId === 'cat-2026') {
    if (percentage >= 50) return (99.0 + (percentage - 50) * 0.018).toFixed(2);
    if (percentage >= 40) return (95.0 + (percentage - 40) * 0.40).toFixed(2);
    if (percentage >= 30) return (88.0 + (percentage - 30) * 0.70).toFixed(2);
    if (percentage >= 20) return (75.0 + (percentage - 20) * 1.30).toFixed(2);
    return Math.max(45, (45 + percentage * 1.5)).toFixed(2);
  }

  if (examId === 'xat-2027') {
    if (percentage >= 55) return (99.0 + (percentage - 55) * 0.02).toFixed(2);
    if (percentage >= 45) return (94.0 + (percentage - 45) * 0.50).toFixed(2);
    if (percentage >= 35) return (85.0 + (percentage - 35) * 0.90).toFixed(2);
    return Math.max(50, (50 + percentage * 1.0)).toFixed(2);
  }

  // General Percentile Curve for NMAT, SNAP, CMAT, MAT
  if (percentage >= 75) return (98.0 + (percentage - 75) * 0.07).toFixed(2);
  if (percentage >= 60) return (90.0 + (percentage - 60) * 0.53).toFixed(2);
  if (percentage >= 45) return (80.0 + (percentage - 45) * 0.66).toFixed(2);
  return Math.max(50, (50 + percentage * 0.6)).toFixed(2);
}
