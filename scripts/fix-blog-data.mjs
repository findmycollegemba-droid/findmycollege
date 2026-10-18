import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.resolve(__dirname, '../src/data/blogs');

console.log("Starting blog data verification and fix...");

// 1. Fix catPercentileBlogs.js
const catBlogPath = path.join(blogsDir, 'catPercentileBlogs.js');
let catText = fs.readFileSync(catBlogPath, 'utf-8');

// Fix 70 percentile table
const old70TableRegex = /\| College Name \| Flagship Program \| 2-Yr Total Fees \| Avg CTC \| Highest CTC \| CAT Cutoff \| Location \|[\s\S]*?\| \*\*\[Poddar Business School\][\s\S]*?\|\n/;
const new70Table = `| College Name | Flagship Program | 2-Yr Total Fees | Avg CTC | Highest CTC | CAT Cutoff | Location |
| --- | --- | --- | --- | --- | --- | --- |
| **[BIMTECH Greater Noida](/colleges/bimtech-noida)** | PGDM (Retail / Insurance) | ₹14.00 Lakhs | ₹11.10 LPA | ₹22.00 LPA | 70-75 %ile | Delhi NCR |
| **[Jaipuria Institute of Management](/colleges/jaipuria-institute-of-management)** | PGDM (Core / SM / RM) | ₹14.75 Lakhs | ₹11.29 LPA | ₹22.00 LPA | 70-75 %ile | Noida / LKO / JPR |
| **[WeSchool (Welingkar Mumbai)](/colleges/welingkar-mumbai)** | PGDM (Rural / Healthcare / Media) | ₹14.50 Lakhs | ₹12.50 LPA | ₹25.40 LPA | 75-80 %ile | Mumbai, MH |
| **[Christ University](/colleges/christ-university-bangalore)** | MBA (Dual Specialization) | ₹9.50 Lakhs | ₹8.50 LPA | ₹16.00 LPA | 70-75 %ile | Bengaluru, KA |
| **[NDIM New Delhi](/colleges/new-delhi-institute-of-management)** | PGDM (Dual Specialization) | ₹11.50 Lakhs | ₹8.50 LPA | ₹16.10 LPA | 70-75 %ile | New Delhi |
| **[JIMS Rohini (Sector-5)](/colleges/jims-rohini-delhi)** | PGDM (Core / IB / Retail) | ₹9.50 Lakhs | ₹8.30 LPA | ₹22.00 LPA | 70-75 %ile | New Delhi |
| **[Balaji University Pune (BIMM/BIIB)](/colleges/balaji-modern-bimm-pune)** | MBA (PM & HRD / Telecom) | ₹11.80 Lakhs | ₹8.80 LPA | ₹21.50 LPA | 70-75 %ile | Pune, MH |
| **[FOSTIIMA Business School](/colleges/fostiima-business-school-delhi)** | PGDM (IIM Alum Faculty) | ₹9.50 Lakhs | ₹8.50 LPA | ₹15.50 LPA | 70-75 %ile | Delhi NCR |
| **[ITM Business School](/colleges/itm-business-school-mumbai)** | PGDM iConnect | ₹12.45 Lakhs | ₹10.50 LPA | ₹25.00 LPA | 70-75 %ile | Navi Mumbai, MH |
| **[IMS Ghaziabad](/colleges/institute-studies-ghaziabad)** | PGDM (AICTE / NBA) | ₹9.50 Lakhs | ₹8.80 LPA | ₹28.00 LPA | 70-75 %ile | Delhi NCR |
| **[Poddar Business School](/colleges/poddar-business-school-jaipur)** | PGDM (Global Immersion) | ₹5.50 Lakhs | ₹8.50 LPA | ₹16.00 LPA | 68-72 %ile | Jaipur, RJ |
`;
if (old70TableRegex.test(catText)) {
  catText = catText.replace(old70TableRegex, new70Table);
  console.log("Updated 70 percentile table in catPercentileBlogs.js");
} else {
  console.warn("Could not find 70 percentile table regex match");
}

// Fix 80 percentile table
const old80TableRegex = /\| Institute Name \| Degree \/ Program \| 2-Yr Fees \| Average CTC \| Highest CTC \| CAT Cutoff \| Key Strength \|[\s\S]*?\| \*\*\[UBS Chandigarh[\s\S]*?\|\n/;
const new80Table = `| Institute Name | Degree / Program | 2-Yr Fees | Average CTC | Highest CTC | CAT Cutoff | Key Strength |
| --- | --- | --- | --- | --- | --- | --- |
| **[FORE School of Mgmt, New Delhi](/colleges/fore-school-delhi)** | PGDM (Core / IB / FM / BDA) | ₹18.98 Lakhs | ₹16.01 LPA | ₹70.00 LPA | 84-86 %ile | NIRF #53, Consulting & BFSI Hub |
| **[Great Lakes (GLIM Chennai/Gurgaon)](/colleges/great-lakes-chennai)** | PGPM / PGDM | ₹19.65 Lakhs | ₹15.10 LPA | ₹37.00 LPA | 80-85 %ile | Analytics, AI, 1-Year Fast Track |
| **[GIM Goa (Goa Institute of Mgmt)](/colleges/gim-goa)** | PGDM (Core / BDA / BIFS) | ₹19.40 Lakhs | ₹15.12 LPA | ₹60.40 LPA | 85-88 %ile | Data Analytics, Healthcare, Finance |
| **[TAPMI Manipal](/colleges/tapmi-manipal)** | MBA (Core / BKFS / HR / Mktg) | ₹17.34 Lakhs | ₹13.84 LPA | ₹32.02 LPA | 85-88 %ile | AACSB & AMBA Accredited, Banking |
| **[LBSIM New Delhi](/colleges/lbsim-delhi)** | PGDM (Core / FM / R&BA) | ₹17.25 Lakhs | ₹12.32 LPA | ₹24.00 LPA | 82-85 %ile | Financial Management, Value Pedagogy |
| **[K J Somaiya Institute of Mgmt, Mumbai](/colleges/kj-somaiya-mumbai)** | MBA (Core & Specializations) | ₹20.87 Lakhs | ₹12.28 LPA | ₹28.25 LPA | 83-86 %ile | Massive Mumbai corporate network |
| **[BIMTECH Greater Noida](/colleges/bimtech-noida)** | PGDM (Core Flagship) | ₹14.00 Lakhs | ₹11.10 LPA | ₹22.00 LPA | 80-82 %ile | NIRF #64, Birla conglomerate |
| **[LIBA Chennai](/colleges/liba-chennai)** | PGDM | ₹17.84 Lakhs | ₹11.20 LPA | ₹20.50 LPA | 80-82 %ile | NIRF #66, Jesuit ethics, BFSI |
| **[NIBM Pune](/colleges/nibm-pune)** | PGDM (Banking & Fin. Services) | ₹16.00 Lakhs | ₹15.22 LPA | ₹23.50 LPA | 80-85 %ile | NIRF #91, Established by RBI, 100% BFSI |
| **[IRMA Anand](/colleges/irma-anand)** | PGDM (Rural Management) | ₹18.60 Lakhs | ₹14.14 LPA | ₹31.16 LPA | 80-83 %ile | FMCG, Agribusiness, Social Impact |
| **[UBS Chandigarh (Panjab Univ.)](/colleges/ubs-panjab-university-chandigarh)** | MBA | ₹0.50 Lakhs | ₹13.72 LPA | ₹58.48 LPA | 85-88 %ile | NIRF #92, **Highest ROI (Fees ₹50k)** |
`;
if (old80TableRegex.test(catText)) {
  catText = catText.replace(old80TableRegex, new80Table);
  console.log("Updated 80 percentile table in catPercentileBlogs.js");
} else {
  console.warn("Could not find 80 percentile table regex match");
}

// Fix 90 percentile table
const old90TableRegex = /\| Business School \| Degree \/ Program \| 2-Yr Fees \| Average CTC \| Median CTC \| CAT Cutoff \| Key Recruiter Portfolios \|[\s\S]*?\| \*\*\[DFS \(Univ\. of Delhi\)\][\s\S]*?\|\n/;
const new90Table = `| Business School | Degree / Program | 2-Yr Fees | Average CTC | Median CTC | CAT Cutoff | Key Recruiter Portfolios |
| --- | --- | --- | --- | --- | --- | --- |
| **[SPJIMR Mumbai](/colleges/spjimr-mumbai)** | PGDM (Finance / Mktg / IM / Ops) | ₹22.50 Lakhs | ₹33.00 LPA | ₹31.50 LPA | 85-93 %ile (Profile/Score) | Consulting, IB, FMCG |
| **[MDI Gurgaon](/colleges/mdi-gurgaon)** | PGDM / PGP-HRM / PGP-IB | ₹26.55 Lakhs | ₹29.50 LPA | ₹26.50 LPA | 94-96 %ile | Strategy Consulting, BFSI |
| **[SJMSoM, IIT Bombay](/colleges/iit-bombay-sjmsom)** | MBA | ₹14.20 Lakhs | ₹28.01 LPA | ₹26.64 LPA | 96-98 %ile | Tech Consulting, Supply Chain, PE |
| **[DMS, IIT Delhi](/colleges/dms-iit-delhi)** | MBA (General / Telecom) | ₹12.00 Lakhs | ₹25.82 LPA | ₹24.45 LPA | 95-97 %ile | Operations, Analytics, Strategy |
| **[VGSoM, IIT Kharagpur](/colleges/vgsom-iit-kharagpur)** | MBA | ₹13.00 Lakhs | ₹20.83 LPA | ₹19.50 LPA | 90-93 %ile | Supply Chain, Manufacturing, IT |
| **[DoMS, IIT Madras](/colleges/doms-iit-madras)** | MBA | ₹11.50 Lakhs | ₹18.30 LPA | ₹17.00 LPA | 90-92 %ile | Analytics, FinTech, Consulting |
| **[IMT Ghaziabad](/colleges/imt-ghaziabad)** | PGDM (Core Marketing Flagship) | ₹21.53 Lakhs | ₹17.35 LPA | ₹16.00 LPA | 90-93 %ile | FMCG, Retail, Digital Marketing |
| **[XIM University (XIMB)](/colleges/ximb-bhubaneswar)** | MBA-BM (Business Management) | ₹20.90 Lakhs | ₹19.53 LPA | ₹18.50 LPA | 91-93 %ile | BFSI, Consulting, General Mgmt |
| **[IMI New Delhi](/colleges/imi-new-delhi)** | PGDM (Core / BFS / HRM) | ₹20.95 Lakhs | ₹16.88 LPA | ₹16.00 LPA | 88-90 %ile | BFSI, IT Services, Analytics |
| **[DSE (Delhi School of Economics)](/colleges/dse-delhi)** | MBA (IB & HRD) | ₹0.32 Lakhs | ₹14.50 LPA | ₹13.80 LPA | 92-94 %ile | **Ultra-High ROI (Fee ₹32k)** |
| **[DFS (Univ. of Delhi)](/colleges/dfs-delhi)** | MBA (Financial Management) | ₹0.30 Lakhs | ₹17.20 LPA | ₹16.00 LPA | 94-96 %ile | **Premier Equity Research & IB** |
`;
if (old90TableRegex.test(catText)) {
  catText = catText.replace(old90TableRegex, new90Table);
  console.log("Updated 90 percentile table in catPercentileBlogs.js");
} else {
  console.warn("Could not find 90 percentile table regex match");
}

// Update specific text mentions in 90 percentile
catText = catText.replace("average CTC of **₹24.45 LPA** and fees of ₹12.00 Lakhs", "average CTC of **₹25.82 LPA** and fees of ₹12.00 Lakhs");
catText = catText.replace("Total 2-year tuition fee is **under ₹40,000**", "Total 2-year tuition fee is **under ₹35,000** (₹32,000 total)");
catText = catText.replace("Total fee is **under ₹45,000**", "Total fee is **under ₹35,000** (₹30,000 total)");
catText = catText.replace("with an average CTC of **₹16.80 LPA**", "with an average CTC of **₹17.20 LPA**");
catText = catText.replace("With fees capped at ₹14.50 Lakhs and average packages reaching **₹28.88 LPA**", "With fees capped at ₹14.20 Lakhs and average packages reaching **₹28.01 LPA**");

// Update specific text mentions in 80 percentile
catText = catText.replace(/\/colleges\/great-lakes-chennai\)\n- \*\*Two Pathways/, "/colleges/great-lakes-chennai)\n- **Two Pathways");
catText = catText.replace("TAPMI holds the prestigious **dual AACSB and AMBA accreditations**", "TAPMI holds prestigious **AACSB and AMBA accreditations** (Fees ₹17.34 Lakhs, Avg CTC ₹13.84 LPA)");

fs.writeFileSync(catBlogPath, catText, 'utf-8');
console.log("Saved catPercentileBlogs.js");

// 2. Fix nonCatBlogs.js
const nonCatBlogPath = path.join(blogsDir, 'nonCatBlogs.js');
let nonCatText = fs.readFileSync(nonCatBlogPath, 'utf-8');

// Fix SIMSREE broken link
nonCatText = nonCatText.replaceAll('/colleges/simsREE-mumbai', '/colleges/simsree-mumbai');

// Fix non-CAT table in blog 1
const oldNonCatTableRegex = /\| Institute Name \| Primary Non-CAT Exams \| Non-CAT Cutoff \| 2-Yr Fees \| Average CTC \| Highest CTC \|[\s\S]*?\| \*\*\[NDIM New Delhi\][\s\S]*?\|\n/;
const newNonCatTable = `| Institute Name | Primary Non-CAT Exams | Non-CAT Cutoff | 2-Yr Fees | Average CTC | Highest CTC |
| --- | --- | --- | --- | --- | --- |
| **[XLRI Jamshedpur](/colleges/xlri-jamshedpur)** | [XAT](/exams/xat) | 95-96 %ile | ₹28.60 Lakhs | ₹29.89 LPA | ₹75.00 LPA |
| **[JBIMS Mumbai](/colleges/jbims-mumbai)** | MAH MBA CET / [CMAT](/exams/cmat) | 99.9+ %ile (All-India) | ₹6.10 Lakhs | ₹26.12 LPA | ₹44.00 LPA |
| **[XIMB Bhubaneswar](/colleges/ximb-bhubaneswar)** | [XAT](/exams/xat) / XGMT | 91-93 %ile | ₹20.90 Lakhs | ₹19.53 LPA | ₹71.50 LPA |
| **[SIMSREE Mumbai](/colleges/simsree-mumbai)** | MAH MBA CET / [CMAT](/exams/cmat) | 99.7+ %ile | ₹1.38 Lakhs | ₹15.19 LPA | ₹21.53 LPA |
| **[Great Lakes (GLIM Chennai)](/colleges/great-lakes-chennai)** | [XAT](/exams/xat) / [CMAT](/exams/cmat) | XAT 85% / CMAT 95% | ₹19.65 Lakhs | ₹15.10 LPA | ₹37.00 LPA |
| **[GIM Goa](/colleges/gim-goa)** | [XAT](/exams/xat) / [CMAT](/exams/cmat) | XAT 85% / CMAT 95% | ₹19.40 Lakhs | ₹15.12 LPA | ₹60.40 LPA |
| **[IMT Ghaziabad](/colleges/imt-ghaziabad)** | [XAT](/exams/xat) | 90-92 %ile | ₹21.53 Lakhs | ₹17.35 LPA | ₹65.60 LPA |
| **[TAPMI Manipal](/colleges/tapmi-manipal)** | [XAT](/exams/xat) | 85-88 %ile | ₹17.34 Lakhs | ₹13.84 LPA | ₹32.02 LPA |
| **[WeSchool (Welingkar Mumbai)](/colleges/welingkar-mumbai)** | [CMAT](/exams/cmat) / [XAT](/exams/xat) / ATMA | CMAT 85% / CET 90% | ₹14.50 Lakhs | ₹12.50 LPA | ₹25.40 LPA |
| **[Jaipuria Institute of Mgmt (Jaipur)](/colleges/jaipuria-institute-of-management-jaipur)** | [CMAT](/exams/cmat) / [MAT](/exams/mat) / [XAT](/exams/xat) | CMAT 75% / MAT 80% | ₹12.75 Lakhs | ₹10.50 LPA | ₹22.00 LPA |
| **[Christ University Bengaluru](/colleges/christ-university-bangalore)** | [MAT](/exams/mat) / [CMAT](/exams/cmat) / [XAT](/exams/xat) | MAT 75% / CMAT 70% | ₹9.50 Lakhs | ₹8.50 LPA | ₹16.00 LPA |
| **[NDIM New Delhi](/colleges/new-delhi-institute-of-management)** | [MAT](/exams/mat) / [CMAT](/exams/cmat) / [XAT](/exams/xat) | MAT 70% / CMAT 65% | ₹11.50 Lakhs | ₹8.50 LPA | ₹16.10 LPA |
`;
if (oldNonCatTableRegex.test(nonCatText)) {
  nonCatText = nonCatText.replace(oldNonCatTableRegex, newNonCatTable);
  console.log("Updated non-CAT master table in nonCatBlogs.js");
}

// Fix Jaipur non-CAT blog
nonCatText = nonCatText.replace(
  '| **[MNIT Jaipur (DMS)](/colleges/dms-iit-delhi)** | [CMAT](/exams/cmat) | CMAT 85%ile+ | ₹3.60 Lakhs | ₹10.50 LPA | ₹18.00 LPA |',
  '| **[MNIT Jaipur (DMS)](/colleges/doms-mnit-jaipur)** | [CMAT](/exams/cmat) | CMAT 85%ile+ | ₹2.60 Lakhs | ₹9.30 LPA | ₹16.00 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[IILM Academy of Higher Learning](/colleges/new-delhi-institute-of-management)** | [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | MAT 65% / CMAT 60% | ₹7.00 Lakhs | ₹8.20 LPA | ₹15.00 LPA |',
  '| **[IILM Academy of Higher Learning](/colleges/iilm-academy-of-higher-learning-jaipur)** | [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | MAT 65% / CMAT 60% | ₹7.00 Lakhs | ₹8.20 LPA | ₹26.00 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[Jaipuria Institute of Management](/colleges/jaipuria-institute-of-management-jaipur)** | [CMAT](/exams/cmat), [MAT](/exams/mat), [XAT](/exams/xat) | CMAT 75% / MAT 80% | ₹14.75 Lakhs | ₹9.50 LPA | ₹22.00 LPA |',
  '| **[Jaipuria Institute of Management](/colleges/jaipuria-institute-of-management-jaipur)** | [CMAT](/exams/cmat), [MAT](/exams/mat), [XAT](/exams/xat) | CMAT 75% / MAT 80% | ₹12.75 Lakhs | ₹10.50 LPA | ₹22.00 LPA |'
);

// Fix Dehradun non-CAT blog
nonCatText = nonCatText.replaceAll('/colleges/graphic-era-university-dehradun', '/colleges/graphic-era-dehradun');
nonCatText = nonCatText.replace(
  '| **[Graphic Era University (GEU)](/colleges/graphic-era-dehradun)** | [MAT](/exams/mat), [CMAT](/exams/cmat), CUET PG | MAT 60% / CMAT 55% | ₹7.60 Lakhs | ₹7.50 LPA | ₹16.00 LPA |',
  '| **[Graphic Era University (GEU)](/colleges/graphic-era-dehradun)** | [MAT](/exams/mat), [CMAT](/exams/cmat), CUET PG | MAT 60% / CMAT 55% | ₹7.17 Lakhs | ₹7.50 LPA | ₹16.00 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[IMS Unison University](/colleges/new-delhi-institute-of-management)** | [MAT](/exams/mat), [CMAT](/exams/cmat), UKSEE | MAT 55% / Merit | ₹5.80 Lakhs | ₹6.20 LPA | ₹14.00 LPA |',
  '| **[IMS Unison University](/colleges/ims-unison-university-dehradun)** | [MAT](/exams/mat), [CMAT](/exams/cmat), UKSEE | MAT 55% / Merit | ₹4.80 Lakhs | ₹6.20 LPA | ₹13.60 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[Doon Business School (DBS)](/colleges/doon-business-school-dehradun)** | [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | MAT 65% / CMAT 60% | ₹8.90 Lakhs | ₹8.70 LPA | ₹24.00 LPA |',
  '| **[Doon Business School (DBS)](/colleges/doon-business-school-dehradun)** | [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | MAT 65% / CMAT 60% | ₹8.90 Lakhs | ₹8.70 LPA | ₹40.00 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[UPES School of Business](/colleges/upes-school-of-business-dehradun)** | UPESMET, [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | UPESMET 50% / MAT 70% | ₹16.80 Lakhs | ₹8.66 LPA | ₹29.00 LPA |',
  '| **[UPES School of Business](/colleges/upes-dehradun)** | UPESMET, [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | UPESMET 50% / MAT 70% | ₹19.11 Lakhs | ₹10.50 LPA | ₹29.00 LPA |'
);

// Fix Pune non-CAT blog
nonCatText = nonCatText.replace(
  '| **[PUMBA (Pune University DMS)](/colleges/pumba-pune)** | MAH MBA CET, [CMAT](/exams/cmat) | CET 99.2% / CMAT 98% | ₹1.35 Lakhs | ₹8.90 LPA | ₹18.00 LPA |',
  '| **[PUMBA (Pune University DMS)](/colleges/pumba-pune)** | MAH MBA CET, [CMAT](/exams/cmat) | CET 99.2% / CMAT 98% | ₹1.35 Lakhs | ₹8.85 LPA | ₹18.00 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[NIBM Pune](/colleges/sibm-pune)** | [CMAT](/exams/cmat), [XAT](/exams/xat) | CMAT 80-85% / XAT 75% | ₹14.50 Lakhs | ₹15.20 LPA | ₹23.50 LPA |',
  '| **[NIBM Pune](/colleges/nibm-pune)** | [CMAT](/exams/cmat), [XAT](/exams/xat) | CMAT 80-85% / XAT 75% | ₹16.00 Lakhs | ₹15.22 LPA | ₹23.50 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[Balaji Univ. (BIMM / BIIB)](/colleges/sibm-pune)** | [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | MAT 70% / CMAT 65% | ₹12.60 Lakhs | ₹8.80 LPA | ₹21.50 LPA |',
  '| **[Balaji Univ. (BIMM / BIIB)](/colleges/balaji-modern-bimm-pune)** | [MAT](/exams/mat), [CMAT](/exams/cmat), [XAT](/exams/xat) | MAT 70% / CMAT 65% | ₹11.80 Lakhs | ₹8.80 LPA | ₹21.50 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[PIBM Pune](/colleges/pumba-pune)** | [CMAT](/exams/cmat), [MAT](/exams/mat), [XAT](/exams/xat) | MAT 65% / CMAT 60% | ₹8.50 Lakhs | ₹7.80 LPA | ₹17.00 LPA |',
  '| **[PIBM Pune](/colleges/pune-institute-of-business-management)** | [CMAT](/exams/cmat), [MAT](/exams/mat), [XAT](/exams/xat) | MAT 65% / CMAT 60% | ₹8.50 Lakhs | ₹10.30 LPA | ₹26.00 LPA |'
);
nonCatText = nonCatText.replace(
  '| **[Indira Group (IIMP Pune)](/colleges/pumba-pune)** | MAH MBA CET, [CMAT](/exams/cmat), [MAT](/exams/mat) | CET 92% / CMAT 85% | ₹4.80 Lakhs | ₹7.50 LPA | ₹16.00 LPA |',
  '| **[Indira Group (IIMP Pune)](/colleges/indira-university-pune)** | MAH MBA CET, [CMAT](/exams/cmat), [MAT](/exams/mat) | CET 92% / CMAT 85% | ₹4.80 Lakhs | ₹6.20 LPA | ₹13.60 LPA |'
);

fs.writeFileSync(nonCatBlogPath, nonCatText, 'utf-8');
console.log("Saved nonCatBlogs.js");

// 3. Fix regionalSeriesBlogs.js
const regBlogPath = path.join(blogsDir, 'regionalSeriesBlogs.js');
let regText = fs.readFileSync(regBlogPath, 'utf-8');

// Jaipur adjustments
regText = regText.replace(
  '| **MNIT Jaipur (DMS)** | MBA | ₹3.60 Lakhs | ₹10.50 LPA | ₹18.00 LPA | CAT, CMAT |',
  '| **MNIT Jaipur (DMS)** | MBA | ₹2.60 Lakhs | ₹9.30 LPA | ₹16.00 LPA | CAT, CMAT |'
);
regText = regText.replace(
  '| **Jaipuria Institute of Management** | PGDM (AIU) | ₹14.75 Lakhs | ₹9.50 LPA | ₹22.00 LPA | CAT, CMAT, MAT, XAT |',
  '| **Jaipuria Institute of Management** | PGDM (AIU) | ₹12.75 Lakhs | ₹10.50 LPA | ₹22.00 LPA | CAT, CMAT, MAT, XAT |'
);
regText = regText.replace(
  '| **Doon Business School (DBS)** | PGDM / MBA | ₹8.90 Lakhs | ₹8.70 LPA | ₹24.00 LPA | CAT, MAT, CMAT, XAT, ATMA |',
  '| **Doon Business School (DBS)** | PGDM / MBA | ₹8.90 Lakhs | ₹8.70 LPA | ₹40.00 LPA | CAT, MAT, CMAT, XAT, ATMA |'
);
regText = regText.replace(
  '| **UPES Dehradun (School of Business)** | MBA (Specialized) | ₹19.11 Lakhs | ₹10.50 LPA | ₹30.00 LPA | UPESMET, CAT, MAT, CMAT |',
  '| **UPES Dehradun (School of Business)** | MBA (Specialized) | ₹19.11 Lakhs | ₹10.50 LPA | ₹29.00 LPA | UPESMET, CAT, MAT, CMAT |'
);
regText = regText.replace(
  '| **Graphic Era University (GEU)** | MBA | ₹7.80 Lakhs | ₹7.20 LPA | ₹16.00 LPA | CAT, MAT, CMAT, XAT |',
  '| **Graphic Era University (GEU)** | MBA | ₹7.17 Lakhs | ₹7.50 LPA | ₹16.00 LPA | CAT, MAT, CMAT, XAT |'
);
regText = regText.replace(
  '| **IMS Unison University** | MBA | ₹5.80 Lakhs | ₹6.80 LPA | ₹15.00 LPA | CAT, MAT, CMAT, XAT |',
  '| **IMS Unison University** | MBA | ₹4.80 Lakhs | ₹6.20 LPA | ₹13.60 LPA | CAT, MAT, CMAT, XAT |'
);
regText = regText.replace(
  '| **DIT University (School of Mgmt)** | MBA | ₹5.50 Lakhs | ₹6.80 LPA | ₹13.50 LPA | CAT, MAT, CMAT, DIT Test |',
  '| **DIT University (School of Mgmt)** | MBA | ₹4.80 Lakhs | ₹6.20 LPA | ₹13.60 LPA | CAT, MAT, CMAT, DIT Test |'
);

// Placements table
regText = regText.replace(
  '| **Jaipuria Institute of Management** | ₹22.00 LPA | ₹9.50 LPA | ₹8.80 LPA | 98.4% |',
  '| **Jaipuria Institute of Management** | ₹22.00 LPA | ₹10.50 LPA | ₹9.50 LPA | 98.4% |'
);
regText = regText.replace(
  '| **MNIT Jaipur (DMS)** | ₹18.00 LPA | ₹10.50 LPA | ₹9.80 LPA | 95.0% |',
  '| **MNIT Jaipur (DMS)** | ₹16.00 LPA | ₹9.30 LPA | ₹8.80 LPA | 95.0% |'
);
regText = regText.replace(
  '| **Doon Business School (DBS)** | ₹24.00 LPA | ₹8.70 LPA | ₹8.00 LPA | 95.0% |',
  '| **Doon Business School (DBS)** | ₹40.00 LPA | ₹8.70 LPA | ₹8.00 LPA | 95.0% |'
);
regText = regText.replace(
  '| **UPES Dehradun (School of Business)** | ₹30.00 LPA | ₹10.50 LPA | ₹9.20 LPA | 96.5% |',
  '| **UPES Dehradun (School of Business)** | ₹29.00 LPA | ₹10.50 LPA | ₹9.20 LPA | 96.5% |'
);

// Fees table
regText = regText.replace(
  '| **MNIT Jaipur (DMS)** | MBA | ₹3.60 Lakhs | ₹65,000 | ~₹4.90 Lakhs |',
  '| **MNIT Jaipur (DMS)** | MBA | ₹2.60 Lakhs | ₹65,000 | ~₹3.90 Lakhs |'
);
regText = regText.replace(
  '| **Jaipuria Institute of Management** | PGDM | ₹14.75 Lakhs | ₹1,20,000 | ~₹17.15 Lakhs |',
  '| **Jaipuria Institute of Management** | PGDM | ₹12.75 Lakhs | ₹1,20,000 | ~₹15.15 Lakhs |'
);
regText = regText.replace(
  '| **IMS Unison University** | MBA | ₹5.80 Lakhs | ₹1,05,000 | ~₹7.90 Lakhs |',
  '| **IMS Unison University** | MBA | ₹4.80 Lakhs | ₹1,05,000 | ~₹6.90 Lakhs |'
);
regText = regText.replace(
  '| **DIT University** | MBA | ₹5.50 Lakhs | ₹1,10,000 | ~₹7.70 Lakhs |',
  '| **DIT University** | MBA | ₹4.80 Lakhs | ₹1,10,000 | ~₹7.00 Lakhs |'
);
regText = regText.replace(
  '| **Graphic Era University (GEU)** | MBA | ₹7.80 Lakhs | ₹1,20,000 | ~₹10.20 Lakhs |',
  '| **Graphic Era University (GEU)** | MBA | ₹7.17 Lakhs | ₹1,20,000 | ~₹9.57 Lakhs |'
);

fs.writeFileSync(regBlogPath, regText, 'utf-8');
console.log("Saved regionalSeriesBlogs.js");

// 4. Fix admissionsAndStrategyBlogs.js
const admBlogPath = path.join(blogsDir, 'admissionsAndStrategyBlogs.js');
let admText = fs.readFileSync(admBlogPath, 'utf-8');
admText = admText.replaceAll('/colleges/simsREE-mumbai', '/colleges/simsree-mumbai');
fs.writeFileSync(admBlogPath, admText, 'utf-8');
console.log("Saved admissionsAndStrategyBlogs.js");

console.log("All blog data files successfully audited and synchronized!");
