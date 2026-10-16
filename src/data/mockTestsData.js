/**
 * Official Pattern Free Mock Tests Data
 * Covers CAT 2026, XAT 2027, NMAT, SNAP, CMAT, and MAT
 * 
 * NOTE: When the user provides the Question & Answer PDF, the questions
 * can be plugged directly into the respective exam sections below or loaded dynamically.
 */

import { CAT_68_QUESTIONS_SECTIONS } from './catMock68Data.js';
import { NMAT_108_QUESTIONS_SECTIONS } from './nmatMock108Data.js';
import { XAT_95_QUESTIONS_SECTIONS } from './xatMock95Data.js';
import { SNAP_60_QUESTIONS_SECTIONS } from './snapMock60Data.js';
import { CMAT_100_QUESTIONS_SECTIONS } from './cmatMock100Data.js';

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
    title: 'XAT Official Full Mock Test (95 Questions)',
    shortTitle: 'XAT 2027',
    badge: 'XLRI Jamshedpur & Top Associates',
    tagline: 'Complete Practice Test: VALR (26), Decision Making (21), QADI (28), GK (20) with 5 Options & Negative Marking',
    fullDurationMinutes: 180,
    quickDurationMinutes: 30,
    totalQuestions: 95,
    totalMarks: 95,
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      description: '+1 mark for correct, -0.25 for incorrect (MCQs)'
    },
    sections: XAT_95_QUESTIONS_SECTIONS
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
    title: 'SNAP Official Pattern Mock Test (60 Questions)',
    shortTitle: 'SNAP 2026',
    badge: 'Symbiosis SIBM Pune & SCMHRD',
    tagline: 'Symbiosis National Aptitude Test: General English (15 Qs), Quant & DI (20 Qs), Logic (25 Qs) in 60 Mins',
    fullDurationMinutes: 60,
    quickDurationMinutes: 20,
    totalQuestions: 60,
    totalMarks: 60,
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      description: '+1 mark for correct answer, -0.25 mark for incorrect answer'
    },
    sections: SNAP_60_QUESTIONS_SECTIONS
  },
  {
    id: 'cmat',
    slug: 'cmat',
    title: 'CMAT Official Pattern Mock Test (100 Questions)',
    shortTitle: 'CMAT 2026',
    badge: 'JBIMS, SIMSREE & GIM Goa',
    tagline: 'Common Management Admission Test: Quant (20), Logic (20), Language (20), GK (20), Innovation (20) — 400 Marks',
    fullDurationMinutes: 180,
    quickDurationMinutes: 30,
    totalQuestions: 100,
    totalMarks: 400,
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      description: '+4 marks for correct answer, -1 mark for incorrect answer'
    },
    sections: CMAT_100_QUESTIONS_SECTIONS
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
