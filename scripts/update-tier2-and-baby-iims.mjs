import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const collegesDataPath = path.resolve(__dirname, '../src/data/collegesData.js');

const fileText = fs.readFileSync(collegesDataPath, 'utf-8');
const jsonMatch = fileText.match(/export const COLLEGES_DATA = (\[[\s\S]*\]);?\s*$/);
if (!jsonMatch) {
  console.error("Could not parse COLLEGES_DATA from collegesData.js");
  process.exit(1);
}

const colleges = JSON.parse(jsonMatch[1]);
console.log(`Starting update with ${colleges.length} colleges.`);

const TIER2_UPDATES = {
  'iim-trichy': {
    nirfRank: 27,
    rating: 4.7,
    reviewsCount: 130,
    accreditation: "AACSB, AMBA",
    fees: "₹19.50 Lakhs",
    feeNum: 19.5,
    avgSalary: "₹20.55 LPA",
    avgSalaryNum: 20.55,
    highestSalary: "₹41.61 LPA",
    medianSalary: "₹19.50 LPA",
    batchSize: 300,
    roiScore: "9.0 / 10",
    cutoffCAT: "94.0+ %ile",
    courses: [
      {
        name: "Post Graduate Programme in Management (PGPM - MBA)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹19,50,000"
      },
      {
        name: "Post Graduate Programme in Management - Human Resources (PGPM-HR)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹19,50,000"
      }
    ],
    highlights: "Ranked #27 Management Institute in India by NIRF 2024. Sprawling 175-acre smart campus on Trichy-Pudukkottai Highway with AACSB and AMBA international accreditations.",
    officialWebsite: "https://www.iimtrichy.ac.in"
  },

  'great-lakes-chennai': {
    nirfRank: 29,
    rating: 4.6,
    reviewsCount: 145,
    accreditation: "AMBA, SAQS",
    fees: "₹20.75 Lakhs",
    feeNum: 20.75,
    avgSalary: "₹15.10 LPA",
    avgSalaryNum: 15.1,
    highestSalary: "₹37.00 LPA",
    medianSalary: "₹14.50 LPA",
    batchSize: 300,
    roiScore: "8.8 / 10",
    cutoffCAT: "80.0+ %ile",
    cutoffXAT: "80.0+ %ile",
    cutoffCMAT: "95.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM - 2 Years)",
        duration: "2 Years Full Time",
        seats: 300,
        fee: "₹20,75,000"
      },
      {
        name: "Post Graduate Program in Management (PGPM - 1 Year)",
        duration: "1 Year Full Time",
        seats: 400,
        fee: "₹19,90,000"
      }
    ],
    highlights: "Ranked #29 Management Institute in India by NIRF 2024. Founded by management guru Dr. Bala V. Balachandran with LEED Platinum rated green campus on East Coast Road Chennai.",
    officialWebsite: "https://www.greatlakes.edu.in"
  },

  'scmhrd-pune': {
    nirfRank: 30,
    rating: 4.7,
    reviewsCount: 140,
    accreditation: "AACSB, NAAC A++",
    fees: "₹24.00 Lakhs",
    feeNum: 24.0,
    avgSalary: "₹23.71 LPA",
    avgSalaryNum: 23.71,
    highestSalary: "₹38.00 LPA",
    medianSalary: "₹22.00 LPA",
    batchSize: 270,
    roiScore: "8.9 / 10",
    cutoffCAT: "N/A (Accepts SNAP: 97.0+ %ile)",
    courses: [
      {
        name: "Master of Business Administration (MBA - HR/Marketing/Finance/Ops)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹24,00,000"
      },
      {
        name: "MBA in Business Analytics (MBA - BA)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹22,50,000"
      },
      {
        name: "MBA in Infrastructure Development & Management (MBA - IDM)",
        duration: "2 Years Full Time",
        seats: 30,
        fee: "₹18,50,000"
      }
    ],
    highlights: "Ranked #30 Management Institute in India by NIRF 2024. Symbiosis Centre for Management and Human Resource Development is among India's elite HR, Analytics, and Infrastructure leadership hubs.",
    officialWebsite: "https://www.scmhrd.edu"
  },

  'mica-ahmedabad': {
    nirfRank: 32,
    rating: 4.8,
    reviewsCount: 128,
    accreditation: "AICTE, AIU",
    fees: "₹23.00 Lakhs",
    feeNum: 23.0,
    avgSalary: "₹20.09 LPA",
    avgSalaryNum: 20.09,
    highestSalary: "₹35.50 LPA",
    medianSalary: "₹19.00 LPA",
    batchSize: 216,
    roiScore: "9.1 / 10",
    cutoffCAT: "80+ %ile + MICAT",
    cutoffXAT: "80+ %ile + MICAT",
    courses: [
      {
        name: "PGDM - Communications (PGDM-C)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹23,00,000"
      },
      {
        name: "PGDM (General Management)",
        duration: "2 Years Full Time",
        seats: 36,
        fee: "₹23,00,000"
      }
    ],
    highlights: "Ranked #32 Management Institute in India by NIRF 2024. Renowned as the 'School of Ideas' and India's undisputed leader for Strategic Marketing, Advertising, and Digital Communications.",
    officialWebsite: "https://www.mica.ac.in"
  },

  'imi-new-delhi': {
    nirfRank: 34,
    rating: 4.6,
    reviewsCount: 135,
    accreditation: "AMBA, AACSB",
    fees: "₹21.00 Lakhs",
    feeNum: 21.0,
    avgSalary: "₹16.88 LPA",
    avgSalaryNum: 16.88,
    highestSalary: "₹70.95 LPA",
    medianSalary: "₹16.00 LPA",
    batchSize: 480,
    roiScore: "8.7 / 10",
    cutoffCAT: "88.0+ %ile",
    cutoffXAT: "88.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years Full Time",
        seats: 360,
        fee: "₹21,00,000"
      },
      {
        name: "PGDM in Human Resource Management (PGDM-HRM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,00,000"
      },
      {
        name: "PGDM in Banking and Financial Services (PGDM-BFS)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,00,000"
      }
    ],
    highlights: "Ranked #34 Management Institute in India by NIRF 2024. Located in Qutab Institutional Area New Delhi with dual AACSB/AMBA international accreditations and premier corporate recruitments.",
    officialWebsite: "https://www.imi.edu"
  },

  'imt-ghaziabad': {
    nirfRank: 35,
    rating: 4.6,
    reviewsCount: 160,
    accreditation: "AACSB, SAQS",
    fees: "₹21.53 Lakhs",
    feeNum: 21.53,
    avgSalary: "₹17.07 LPA",
    avgSalaryNum: 17.07,
    highestSalary: "₹65.60 LPA",
    medianSalary: "₹16.00 LPA",
    batchSize: 660,
    roiScore: "8.8 / 10",
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "90.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years Full Time",
        seats: 480,
        fee: "₹21,53,000"
      },
      {
        name: "PGDM Marketing",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹21,53,000"
      },
      {
        name: "PGDM Finance",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,53,000"
      }
    ],
    highlights: "Ranked #35 Management Institute in India by NIRF 2024. Regarded as India's top marketing powerhouse with AACSB accreditation and extensive alumni presence in FMCG and Consulting leadership.",
    officialWebsite: "https://www.imt.edu"
  },

  'gim-goa': {
    nirfRank: 36,
    rating: 4.6,
    reviewsCount: 130,
    accreditation: "AACSB, AMBA",
    fees: "₹19.50 Lakhs",
    feeNum: 19.5,
    avgSalary: "₹15.20 LPA",
    avgSalaryNum: 15.2,
    highestSalary: "₹55.00 LPA",
    medianSalary: "₹14.70 LPA",
    batchSize: 480,
    roiScore: "8.8 / 10",
    cutoffCAT: "88.0+ %ile",
    cutoffXAT: "85.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM Core)",
        duration: "2 Years Full Time",
        seats: 300,
        fee: "₹19,50,000"
      },
      {
        name: "PGDM in Big Data Analytics (PGDM-BDA)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹19,50,000"
      },
      {
        name: "PGDM in Healthcare Management (PGDM-HCM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹16,50,000"
      },
      {
        name: "PGDM in Banking, Insurance & Financial Services (BIFS)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹19,50,000"
      }
    ],
    highlights: "Ranked #36 Management Institute in India by NIRF 2024. Picturesque 50-acre Sanquelim campus in the Western Ghats with dual AACSB and AMBA accreditations.",
    officialWebsite: "https://gim.ac.in"
  },

  'kj-somaiya-mumbai': {
    nirfRank: 37,
    rating: 4.5,
    reviewsCount: 155,
    accreditation: "AACSB",
    fees: "₹20.87 Lakhs",
    feeNum: 20.87,
    avgSalary: "₹12.32 LPA",
    avgSalaryNum: 12.32,
    highestSalary: "₹25.96 LPA",
    medianSalary: "₹12.00 LPA",
    batchSize: 600,
    roiScore: "8.4 / 10",
    cutoffCAT: "83.0+ %ile",
    cutoffXAT: "83.0+ %ile",
    cutoffCMAT: "95.0+ %ile",
    courses: [
      {
        name: "Master of Business Administration (MBA General)",
        duration: "2 Years Full Time",
        seats: 600,
        fee: "₹20,87,000"
      }
    ],
    highlights: "Ranked #37 Management Institute in India by NIRF 2024. Sprawling 60-acre Vidyavihar Mumbai campus with AACSB accreditation and strong corporate presence in BFSI and Retail.",
    officialWebsite: "https://simsr.somaiya.edu"
  },

  'dse-delhi': {
    nirfRank: 38,
    rating: 4.7,
    reviewsCount: 110,
    fees: "₹0.32 Lakhs",
    feeNum: 0.32,
    avgSalary: "₹14.50 LPA",
    avgSalaryNum: 14.5,
    highestSalary: "₹28.00 LPA",
    medianSalary: "₹13.80 LPA",
    batchSize: 90,
    roiScore: "9.9 / 10",
    cutoffCAT: "95.0+ %ile",
    courses: [
      {
        name: "MBA in International Business (MBA-IB)",
        duration: "2 Years Full Time",
        seats: 45,
        fee: "₹32,000"
      },
      {
        name: "MBA in Human Resource Development (MBA-HRD)",
        duration: "2 Years Full Time",
        seats: 45,
        fee: "₹32,000"
      }
    ],
    highlights: "Department of Commerce, Delhi School of Economics (University of Delhi). Legendary ROI business school with nominal total 2-year fee of ₹32,000 and ₹14.50 LPA average placement.",
    officialWebsite: "https://commercedu.com"
  },

  'dfs-delhi': {
    nirfRank: 42,
    rating: 4.8,
    reviewsCount: 95,
    fees: "₹0.30 Lakhs",
    feeNum: 0.30,
    avgSalary: "₹17.20 LPA",
    avgSalaryNum: 17.2,
    highestSalary: "₹32.00 LPA",
    medianSalary: "₹16.50 LPA",
    batchSize: 45,
    roiScore: "9.9 / 10",
    cutoffCAT: "96.0+ %ile",
    courses: [
      {
        name: "Master of Business Administration (Financial Studies - MBA-FS)",
        duration: "2 Years Full Time",
        seats: 45,
        fee: "₹30,000"
      }
    ],
    highlights: "Department of Financial Studies (University of Delhi South Campus). Undisputed ROI leader in specialized finance education with nominal fee and ₹17.20 LPA average salary across bulge-bracket investment banks.",
    officialWebsite: "https://mfc.edu"
  },

  'tapmi-manipal': {
    nirfRank: 42,
    rating: 4.6,
    reviewsCount: 140,
    accreditation: "AACSB, AMBA",
    fees: "₹18.50 Lakhs",
    feeNum: 18.5,
    avgSalary: "₹14.80 LPA",
    avgSalaryNum: 14.8,
    highestSalary: "₹24.80 LPA",
    medianSalary: "₹14.20 LPA",
    batchSize: 500,
    roiScore: "8.7 / 10",
    cutoffCAT: "85.0+ %ile",
    cutoffXAT: "85.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM General)",
        duration: "2 Years Full Time",
        seats: 380,
        fee: "₹18,50,000"
      },
      {
        name: "PGDM in Banking and Financial Services (BKFS)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹18,50,000"
      },
      {
        name: "PGDM in Human Resource Management (HRM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹18,50,000"
      }
    ],
    highlights: "Ranked #42 Management Institute in India by NIRF 2024. T. A. Pai Management Institute in Manipal features Bloomberg Terminals lab, AACSB & AMBA accreditations, and 100% placement track record.",
    officialWebsite: "https://www.tapmi.edu.in"
  },

  'ximb-bhubaneswar': {
    nirfRank: 46,
    rating: 4.7,
    reviewsCount: 135,
    accreditation: "AACSB, SAQS",
    fees: "₹21.00 Lakhs",
    feeNum: 21.0,
    avgSalary: "₹19.53 LPA",
    avgSalaryNum: 19.53,
    highestSalary: "₹71.51 LPA",
    medianSalary: "₹18.50 LPA",
    batchSize: 360,
    roiScore: "8.9 / 10",
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "90.0+ %ile",
    courses: [
      {
        name: "MBA in Business Management (MBA-BM)",
        duration: "2 Years Full Time",
        seats: 360,
        fee: "₹21,00,000"
      }
    ],
    highlights: "Ranked #46 Management Institute in India by NIRF 2024. Xavier Institute of Management, Bhubaneswar (XIM University) is Eastern India's premier Jesuit B-school with top consulting and finance recruitments.",
    officialWebsite: "https://xim.edu.in"
  },

  'fore-school-delhi': {
    nirfRank: 53,
    rating: 4.5,
    reviewsCount: 130,
    accreditation: "SAQS, AICTE",
    fees: "₹18.25 Lakhs",
    feeNum: 18.25,
    avgSalary: "₹14.50 LPA",
    avgSalaryNum: 14.5,
    highestSalary: "₹30.00 LPA",
    medianSalary: "₹14.00 LPA",
    batchSize: 420,
    roiScore: "8.6 / 10",
    cutoffCAT: "85.0+ %ile",
    cutoffXAT: "85.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹18,25,000"
      },
      {
        name: "PGDM in International Business (PGDM-IB)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹18,25,000"
      },
      {
        name: "PGDM in Financial Management (PGDM-FM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹18,25,000"
      },
      {
        name: "PGDM in Big Data Analytics (PGDM-BDA)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹18,25,000"
      }
    ],
    highlights: "Ranked #53 Management Institute in India by NIRF 2024. Located in Qutab Institutional Area, South Delhi with strong faculty and industry leadership recruitment.",
    officialWebsite: "https://www.fsm.ac.in"
  },

  'irma-anand': {
    nirfRank: 54,
    rating: 4.6,
    reviewsCount: 110,
    accreditation: "AICTE, NAAC A",
    fees: "₹16.80 Lakhs",
    feeNum: 16.8,
    avgSalary: "₹15.50 LPA",
    avgSalaryNum: 15.5,
    highestSalary: "₹26.50 LPA",
    medianSalary: "₹15.00 LPA",
    batchSize: 240,
    roiScore: "9.0 / 10",
    cutoffCAT: "80.0+ %ile",
    cutoffXAT: "80.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (Rural Management - PGDM-RM)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹16,80,000"
      }
    ],
    highlights: "Ranked #54 Management Institute in India by NIRF 2024. Founded by Dr. Verghese Kurien (father of the White Revolution). India's pioneer in Rural Management, Agribusiness, and Impact Consulting.",
    officialWebsite: "https://www.irma.ac.in"
  },

  'welingkar-mumbai': {
    nirfRank: 73,
    rating: 4.4,
    reviewsCount: 160,
    accreditation: "SAQS, NBA",
    fees: "₹14.00 Lakhs",
    feeNum: 14.0,
    avgSalary: "₹12.50 LPA",
    avgSalaryNum: 12.5,
    highestSalary: "₹25.40 LPA",
    medianSalary: "₹11.80 LPA",
    batchSize: 600,
    roiScore: "8.5 / 10",
    cutoffCAT: "80.0+ %ile",
    cutoffXAT: "80.0+ %ile",
    cutoffCMAT: "85.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM Core)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹14,00,000"
      },
      {
        name: "PGDM in E-Business",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹14,00,000"
      },
      {
        name: "PGDM in Business Design",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹14,00,000"
      }
    ],
    highlights: "Ranked #73 Management Institute in India by NIRF 2024. Prin. L. N. Welingkar Institute of Management Development and Research (WeSchool) at Matunga, Mumbai with design-thinking focus.",
    officialWebsite: "https://www.welingkar.org"
  },

  'simsREE-mumbai': {
    id: "simsree-mumbai", // Normalize ID to lowercase
    nirfRank: null,
    rating: 4.7,
    reviewsCount: 125,
    fees: "₹1.38 Lakhs",
    feeNum: 1.38,
    avgSalary: "₹15.19 LPA",
    avgSalaryNum: 15.19,
    highestSalary: "₹21.53 LPA",
    medianSalary: "₹14.90 LPA",
    batchSize: 180,
    roiScore: "9.9 / 10",
    cutoffCAT: "99.5+ %ile",
    courses: [
      {
        name: "Master of Management Studies (MMS - University of Mumbai)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹1,38,000"
      },
      {
        name: "Post Graduate Diploma in Business Management (PGDBM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹1,38,000"
      }
    ],
    highlights: "Sydenham Institute of Management Studies, Research and Entrepreneurship Education (SIMSREE), Churchgate, Mumbai. Government of Maharashtra institution offering staggering ROI with ₹1.38L total fee and ₹15.19 LPA average package.",
    officialWebsite: "https://simsree.org"
  }
};

// Newly added Baby IIMs and premier colleges
const NEW_ADDITIONS = [
  {
    id: "iim-nagpur",
    degreeTypes: ["MBA"],
    name: "IIM Nagpur - Indian Institute of Management",
    shortName: "IIM Nagpur",
    location: "Nagpur, Maharashtra",
    city: "Nagpur",
    state: "Maharashtra",
    nirfRank: 31,
    rating: 4.6,
    reviewsCount: 110,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2015,
    campusArea: "132 Acres (MIHAN)",
    accreditation: "AICTE",
    fees: "₹18.90 Lakhs",
    feeNum: 18.9,
    avgSalary: "₹18.08 LPA",
    avgSalaryNum: 18.08,
    highestSalary: "₹73.18 LPA",
    medianSalary: "₹16.32 LPA",
    batchSize: 340,
    roiScore: "8.9 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "90.0+ %ile",
      ncObc: "78.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "Deloitte",
      "KPMG",
      "Microsoft",
      "Amazon",
      "Cognizant",
      "Bank of America",
      "Adani",
      "Tata Capital"
    ],
    domainDistribution: {
      itAnalytics: "33%",
      bfsi: "25%",
      consulting: "22%",
      operations: "12%",
      marketing: "8%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 340,
        fee: "₹18,90,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP / IIM Nagpur CAT Percentile",
      academicsWeight: "10th, 12th, and Undergraduate scores",
      piWatWeight: "Personal Interview performance"
    },
    facilities: [
      "132-Acre Modern Smart Campus at MIHAN",
      "State-of-the-art Knowledge Resource Centre",
      "Air-conditioned Single Executive Dorms",
      "High Performance Analytics Computing Lab",
      "Indoor & Outdoor Sports Arena"
    ],
    highlights: "Ranked #31 Management Institute in India by NIRF 2024. Fastest rising new-generation IIM located in the logistical heart of India with high average CTC of ₹18.08 LPA.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.iimnagpur.ac.in"
  },

  {
    id: "iim-bodh-gaya",
    degreeTypes: ["MBA"],
    name: "IIM Bodh Gaya - Indian Institute of Management",
    shortName: "IIM Bodh Gaya",
    location: "Bodh Gaya, Bihar",
    city: "Patna",
    state: "Bihar",
    nirfRank: 33,
    rating: 4.6,
    reviewsCount: 115,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2015,
    campusArea: "119 Acres",
    accreditation: "AICTE",
    fees: "₹17.96 Lakhs",
    feeNum: 17.96,
    avgSalary: "₹14.80 LPA",
    avgSalaryNum: 14.8,
    highestSalary: "₹45.63 LPA",
    medianSalary: "₹14.00 LPA",
    batchSize: 300,
    roiScore: "8.7 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "90.0+ %ile",
      ncObc: "77.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "ICICI Bank",
      "Deloitte",
      "KPMG",
      "Amazon",
      "Bain Capability Network",
      "Infosys",
      "Adani"
    ],
    domainDistribution: {
      bfsi: "32%",
      itAnalytics: "26%",
      consulting: "20%",
      operations: "14%",
      marketing: "8%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 300,
        fee: "₹17,96,000"
      },
      {
        name: "MBA in Digital Business Management (DBM)",
        duration: "2 Years Full Time",
        seats: 90,
        fee: "₹17,96,000"
      },
      {
        name: "MBA in Hospital & Healthcare Management (HHM)",
        duration: "2 Years Full Time",
        seats: 90,
        fee: "₹17,96,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP CAT Percentile shortlist",
      academicsWeight: "Past academic record (Class 10, 12, Graduation)",
      piWatWeight: "CAP Personal Interview"
    },
    facilities: [
      "119-Acre Integrated Green Campus",
      "Central Library 'Gyanodaya'",
      "Finance and Big Data Analytics Lab",
      "Single-Occupancy Air-conditioned Hostels",
      "Multi-Purpose Sports Stadium & Gym"
    ],
    highlights: "Ranked #33 Management Institute in India by NIRF 2024. The 'Enlightening IIM' offers specialized programs in Digital Business & Healthcare Management with over 200 corporate recruiters.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://iimbg.ac.in"
  },

  {
    id: "iim-jammu",
    degreeTypes: ["MBA"],
    name: "IIM Jammu - Indian Institute of Management",
    shortName: "IIM Jammu",
    location: "Jagti, Jammu & Kashmir",
    city: "Jammu",
    state: "Jammu and Kashmir",
    nirfRank: 42,
    rating: 4.6,
    reviewsCount: 108,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2016,
    campusArea: "200 Acres (Jagti)",
    accreditation: "AICTE",
    fees: "₹17.15 Lakhs",
    feeNum: 17.15,
    avgSalary: "₹16.04 LPA",
    avgSalaryNum: 16.04,
    highestSalary: "₹26.60 LPA",
    medianSalary: "₹15.00 LPA",
    batchSize: 280,
    roiScore: "8.8 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "90.0+ %ile",
      ncObc: "77.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "Deloitte",
      "KPMG",
      "Cognizant",
      "ICICI Bank",
      "Axis Bank",
      "Infosys",
      "Tata Power"
    ],
    domainDistribution: {
      consulting: "28%",
      bfsi: "27%",
      itAnalytics: "24%",
      marketing: "12%",
      generalMgmt: "9%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹17,15,000"
      },
      {
        name: "MBA in Hospital Administration & Healthcare Management (HA&HM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹17,15,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP CAT Percentile",
      academicsWeight: "10th, 12th, and Undergraduate degrees",
      piWatWeight: "CAP Personal Interview"
    },
    facilities: [
      "Brand New 200-Acre Campus at Jagti",
      "Nalanda Central Library",
      "High-Performance Computing & SAP Lab",
      "Air-conditioned Student Residencies",
      "Gymnasium & Outdoor Sports Courts"
    ],
    highlights: "Ranked #42 Management Institute in India by NIRF 2024. Modern Himalayan foothills smart campus inaugurated by Hon'ble Prime Minister with 100% placement record.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.iimj.ac.in"
  },

  {
    id: "iim-amritsar",
    degreeTypes: ["MBA"],
    name: "IIM Amritsar - Indian Institute of Management",
    shortName: "IIM Amritsar",
    location: "Amritsar, Punjab",
    city: "Amritsar",
    state: "Punjab",
    nirfRank: 47,
    rating: 4.6,
    reviewsCount: 112,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2015,
    campusArea: "60 Acres",
    accreditation: "AICTE",
    fees: "₹21.00 Lakhs",
    feeNum: 21.0,
    avgSalary: "₹16.30 LPA",
    avgSalaryNum: 16.3,
    highestSalary: "₹43.00 LPA",
    medianSalary: "₹16.00 LPA",
    batchSize: 300,
    roiScore: "8.7 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "90.0+ %ile",
      ncObc: "77.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "ICICI Bank",
      "EY",
      "PwC",
      "D.E. Shaw",
      "Flipkart",
      "Cognizant",
      "Amazon",
      "Accenture"
    ],
    domainDistribution: {
      bfsi: "30%",
      consulting: "25%",
      itAnalytics: "24%",
      marketing: "12%",
      operations: "9%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 250,
        fee: "₹21,00,000"
      },
      {
        name: "MBA in Business Analytics (MBA-BA)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,00,000"
      },
      {
        name: "MBA in Human Resource Management (MBA-HR)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,00,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP CAT score",
      academicsWeight: "10th, 12th, and Degree grades",
      piWatWeight: "CAP Personal Interview"
    },
    facilities: [
      "Manawala Permanent Campus with Smart Classrooms",
      "Central Digital Management Library",
      "Hostels with Modern Amenities & High-Speed Wi-Fi",
      "Sports Arena & Student Activity Centre"
    ],
    highlights: "Ranked #47 Management Institute in India by NIRF 2024. Located in the historic cultural city of Amritsar with strong corporate linkages and high median CTC.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.iimamritsar.ac.in"
  },

  {
    id: "iim-sambalpur",
    degreeTypes: ["MBA"],
    name: "IIM Sambalpur - Indian Institute of Management",
    shortName: "IIM Sambalpur",
    location: "Sambalpur, Odisha",
    city: "Bhubaneswar",
    state: "Odisha",
    nirfRank: 50,
    rating: 4.5,
    reviewsCount: 102,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2015,
    campusArea: "200 Acres",
    accreditation: "AICTE",
    fees: "₹16.50 Lakhs",
    feeNum: 16.5,
    avgSalary: "₹15.80 LPA",
    avgSalaryNum: 15.8,
    highestSalary: "₹48.60 LPA",
    medianSalary: "₹15.00 LPA",
    batchSize: 314,
    roiScore: "8.8 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "90.0+ %ile",
      ncObc: "77.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "Deloitte",
      "Accenture",
      "Cognizant",
      "HDFC Bank",
      "Amul",
      "Vedanta",
      "PwC"
    ],
    domainDistribution: {
      bfsi: "29%",
      itAnalytics: "27%",
      consulting: "22%",
      operations: "13%",
      marketing: "9%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 314,
        fee: "₹16,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP CAT score",
      academicsWeight: "10th, 12th, and Undergraduate scores",
      piWatWeight: "CAP Personal Interview"
    },
    facilities: [
      "200-Acre Eco-friendly Permanent Campus",
      "Flipped Classrooms with Digital Interactive Screens",
      "Central Management Library",
      "Air-conditioned Student Hostels",
      "Sports Complex & Gymnasium"
    ],
    highlights: "Ranked #50 Management Institute in India by NIRF 2024. Pioneer of the 'Flipped Classroom' model in India with permanent green campus and 216+ recruiting companies.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.iimsambalpur.ac.in"
  },

  {
    id: "iim-sirmaur",
    degreeTypes: ["MBA"],
    name: "IIM Sirmaur - Indian Institute of Management",
    shortName: "IIM Sirmaur",
    location: "Paonta Sahib, Himachal Pradesh",
    city: "Dehradun",
    state: "Himachal Pradesh",
    nirfRank: 57,
    rating: 4.5,
    reviewsCount: 98,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2015,
    campusArea: "210 Acres (Dhaula Kuan)",
    accreditation: "AICTE",
    fees: "₹20.00 Lakhs",
    feeNum: 20.0,
    avgSalary: "₹14.50 LPA",
    avgSalaryNum: 14.5,
    highestSalary: "₹35.00 LPA",
    medianSalary: "₹13.80 LPA",
    batchSize: 300,
    roiScore: "8.6 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "90.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "90.0+ %ile",
      ncObc: "77.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "Accenture",
      "Deloitte",
      "ICICI Bank",
      "HDFC",
      "Cognizant",
      "Adani",
      "EY"
    ],
    domainDistribution: {
      bfsi: "31%",
      consulting: "25%",
      itAnalytics: "23%",
      marketing: "12%",
      operations: "9%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 250,
        fee: "₹20,00,000"
      },
      {
        name: "MBA in Tourism & Hospitality Management (MBA-T&HM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹20,00,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP CAT score",
      academicsWeight: "10th, 12th, and UG academic performance",
      piWatWeight: "CAP Personal Interview"
    },
    facilities: [
      "210-Acre Scenic Shivalik Foothills Campus",
      "Modern Digital Library",
      "Air-conditioned Student Residences",
      "Auditorium & Multi-Activity Sports Complex"
    ],
    highlights: "Ranked #57 Management Institute in India by NIRF 2024. Located near Paonta Sahib amidst the Shivalik hills offering niche programs in Tourism & Hospitality Management.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.iimsirmaur.ac.in"
  },

  {
    id: "liba-chennai",
    degreeTypes: ["PGDM"],
    name: "Loyola Institute of Business Administration (LIBA)",
    shortName: "LIBA Chennai",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    nirfRank: null,
    rating: 4.6,
    reviewsCount: 110,
    programType: "PGDM (2-Year Full Time)",
    ownership: "Private Autonomous (Jesuit Educational Society)",
    establishedYear: 1979,
    campusArea: "99 Acres (Loyola Campus)",
    accreditation: "SAQS, AICTE",
    fees: "₹15.50 Lakhs",
    feeNum: 15.5,
    avgSalary: "₹11.35 LPA",
    avgSalaryNum: 11.35,
    highestSalary: "₹24.50 LPA",
    medianSalary: "₹11.00 LPA",
    batchSize: 240,
    roiScore: "8.7 / 10",
    examsAccepted: ["CAT", "XAT"],
    cutoffCAT: "75.0+ %ile",
    cutoffXAT: "75.0+ %ile",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "75.0+ %ile",
      ncObc: "70.0+ %ile",
      sc: "60.0+ %ile",
      st: "50.0+ %ile",
      sectional: "Balanced sectional performance"
    },
    topRecruiters: [
      "Deloitte",
      "EY",
      "KPMG",
      "Infosys",
      "Axis Bank",
      "ICICI Bank",
      "HDFC Bank",
      "BMW"
    ],
    domainDistribution: {
      bfsi: "36%",
      itAnalytics: "28%",
      consulting: "18%",
      marketing: "11%",
      hr: "7%"
    },
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM Full-Time)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹15,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAT / XAT Percentile",
      academicsWeight: "Past academic records & essay evaluation",
      piWatWeight: "Personal Interview and Group Discussion"
    },
    facilities: [
      "Lush Loyola College Central Campus, Nungambakkam",
      "Modern Informatics & Analytics Lab",
      "Comprehensive Management Library",
      "Full AC Auditoriums & Smart Classrooms"
    ],
    highlights: "Premier Jesuit business school founded in 1979 in central Chennai. Known for ethics-driven leadership, high Return on Investment, and 100% campus placement track record.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://liba.edu"
  }
];

// Update existing colleges
let updated = 0;
for (const [id, data] of Object.entries(TIER2_UPDATES)) {
  const existing = colleges.find(c => c.id === id);
  if (existing) {
    Object.assign(existing, data);
    // If id changed (e.g. simsREE-mumbai to simsree-mumbai)
    if (data.id && data.id !== id) {
      existing.id = data.id;
    }
    updated++;
    console.log(`Updated: ${existing.id} (${existing.shortName}) | NIRF: ${existing.nirfRank} | Fees: ${existing.fees} | Batch: ${existing.batchSize} | Avg: ${existing.avgSalary}`);
  } else {
    console.warn(`College not found: ${id}`);
  }
}

// Add new baby IIMs and colleges
let added = 0;
for (const newCol of NEW_ADDITIONS) {
  const existing = colleges.find(c => c.id === newCol.id);
  if (!existing) {
    colleges.push(newCol);
    added++;
    console.log(`Added new college: ${newCol.id} (${newCol.shortName}) | NIRF: ${newCol.nirfRank}`);
  } else {
    Object.assign(existing, newCol);
    console.log(`Updated existing college: ${newCol.id}`);
  }
}

console.log(`Updated ${updated} colleges, added ${added} new colleges. Total colleges now: ${colleges.length}`);

// Write updated data back to collegesData.js
const newFileText = `export const COLLEGES_DATA = ${JSON.stringify(colleges, null, 2)};\n`;
fs.writeFileSync(collegesDataPath, newFileText, 'utf-8');
console.log(`Successfully wrote updated COLLEGES_DATA to ${collegesDataPath}`);
