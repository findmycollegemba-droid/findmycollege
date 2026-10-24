/**
 * Official Association of Indian Universities (AIU) Equivalence Dataset
 * Extracted directly from:
 * https://aiu.ac.in/wp-content/uploads/docs/2026/06/PGDM_Institution_List_June_2026.pdf
 * 
 * Official Gazette Edition: June 2026
 * Total Pan-India AIU Institutions: 121 (S.No 1 to 121)
 * Total Approved Programs: 200
 * 
 * 9 Major Management Hubs (86 Institutions):
 * 1. Delhi NCR: 35
 * 2. Pune: 14
 * 3. Mumbai: 10
 * 4. Bangalore: 15
 * 5. Jaipur: 3
 * 6. Kolkata: 5
 * 7. Dehradun: 0 (UGC Statutory MBA Degree State Private Universities)
 * 8. Lucknow: 2
 * 9. Indore: 2
 * 
 * Other Indian Cities: 35
 */

export const AIU_DOCUMENT_INFO = {
  title: "Association of Indian Universities (AIU) - List of Equated Two-Year Full-Time PGDM Institutions",
  officialPdfUrl: "https://aiu.ac.in/wp-content/uploads/docs/2026/06/PGDM_Institution_List_June_2026.pdf",
  edition: "June 2026 Official Gazette",
  totalPanIndiaInstitutions: 121,
  totalTargetCityInstitutions: 86,
  totalOtherCityInstitutions: 35,
  totalApprovedPrograms: 200,
  governingBody: "Association of Indian Universities (AIU), AIU House, 16 Comrade Indrajit Gupta Marg, New Delhi 110002",
  regulatoryScope: "Equating 2-Year Full-Time PGDM with Master of Business Administration (MBA) Degree for Higher Studies (Ph.D) & Executive Employment in Govt/PSU/Corporate sectors.",
  legalValidation: "AIU approval remains valid as long as AICTE approval and NBA/AACSB/AMBA accreditation for the course remains valid."
};

export const AIU_CITY_GAZETTE_STATS = {
  "pan-india": { institutes: 121, programs: 200, title: "Pan-India (All 121 AIU Campuses)" },
  "all": { institutes: 86, programs: 140, title: "All 9 Cities (86 AIU Campuses)" },
  "delhi-ncr": { institutes: 35, programs: 60, title: "Delhi NCR" },
  "pune": { institutes: 14, programs: 24, title: "Pune" },
  "mumbai": { institutes: 10, programs: 23, title: "Mumbai" },
  "bangalore": { institutes: 15, programs: 19, title: "Bangalore" },
  "jaipur": { institutes: 3, programs: 3, title: "Jaipur" },
  "kolkata": { institutes: 5, programs: 5, title: "Kolkata" },
  "dehradun": { institutes: 0, programs: 0, title: "Dehradun", note: "Colleges in Dehradun are State / Private Universities (UPES, Graphic Era, DIT, IMS Unison) that award statutory MBA Degrees directly under UGC Acts without requiring autonomous AIU equivalence certificates." },
  "lucknow": { institutes: 2, programs: 4, title: "Lucknow" },
  "indore": { institutes: 2, programs: 2, title: "Indore" },
  "other": { institutes: 35, programs: 60, title: "Other Indian Cities" }
};

export const AIU_OFFICIAL_LIST = [
  {
    "sno": 1,
    "snoDisplay": "1.",
    "name": "ABBS School of Management, Bengaluru Karnataka",
    "address": "ABBS School of Management Andrahalli Main Road, Off Magadi Road, Bengaluru, Karnataka – 560091",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "07.03.2024 – 07.03.2027",
    "collegeId": "abbs-bengaluru"
  },
  {
    "sno": 2,
    "snoDisplay": "2.",
    "name": "Acharya School of Management, Bangalore",
    "address": "Acharya School of Management, Acharya Dr. Sarvepalli Radhakrishnan Road, Soldevanabhalli, Hesaraghatta Main Road, Bangalore",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "26.11.2013 – 25.11.2018",
    "collegeId": "acharya-bangalore-b-bengaluru"
  },
  {
    "sno": 3,
    "snoDisplay": "3.",
    "name": "Amrita Institute of Management, Coimbatore",
    "address": "Amrita School of Business Amrita Vishwa Vidyapeetham, Amritanagar, Coimbatore - 641 112",
    "city": "other",
    "cityName": "Tamil Nadu",
    "state": "Tamil Nadu",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "2002 – 2007",
    "collegeId": null
  },
  {
    "sno": 4,
    "snoDisplay": "4.",
    "name": "Apeejay School of Management, New Delhi",
    "address": "Apeejay School of Management Sector- 8, Institutional Area, Dwarka, New Delhi- 110077",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "30.12.2014 – 29.12.2016 & 01-07-2019 – 30.06.2028",
    "collegeId": "asm-apeejay-school-of-management-delhi"
  },
  {
    "sno": 5,
    "snoDisplay": "5.",
    "name": "Asia Pacific Institute of Management, New Delhi",
    "address": "Asia-pacific institute of Management 3 & 4 Institutional Area, Jasola, Opp. Sarita Vihar, New Delhi – 110025",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "August 2010 – 30-06-2017",
    "collegeId": "asia-pacific-institute-of-management-delhi"
  },
  {
    "sno": 6,
    "snoDisplay": "6.",
    "name": "Asian School of Business Management, Bhubaneswar",
    "address": "Asian School of Business Management Shiksha Vihar PO- Bhola (Chandaka) Bhubaneswar – 754012",
    "city": "other",
    "cityName": "Bhubaneswar",
    "state": "Odisha",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.01.2012 – 29.12.2016",
    "collegeId": null
  },
  {
    "sno": 7,
    "snoDisplay": "7.",
    "name": "Asian Business School, Noida",
    "address": "Asian Business School Plot A2, Section 125, Noida – 201303, Uttar Pradesh",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2021 – 30.06.2027",
    "collegeId": "asian-business-school-abs-noida"
  },
  {
    "sno": 8,
    "snoDisplay": "8.",
    "name": "Balaji Institute of Management Human Resource Development Pune (BIMHRD)",
    "address": "Balaji Institute of Modern Management, & Human Resource Development Pune (BIMHRD) 55/2-7, Tathawade, Mumbai- Bangalore Bypass, Pune 411033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "Management",
      "Marketing & Finance Management",
      "Personnel Management & Human Resource Development"
    ],
    "validity": "26.11.2013 – 25.11.2018",
    "collegeId": "balaji-human-resource-development-bimhrd-pune"
  },
  {
    "sno": 9,
    "snoDisplay": "9.",
    "name": "Balaji Institute of Telecom & Management (BITM), Pune",
    "address": "Balaji Institute of Telecom Management Pune (BITM) 55/2-7, Tathawade, Near Wakad, Off. Mumbai-Bangalore Bypass, Pune 411033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "Telecom Management",
      "Telecom & Marketing Management",
      "Marketing & Finance Management"
    ],
    "validity": "26.11.2013 – 25.11.2018",
    "collegeId": "balaji-telecom-bitm-pune"
  },
  {
    "sno": 10,
    "snoDisplay": "10.",
    "name": "Balaji Institute of Modern Management (BIMM), Pune",
    "address": "Balaji Institute of Modern Management (BIMM) 55/2-7, Tathawade, Near Wakad, Off. Mumbai- Bangalore Bypass, Pune - 411 033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "Management",
      "Executive Management",
      "IT & Marketing Management",
      "Personnel Mgmt. & Human Resource Development"
    ],
    "validity": "26.11.2013 – 25.11.2018",
    "collegeId": "balaji-modern-bimm-pune"
  },
  {
    "sno": 11,
    "snoDisplay": "11.",
    "name": "Balaji Institute of International Business (BIIB), Pune",
    "address": "Balaji Institute of International Business (BIIB) 55/2-7, Tathawade, Near Wakad, Off. Mumbai- Bangalore Bypass, Pune 411 033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "International Business Management",
      "Marketing Management",
      "Finance Management"
    ],
    "validity": "26.11.2013 – 25.11.2018",
    "collegeId": "balaji-international-biib-pune"
  },
  {
    "sno": 12,
    "snoDisplay": "12.",
    "name": "Birla Institute of Management Technology (BIMTECH), Greater Noida, Uttar Pradesh",
    "address": "Birla Institute of Management Technology Plot No. 5, Knowledge Park II, Greater Noida (NCR) Uttar Pradesh – 201 306",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM-IB (International Business)",
      "PGDM - IBM (Insurance Business Mgt)",
      "PGDM - RM (Retail Mgt.)"
    ],
    "validity": "01.10.2009 – 30.06.2028",
    "collegeId": "bimtech-noida"
  },
  {
    "sno": 13,
    "snoDisplay": "13.",
    "name": "Bharatiya Vidya Bhavan’s Usha & Lakshmi Mittal Institute of Management, New Delhi",
    "address": "Bharatiya Vidya Bhavan’s Usha & Lakshmi Mittal Institute of Management Kasturba Gandhi Marg, New Delhi – 110001",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.06. 2012 – 30.06.2019",
    "collegeId": null
  },
  {
    "sno": 14,
    "snoDisplay": "14.",
    "name": "Calcutta Business School, 24 Parganas, West Bengal",
    "address": "Calcutta Business School Diamond Harbour Road, Bishnupur, 24 Parganas (South), West Bengal - 743503",
    "city": "kolkata",
    "cityName": "Kolkata",
    "state": "West Bengal",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 – 30.06.2018",
    "collegeId": "calcutta-kolkata"
  },
  {
    "sno": 15,
    "snoDisplay": "15.",
    "name": "Centre for Management Development, Modinagar Uttar Pradesh",
    "address": "Centre For Management Development, Modinagar Uttar Pradesh - 201204",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "2003 – 30.06.2019",
    "collegeId": null
  },
  {
    "sno": 16,
    "snoDisplay": "16.",
    "name": "Chandragupta Institute of Management, Patna",
    "address": "Chandragupta Institute of Management Patna Institutional Area, Near Mithapur Bus Stand, Patna-800001",
    "city": "other",
    "cityName": "Patna",
    "state": "Bihar",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 – 30.06.2025",
    "collegeId": null
  },
  {
    "sno": 17,
    "snoDisplay": "17.",
    "name": "Chetana’s Institute of Management & Research Maharashtra",
    "address": "Chetana’s Institute of Management & Research Survey No. 341, Bandra (EAST) Mumbai – 400051 Maharashtra",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM - Marketing"
    ],
    "validity": "01.07.2022 – 30.06.2028",
    "collegeId": "chetana-cimr-mumbai"
  },
  {
    "sno": 18,
    "snoDisplay": "18.",
    "name": "DCSMAT Business School, Idukki, Kerala",
    "address": "DCSMAT Business School, DC County, Pullikkanam, Vagamon, Idukki Dt, Kerala- 685503",
    "city": "other",
    "cityName": "Kerala",
    "state": "Kerala",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.06.2012 – 30.06.2017",
    "collegeId": null
  },
  {
    "sno": 19,
    "snoDisplay": "19.",
    "name": "DCSMAT School of Media & Business, Thiruvanantpuram, Kerala",
    "address": "DCSMAT School of Media & Business, Kinfra Film and Video Park, Sainik School, PO, Kazhakkuttam, Kerala- 695585",
    "city": "other",
    "cityName": "Kerala",
    "state": "Kerala",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.06.2012 – 30.06.2017",
    "collegeId": null
  },
  {
    "sno": 20,
    "snoDisplay": "20.",
    "name": "Dr. Gaur Hari Singh Singhania Institute of Mgt. and Research, Kanpur",
    "address": "Dr. Gaur Hari Singhania Institute of Management & Research Kamla Nagar, Kanpur-208 005",
    "city": "other",
    "cityName": "Other City",
    "state": "India",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "October 2012 - 30-06-2019",
    "collegeId": null
  },
  {
    "sno": 21,
    "snoDisplay": "21.",
    "name": "Dr. D. Y. Patil B-School Pune, Maharashtra",
    "address": "Dr. D. Y. Patil B-School Bengaluru – Mumbai Highway Bypass Road, Tathawade, Pune Maharashtra – 411033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2023 – 30.06.2026",
    "collegeId": "dr-d-y-patil-institute-of-management-research-pune"
  },
  {
    "sno": 22,
    "snoDisplay": "22.",
    "name": "Delhi School of Business (Formerly known as Vivekananda Institute of Professional Studies), Delhi",
    "address": "Delhi School of Business (Formerly known as Vivekananda Institute of Professional Studies) AU Block, (Outer Rind Road), Pitampura, New Delhi 110 034",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 30.06.2025",
    "collegeId": "delhi-school-of-business-delhi"
  },
  {
    "sno": 23,
    "snoDisplay": "23.",
    "name": "Entrepreneurship Development Institute of India, Gandhinagar Gujarat",
    "address": "Entrepreneurship Development Institute of India P.O. Bhat 382 428, Dist. Gandhinagar, Gujarat",
    "city": "other",
    "cityName": "Ahmedabad",
    "state": "Gujarat",
    "isTargetCity": false,
    "programs": [
      "(PGDM-E)"
    ],
    "validity": "26.11.2013 – 30.06.2022 & 01.07.2023 – 30.06.2026",
    "collegeId": null
  },
  {
    "sno": 24,
    "snoDisplay": "24.",
    "name": "EMPI Business School, New Delhi",
    "address": "EMPI Business School Camp P.O.: CSKM Educational Complex, Satbari, Chattarpur, New Delhi – 110074, India",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07. 2010 – 29.12.2016",
    "collegeId": "empi-business-school-delhi"
  },
  {
    "sno": 25,
    "snoDisplay": "25.",
    "name": "Foundation for Liberal and Management Education, District Pune",
    "address": "Foundation for Liberal & Management Education, Gate No. 1270, Lavale, Taluka Mulshi, District Pune – 412115",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.01.2016 – 30.06.2020",
    "collegeId": "flame-pune"
  },
  {
    "sno": 26,
    "snoDisplay": "26.",
    "name": "Fore School of Management, New Delhi",
    "address": "Fore School of Management B-18, Qutub Institutional Area, New Delhi - 110 016 (India)",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM - IB",
      "PGDM – BDA",
      "PGDM - FM"
    ],
    "validity": "July 2002 – 30.06.2028",
    "collegeId": "fore-school-delhi"
  },
  {
    "sno": 27,
    "snoDisplay": "27.",
    "name": "Fortune Institute of International Business, New Delhi",
    "address": "Fortune Institute of International Business Plot No.05, Opp. R & R Hospital Rao Tula Ram Marg, New Delhi -110057",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM – FM"
    ],
    "validity": "October 2012 – 30-06-2028",
    "collegeId": "fiib-delhi"
  },
  {
    "sno": 28,
    "snoDisplay": "28.",
    "name": "FOSTIIMA Business School, Dwarka, New Delhi",
    "address": "FOSTIIMA Business School, Dwarka Sector – 9, Pocket – 2, HAF – 1, Dwarka New Delhi – 110077",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2025 – 30.06.2028",
    "collegeId": "fostiima-business-school-delhi"
  },
  {
    "sno": 29,
    "snoDisplay": "29.",
    "name": "Globsyn Business School, 24 Parganas, West Bengal",
    "address": "Globsyn Business School National Campus Mouza Chandi, PS- Bishnupur J.L. No. 101, D.H. Road Amtala, West Bengal- 743503, India",
    "city": "kolkata",
    "cityName": "Kolkata",
    "state": "West Bengal",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 – 30.06.2019",
    "collegeId": "globsyn-kolkata"
  },
  {
    "sno": 30,
    "snoDisplay": "30.",
    "name": "Goa Institute of Management, Goa",
    "address": "Goa Institute of Management Ribandar, Goa 403 006",
    "city": "other",
    "cityName": "Goa",
    "state": "Goa",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM- Healthcare Management",
      "PGDM – Big Data Analytics",
      "PGDM- BIFS"
    ],
    "validity": "01.01.2012 – 30.06.2022 & 01.07.2023 – 08.06.2029",
    "collegeId": "gim-goa"
  },
  {
    "sno": 31,
    "snoDisplay": "31.",
    "name": "G.L. Bajaj Institute of Management and Research, PGDM Institute, Uttar Pradesh",
    "address": "G.L. Bajaj Institute of Management and Research, PGDM Institute Plot No. 2, Knowledge Park III, Greater Noida, Distt. - Gautam Buddha Nagar, Uttar Pradesh - 201306",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2022 – 30-06-2028",
    "collegeId": "gl-bajaj-institute-of-management-and-research-greater-noida"
  },
  {
    "sno": 32,
    "snoDisplay": "32.",
    "name": "Global Institute of Business Studies, Bengaluru, Karnataka",
    "address": "Global Institute of Business Studies #44/4/5/8, Mylasandra Road, Begur Hobli, Bengaluru Karnataka – 560068",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-01-2026 – 31-12-2028",
    "collegeId": "gibs-business-school-bangalore"
  },
  {
    "sno": 33,
    "snoDisplay": "33.",
    "name": "Guru Nanak Institute of Management, New Delhi",
    "address": "Guru Nanak Institute of Management Road No. 75West Punjabi Bagh New Delhi- 110026",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "03.06.2013 – 30-06-2018",
    "collegeId": null
  },
  {
    "sno": 34,
    "snoDisplay": "34.",
    "name": "Graduate School of Business Administration, Noida, Uttar Pradesh",
    "address": "Graduate School of Business & Administration Plot No. HS-02, Block-F, Sector-Alpha-2 Greater Noida – 201 306, Uttar Pradesh, (India)",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "2003 – 30.06.2010",
    "collegeId": null
  },
  {
    "sno": 35,
    "snoDisplay": "35.",
    "name": "Great Lakes Institute of Management, Gurgaon Haryana",
    "address": "Great Lakes Institute of Management, Gurgaon Bilaspur - Tauru Road, Gurgaon – 122413 Haryana",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2021 – 30-06-2027",
    "collegeId": "great-lakes-gurgaon"
  },
  {
    "sno": 36,
    "snoDisplay": "36.",
    "name": "Great Lakes Institute of Management, Chennai Tamil Nadu",
    "address": "Great Lakes Institute of Management, Chennai Dr. Bala V Balachandar Campus, East Coast Road, Manamai Tamil Nadu – 603102",
    "city": "other",
    "cityName": "Tamil Nadu",
    "state": "Tamil Nadu",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2019 – 30-06-2028",
    "collegeId": "great-lakes-chennai"
  },
  {
    "sno": 37,
    "snoDisplay": "37.",
    "name": "ICBM-School of Business Excellence (ICBM-SBE) Hyderabad Telangana",
    "address": "ICBM-School of Business Excellence (ICBM-SBE) Plot No. 2A, “Ishwar’s Abode” Upperpali ‘X’ Roads, PO Hyderguda, Hyderabad Telangana – 500048",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "08-06-2024 – 08-06-2027",
    "collegeId": null
  },
  {
    "sno": 38,
    "snoDisplay": "38.",
    "name": "Indian Education Society’s Management College and Research Centre, Mumbai",
    "address": "India Education Society’s Management College and Research Centre VMDL Vidya Sankul 791, S. K. Marg, Bandra Reclamation, Mumbai – 400050",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 – 30.06.2025",
    "collegeId": "ies-mcrc-mumbai"
  },
  {
    "sno": 39,
    "snoDisplay": "39.",
    "name": "Indian Institute of Management, Ahmedabad",
    "address": "Indian Institute of Management Vastrapur, Ahmedabad 38001 5, Gujarat, INDIA",
    "city": "other",
    "cityName": "Ahmedabad",
    "state": "Gujarat",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "Since 03.04.1969",
    "collegeId": "iim-ahmedabad"
  },
  {
    "sno": 40,
    "snoDisplay": "40.",
    "name": "Indian Institute of Management (IIM), Lucknow",
    "address": "Indian Institute of Management (IIM) Prabandh Nagar, Off Sitapur Road, Lucknow – 226 013",
    "city": "lucknow",
    "cityName": "Lucknow",
    "state": "Uttar Pradesh",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "Since 06.03.1991",
    "collegeId": "iim-lucknow"
  },
  {
    "sno": 41,
    "snoDisplay": "41.",
    "name": "Indian Institute of Management (IIM), Indore",
    "address": "Indian Institute of Management (IIM), Indore Prabandh Shikhar, Rau – Pithampur Road Indore 453 331 Madhya Pradesh INDIA",
    "city": "indore",
    "cityName": "Indore",
    "state": "Madhya Pradesh",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "Since 26.03.2001",
    "collegeId": "iim-indore"
  },
  {
    "sno": 42,
    "snoDisplay": "42.",
    "name": "Indian Institute of Management (IIM), Bangalore",
    "address": "Indian Institute of Management (IIM), Bangalore Bannerghatta Road, Bangalore - 560 076",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "Since 15.04.1978",
    "collegeId": "iim-bangalore"
  },
  {
    "sno": 43,
    "snoDisplay": "43.",
    "name": "Indian Institute of Management (IIM), Kolkata",
    "address": "Indian Institute of Management (IIM), Calcutta Diamond Harbour Road, Joka, Kolkata (Calcutta) – 700104 West Bengal, INDIA",
    "city": "kolkata",
    "cityName": "Kolkata",
    "state": "West Bengal",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "Since 03.04.1969",
    "collegeId": "iim-calcutta"
  },
  {
    "sno": 44,
    "snoDisplay": "44.",
    "name": "Indian Institute of Management (IIM), Kozhikode, Kerala",
    "address": "Indian Institute of Management (IIM), Kozhikode IIMK Campus P. O., Kozhikode, Kerala, India, PIN – 673 570",
    "city": "other",
    "cityName": "Kerala",
    "state": "Kerala",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "Since 25.09.2003",
    "collegeId": "iim-kozhikode"
  },
  {
    "sno": 45,
    "snoDisplay": "45.",
    "name": "Indira School of Business Studies PGDM, Pune, Maharashtra",
    "address": "Indira School of Business Studies PGDM ‘Abhinavan’, S. No. 89/2A, Tathawade, Pune, Maharashtra – 411033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM (General)",
      "PGDM - Marketing"
    ],
    "validity": "01.07.2022 – 30.06.2025",
    "collegeId": "indore-indira-indore"
  },
  {
    "sno": 46,
    "snoDisplay": "46.",
    "name": "Institute of Health Management Research, Jaipur",
    "address": "Institute of Health Management Research 1, Prabhu Dayal Marg, Sanganer Airport Jaipur – 302 011",
    "city": "jaipur",
    "cityName": "Jaipur",
    "state": "Rajasthan",
    "isTargetCity": true,
    "programs": [
      "PGDM- Health Management"
    ],
    "validity": "2002 – 30.06.2014",
    "collegeId": "iihmr-jaipur"
  },
  {
    "sno": 47,
    "snoDisplay": "47.",
    "name": "Indian Institute for Tourism & Travel Management, Govindpuri Gwalior, Madhya Pradesh",
    "address": "Indian Institute for Tourism & Travel Management, Govindpuri, GWALIOR, 474 011 (M.P) India",
    "city": "other",
    "cityName": "Other City",
    "state": "India",
    "isTargetCity": false,
    "programs": [
      "(PGDM- Services)",
      "PGDM- International Business",
      "PGDM-Travel & Tourism Management"
    ],
    "validity": "01.06.2011 – 30.05.2016",
    "collegeId": null
  },
  {
    "sno": 48,
    "snoDisplay": "48.",
    "name": "Indus Business Academy Bangalore",
    "address": "Indus Business Academy, IBA Campus, Survey No. 164, Bangalore- 560 062",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 – 30.06.2022 & 01.07.2024 – 30.06.2027",
    "collegeId": "iba-bangalore"
  },
  {
    "sno": 49,
    "snoDisplay": "49.",
    "name": "Institute of Public Enterprise, Hyderabad",
    "address": "Institute of Public Enterprise Osmania University Campus, Hyderabad – 500007 Telangana, India",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM - Retail Management",
      "PGDM - International Business",
      "PGDM - Banking & Financial Services",
      "PGDM - Bio-Tech",
      "PGDM in Marketing Management",
      "PGDM –HRM"
    ],
    "validity": "2002 – 30.06.2019 & 01-07-2021 – 22.02.2025",
    "collegeId": "institute-public-enterprise-ipe-hyderabad"
  },
  {
    "sno": 50,
    "snoDisplay": "50.",
    "name": "Institute of Management Technology, Ghaziabad",
    "address": "Institute of Management Technology Raj Nagar, Post Box No. 137 Ghaziabad - 201001",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- Finance",
      "PGDM- Marketing",
      "PGDM - Banking & Financial Services",
      "PGDM- Dual Country Program"
    ],
    "validity": "1997 – 30.06.2028",
    "collegeId": "imt-ghaziabad"
  },
  {
    "sno": 51,
    "snoDisplay": "51.",
    "name": "Institute of Management Technology, Nagpur",
    "address": "Institute of Management Technology 35 Km Milestone, Katol Road, NAGPUR 441502",
    "city": "other",
    "cityName": "Nagpur",
    "state": "Maharashtra",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM - Marketing",
      "PGDM – Financial Management"
    ],
    "validity": "01.01.2012 – 15.03.2027",
    "collegeId": null
  },
  {
    "sno": 52,
    "snoDisplay": "52.",
    "name": "Institute of Management Technology, Hyderabad",
    "address": "Institute of Management Tech., Hyderabad Campus: Survey No.38, RR District, Hyderabad- 501 218",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM - Finance",
      "PGDM - Marketing"
    ],
    "validity": "01.07.2017 – 29.05.2030",
    "collegeId": null
  },
  {
    "sno": 53,
    "snoDisplay": "53.",
    "name": "International School of Business & Research, Bengaluru, Karnataka",
    "address": "ISBR Business School Plot No. 107, Electronics City Phase 1, Bengaluru Urban Karnataka 560 100",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 – 30.06.2025",
    "collegeId": "isbr-business-school-bangalore"
  },
  {
    "sno": 54,
    "snoDisplay": "54.",
    "name": "International School of Management Excellence, Bengaluru, Karnataka",
    "address": "International School of Management Excellence Sy. No. 88, Chembvanahalli, Sarjapur Road, Bangalore– 562125 Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 – 30.06.2025",
    "collegeId": "isme-bangalore"
  },
  {
    "sno": 55,
    "snoDisplay": "55.",
    "name": "I.T.S School of Management (formerly Institute of Technology & Science) Mohan Nagar, Ghaziabad",
    "address": "I.T.S School of Management (formerly Institute of Technology &Science, Mohan Nagar, Ghaziabad G.T. Road, Mohan Nagar Ghaziabad UP",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "2004 – 30.06.2028",
    "collegeId": "its-ghaziabad"
  },
  {
    "sno": 56,
    "snoDisplay": "56.",
    "name": "I.T.S. Institute of Management, Greater Noida Uttar Pradesh",
    "address": "I.T.S. Institute of Management 46, Knowledge Park-III, Greater Noida",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "26.11.2013 – 25.11.2016",
    "collegeId": null
  },
  {
    "sno": 57,
    "snoDisplay": "57.",
    "name": "Institute for Integrated Learning in Management (IILM), Greater Noida, Uttar Pradesh",
    "address": "Institute for Integrated Learning in Management (IILM) 16, Knowledge Park – II Greater Noida – 201 306, Uttar Pradesh",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "2003 – 30.06.2022",
    "collegeId": "iilm-greater-noida"
  },
  {
    "sno": 58,
    "snoDisplay": "58.",
    "name": "Institute for Technology and Management, Kharghar (East), Navi Mumbai",
    "address": "ITM Business School, Navi Mumbai Plot 25/26, Institutional Area, Sector -4 Kharghar East, Navi Mumbai – 410 210",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.09.2011 – 30.06.2025",
    "collegeId": "itm-business-school-mumbai"
  },
  {
    "sno": 59,
    "snoDisplay": "59.",
    "name": "Indian Institute of Forest Management, Bhopal, Madhya Pradesh",
    "address": "Indian Institute of Forest, Management Po Box 357, Nehru Nagar Bhopal MP, 462003, India",
    "city": "other",
    "cityName": "Bhopal",
    "state": "Madhya Pradesh",
    "isTargetCity": false,
    "programs": [
      "PGDFM"
    ],
    "validity": "Master’s Degree in the relevant Field",
    "collegeId": null
  },
  {
    "sno": 60,
    "snoDisplay": "60.",
    "name": "Institute of Rural Management, Jaipur, Rajasthan",
    "address": "Institute of Rural Management, IIRM Campus, Sector – 11, Tagore Marg, Agarwal Farm, Jaipur – 302020, Rajasthan",
    "city": "jaipur",
    "cityName": "Jaipur",
    "state": "Rajasthan",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 - 30.06.2022",
    "collegeId": "iirm-jaipur"
  },
  {
    "sno": 61,
    "snoDisplay": "61.",
    "name": "Institute of Financial Management and Research (IFMR), Chennai",
    "address": "Institute for Financial Management and Research (IFMR) 24, Kothari Road, Nungambakkam, Chennai –600 034, India.",
    "city": "other",
    "cityName": "Tamil Nadu",
    "state": "Tamil Nadu",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "Oct. 2006 – 30.06.2014",
    "collegeId": null
  },
  {
    "sno": 62,
    "snoDisplay": "62.",
    "name": "Jagdish Sheth School of Management (JAGSOM), Bangalore, Karnataka (Formerly IFIM Business School)",
    "address": "Jagdish Sheth School of Management (JAGSOM) (Formerly IFIM Business School) # 8P & 9P, KIADB Industrial Area, Electronics City Phase 1, Bangalore 560100, Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "July 2002 – 29.12.2016 & 01.07.2017 – 30.06.2019 & 22.02.2020 – 22.02.2027",
    "collegeId": "jagsom-mumbai"
  },
  {
    "sno": 63,
    "snoDisplay": "63.",
    "name": "Institute of Health Management Research, Bangalore",
    "address": "Institute of Health Management Research, Bangalore #319, Near Thimmareddy Layout, Hulimangala Post, Electronic City, Bangalore- 560 105",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM -HHM"
    ],
    "validity": "01.07.2018- 30.06.2025",
    "collegeId": "iihmr-bangalore"
  },
  {
    "sno": 64,
    "snoDisplay": "64.",
    "name": "Institute of Management Studies (IMS), Ghaziabad Uttar Pradesh",
    "address": "Institute of Management Studies Lal Quan, Bulandshahar Road Ghaziabad Uttar Pradesh - 201009",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "April 2001 – 30.06.2028",
    "collegeId": "ims-ghaziabad"
  },
  {
    "sno": 65,
    "snoDisplay": "65.",
    "name": "Institute of Management Studies, Noida",
    "address": "Institute of management Studies, Noida A-8B, Sector-62, Noida UP-201 303, INDIA",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2012 – 30.06.2019",
    "collegeId": "ims-noida"
  },
  {
    "sno": 66,
    "snoDisplay": "66.",
    "name": "International Institute of Health Management Research, New Delhi",
    "address": "International Institute of Health Management Research, Plot No-3, Sector-18A, Dwarka, New Delhi-110075, India",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM - Hospital and Health Mgmt."
    ],
    "validity": "01.07.2017 – 30.06.2028",
    "collegeId": null
  },
  {
    "sno": 67,
    "snoDisplay": "67.",
    "name": "International Institute of Business Study (IIBS), Bangalore, Karnataka",
    "address": "International Institute of Business Study (IIBS) #75, Muthugadahalli, Jala Hobli, Bangalore North Taluk, Bangalore Karnataka – 562157",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2024 – 30.06.2027",
    "collegeId": "iibs-bangalore"
  },
  {
    "sno": 68,
    "snoDisplay": "68.",
    "name": "International Institute of Management Studies (IIMS), Pune, Maharashtra",
    "address": "International Institute of Management Studies (IIMS) Survey No. 54 (1 + 2/1), Nere Dattawadi, Near Hinjawadi Infotech Park, Pune Maharashtra – 411033",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2024 – 30.06.2027",
    "collegeId": "iims-pune"
  },
  {
    "sno": 69,
    "snoDisplay": "69.",
    "name": "International Management Institute, New Delhi",
    "address": "International Management Institute B-10, Qutab Institutional Area Tara Crescent New Delhi – 110016.India.",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- HRM",
      "PGDM-BFS"
    ],
    "validity": "2001 – 30.06.2022 & AY 2022 to 2027",
    "collegeId": "imi-new-delhi"
  },
  {
    "sno": 70,
    "snoDisplay": "70.",
    "name": "International Management Institute, Kolkata",
    "address": "International Management Institute, Kolkata, 2/4C, Judges Court Road, Alipore, Kolkata- 700027, India",
    "city": "kolkata",
    "cityName": "Kolkata",
    "state": "West Bengal",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2016 – 30.06.2022 & AY 2022 to 2027",
    "collegeId": "imi-kolkata"
  },
  {
    "sno": 71,
    "snoDisplay": "71.",
    "name": "International Management Institute, Bhubaneshwar, Odisha",
    "address": "International Management Institute Bhubaneswar IDCO Plot #1 Gothapatna, PO- Malipada, Bhubaneswar Odisha -751003",
    "city": "other",
    "cityName": "Bhubaneswar",
    "state": "Odisha",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.02.2017 – 30.06.2022 & AY 2022 to 2027",
    "collegeId": null
  },
  {
    "sno": 72,
    "snoDisplay": "72.",
    "name": "Indian Institute of Plantation Management, Bangalore",
    "address": "Indian Institute of Plantation Management Jhana Bharathi Campus, P.O. Malathalli, Bangalore- 560 056",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM- ABPM",
      "PGDM- FPBM"
    ],
    "validity": "01.07.2016 - 30.06.2019 & 01-07-2021 – 30-06-2027",
    "collegeId": "iipm-bangalore"
  },
  {
    "sno": 73,
    "snoDisplay": "73.",
    "name": "Ishan Institute of Management, New Delhi",
    "address": "Ishan Institute of Management, New Delhi 219 Hans Bhavan, 1 Bahadur Shah Zafar Marg, New Delhi-110002",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2012- 30.06.2017",
    "collegeId": null
  },
  {
    "sno": 74,
    "snoDisplay": "74.",
    "name": "IILM Institute for Higher Education, New Delhi",
    "address": "IILM Institute for Higher Education, Rai School Complex, Institutional Area New Delhi – 110003",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 – 30.06.2022",
    "collegeId": null
  },
  {
    "sno": 75,
    "snoDisplay": "75.",
    "name": "Institute of Management Development and Research (IMDR), Pune Maharashtra",
    "address": "Institute of Management Development and Research (IMDR), DES Campus, Agarkar Road, Deccan, Gymkhana, Pune - 411004",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2023- 30.06.2026",
    "collegeId": "imdr-pune"
  },
  {
    "sno": 76,
    "snoDisplay": "76.",
    "name": "Jagan Institute of Management Studies, Delhi",
    "address": "Jagan Institute of Management Studies 3, Institutional Area, Sector – 5, Rohini, Delhi– 110085",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- Retail Management",
      "PGDM- International Business"
    ],
    "validity": "2004- 29.12.2016 & 01.07.2017- 30.06.2027",
    "collegeId": "jims-rohini-delhi"
  },
  {
    "sno": 77,
    "snoDisplay": "77.",
    "name": "Jagannath International Management School, New Delhi",
    "address": "Jagannath International Management School MOR, Pocket105 Kalkaji, New Delhi-110019",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- International Business"
    ],
    "validity": "16.07.2013 – 30.06.2018 & 01.07.2019 – 10.02.2025 & 01.07.2025 – 30.06.2028",
    "collegeId": "jims-kalkaji-delhi"
  },
  {
    "sno": 78,
    "snoDisplay": "78.",
    "name": "Jaipuria Institute of Management, Jaipur",
    "address": "Jaipuria Institute of Management Jaipur, Bambala Institutional Area, Pratab Nagar, Sanganer, Jaipur – 302033",
    "city": "jaipur",
    "cityName": "Jaipur",
    "state": "Rajasthan",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "03.06.2013 – 30.06.2028",
    "collegeId": "jaipuria-institute-of-management-jaipur"
  },
  {
    "sno": 79,
    "snoDisplay": "79.",
    "name": "Jaipuria Institute of Management, Noida",
    "address": "Jaipuria Institute of Management, Noida, Plot No. A-32A, Sector-62, Noida-201309",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- Marketing",
      "PGDM- Service Management"
    ],
    "validity": "03.06.2013 – 30.06.2028",
    "collegeId": "jaipuria-institute-of-management"
  },
  {
    "sno": 80,
    "snoDisplay": "80.",
    "name": "Jaipuria Institute of Management, Lucknow",
    "address": "Jaipuria Institute of Management, Lucknow, Vineet Khand, Gomti Nagar Lucknow – 226 010",
    "city": "lucknow",
    "cityName": "Lucknow",
    "state": "Uttar Pradesh",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM – Retail Management",
      "PGDM- Financial Services"
    ],
    "validity": "26.11.2013 – 30.06.2031",
    "collegeId": "jaipuria-lucknow"
  },
  {
    "sno": 81,
    "snoDisplay": "81.",
    "name": "Jaipuria Institute of Management, Indore Madhya Pradesh",
    "address": "Jaipuria Institute of Management, Indore Dakachaya, Indore Dewas Highway, Near Shipra Naka, Indore-453771, Madhya Pradesh",
    "city": "indore",
    "cityName": "Indore",
    "state": "Madhya Pradesh",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2018 – 30-06-2028",
    "collegeId": null
  },
  {
    "sno": 82,
    "snoDisplay": "82.",
    "name": "Jaipuria School of Business, Ghaziabad, Uttar Pradesh",
    "address": "Jaipuria School of Business Block – B, Shakti Khand IV, Indirapuram, Ghaziabad Uttar Pradesh – 201014",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2023 – 30-06-2026",
    "collegeId": "jaipuria-school-of-business"
  },
  {
    "sno": 83,
    "snoDisplay": "83.",
    "name": "Kirloskar Institute of Management, Harihar, Karnataka",
    "address": "Kirloskar Institute of Management Yantrapura, Harihar, Davanagere Karnataka – 577601",
    "city": "other",
    "cityName": "Karnataka",
    "state": "Karnataka",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2025 – 30-06-2028",
    "collegeId": null
  },
  {
    "sno": 84,
    "snoDisplay": "84.",
    "name": "Kirloskar Institute of Management, Pune Maharashtra",
    "address": "Kirloskar Institute of Management Gut No. 356 & 357, Near Tata Foundry, Village – Dhamane, Taluka – Maval Pune Maharashtra – 410506",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-01-2026 – 31-12-2028",
    "collegeId": "kirloskar-pune"
  },
  {
    "sno": 85,
    "snoDisplay": "85.",
    "name": "K J Somaiya Institute of Management Studies & Research, Mumbai",
    "address": "K J Somaiya Institute of Management Studies & Research Vidya Nagar, Vidya Vihar, Mumbai-400077",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM (Retail Management",
      "PGDM",
      "PGDM (International Business)",
      "PGDM (Financial Service)"
    ],
    "validity": "01.06.2012 – 30.06.2019",
    "collegeId": "kj-somaiya-mumbai"
  },
  {
    "sno": 86,
    "snoDisplay": "86.",
    "name": "Kohinoor Management School, Mumbai",
    "address": "Kohinoor Management School Kohinoor City, Kirol Road, Kurla West, Mumbai Maharashtra - 400070",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "07.03.2024 – 07.03.2027",
    "collegeId": "kohinoor-mumbai"
  },
  {
    "sno": 87,
    "snoDisplay": "87.",
    "name": "Lal Bahadur Shastri Institute of Management, New Delhi",
    "address": "Lal Bahadur Shastri Institute of Management, New Delhi Dwarka Campus: Plot No. 11/7, Sector 11 Dwarka, New Delhi - 110 075",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM - FM",
      "PGDM - RBA"
    ],
    "validity": "01.10.2010 – 17.09.2016 & 01.07.2017 – 30.06.2028",
    "collegeId": "lbsim-delhi"
  },
  {
    "sno": 88,
    "snoDisplay": "88.",
    "name": "Loyola Institute of Business Administration (LIBA), Chennai",
    "address": "Loyola Institute of Business Administration (LIBA) Loyola College, Chennai -600034, Tamil Nadu, India",
    "city": "other",
    "cityName": "Tamil Nadu",
    "state": "Tamil Nadu",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "2001 – 30.06.2019 & 01.07.2020 – 30.06.2026",
    "collegeId": "liba-chennai"
  },
  {
    "sno": 89,
    "snoDisplay": "89.",
    "name": "Management Development Institute (MDI), Gurgaon",
    "address": "Management Development Institute Mehrauli Road, Sukhrali, Gurgaon - 122007, INDIA",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM (HRM)",
      "PGDM (IB)"
    ],
    "validity": "Dec. 1997 – 30.06.2028",
    "collegeId": "mdi-gurgaon"
  },
  {
    "sno": 90,
    "snoDisplay": "90.",
    "name": "Management Development Institute Murshidabad (MDIM), Murshidabad West Bengal",
    "address": "Management Development Institute Murshidabad (MDIM) Kulori, PO – Uttar Ramna, PS- Raghunathganj, Dist. Murshidabad, West Bengal - 742235",
    "city": "other",
    "cityName": "Other City",
    "state": "India",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2024 – 30-06-2027",
    "collegeId": null
  },
  {
    "sno": 91,
    "snoDisplay": "91.",
    "name": "M.S. Ramaiah Institute of Management (MSRIM), Karnataka",
    "address": "M.S. Ramaiah Institute of Management (MSRIM) Gate No. 3, Behind M.S. Ramaiah University of Applied Sciences, New BEL Road, MSRIT Post, Bangalore – 560054, Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 – 30.06.2025",
    "collegeId": "ms-ramaiah-mims-bengaluru"
  },
  {
    "sno": 92,
    "snoDisplay": "92.",
    "name": "Mudra Institute of Communications (MICA), Ahmedabad",
    "address": "Mudra Institute of Communications, Ahmedabad (MICA) Shela, Ahmedabad - 380 058 Gujarat, India",
    "city": "other",
    "cityName": "Ahmedabad",
    "state": "Gujarat",
    "isTargetCity": false,
    "programs": [
      "PGDM- Communication",
      "PGDM"
    ],
    "validity": "01.09. 2010 – 30.06.2017 & 01.07.2018 – 30.06.2025",
    "collegeId": "mica-ahmedabad"
  },
  {
    "sno": 93,
    "snoDisplay": "93.",
    "name": "National Insurance Academy, Balewadi, Pune Maharashtra – 411045",
    "address": "National Insurance Academy, Baner Road, NIA P.O., Pune, Maharashtra - 411 045",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "25.07.2013 – 30.06.2027",
    "collegeId": "nia-pune"
  },
  {
    "sno": 94,
    "snoDisplay": "94.",
    "name": "National Institute of Financial Management, Faridabad",
    "address": "National Institute of Financial Management, Faridabad Sector-48, Pali Road, Faridabad- 121001",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "July 2008 – 29-12-2016",
    "collegeId": null
  },
  {
    "sno": 95,
    "snoDisplay": "95.",
    "name": "National Institute of Agricultural Extension Management (Manage), Rajendra Nagar, Hyderabad",
    "address": "National Institute of Agricultural Extension Management (Manage), Rajendra Nagar, Hyderabad- 500 030, Andhra. Pradesh,",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM-ABM (Agribusiness Management)"
    ],
    "validity": "20-07-2005 – 19-07-2008 & 13-03-2009 – 12-03-2012 & 01-07-2015 – 30.06.2025",
    "collegeId": null
  },
  {
    "sno": 96,
    "snoDisplay": "96.",
    "name": "National Institute of Bank Management, Pune, Maharashtra",
    "address": "National Institute of Bank Management, NIBM Post Office, Kondhwe Khurd, Pune Maharashtra - 411048",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM - B&FS"
    ],
    "validity": "01.07.2025 – 30.06.2028",
    "collegeId": "nibm-pune"
  },
  {
    "sno": 97,
    "snoDisplay": "97.",
    "name": "National Academy of Agricultural Research Management, Hyderabad Telangana",
    "address": "National Academy of Agricultural Research Management, Rajendra Nagar, Hyderabad Telangana – 500030",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM-ABM (Agribusiness Management)"
    ],
    "validity": "01.07.2022 – 30.06.2028",
    "collegeId": null
  },
  {
    "sno": 98,
    "snoDisplay": "98.",
    "name": "NIET Business, School, Greater Noida Uttar Pradesh (formerly Noida Institute of Engineering and Technology (MCA Institute))",
    "address": "NIET Business, School, Greater Noida 19, Knowledge Park – II, Institutional Area, Great Noida, Uttar Pradesh – 201306",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2023 – 30.06.2026",
    "collegeId": "niet-greater-noida"
  },
  {
    "sno": 99,
    "snoDisplay": "99.",
    "name": "New Delhi Institute of Management, New Delhi",
    "address": "New Delhi institute of Management 60 & 50 (B&C), Behind Batra Hospital, Tughlakabad Institutional Area New Delhi -110062",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- Marketing",
      "PGDM- FM"
    ],
    "validity": "May 2008 – 29-12-2016 & 01.07.2020 – 30.06.2029",
    "collegeId": "new-delhi-institute-of-management"
  },
  {
    "sno": 100,
    "snoDisplay": "100.",
    "name": "NIILM Centre for Management Studies, New Delhi",
    "address": "NIILM Centre for Management Studies Plot No-53, Knowledge Park V, Greater Noida – 201306, U.P.",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "state": "Delhi NCR",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "April 2004 – 29-12-2017",
    "collegeId": null
  },
  {
    "sno": 101,
    "snoDisplay": "101.",
    "name": "N. L. Dalmia Institute of Management Studies and Research, Maharashtra",
    "address": "N.L. Dalmia Institute of Management Studies and Research Srishti, Sector – 1, Mira Road (East), Maharashtra",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM – Finance",
      "PGDM – BA (Business Analytics)"
    ],
    "validity": "01.07-2022 – 30.06.2028",
    "collegeId": "nl-dalmia-mumbai"
  },
  {
    "sno": 102,
    "snoDisplay": "102.",
    "name": "Praxis Business School Kolkata West Bengal",
    "address": "Praxis Business School Bakrahat Road, Charaktala, PO – Rasapunja, South 24 parganas, Kolkata West Bengal – 700104",
    "city": "kolkata",
    "cityName": "Kolkata",
    "state": "West Bengal",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07-2024 – 30.06.2027",
    "collegeId": "praxis-kolkata"
  },
  {
    "sno": 103,
    "snoDisplay": "103.",
    "name": "Prin. L. N. Welingkar Institute of Management Development & Research (PGDM), Mumbai",
    "address": "Prin. L. N. Welingkar Institute of Management Development & Research (PGDM) Lakhamshi Napoo Road, Near Matunga (Central Rly.), Mumbai-400 019",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- Business Design",
      "PGDM – E - Business",
      "PGDM – Retail Management",
      "PGDM – RBA",
      "PGDM – Media & Entertainment",
      "PGDM – Rural Management",
      "PGDM – Healthcare"
    ],
    "validity": "July 2008 – 29-12-2016 & 01.07.2017 - 30.06.2019 & 01.07.2022 – 30-06-2030",
    "collegeId": "welingkar-mumbai"
  },
  {
    "sno": 104,
    "snoDisplay": "104.",
    "name": "Pune Institute of Business Management for PGDM, Pune, Maharashtra",
    "address": "Pune Institute of Business Management for PGDM Gut No. 605/1, Mukaiwadi Road, Pirangut, Tal – Mulshi, Paud, Pune – 412115, Maharashtra",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07-2022 – 30.06.2025",
    "collegeId": "pune-institute-of-business-management"
  },
  {
    "sno": 105,
    "snoDisplay": "105.",
    "name": "SCMS Cochin School of Business, Cochin Kerala",
    "address": "SCMS Cochin School of Business, Cochin SCMS New Campus, Prathap Nagar, Muttom, Valwaye, Cochin – 683106, Kerala, India",
    "city": "other",
    "cityName": "Kerala",
    "state": "Kerala",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "July 2001 – 30.06.2016 & 01.07.2017 – 30.06.2025",
    "collegeId": null
  },
  {
    "sno": 106,
    "snoDisplay": "106.",
    "name": "S. P. Jain Institute of Management & Research, Mumbai",
    "address": "S.P. Jain Institute of Management & Research, Munshi Nagar, Dadabhai Road, Andheri West, Mumbai - 400 058, India.",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "1997 – 30.06.2028",
    "collegeId": "spjimr-mumbai"
  },
  {
    "sno": 107,
    "snoDisplay": "107.",
    "name": "Shri Dharmasthala Manjunatheshwara Institute for Management Development (SDMIMD), Mysore, Karnataka",
    "address": "Shri Dharmasthala Manjunatheshwara Institute for Management Development, No. 1 Chamundi Hill Road, Siddartha Nagar, Mysore, Karnataka - 570 011",
    "city": "other",
    "cityName": "Karnataka",
    "state": "Karnataka",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.01.2016 – 30.06.2020 & 01.07-2021 – 30.06-2027",
    "collegeId": null
  },
  {
    "sno": 108,
    "snoDisplay": "108.",
    "name": "Siva Sivani Institute of Management, Telangana",
    "address": "Siva Sivani Institute of Management NH-44, Kompally, Secunderabad, Telangana – 500100",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM – BA",
      "PGDM - BIFS"
    ],
    "validity": "01.07.2020 – 08.06.2027",
    "collegeId": null
  },
  {
    "sno": 109,
    "snoDisplay": "109.",
    "name": "St. Joseph’s Institute of Management, Bengaluru Karnataka",
    "address": "St. Joseph’s Institute of Management 28/1, Primrose Road, Off. M. G. Road, Bengaluru - 560025 Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2022 – 30.06.2028",
    "collegeId": "st-joseph-s-bengaluru"
  },
  {
    "sno": 110,
    "snoDisplay": "110.",
    "name": "TA Pai Management Institute (TAPMI) Manipal, Karnataka",
    "address": "TA Pai Management Institute (TAPMI) Post Box No. 9, Manipal, Karnataka – 576104",
    "city": "other",
    "cityName": "Karnataka",
    "state": "Karnataka",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM – BKFS",
      "PGDM – HRM",
      "PGDM – Mkt."
    ],
    "validity": "01.07.2016 – 30.06.2023",
    "collegeId": "tapmi-manipal"
  },
  {
    "sno": 111,
    "snoDisplay": "111.",
    "name": "Thiagarajar School of Business, Madurai, Tamil Nadu (Formerly Thiagarajar School of Management, Madurai)",
    "address": "Thiagarajar School of Business (Formerly Thiagarajar School of Management, Madurai) Pamban Swamy Nagar, Madurai- 625 005, Tamil Nadu",
    "city": "other",
    "cityName": "Tamil Nadu",
    "state": "Tamil Nadu",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2015 – 30.06.2025",
    "collegeId": null
  },
  {
    "sno": 112,
    "snoDisplay": "112.",
    "name": "The Rajagiri Business School, Kochi Kerala",
    "address": "The Rajagiri Business School, Kochi, Kerala Rajagiri Valley P.O. Kakkanad, Kochi – 682039, Kerala",
    "city": "other",
    "cityName": "Kerala",
    "state": "Kerala",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "01.06.2012 – 30.06.2025",
    "collegeId": null
  },
  {
    "sno": 113,
    "snoDisplay": "113.",
    "name": "Universal Business School Maharashtra",
    "address": "Universal Business School Kushiwali Village, Vadap Grampanchayat, Karjat, Dist. Raigarh, Maharashtra – 410201",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2020 – 30.06.2022",
    "collegeId": "universal-ai-mumbai"
  },
  {
    "sno": 114,
    "snoDisplay": "114.",
    "name": "Vaikunth Mehta National Institute of Cooperative Mgmt., Pune",
    "address": "Vaikunth Mehta National Institute of Cooperative Management Ganeshkhind Road, Near Pune University, Pune - 411 007",
    "city": "pune",
    "cityName": "Pune",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM-ABM (Agri. Bus. Management)"
    ],
    "validity": "2002 – 30.06.2025",
    "collegeId": "vamnicom-pune"
  },
  {
    "sno": 115,
    "snoDisplay": "115.",
    "name": "Vignana Jyothi Institute of Management, Bachupally, Hyderabad",
    "address": "Vignana Jyothi Institute of Management Miyapur Road, Nizampet, Bachupally, Hyderabad- 500 090",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM"
    ],
    "validity": "03.06.2013 – 30.06.2028",
    "collegeId": null
  },
  {
    "sno": 116,
    "snoDisplay": "116.",
    "name": "Vishwa Vishwani Institute of Systems & Management, Hyderabad Telangana",
    "address": "Vishwa Vishwani Institute of Systems & Management Boston House, Thumkunta (P.O.), Shameerpet Road, Hakimpet (via), Hyderabad, Telangana – 500078",
    "city": "other",
    "cityName": "Hyderabad",
    "state": "Telangana",
    "isTargetCity": false,
    "programs": [
      "PGDM – BM"
    ],
    "validity": "01.01.2026 – 31.12.2028",
    "collegeId": null
  },
  {
    "sno": 117,
    "snoDisplay": "117.",
    "name": "Vivekanand Education Society’s Institute of Management Studies and Research, Mumbai",
    "address": "Vivekanand Education Society’s Institute of Management Studies and Research 495-497 Hashu Advani Memorial Complex, Chembur Mumbai, 400074, India",
    "city": "mumbai",
    "cityName": "Mumbai",
    "state": "Maharashtra",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 – 30.06.2025",
    "collegeId": "vesim-mumbai"
  },
  {
    "sno": 118,
    "snoDisplay": "118.",
    "name": "Welingkar Institute of Management Development & Research, Bangalore",
    "address": "Welingkar Institute of Management Development & Research No.102 & 103, Electronic City Phase-I, Bangalore – 560100",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM",
      "PGDM- E-Business",
      "PGDM-BDA (Business Design & Innovation)",
      "PGDM-RBA (Research and Business Analytics)"
    ],
    "validity": "26.11.2013 – 25.11.2018 & 01.07.2019– 30.06.2029",
    "collegeId": null
  },
  {
    "sno": 119,
    "snoDisplay": "119.",
    "name": "Xavier Institute of Management & Entrepreneurship, Bangalore",
    "address": "Xavier Institute of Management & Entrepreneurship, (XIME) Electronics City, Phase-II, Hosur Road, Bangalore – 560100",
    "city": "bangalore",
    "cityName": "Bangalore",
    "state": "Karnataka",
    "isTargetCity": true,
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2021 – 30-06-2028",
    "collegeId": "xime-xavier-entrepreneurship-bengaluru"
  },
  {
    "sno": 120,
    "snoDisplay": "120.",
    "name": "Xavier Institute of Management, Bhubaneswar, Odisha",
    "address": "Xavier Institute of Management, Bhubaneswar Xavier Institute of Management, Bhubaneswar - 751013, Odisha, India",
    "city": "other",
    "cityName": "Bhubaneswar",
    "state": "Odisha",
    "isTargetCity": false,
    "programs": [
      "PGDM",
      "PGDM-RM"
    ],
    "validity": "Sept 2002 – 30.06.2014",
    "collegeId": "ximb-bhubaneswar"
  },
  {
    "sno": 121,
    "snoDisplay": "121.",
    "name": "Xavier Institute of Social Service, Ranchi Jharkhand",
    "address": "Xavier Institute of Social Service, Dr Camil Bulcke Path (Purulia Road), Post Box – 7, Ranchi Jharkhand - 834001",
    "city": "other",
    "cityName": "Ranchi",
    "state": "Jharkhand",
    "isTargetCity": false,
    "programs": [
      "PGDM – Human Resource Management",
      "PGDM – Rural Management",
      "PGDM – Financial Management",
      "PGDM – Marketing Management"
    ],
    "validity": "01-07-2022 – 30-06-2028",
    "collegeId": null
  }
];
