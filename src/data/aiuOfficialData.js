/**
 * Official Association of Indian Universities (AIU) Equivalence Dataset
 * Extracted directly from:
 * https://aiu.ac.in/wp-content/uploads/docs/2026/06/PGDM_Institution_List_June_2026.pdf
 * 
 * Covering 9 Major Management Hubs:
 * 1. Delhi NCR
 * 2. Pune
 * 3. Mumbai
 * 4. Bangalore
 * 5. Jaipur
 * 6. Kolkata
 * 7. Dehradun
 * 8. Lucknow
 * 9. Indore
 */

export const AIU_DOCUMENT_INFO = {
  title: 'Association of Indian Universities (AIU) - List of Equated Two-Year Full-Time PGDM Institutions',
  officialPdfUrl: 'https://aiu.ac.in/wp-content/uploads/docs/2026/06/PGDM_Institution_List_June_2026.pdf',
  edition: 'June 2026 Official Gazette',
  governingBody: 'Association of Indian Universities (AIU), AIU House, 16 Comrade Indrajit Gupta Marg, New Delhi 110002',
  regulatoryScope: 'Equating 2-Year Full-Time PGDM with Master of Business Administration (MBA) Degree for Higher Studies (Ph.D) & Executive Employment in Govt/PSU/Corporate sectors.',
  legalValidation: 'AIU approval remains valid as long as AICTE approval and NBA/AACSB/AMBA accreditation for the course remains valid.'
};

export const AIU_CITY_GAZETTE_STATS = {
  'delhi-ncr': { institutes: 35, programs: 60, title: 'Delhi NCR' },
  'pune': { institutes: 14, programs: 24, title: 'Pune' },
  'mumbai': { institutes: 10, programs: 23, title: 'Mumbai' },
  'bangalore': { institutes: 15, programs: 19, title: 'Bangalore' },
  'jaipur': { institutes: 3, programs: 3, title: 'Jaipur' },
  'kolkata': { institutes: 5, programs: 5, title: 'Kolkata' },
  'dehradun': { institutes: 0, programs: 0, title: 'Dehradun', note: 'Colleges in Dehradun are State / Private Universities (UPES, Graphic Era, DIT, IMS Unison) that award statutory MBA Degrees directly under UGC Acts without requiring autonomous AIU equivalence certificates.' },
  'lucknow': { institutes: 2, programs: 4, title: 'Lucknow' },
  'indore': { institutes: 2, programs: 2, title: 'Indore' }
};

export const AIU_OFFICIAL_LIST = [
  {
    "sno": 1,
    "snoDisplay": "1.",
    "name": "ABBS School of Management, Bengaluru Karnataka",
    "address": "ABBS School of Management Andrahalli Main Road, Off Magadi Road, Bengaluru, Karnataka \u2013 560091",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "07.03.2024 \u2013 07.03.2027",
    "collegeId": "abbs-bengaluru"
  },
  {
    "sno": 2,
    "snoDisplay": "2.",
    "name": "Acharya School of Management, Bangalore",
    "address": "Acharya School of Management, Acharya Dr. Sarvepalli Radhakrishnan Road, Soldevanabhalli, Hesaraghatta Main Road, Bangalore",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "26.11.2013 \u2013 25.11.2018",
    "collegeId": "acharya-bangalore-b-bengaluru"
  },
  {
    "sno": 32,
    "snoDisplay": "32.",
    "name": "Global Institute of Business Studies, Bengaluru, Karnataka",
    "address": "Global Institute of Business Studies #44/4/5/8, Mylasandra Road, Begur Hobli, Bengaluru Karnataka \u2013 560068",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01-01-2026 \u2013 31-12-2028",
    "collegeId": "gibs-business-school-bangalore"
  },
  {
    "sno": 42,
    "snoDisplay": "42.",
    "name": "Indian Institute of Management (IIM), Bangalore",
    "address": "Indian Institute of Management (IIM), Bangalore Bannerghatta Road, Bangalore - 560 076",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "Since 15.04.1978",
    "collegeId": "iim-bangalore"
  },
  {
    "sno": 48,
    "snoDisplay": "48.",
    "name": "Indus Business Academy Bangalore",
    "address": "Indus Business Academy, IBA Campus, Survey No. 164, Bangalore- 560 062",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 \u2013 30.06.2022 & 01.07.2024 \u2013 30.06.2027",
    "collegeId": "iba-bangalore"
  },
  {
    "sno": 53,
    "snoDisplay": "53.",
    "name": "International School of Business & Research, Bengaluru, Karnataka",
    "address": "ISBR Business School Plot No. 107, Electronics City Phase 1, Bengaluru Urban Karnataka 560 100",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 \u2013 30.06.2025",
    "collegeId": "isbr-business-school-bangalore"
  },
  {
    "sno": 54,
    "snoDisplay": "54.",
    "name": "International School of Management Excellence, Bengaluru, Karnataka",
    "address": "International School of Management Excellence Sy. No. 88, Chembvanahalli, Sarjapur Road, Bangalore\u2013 562125 Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 \u2013 30.06.2025",
    "collegeId": "isme-bangalore"
  },
  {
    "sno": 62,
    "snoDisplay": "62.",
    "name": "Jagdish Sheth School of Management (JAGSOM), Bangalore, Karnataka (Formerly IFIM Business School)",
    "address": "Jagdish Sheth School of Management (JAGSOM) (Formerly IFIM Business School) # 8P & 9P, KIADB Industrial Area, Electronics City Phase 1, Bangalore 560100, Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "July 2002 \u2013 29.12.2016 & 01.07.2017 \u2013 30.06.2019 & 22.02.2020 \u2013 22.02.2027",
    "collegeId": "jagsom-mumbai"
  },
  {
    "sno": 63,
    "snoDisplay": "63.",
    "name": "Institute of Health Management Research, Bangalore",
    "address": "Institute of Health Management Research, Bangalore #319, Near Thimmareddy Layout, Hulimangala Post, Electronic City, Bangalore- 560 105",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM -HHM"
    ],
    "validity": "01.07.2018- 30.06.2025",
    "collegeId": "iihmr-bangalore"
  },
  {
    "sno": 67,
    "snoDisplay": "67.",
    "name": "International Institute of Business Study (IIBS), Bangalore, Karnataka",
    "address": "International Institute of Business Study (IIBS) #75, Muthugadahalli, Jala Hobli, Bangalore North Taluk, Bangalore Karnataka \u2013 562157",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2024 \u2013 30.06.2027",
    "collegeId": "iibs-bangalore"
  },
  {
    "sno": 72,
    "snoDisplay": "72.",
    "name": "Indian Institute of Plantation Management, Bangalore",
    "address": "Indian Institute of Plantation Management Jhana Bharathi Campus, P.O. Malathalli, Bangalore- 560 056",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM- ABPM",
      "PGDM- FPBM"
    ],
    "validity": "01.07.2016 - 30.06.2019 & 01-07-2021 \u2013 30-06-2027",
    "collegeId": "iipm-bangalore"
  },
  {
    "sno": 91,
    "snoDisplay": "91.",
    "name": "M.S. Ramaiah Institute of Management (MSRIM), Karnataka",
    "address": "M.S. Ramaiah Institute of Management (MSRIM) Gate No. 3, Behind M.S. Ramaiah University of Applied Sciences, New BEL Road, MSRIT Post, Bangalore \u2013 560054, Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 \u2013 30.06.2025",
    "collegeId": "ms-ramaiah-mims-bengaluru"
  },
  {
    "sno": 109,
    "snoDisplay": "109.",
    "name": "St. Joseph\u2019s Institute of Management, Bengaluru Karnataka",
    "address": "St. Joseph\u2019s Institute of Management 28/1, Primrose Road, Off. M. G. Road, Bengaluru - 560025 Karnataka",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2022 \u2013 30.06.2028",
    "collegeId": "st-joseph-s-bengaluru"
  },
  {
    "sno": 118,
    "snoDisplay": "118.",
    "name": "Welingkar Institute of Management Development & Research, Bangalore",
    "address": "Welingkar Institute of Management Development & Research No.102 & 103, Electronic City Phase-I, Bangalore \u2013 560100",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM",
      "PGDM- E-Business",
      "PGDM-BDA (Business Design & Innovation)",
      "PGDM-RBA (Research and Business Analytics)"
    ],
    "validity": "26.11.2013 \u2013 25.11.2018 & 01.07.2019\u2013 30.06.2029",
    "collegeId": "welingkar-mumbai"
  },
  {
    "sno": 119,
    "snoDisplay": "119.",
    "name": "Xavier Institute of Management & Entrepreneurship, Bangalore",
    "address": "Xavier Institute of Management & Entrepreneurship, (XIME) Electronics City, Phase-II, Hosur Road, Bangalore \u2013 560100",
    "city": "bangalore",
    "cityName": "Bangalore",
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2021 \u2013 30-06-2028",
    "collegeId": "xime-xavier-entrepreneurship-bengaluru"
  },
  {
    "sno": 4,
    "snoDisplay": "4.",
    "name": "Apeejay School of Management, New Delhi",
    "address": "Apeejay School of Management Sector- 8, Institutional Area, Dwarka, New Delhi- 110077",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "30.12.2014 \u2013 29.12.2016 & 01-07-2019 \u2013 30.06.2028",
    "collegeId": "asm-apeejay-school-of-management-delhi"
  },
  {
    "sno": 5,
    "snoDisplay": "5.",
    "name": "Asia Pacific Institute of Management, New Delhi",
    "address": "Asia-pacific institute of Management 3 & 4 Institutional Area, Jasola, Opp. Sarita Vihar, New Delhi \u2013 110025",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "August 2010 \u2013 30-06-2017",
    "collegeId": "asia-pacific-institute-of-management-delhi"
  },
  {
    "sno": 7,
    "snoDisplay": "7.",
    "name": "Asian Business School, Noida",
    "address": "Asian Business School Plot A2, Section 125, Noida \u2013 201303, Uttar Pradesh",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2021 \u2013 30.06.2027",
    "collegeId": "asian-business-school-abs-noida"
  },
  {
    "sno": 12,
    "snoDisplay": "12.",
    "name": "Birla Institute of Management Technology (BIMTECH), Greater Noida, Uttar Pradesh",
    "address": "Birla Institute of Management Technology Plot No. 5, Knowledge Park II, Greater Noida (NCR) Uttar Pradesh \u2013 201 306",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM-IB (International Business)",
      "PGDM - IBM (Insurance Business Mgt)",
      "PGDM - RM (Retail Mgt.)"
    ],
    "validity": "01.10.2009 \u2013 30.06.2028",
    "collegeId": "bimtech-noida"
  },
  {
    "sno": 13,
    "snoDisplay": "13.",
    "name": "Bharatiya Vidya Bhavan\u2019s Usha & Lakshmi Mittal Institute of Management, New Delhi",
    "address": "Bharatiya Vidya Bhavan\u2019s Usha & Lakshmi Mittal Institute of Management Kasturba Gandhi Marg, New Delhi \u2013 110001",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.06. 2012 \u2013 30.06.2019",
    "collegeId": null
  },
  {
    "sno": 15,
    "snoDisplay": "15.",
    "name": "Centre for Management Development, Modinagar Uttar Pradesh",
    "address": "Centre For Management Development, Modinagar Uttar Pradesh - 201204",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "2003 \u2013 30.06.2019",
    "collegeId": null
  },
  {
    "sno": 22,
    "snoDisplay": "22.",
    "name": "Delhi School of Business (Formerly known as Vivekananda Institute of Professional Studies), Delhi",
    "address": "Delhi School of Business (Formerly known as Vivekananda Institute of Professional Studies) AU Block, (Outer Rind Road), Pitampura, New Delhi 110 034",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 30.06.2025",
    "collegeId": "delhi-school-of-business-delhi"
  },
  {
    "sno": 24,
    "snoDisplay": "24.",
    "name": "EMPI Business School, New Delhi",
    "address": "EMPI Business School Camp P.O.: CSKM Educational Complex, Satbari, Chattarpur, New Delhi \u2013 110074, India",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07. 2010 \u2013 29.12.2016",
    "collegeId": "empi-business-school-delhi"
  },
  {
    "sno": 26,
    "snoDisplay": "26.",
    "name": "Fore School of Management, New Delhi",
    "address": "Fore School of Management B-18, Qutub Institutional Area, New Delhi - 110 016 (India)",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM - IB",
      "PGDM \u2013 BDA",
      "PGDM - FM"
    ],
    "validity": "July 2002 \u2013 30.06.2028",
    "collegeId": "fore-school-delhi"
  },
  {
    "sno": 27,
    "snoDisplay": "27.",
    "name": "Fortune Institute of International Business, New Delhi",
    "address": "Fortune Institute of International Business Plot No.05, Opp. R & R Hospital Rao Tula Ram Marg, New Delhi -110057",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM \u2013 FM"
    ],
    "validity": "October 2012 \u2013 30-06-2028",
    "collegeId": "fiib-delhi"
  },
  {
    "sno": 28,
    "snoDisplay": "28.",
    "name": "FOSTIIMA Business School, Dwarka, New Delhi",
    "address": "FOSTIIMA Business School, Dwarka Sector \u2013 9, Pocket \u2013 2, HAF \u2013 1, Dwarka New Delhi \u2013 110077",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2025 \u2013 30.06.2028",
    "collegeId": "fostiima-business-school-delhi"
  },
  {
    "sno": 31,
    "snoDisplay": "31.",
    "name": "G.L. Bajaj Institute of Management and Research, PGDM Institute, Uttar Pradesh",
    "address": "G.L. Bajaj Institute of Management and Research, PGDM Institute Plot No. 2, Knowledge Park III, Greater Noida, Distt. - Gautam Buddha Nagar, Uttar Pradesh - 201306",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2022 \u2013 30-06-2028",
    "collegeId": "gl-bajaj-institute-of-management-and-research-greater-noida"
  },
  {
    "sno": 33,
    "snoDisplay": "33.",
    "name": "Guru Nanak Institute of Management, New Delhi",
    "address": "Guru Nanak Institute of Management Road No. 75West Punjabi Bagh New Delhi- 110026",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "03.06.2013 \u2013 30-06-2018",
    "collegeId": null
  },
  {
    "sno": 34,
    "snoDisplay": "34.",
    "name": "Graduate School of Business Administration, Noida, Uttar Pradesh",
    "address": "Graduate School of Business & Administration Plot No. HS-02, Block-F, Sector-Alpha-2 Greater Noida \u2013 201 306, Uttar Pradesh, (India)",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "2003 \u2013 30.06.2010",
    "collegeId": null
  },
  {
    "sno": 35,
    "snoDisplay": "35.",
    "name": "Great Lakes Institute of Management, Gurgaon Haryana",
    "address": "Great Lakes Institute of Management, Gurgaon Bilaspur - Tauru Road, Gurgaon \u2013 122413 Haryana",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2021 \u2013 30-06-2027",
    "collegeId": "great-lakes-gurgaon"
  },
  {
    "sno": 50,
    "snoDisplay": "50.",
    "name": "Institute of Management Technology, Ghaziabad",
    "address": "Institute of Management Technology Raj Nagar, Post Box No. 137 Ghaziabad - 201001",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM- Finance",
      "PGDM- Marketing",
      "PGDM - Banking & Financial Services",
      "PGDM- Dual Country Program"
    ],
    "validity": "1997 \u2013 30.06.2028",
    "collegeId": "imt-ghaziabad"
  },
  {
    "sno": 55,
    "snoDisplay": "55.",
    "name": "I.T.S School of Management (formerly Institute of Technology & Science) Mohan Nagar, Ghaziabad",
    "address": "I.T.S School of Management (formerly Institute of Technology &Science, Mohan Nagar, Ghaziabad G.T. Road, Mohan Nagar Ghaziabad UP",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "2004 \u2013 30.06.2028",
    "collegeId": "its-ghaziabad"
  },
  {
    "sno": 56,
    "snoDisplay": "56.",
    "name": "I.T.S. Institute of Management, Greater Noida Uttar Pradesh",
    "address": "I.T.S. Institute of Management 46, Knowledge Park-III, Greater Noida",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "26.11.2013 \u2013 25.11.2016",
    "collegeId": null
  },
  {
    "sno": 57,
    "snoDisplay": "57.",
    "name": "Institute for Integrated Learning in Management (IILM), Greater Noida, Uttar Pradesh",
    "address": "Institute for Integrated Learning in Management (IILM) 16, Knowledge Park \u2013 II Greater Noida \u2013 201 306, Uttar Pradesh",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "2003 \u2013 30.06.2022",
    "collegeId": "iilm-greater-noida"
  },
  {
    "sno": 64,
    "snoDisplay": "64.",
    "name": "Institute of Management Studies (IMS), Ghaziabad Uttar Pradesh",
    "address": "Institute of Management Studies Lal Quan, Bulandshahar Road Ghaziabad Uttar Pradesh - 201009",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "April 2001 \u2013 30.06.2028",
    "collegeId": "ims-ghaziabad"
  },
  {
    "sno": 65,
    "snoDisplay": "65.",
    "name": "Institute of Management Studies, Noida",
    "address": "Institute of management Studies, Noida A-8B, Sector-62, Noida UP-201 303, INDIA",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2012 \u2013 30.06.2019",
    "collegeId": "ims-noida"
  },
  {
    "sno": 66,
    "snoDisplay": "66.",
    "name": "International Institute of Health Management Research, New Delhi",
    "address": "International Institute of Health Management Research, Plot No-3, Sector-18A, Dwarka, New Delhi-110075, India",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM - Hospital and Health Mgmt."
    ],
    "validity": "01.07.2017 \u2013 30.06.2028",
    "collegeId": null
  },
  {
    "sno": 69,
    "snoDisplay": "69.",
    "name": "International Management Institute, New Delhi",
    "address": "International Management Institute B-10, Qutab Institutional Area Tara Crescent New Delhi \u2013 110016.India.",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM- HRM",
      "PGDM-BFS"
    ],
    "validity": "2001 \u2013 30.06.2022 & AY 2022 to 2027",
    "collegeId": "imi-new-delhi"
  },
  {
    "sno": 73,
    "snoDisplay": "73.",
    "name": "Ishan Institute of Management, New Delhi",
    "address": "Ishan Institute of Management, New Delhi 219 Hans Bhavan, 1 Bahadur Shah Zafar Marg, New Delhi-110002",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
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
    "address": "IILM Institute for Higher Education, Rai School Complex, Institutional Area New Delhi \u2013 110003",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 \u2013 30.06.2022",
    "collegeId": null
  },
  {
    "sno": 76,
    "snoDisplay": "76.",
    "name": "Jagan Institute of Management Studies, Delhi",
    "address": "Jagan Institute of Management Studies 3, Institutional Area, Sector \u2013 5, Rohini, Delhi\u2013 110085",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
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
    "programs": [
      "PGDM",
      "PGDM- International Business"
    ],
    "validity": "16.07.2013 \u2013 30.06.2018 & 01.07.2019 \u2013 10.02.2025 & 01.07.2025 \u2013 30.06.2028",
    "collegeId": "jims-kalkaji-delhi"
  },
  {
    "sno": 79,
    "snoDisplay": "79",
    "name": "Jaipuria Institute of Management, Noida",
    "address": "Jaipuria Institute of Management, Noida, Plot No. A-32A, Sector-62, Noida-201309",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM- Marketing",
      "PGDM- Service Management"
    ],
    "validity": "03.06.2013 \u2013 30.06.2028",
    "collegeId": "jaipuria-noida"
  },
  {
    "sno": 82,
    "snoDisplay": "82.",
    "name": "Jaipuria School of Business, Ghaziabad, Uttar Pradesh",
    "address": "Jaipuria School of Business Block \u2013 B, Shakti Khand IV, Indirapuram, Ghaziabad Uttar Pradesh \u2013 201014",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2023 \u2013 30-06-2026",
    "collegeId": "jaipuria-school-of-business"
  },
  {
    "sno": 87,
    "snoDisplay": "87.",
    "name": "Lal Bahadur Shastri Institute of Management, New Delhi",
    "address": "Lal Bahadur Shastri Institute of Management, New Delhi Dwarka Campus: Plot No. 11/7, Sector 11 Dwarka, New Delhi - 110 075",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM - FM",
      "PGDM - RBA"
    ],
    "validity": "01.10.2010 \u2013 17.09.2016 & 01.07.2017 \u2013 30.06.2028",
    "collegeId": "lbsim-delhi"
  },
  {
    "sno": 89,
    "snoDisplay": "89.",
    "name": "Management Development Institute (MDI), Gurgaon",
    "address": "Management Development Institute Mehrauli Road, Sukhrali, Gurgaon - 122007, INDIA",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM (HRM)",
      "PGDM (IB)"
    ],
    "validity": "Dec. 1997 \u2013 30.06.2028",
    "collegeId": "mdi-gurgaon"
  },
  {
    "sno": 94,
    "snoDisplay": "94.",
    "name": "National Institute of Financial Management, Faridabad",
    "address": "National Institute of Financial Management, Faridabad Sector-48, Pali Road, Faridabad- 121001",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "July 2008 \u2013 29-12-2016",
    "collegeId": null
  },
  {
    "sno": 98,
    "snoDisplay": "98.",
    "name": "NIET Business, School, Greater Noida Uttar Pradesh (formerly Noida Institute of Engineering and Technology (MCA Institute))",
    "address": "NIET Business, School, Greater Noida 19, Knowledge Park \u2013 II, Institutional Area, Great Noida, Uttar Pradesh \u2013 201306",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2023 \u2013 30.06.2026",
    "collegeId": "niet-greater-noida"
  },
  {
    "sno": 99,
    "snoDisplay": "99.",
    "name": "New Delhi Institute of Management, New Delhi",
    "address": "New Delhi institute of Management 60 & 50 (B&C), Behind Batra Hospital, Tughlakabad Institutional Area New Delhi -110062",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM",
      "PGDM- Marketing",
      "PGDM- FM"
    ],
    "validity": "May 2008 \u2013 29-12-2016 & 01.07.2020 \u2013 30.06.2029",
    "collegeId": "new-delhi-institute-of-management"
  },
  {
    "sno": 100,
    "snoDisplay": "100.",
    "name": "NIILM Centre for Management Studies, New Delhi",
    "address": "NIILM Centre for Management Studies Plot No-53, Knowledge Park V, Greater Noida \u2013 201306, U.P.",
    "city": "delhi-ncr",
    "cityName": "Delhi NCR",
    "programs": [
      "PGDM"
    ],
    "validity": "April 2004 \u2013 29-12-2017",
    "collegeId": null
  },
  {
    "sno": 41,
    "snoDisplay": "41.",
    "name": "Indian Institute of Management (IIM), Indore",
    "address": "Indian Institute of Management (IIM), Indore Prabandh Shikhar, Rau \u2013 Pithampur Road Indore 453 331 Madhya Pradesh INDIA",
    "city": "indore",
    "cityName": "Indore",
    "programs": [
      "PGDM"
    ],
    "validity": "Since 26.03.2001",
    "collegeId": "iim-indore"
  },
  {
    "sno": 81,
    "snoDisplay": "81.",
    "name": "Jaipuria Institute of Management, Indore Madhya Pradesh",
    "address": "Jaipuria Institute of Management, Indore Dakachaya, Indore Dewas Highway, Near Shipra Naka, Indore-453771, Madhya Pradesh",
    "city": "indore",
    "cityName": "Indore",
    "programs": [
      "PGDM"
    ],
    "validity": "01-07-2018 \u2013 30-06-2028",
    "collegeId": "jaipuria-lucknow"
  },
  {
    "sno": 46,
    "snoDisplay": "46.",
    "name": "Institute of Health Management Research, Jaipur",
    "address": "Institute of Health Management Research 1, Prabhu Dayal Marg, Sanganer Airport Jaipur \u2013 302 011",
    "city": "jaipur",
    "cityName": "Jaipur",
    "programs": [
      "PGDM- Health Management"
    ],
    "validity": "2002 \u2013 30.06.2014",
    "collegeId": "iihmr-jaipur"
  },
  {
    "sno": 60,
    "snoDisplay": "60.",
    "name": "Institute of Rural Management, Jaipur, Rajasthan",
    "address": "Institute of Rural Management, IIRM Campus, Sector \u2013 11, Tagore Marg, Agarwal Farm, Jaipur \u2013 302020, Rajasthan",
    "city": "jaipur",
    "cityName": "Jaipur",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 - 30.06.2022",
    "collegeId": "iirm-jaipur"
  },
  {
    "sno": 78,
    "snoDisplay": "78.",
    "name": "Jaipuria Institute of Management, Jaipur",
    "address": "Jaipuria Institute of Management Jaipur, Bambala Institutional Area, Pratab Nagar, Sanganer, Jaipur \u2013 302033",
    "city": "jaipur",
    "cityName": "Jaipur",
    "programs": [
      "PGDM"
    ],
    "validity": "03.06.2013 \u2013 30.06.2028",
    "collegeId": "jaipuria-institute-of-management-jaipur"
  },
  {
    "sno": 14,
    "snoDisplay": "14.",
    "name": "Calcutta Business School, 24 Parganas, West Bengal",
    "address": "Calcutta Business School Diamond Harbour Road, Bishnupur, 24 Parganas (South), West Bengal - 743503",
    "city": "kolkata",
    "cityName": "Kolkata",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 \u2013 30.06.2018",
    "collegeId": "calcutta-kolkata"
  },
  {
    "sno": 29,
    "snoDisplay": "29.",
    "name": "Globsyn Business School, 24 Parganas, West Bengal",
    "address": "Globsyn Business School National Campus Mouza Chandi, PS- Bishnupur J.L. No. 101, D.H. Road Amtala, West Bengal- 743503, India",
    "city": "kolkata",
    "cityName": "Kolkata",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 \u2013 30.06.2019",
    "collegeId": "globsyn-kolkata"
  },
  {
    "sno": 43,
    "snoDisplay": "43.",
    "name": "Indian Institute of Management (IIM), Kolkata",
    "address": "Indian Institute of Management (IIM), Calcutta Diamond Harbour Road, Joka, Kolkata (Calcutta) \u2013 700104 West Bengal, INDIA",
    "city": "kolkata",
    "cityName": "Kolkata",
    "programs": [
      "PGDM"
    ],
    "validity": "Since 03.04.1969",
    "collegeId": "iim-calcutta"
  },
  {
    "sno": 70,
    "snoDisplay": "70.",
    "name": "International Management Institute, Kolkata",
    "address": "International Management Institute, Kolkata, 2/4C, Judges Court Road, Alipore, Kolkata- 700027, India",
    "city": "kolkata",
    "cityName": "Kolkata",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2016 \u2013 30.06.2022 & AY 2022 to 2027",
    "collegeId": "imi-kolkata"
  },
  {
    "sno": 102,
    "snoDisplay": "102.",
    "name": "Praxis Business School Kolkata West Bengal",
    "address": "Praxis Business School Bakrahat Road, Charaktala, PO \u2013 Rasapunja, South 24 parganas, Kolkata West Bengal \u2013 700104",
    "city": "kolkata",
    "cityName": "Kolkata",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07-2024 \u2013 30.06.2027",
    "collegeId": "praxis-kolkata"
  },
  {
    "sno": 40,
    "snoDisplay": "40.",
    "name": "Indian Institute of Management (IIM), Lucknow",
    "address": "Indian Institute of Management (IIM) Prabandh Nagar, Off Sitapur Road, Lucknow \u2013 226 013",
    "city": "lucknow",
    "cityName": "Lucknow",
    "programs": [
      "PGDM"
    ],
    "validity": "Since 06.03.1991",
    "collegeId": "iim-lucknow"
  },
  {
    "sno": 80,
    "snoDisplay": "80.",
    "name": "Jaipuria Institute of Management, Lucknow",
    "address": "Jaipuria Institute of Management, Lucknow, Vineet Khand, Gomti Nagar Lucknow \u2013 226 010",
    "city": "lucknow",
    "cityName": "Lucknow",
    "programs": [
      "PGDM",
      "PGDM \u2013 Retail Management",
      "PGDM- Financial Services"
    ],
    "validity": "26.11.2013 \u2013 30.06.2031",
    "collegeId": "jaipuria-lucknow"
  },
  {
    "sno": 17,
    "snoDisplay": "17.",
    "name": "Chetana\u2019s Institute of Management & Research Maharashtra",
    "address": "Chetana\u2019s Institute of Management & Research Survey No. 341, Bandra (EAST) Mumbai \u2013 400051 Maharashtra",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM",
      "PGDM - Marketing"
    ],
    "validity": "01.07.2022 \u2013 30.06.2028",
    "collegeId": "chetana-cimr-mumbai"
  },
  {
    "sno": 38,
    "snoDisplay": "38.",
    "name": "Indian Education Society\u2019s Management College and Research Centre, Mumbai",
    "address": "India Education Society\u2019s Management College and Research Centre VMDL Vidya Sankul 791, S. K. Marg, Bandra Reclamation, Mumbai \u2013 400050",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2019 \u2013 30.06.2025",
    "collegeId": "ies-mcrc-mumbai"
  },
  {
    "sno": 58,
    "snoDisplay": "58.",
    "name": "Institute for Technology and Management, Kharghar (East), Navi Mumbai",
    "address": "ITM Business School, Navi Mumbai Plot 25/26, Institutional Area, Sector -4 Kharghar East, Navi Mumbai \u2013 410 210",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM"
    ],
    "validity": "01.09.2011 \u2013 30.06.2025",
    "collegeId": "itm-business-school-mumbai"
  },
  {
    "sno": 85,
    "snoDisplay": "85.",
    "name": "K J Somaiya Institute of Management Studies & Research, Mumbai",
    "address": "K J Somaiya Institute of Management Studies & Research Vidya Nagar, Vidya Vihar, Mumbai-400077",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM (Retail Management",
      "PGDM",
      "PGDM (International Business)",
      "PGDM (Financial Service)"
    ],
    "validity": "01.06.2012 \u2013 30.06.2019",
    "collegeId": "kj-somaiya-mumbai"
  },
  {
    "sno": 86,
    "snoDisplay": "86.",
    "name": "Kohinoor Management School, Mumbai",
    "address": "Kohinoor Management School Kohinoor City, Kirol Road, Kurla West, Mumbai Maharashtra - 400070",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM"
    ],
    "validity": "07.03.2024 \u2013 07.03.2027",
    "collegeId": "kohinoor-mumbai"
  },
  {
    "sno": 101,
    "snoDisplay": "101.",
    "name": "N. L. Dalmia Institute of Management Studies and Research, Maharashtra",
    "address": "N.L. Dalmia Institute of Management Studies and Research Srishti, Sector \u2013 1, Mira Road (East), Maharashtra",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM",
      "PGDM \u2013 Finance",
      "PGDM \u2013 BA (Business Analytics)"
    ],
    "validity": "01.07-2022 \u2013 30.06.2028",
    "collegeId": "nl-dalmia-mumbai"
  },
  {
    "sno": 103,
    "snoDisplay": "103.",
    "name": "Prin. L. N. Welingkar Institute of Management Development & Research (PGDM), Mumbai",
    "address": "Prin. L. N. Welingkar Institute of Management Development & Research (PGDM) Lakhamshi Napoo Road, Near Matunga (Central Rly.), Mumbai-400 019",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM",
      "PGDM- Business Design",
      "PGDM \u2013 E - Business",
      "PGDM \u2013 Retail Management",
      "PGDM \u2013 RBA",
      "PGDM \u2013 Media & Entertainment",
      "PGDM \u2013 Rural Management",
      "PGDM \u2013 Healthcare"
    ],
    "validity": "July 2008 \u2013 29-12-2016 & 01.07.2017 - 30.06.2019 & 01.07.2022 \u2013 30-06-2030",
    "collegeId": "welingkar-mumbai"
  },
  {
    "sno": 106,
    "snoDisplay": "106.",
    "name": "S. P. Jain Institute of Management & Research, Mumbai",
    "address": "S.P. Jain Institute of Management & Research, Munshi Nagar, Dadabhai Road, Andheri West, Mumbai - 400 058, India.",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM"
    ],
    "validity": "1997 \u2013 30.06.2028",
    "collegeId": "spjimr-mumbai"
  },
  {
    "sno": 113,
    "snoDisplay": "113.",
    "name": "Universal Business School Maharashtra",
    "address": "Universal Business School Kushiwali Village, Vadap Grampanchayat, Karjat, Dist. Raigarh, Maharashtra \u2013 410201",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2020 \u2013 30.06.2022",
    "collegeId": "universal-ai-mumbai"
  },
  {
    "sno": 117,
    "snoDisplay": "117.",
    "name": "Vivekanand Education Society\u2019s Institute of Management Studies and Research, Mumbai",
    "address": "Vivekanand Education Society\u2019s Institute of Management Studies and Research 495-497 Hashu Advani Memorial Complex, Chembur Mumbai, 400074, India",
    "city": "mumbai",
    "cityName": "Mumbai",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2017 \u2013 30.06.2025",
    "collegeId": "vesim-mumbai"
  },
  {
    "sno": 8,
    "snoDisplay": "8.",
    "name": "Balaji Institute of Management Human Resource Development Pune (BIMHRD)",
    "address": "Balaji Institute of Modern Management, & Human Resource Development Pune (BIMHRD) 55/2-7, Tathawade, Mumbai- Bangalore Bypass, Pune 411033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "Management",
      "Marketing & Finance Management",
      "Personnel Management & Human Resource Development"
    ],
    "validity": "26.11.2013 \u2013 25.11.2018",
    "collegeId": "balaji-international-biib-pune"
  },
  {
    "sno": 9,
    "snoDisplay": "9.",
    "name": "Balaji Institute of Telecom & Management (BITM), Pune",
    "address": "Balaji Institute of Telecom Management Pune (BITM) 55/2-7, Tathawade, Near Wakad, Off. Mumbai-Bangalore Bypass, Pune 411033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "Telecom Management",
      "Telecom & Marketing Management",
      "Marketing & Finance Management"
    ],
    "validity": "26.11.2013 \u2013 25.11.2018",
    "collegeId": "balaji-telecom-bitm-pune"
  },
  {
    "sno": 10,
    "snoDisplay": "10.",
    "name": "Balaji Institute of Modern Management (BIMM), Pune",
    "address": "Balaji Institute of Modern Management (BIMM) 55/2-7, Tathawade, Near Wakad, Off. Mumbai- Bangalore Bypass, Pune - 411 033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "Management",
      "Executive Management",
      "IT & Marketing Management",
      "Personnel Mgmt. & Human Resource Development"
    ],
    "validity": "26.11.2013 \u2013 25.11.2018",
    "collegeId": "balaji-modern-bimm-pune"
  },
  {
    "sno": 11,
    "snoDisplay": "11.",
    "name": "Balaji Institute of International Business (BIIB), Pune",
    "address": "Balaji Institute of International Business (BIIB) 55/2-7, Tathawade, Near Wakad, Off. Mumbai- Bangalore Bypass, Pune 411 033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "International Business Management",
      "Marketing Management",
      "Finance Management"
    ],
    "validity": "26.11.2013 \u2013 25.11.2018",
    "collegeId": "balaji-international-biib-pune"
  },
  {
    "sno": 21,
    "snoDisplay": "21.",
    "name": "Dr. D. Y. Patil B-School Pune, Maharashtra",
    "address": "Dr. D. Y. Patil B-School Bengaluru \u2013 Mumbai Highway Bypass Road, Tathawade, Pune Maharashtra \u2013 411033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2023 \u2013 30.06.2026",
    "collegeId": "dr-d-y-patil-institute-of-management-research-pune"
  },
  {
    "sno": 25,
    "snoDisplay": "25.",
    "name": "Foundation for Liberal and Management Education, District Pune",
    "address": "Foundation for Liberal & Management Education, Gate No. 1270, Lavale, Taluka Mulshi, District Pune \u2013 412115",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "01.01.2016 \u2013 30.06.2020",
    "collegeId": "flame-pune"
  },
  {
    "sno": 45,
    "snoDisplay": "45.",
    "name": "Indira School of Business Studies PGDM, Pune, Maharashtra",
    "address": "Indira School of Business Studies PGDM \u2018Abhinavan\u2019, S. No. 89/2A, Tathawade, Pune, Maharashtra \u2013 411033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM (General)",
      "PGDM - Marketing"
    ],
    "validity": "01.07.2022 \u2013 30.06.2025",
    "collegeId": "indore-indira-indore"
  },
  {
    "sno": 68,
    "snoDisplay": "68.",
    "name": "International Institute of Management Studies (IIMS), Pune, Maharashtra",
    "address": "International Institute of Management Studies (IIMS) Survey No. 54 (1 + 2/1), Nere Dattawadi, Near Hinjawadi Infotech Park, Pune Maharashtra \u2013 411033",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2024 \u2013 30.06.2027",
    "collegeId": "iims-pune"
  },
  {
    "sno": 75,
    "snoDisplay": "75.",
    "name": "Institute of Management Development and Research (IMDR), Pune Maharashtra",
    "address": "Institute of Management Development and Research (IMDR), DES Campus, Agarkar Road, Deccan, Gymkhana, Pune - 411004",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07.2023- 30.06.2026",
    "collegeId": "imdr-pune"
  },
  {
    "sno": 84,
    "snoDisplay": "84.",
    "name": "Kirloskar Institute of Management, Pune Maharashtra",
    "address": "Kirloskar Institute of Management Gut No. 356 & 357, Near Tata Foundry, Village \u2013 Dhamane, Taluka \u2013 Maval Pune Maharashtra \u2013 410506",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "01-01-2026 \u2013 31-12-2028",
    "collegeId": "kirloskar-pune"
  },
  {
    "sno": 93,
    "snoDisplay": "93.",
    "name": "National Insurance Academy, Balewadi, Pune Maharashtra \u2013 411045",
    "address": "National Insurance Academy, Baner Road, NIA P.O., Pune, Maharashtra - 411 045",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "25.07.2013 \u2013 30.06.2027",
    "collegeId": "nia-pune"
  },
  {
    "sno": 96,
    "snoDisplay": "96.",
    "name": "National Institute of Bank Management, Pune, Maharashtra",
    "address": "National Institute of Bank Management, NIBM Post Office, Kondhwe Khurd, Pune Maharashtra - 411048",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM - B&FS"
    ],
    "validity": "01.07.2025 \u2013 30.06.2028",
    "collegeId": "nibm-pune"
  },
  {
    "sno": 104,
    "snoDisplay": "104.",
    "name": "Pune Institute of Business Management for PGDM, Pune, Maharashtra",
    "address": "Pune Institute of Business Management for PGDM Gut No. 605/1, Mukaiwadi Road, Pirangut, Tal \u2013 Mulshi, Paud, Pune \u2013 412115, Maharashtra",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM"
    ],
    "validity": "01.07-2022 \u2013 30.06.2025",
    "collegeId": "pune-institute-of-business-management"
  },
  {
    "sno": 114,
    "snoDisplay": "114.",
    "name": "Vaikunth Mehta National Institute of Cooperative Mgmt., Pune",
    "address": "Vaikunth Mehta National Institute of Cooperative Management Ganeshkhind Road, Near Pune University, Pune - 411 007",
    "city": "pune",
    "cityName": "Pune",
    "programs": [
      "PGDM-ABM (Agri. Bus. Management)"
    ],
    "validity": "2002 \u2013 30.06.2025",
    "collegeId": "vamnicom-pune"
  }
];
