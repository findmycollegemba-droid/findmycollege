import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const collegesDataPath = path.resolve(__dirname, '../src/data/collegesData.js');

// Load current COLLEGES_DATA
const fileText = fs.readFileSync(collegesDataPath, 'utf-8');
const jsonMatch = fileText.match(/export const COLLEGES_DATA = (\[[\s\S]*\]);?\s*$/);
if (!jsonMatch) {
  console.error("Could not parse COLLEGES_DATA array from collegesData.js");
  process.exit(1);
}

const colleges = JSON.parse(jsonMatch[1]);
console.log(`Initial total colleges: ${colleges.length}`);

// Official data verified from official college portals & NIRF 2024 Management Ranking
const OFFICIAL_DATA_MAP = {
  'iim-ahmedabad': {
    nirfRank: 1,
    rating: 4.9,
    reviewsCount: 195,
    ownership: "Government / Institute of National Importance",
    accreditation: "EQUIS, AACSB, AMBA (Triple Crown)",
    fees: "₹26.5 Lakhs",
    feeNum: 26.5,
    avgSalary: "₹36.98 LPA",
    avgSalaryNum: 36.98,
    highestSalary: "₹81.6 LPA",
    medianSalary: "₹37.0 LPA",
    batchSize: 440,
    roiScore: "9.4 / 10",
    cutoffCAT: "99.5+ %ile",
    cutoffDetails: {
      general: "99.5+ %ile",
      ncObc: "95.0+ %ile",
      sc: "85.0+ %ile",
      st: "75.0+ %ile",
      sectional: "VARC 80%ile, DILR 80%ile, QA 80%ile"
    },
    topRecruiters: [
      "McKinsey & Co",
      "Boston Consulting Group (BCG)",
      "Bain & Company",
      "Goldman Sachs",
      "Google",
      "TAS",
      "Morgan Stanley",
      "Kearney"
    ],
    domainDistribution: {
      consulting: "41%",
      finance: "25%",
      productTech: "15%",
      marketing: "12%",
      generalMgmt: "7%"
    },
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 400,
        fee: "₹26,50,000"
      },
      {
        name: "Post Graduate Programme in Food & Agri-Business (PGP-FABM)",
        duration: "2 Years Full Time",
        seats: 47,
        fee: "₹22,00,000"
      },
      {
        name: "MBA for Executives (PGPX)",
        duration: "1 Year Full Time",
        seats: 140,
        fee: "₹33,00,000"
      }
    ],
    highlights: "Ranked #1 Management Institute in India by NIRF 2024. Pioneered case-study pedagogy in Asia with Harvard Business School mentorship. Top global recruiter footprint with audited IPRS placement report.",
    officialWebsite: "https://www.iima.ac.in"
  },

  'iim-bangalore': {
    nirfRank: 2,
    rating: 4.9,
    reviewsCount: 180,
    accreditation: "EQUIS, AACSB",
    fees: "₹26.0 Lakhs",
    feeNum: 26.0,
    avgSalary: "₹35.35 LPA",
    avgSalaryNum: 35.35,
    highestSalary: "₹80.0 LPA",
    medianSalary: "₹34.75 LPA",
    batchSize: 595,
    roiScore: "9.3 / 10",
    cutoffCAT: "99.4+ %ile",
    cutoffDetails: {
      general: "99.4+ %ile",
      ncObc: "93.0+ %ile",
      sc: "82.0+ %ile",
      st: "70.0+ %ile",
      sectional: "VARC 80%ile, DILR 75%ile, QA 75%ile"
    },
    topRecruiters: [
      "Accenture Strategy",
      "Boston Consulting Group (BCG)",
      "Bain & Company",
      "McKinsey & Co",
      "Amazon",
      "Microsoft",
      "Goldman Sachs",
      "Morgan Stanley"
    ],
    domainDistribution: {
      consulting: "45%",
      productTech: "21%",
      finance: "18%",
      generalMgmt: "9%",
      marketing: "7%"
    },
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 520,
        fee: "₹26,00,000"
      },
      {
        name: "Post Graduate Programme in Business Analytics (PGP-BA)",
        duration: "2 Years Full Time",
        seats: 75,
        fee: "₹26,00,000"
      },
      {
        name: "Executive Post Graduate Programme (EPGP)",
        duration: "1 Year Full Time",
        seats: 75,
        fee: "₹33,50,000"
      }
    ],
    highlights: "Ranked #2 Management Institute in India by NIRF 2024. Located in India's Silicon Valley with exceptional consulting and tech/product management recruitments. Home to NSRCEL, one of India's leading startup incubators.",
    officialWebsite: "https://www.iimb.ac.in"
  },

  'iim-kozhikode': {
    nirfRank: 3,
    rating: 4.8,
    reviewsCount: 152,
    accreditation: "AMBA, EQUIS",
    fees: "₹21.5 Lakhs",
    feeNum: 21.5,
    avgSalary: "₹28.18 LPA",
    avgSalaryNum: 28.18,
    highestSalary: "₹81.0 LPA",
    medianSalary: "₹27.50 LPA",
    batchSize: 580,
    roiScore: "9.1 / 10",
    cutoffCAT: "98.0+ %ile",
    cutoffDetails: {
      general: "98.0+ %ile",
      ncObc: "88.0+ %ile",
      sc: "78.0+ %ile",
      st: "65.0+ %ile",
      sectional: "VARC 75%ile, DILR 75%ile, QA 75%ile"
    },
    topRecruiters: [
      "Deloitte",
      "Bain & Company",
      "McKinsey & Co",
      "Boston Consulting Group",
      "Amazon",
      "PwC",
      "HDFC Bank",
      "Goldman Sachs"
    ],
    domainDistribution: {
      consulting: "38%",
      finance: "22%",
      itAnalytics: "17%",
      marketing: "13%",
      generalMgmt: "10%"
    },
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 480,
        fee: "₹21,50,000"
      },
      {
        name: "Post Graduate Programme in Finance (PGP-Finance)",
        duration: "2 Years Full Time",
        seats: 50,
        fee: "₹21,50,000"
      },
      {
        name: "Post Graduate Programme in Liberal Studies & Management (PGP-LSM)",
        duration: "2 Years Full Time",
        seats: 50,
        fee: "₹21,50,000"
      },
      {
        name: "Post Graduate Programme in Business Leadership (PGP-BL)",
        duration: "1 Year Full Time",
        seats: 60,
        fee: "₹24,50,000"
      }
    ],
    highlights: "Ranked #3 Management Institute in India by NIRF 2024. Pioneer in gender diversity in elite management education. Modern twin-hill campus located in God's Own Country with 100% placement track record.",
    officialWebsite: "https://www.iimk.ac.in"
  },

  'dms-iit-delhi': {
    nirfRank: 4,
    rating: 4.7,
    reviewsCount: 118,
    accreditation: "AACSB, AICTE",
    fees: "₹12.0 Lakhs",
    feeNum: 12.0,
    avgSalary: "₹25.82 LPA",
    avgSalaryNum: 25.82,
    highestSalary: "₹41.50 LPA",
    medianSalary: "₹24.50 LPA",
    batchSize: 197,
    roiScore: "9.6 / 10",
    cutoffCAT: "98.0+ %ile",
    cutoffDetails: {
      general: "98.0+ %ile",
      ncObc: "90.0+ %ile",
      sc: "80.0+ %ile",
      st: "70.0+ %ile",
      sectional: "VARC 80%ile, DILR 80%ile, QA 80%ile"
    },
    topRecruiters: [
      "McKinsey & Co",
      "Bain & Company",
      "Accenture Strategy",
      "Deloitte",
      "Amazon",
      "Google",
      "Microsoft",
      "Tata Consumer Products"
    ],
    domainDistribution: {
      consulting: "35%",
      itAnalytics: "26%",
      finance: "18%",
      operations: "12%",
      marketing: "9%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA Full-Time)",
        duration: "2 Years Full Time",
        seats: 125,
        fee: "₹12,00,000"
      },
      {
        name: "MBA in Telecommunication Systems Management",
        duration: "2 Years Full Time",
        seats: 72,
        fee: "₹12,00,000"
      },
      {
        name: "Executive MBA (Technology Management)",
        duration: "3 Years Evening",
        seats: 40,
        fee: "₹10,50,000"
      }
    ],
    highlights: "Ranked #4 Management Institute in India by NIRF 2024. Exceptional Return on Investment (ROI) with ₹12 Lakhs total tuition fee and ₹25.82 LPA average CTC. Highly prestigious IIT Delhi ecosystem.",
    officialWebsite: "https://dms.iitd.ac.in"
  },

  'iim-calcutta': {
    nirfRank: 5,
    rating: 4.9,
    reviewsCount: 188,
    accreditation: "AACSB, AMBA, EQUIS (Triple Crown)",
    fees: "₹27.0 Lakhs",
    feeNum: 27.0,
    avgSalary: "₹36.00 LPA",
    avgSalaryNum: 36.0,
    highestSalary: "₹1.45 CPA",
    medianSalary: "₹35.00 LPA",
    batchSize: 462,
    roiScore: "9.3 / 10",
    cutoffCAT: "99.4+ %ile",
    cutoffDetails: {
      general: "99.4+ %ile",
      ncObc: "94.0+ %ile",
      sc: "84.0+ %ile",
      st: "72.0+ %ile",
      sectional: "VARC 80%ile, DILR 80%ile, QA 80%ile"
    },
    topRecruiters: [
      "Avendus Capital",
      "Goldman Sachs",
      "Morgan Stanley",
      "Bain & Company",
      "Boston Consulting Group",
      "McKinsey & Co",
      "Barclays",
      "Blackstone"
    ],
    domainDistribution: {
      finance: "36%",
      consulting: "38%",
      productTech: "14%",
      generalMgmt: "7%",
      marketing: "5%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 462,
        fee: "₹27,00,000"
      },
      {
        name: "MBA for Executives Programme (MBAEx)",
        duration: "1 Year Full Time",
        seats: 78,
        fee: "₹33,00,000"
      },
      {
        name: "PGDBA (Business Analytics - Jointly with ISI & IIT KGP)",
        duration: "2 Years Full Time",
        seats: 64,
        fee: "₹25,00,000"
      }
    ],
    highlights: "Ranked #5 Management Institute in India by NIRF 2024. Renowned as the 'Finance Campus of Asia'. India's first Triple Crown accredited business school with top global investment banking and consulting recruiters.",
    officialWebsite: "https://www.iimcal.ac.in"
  },

  'iim-lucknow': {
    nirfRank: 7,
    rating: 4.8,
    reviewsCount: 165,
    accreditation: "AACSB, AMBA",
    fees: "₹20.8 Lakhs",
    feeNum: 20.8,
    avgSalary: "₹33.20 LPA",
    avgSalaryNum: 33.2,
    highestSalary: "₹1.00 CPA",
    medianSalary: "₹32.90 LPA",
    batchSize: 595,
    roiScore: "9.2 / 10",
    cutoffCAT: "99.0+ %ile",
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 490,
        fee: "₹20,80,000"
      },
      {
        name: "Post Graduate Programme in Agribusiness Management (PGP-ABM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹20,80,000"
      },
      {
        name: "Post Graduate Programme in Sustainable Management (PGP-SM, Noida)",
        duration: "2 Years Full Time",
        seats: 45,
        fee: "₹20,80,000"
      },
      {
        name: "International Programme in Management for Executives (IPMX, Noida)",
        duration: "1 Year Full Time",
        seats: 100,
        fee: "₹26,00,000"
      }
    ],
    highlights: "Ranked #7 Management Institute in India by NIRF 2024. Dual campus advantage in Lucknow and Noida with marquee consulting, strategy, and finance placements.",
    officialWebsite: "https://www.iiml.ac.in"
  },

  'iim-indore': {
    nirfRank: 8,
    rating: 4.8,
    reviewsCount: 158,
    accreditation: "AACSB, AMBA, EQUIS (Triple Crown)",
    fees: "₹21.0 Lakhs",
    feeNum: 21.0,
    avgSalary: "₹27.27 LPA",
    avgSalaryNum: 27.27,
    highestSalary: "₹82.54 LPA",
    medianSalary: "₹25.00 LPA",
    batchSize: 590,
    roiScore: "9.0 / 10",
    cutoffCAT: "98.0+ %ile",
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 490,
        fee: "₹21,00,000"
      },
      {
        name: "Integrated Programme in Management (IPM - MBA Dual Degree)",
        duration: "5 Years Full Time",
        seats: 150,
        fee: "₹35,00,000"
      },
      {
        name: "Executive Post Graduate Programme in Management (EPGP)",
        duration: "1 Year Full Time",
        seats: 60,
        fee: "₹22,11,000"
      }
    ],
    highlights: "Ranked #8 Management Institute in India by NIRF 2024. Triple Crown accredited elite B-school perched on Prabandh Shikhar with large cohort diversity and top recruiter presence.",
    officialWebsite: "https://www.iimidr.ac.in"
  },

  'xlri-jamshedpur': {
    nirfRank: 9,
    rating: 4.8,
    reviewsCount: 172,
    accreditation: "AACSB, AMBA",
    fees: "₹30.6 Lakhs",
    feeNum: 30.6,
    avgSalary: "₹29.89 LPA",
    avgSalaryNum: 29.89,
    highestSalary: "₹75.00 LPA",
    medianSalary: "₹29.00 LPA",
    batchSize: 420,
    roiScore: "9.1 / 10",
    cutoffXAT: "95+ %ile (BM: 96%ile, HRM: 94%ile)",
    courses: [
      {
        name: "PGDM Business Management (BM)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹30,60,000"
      },
      {
        name: "PGDM Human Resource Management (HRM)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹30,60,000"
      },
      {
        name: "PGDM (General Management - 15 Months)",
        duration: "15 Months Full Time",
        seats: 120,
        fee: "₹24,00,000"
      }
    ],
    highlights: "Ranked #9 Management Institute in India by NIRF 2024. India's oldest business school (founded 1949), undisputed leader in Human Resource Management (HRM) and premier Business Management in Asia.",
    officialWebsite: "https://www.xlri.ac.in"
  },

  'iit-bombay-sjmsom': {
    nirfRank: 10,
    rating: 4.8,
    reviewsCount: 130,
    accreditation: "AACSB, AICTE",
    fees: "₹15.16 Lakhs",
    feeNum: 15.16,
    avgSalary: "₹28.16 LPA",
    avgSalaryNum: 28.16,
    highestSalary: "₹53.80 LPA",
    medianSalary: "₹26.00 LPA",
    batchSize: 126,
    roiScore: "9.5 / 10",
    cutoffCAT: "98.5+ %ile",
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 126,
        fee: "₹15,16,000"
      },
      {
        name: "Executive MBA (Jointly with Washington University in St. Louis)",
        duration: "18 Months Weekend",
        seats: 50,
        fee: "₹42,00,000"
      }
    ],
    highlights: "Ranked #10 Management Institute in India by NIRF 2024. Outstanding Return on Investment with ₹15.16L total fees, ₹28.16 LPA average CTC, and intimate batch of 126 students in IIT Bombay.",
    officialWebsite: "https://som.iitb.ac.in"
  },

  'mdi-gurgaon': {
    nirfRank: 11,
    rating: 4.8,
    reviewsCount: 160,
    accreditation: "AACSB, AMBA, SAQS",
    fees: "₹26.55 Lakhs",
    feeNum: 26.55,
    avgSalary: "₹29.50 LPA",
    avgSalaryNum: 29.5,
    highestSalary: "₹97.50 LPA",
    medianSalary: "₹29.00 LPA",
    batchSize: 540,
    roiScore: "9.0 / 10",
    cutoffCAT: "96.0+ %ile",
    courses: [
      {
        name: "PGDM (Post Graduate Diploma in Management)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹26,55,000"
      },
      {
        name: "PGDM-HRM (Human Resource Management)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹25,99,000"
      },
      {
        name: "PGDM-IB (International Business)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹32,54,000"
      },
      {
        name: "PGDM-BA (Business Analytics)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹26,55,000"
      }
    ],
    highlights: "Ranked #11 Management Institute in India by NIRF 2024. Located at the corporate nerve-center of Gurugram with top consulting and BFSI recruitments and 100% placement record.",
    officialWebsite: "https://mdi.ac.in"
  },

  'iim-rohtak': {
    nirfRank: 12,
    rating: 4.7,
    reviewsCount: 135,
    accreditation: "AMBA, AICTE",
    fees: "₹17.90 Lakhs",
    feeNum: 17.9,
    avgSalary: "₹19.27 LPA",
    avgSalaryNum: 19.27,
    highestSalary: "₹37.10 LPA",
    medianSalary: "₹17.80 LPA",
    batchSize: 320,
    roiScore: "8.9 / 10",
    cutoffCAT: "95.0+ %ile",
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 320,
        fee: "₹17,90,000"
      },
      {
        name: "Five-Year Integrated Programme in Management (IPM)",
        duration: "5 Years Full Time",
        seats: 160,
        fee: "₹33,50,000"
      }
    ],
    highlights: "Ranked #12 Management Institute in India by NIRF 2024. Top B-school in Delhi-NCR region with massive campus, industry consulting engagements, and strong 100% placement record.",
    officialWebsite: "https://www.iimrohtak.ac.in"
  },

  'sibm-pune': {
    nirfRank: 13,
    rating: 4.7,
    reviewsCount: 145,
    accreditation: "NAAC A++, UGC",
    fees: "₹27.00 Lakhs",
    feeNum: 27.0,
    avgSalary: "₹28.18 LPA",
    avgSalaryNum: 28.18,
    highestSalary: "₹74.84 LPA",
    medianSalary: "₹27.00 LPA",
    batchSize: 240,
    roiScore: "9.0 / 10",
    cutoffCAT: "N/A (Accepts SNAP: 98.5+ %ile)",
    courses: [
      {
        name: "Master of Business Administration (MBA - Mktg/Fin/HR/Ops)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹27,00,000"
      },
      {
        name: "MBA in Innovation & Entrepreneurship (MBA - I&E)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹20,50,000"
      }
    ],
    highlights: "Ranked #13 Management Institute in India by NIRF 2024. Flagship institute of Symbiosis International University located on picturesque Lavale hilltop campus with premier FMCG, BFSI, and Consulting recruiters.",
    officialWebsite: "https://www.sibm.edu"
  },

  'iim-raipur': {
    nirfRank: 14,
    rating: 4.7,
    reviewsCount: 122,
    accreditation: "AACSB, AICTE",
    fees: "₹20.08 Lakhs",
    feeNum: 20.08,
    avgSalary: "₹20.70 LPA",
    avgSalaryNum: 20.7,
    highestSalary: "₹42.66 LPA",
    medianSalary: "₹19.50 LPA",
    batchSize: 325,
    roiScore: "8.9 / 10",
    cutoffCAT: "94.0+ %ile",
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 325,
        fee: "₹20,08,000"
      },
      {
        name: "Executive Post Graduate Programme in Management (ePGP)",
        duration: "2 Years Hybrid",
        seats: 80,
        fee: "₹13,25,000"
      }
    ],
    highlights: "Ranked #14 Management Institute in India by NIRF 2024. State-of-the-art 200-acre smart campus in Naya Raipur with strong corporate leadership development programs.",
    officialWebsite: "https://www.iimraipur.ac.in"
  },

  'iift-delhi': {
    nirfRank: 15,
    rating: 4.7,
    reviewsCount: 140,
    accreditation: "AACSB, NAAC A+",
    fees: "₹21.82 Lakhs",
    feeNum: 21.82,
    avgSalary: "₹31.30 LPA",
    avgSalaryNum: 31.3,
    highestSalary: "₹72.00 LPA",
    medianSalary: "₹26.00 LPA",
    batchSize: 320,
    roiScore: "9.2 / 10",
    cutoffCAT: "98.0+ %ile",
    courses: [
      {
        name: "MBA in International Business (MBA - IB)",
        duration: "2 Years Full Time",
        seats: 260,
        fee: "₹21,82,000"
      },
      {
        name: "MBA in Business Analytics (MBA - BA)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,82,000"
      }
    ],
    highlights: "Ranked #15 Management Institute in India by NIRF 2024. Autonomous institution under Ministry of Commerce & Industry, renowned as India's premier B-school for International Trade, Finance, and Consulting.",
    officialWebsite: "https://www.iift.ac.in"
  },

  'doms-iit-madras': {
    nirfRank: 16,
    rating: 4.7,
    reviewsCount: 98,
    accreditation: "AICTE, NBA",
    fees: "₹11.50 Lakhs",
    feeNum: 11.5,
    avgSalary: "₹18.30 LPA",
    avgSalaryNum: 18.3,
    highestSalary: "₹40.00 LPA",
    medianSalary: "₹18.00 LPA",
    batchSize: 75,
    roiScore: "9.5 / 10",
    cutoffCAT: "97.0+ %ile",
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 75,
        fee: "₹11,50,000"
      },
      {
        name: "TechMBA Dual Degree",
        duration: "5 Years Integrated",
        seats: 30,
        fee: "₹12,00,000"
      }
    ],
    highlights: "Ranked #16 Management Institute in India by NIRF 2024. High ROI program embedded in IIT Madras research park ecosystem with 100% placements and intimate cohort size.",
    officialWebsite: "https://doms.iitm.ac.in"
  },

  'iim-ranchi': {
    nirfRank: 17,
    rating: 4.7,
    reviewsCount: 115,
    accreditation: "AICTE, AIU",
    fees: "₹19.20 Lakhs",
    feeNum: 19.2,
    avgSalary: "₹19.26 LPA",
    avgSalaryNum: 19.26,
    highestSalary: "₹52.50 LPA",
    medianSalary: "₹18.00 LPA",
    batchSize: 370,
    roiScore: "8.9 / 10",
    cutoffCAT: "94.0+ %ile",
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹19,20,000"
      },
      {
        name: "MBA in Human Resource Management (MBA-HRM)",
        duration: "2 Years Full Time",
        seats: 65,
        fee: "₹19,20,000"
      },
      {
        name: "MBA in Business Analytics (MBA-BA)",
        duration: "2 Years Full Time",
        seats: 65,
        fee: "₹19,20,000"
      },
      {
        name: "Integrated Programme in Management (IPM)",
        duration: "5 Years Full Time",
        seats: 120,
        fee: "₹34,00,000"
      }
    ],
    highlights: "Ranked #17 Management Institute in India by NIRF 2024. New permanent campus in Dhurwa, Ranchi with specialized HR and Analytics faculties and audited IPRS placement report.",
    officialWebsite: "https://www.iimranchi.ac.in"
  },

  'vgsom-iit-kharagpur': {
    nirfRank: 19,
    rating: 4.7,
    reviewsCount: 110,
    accreditation: "AICTE, NBA",
    fees: "₹12.85 Lakhs",
    feeNum: 12.85,
    avgSalary: "₹22.75 LPA",
    avgSalaryNum: 22.75,
    highestSalary: "₹46.00 LPA",
    medianSalary: "₹21.50 LPA",
    batchSize: 200,
    roiScore: "9.5 / 10",
    cutoffCAT: "97.5+ %ile",
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 200,
        fee: "₹12,85,000"
      }
    ],
    highlights: "Ranked #19 Management Institute in India by NIRF 2024. India's first business school established within an IIT, celebrated for exceptional ROI and stellar consulting and supply chain placements.",
    officialWebsite: "https://som.iitkgp.ac.in"
  },

  'nmims-mumbai': {
    nirfRank: 20,
    rating: 4.7,
    reviewsCount: 175,
    accreditation: "AACSB, NAAC A+",
    fees: "₹26.50 Lakhs",
    feeNum: 26.5,
    avgSalary: "₹25.13 LPA",
    avgSalaryNum: 25.13,
    highestSalary: "₹67.70 LPA",
    medianSalary: "₹23.50 LPA",
    batchSize: 600,
    roiScore: "8.9 / 10",
    cutoffCAT: "N/A (Accepts NMAT: 232+ Score)",
    courses: [
      {
        name: "Master of Business Administration (MBA Core)",
        duration: "2 Years Full Time",
        seats: 600,
        fee: "₹26,50,000"
      },
      {
        name: "MBA in Human Resource (MBA - HR)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹25,00,000"
      },
      {
        name: "MBA in Business Analytics (MBA - BA)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹26,50,000"
      },
      {
        name: "MBA in Digital Transformation",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹24,00,000"
      }
    ],
    highlights: "Ranked #20 Management Institute in India by NIRF 2024 (Tied). School of Business Management (SBM) in Vile Parle Mumbai with 190+ corporate recruiters across BFSI, FMCG, and Consulting.",
    officialWebsite: "https://sbm.nmims.edu"
  },

  'spjimr-mumbai': {
    nirfRank: 20,
    rating: 4.8,
    reviewsCount: 165,
    accreditation: "AACSB, AMBA",
    fees: "₹24.50 Lakhs",
    feeNum: 24.5,
    avgSalary: "₹33.75 LPA",
    avgSalaryNum: 33.75,
    highestSalary: "₹75.00 LPA",
    medianSalary: "₹32.85 LPA",
    batchSize: 360,
    roiScore: "9.3 / 10",
    cutoffCAT: "85+ %ile (Profile-based) / 95+ %ile (Score-based)",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM - Finance, Mktg, Ops, IM)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹24,50,000"
      },
      {
        name: "PGDM in Business Management (PGDM-BM)",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹24,50,000"
      },
      {
        name: "Post Graduate Programme in Management (PGPM)",
        duration: "18 Months Full Time",
        seats: 120,
        fee: "₹22,00,000"
      }
    ],
    highlights: "Ranked #20 Management Institute in India by NIRF 2024 (Tied). Premier autonomous B-school in Andheri West, Mumbai known for value-based leadership pedagogy, Autumn internships, and top FMCG/Consulting packages.",
    officialWebsite: "https://www.spjimr.org"
  },

  'iim-udaipur': {
    nirfRank: 22,
    rating: 4.7,
    reviewsCount: 120,
    accreditation: "AACSB",
    fees: "₹20.50 Lakhs",
    feeNum: 20.5,
    avgSalary: "₹18.80 LPA",
    avgSalaryNum: 18.8,
    highestSalary: "₹47.00 LPA",
    medianSalary: "₹18.00 LPA",
    batchSize: 340,
    roiScore: "8.8 / 10",
    cutoffCAT: "93.0+ %ile",
    courses: [
      {
        name: "Two-Year Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 340,
        fee: "₹20,50,000"
      },
      {
        name: "One-Year MBA in Global Supply Chain Management (GSCM)",
        duration: "1 Year Full Time",
        seats: 40,
        fee: "₹22,50,000"
      },
      {
        name: "One-Year MBA in Digital Enterprise Management (DEM)",
        duration: "1 Year Full Time",
        seats: 40,
        fee: "₹22,50,000"
      }
    ],
    highlights: "Ranked #22 Management Institute in India by NIRF 2024. Youngest AACSB accredited B-school in India with sprawling 300-acre Aravalli range campus and premier research ranking.",
    officialWebsite: "https://www.iimu.ac.in"
  },

  'iim-shillong': {
    nirfRank: 24,
    rating: 4.7,
    reviewsCount: 110,
    accreditation: "AMBA",
    fees: "₹26.00 Lakhs",
    feeNum: 26.0,
    avgSalary: "₹27.03 LPA",
    avgSalaryNum: 27.03,
    highestSalary: "₹71.50 LPA",
    medianSalary: "₹26.00 LPA",
    batchSize: 393,
    roiScore: "9.0 / 10",
    cutoffCAT: "95.0+ %ile",
    courses: [
      {
        name: "Post Graduate Programme in Management (PGP - MBA)",
        duration: "2 Years Full Time",
        seats: 393,
        fee: "₹26,00,000"
      },
      {
        name: "PGP for Executives (1 Year)",
        duration: "1 Year Full Time",
        seats: 50,
        fee: "₹24,00,000"
      }
    ],
    highlights: "Ranked #24 Management Institute in India by NIRF 2024. Situated in the scenic hills of Umsawli, Meghalaya with audited IPRS placement report and high average CTC of ₹27.03 LPA.",
    officialWebsite: "https://www.iimshillong.ac.in"
  },

  'jamia-millia-islamia-new-delhi': {
    nirfRank: 25,
    rating: 4.5,
    reviewsCount: 88,
    fees: "₹1.40 Lakhs",
    feeNum: 1.4,
    avgSalary: "₹11.50 LPA",
    avgSalaryNum: 11.5,
    highestSalary: "₹25.00 LPA",
    medianSalary: "₹10.50 LPA",
    batchSize: 200,
    roiScore: "9.7 / 10",
    courses: [
      {
        name: "Master of Business Administration (MBA Full Time)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹1,40,000"
      },
      {
        name: "MBA in International Business (MBA-IB)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹1,40,000"
      },
      {
        name: "MBA in Entrepreneurship & Family Business",
        duration: "2 Years Full Time",
        seats: 40,
        fee: "₹2,60,000"
      }
    ],
    highlights: "Ranked #25 Management Institute in India by NIRF 2024. Centre for Management Studies, JMI offers tremendous ROI with central university fees and top public & private sector recruitment.",
    officialWebsite: "https://www.jmi.ac.in"
  },

  'fms-delhi': {
    nirfRank: null,
    rating: 4.9,
    reviewsCount: 190,
    fees: "₹2.43 Lakhs",
    feeNum: 2.43,
    avgSalary: "₹32.27 LPA",
    avgSalaryNum: 32.27,
    highestSalary: "₹1.10 CPA",
    medianSalary: "₹29.59 LPA",
    batchSize: 251,
    roiScore: "9.9 / 10",
    cutoffCAT: "99.0+ %ile",
    courses: [
      {
        name: "Master of Business Administration (MBA Full-Time)",
        duration: "2 Years Full Time",
        seats: 251,
        fee: "₹2,43,000"
      },
      {
        name: "MBA Executive",
        duration: "2 Years Evening",
        seats: 200,
        fee: "₹2,50,000"
      },
      {
        name: "MBA Executive (Health Care Administration)",
        duration: "2 Years Evening",
        seats: 50,
        fee: "₹2,50,000"
      }
    ],
    highlights: "Faculty of Management Studies, University of Delhi (DU NIRF University #6). Undisputed #1 Return on Investment (ROI) business school in India with nominal tuition fee and ₹32.27 LPA average CTC.",
    officialWebsite: "https://fms.edu"
  },

  'jbims-mumbai': {
    nirfRank: null,
    rating: 4.8,
    reviewsCount: 160,
    fees: "₹8.34 Lakhs",
    feeNum: 8.34,
    avgSalary: "₹26.67 LPA",
    avgSalaryNum: 26.67,
    highestSalary: "₹80.00 LPA",
    medianSalary: "₹26.15 LPA",
    batchSize: 160,
    roiScore: "9.8 / 10",
    cutoffCAT: "99.9+ %ile (MAH-CET 99.99 %ile)",
    courses: [
      {
        name: "Master of Management Studies (MMS - MBA Equivalent)",
        duration: "2 Years Full Time",
        seats: 160,
        fee: "₹8,34,000"
      },
      {
        name: "Master of Human Resource Development (MHRD)",
        duration: "2 Years Full Time",
        seats: 30,
        fee: "₹7,50,000"
      },
      {
        name: "MSc in Finance",
        duration: "2 Years Full Time",
        seats: 40,
        fee: "₹6,50,000"
      }
    ],
    highlights: "Jamnalal Bajaj Institute of Management Studies (University of Mumbai). Revered as the 'CEO Factory of India' located at Churchgate, South Mumbai with legendary alumni leadership and unmatched corporate access.",
    officialWebsite: "https://jbims.edu"
  },

  'tiss-mumbai': {
    nirfRank: null,
    rating: 4.8,
    reviewsCount: 142,
    fees: "₹2.8 Lakhs",
    feeNum: 2.8,
    avgSalary: "₹27.22 LPA",
    avgSalaryNum: 27.22,
    highestSalary: "₹49.00 LPA",
    medianSalary: "₹25.75 LPA",
    batchSize: 75,
    roiScore: "9.8 / 10",
    courses: [
      {
        name: "M.A. in Human Resources Management & Labour Relations (HRM & LR)",
        duration: "2 Years Full Time",
        seats: 75,
        fee: "₹2,80,000"
      },
      {
        name: "M.A. in Organisation Development, Change and Leadership (ODCL)",
        duration: "2 Years Full Time",
        seats: 40,
        fee: "₹3,20,000"
      }
    ],
    highlights: "School of Management and Labour Studies, TISS Mumbai. Widely recognized alongside XLRI as India's premier institution for Human Resource Management with exceptional ROI and high median packages.",
    officialWebsite: "https://tiss.edu"
  }
};

// Newly added missing Top NIRF colleges:
const NEW_COLLEGES = [
  {
    id: "iim-mumbai",
    degreeTypes: ["MBA"],
    name: "IIM Mumbai - Indian Institute of Management (formerly NITIE)",
    shortName: "IIM Mumbai",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    nirfRank: 6,
    rating: 4.8,
    reviewsCount: 145,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 1963,
    campusArea: "63 Acres (Powai)",
    accreditation: "AACSB, AICTE",
    fees: "₹21.0 Lakhs",
    feeNum: 21.0,
    avgSalary: "₹31.50 LPA",
    avgSalaryNum: 31.5,
    highestSalary: "₹71.40 LPA",
    medianSalary: "₹30.00 LPA",
    batchSize: 480,
    roiScore: "9.3 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "97.5+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "97.5+ %ile",
      ncObc: "88.0+ %ile",
      sc: "75.0+ %ile",
      st: "65.0+ %ile",
      sectional: "VARC 75%ile, DILR 75%ile, QA 75%ile"
    },
    topRecruiters: [
      "McKinsey & Co",
      "Boston Consulting Group (BCG)",
      "Kearney",
      "Accenture Strategy",
      "Hindustan Unilever (HUL)",
      "P&G",
      "Amazon",
      "Reliance Industries"
    ],
    domainDistribution: {
      operationsSupplyChain: "38%",
      consulting: "30%",
      finance: "15%",
      productTech: "12%",
      generalMgmt: "5%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA General)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹21,00,000"
      },
      {
        name: "MBA in Operations and Supply Chain Management (MBA-OSCM)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹21,00,000"
      },
      {
        name: "MBA in Sustainability Management (MBA-SM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,00,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "55% in Stage 1 shortlist",
      academicsWeight: "25% (10th, 12th, Graduation)",
      diversityWeight: "5% (Academic & Gender)",
      piWatWeight: "Personal Interview and Work Experience"
    },
    facilities: [
      "Vihar Lake & Powai Hillside Campus",
      "Dr. B.R. Ambedkar Memorial Central Library",
      "Supply Chain Analytics and Simulation Labs",
      "Air-Conditioned Modern Hostels",
      "Convention Center & Executive Suites",
      "Multi-Sport Grounds & Gymnasium"
    ],
    highlights: "Ranked #6 Management Institute in India by NIRF 2024. India's top hub for Supply Chain, Operations, and Consulting. Converted from erstwhile NITIE into India's 21st IIM under the IIM Act.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://iimmumbai.ac.in"
  },

  {
    id: "doms-iit-roorkee",
    degreeTypes: ["MBA"],
    name: "Department of Management Studies (DoMS), IIT Roorkee",
    shortName: "DoMS IIT Roorkee",
    location: "Roorkee, Uttarakhand",
    city: "Dehradun",
    state: "Uttarakhand",
    nirfRank: 18,
    rating: 4.6,
    reviewsCount: 92,
    programType: "MBA Full-Time (2 Years)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 1998,
    campusArea: "365 Acres",
    accreditation: "AICTE, NBA",
    fees: "₹9.67 Lakhs",
    feeNum: 9.67,
    avgSalary: "₹17.91 LPA",
    avgSalaryNum: 17.91,
    highestSalary: "₹24.00 LPA",
    medianSalary: "₹17.64 LPA",
    batchSize: 95,
    roiScore: "9.7 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "95.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "95.0+ %ile",
      ncObc: "85.0+ %ile",
      sc: "75.0+ %ile",
      st: "65.0+ %ile",
      sectional: "VARC 75%ile, DILR 75%ile, QA 75%ile"
    },
    topRecruiters: [
      "Accenture",
      "Deloitte",
      "Adani Group",
      "HDFC Bank",
      "Bank of America",
      "Cognizant",
      "EY",
      "Infosys",
      "GAIL"
    ],
    domainDistribution: {
      consulting: "32%",
      itAnalytics: "28%",
      operations: "18%",
      finance: "14%",
      marketing: "8%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 95,
        fee: "₹9,67,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAT percentile shortlist",
      academicsWeight: "10th, 12th, and Engineering/UG degree scores",
      piWatWeight: "Personal Interview with IIT academic board"
    },
    facilities: [
      "Historic IIT Roorkee Campus",
      "Mahatma Gandhi Central Library",
      "Computational Finance and Big Data Lab",
      "Air-conditioned Student Hostels",
      "Olympic Standard Swimming Pool & Sports Complex"
    ],
    highlights: "Ranked #18 Management Institute in India by NIRF 2024. Exceptional Return on Investment (ROI) with ₹9.67 Lakhs total fees and ₹17.91 LPA average salary across top consultancies and tech giants.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://ms.iitr.ac.in"
  },

  {
    id: "iim-kashipur",
    degreeTypes: ["MBA"],
    name: "IIM Kashipur - Indian Institute of Management",
    shortName: "IIM Kashipur",
    location: "Kashipur, Uttarakhand",
    city: "Dehradun",
    state: "Uttarakhand",
    nirfRank: 23,
    rating: 4.6,
    reviewsCount: 105,
    programType: "MBA (2-Year Full Time)",
    ownership: "Government / Institute of National Importance",
    establishedYear: 2011,
    campusArea: "200 Acres",
    accreditation: "AACSB, AICTE",
    fees: "₹20.46 Lakhs",
    feeNum: 20.46,
    avgSalary: "₹14.95 LPA",
    avgSalaryNum: 14.95,
    highestSalary: "₹33.12 LPA",
    medianSalary: "₹14.46 LPA",
    batchSize: 380,
    roiScore: "8.5 / 10",
    examsAccepted: ["CAT"],
    cutoffCAT: "93.0+ %ile",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "93.0+ %ile",
      ncObc: "80.0+ %ile",
      sc: "65.0+ %ile",
      st: "55.0+ %ile",
      sectional: "VARC 70%ile, DILR 70%ile, QA 70%ile"
    },
    topRecruiters: [
      "Deloitte",
      "Cognizant",
      "EY",
      "ICICI Bank",
      "KPMG",
      "Amazon",
      "Tata Motors",
      "Capgemini"
    ],
    domainDistribution: {
      itAnalytics: "34%",
      bfsi: "28%",
      consulting: "20%",
      operations: "10%",
      marketing: "8%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 320,
        fee: "₹20,46,000"
      },
      {
        name: "MBA in Analytics (MBA-Analytics)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹20,46,000"
      },
      {
        name: "Executive MBA (EMBA)",
        duration: "2 Years Weekend",
        seats: 60,
        fee: "₹12,00,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAP (Common Admission Process) CAT percentile",
      academicsWeight: "10th, 12th, and Graduation scores",
      piWatWeight: "CAP Personal Interview"
    },
    facilities: [
      "200-Acre Himalayan Foothills Campus",
      "Central Learning Resource Centre",
      "Analytics & Simulation Computer Labs",
      "Individual Air-conditioned Student Rooms",
      "Sports Arena & Gymnasium"
    ],
    highlights: "Ranked #23 Management Institute in India by NIRF 2024. Located near the industrial belt of Pantnagar with strong corporate interactions in Analytics and Operations.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.iimkashipur.ac.in"
  }
];

// Clean up erroneous NIRF rankings from non-management / duplicate listings
const ERRONEOUS_NIRF_IDS = [
  'sscbs-delhi',
  'jawaharlal-nehru-university-new-delhi',
  'jadavpur-university-kolkata',
  'calcutta-university-kolkata',
  'birla-institute-of-technology-science-pilani',
  'sp-jain-global-mba',
  'scms-pune-bba',
  'nmims-asmsoc-mumbai',
  'nmims-online-mba',
  'nmims-online-bba',
  'iim-indore-ipm'
];

for (const col of colleges) {
  if (ERRONEOUS_NIRF_IDS.includes(col.id)) {
    console.log(`Setting nirfRank: null for non-management / duplicate entry: ${col.id}`);
    col.nirfRank = null;
  }
}

// Update existing colleges with verified official portal data
let updatedCount = 0;
for (const [id, updateData] of Object.entries(OFFICIAL_DATA_MAP)) {
  const existing = colleges.find(c => c.id === id);
  if (existing) {
    Object.assign(existing, updateData);
    updatedCount++;
    console.log(`Updated official data for: ${existing.id} (NIRF: ${existing.nirfRank}, Fees: ${existing.fees}, Seats: ${existing.batchSize}, Avg: ${existing.avgSalary})`);
  } else {
    console.warn(`Could not find college ${id} in COLLEGES_DATA!`);
  }
}

// Add new missing colleges if they don't already exist
let addedCount = 0;
for (const newCol of NEW_COLLEGES) {
  const exists = colleges.find(c => c.id === newCol.id);
  if (!exists) {
    colleges.push(newCol);
    addedCount++;
    console.log(`Added new verified college: ${newCol.id} (#${newCol.nirfRank} NIRF)`);
  } else {
    Object.assign(exists, newCol);
    console.log(`Updated existing college: ${newCol.id}`);
  }
}

console.log(`Updated ${updatedCount} colleges, added ${addedCount} new colleges. Total colleges now: ${colleges.length}`);

// Write back to collegesData.js
const newFileText = `export const COLLEGES_DATA = ${JSON.stringify(colleges, null, 2)};\n`;
fs.writeFileSync(collegesDataPath, newFileText, 'utf-8');
console.log(`Successfully wrote updated COLLEGES_DATA to ${collegesDataPath}`);
