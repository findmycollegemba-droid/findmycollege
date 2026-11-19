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
import { DEC_MAT_QUESTIONS_SECTIONS } from './decMatMockData.js';

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
    id: 'dec-mat-mock-test-free',
    slug: 'dec-mat-mock-test-free',
    aliases: ['mat', 'mat-2026', 'dec-mat', 'dec-mat-2026', 'dec-mat-mock-test'],
    title: 'Dec MAT Mock Test Free (Official MAT 2026 Pattern)',
    shortTitle: 'Dec MAT Mock Test Free',
    badge: 'AIMA Dec Session • Official Pattern',
    tagline: 'Authentic 5-Section CBT Practice: Language, Reasoning, Math, DI & GK with Instant 800 Scaled Score & Percentile',
    fullDurationMinutes: 120,
    quickDurationMinutes: 30,
    totalQuestions: 30,
    totalMarks: 30,
    compositeScaleMax: 800,
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      description: '+1 mark for correct answer, -0.25 mark for incorrect answer (GK scored separately)'
    },
    sections: DEC_MAT_QUESTIONS_SECTIONS
  }
];

/**
 * Returns mock test by ID or slug (including aliases)
 */
export function getMockTestById(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().trim();
  return MOCK_TESTS.find(t => 
    t.id === cleanId || 
    t.slug === cleanId || 
    (t.aliases && t.aliases.includes(cleanId))
  ) || null;
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

  if (examId === 'dec-mat-mock-test-free' || examId === 'mat' || examId === 'mat-2026') {
    if (percentage >= 75) return (98.5 + (percentage - 75) * 0.05).toFixed(2);
    if (percentage >= 60) return (92.0 + (percentage - 60) * 0.43).toFixed(2);
    if (percentage >= 45) return (82.0 + (percentage - 45) * 0.66).toFixed(2);
    if (percentage >= 30) return (68.0 + (percentage - 30) * 0.93).toFixed(2);
    return Math.max(45, (45 + percentage * 0.75)).toFixed(2);
  }

  // General Percentile Curve for NMAT, SNAP, CMAT
  if (percentage >= 75) return (98.0 + (percentage - 75) * 0.07).toFixed(2);
  if (percentage >= 60) return (90.0 + (percentage - 60) * 0.53).toFixed(2);
  if (percentage >= 45) return (80.0 + (percentage - 45) * 0.66).toFixed(2);
  return Math.max(50, (50 + percentage * 0.6)).toFixed(2);
}
