/**
 * Official CMAT Full Mock Test - 100 Questions, 180 Minutes (400 Marks)
 * Common Management Admission Test with Answers & Detailed Explanations
 * 
 * Total Questions: 100 MCQs
 * - Quantitative Techniques & DI: 20 Questions (80 Marks)
 * - Logical Reasoning: 20 Questions (80 Marks)
 * - Language Comprehension: 20 Questions (80 Marks)
 * - General Awareness: 20 Questions (80 Marks)
 * - Innovation & Entrepreneurship: 20 Questions (80 Marks)
 * Total Duration: 180 Minutes
 * Marking: +4 for Correct, -1 for Incorrect
 */

export const CMAT_100_QUESTIONS_SECTIONS = [
  {
    id: 'cmat-quant',
    name: 'Quant Tech & DI',
    fullName: 'Quantitative Techniques & Data Interpretation (20 Questions | 80 Marks)',
    durationMinutes: 36,
    questions: [
  {
    "id": "cmat-q1",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "A car travels 120 km at 60 km/h and returns at 40 km/h. Find average speed for the round trip.",
    "options": [
      {
        "id": "A",
        "text": "48 km/h"
      },
      {
        "id": "B",
        "text": "50 km/h"
      },
      {
        "id": "C",
        "text": "45 km/h"
      },
      {
        "id": "D",
        "text": "52 km/h"
      }
    ],
    "correctOption": "A",
    "explanation": "Avg Speed = 2xy/(x+y) = 2(60)(40)/(100) = 4800/100 = 48 km/h.",
    "topic": "Time, Speed & Distance",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q2",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "A can complete a work in 12 days, B in 15 days. Working together for 4 days, what fraction of work remains?",
    "options": [
      {
        "id": "A",
        "text": "2/5"
      },
      {
        "id": "B",
        "text": "1/5"
      },
      {
        "id": "C",
        "text": "3/5"
      },
      {
        "id": "D",
        "text": "4/15"
      }
    ],
    "correctOption": "A",
    "explanation": "Work in 4 days = 4*(1/12 + 1/15) = 4*(9/60) = 3/5. Work left = 1 − 3/5 = 2/5.",
    "topic": "Time & Work",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q3",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Difference between Compound Interest and Simple Interest on a sum for 2 years at 10% p.a. is ₹ 150. Find the sum.",
    "options": [
      {
        "id": "A",
        "text": "₹ 15,000"
      },
      {
        "id": "B",
        "text": "₹ 10,000"
      },
      {
        "id": "C",
        "text": "₹ 12,000"
      },
      {
        "id": "D",
        "text": "₹ 20,000"
      }
    ],
    "correctOption": "A",
    "explanation": "Diff = P(R/100)² ⇒ 150 = P(1/100) ⇒ P = ₹ 15,000.",
    "topic": "CI vs SI",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q4",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Merchant marks up goods by 40% above CP and offers a 20% discount. Find net profit percentage.",
    "options": [
      {
        "id": "A",
        "text": "12%"
      },
      {
        "id": "B",
        "text": "20%"
      },
      {
        "id": "C",
        "text": "15%"
      },
      {
        "id": "D",
        "text": "8%"
      }
    ],
    "correctOption": "A",
    "explanation": "MP = 140, SP = 140 * 0.80 = 112. Profit = 12%.",
    "topic": "Profit & Loss",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q5",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Price of sugar rises by 25%. By what percentage must consumption decrease to keep expenditure unchanged?",
    "options": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "25%"
      },
      {
        "id": "C",
        "text": "16.66%"
      },
      {
        "id": "D",
        "text": "30%"
      }
    ],
    "correctOption": "A",
    "explanation": "Reduction = (25/125)*100 = 20%.",
    "topic": "Percentages",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q6",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "If A : B = 3 : 4 and B : C = 5 : 6, find the ratio A : C.",
    "options": [
      {
        "id": "A",
        "text": "5 : 8"
      },
      {
        "id": "B",
        "text": "15 : 24"
      },
      {
        "id": "C",
        "text": "8 : 15"
      },
      {
        "id": "D",
        "text": "1 : 2"
      }
    ],
    "correctOption": "A",
    "explanation": "A/C = (3/4)*(5/6) = 15/24 = 5/8.",
    "topic": "Ratios & Proportions",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q7",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Solve for x: log₂(x) + log₂(x − 2) = 3.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctOption": "A",
    "explanation": "log2(x(x-2)) = 3 ⇒ x(x-2) = 8 ⇒ x² - 2x - 8 = 0 ⇒ (x-4)(x+2) = 0 ⇒ x = 4.",
    "topic": "Logarithms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q8",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Find the roots of the quadratic equation: x² − 9x + 20 = 0.",
    "options": [
      {
        "id": "A",
        "text": "4, 5"
      },
      {
        "id": "B",
        "text": "−4, −5"
      },
      {
        "id": "C",
        "text": "2, 10"
      },
      {
        "id": "D",
        "text": "3, 6"
      }
    ],
    "correctOption": "A",
    "explanation": "(x-4)(x-5) = 0 ⇒ x = 4, 5.",
    "topic": "Quadratic Equations",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q9",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Sum of first 20 terms of Arithmetic Progression: 5, 8, 11, 14 ... is:",
    "options": [
      {
        "id": "A",
        "text": "670"
      },
      {
        "id": "B",
        "text": "650"
      },
      {
        "id": "C",
        "text": "700"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correctOption": "A",
    "explanation": "S20 = (20/2)[2(5) + 19(3)] = 10[10 + 57] = 670.",
    "topic": "Progressions - AP",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q10",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Sides of a triangle are 8 cm, 15 cm, 17 cm. What type of triangle is it?",
    "options": [
      {
        "id": "A",
        "text": "Right-angled"
      },
      {
        "id": "B",
        "text": "Acute-angled"
      },
      {
        "id": "C",
        "text": "Obtuse-angled"
      },
      {
        "id": "D",
        "text": "Isosceles"
      }
    ],
    "correctOption": "A",
    "explanation": "8² + 15² = 64 + 225 = 289 = 17². Follows Pythagoras theorem.",
    "topic": "Geometry",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q11",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Cylinder has radius 7 cm, height 10 cm. Find Curved Surface Area (π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "440 cm²"
      },
      {
        "id": "B",
        "text": "1540 cm²"
      },
      {
        "id": "C",
        "text": "220 cm²"
      },
      {
        "id": "D",
        "text": "880 cm²"
      }
    ],
    "correctOption": "A",
    "explanation": "CSA = 2πrh = 2*(22/7)*7*10 = 440 cm².",
    "topic": "Mensuration",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q12",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "In how many ways can 5 boys and 3 girls sit in a row so no two girls sit together?",
    "options": [
      {
        "id": "A",
        "text": "14,400"
      },
      {
        "id": "B",
        "text": "7,200"
      },
      {
        "id": "C",
        "text": "2,880"
      },
      {
        "id": "D",
        "text": "40,320"
      }
    ],
    "correctOption": "A",
    "explanation": "Boys 5! = 120. Girls in 6 gaps 6P3 = 120. Total = 120 * 120 = 14,400.",
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate"
  },
  {
    "id": "cmat-q13",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Two unbiased dice are thrown. Probability that sum of numbers is a prime number?",
    "options": [
      {
        "id": "A",
        "text": "5/12"
      },
      {
        "id": "B",
        "text": "15/36"
      },
      {
        "id": "C",
        "text": "7/18"
      },
      {
        "id": "D",
        "text": "1/2"
      }
    ],
    "correctOption": "A",
    "explanation": "Prime sum pairs = 15. Probability = 15/36 = 5/12.",
    "topic": "Probability",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q14",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Find unit digit of 7¹⁰⁵.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctOption": "A",
    "explanation": "105 mod 4 = 1. 7¹ ends in 7.",
    "topic": "Number Systems",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q15",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Pipe A fills a tank in 15 hrs, Pipe B in 20 hrs. Opened together, time to fill tank?",
    "options": [
      {
        "id": "A",
        "text": "60/7 hrs"
      },
      {
        "id": "B",
        "text": "35/3 hrs"
      },
      {
        "id": "C",
        "text": "8 hrs"
      },
      {
        "id": "D",
        "text": "7 hrs"
      }
    ],
    "correctOption": "A",
    "explanation": "Rate = 1/15 + 1/20 = 7/60. Time = 60/7 hrs.",
    "topic": "Pipes & Cisterns",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q16",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "passage": "Data Interpretation (Q16 - Q18): Smartphone sales (in thousands) by 4 companies over 3 years:\n• Alpha: 45 (2023), 55 (2024), 70 (2025)\n• Beta: 60 (2023), 75 (2024), 85 (2025)\n• Gamma: 50 (2023), 65 (2024), 90 (2025)\n• Delta: 40 (2023), 50 (2024), 65 (2025)",
    "text": "Percentage increase in sales for Company Gamma from 2023 to 2025?",
    "options": [
      {
        "id": "A",
        "text": "80%"
      },
      {
        "id": "B",
        "text": "40%"
      },
      {
        "id": "C",
        "text": "60%"
      },
      {
        "id": "D",
        "text": "75%"
      }
    ],
    "correctOption": "A",
    "explanation": "Growth = ((90-50)/50)*100 = 80%.",
    "topic": "Data Interpretation",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q17",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "passage": "Data Interpretation (Q16 - Q18): Smartphone sales (in thousands) by 4 companies over 3 years:\n• Alpha: 45 (2023), 55 (2024), 70 (2025)\n• Beta: 60 (2023), 75 (2024), 85 (2025)\n• Gamma: 50 (2023), 65 (2024), 90 (2025)\n• Delta: 40 (2023), 50 (2024), 65 (2025)",
    "text": "Average number of smartphones sold by all companies in 2024 (in thousands)?",
    "options": [
      {
        "id": "A",
        "text": "61.25"
      },
      {
        "id": "B",
        "text": "60.5"
      },
      {
        "id": "C",
        "text": "62.5"
      },
      {
        "id": "D",
        "text": "65.0"
      }
    ],
    "correctOption": "A",
    "explanation": "2024 Total = 55 + 75 + 65 + 50 = 245. Avg = 245/4 = 61.25.",
    "topic": "Data Interpretation",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q18",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "passage": "Data Interpretation (Q16 - Q18): Smartphone sales (in thousands) by 4 companies over 3 years:\n• Alpha: 45 (2023), 55 (2024), 70 (2025)\n• Beta: 60 (2023), 75 (2024), 85 (2025)\n• Gamma: 50 (2023), 65 (2024), 90 (2025)\n• Delta: 40 (2023), 50 (2024), 65 (2025)",
    "text": "Which company had lowest percentage growth in sales from 2024 to 2025?",
    "options": [
      {
        "id": "A",
        "text": "Beta"
      },
      {
        "id": "B",
        "text": "Alpha"
      },
      {
        "id": "C",
        "text": "Gamma"
      },
      {
        "id": "D",
        "text": "Delta"
      }
    ],
    "correctOption": "A",
    "explanation": "Beta growth = (10/75)*100 = 13.3% (Lowest).",
    "topic": "Data Interpretation",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q19",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "A train 180 m long crosses a platform 220 m long in 20 seconds. Speed in km/h?",
    "options": [
      {
        "id": "A",
        "text": "72 km/h"
      },
      {
        "id": "B",
        "text": "54 km/h"
      },
      {
        "id": "C",
        "text": "90 km/h"
      },
      {
        "id": "D",
        "text": "60 km/h"
      }
    ],
    "correctOption": "A",
    "explanation": "Dist = 400 m. Speed = 400/20 = 20 m/s = 72 km/h.",
    "topic": "Time, Speed & Distance",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q20",
    "sectionId": "cmat-quant",
    "type": "mcq",
    "text": "Sum compounded annually at 10% grows to ₹ 14,520 in 2 years. Find principal.",
    "options": [
      {
        "id": "A",
        "text": "₹ 12,000"
      },
      {
        "id": "B",
        "text": "₹ 11,500"
      },
      {
        "id": "C",
        "text": "₹ 12,500"
      },
      {
        "id": "D",
        "text": "₹ 10,000"
      }
    ],
    "correctOption": "A",
    "explanation": "P(1.21) = 14,520 ⇒ P = ₹ 12,000.",
    "topic": "Compound Interest",
    "difficulty": "Easy"
  }
]
  },
  {
    id: 'cmat-logic',
    name: 'Logical Reasoning',
    fullName: 'Logical Reasoning (20 Questions | 80 Marks)',
    durationMinutes: 36,
    questions: [
  {
    "id": "cmat-q21",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Find missing number in series: 3, 7, 15, 31, 63, ?",
    "options": [
      {
        "id": "A",
        "text": "127"
      },
      {
        "id": "B",
        "text": "125"
      },
      {
        "id": "C",
        "text": "120"
      },
      {
        "id": "D",
        "text": "128"
      }
    ],
    "correctOption": "A",
    "explanation": "Pattern: ×2 + 1. (63 × 2 + 1 = 127).",
    "topic": "Number Series",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q22",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Complete letter series: BCD, FGH, JKL, ?",
    "options": [
      {
        "id": "A",
        "text": "NOP"
      },
      {
        "id": "B",
        "text": "MNO"
      },
      {
        "id": "C",
        "text": "OPQ"
      },
      {
        "id": "D",
        "text": "PRS"
      }
    ],
    "correctOption": "A",
    "explanation": "Continuous 3-letter blocks skipping 1 letter: BCD (e) FGH (i) JKL (m) NOP.",
    "topic": "Letter Series",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q23",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Find odd one out: 27, 64, 125, 144, 216",
    "options": [
      {
        "id": "A",
        "text": "144"
      },
      {
        "id": "B",
        "text": "64"
      },
      {
        "id": "C",
        "text": "125"
      },
      {
        "id": "D",
        "text": "216"
      }
    ],
    "correctOption": "A",
    "explanation": "144 is 12² (square); others are perfect cubes.",
    "topic": "Classification",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q24",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "If STRATEGY is coded as TUSBUFHZ, how is FINANCE coded?",
    "options": [
      {
        "id": "A",
        "text": "GJOBODF"
      },
      {
        "id": "B",
        "text": "GJOBOCF"
      },
      {
        "id": "C",
        "text": "EHMAMBD"
      },
      {
        "id": "D",
        "text": "GINBNDF"
      }
    ],
    "correctOption": "A",
    "explanation": "Each letter shifted +1 forward.",
    "topic": "Coding-Decoding",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q25",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Pointing to a photo, a woman says, \"He is the only son of my husband's father.\" Relation?",
    "options": [
      {
        "id": "A",
        "text": "Husband"
      },
      {
        "id": "B",
        "text": "Brother-in-law"
      },
      {
        "id": "C",
        "text": "Son"
      },
      {
        "id": "D",
        "text": "Father-in-law"
      }
    ],
    "correctOption": "A",
    "explanation": "\"Husband's father's only son\" = husband.",
    "topic": "Blood Relations",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q26",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Starting from point X, Rahul walks 5 km South, turns left and walks 12 km. Direct distance from X?",
    "options": [
      {
        "id": "A",
        "text": "13 km"
      },
      {
        "id": "B",
        "text": "17 km"
      },
      {
        "id": "C",
        "text": "15 km"
      },
      {
        "id": "D",
        "text": "10 km"
      }
    ],
    "correctOption": "A",
    "explanation": "Right triangle legs 5 km and 12 km ⇒ Hypotenuse = 13 km.",
    "topic": "Direction Sense",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q27",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Row of 40 students facing North, Amit is 15th from left end. Position from right end?",
    "options": [
      {
        "id": "A",
        "text": "26th"
      },
      {
        "id": "B",
        "text": "25th"
      },
      {
        "id": "C",
        "text": "27th"
      },
      {
        "id": "D",
        "text": "24th"
      }
    ],
    "correctOption": "A",
    "explanation": "Position = 40 − 15 + 1 = 26th.",
    "topic": "Order & Ranking",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q28",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "If '+' means '×', '−' means '÷', '×' means '+', '÷' means '−', solve: 20 − 4 × 6 + 2 ÷ 5 = ?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correctOption": "A",
    "explanation": "20 ÷ 4 + 6 × 2 − 5 = 5 + 12 − 5 = 12.",
    "topic": "Mathematical Operations",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q29",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Complete alphanumeric series: A1, C4, E9, G16, ?",
    "options": [
      {
        "id": "A",
        "text": "I25"
      },
      {
        "id": "B",
        "text": "H25"
      },
      {
        "id": "C",
        "text": "I36"
      },
      {
        "id": "D",
        "text": "J25"
      }
    ],
    "correctOption": "A",
    "explanation": "Letters skip 1; numbers are squares (5² = 25). Result: I25.",
    "topic": "Alpha-Numeric Series",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q30",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Angle between hour hand and minute hand of clock at 3:30?",
    "options": [
      {
        "id": "A",
        "text": "75°"
      },
      {
        "id": "B",
        "text": "90°"
      },
      {
        "id": "C",
        "text": "105°"
      },
      {
        "id": "D",
        "text": "60°"
      }
    ],
    "correctOption": "A",
    "explanation": "Angle = |30(3) − 5.5(30)| = |90 − 165| = 75°.",
    "topic": "Clocks",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q31",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "If today is Monday, what day of week after 65 days?",
    "options": [
      {
        "id": "A",
        "text": "Wednesday"
      },
      {
        "id": "B",
        "text": "Tuesday"
      },
      {
        "id": "C",
        "text": "Thursday"
      },
      {
        "id": "D",
        "text": "Friday"
      }
    ],
    "correctOption": "A",
    "explanation": "65 days = 9 weeks + 2 days. Monday + 2 days = Wednesday.",
    "topic": "Calendars",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q32",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "passage": "Seating Arrangement (Q32 - Q34): Six executives A, B, C, D, E, F sit around circular table facing center. A is second to left of D. C is neighbor of A and B. F is opposite B.",
    "text": "Who sits directly opposite D?",
    "options": [
      {
        "id": "A",
        "text": "C"
      },
      {
        "id": "B",
        "text": "E"
      },
      {
        "id": "C",
        "text": "A"
      },
      {
        "id": "D",
        "text": "B"
      }
    ],
    "correctOption": "A",
    "explanation": "Opposite D in circular arrangement is C.",
    "topic": "Circular Seating",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q33",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "passage": "Seating Arrangement (Q32 - Q34): Six executives A, B, C, D, E, F sit around circular table facing center. A is second to left of D. C is neighbor of A and B. F is opposite B.",
    "text": "Who sits to immediate right of A?",
    "options": [
      {
        "id": "A",
        "text": "C"
      },
      {
        "id": "B",
        "text": "F"
      },
      {
        "id": "C",
        "text": "E"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctOption": "A",
    "explanation": "Immediate right of A facing center is C.",
    "topic": "Circular Seating",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q34",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "passage": "Seating Arrangement (Q32 - Q34): Six executives A, B, C, D, E, F sit around circular table facing center. A is second to left of D. C is neighbor of A and B. F is opposite B.",
    "text": "Who sits between F and D?",
    "options": [
      {
        "id": "A",
        "text": "E"
      },
      {
        "id": "B",
        "text": "C"
      },
      {
        "id": "C",
        "text": "A"
      },
      {
        "id": "D",
        "text": "B"
      }
    ],
    "correctOption": "A",
    "explanation": "Between F and D sits E.",
    "topic": "Circular Seating",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q35",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Syllogism: Statements: All cats are dogs. Some dogs are birds.\nConclusions: I. Some cats are birds. II. Some birds are dogs.",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "C",
        "text": "Both follow"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "correctOption": "A",
    "explanation": "\"Some dogs are birds\" converts to \"Some birds are dogs\".",
    "topic": "Syllogisms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q36",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Syllogism: Statements: All economists are strategists. No strategist is a gambler.\nConclusions: I. No economist is a gambler. II. Some strategists are economists.",
    "options": [
      {
        "id": "A",
        "text": "Both Conclusions I and II follow"
      },
      {
        "id": "B",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "C",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "correctOption": "A",
    "explanation": "All E ⊂ S and S ∩ G = ∅ ⇒ E ∩ G = ∅ (I). All E ⊂ S ⇒ Some S are E (II). Both follow.",
    "topic": "Syllogisms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q37",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Statement-Assumption: Statement: \"Please do not use mobile phones inside hospital.\"\nAssumption I: Mobile phones interfere with medical equipment. | Assumption II: People read notices.",
    "options": [
      {
        "id": "A",
        "text": "Both I and II are implicit"
      },
      {
        "id": "B",
        "text": "Only I is implicit"
      },
      {
        "id": "C",
        "text": "Only II is implicit"
      },
      {
        "id": "D",
        "text": "Neither is implicit"
      }
    ],
    "correctOption": "A",
    "explanation": "Medical risk assumption (I) and public compliance assumption (II) are both implicit.",
    "topic": "Statement & Assumptions",
    "difficulty": "Moderate"
  },
  {
    "id": "cmat-q38",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Course of Action: Statement: \"Heavy rainfall caused waterlogging in residential sectors.\"\nAction I: Deploy de-watering pumps | Action II: Advise residents to stay indoors",
    "options": [
      {
        "id": "A",
        "text": "Both Actions I and II follow"
      },
      {
        "id": "B",
        "text": "Only Action I follows"
      },
      {
        "id": "C",
        "text": "Only Action II follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "correctOption": "A",
    "explanation": "Pumps give immediate relief (I); indoor advice preserves safety (II).",
    "topic": "Course of Action",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q39",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Code: MARKET -> TEMRAM. How is PROFIT written?",
    "options": [
      {
        "id": "A",
        "text": "TIFORP"
      },
      {
        "id": "B",
        "text": "ITRPRO"
      },
      {
        "id": "C",
        "text": "PROFIT"
      },
      {
        "id": "D",
        "text": "ITPROF"
      }
    ],
    "correctOption": "A",
    "explanation": "Word is reversed: PROFIT -> TIFORP.",
    "topic": "Coding-Decoding",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q40",
    "sectionId": "cmat-logic",
    "type": "mcq",
    "text": "Complete series: 4, 9, 19, 39, 79, ?",
    "options": [
      {
        "id": "A",
        "text": "159"
      },
      {
        "id": "B",
        "text": "149"
      },
      {
        "id": "C",
        "text": "158"
      },
      {
        "id": "D",
        "text": "160"
      }
    ],
    "correctOption": "A",
    "explanation": "Pattern: ×2 + 1. (79 × 2 + 1 = 159).",
    "topic": "Number Series",
    "difficulty": "Easy"
  }
]
  },
  {
    id: 'cmat-lang',
    name: 'Language Comp',
    fullName: 'Language Comprehension (20 Questions | 80 Marks)',
    durationMinutes: 36,
    questions: [
  {
    "id": "cmat-q41",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "passage": "Passage: Deep Work & Focus\nIn today's fast-paced digital economy, the concept of \"deep work\" has emerged as a critical competitive advantage. Coined by Cal Newport, deep work refers to the ability to focus without distraction on a cognitively demanding task. It allows individuals to quickly master complicated information and produce better results in less time. Conversely, \"shallow work\"—tasks like constantly checking emails, responding to instant messages, and attending unproductive meetings—dominates the modern corporate landscape. While shallow work is necessary for baseline logistics, it rarely creates new value. The shift towards open-plan offices and an expectation of constant connectivity has inadvertently degraded the workforce's ability to engage in sustained, high-level cognition.",
    "text": "Primary consequence of \"shallow work\"?",
    "options": [
      {
        "id": "A",
        "text": "Handles baseline logistics but rarely creates new value"
      },
      {
        "id": "B",
        "text": "Enhances workforce innovation"
      },
      {
        "id": "C",
        "text": "Creates significant new corporate value"
      },
      {
        "id": "D",
        "text": "Requires profound cognitive effort"
      }
    ],
    "correctOption": "A",
    "explanation": "Shallow work handles logistics but rarely creates new value.",
    "topic": "Reading Comprehension",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q42",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "passage": "Passage: Deep Work & Focus\nIn today's fast-paced digital economy, the concept of \"deep work\" has emerged as a critical competitive advantage. Coined by Cal Newport, deep work refers to the ability to focus without distraction on a cognitively demanding task. It allows individuals to quickly master complicated information and produce better results in less time. Conversely, \"shallow work\"—tasks like constantly checking emails, responding to instant messages, and attending unproductive meetings—dominates the modern corporate landscape. While shallow work is necessary for baseline logistics, it rarely creates new value. The shift towards open-plan offices and an expectation of constant connectivity has inadvertently degraded the workforce's ability to engage in sustained, high-level cognition.",
    "text": "Office trend identified as detrimental to sustained high-level cognition?",
    "options": [
      {
        "id": "A",
        "text": "Open-plan offices and constant connectivity"
      },
      {
        "id": "B",
        "text": "Four-day work weeks"
      },
      {
        "id": "C",
        "text": "Asynchronous communication tools"
      },
      {
        "id": "D",
        "text": "Deep work culture"
      }
    ],
    "correctOption": "A",
    "explanation": "Open-plan offices and constant connectivity degrade high-level cognition.",
    "topic": "Reading Comprehension",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q43",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "passage": "Passage: Deep Work & Focus\nIn today's fast-paced digital economy, the concept of \"deep work\" has emerged as a critical competitive advantage. Coined by Cal Newport, deep work refers to the ability to focus without distraction on a cognitively demanding task. It allows individuals to quickly master complicated information and produce better results in less time. Conversely, \"shallow work\"—tasks like constantly checking emails, responding to instant messages, and attending unproductive meetings—dominates the modern corporate landscape. While shallow work is necessary for baseline logistics, it rarely creates new value. The shift towards open-plan offices and an expectation of constant connectivity has inadvertently degraded the workforce's ability to engage in sustained, high-level cognition.",
    "text": "Main benefit of \"deep work\" as described by Cal Newport?",
    "options": [
      {
        "id": "A",
        "text": "Mastering information quickly and producing better results"
      },
      {
        "id": "B",
        "text": "Replying to more emails per hour"
      },
      {
        "id": "C",
        "text": "Increasing collaborative meetings"
      },
      {
        "id": "D",
        "text": "Reducing individual accountability"
      }
    ],
    "correctOption": "A",
    "explanation": "Mastering information quickly and producing better results.",
    "topic": "Reading Comprehension",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q44",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "passage": "Passage: Deep Work & Focus\nIn today's fast-paced digital economy, the concept of \"deep work\" has emerged as a critical competitive advantage. Coined by Cal Newport, deep work refers to the ability to focus without distraction on a cognitively demanding task. It allows individuals to quickly master complicated information and produce better results in less time. Conversely, \"shallow work\"—tasks like constantly checking emails, responding to instant messages, and attending unproductive meetings—dominates the modern corporate landscape. While shallow work is necessary for baseline logistics, it rarely creates new value. The shift towards open-plan offices and an expectation of constant connectivity has inadvertently degraded the workforce's ability to engage in sustained, high-level cognition.",
    "text": "Word closest in meaning to CULTIVATE in passage:",
    "options": [
      {
        "id": "A",
        "text": "Nurture"
      },
      {
        "id": "B",
        "text": "Destroy"
      },
      {
        "id": "C",
        "text": "Ignore"
      },
      {
        "id": "D",
        "text": "Abandon"
      }
    ],
    "correctOption": "A",
    "explanation": "Cultivate means foster or nurture.",
    "topic": "Vocabulary",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q45",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Synonym for METICULOUS:",
    "options": [
      {
        "id": "A",
        "text": "Fastidious"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Sloppy"
      },
      {
        "id": "D",
        "text": "Hasty"
      }
    ],
    "correctOption": "A",
    "explanation": "Fastidious / meticulous means showing great attention to detail.",
    "topic": "Synonyms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q46",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Antonym for OBFUSCATE:",
    "options": [
      {
        "id": "A",
        "text": "Clarify"
      },
      {
        "id": "B",
        "text": "Confuse"
      },
      {
        "id": "C",
        "text": "Conceal"
      },
      {
        "id": "D",
        "text": "Complicate"
      }
    ],
    "correctOption": "A",
    "explanation": "Obfuscate means to obscure; antonym is clarify.",
    "topic": "Antonyms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q47",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Synonym for EPHEMERAL:",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Substantial"
      },
      {
        "id": "D",
        "text": "Eternal"
      }
    ],
    "correctOption": "A",
    "explanation": "Ephemeral means short-lived / transient.",
    "topic": "Synonyms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q48",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Antonym for PRUDENT:",
    "options": [
      {
        "id": "A",
        "text": "Reckless"
      },
      {
        "id": "B",
        "text": "Cautious"
      },
      {
        "id": "C",
        "text": "Judicious"
      },
      {
        "id": "D",
        "text": "Sagacious"
      }
    ],
    "correctOption": "A",
    "explanation": "Prudent means wise/cautious; opposite is reckless.",
    "topic": "Antonyms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q49",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Word closest in meaning to LACONIC:",
    "options": [
      {
        "id": "A",
        "text": "Concise"
      },
      {
        "id": "B",
        "text": "Verbose"
      },
      {
        "id": "C",
        "text": "Eloquent"
      },
      {
        "id": "D",
        "text": "Garrulous"
      }
    ],
    "correctOption": "A",
    "explanation": "Laconic means concise / using few words.",
    "topic": "Vocabulary",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q50",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Word opposite in meaning to AMELIORATE:",
    "options": [
      {
        "id": "A",
        "text": "Worsen"
      },
      {
        "id": "B",
        "text": "Enhance"
      },
      {
        "id": "C",
        "text": "Mitigate"
      },
      {
        "id": "D",
        "text": "Refine"
      }
    ],
    "correctOption": "A",
    "explanation": "Ameliorate means make better; opposite is worsen.",
    "topic": "Antonyms",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q51",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Grammatically correct sentence:",
    "options": [
      {
        "id": "A",
        "text": "Neither the principal nor the teachers are responsible for the delay."
      },
      {
        "id": "B",
        "text": "Neither the principal nor the teachers is responsible for the delay."
      },
      {
        "id": "C",
        "text": "Neither the principal or the teachers is responsible for the delay."
      },
      {
        "id": "D",
        "text": "Neither principal nor teachers was responsible."
      }
    ],
    "correctOption": "A",
    "explanation": "Verb agrees with subject closer to it (\"teachers\" ⇒ are).",
    "topic": "Grammar",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q52",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Fill in preposition: \"She has a great affinity _____ classical music.\"",
    "options": [
      {
        "id": "A",
        "text": "for"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "to"
      },
      {
        "id": "D",
        "text": "in"
      }
    ],
    "correctOption": "A",
    "explanation": "\"Affinity for\" is idiomatically correct.",
    "topic": "Prepositions",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q53",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Preposition usage: \"The CEO insisted _____ reviewing performance reports personally.\"",
    "options": [
      {
        "id": "A",
        "text": "on"
      },
      {
        "id": "B",
        "text": "at"
      },
      {
        "id": "C",
        "text": "for"
      },
      {
        "id": "D",
        "text": "with"
      }
    ],
    "correctOption": "A",
    "explanation": "Preposition rule: \"Insisted on\".",
    "topic": "Prepositions",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q54",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Subjunctive mood: \"If I _____ CFO, I would allocate more capital to R&D.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "am"
      },
      {
        "id": "D",
        "text": "have been"
      }
    ],
    "correctOption": "A",
    "explanation": "Subjunctive mood uses \"were\".",
    "topic": "Grammar",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q55",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Meaning of idiom \"Spill the beans\":",
    "options": [
      {
        "id": "A",
        "text": "To reveal a secret"
      },
      {
        "id": "B",
        "text": "To drop food"
      },
      {
        "id": "C",
        "text": "To cook a meal"
      },
      {
        "id": "D",
        "text": "To cause an argument"
      }
    ],
    "correctOption": "A",
    "explanation": "\"Spill the beans\" means reveal a secret.",
    "topic": "Idioms & Phrases",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q56",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Meaning of idiom \"Under the weather\":",
    "options": [
      {
        "id": "A",
        "text": "Feeling slightly ill"
      },
      {
        "id": "B",
        "text": "Standing in rain"
      },
      {
        "id": "C",
        "text": "Being depressed"
      },
      {
        "id": "D",
        "text": "Checking forecast"
      }
    ],
    "correctOption": "A",
    "explanation": "\"Under the weather\" means feeling slightly ill.",
    "topic": "Idioms & Phrases",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q57",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Meaning of idiom \"Bite the bullet\":",
    "options": [
      {
        "id": "A",
        "text": "Face a difficult situation courageously"
      },
      {
        "id": "B",
        "text": "Eat hard food"
      },
      {
        "id": "C",
        "text": "Shoot a gun"
      },
      {
        "id": "D",
        "text": "Delay a decision"
      }
    ],
    "correctOption": "A",
    "explanation": "\"Bite the bullet\" means face a tough situation courageously.",
    "topic": "Idioms & Phrases",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q58",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Change voice: \"The chef cooked a delicious meal.\"",
    "options": [
      {
        "id": "A",
        "text": "A delicious meal was cooked by the chef."
      },
      {
        "id": "B",
        "text": "A delicious meal is cooked by the chef."
      },
      {
        "id": "C",
        "text": "A delicious meal has been cooked by the chef."
      },
      {
        "id": "D",
        "text": "Chef was cooking meal."
      }
    ],
    "correctOption": "A",
    "explanation": "Active \"cooked\" → passive \"was cooked\".",
    "topic": "Voice",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q59",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Indirect speech: He said, \"I am going to the market.\"",
    "options": [
      {
        "id": "A",
        "text": "He said that he was going to the market."
      },
      {
        "id": "B",
        "text": "He said that he is going to the market."
      },
      {
        "id": "C",
        "text": "He said that I was going."
      },
      {
        "id": "D",
        "text": "He says he was going."
      }
    ],
    "correctOption": "A",
    "explanation": "\"I am going\" → \"he was going\".",
    "topic": "Speech",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q60",
    "sectionId": "cmat-lang",
    "type": "mcq",
    "text": "Choose correctly spelt word:",
    "options": [
      {
        "id": "A",
        "text": "Accommodation"
      },
      {
        "id": "B",
        "text": "Accomodation"
      },
      {
        "id": "C",
        "text": "Accomadation"
      },
      {
        "id": "D",
        "text": "Acommodation"
      }
    ],
    "correctOption": "A",
    "explanation": "Accommodation has double 'c' and double 'm'.",
    "topic": "Spelling Check",
    "difficulty": "Easy"
  }
]
  },
  {
    id: 'cmat-gk',
    name: 'General Awareness',
    fullName: 'General Awareness (20 Questions | 80 Marks)',
    durationMinutes: 36,
    questions: [
  {
    "id": "cmat-q61",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Which Indian state is home to Kaziranga National Park, famous for one-horned rhinoceroses?",
    "options": [
      {
        "id": "A",
        "text": "Assam"
      },
      {
        "id": "B",
        "text": "West Bengal"
      },
      {
        "id": "C",
        "text": "Odisha"
      },
      {
        "id": "D",
        "text": "Uttarakhand"
      }
    ],
    "correctOption": "A",
    "explanation": "Kaziranga National Park is in Assam.",
    "topic": "Geography",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q62",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Who among the following is the Governor of Reserve Bank of India (RBI)?",
    "options": [
      {
        "id": "A",
        "text": "Shaktikanta Das"
      },
      {
        "id": "B",
        "text": "Urjit Patel"
      },
      {
        "id": "C",
        "text": "Raghuram Rajan"
      },
      {
        "id": "D",
        "text": "Nirmala Sitharaman"
      }
    ],
    "correctOption": "A",
    "explanation": "Current RBI Governor is Shaktikanta Das.",
    "topic": "Banking & Economy",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q63",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "What is the capital city of Australia?",
    "options": [
      {
        "id": "A",
        "text": "Canberra"
      },
      {
        "id": "B",
        "text": "Sydney"
      },
      {
        "id": "C",
        "text": "Melbourne"
      },
      {
        "id": "D",
        "text": "Brisbane"
      }
    ],
    "correctOption": "A",
    "explanation": "Capital of Australia is Canberra.",
    "topic": "World Geography",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q64",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Which international organization publishes annual 'World Economic Outlook' report?",
    "options": [
      {
        "id": "A",
        "text": "International Monetary Fund (IMF)"
      },
      {
        "id": "B",
        "text": "World Bank"
      },
      {
        "id": "C",
        "text": "World Trade Organization (WTO)"
      },
      {
        "id": "D",
        "text": "WEF"
      }
    ],
    "correctOption": "A",
    "explanation": "Published by International Monetary Fund.",
    "topic": "International Organizations",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q65",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Which metal has the highest electrical conductivity?",
    "options": [
      {
        "id": "A",
        "text": "Silver"
      },
      {
        "id": "B",
        "text": "Copper"
      },
      {
        "id": "C",
        "text": "Gold"
      },
      {
        "id": "D",
        "text": "Aluminum"
      }
    ],
    "correctOption": "A",
    "explanation": "Silver has highest electrical conductivity.",
    "topic": "General Science",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q66",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Headquarters of UNESCO is in:",
    "options": [
      {
        "id": "A",
        "text": "Paris, France"
      },
      {
        "id": "B",
        "text": "Geneva, Switzerland"
      },
      {
        "id": "C",
        "text": "New York, USA"
      },
      {
        "id": "D",
        "text": "Vienna, Austria"
      }
    ],
    "correctOption": "A",
    "explanation": "UNESCO HQ is in Paris.",
    "topic": "International Organizations",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q67",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Which Indian Space Mission successfully landed near Lunar South Pole?",
    "options": [
      {
        "id": "A",
        "text": "Chandrayaan-3"
      },
      {
        "id": "B",
        "text": "Chandrayaan-2"
      },
      {
        "id": "C",
        "text": "Mangalyaan"
      },
      {
        "id": "D",
        "text": "Aditya-L1"
      }
    ],
    "correctOption": "A",
    "explanation": "Chandrayaan-3 landed near Lunar South Pole.",
    "topic": "Space & Science",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q68",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Currency of Japan is:",
    "options": [
      {
        "id": "A",
        "text": "Yen"
      },
      {
        "id": "B",
        "text": "Yuan"
      },
      {
        "id": "C",
        "text": "Won"
      },
      {
        "id": "D",
        "text": "Ringgit"
      }
    ],
    "correctOption": "A",
    "explanation": "Currency of Japan is Yen.",
    "topic": "World Currencies",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q69",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Who was the first Chief Justice of India?",
    "options": [
      {
        "id": "A",
        "text": "H. J. Kania"
      },
      {
        "id": "B",
        "text": "M. Patanjali Sastri"
      },
      {
        "id": "C",
        "text": "B. K. Mukherjea"
      },
      {
        "id": "D",
        "text": "K. Subba Rao"
      }
    ],
    "correctOption": "A",
    "explanation": "First Chief Justice of India was H. J. Kania.",
    "topic": "Polity",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q70",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Article of Indian Constitution guaranteeing Right to Equality before Law:",
    "options": [
      {
        "id": "A",
        "text": "Article 14"
      },
      {
        "id": "B",
        "text": "Article 19"
      },
      {
        "id": "C",
        "text": "Article 21"
      },
      {
        "id": "D",
        "text": "Article 32"
      }
    ],
    "correctOption": "A",
    "explanation": "Article 14 guarantees Equality before Law.",
    "topic": "Indian Constitution",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q71",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Term 'Bull and Bear' is associated with which financial sector?",
    "options": [
      {
        "id": "A",
        "text": "Stock Market"
      },
      {
        "id": "B",
        "text": "Commercial Banking"
      },
      {
        "id": "C",
        "text": "Real Estate"
      },
      {
        "id": "D",
        "text": "Insurance"
      }
    ],
    "correctOption": "A",
    "explanation": "Bull and Bear indicate market trends in Stock Markets.",
    "topic": "Business & Finance",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q72",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Which Indian river is also known as 'Dakshin Ganga'?",
    "options": [
      {
        "id": "A",
        "text": "Godavari"
      },
      {
        "id": "B",
        "text": "Krishna"
      },
      {
        "id": "C",
        "text": "Kaveri"
      },
      {
        "id": "D",
        "text": "Narmada"
      }
    ],
    "correctOption": "A",
    "explanation": "Godavari is known as Dakshin Ganga.",
    "topic": "Geography",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q73",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Author of historical book 'Discovery of India':",
    "options": [
      {
        "id": "A",
        "text": "Jawaharlal Nehru"
      },
      {
        "id": "B",
        "text": "Mahatma Gandhi"
      },
      {
        "id": "C",
        "text": "Rabindranath Tagore"
      },
      {
        "id": "D",
        "text": "B. R. Ambedkar"
      }
    ],
    "correctOption": "A",
    "explanation": "Written during imprisonment by Jawaharlal Nehru.",
    "topic": "History",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q74",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Primary greenhouse gas responsible for global warming:",
    "options": [
      {
        "id": "A",
        "text": "Carbon Dioxide (CO₂)"
      },
      {
        "id": "B",
        "text": "Oxygen (O₂)"
      },
      {
        "id": "C",
        "text": "Nitrogen (N₂)"
      },
      {
        "id": "D",
        "text": "Argon (Ar)"
      }
    ],
    "correctOption": "A",
    "explanation": "Carbon Dioxide (CO₂) is primary greenhouse gas.",
    "topic": "Environment",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q75",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Nobel Peace Prize 2023 was awarded to:",
    "options": [
      {
        "id": "A",
        "text": "Narges Mohammadi"
      },
      {
        "id": "B",
        "text": "Maria Ressa"
      },
      {
        "id": "C",
        "text": "Malala Yousafzai"
      },
      {
        "id": "D",
        "text": "Nadia Murad"
      }
    ],
    "correctOption": "A",
    "explanation": "Narges Mohammadi was awarded the Nobel Peace Prize 2023.",
    "topic": "Awards",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q76",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Country hosting G20 Summit 2023 under theme 'Vasudhaiva Kutumbakam':",
    "options": [
      {
        "id": "A",
        "text": "India"
      },
      {
        "id": "B",
        "text": "Brazil"
      },
      {
        "id": "C",
        "text": "Indonesia"
      },
      {
        "id": "D",
        "text": "South Africa"
      }
    ],
    "correctOption": "A",
    "explanation": "India hosted G20 Summit in 2023.",
    "topic": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q77",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Full form of 'UPI' in digital payments:",
    "options": [
      {
        "id": "A",
        "text": "Unified Payments Interface"
      },
      {
        "id": "B",
        "text": "Universal Payment Integration"
      },
      {
        "id": "C",
        "text": "United Payment Instrument"
      },
      {
        "id": "D",
        "text": "Unified Payment Infrastructure"
      }
    ],
    "correctOption": "A",
    "explanation": "Unified Payments Interface is full form of UPI.",
    "topic": "Digital Technology",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q78",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Chemical compound name for 'Baking Soda':",
    "options": [
      {
        "id": "A",
        "text": "Sodium Bicarbonate"
      },
      {
        "id": "B",
        "text": "Sodium Carbonate"
      },
      {
        "id": "C",
        "text": "Sodium Chloride"
      },
      {
        "id": "D",
        "text": "Calcium Carbonate"
      }
    ],
    "correctOption": "A",
    "explanation": "Baking soda chemical name is Sodium Bicarbonate (NaHCO₃).",
    "topic": "General Science",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q79",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Smallest continent in world by land area:",
    "options": [
      {
        "id": "A",
        "text": "Australia"
      },
      {
        "id": "B",
        "text": "Europe"
      },
      {
        "id": "C",
        "text": "Antarctica"
      },
      {
        "id": "D",
        "text": "South America"
      }
    ],
    "correctOption": "A",
    "explanation": "Australia is the smallest continent by land area.",
    "topic": "World Geography",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q80",
    "sectionId": "cmat-gk",
    "type": "mcq",
    "text": "Tropic of Cancer does NOT pass through which Indian state?",
    "options": [
      {
        "id": "A",
        "text": "Odisha"
      },
      {
        "id": "B",
        "text": "Rajasthan"
      },
      {
        "id": "C",
        "text": "Gujarat"
      },
      {
        "id": "D",
        "text": "Madhya Pradesh"
      }
    ],
    "correctOption": "A",
    "explanation": "Tropic of Cancer does NOT pass through Odisha.",
    "topic": "Geography",
    "difficulty": "Easy"
  }
]
  },
  {
    id: 'cmat-ie',
    name: 'Innovation & Entrep',
    fullName: 'Innovation and Entrepreneurship (20 Questions | 80 Marks)',
    durationMinutes: 36,
    questions: [
  {
    "id": "cmat-q81",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What does 'MVP' stand for in lean startup methodology?",
    "options": [
      {
        "id": "A",
        "text": "Minimum Viable Product"
      },
      {
        "id": "B",
        "text": "Most Valuable Product"
      },
      {
        "id": "C",
        "text": "Maximum Viable Plan"
      },
      {
        "id": "D",
        "text": "Minimum Value Process"
      }
    ],
    "correctOption": "A",
    "explanation": "MVP is the basic version of a product used to gather validated learning.",
    "topic": "Startup Concepts",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q82",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "An individual who invests their personal capital into early-stage startups in exchange for equity is called a:",
    "options": [
      {
        "id": "A",
        "text": "Angel Investor"
      },
      {
        "id": "B",
        "text": "Commercial Banker"
      },
      {
        "id": "C",
        "text": "Venture Debt Provider"
      },
      {
        "id": "D",
        "text": "Stock Broker"
      }
    ],
    "correctOption": "A",
    "explanation": "Angel Investor is a high-net-worth individual providing seed capital to early startups.",
    "topic": "Venture Financing",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q83",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "The process of changing a startup's business model direction in response to market feedback is known as:",
    "options": [
      {
        "id": "A",
        "text": "Pivoting"
      },
      {
        "id": "B",
        "text": "Bootstrapping"
      },
      {
        "id": "C",
        "text": "Scaling"
      },
      {
        "id": "D",
        "text": "Incubating"
      }
    ],
    "correctOption": "A",
    "explanation": "Pivoting is a strategic change in business model without changing the vision.",
    "topic": "Startup Strategy",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q84",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "Funding a business startup using solely personal savings and operating revenues without external investment is called:",
    "options": [
      {
        "id": "A",
        "text": "Bootstrapping"
      },
      {
        "id": "B",
        "text": "Crowdfunding"
      },
      {
        "id": "C",
        "text": "Venture Capital"
      },
      {
        "id": "D",
        "text": "IPO Financing"
      }
    ],
    "correctOption": "A",
    "explanation": "Bootstrapping is self-funding a business using personal savings and internal cash flow.",
    "topic": "Venture Financing",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q85",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is an organization called that offers startups shared office space, mentoring, and administrative support?",
    "options": [
      {
        "id": "A",
        "text": "Incubator"
      },
      {
        "id": "B",
        "text": "Commercial Bank"
      },
      {
        "id": "C",
        "text": "Stock Exchange"
      },
      {
        "id": "D",
        "text": "Trade Union"
      }
    ],
    "correctOption": "A",
    "explanation": "An Incubator provides infrastructure, mentoring, and support to early startups.",
    "topic": "Startup Ecosystem",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q86",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "In startup terminology, a privately held startup company valued at over $1 Billion is termed a:",
    "options": [
      {
        "id": "A",
        "text": "Unicorn"
      },
      {
        "id": "B",
        "text": "Decacorn"
      },
      {
        "id": "C",
        "text": "Blue Chip"
      },
      {
        "id": "D",
        "text": "Dragon"
      }
    ],
    "correctOption": "A",
    "explanation": "Unicorn is a privately held startup valued at $1 Billion or more.",
    "topic": "Startup Valuation",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q87",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is 'Disruptive Innovation' as defined by Clayton Christensen?",
    "options": [
      {
        "id": "A",
        "text": "Innovation that creates a new market and displaces established market leaders"
      },
      {
        "id": "B",
        "text": "Incremental improvement to existing products"
      },
      {
        "id": "C",
        "text": "Cost-cutting in manufacturing plants"
      },
      {
        "id": "D",
        "text": "Government regulatory intervention"
      }
    ],
    "correctOption": "A",
    "explanation": "Disruptive Innovation creates a new market, disrupting existing market leaders.",
    "topic": "Innovation Theory",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q88",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "The formal document outlining a new business's goals, target market, financial projections, and operational strategy is a:",
    "options": [
      {
        "id": "A",
        "text": "Business Plan"
      },
      {
        "id": "B",
        "text": "Balance Sheet"
      },
      {
        "id": "C",
        "text": "Memorandum of Association"
      },
      {
        "id": "D",
        "text": "Audit Report"
      }
    ],
    "correctOption": "A",
    "explanation": "A Business Plan details goals, strategies, and financial projections.",
    "topic": "Business Planning",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q89",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "Raising small amounts of capital from a large number of individuals via online platforms is known as:",
    "options": [
      {
        "id": "A",
        "text": "Crowdfunding"
      },
      {
        "id": "B",
        "text": "Venture Capital"
      },
      {
        "id": "C",
        "text": "Private Equity"
      },
      {
        "id": "D",
        "text": "Bank Loan"
      }
    ],
    "correctOption": "A",
    "explanation": "Crowdfunding is raising small amounts from a large crowd via online platforms.",
    "topic": "Venture Financing",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q90",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "Which government scheme was launched in India to foster startup culture and build an inclusive ecosystem?",
    "options": [
      {
        "id": "A",
        "text": "Startup India"
      },
      {
        "id": "B",
        "text": "Make in India"
      },
      {
        "id": "C",
        "text": "Digital India"
      },
      {
        "id": "D",
        "text": "Skill India"
      }
    ],
    "correctOption": "A",
    "explanation": "Startup India is the flagship Government initiative launched in 2016.",
    "topic": "Government Initiatives",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q91",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is 'Design Thinking' primarily focused on?",
    "options": [
      {
        "id": "A",
        "text": "User-centric problem solving through empathy, ideation, and prototyping"
      },
      {
        "id": "B",
        "text": "Graphical logo design"
      },
      {
        "id": "C",
        "text": "Automated factory assembly lines"
      },
      {
        "id": "D",
        "text": "Financial ratio auditing"
      }
    ],
    "correctOption": "A",
    "explanation": "Design thinking is a user-centric methodology emphasizing empathy, ideation, and prototyping.",
    "topic": "Design Thinking",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q92",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What does 'CAC' stand for in SaaS and e-commerce startup unit economics?",
    "options": [
      {
        "id": "A",
        "text": "Customer Acquisition Cost"
      },
      {
        "id": "B",
        "text": "Capital Asset Costs"
      },
      {
        "id": "C",
        "text": "Customer Allowance Code"
      },
      {
        "id": "D",
        "text": "Corporate Audit Charge"
      }
    ],
    "correctOption": "A",
    "explanation": "Customer Acquisition Cost (CAC) is total sales/marketing cost incurred to acquire a single customer.",
    "topic": "Unit Economics",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q93",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is 'LTV' in business metric context?",
    "options": [
      {
        "id": "A",
        "text": "Lifetime Value of a Customer"
      },
      {
        "id": "B",
        "text": "Long Term Venture"
      },
      {
        "id": "C",
        "text": "Loan To Value Ratio"
      },
      {
        "id": "D",
        "text": "Liquid Tax Volume"
      }
    ],
    "correctOption": "A",
    "explanation": "Lifetime Value of a Customer (LTV) is total net revenue expected over customer relationship.",
    "topic": "Unit Economics",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q94",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "The legal protection granted to an inventor for an exclusive right to manufacture and commercialize an invention is a:",
    "options": [
      {
        "id": "A",
        "text": "Patent"
      },
      {
        "id": "B",
        "text": "Trademark"
      },
      {
        "id": "C",
        "text": "Copyright"
      },
      {
        "id": "D",
        "text": "Trade Secret"
      }
    ],
    "correctOption": "A",
    "explanation": "A Patent grants exclusive legal right for an invention.",
    "topic": "Intellectual Property",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q95",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is 'Burn Rate' for a startup?",
    "options": [
      {
        "id": "A",
        "text": "The rate at which a venture spends its venture capital before generating positive cash flow"
      },
      {
        "id": "B",
        "text": "Speed of manufacturing disposal"
      },
      {
        "id": "C",
        "text": "Rate of employee turnover"
      },
      {
        "id": "D",
        "text": "Rate of inflation in raw materials"
      }
    ],
    "correctOption": "A",
    "explanation": "Burn Rate is the speed at which a startup spends cash reserves before generating positive cash flow.",
    "topic": "Startup Finance",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q96",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "Which matrix tool is used to evaluate Strengths, Weaknesses, Opportunities, and Threats?",
    "options": [
      {
        "id": "A",
        "text": "SWOT Analysis"
      },
      {
        "id": "B",
        "text": "PESTLE Analysis"
      },
      {
        "id": "C",
        "text": "BCG Matrix"
      },
      {
        "id": "D",
        "text": "Ansoff Matrix"
      }
    ],
    "correctOption": "A",
    "explanation": "SWOT Analysis evaluates Strengths, Weaknesses, Opportunities, and Threats.",
    "topic": "Strategic Analysis",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q97",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is an 'Elevator Pitch'?",
    "options": [
      {
        "id": "A",
        "text": "A succinct 30-to-60 second persuasive summary of a business idea to an investor"
      },
      {
        "id": "B",
        "text": "A speech delivered inside a real elevator"
      },
      {
        "id": "C",
        "text": "A detailed 50-page financial prospectus"
      },
      {
        "id": "D",
        "text": "A legal contract between partners"
      }
    ],
    "correctOption": "A",
    "explanation": "An Elevator Pitch is a concise 30-60 second sales pitch summarizing the business value proposition.",
    "topic": "Startup Communication",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q98",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "In entrepreneurial terminology, an 'Exaptation' or 'Social Entrepreneurship' focuses on:",
    "options": [
      {
        "id": "A",
        "text": "Applying innovative business solutions to address social, cultural, or environmental problems"
      },
      {
        "id": "B",
        "text": "Maximizing shareholder dividends exclusively"
      },
      {
        "id": "C",
        "text": "Evading corporate taxation legally"
      },
      {
        "id": "D",
        "text": "Government civil service exams"
      }
    ],
    "correctOption": "A",
    "explanation": "Social Entrepreneurship utilizes business mechanisms to solve pressing social or environmental challenges.",
    "topic": "Social Entrepreneurship",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q99",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "What is a 'Term Sheet' in startup funding negotiations?",
    "options": [
      {
        "id": "A",
        "text": "A non-binding agreement outlining basic terms and conditions of an investment"
      },
      {
        "id": "B",
        "text": "A final tax invoice"
      },
      {
        "id": "C",
        "text": "An employee salary slip"
      },
      {
        "id": "D",
        "text": "A bank passbook entry"
      }
    ],
    "correctOption": "A",
    "explanation": "A Term Sheet is a non-binding investment agreement defining key funding terms and valuation.",
    "topic": "Venture Financing",
    "difficulty": "Easy"
  },
  {
    "id": "cmat-q100",
    "sectionId": "cmat-ie",
    "type": "mcq",
    "text": "Which institution acts as the Nodal Agency for Startup India initiative under Ministry of Commerce?",
    "options": [
      {
        "id": "A",
        "text": "DPIIT (Department for Promotion of Industry and Internal Trade)"
      },
      {
        "id": "B",
        "text": "NITI Aayog"
      },
      {
        "id": "C",
        "text": "RBI"
      },
      {
        "id": "D",
        "text": "SEBI"
      }
    ],
    "correctOption": "A",
    "explanation": "DPIIT (Department for Promotion of Industry and Internal Trade) is the nodal agency.",
    "topic": "Government Ecosystem",
    "difficulty": "Easy"
  }
]
  }
];
