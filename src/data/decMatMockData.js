/**
 * Official Pattern Dec MAT 2026 Mock Test Question Bank
 * Complete Practice Test with Answers & Step-by-Step Explanations
 * 
 * 5 Standard AIMA Sections:
 * 1. Language Comprehension
 * 2. Intelligence & Critical Reasoning
 * 3. Mathematical Skills
 * 4. Data Analysis & Sufficiency
 * 5. Indian & Global Environment
 */

export const DEC_MAT_QUESTIONS_SECTIONS = [
  {
    id: 'mat-dec-lang',
    name: 'Language Comprehension',
    fullName: 'Language Comprehension (Section 1)',
    durationMinutes: 24,
    questions: [
      {
        id: 'mat-dec-q1',
        sectionId: 'mat-dec-lang',
        type: 'mcq',
        passage: 'Sustainable business practices have transitioned from a corporate public relations exercise to an existential mandate for 21st-century enterprises. Investors increasingly evaluate Environmental, Social, and Governance (ESG) metrics alongside traditional financial balance sheets. Empirical research demonstrates that companies with rigorous environmental protocols and transparent supply chains exhibit lower volatility, superior cost of capital, and elevated consumer loyalty. However, the phenomenon of "greenwashing"—superficial or deceptive claims of ecological stewardship without substantive operational reform—poses a significant hazard to market integrity. Regulators in major jurisdictions are responding with standardized disclosure frameworks to separate genuine decarbonization efforts from cosmetic marketing.',
        text: 'According to the passage, why is "greenwashing" considered a hazard to market integrity?',
        options: [
          { id: 'A', text: 'It increases the overall cost of capital for all publicly listed enterprises.' },
          { id: 'B', text: 'It creates superficial or misleading claims of sustainability without genuine operational changes.' },
          { id: 'C', text: 'It forces regulators to eliminate traditional financial balance sheets.' },
          { id: 'D', text: 'It restricts consumer spending solely to companies with zero emissions.' }
        ],
        correctOption: 'B',
        explanation: 'The passage explicitly defines greenwashing as "superficial or deceptive claims of ecological stewardship without substantive operational reform", which misleads stakeholders and damages market integrity.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q2',
        sectionId: 'mat-dec-lang',
        type: 'mcq',
        passage: 'Sustainable business practices have transitioned from a corporate public relations exercise to an existential mandate for 21st-century enterprises. Investors increasingly evaluate Environmental, Social, and Governance (ESG) metrics alongside traditional financial balance sheets. Empirical research demonstrates that companies with rigorous environmental protocols and transparent supply chains exhibit lower volatility, superior cost of capital, and elevated consumer loyalty. However, the phenomenon of "greenwashing"—superficial or deceptive claims of ecological stewardship without substantive operational reform—poses a significant hazard to market integrity. Regulators in major jurisdictions are responding with standardized disclosure frameworks to separate genuine decarbonization efforts from cosmetic marketing.',
        text: 'What tangible business benefits are associated with rigorous environmental protocols, according to the passage?',
        options: [
          { id: 'A', text: 'Immediate tax exemptions and zero regulatory oversight.' },
          { id: 'B', text: 'Complete immunity from competitive market forces.' },
          { id: 'C', text: 'Lower volatility, superior cost of capital, and stronger customer loyalty.' },
          { id: 'D', text: 'Guaranteed triple-digit annual revenue expansion.' }
        ],
        correctOption: 'C',
        explanation: 'Paragraph 1 notes that companies with rigorous environmental protocols exhibit "lower volatility, superior cost of capital, and elevated consumer loyalty".',
        topic: 'Reading Comprehension',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q3',
        sectionId: 'mat-dec-lang',
        type: 'mcq',
        text: 'Select the word that is most nearly OPPOSITE in meaning to the word in bold: "The diplomat was commended for his TACITURN demeanor during contentious bilateral summits."',
        options: [
          { id: 'A', text: 'Loquacious' },
          { id: 'B', text: 'Reticent' },
          { id: 'C', text: 'Prudent' },
          { id: 'D', text: 'Equivocal' }
        ],
        correctOption: 'A',
        explanation: '"Taciturn" means habitually reserved, silent, or uncommunicative. Its exact antonym is "Loquacious", which means talkative or wordy. "Reticent" is a synonym.',
        topic: 'Antonyms & Vocabulary',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q4',
        sectionId: 'mat-dec-lang',
        type: 'mcq',
        text: 'Identify the grammatically correct sentence among the given options:',
        options: [
          { id: 'A', text: 'Neither the managing director nor the senior partners was aware of the forensic audit report.' },
          { id: 'B', text: 'Neither the managing director nor the senior partners were aware of the forensic audit report.' },
          { id: 'C', text: 'Neither the managing director or the senior partners were aware of the forensic audit report.' },
          { id: 'D', text: 'Neither the managing director nor the senior partners have been aware of the forensic audit report yesterday.' }
        ],
        correctOption: 'B',
        explanation: 'When subjects are connected by "neither... nor", the verb agrees in number with the nearer subject. Here "senior partners" is plural, so the plural verb "were" is correct.',
        topic: 'Subject-Verb Agreement',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q5',
        sectionId: 'mat-dec-lang',
        type: 'mcq',
        text: 'Rearrange the following sentences (P, Q, R, S) into a coherent and logical paragraph:\nP: This decentralized ledger architecture prevents unilateral modification of historic records.\nQ: Blockchain technology operates on a distributed cryptographic network across independent nodes.\nR: As a result, supply chain transparency and cross-border settlement speeds are dramatically enhanced.\nS: Each block cryptographically seals batches of valid transactions via consensus mechanisms.',
        options: [
          { id: 'A', text: 'Q - S - P - R' },
          { id: 'B', text: 'P - Q - S - R' },
          { id: 'C', text: 'Q - P - R - S' },
          { id: 'D', text: 'S - Q - P - R' }
        ],
        correctOption: 'A',
        explanation: 'Q introduces the core subject (Blockchain technology on distributed nodes). S explains how each block seals transactions. P explains the consequence of this architecture (preventing unilateral modification). R concludes with the resulting operational benefits (transparency and settlement speeds). Sequence is Q-S-P-R.',
        topic: 'Para Jumbles',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q6',
        sectionId: 'mat-dec-lang',
        type: 'mcq',
        text: 'Choose the most appropriate meaning of the idiomatic expression: "To burn the candle at both ends."',
        options: [
          { id: 'A', text: 'To invest capital recklessly without calculating risks' },
          { id: 'B', text: 'To exhaust one’s energy by working excessively hard from early morning until late night' },
          { id: 'C', text: 'To maintain dual professional loyalties in competing organizations' },
          { id: 'D', text: 'To ignite revolutionary social reforms through passive resistance' }
        ],
        correctOption: 'B',
        explanation: '"To burn the candle at both ends" means to overwork oneself, typically going to bed very late and rising very early, leading to exhaustion.',
        topic: 'Idioms & Phrases',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'mat-dec-reasoning',
    name: 'Intelligence & Critical Reasoning',
    fullName: 'Intelligence & Critical Reasoning (Section 2)',
    durationMinutes: 24,
    questions: [
      {
        id: 'mat-dec-q7',
        sectionId: 'mat-dec-reasoning',
        type: 'mcq',
        text: 'Pointing to a portrait in an art gallery, Rohan said, "His mother is the only daughter of my mother-in-law." How is Rohan related to the person in the portrait?',
        options: [
          { id: 'A', text: 'Uncle' },
          { id: 'B', text: 'Father' },
          { id: 'C', text: 'Brother' },
          { id: 'D', text: 'Maternal Grandfather' }
        ],
        correctOption: 'B',
        explanation: 'The only daughter of Rohan\'s mother-in-law is Rohan\'s wife. The person\'s mother is Rohan\'s wife. Therefore, Rohan is the person\'s father.',
        topic: 'Blood Relations',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q8',
        sectionId: 'mat-dec-reasoning',
        type: 'mcq',
        text: 'Find the missing number in the given series:\n4, 11, 30, 67, 128, ?',
        options: [
          { id: 'A', text: '219' },
          { id: 'B', text: '222' },
          { id: 'C', text: '216' },
          { id: 'D', text: '225' }
        ],
        correctOption: 'A',
        explanation: 'The pattern is (n³ + 3):\n1³ + 3 = 1 + 3 = 4\n2³ + 3 = 8 + 3 = 11\n3³ + 3 = 27 + 3 = 30\n4³ + 3 = 64 + 3 = 67\n5³ + 3 = 125 + 3 = 128\n6³ + 3 = 216 + 3 = 219 (Option A).',
        topic: 'Number Series',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q9',
        sectionId: 'mat-dec-reasoning',
        type: 'mcq',
        text: 'In a certain code language:\n- "lead with vision" is coded as "ki mo tu"\n- "vision brings growth" is coded as "tu ja re"\n- "growth with impact" is coded as "re ki pa"\nWhat is the code for "impact"?',
        options: [
          { id: 'A', text: 'ki' },
          { id: 'B', text: 'pa' },
          { id: 'C', text: 're' },
          { id: 'D', text: 'tu' }
        ],
        correctOption: 'B',
        explanation: 'Comparing 1st & 2nd: "vision" = "tu".\nComparing 1st & 3rd: "with" = "ki".\nComparing 2nd & 3rd: "growth" = "re".\nIn 3rd statement ("growth with impact" = "re ki pa"): since growth=re and with=ki, "impact" must be "pa".',
        topic: 'Coding-Decoding',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q10',
        sectionId: 'mat-dec-reasoning',
        type: 'mcq',
        text: 'Statements:\n1. All fintech firms are regulated entities.\n2. Some regulated entities are neo-banks.\nConclusions:\nI. Some fintech firms are neo-banks.\nII. Some neo-banks are regulated entities.',
        options: [
          { id: 'A', text: 'Only Conclusion I follows' },
          { id: 'B', text: 'Only Conclusion II follows' },
          { id: 'C', text: 'Both Conclusions I and II follow' },
          { id: 'D', text: 'Neither Conclusion I nor II follows' }
        ],
        correctOption: 'B',
        explanation: 'From Statement 2 ("Some regulated entities are neo-banks"), by simple conversion, "Some neo-banks are regulated entities" (Conclusion II) must be true. Conclusion I does not necessarily follow because there is no universal overlap between fintech firms and neo-banks.',
        topic: 'Syllogism',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q11',
        sectionId: 'mat-dec-reasoning',
        type: 'mcq',
        text: 'A courier leaves his distribution hub and travels 12 km North. He then turns right and travels 5 km. He turns right again and travels 8 km, and finally turns left and travels 4 km. How far is he from his starting point in a straight aerial line?',
        options: [
          { id: 'A', text: '13 km' },
          { id: 'B', text: 'sqrt(97) km' },
          { id: 'C', text: 'sqrt(85) km' },
          { id: 'D', text: '10 km' }
        ],
        correctOption: 'B',
        explanation: 'North-South displacement: +12 km (North) - 8 km (South) = +4 km North.\nEast-West displacement: +5 km (East) + 4 km (East) = +9 km East.\nTotal straight-line distance = √(4² + 9²) = √(16 + 81) = √97 km (approx 9.85 km).',
        topic: 'Direction Sense Test',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q12',
        sectionId: 'mat-dec-reasoning',
        type: 'mcq',
        text: 'Statement: "The National Highway Authority has mandated FASTag for all commercial vehicles to eliminate cash congestion at toll plazas."\nAssumptions:\nI. Most commercial vehicles possess digital bank accounts or mobile wallets.\nII. Electronic automated toll deduction significantly reduces waiting time at toll gates.',
        options: [
          { id: 'A', text: 'Only Assumption I is implicit' },
          { id: 'B', text: 'Only Assumption II is implicit' },
          { id: 'C', text: 'Both Assumptions I and II are implicit' },
          { id: 'D', text: 'Neither Assumption I nor II is implicit' }
        ],
        correctOption: 'C',
        explanation: 'Assumption I is implicit because mandating digital FASTag assumes vehicle owners have access to digital recharge mechanisms. Assumption II is directly implicit because the policy objective is explicitly stated as eliminating congestion through automation.',
        topic: 'Critical Reasoning (Statement & Assumptions)',
        difficulty: 'Medium'
      }
    ]
  },
  {
    id: 'mat-dec-math',
    name: 'Mathematical Skills',
    fullName: 'Mathematical Skills (Section 3)',
    durationMinutes: 24,
    questions: [
      {
        id: 'mat-dec-q13',
        sectionId: 'mat-dec-math',
        type: 'mcq',
        text: 'In an election between two candidates, the winner obtained 58% of the total valid votes polled and won by a decisive margin of 3,840 votes. If 4% of the total votes were declared invalid, what was the total number of votes cast?',
        options: [
          { id: 'A', text: '24,000' },
          { id: 'B', text: '25,000' },
          { id: 'C', text: '26,500' },
          { id: 'D', text: '28,000' }
        ],
        correctOption: 'B',
        explanation: 'Let total valid votes = V.\nWinner = 58% of V; Loser = (100 - 58)% = 42% of V.\nMargin = (58 - 42)% = 16% of V.\n0.16 * V = 3,840 => V = 3,840 / 0.16 = 24,000 valid votes.\nSince 4% were invalid, valid votes = 96% of total votes (T).\n0.96 * T = 24,000 => T = 24,000 / 0.96 = 25,000 total votes cast (Option B).',
        topic: 'Percentages',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q14',
        sectionId: 'mat-dec-math',
        type: 'mcq',
        text: 'A merchant marks his inventory 40% above the cost price and allows a festive discount of 20% on the marked price. In addition, using a faulty weighing balance, he delivers only 900 grams for every 1 kg demanded by the buyer. What is his actual net profit percentage?',
        options: [
          { id: 'A', text: '24.44%' },
          { id: 'B', text: '22.22%' },
          { id: 'C', text: '20.00%' },
          { id: 'D', text: '26.67%' }
        ],
        correctOption: 'A',
        explanation: 'Let CP of 1000g = ₹1000. So CP of 900g delivered = ₹900.\nMarked Price (MP) for 1000g = ₹1000 * 1.40 = ₹1400.\nSelling Price (SP) after 20% discount = ₹1400 * 0.80 = ₹1120.\nActual cost of goods given to customer = ₹900.\nNet Profit = SP - actual CP = ₹1120 - ₹900 = ₹220.\nNet Profit % = (220 / 900) * 100 = 24.44% (Option A).',
        topic: 'Profit, Loss & Faulty Weights',
        difficulty: 'Hard'
      },
      {
        id: 'mat-dec-q15',
        sectionId: 'mat-dec-math',
        type: 'mcq',
        text: 'Two trains of lengths 180 meters and 220 meters run on parallel tracks. When running in the same direction, the faster train passes the slower train in 40 seconds. When running in opposite directions, they pass each other in 8 seconds. What is the speed of the faster train in km/h?',
        options: [
          { id: 'A', text: '90 km/h' },
          { id: 'B', text: '108 km/h' },
          { id: 'C', text: '72 km/h' },
          { id: 'D', text: '126 km/h' }
        ],
        correctOption: 'B',
        explanation: 'Total distance to cross = 180 + 220 = 400 meters.\nRelative speed in same direction (u - v) = 400 / 40 = 10 m/s.\nRelative speed in opposite direction (u + v) = 400 / 8 = 50 m/s.\nAdding both equations: 2u = 60 => u = 30 m/s.\nSpeed in km/h = 30 * (18 / 5) = 108 km/h (Option B).',
        topic: 'Time, Speed & Distance',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q16',
        sectionId: 'mat-dec-math',
        type: 'mcq',
        text: 'A sum of ₹15,625 invested at compound interest compounded annually amounts to ₹19,683 in 3 years. What is the rate of interest per annum?',
        options: [
          { id: 'A', text: '6%' },
          { id: 'B', text: '8%' },
          { id: 'C', text: '7.5%' },
          { id: 'D', text: '10%' }
        ],
        correctOption: 'B',
        explanation: 'A = P(1 + r/100)³\n19683 / 15625 = (1 + r/100)³\nNotice that 27³ = 19683 and 25³ = 15625.\nSo (27 / 25)³ = (1 + r/100)³ => 1 + r/100 = 27/25 = 1.08.\nr/100 = 0.08 => r = 8% per annum (Option B).',
        topic: 'Compound Interest',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q17',
        sectionId: 'mat-dec-math',
        type: 'mcq',
        text: 'A contractor employs 24 workers to complete a warehousing project in 40 days. After 25 days of work, he observes that only 50% of the project is finished. How many additional workers must he hire immediately to finish the project strictly on time?',
        options: [
          { id: 'A', text: '12 workers' },
          { id: 'B', text: '16 workers' },
          { id: 'C', text: '20 workers' },
          { id: 'D', text: '18 workers' }
        ],
        correctOption: 'B',
        explanation: 'Work done in first 25 days = 24 workers * 25 days = 600 man-days = 50% of work.\nTotal work = 1200 man-days. Remaining work = 50% = 600 man-days.\nTime remaining = 40 - 25 = 15 days.\nRequired workers = Remaining work / Remaining days = 600 / 15 = 40 workers.\nAdditional workers required = 40 - 24 = 16 workers (Option B).',
        topic: 'Time & Work',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q18',
        sectionId: 'mat-dec-math',
        type: 'mcq',
        text: 'The diagonal of a rectangle is 25 cm and its perimeter is 70 cm. What is the area of the rectangle?',
        options: [
          { id: 'A', text: '300 cm²' },
          { id: 'B', text: '280 cm²' },
          { id: 'C', text: '315 cm²' },
          { id: 'D', text: '250 cm²' }
        ],
        correctOption: 'A',
        explanation: '2(l + b) = 70 => l + b = 35.\nl² + b² = 25² = 625.\nWe know (l + b)² = l² + b² + 2lb.\n35² = 625 + 2lb => 1225 = 625 + 2lb => 2lb = 600 => lb = 300 cm² (Option A).',
        topic: 'Geometry & Mensuration',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'mat-dec-di',
    name: 'Data Analysis & Sufficiency',
    fullName: 'Data Analysis & Sufficiency (Section 4)',
    durationMinutes: 24,
    questions: [
      {
        id: 'mat-dec-q19',
        sectionId: 'mat-dec-di',
        type: 'mcq',
        text: 'Study the following production data of 4 automobile manufacturing units (in thousands):\n- Unit Alpha: 2024 = 120, 2025 = 150, 2026 = 180\n- Unit Beta: 2024 = 80, 2025 = 110, 2026 = 140\n- Unit Gamma: 2024 = 200, 2025 = 220, 2026 = 250\n- Unit Delta: 2024 = 150, 2025 = 180, 2026 = 225\nWhich manufacturing unit achieved the highest percentage growth in production from 2024 to 2026?',
        options: [
          { id: 'A', text: 'Unit Alpha' },
          { id: 'B', text: 'Unit Beta' },
          { id: 'C', text: 'Unit Gamma' },
          { id: 'D', text: 'Unit Delta' }
        ],
        correctOption: 'B',
        explanation: 'Percentage growth from 2024 to 2026:\n- Alpha: (180 - 120)/120 = 60/120 = 50.0%\n- Beta: (140 - 80)/80 = 60/80 = 75.0%\n- Gamma: (250 - 200)/200 = 50/200 = 25.0%\n- Delta: (225 - 150)/150 = 75/150 = 50.0%\nUnit Beta recorded the highest percentage growth at 75% (Option B).',
        topic: 'Data Interpretation (Table Analysis)',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q20',
        sectionId: 'mat-dec-di',
        type: 'mcq',
        text: 'A company\'s total quarterly revenue is ₹80 Crores. The revenue distribution across divisions is:\nCloud Services = 35%, Enterprise Software = 25%, Consulting = 20%, Hardware = 15%, Others = 5%.\nIf Consulting revenue increases by 25% next quarter while Cloud Services revenue drops by 10%, what will be the combined revenue from these two divisions?',
        options: [
          { id: 'A', text: '₹45.2 Crores' },
          { id: 'B', text: '₹44.8 Crores' },
          { id: 'C', text: '₹46.0 Crores' },
          { id: 'D', text: '₹43.5 Crores' }
        ],
        correctOption: 'A',
        explanation: 'Initial Cloud Services = 35% of 80 = ₹28.0 Cr. Decreased by 10% = 28 * 0.90 = ₹25.2 Cr.\nInitial Consulting = 20% of 80 = ₹16.0 Cr. Increased by 25% = 16 * 1.25 = ₹20.0 Cr.\nCombined future revenue = 25.2 + 20.0 = ₹45.2 Crores (Option A).',
        topic: 'Data Interpretation (Percentage Breakdown)',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q21',
        sectionId: 'mat-dec-di',
        type: 'mcq',
        text: 'Data Sufficiency Question: Is the integer "m" divisible by 12?\nStatement I: "m" is divisible by 4.\nStatement II: "m" is divisible by 6.',
        options: [
          { id: 'A', text: 'Statement I alone is sufficient, but Statement II alone is not sufficient.' },
          { id: 'B', text: 'Statement II alone is sufficient, but Statement I alone is not sufficient.' },
          { id: 'C', text: 'Both Statements I and II together are sufficient, but neither statement alone is sufficient.' },
          { id: 'D', text: 'Statements I and II together are NOT sufficient.' }
        ],
        correctOption: 'C',
        explanation: 'From Statement I alone: m is divisible by 4 (e.g. m=8, not div by 12; m=12, div by 12) -> Not sufficient.\nFrom Statement II alone: m is divisible by 6 (e.g. m=18, not div by 12; m=24, div by 12) -> Not sufficient.\nCombining both: m is a multiple of 4 (has factor 2²) and a multiple of 6 (has factors 2 and 3). Therefore, m must have prime factors 2² × 3 = 12. Hence m is definitely divisible by 12. Both together are sufficient (Option C).',
        topic: 'Data Sufficiency',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q22',
        sectionId: 'mat-dec-di',
        type: 'mcq',
        text: 'Data Sufficiency Question: What is the ratio of boys to girls in a business school class?\nStatement I: The average age of boys is 24 years and the average age of girls is 21 years.\nStatement II: The average age of all students in the class combined is 22.8 years.',
        options: [
          { id: 'A', text: 'Statement I alone is sufficient' },
          { id: 'B', text: 'Statement II alone is sufficient' },
          { id: 'C', text: 'Both Statements I and II together are sufficient, but neither alone is sufficient' },
          { id: 'D', text: 'Statements I and II together are NOT sufficient' }
        ],
        correctOption: 'C',
        explanation: 'Using weighted average formula (Alligation Rule):\nRatio of Boys (B) to Girls (G) = (Avg Overall - Avg Girls) / (Avg Boys - Avg Overall) = (22.8 - 21) / (24 - 22.8) = 1.8 / 1.2 = 3 / 2.\nWe need both statements to find the weighted ratio. Hence, both together are sufficient (Option C).',
        topic: 'Data Sufficiency (Alligations)',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q23',
        sectionId: 'mat-dec-di',
        type: 'mcq',
        text: 'In a survey of 500 working professionals: 260 subscribe to Business Standard, 210 subscribe to Economic Times, and 90 subscribe to both publications. How many professionals surveyed subscribe to NEITHER of the two publications?',
        options: [
          { id: 'A', text: '120' },
          { id: 'B', text: '140' },
          { id: 'C', text: '110' },
          { id: 'D', text: '130' }
        ],
        correctOption: 'A',
        explanation: 'Using union of sets: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)\nn(A ∪ B) = 260 + 210 - 90 = 380.\nProfessionals subscribing to neither = Total - n(A ∪ B) = 500 - 380 = 120 (Option A).',
        topic: 'Data Interpretation (Venn Diagrams)',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q24',
        sectionId: 'mat-dec-di',
        type: 'mcq',
        text: 'A retail startup\'s monthly customer acquisition cost (CAC) was ₹1,200 in January and customer lifetime value (LTV) was ₹4,800. In June, CAC decreased by 20% while LTV increased by 25%. What was the ratio of LTV to CAC in June?',
        options: [
          { id: 'A', text: '5 : 1' },
          { id: 'B', text: '6.25 : 1' },
          { id: 'C', text: '5.5 : 1' },
          { id: 'D', text: '4.8 : 1' }
        ],
        correctOption: 'B',
        explanation: 'June CAC = 1200 * (1 - 0.20) = ₹960.\nJune LTV = 4800 * (1 + 0.25) = ₹6,000.\nJune Ratio LTV : CAC = 6000 / 960 = 6.25 : 1 (Option B).',
        topic: 'Data Analysis (Ratio Metrics)',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'mat-dec-gk',
    name: 'Indian & Global Environment',
    fullName: 'Indian & Global Environment (Section 5)',
    durationMinutes: 24,
    questions: [
      {
        id: 'mat-dec-q25',
        sectionId: 'mat-dec-gk',
        type: 'mcq',
        text: 'Which regulatory authority exercises statutory supervision and regulatory control over commodity derivatives and securities markets in India?',
        options: [
          { id: 'A', text: 'Reserve Bank of India (RBI)' },
          { id: 'B', text: 'Securities and Exchange Board of India (SEBI)' },
          { id: 'C', text: 'Competition Commission of India (CCI)' },
          { id: 'D', text: 'Insolvency and Bankruptcy Board of India (IBBI)' }
        ],
        correctOption: 'B',
        explanation: 'SEBI (Securities and Exchange Board of India) regulates the securities and commodity derivatives markets in India, safeguarding investor interests and promoting transparent financial market operations.',
        topic: 'Indian Regulatory Framework',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q26',
        sectionId: 'mat-dec-gk',
        type: 'mcq',
        text: 'The term "Repo Rate" in monetary policy operations conducted by the Reserve Bank of India (RBI) signifies:',
        options: [
          { id: 'A', text: 'The rate at which commercial banks park surplus funds with the RBI' },
          { id: 'B', text: 'The rate at which the RBI lends short-term liquidity to commercial banks against government securities' },
          { id: 'C', text: 'The mandatory cash reserve percentage banks must maintain with the central bank' },
          { id: 'D', text: 'The penalty rate levied on defaulted corporate loans by public sector banks' }
        ],
        correctOption: 'B',
        explanation: 'Repo (Repurchase Option) Rate is the benchmark rate at which the RBI lends money to commercial banks against government securities to manage liquidity and control inflation in the economy.',
        topic: 'Indian Economy & Banking',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q27',
        sectionId: 'mat-dec-gk',
        type: 'mcq',
        text: 'Which multilateral intergovernmental organization includes Brazil, Russia, India, China, South Africa, and newly inducted member nations like the UAE, Egypt, Iran, and Ethiopia?',
        options: [
          { id: 'A', text: 'OECD' },
          { id: 'B', text: 'BRICS' },
          { id: 'C', text: 'ASEAN' },
          { id: 'D', text: 'G7' }
        ],
        correctOption: 'B',
        explanation: 'BRICS expanded its geopolitical footprint by admitting new emerging economies including Egypt, Ethiopia, Iran, and the United Arab Emirates, representing over 40% of the world’s population.',
        topic: 'Global Summits & Multilateral Bodies',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q28',
        sectionId: 'mat-dec-gk',
        type: 'mcq',
        text: 'Who is the current Governor of the Reserve Bank of India (RBI), presiding over the Monetary Policy Committee (MPC)?',
        options: [
          { id: 'A', text: 'Shaktikanta Das' },
          { id: 'B', text: 'Urjit Patel' },
          { id: 'C', text: 'Raghuram Rajan' },
          { id: 'D', text: 'D. Subbarao' }
        ],
        correctOption: 'A',
        explanation: 'Shaktikanta Das is the 25th Governor of the Reserve Bank of India, leading India\'s macroeconomic monetary policy framework.',
        topic: 'Key Indian Personalities',
        difficulty: 'Easy'
      },
      {
        id: 'mat-dec-q29',
        sectionId: 'mat-dec-gk',
        type: 'mcq',
        text: 'The prestigious 2024 Nobel Memorial Prize in Economic Sciences was conferred upon Daron Acemoglu, Simon Johnson, and James A. Robinson for their groundbreaking empirical research on:',
        options: [
          { id: 'A', text: 'Behavioral economics and asymmetric nudges in retirement savings' },
          { id: 'B', text: 'How societal institutions are formed and how they fundamentally affect national prosperity' },
          { id: 'C', text: 'Carbon taxation and climate macroeconomic growth models' },
          { id: 'D', text: 'High-frequency algorithmic trading and financial contagion' }
        ],
        correctOption: 'B',
        explanation: 'The 2024 Nobel Prize in Economics was awarded to Acemoglu, Johnson, and Robinson for demonstrating the pivotal importance of societal institutions for a country’s prosperity.',
        topic: 'International Awards & Economics',
        difficulty: 'Medium'
      },
      {
        id: 'mat-dec-q30',
        sectionId: 'mat-dec-gk',
        type: 'mcq',
        text: 'In the Indian corporate landscape, what is the mandatory Corporate Social Responsibility (CSR) expenditure percentage stipulated under Section 135 of the Companies Act, 2013 for qualifying companies?',
        options: [
          { id: 'A', text: 'At least 2% of the average net profits made during the three immediately preceding financial years' },
          { id: 'B', text: 'At least 5% of gross annual turnover' },
          { id: 'C', text: 'At least 1% of total paid-up equity share capital' },
          { id: 'D', text: 'At least 3% of operational EBITDA' }
        ],
        correctOption: 'A',
        explanation: 'Under Section 135 of the Companies Act 2013, eligible companies are mandated to spend at least 2% of their average net profit earned during the three immediately preceding financial years towards designated CSR initiatives.',
        topic: 'Corporate Law & Governance',
        difficulty: 'Medium'
      }
    ]
  }
];
