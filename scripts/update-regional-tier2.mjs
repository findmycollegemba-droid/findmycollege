import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const collegesDataPath = path.resolve(__dirname, '../src/data/collegesData.js');

const fileText = fs.readFileSync(collegesDataPath, 'utf-8');
const jsonMatch = fileText.match(/export const COLLEGES_DATA = (\[[\s\S]*\]);?\s*$/);
if (!jsonMatch) {
  console.error("Could not parse COLLEGES_DATA");
  process.exit(1);
}

const colleges = JSON.parse(jsonMatch[1]);
console.log(`Initial colleges: ${colleges.length}`);

const REGIONAL_UPDATES = {
  'bimtech-noida': {
    nirfRank: 48,
    rating: 4.6,
    reviewsCount: 135,
    accreditation: "AACSB, NBA, AIU",
    fees: "₹14.00 Lakhs",
    feeNum: 14.0,
    avgSalary: "₹11.10 LPA",
    avgSalaryNum: 11.1,
    highestSalary: "₹22.00 LPA",
    medianSalary: "₹10.50 LPA",
    batchSize: 420,
    roiScore: "8.7 / 10",
    cutoffCAT: "75.0+ %ile",
    cutoffXAT: "75.0+ %ile",
    cutoffCMAT: "85.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM General)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹14,00,000"
      },
      {
        name: "PGDM in International Business (PGDM-IB)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹14,00,000"
      },
      {
        name: "PGDM in Insurance Business Management (PGDM-IBM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹14,00,000"
      },
      {
        name: "PGDM in Retail Management (PGDM-RM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹14,00,000"
      }
    ],
    highlights: "Ranked #48 Management Institute in India by NIRF 2024. Birla Institute of Management Technology at Knowledge Park II Greater Noida holds coveted AACSB accreditation with 100% placement track record.",
    officialWebsite: "https://www.bimtech.ac.in"
  },

  'lbsim-delhi': {
    nirfRank: 60,
    rating: 4.5,
    reviewsCount: 125,
    accreditation: "NBA, AIU",
    fees: "₹17.25 Lakhs",
    feeNum: 17.25,
    avgSalary: "₹12.32 LPA",
    avgSalaryNum: 12.32,
    highestSalary: "₹24.00 LPA",
    medianSalary: "₹11.80 LPA",
    batchSize: 360,
    roiScore: "8.6 / 10",
    cutoffCAT: "83.0+ %ile",
    cutoffXAT: "83.0+ %ile",
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM General)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹17,25,000"
      },
      {
        name: "PGDM in Financial Management (PGDM-FM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹17,25,000"
      },
      {
        name: "PGDM in Research and Business Analytics (PGDM-RBA)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹17,25,000"
      },
      {
        name: "PGDM in Artificial Intelligence & Data Science",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹17,25,000"
      }
    ],
    highlights: "Ranked #60 Management Institute in India by NIRF 2024. Lal Bahadur Shastri Institute of Management, Dwarka, New Delhi is renowned for values-driven education and top BFSI recruitment.",
    officialWebsite: "https://www.lbsim.ac.in"
  },

  'pumba-pune': {
    nirfRank: 55,
    rating: 4.6,
    reviewsCount: 120,
    accreditation: "NAAC A+, UGC",
    fees: "₹2.45 Lakhs",
    feeNum: 2.45,
    avgSalary: "₹11.23 LPA",
    avgSalaryNum: 11.23,
    highestSalary: "₹19.00 LPA",
    medianSalary: "₹10.80 LPA",
    batchSize: 180,
    roiScore: "9.8 / 10",
    cutoffCAT: "95.0+ %ile (MAH-CET: 99.2+ %ile)",
    courses: [
      {
        name: "Master of Business Administration (MBA General)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹2,45,000"
      },
      {
        name: "MBA in Pharma-Biotechnology (MBA-PBT)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹2,45,000"
      }
    ],
    highlights: "Department of Management Sciences, Savitribai Phule Pune University. One of India's earliest university business departments offering premier ROI with ₹2.45L fees and ₹11.23 LPA average CTC.",
    officialWebsite: "https://www.pumba.in"
  }
};

const NEW_REGIONAL = [
  {
    id: "siib-pune",
    degreeTypes: ["MBA"],
    name: "Symbiosis Institute of International Business (SIIB)",
    shortName: "SIIB Pune",
    location: "Hinjawadi, Pune, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    nirfRank: null,
    rating: 4.6,
    reviewsCount: 120,
    programType: "MBA (2-Year Full Time)",
    ownership: "Private Deemed University (Symbiosis International)",
    establishedYear: 1992,
    campusArea: "10 Acres (Infotech Park Hinjawadi)",
    accreditation: "NAAC A++, UGC",
    fees: "₹20.50 Lakhs",
    feeNum: 20.5,
    avgSalary: "₹15.64 LPA",
    avgSalaryNum: 15.64,
    highestSalary: "₹27.60 LPA",
    medianSalary: "₹14.80 LPA",
    batchSize: 240,
    roiScore: "8.8 / 10",
    examsAccepted: ["SNAP"],
    cutoffCAT: "N/A (Accepts SNAP: 93.0+ %ile)",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "SNAP 93.0+ %ile",
      ncObc: "Category reservation as per SIU guidelines",
      sc: "Category reservation as per SIU guidelines",
      st: "Category reservation as per SIU guidelines",
      sectional: "Balanced SNAP sectional score"
    },
    topRecruiters: [
      "Deloitte",
      "Accenture",
      "KPMG",
      "EY",
      "HDFC Bank",
      "Wipro",
      "Darashaw",
      "ITC"
    ],
    domainDistribution: {
      consulting: "32%",
      bfsi: "28%",
      itAnalytics: "22%",
      agriBusiness: "10%",
      sustainability: "8%"
    },
    courses: [
      {
        name: "MBA in International Business (MBA-IB)",
        duration: "2 Years Full Time",
        seats: 150,
        fee: "₹20,50,000"
      },
      {
        name: "MBA in Agri-Business (MBA-AB)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹18,50,000"
      },
      {
        name: "MBA in Energy & Environment (MBA-E&E)",
        duration: "2 Years Full Time",
        seats: 30,
        fee: "₹18,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "SNAP Exam score (50% weight)",
      academicsWeight: "GE-PIWAT (50% weight across Group Exercise and Personal Interview)",
      piWatWeight: "Personal Interview and Writing Ability Test"
    },
    facilities: [
      "Hinjawadi IT Park Modern Campus",
      "Central Digital Library",
      "Finance and Data Analytics Lab",
      "On-Campus Residential Hostels",
      "Gymnasium, Swimming Pool & Sports Facilities"
    ],
    highlights: "Symbiosis Institute of International Business in Hinjawadi, Pune. Pioneer in International Business, Agri-Business, and ESG Sustainability management with 100% placement track record.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://siib.ac.in"
  },

  {
    id: "sibm-bangalore",
    degreeTypes: ["MBA"],
    name: "Symbiosis Institute of Business Management (SIBM) Bengaluru",
    shortName: "SIBM Bengaluru",
    location: "Electronic City, Bengaluru, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    nirfRank: null,
    rating: 4.6,
    reviewsCount: 115,
    programType: "MBA (2-Year Full Time)",
    ownership: "Private Deemed University (Symbiosis International)",
    establishedYear: 2008,
    campusArea: "15 Acres (Electronic City Phase 1)",
    accreditation: "NAAC A++, UGC",
    fees: "₹21.00 Lakhs",
    feeNum: 21.0,
    avgSalary: "₹14.47 LPA",
    avgSalaryNum: 14.47,
    highestSalary: "₹24.00 LPA",
    medianSalary: "₹13.75 LPA",
    batchSize: 240,
    roiScore: "8.7 / 10",
    examsAccepted: ["SNAP"],
    cutoffCAT: "N/A (Accepts SNAP: 90.0+ %ile)",
    cutoffXAT: "N/A",
    cutoffCMAT: "N/A",
    cutoffDetails: {
      general: "SNAP 90.0+ %ile",
      ncObc: "SIU reservation norms",
      sc: "SIU reservation norms",
      st: "SIU reservation norms",
      sectional: "Balanced score across General English, Analytical & QA"
    },
    topRecruiters: [
      "Accenture",
      "Capgemini",
      "Deloitte",
      "HDFC Bank",
      "KPMG",
      "JPMorgan Chase",
      "Morgan Stanley",
      "Wipro"
    ],
    domainDistribution: {
      marketing: "32%",
      finance: "30%",
      consulting: "20%",
      operations: "10%",
      hr: "8%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA General)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹21,00,000"
      },
      {
        name: "MBA in Business Analytics",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹21,00,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "SNAP Exam score (50%)",
      academicsWeight: "Academic evaluation",
      piWatWeight: "GE-PIWAT rounds (50%)"
    },
    facilities: [
      "Modern Electronic City Tech-Hub Campus",
      "Central Digital Knowledge Center",
      "Bloomberg Financial Market Lab",
      "Full AC Hostels and Recreation Areas",
      "Multi-Cuisine Cafeteria & Gymnasium"
    ],
    highlights: "Located in the heart of Bengaluru's Electronic City tech corridor. Combines Symbiosis brand excellence with strong industry internships and corporate placements.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.sibmbengaluru.edu.in"
  },

  {
    id: "nl-dalmia-mumbai",
    degreeTypes: ["PGDM"],
    name: "N. L. Dalmia Institute of Management Studies and Research",
    shortName: "N.L. Dalmia Mumbai",
    location: "Mira Road, Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    nirfRank: null,
    rating: 4.5,
    reviewsCount: 130,
    programType: "PGDM (2-Year Full Time)",
    ownership: "Private Autonomous",
    establishedYear: 1995,
    campusArea: "5 Acres",
    accreditation: "AICTE, NBA, AIU",
    fees: "₹16.50 Lakhs",
    feeNum: 16.5,
    avgSalary: "₹10.20 LPA",
    avgSalaryNum: 10.2,
    highestSalary: "₹24.00 LPA",
    medianSalary: "₹9.52 LPA",
    batchSize: 300,
    roiScore: "8.5 / 10",
    examsAccepted: ["CAT", "XAT", "CMAT", "MAH-CET"],
    cutoffCAT: "75.0+ %ile",
    cutoffXAT: "75.0+ %ile",
    cutoffCMAT: "85.0+ %ile",
    cutoffDetails: {
      general: "CAT 75%ile, CMAT 85%ile, MAH-CET 85%ile",
      ncObc: "Eligible for category waivers",
      sc: "Eligible for category waivers",
      st: "Eligible for category waivers",
      sectional: "Overall score considered"
    },
    topRecruiters: [
      "Deutsche Bank",
      "Aditya Birla Capital",
      "Hindustan Unilever (HUL)",
      "ICICI Bank",
      "Kotak Mahindra Bank",
      "Deloitte",
      "EY",
      "Crisil"
    ],
    domainDistribution: {
      finance: "45%",
      marketing: "25%",
      itAnalytics: "18%",
      hr: "12%"
    },
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM Finance/Mktg/HR)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹16,50,000"
      },
      {
        name: "PGDM in Business Analytics",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹16,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "Entrance Exam (CAT/XAT/CMAT/MH-CET) 40%",
      academicsWeight: "Past academic records 20%",
      piWatWeight: "Personal Interview & GD 30%, Work Ex 10%"
    },
    facilities: [
      "South Asia's Largest Bloomberg Lab (24 Terminals)",
      "State-of-the-art Digital Management Library",
      "Smart Interactive Auditoriums",
      "Sports and Cultural Activity Complex"
    ],
    highlights: "Renowned as Mumbai's top finance powerhouse with India's largest Bloomberg Finance Lab (24 terminals) and extensive investment banking placement footprint.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.nldalmia.in"
  },

  {
    id: "ifmr-gsb-chennai",
    degreeTypes: ["MBA"],
    name: "IFMR Graduate School of Business, Krea University",
    shortName: "IFMR GSB (Krea University)",
    location: "Sri City, Andhra Pradesh (Near Chennai)",
    city: "Chennai",
    state: "Andhra Pradesh",
    nirfRank: null,
    rating: 4.6,
    reviewsCount: 110,
    programType: "MBA (2-Year Full Time Residential)",
    ownership: "Private University (Krea University)",
    establishedYear: 1970,
    campusArea: "40 Acres (Sri City SEZ)",
    accreditation: "SAQS, AICTE",
    fees: "₹14.50 Lakhs",
    feeNum: 14.5,
    avgSalary: "₹13.04 LPA",
    avgSalaryNum: 13.04,
    highestSalary: "₹17.22 LPA",
    medianSalary: "₹13.00 LPA",
    batchSize: 240,
    roiScore: "8.9 / 10",
    examsAccepted: ["CAT", "XAT", "CMAT", "NMAT", "GMAT"],
    cutoffCAT: "75.0+ %ile",
    cutoffXAT: "75.0+ %ile",
    cutoffCMAT: "85.0+ %ile",
    cutoffDetails: {
      general: "CAT 75%ile, XAT 75%ile, CMAT 85%ile, NMAT 222+",
      ncObc: "Merit based evaluation",
      sc: "Merit based evaluation",
      st: "Merit based evaluation",
      sectional: "Balanced scores"
    },
    topRecruiters: [
      "JPMorgan Chase",
      "Bank of America",
      "BNY Mellon",
      "Deloitte",
      "PwC",
      "Ernst & Young",
      "Morgan Stanley",
      "Barclays"
    ],
    domainDistribution: {
      finance: "44%",
      consulting: "24%",
      itAnalytics: "18%",
      marketing: "10%",
      hr: "4%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years Full Time",
        seats: 240,
        fee: "₹14,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "CAT/XAT/CMAT/NMAT score evaluation",
      academicsWeight: "Class 10, 12, and Graduation performance",
      piWatWeight: "Personal Interview and Writing Ability Test"
    },
    facilities: [
      "40-Acre Modern Smart Campus at Sri City SEZ",
      "Finance Research Center and Data Analytics Lab",
      "Fully Air-conditioned Student Dormitories",
      "Sports Arena, Badminton & Tennis Courts"
    ],
    highlights: "Founded by ICICI, House of Kotharis, and eminent industrialists. Celebrated as South India's premier quantitative finance, economics, and analytics management school.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://krea.edu.in/ifmrgsb"
  },

  {
    id: "christ-university-bangalore",
    degreeTypes: ["MBA"],
    name: "School of Business and Management, Christ (Deemed to be University)",
    shortName: "Christ University MBA",
    location: "Hosur Road, Bengaluru, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    nirfRank: 60,
    rating: 4.5,
    reviewsCount: 165,
    programType: "MBA (2-Year Full Time)",
    ownership: "Private Deemed-to-be-University",
    establishedYear: 1969,
    campusArea: "25 Acres (Central Campus, Hosur Road)",
    accreditation: "NAAC A+, UGC",
    fees: "₹11.50 Lakhs",
    feeNum: 11.5,
    avgSalary: "₹10.70 LPA",
    avgSalaryNum: 10.7,
    highestSalary: "₹43.00 LPA",
    medianSalary: "₹10.00 LPA",
    batchSize: 600,
    roiScore: "8.6 / 10",
    examsAccepted: ["CAT", "MAT", "CMAT", "XAT", "ATMA"],
    cutoffCAT: "70.0+ %ile",
    cutoffXAT: "70.0+ %ile",
    cutoffCMAT: "75.0+ %ile",
    cutoffDetails: {
      general: "MAT 500+ composite score, CAT/XAT 70%ile, CMAT 75%ile",
      ncObc: "Standard university eligibility criteria",
      sc: "Standard university eligibility criteria",
      st: "Standard university eligibility criteria",
      sectional: "Overall score plus Christ University Micro Presentation"
    },
    topRecruiters: [
      "Deloitte",
      "EY",
      "KPMG",
      "PwC",
      "Accenture",
      "Goldman Sachs",
      "HSBC",
      "Wells Fargo"
    ],
    domainDistribution: {
      finance: "34%",
      marketing: "32%",
      consulting: "18%",
      itAnalytics: "10%",
      hr: "6%"
    },
    courses: [
      {
        name: "Master of Business Administration (MBA General)",
        duration: "2 Years Full Time",
        seats: 480,
        fee: "₹11,50,000"
      },
      {
        name: "MBA in Business Analytics",
        duration: "2 Years Full Time",
        seats: 120,
        fee: "₹11,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "Entrance test score (CAT/MAT/CMAT)",
      academicsWeight: "Class 10, 12, and Degree performance",
      piWatWeight: "Micro Presentation (MP) and Personal Interview (PI)"
    },
    facilities: [
      "Iconic Central Green Campus on Hosur Road",
      "Knowledge Centre Multi-Floor Central Library",
      "Modern Smart Audio-Visual Amphitheatres",
      "On-Campus Hostels, Sports Complexes & Cafeterias"
    ],
    highlights: "School of Business and Management at Christ University, Bengaluru. One of South India's most popular MBA destinations with rigorous academic discipline and top corporate placements.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.christuniversity.in"
  },

  {
    id: "jims-rohini-delhi",
    degreeTypes: ["PGDM"],
    name: "Jagan Institute of Management Studies (JIMS Rohini)",
    shortName: "JIMS Rohini",
    location: "Sector-5, Rohini, New Delhi",
    city: "Delhi-NCR",
    state: "Delhi",
    nirfRank: null,
    rating: 4.4,
    reviewsCount: 120,
    programType: "PGDM (2-Year Full Time)",
    ownership: "Private Autonomous",
    establishedYear: 1993,
    campusArea: "2 Acres",
    accreditation: "NAAC A, NBA, AIU",
    fees: "₹9.50 Lakhs",
    feeNum: 9.5,
    avgSalary: "₹8.50 LPA",
    avgSalaryNum: 8.5,
    highestSalary: "₹22.00 LPA",
    medianSalary: "₹8.00 LPA",
    batchSize: 300,
    roiScore: "8.5 / 10",
    examsAccepted: ["CAT", "XAT", "CMAT", "MAT"],
    cutoffCAT: "70.0+ %ile",
    cutoffXAT: "70.0+ %ile",
    cutoffCMAT: "75.0+ %ile",
    cutoffDetails: {
      general: "CAT/XAT 70%ile, CMAT 75%ile, MAT 600+",
      ncObc: "Eligible for score waivers",
      sc: "Eligible for score waivers",
      st: "Eligible for score waivers",
      sectional: "Overall score considered"
    },
    topRecruiters: [
      "Deloitte",
      "KPMG",
      "Ameriprise Financial",
      "ICICI Bank",
      "HCL Technologies",
      "Nestle",
      "Amul"
    ],
    domainDistribution: {
      marketing: "38%",
      finance: "32%",
      itAnalytics: "18%",
      hr: "12%"
    },
    courses: [
      {
        name: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years Full Time",
        seats: 180,
        fee: "₹9,50,000"
      },
      {
        name: "PGDM in International Business (PGDM-IB)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹9,50,000"
      },
      {
        name: "PGDM in Retail Management (PGDM-RM)",
        duration: "2 Years Full Time",
        seats: 60,
        fee: "₹9,50,000"
      }
    ],
    admissionCriteria: {
      catScoreWeight: "Entrance Test score 35%",
      academicsWeight: "Past Academic Record 20%",
      piWatWeight: "Group Discussion & Personal Interview 45%"
    },
    facilities: [
      "Sector-5 Rohini Metro-Adjacent Campus",
      "Central Management Library",
      "Air-conditioned Smart Classrooms",
      "Digital Computer & Analytics Labs"
    ],
    highlights: "Jagan Institute of Management Studies (JIMS), Rohini Sector-5. Popular Delhi-NCR management institute offering strong Return on Investment with sub-₹10 Lakh fees.",
    admissionSession: "2027-2029",
    placementSession: "2025-2026 (Audited)",
    officialWebsite: "https://www.jimsindia.org"
  }
];

// Apply updates
let updatedCount = 0;
for (const [id, data] of Object.entries(REGIONAL_UPDATES)) {
  const existing = colleges.find(c => c.id === id);
  if (existing) {
    Object.assign(existing, data);
    updatedCount++;
    console.log(`Updated: ${existing.id} (${existing.shortName}) | Fees: ${existing.fees} | Batch: ${existing.batchSize} | Avg: ${existing.avgSalary}`);
  }
}

// Add new
let addedCount = 0;
for (const newCol of NEW_REGIONAL) {
  const existing = colleges.find(c => c.id === newCol.id);
  if (!existing) {
    colleges.push(newCol);
    addedCount++;
    console.log(`Added: ${newCol.id} (${newCol.shortName})`);
  } else {
    Object.assign(existing, newCol);
    console.log(`Updated existing: ${newCol.id}`);
  }
}

console.log(`Updated ${updatedCount} colleges, added ${addedCount} new colleges. Total colleges now: ${colleges.length}`);

fs.writeFileSync(collegesDataPath, `export const COLLEGES_DATA = ${JSON.stringify(colleges, null, 2)};\n`, 'utf-8');
console.log(`Successfully saved to ${collegesDataPath}`);
