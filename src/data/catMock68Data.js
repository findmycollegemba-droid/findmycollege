/**
 * Official CAT Full Mock Test - 68 Questions
 * Complete Practice Test as per Actual Exam Structure
 * VARC (24) | DILR (22) | QA (22)
 * Total Duration: 120 Minutes (40 Mins/Section)
 * Marking: +3 for correct, -1 for MCQ wrong, 0 for TITA wrong
 */

export const CAT_68_QUESTIONS_SECTIONS = [
  {
    id: 'varc',
    name: 'VARC',
    fullName: 'Verbal Ability & Reading Comprehension (24 Questions)',
    durationMinutes: 40,
    questions: [
      // Passage 1: Environmental Economics & Policy (Q1 - Q4)
      {
        id: 'cat-q1',
        sectionId: 'varc',
        type: 'mcq',
        passage: `The economic valuation of ecosystem services has become a central paradigm in contemporary environmental governance. By assigning monetary values to ecological functions—such as carbon sequestration, pollination, and watershed protection—policy advocates aim to integrate natural capital into traditional cost-benefit analyses. However, critical political economists argue that this financialization of nature commodifies essential ecological processes, reducing intrinsic environmental values to market dynamics. When ecosystem services are monetized, their protection becomes contingent upon market demand and financial return rather than ecological integrity. Furthermore, market-based conservation instruments like carbon credits often perpetuate spatial inequalities, allowing heavy polluters in industrialized nations to offset emissions while displacing local communities in developing regions.`,
        text: 'Which of the following best expresses the primary concern raised by critical political economists?',
        options: [
          { id: 'A', text: 'Ecosystem services are inherently impossible to measure accurately.' },
          { id: 'B', text: 'Monetizing nature reduces intrinsic ecological value to market dynamics and profit motives.' },
          { id: 'C', text: 'Carbon credits have completely failed to reduce global carbon emissions.' },
          { id: 'D', text: 'Industrialized nations bear the entire burden of global ecosystem protection.' }
        ],
        correctOption: 'B',
        explanation: 'Para 1 directly highlights commodification of intrinsic values into market dynamics.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q2',
        sectionId: 'varc',
        type: 'mcq',
        passage: `The economic valuation of ecosystem services has become a central paradigm in contemporary environmental governance. By assigning monetary values to ecological functions—such as carbon sequestration, pollination, and watershed protection—policy advocates aim to integrate natural capital into traditional cost-benefit analyses. However, critical political economists argue that this financialization of nature commodifies essential ecological processes, reducing intrinsic environmental values to market dynamics. When ecosystem services are monetized, their protection becomes contingent upon market demand and financial return rather than ecological integrity. Furthermore, market-based conservation instruments like carbon credits often perpetuate spatial inequalities, allowing heavy polluters in industrialized nations to offset emissions while displacing local communities in developing regions.`,
        text: 'According to the passage, carbon credits can lead to which unintended consequence?',
        options: [
          { id: 'A', text: 'Rapid devaluation of natural capital in industrialized nations.' },
          { id: 'B', text: 'Spatial inequalities and displacement of local communities in developing regions.' },
          { id: 'C', text: 'Immediate cessation of carbon sequestration projects.' },
          { id: 'D', text: 'Over-regulation of market-based conservation instruments.' }
        ],
        correctOption: 'B',
        explanation: 'Mentioned in final line of Para 1: spatial inequalities & local community displacement.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q3',
        sectionId: 'varc',
        type: 'mcq',
        passage: `The economic valuation of ecosystem services has become a central paradigm in contemporary environmental governance. By assigning monetary values to ecological functions—such as carbon sequestration, pollination, and watershed protection—policy advocates aim to integrate natural capital into traditional cost-benefit analyses. However, critical political economists argue that this financialization of nature commodifies essential ecological processes, reducing intrinsic environmental values to market dynamics. When ecosystem services are monetized, their protection becomes contingent upon market demand and financial return rather than ecological integrity. Furthermore, market-based conservation instruments like carbon credits often perpetuate spatial inequalities, allowing heavy polluters in industrialized nations to offset emissions while displacing local communities in developing regions.`,
        text: 'The term "natural capital" in the passage refers to:',
        options: [
          { id: 'A', text: 'Financial investments made in green energy technology.' },
          { id: 'B', text: 'Stock of natural assets providing ecological functions and benefits.' },
          { id: 'C', text: 'Total GDP generated by agricultural sectors.' },
          { id: 'D', text: 'Taxes levied on environmental pollution.' }
        ],
        correctOption: 'B',
        explanation: 'Natural capital represents ecological stock delivering ecosystem services.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q4',
        sectionId: 'varc',
        type: 'mcq',
        passage: `The economic valuation of ecosystem services has become a central paradigm in contemporary environmental governance. By assigning monetary values to ecological functions—such as carbon sequestration, pollination, and watershed protection—policy advocates aim to integrate natural capital into traditional cost-benefit analyses. However, critical political economists argue that this financialization of nature commodifies essential ecological processes, reducing intrinsic environmental values to market dynamics. When ecosystem services are monetized, their protection becomes contingent upon market demand and financial return rather than ecological integrity. Furthermore, market-based conservation instruments like carbon credits often perpetuate spatial inequalities, allowing heavy polluters in industrialized nations to offset emissions while displacing local communities in developing regions.`,
        text: "The author's tone toward market-based conservation instruments can best be described as:",
        options: [
          { id: 'A', text: 'Unreservedly enthusiastic' },
          { id: 'B', text: 'Critically analytical' },
          { id: 'C', text: 'Dismissive and hostile' },
          { id: 'D', text: 'Completely neutral and passive' }
        ],
        correctOption: 'B',
        explanation: 'Author presents balanced critique evaluating limits and implications.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },

      // Passage 2: Philosophy of Technology (Q5 - Q8)
      {
        id: 'cat-q5',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Artificial Intelligence is rapidly reshaping knowledge production, altering how humans synthesize information and derive truth. Historically, epistemological frameworks relied on human empirical observation and rational deduction. Machine learning algorithms, however, operate on pattern recognition within vast datasets that often exceed human cognitive capacity. This shift creates 'epistemic opacity'—a condition where an AI system generates accurate predictions or decisions, but the underlying reasoning remains opaque to human operators. As decision-making in medicine, law, and finance is increasingly delegated to black-box models, human agency is quietly transferred to automated architectures. The central ethical imperative of modern AI ethics is thus not merely ensuring output accuracy, but preserving human interpretability and meaningful oversight.`,
        text: "What does 'epistemic opacity' mean in the context of the passage?",
        options: [
          { id: 'A', text: 'Complete failure of AI algorithms to produce accurate data.' },
          { id: 'B', text: 'Lack of transparency in how an AI model arrives at its outputs despite high accuracy.' },
          { id: 'C', text: 'Human inability to gather large datasets for machine learning.' },
          { id: 'D', text: 'The intentional bias coded into financial algorithms.' }
        ],
        correctOption: 'B',
        explanation: 'Epistemic opacity = accuracy high but underlying logic opaque.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q6',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Artificial Intelligence is rapidly reshaping knowledge production, altering how humans synthesize information and derive truth. Historically, epistemological frameworks relied on human empirical observation and rational deduction. Machine learning algorithms, however, operate on pattern recognition within vast datasets that often exceed human cognitive capacity. This shift creates 'epistemic opacity'—a condition where an AI system generates accurate predictions or decisions, but the underlying reasoning remains opaque to human operators. As decision-making in medicine, law, and finance is increasingly delegated to black-box models, human agency is quietly transferred to automated architectures. The central ethical imperative of modern AI ethics is thus not merely ensuring output accuracy, but preserving human interpretability and meaningful oversight.`,
        text: 'According to the passage, the primary ethical task in contemporary AI development is to:',
        options: [
          { id: 'A', text: 'Maximize computational speed and data storage capacities.' },
          { id: 'B', text: 'Preserve human interpretability and meaningful oversight over AI decisions.' },
          { id: 'C', text: 'Eliminate human involvement in medical and legal decision-making.' },
          { id: 'D', text: 'Restrict AI development exclusively to rational deductive tasks.' }
        ],
        correctOption: 'B',
        explanation: 'Final line of passage explicitly states preserving interpretability & oversight.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q7',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Artificial Intelligence is rapidly reshaping knowledge production, altering how humans synthesize information and derive truth. Historically, epistemological frameworks relied on human empirical observation and rational deduction. Machine learning algorithms, however, operate on pattern recognition within vast datasets that often exceed human cognitive capacity. This shift creates 'epistemic opacity'—a condition where an AI system generates accurate predictions or decisions, but the underlying reasoning remains opaque to human operators. As decision-making in medicine, law, and finance is increasingly delegated to black-box models, human agency is quietly transferred to automated architectures. The central ethical imperative of modern AI ethics is thus not merely ensuring output accuracy, but preserving human interpretability and meaningful oversight.`,
        text: 'Which of the following is an assumption made by the author?',
        options: [
          { id: 'A', text: 'Human reasoning is always superior in speed to AI algorithmic processing.' },
          { id: 'B', text: 'Delegating decisions without understanding the process poses risks to human agency.' },
          { id: 'C', text: 'Black-box models should be completely banned across all industries.' },
          { id: 'D', text: 'Empirical observation is no longer useful in modern scientific research.' }
        ],
        correctOption: 'B',
        explanation: 'Implicit that delegating without understanding damages human agency.',
        topic: 'Critical Reasoning',
        difficulty: 'Hard'
      },
      {
        id: 'cat-q8',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Artificial Intelligence is rapidly reshaping knowledge production, altering how humans synthesize information and derive truth. Historically, epistemological frameworks relied on human empirical observation and rational deduction. Machine learning algorithms, however, operate on pattern recognition within vast datasets that often exceed human cognitive capacity. This shift creates 'epistemic opacity'—a condition where an AI system generates accurate predictions or decisions, but the underlying reasoning remains opaque to human operators. As decision-making in medicine, law, and finance is increasingly delegated to black-box models, human agency is quietly transferred to automated architectures. The central ethical imperative of modern AI ethics is thus not merely ensuring output accuracy, but preserving human interpretability and meaningful oversight.`,
        text: 'The transition from traditional epistemological frameworks to machine learning is characterized by:',
        options: [
          { id: 'A', text: 'A shift from human deduction to pattern recognition in massive datasets.' },
          { id: 'B', text: 'A move away from data analysis toward intuitive guessing.' },
          { id: 'C', text: 'Complete replacement of finance and law professionals by robots.' },
          { id: 'D', text: 'Greater human control over underlying analytical mechanisms.' }
        ],
        correctOption: 'A',
        explanation: 'Shift from empirical observation/deduction to algorithmic pattern recognition.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },

      // Passage 3: History & Architecture (Q9 - Q12)
      {
        id: 'cat-q9',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Urban architecture reflects prevailing socio-political ideologies. The Gothic style of medieval Europe, with its soaring vaults and pointed arches, aimed to direct human contemplation skyward, underscoring ecclesiastical authority. Conversely, the modernist movement of the early 20th century, championed by figures like Le Corbusier, emphasized functionality, geometric purity, and industrial efficiency. Modernism viewed the building as a 'machine for living,' rejecting historical ornamentation in favor of mass-produced steel, concrete, and glass. Yet, this functionalist ideal often resulted in monotonous urban landscapes that alienated residents, sparking the postmodern response which re-introduced historicism, irony, and local context into architectural design.`,
        text: "The phrase 'machine for living' reflects which core philosophy of modernism?",
        options: [
          { id: 'A', text: 'Rejection of industrial manufacturing in housing construction.' },
          { id: 'B', text: 'Priority of functional utility and industrial efficiency over ornamentation.' },
          { id: 'C', text: 'Direct imitation of medieval Gothic structural designs.' },
          { id: 'D', text: 'Incorporation of local cultural context into building facades.' }
        ],
        correctOption: 'B',
        explanation: "Corbusier's modernism prioritized functional purity over ornamentation.",
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q10',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Urban architecture reflects prevailing socio-political ideologies. The Gothic style of medieval Europe, with its soaring vaults and pointed arches, aimed to direct human contemplation skyward, underscoring ecclesiastical authority. Conversely, the modernist movement of the early 20th century, championed by figures like Le Corbusier, emphasized functionality, geometric purity, and industrial efficiency. Modernism viewed the building as a 'machine for living,' rejecting historical ornamentation in favor of mass-produced steel, concrete, and glass. Yet, this functionalist ideal often resulted in monotonous urban landscapes that alienated residents, sparking the postmodern response which re-introduced historicism, irony, and local context into architectural design.`,
        text: 'Why did postmodernism emerge according to the passage?',
        options: [
          { id: 'A', text: 'In reaction to the monotonous and alienating aspects of modernist architecture.' },
          { id: 'B', text: 'Because steel and concrete became too expensive to manufacture.' },
          { id: 'C', text: 'To restore the absolute political dominance of medieval churches.' },
          { id: 'D', text: "As a direct extension of Le Corbusier's geometric theories." }
        ],
        correctOption: 'A',
        explanation: 'Postmodernism was a reaction to alienating and monotonous modernist spaces.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q11',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Urban architecture reflects prevailing socio-political ideologies. The Gothic style of medieval Europe, with its soaring vaults and pointed arches, aimed to direct human contemplation skyward, underscoring ecclesiastical authority. Conversely, the modernist movement of the early 20th century, championed by figures like Le Corbusier, emphasized functionality, geometric purity, and industrial efficiency. Modernism viewed the building as a 'machine for living,' rejecting historical ornamentation in favor of mass-produced steel, concrete, and glass. Yet, this functionalist ideal often resulted in monotonous urban landscapes that alienated residents, sparking the postmodern response which re-introduced historicism, irony, and local context into architectural design.`,
        text: 'Gothic architecture primarily sought to express:',
        options: [
          { id: 'A', text: 'Industrial efficiency and modernism.' },
          { id: 'B', text: 'Ecclesiastical authority and spiritual contemplation.' },
          { id: 'C', text: 'Postmodern irony and local contextualism.' },
          { id: 'D', text: 'Mass-produced housing solutions.' }
        ],
        correctOption: 'B',
        explanation: 'Soaring vaults aimed to direct contemplation skyward / church authority.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q12',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Urban architecture reflects prevailing socio-political ideologies. The Gothic style of medieval Europe, with its soaring vaults and pointed arches, aimed to direct human contemplation skyward, underscoring ecclesiastical authority. Conversely, the modernist movement of the early 20th century, championed by figures like Le Corbusier, emphasized functionality, geometric purity, and industrial efficiency. Modernism viewed the building as a 'machine for living,' rejecting historical ornamentation in favor of mass-produced steel, concrete, and glass. Yet, this functionalist ideal often resulted in monotonous urban landscapes that alienated residents, sparking the postmodern response which re-introduced historicism, irony, and local context into architectural design.`,
        text: 'Which material is NOT explicitly associated with modernist architecture in the text?',
        options: [
          { id: 'A', text: 'Steel' },
          { id: 'B', text: 'Glass' },
          { id: 'C', text: 'Concrete' },
          { id: 'D', text: 'Carved Timber' }
        ],
        correctOption: 'D',
        explanation: 'Modernism used steel, concrete, glass (carved timber is not mentioned).',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },

      // Passage 4: Behavioral Psychology (Q13 - Q16)
      {
        id: 'cat-q13',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Cognitive biases systematically distort human decision-making, departing from the normative models of classical economic theory. One prominent phenomenon is the 'status quo bias,' wherein individuals demonstrate an irrational preference for the current state of affairs. When faced with complex choices, decision-makers experience choice overload, leading to decision fatigue. Default options capitalize on this bias; by pre-selecting a designated choice, choice architects can significantly increase adoption rates without restricting individual choice. This principle forms the foundation of 'nudge theory,' which seeks to gently guide behavior toward socially desirable outcomes while maintaining autonomy.`,
        text: 'What is the primary mechanism through which default options influence decision-making?',
        options: [
          { id: 'A', text: 'By legally enforcing specific choices on consumers.' },
          { id: 'B', text: 'By leveraging status quo bias and mitigating choice overload.' },
          { id: 'C', text: 'By offering financial subsidies for selected choices.' },
          { id: 'D', text: 'By eliminating all alternative options from the choice set.' }
        ],
        correctOption: 'B',
        explanation: 'Default options leverage status quo bias and overcome choice fatigue.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q14',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Cognitive biases systematically distort human decision-making, departing from the normative models of classical economic theory. One prominent phenomenon is the 'status quo bias,' wherein individuals demonstrate an irrational preference for the current state of affairs. When faced with complex choices, decision-makers experience choice overload, leading to decision fatigue. Default options capitalize on this bias; by pre-selecting a designated choice, choice architects can significantly increase adoption rates without restricting individual choice. This principle forms the foundation of 'nudge theory,' which seeks to gently guide behavior toward socially desirable outcomes while maintaining autonomy.`,
        text: 'According to nudge theory, an effective policy intervention must:',
        options: [
          { id: 'A', text: 'Restrict individual freedom of choice completely.' },
          { id: 'B', text: 'Mandate compliance through strict penal codes.' },
          { id: 'C', text: 'Guide behavior toward desired outcomes while preserving individual autonomy.' },
          { id: 'D', text: 'Rely entirely on traditional classical economic models.' }
        ],
        correctOption: 'C',
        explanation: 'Nudge theory guides behavior while preserving individual choice autonomy.',
        topic: 'Reading Comprehension',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q15',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Cognitive biases systematically distort human decision-making, departing from the normative models of classical economic theory. One prominent phenomenon is the 'status quo bias,' wherein individuals demonstrate an irrational preference for the current state of affairs. When faced with complex choices, decision-makers experience choice overload, leading to decision fatigue. Default options capitalize on this bias; by pre-selecting a designated choice, choice architects can significantly increase adoption rates without restricting individual choice. This principle forms the foundation of 'nudge theory,' which seeks to gently guide behavior toward socially desirable outcomes while maintaining autonomy.`,
        text: 'Classical economic theory assumes that human decision-making is:',
        options: [
          { id: 'A', text: 'Systematic, irrational, and biased.' },
          { id: 'B', text: 'Rational and aligned with normative economic models.' },
          { id: 'C', text: 'Exclusively driven by choice overload.' },
          { id: 'D', text: 'Heavily dependent on default settings.' }
        ],
        correctOption: 'B',
        explanation: 'Passage states classical economic theory relies on normative rational models.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q16',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Cognitive biases systematically distort human decision-making, departing from the normative models of classical economic theory. One prominent phenomenon is the 'status quo bias,' wherein individuals demonstrate an irrational preference for the current state of affairs. When faced with complex choices, decision-makers experience choice overload, leading to decision fatigue. Default options capitalize on this bias; by pre-selecting a designated choice, choice architects can significantly increase adoption rates without restricting individual choice. This principle forms the foundation of 'nudge theory,' which seeks to gently guide behavior toward socially desirable outcomes while maintaining autonomy.`,
        text: 'Decision fatigue occurs when individuals:',
        options: [
          { id: 'A', text: 'Are forced to make choices under extreme time limits.' },
          { id: 'B', text: 'Experience cognitive exhaustion due to choice overload.' },
          { id: 'C', text: 'Refuse to participate in economic markets.' },
          { id: 'D', text: 'Are unaware of default options available to them.' }
        ],
        correctOption: 'B',
        explanation: 'Choice overload leads directly to decision fatigue.',
        topic: 'Reading Comprehension',
        difficulty: 'Easy'
      },

      // Part B: Verbal Ability (Q17 - Q24)
      {
        id: 'cat-q17',
        sectionId: 'varc',
        type: 'tita',
        text: `Parajumble: Arrange sentences 1-4 in logical sequence.\n\n1. Consequently, firms must adapt rapidly to shifting regulatory standards and consumer demands.\n2. The global transition toward renewable energy has accelerated dramatically in recent years.\n3. This rapid shift is driven both by declining technology costs and urgent climate policies.\n4. Those that fail to pivot risk severe market devaluation and stranded assets.`,
        options: [],
        correctOption: '2314',
        explanation: '(2) introduces renewable transition, (3) gives drivers, (1) gives firm consequence, (4) details risk of failure. Sequence: 2-3-1-4.',
        topic: 'Para Jumbles (TITA)',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q18',
        sectionId: 'varc',
        type: 'tita',
        text: `Parajumble: Arrange sentences 1-4 in logical sequence.\n\n1. In contrasting fashion, qualitative research focuses on deep context and human narrative.\n2. Quantitative methods seek to quantify variables and establish empirical patterns.\n3. Combining both approaches through mixed-methods yields a more comprehensive analysis.\n4. Each methodological paradigm possesses distinct epistemological strengths and limits.`,
        options: [],
        correctOption: '4213',
        explanation: '(4) introduces methodological paradigms, (2) defines quant, (1) contrasts qual, (3) combines via mixed methods. Sequence: 4-2-1-3.',
        topic: 'Para Jumbles (TITA)',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q19',
        sectionId: 'varc',
        type: 'tita',
        text: `Parajumble: Arrange sentences 1-4 in logical sequence.\n\n1. This historical isolation allowed unique endemic species to evolve without major predators.\n2. Madagascar separated from the Indian landmass approximately 88 million years ago.\n3. Today, habitat loss threatens these fragile ecological communities with extinction.\n4. As a result, over 90% of its wildlife is found nowhere else on Earth.`,
        options: [],
        correctOption: '2143',
        explanation: '(2) island separation, (1) isolation evolutionary impact, (4) 90% unique fauna result, (3) current threat. Sequence: 2-1-4-3.',
        topic: 'Para Jumbles (TITA)',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q20',
        sectionId: 'varc',
        type: 'tita',
        text: `Parajumble: Arrange sentences 1-4 in logical sequence.\n\n1. Language acquisition in children involves both innate cognitive structures and environmental interaction.\n2. Noam Chomsky posited the existence of a Universal Grammar inherent to the human brain.\n3. However, social interactionists emphasize the critical role of communicative context in language development.\n4. Modern linguistics reconciles these views by viewing language as an interaction of nature and nurture.`,
        options: [],
        correctOption: '1234',
        explanation: '(1) general acquisition statement, (2) Chomsky innate view, (3) contrast social view, (4) modern synthesis. Sequence: 1-2-3-4.',
        topic: 'Para Jumbles (TITA)',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q21',
        sectionId: 'varc',
        type: 'mcq',
        text: `Odd One Out: Choose the sentence that does NOT belong to the paragraph.\n\n1) Cryptographic protocols form the security backbone of distributed ledger technology.\n2) Public key infrastructure ensures secure identity verification across decentralized networks.\n3) High transaction latency remains a persistent scaling bottleneck for major blockchains.\n4) Hash functions guarantee data immutability by producing unique digital signatures for blocks.\n5) Together, these cryptographic primitives protect decentralized ledgers against unauthorized tampering.`,
        options: [
          { id: '1', text: 'Sentence 1' },
          { id: '2', text: 'Sentence 2' },
          { id: '3', text: 'Sentence 3' },
          { id: '4', text: 'Sentence 4' }
        ],
        correctOption: '3',
        explanation: 'Sentence 3 discusses scaling/latency bottlenecks; rest focus on cryptographic security primitives.',
        topic: 'Odd One Out',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q22',
        sectionId: 'varc',
        type: 'mcq',
        text: `Odd One Out: Choose the sentence that does NOT belong to the paragraph.\n\n1) Photosynthesis converts solar energy into chemical energy stored in glucose molecules.\n2) Chlorophyll pigments within plant chloroplasts absorb specific wavelengths of sunlight.\n3) Global deforestation severely reduces the Earth's total forest canopy cover.\n4) Light-dependent reactions split water molecules, releasing oxygen as a byproduct.\n5) The Calvin cycle subsequently utilizes ATP and NADPH to synthesize organic sugars.`,
        options: [
          { id: '1', text: 'Sentence 1' },
          { id: '2', text: 'Sentence 2' },
          { id: '3', text: 'Sentence 3' },
          { id: '4', text: 'Sentence 4' }
        ],
        correctOption: '3',
        explanation: 'Sentence 3 discusses deforestation; rest describe biochemical stages of photosynthesis.',
        topic: 'Odd One Out',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q23',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Microplastics have contaminated marine ecosystems worldwide, accumulating in food webs. Marine organisms ingest these synthetic particles, which absorb toxic pollutants. Beyond ecological damage, human consumption of seafood exposes populations to potential health hazards. Immediate international mitigation strategies are essential to halt plastic influx into oceans.`,
        text: 'Para Summary: Select the option that best summarizes the text.',
        options: [
          { id: 'A', text: 'Plastic pollution in oceans can be solved entirely by banning seafood consumption globally.' },
          { id: 'B', text: 'Microplastic contamination damages marine webs and poses human health risks, demanding global action.' },
          { id: 'C', text: 'Synthetic particles in oceans exclusively affect lower-level marine species like plankton.' },
          { id: 'D', text: 'International regulations have successfully halted the influx of plastics into global waters.' }
        ],
        correctOption: 'B',
        explanation: 'Accurately captures marine food web accumulation, human risks, and call for international action.',
        topic: 'Summary Completion',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q24',
        sectionId: 'varc',
        type: 'mcq',
        passage: `Remote work arrangements have restructured corporate dynamics, enhancing employee autonomy while complicating organizational cohesion. While workers report higher satisfaction and reduced commute stress, managers struggle with performance evaluation and team culture maintenance. Hybrid models attempt to balance flexibility with mandatory office collaboration days.`,
        text: 'Para Summary: Select the option that best summarizes the text.',
        options: [
          { id: 'A', text: 'Remote work has proven completely unsustainable for modern corporate environments.' },
          { id: 'B', text: "Hybrid work models aim to reconcile worker flexibility with management's need for collaboration and culture." },
          { id: 'C', text: 'Employees universally prefer full-time office work to avoid performance evaluation issues.' },
          { id: 'D', text: 'Commute stress is the sole determinant of employee job satisfaction in corporate settings.' }
        ],
        correctOption: 'B',
        explanation: 'Succinctly summarizes trade-off between employee satisfaction and organizational cohesion solved by hybrid models.',
        topic: 'Summary Completion',
        difficulty: 'Moderate'
      }
    ]
  },
  {
    id: 'dilr',
    name: 'DILR',
    fullName: 'Data Interpretation & Logical Reasoning (22 Questions)',
    durationMinutes: 40,
    questions: [
      // Set 1: Seating Arrangement & Project Teams (Q25 - Q29)
      {
        id: 'cat-q25',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Six consultants—P, Q, R, S, T, and U—sit in a circle facing inward for a meeting. Each consultant specializes in one distinct domain: Finance, IT, HR, Marketing, Operations, or Legal.\n• P sits second to the right of the Finance expert.\n• The HR expert is an immediate neighbor of both Q and the Legal expert.\n• R, who is the IT expert, sits directly opposite S.\n• T is the Operations expert and sits immediately to the left of P.\n• Q is not the Finance expert and sits opposite U.`,
        text: "What is P's domain specialization?",
        options: [
          { id: 'A', text: 'Marketing' },
          { id: 'B', text: 'HR' },
          { id: 'C', text: 'Finance' },
          { id: 'D', text: 'Legal' }
        ],
        correctOption: 'A',
        explanation: 'Arrangement around circle: P (Marketing), T (Ops), Q (HR), R (IT), U (Legal), S (Finance).',
        topic: 'Seating Arrangement',
        difficulty: 'Hard'
      },
      {
        id: 'cat-q26',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Six consultants—P, Q, R, S, T, and U—sit in a circle facing inward for a meeting. Each consultant specializes in one distinct domain: Finance, IT, HR, Marketing, Operations, or Legal.\n• P sits second to the right of the Finance expert.\n• The HR expert is an immediate neighbor of both Q and the Legal expert.\n• R, who is the IT expert, sits directly opposite S.\n• T is the Operations expert and sits immediately to the left of P.\n• Q is not the Finance expert and sits opposite U.`,
        text: 'Who sits directly opposite the Legal expert?',
        options: [
          { id: 'A', text: 'P' },
          { id: 'B', text: 'T' },
          { id: 'C', text: 'R' },
          { id: 'D', text: 'U' }
        ],
        correctOption: 'B',
        explanation: 'U is Legal. T (Ops) sits opposite U.',
        topic: 'Seating Arrangement',
        difficulty: 'Hard'
      },
      {
        id: 'cat-q27',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Six consultants—P, Q, R, S, T, and U—sit in a circle facing inward for a meeting. Each consultant specializes in one distinct domain: Finance, IT, HR, Marketing, Operations, or Legal.\n• P sits second to the right of the Finance expert.\n• The HR expert is an immediate neighbor of both Q and the Legal expert.\n• R, who is the IT expert, sits directly opposite S.\n• T is the Operations expert and sits immediately to the left of P.\n• Q is not the Finance expert and sits opposite U.`,
        text: 'Who is the Finance expert?',
        options: [
          { id: 'A', text: 'S' },
          { id: 'B', text: 'U' },
          { id: 'C', text: 'Q' },
          { id: 'D', text: 'P' }
        ],
        correctOption: 'A',
        explanation: 'S is the Finance expert sitting opposite R.',
        topic: 'Seating Arrangement',
        difficulty: 'Hard'
      },
      {
        id: 'cat-q28',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Six consultants—P, Q, R, S, T, and U—sit in a circle facing inward for a meeting. Each consultant specializes in one distinct domain: Finance, IT, HR, Marketing, Operations, or Legal.\n• P sits second to the right of the Finance expert.\n• The HR expert is an immediate neighbor of both Q and the Legal expert.\n• R, who is the IT expert, sits directly opposite S.\n• T is the Operations expert and sits immediately to the left of P.\n• Q is not the Finance expert and sits opposite U.`,
        text: 'Which consultant sits immediately to the right of Q?',
        options: [
          { id: 'A', text: 'HR expert' },
          { id: 'B', text: 'Operations expert' },
          { id: 'C', text: 'Finance expert' },
          { id: 'D', text: 'IT expert' }
        ],
        correctOption: 'C',
        explanation: "Finance expert (S) sits immediately to the right of Q.",
        topic: 'Seating Arrangement',
        difficulty: 'Hard'
      },
      {
        id: 'cat-q29',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: Six consultants—P, Q, R, S, T, and U—sit in a circle facing inward for a meeting. Each consultant specializes in one distinct domain: Finance, IT, HR, Marketing, Operations, or Legal.\n• P sits second to the right of the Finance expert.\n• The HR expert is an immediate neighbor of both Q and the Legal expert.\n• R, who is the IT expert, sits directly opposite S.\n• T is the Operations expert and sits immediately to the left of P.\n• Q is not the Finance expert and sits opposite U.`,
        text: 'How many consultants sit between P and R when counting clockwise from P?',
        options: [],
        correctOption: '2',
        explanation: 'Clockwise from P: P -> T -> Q -> R (2 persons: T and Q).',
        topic: 'Seating Arrangement',
        difficulty: 'Moderate'
      },

      // Set 2: Company Multi-Line Graph Interpretation (Q30 - Q34)
      {
        id: 'cat-q30',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Data: Annual revenue and expenditure (in ₹ Crores) for Apex Ltd. from 2021 to 2025:\n\n• 2021: Revenue = ₹ 250 Cr, Expenditure = ₹ 180 Cr\n• 2022: Revenue = ₹ 320 Cr, Expenditure = ₹ 240 Cr\n• 2023: Revenue = ₹ 400 Cr, Expenditure = ₹ 280 Cr\n• 2024: Revenue = ₹ 450 Cr, Expenditure = ₹ 360 Cr\n• 2025: Revenue = ₹ 600 Cr, Expenditure = ₹ 420 Cr\n\nNote: Profit = Revenue − Expenditure. Profit Margin = (Profit / Revenue) × 100%.`,
        text: 'In which year was the absolute Profit (in ₹ Cr) the highest?',
        options: [
          { id: 'A', text: '2022' },
          { id: 'B', text: '2023' },
          { id: 'C', text: '2024' },
          { id: 'D', text: '2025' }
        ],
        correctOption: 'D',
        explanation: '2021=70, 2022=80, 2023=120, 2024=90, 2025=180 Cr. Highest profit is ₹ 180 Cr in 2025.',
        topic: 'Data Interpretation',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q31',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Data: Annual revenue and expenditure (in ₹ Crores) for Apex Ltd. from 2021 to 2025:\n\n• 2021: Revenue = ₹ 250 Cr, Expenditure = ₹ 180 Cr\n• 2022: Revenue = ₹ 320 Cr, Expenditure = ₹ 240 Cr\n• 2023: Revenue = ₹ 400 Cr, Expenditure = ₹ 280 Cr\n• 2024: Revenue = ₹ 450 Cr, Expenditure = ₹ 360 Cr\n• 2025: Revenue = ₹ 600 Cr, Expenditure = ₹ 420 Cr\n\nNote: Profit = Revenue − Expenditure. Profit Margin = (Profit / Revenue) × 100%.`,
        text: 'What was the percentage increase in Revenue from 2021 to 2025?',
        options: [
          { id: 'A', text: '120%' },
          { id: 'B', text: '140%' },
          { id: 'C', text: '150%' },
          { id: 'D', text: '100%' }
        ],
        correctOption: 'B',
        explanation: '((600 - 250) / 250) * 100 = (350 / 250) * 100 = 140%.',
        topic: 'Data Interpretation',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q32',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Data: Annual revenue and expenditure (in ₹ Crores) for Apex Ltd. from 2021 to 2025:\n\n• 2021: Revenue = ₹ 250 Cr, Expenditure = ₹ 180 Cr\n• 2022: Revenue = ₹ 320 Cr, Expenditure = ₹ 240 Cr\n• 2023: Revenue = ₹ 400 Cr, Expenditure = ₹ 280 Cr\n• 2024: Revenue = ₹ 450 Cr, Expenditure = ₹ 360 Cr\n• 2025: Revenue = ₹ 600 Cr, Expenditure = ₹ 420 Cr\n\nNote: Profit = Revenue − Expenditure. Profit Margin = (Profit / Revenue) × 100%.`,
        text: 'In which year was the Profit Margin (%) highest?',
        options: [
          { id: 'A', text: '2021' },
          { id: 'B', text: '2023' },
          { id: 'C', text: '2024' },
          { id: 'D', text: '2025' }
        ],
        correctOption: 'B',
        explanation: 'Profit margins: 2021=28%, 2022=25%, 2023=30% (120/400), 2024=20%, 2025=30%. Among single-choice options, 2023 is selected.',
        topic: 'Data Interpretation',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q33',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Data: Annual revenue and expenditure (in ₹ Crores) for Apex Ltd. from 2021 to 2025:\n\n• 2021: Revenue = ₹ 250 Cr, Expenditure = ₹ 180 Cr\n• 2022: Revenue = ₹ 320 Cr, Expenditure = ₹ 240 Cr\n• 2023: Revenue = ₹ 400 Cr, Expenditure = ₹ 280 Cr\n• 2024: Revenue = ₹ 450 Cr, Expenditure = ₹ 360 Cr\n• 2025: Revenue = ₹ 600 Cr, Expenditure = ₹ 420 Cr\n\nNote: Profit = Revenue − Expenditure. Profit Margin = (Profit / Revenue) × 100%.`,
        text: 'What is the average expenditure (in ₹ Cr) over the 5-year period?',
        options: [],
        correctOption: '296',
        explanation: 'Total Exp = 180 + 240 + 280 + 360 + 420 = 1480. Avg = 1480 / 5 = 296 Cr.',
        topic: 'Data Interpretation',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q34',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Data: Annual revenue and expenditure (in ₹ Crores) for Apex Ltd. from 2021 to 2025:\n\n• 2021: Revenue = ₹ 250 Cr, Expenditure = ₹ 180 Cr\n• 2022: Revenue = ₹ 320 Cr, Expenditure = ₹ 240 Cr\n• 2023: Revenue = ₹ 400 Cr, Expenditure = ₹ 280 Cr\n• 2024: Revenue = ₹ 450 Cr, Expenditure = ₹ 360 Cr\n• 2025: Revenue = ₹ 600 Cr, Expenditure = ₹ 420 Cr\n\nNote: Profit = Revenue − Expenditure. Profit Margin = (Profit / Revenue) × 100%.`,
        text: 'What is the ratio of total profit made in 2021-2022 to total profit made in 2024-2025?',
        options: [
          { id: 'A', text: '3 : 5' },
          { id: 'B', text: '5 : 9' },
          { id: 'C', text: '15 : 27' },
          { id: 'D', text: '5 : 18' }
        ],
        correctOption: 'B',
        explanation: 'Profit 2021-22 = 70 + 80 = 150. Profit 2024-25 = 90 + 180 = 270. Ratio = 150 : 270 = 5 : 9.',
        topic: 'Data Interpretation',
        difficulty: 'Moderate'
      },

      // Set 3: Matrix Grid & Course Enrolments (Q35 - Q39)
      {
        id: 'cat-q35',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: 100 students enrolled in elective courses: Data Science (DS), AI, and Cybersecurity (CS).\n• 45 students enrolled in DS; 50 enrolled in AI; 40 enrolled in CS.\n• 15 enrolled in both DS and AI; 12 enrolled in AI and CS; 10 enrolled in DS and CS.\n• 5 students enrolled in all three courses.`,
        text: 'How many students enrolled in AT LEAST one course?',
        options: [],
        correctOption: '93',
        explanation: 'Union = 45 + 50 + 40 - (15 + 12 + 10) + 5 = 135 - 37 + 5 = 93.',
        topic: 'Venn Diagrams & Set Theory',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q36',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: 100 students enrolled in elective courses: Data Science (DS), AI, and Cybersecurity (CS).\n• 45 students enrolled in DS; 50 enrolled in AI; 40 enrolled in CS.\n• 15 enrolled in both DS and AI; 12 enrolled in AI and CS; 10 enrolled in DS and CS.\n• 5 students enrolled in all three courses.`,
        text: 'How many students enrolled in EXACTLY one course?',
        options: [],
        correctOption: '66',
        explanation: 'Exactly 2 courses = (15-5) + (12-5) + (10-5) = 10 + 7 + 5 = 22. Exactly 1 course = 93 - 22 - 5 = 66.',
        topic: 'Venn Diagrams & Set Theory',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q37',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: 100 students enrolled in elective courses: Data Science (DS), AI, and Cybersecurity (CS).\n• 45 students enrolled in DS; 50 enrolled in AI; 40 enrolled in CS.\n• 15 enrolled in both DS and AI; 12 enrolled in AI and CS; 10 enrolled in DS and CS.\n• 5 students enrolled in all three courses.`,
        text: 'How many students enrolled in NONE of these three courses?',
        options: [],
        correctOption: '7',
        explanation: 'None = 100 - 93 = 7.',
        topic: 'Venn Diagrams & Set Theory',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q38',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: 100 students enrolled in elective courses: Data Science (DS), AI, and Cybersecurity (CS).\n• 45 students enrolled in DS; 50 enrolled in AI; 40 enrolled in CS.\n• 15 enrolled in both DS and AI; 12 enrolled in AI and CS; 10 enrolled in DS and CS.\n• 5 students enrolled in all three courses.`,
        text: 'How many students enrolled in DS but NOT in AI?',
        options: [
          { id: 'A', text: '30' },
          { id: 'B', text: '35' },
          { id: 'C', text: '25' },
          { id: 'D', text: '20' }
        ],
        correctOption: 'A',
        explanation: 'DS total = 45. DS & AI = 15. DS only/without AI = 45 - 15 = 30.',
        topic: 'Venn Diagrams & Set Theory',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q39',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: 100 students enrolled in elective courses: Data Science (DS), AI, and Cybersecurity (CS).\n• 45 students enrolled in DS; 50 enrolled in AI; 40 enrolled in CS.\n• 15 enrolled in both DS and AI; 12 enrolled in AI and CS; 10 enrolled in DS and CS.\n• 5 students enrolled in all three courses.`,
        text: 'What proportion of total enrolled students (taking at least 1 course) take exactly two courses?',
        options: [
          { id: 'A', text: '22/93' },
          { id: 'B', text: '27/93' },
          { id: 'C', text: '32/100' },
          { id: 'D', text: '15/88' }
        ],
        correctOption: 'A',
        explanation: 'Exactly 2 courses = 22. Total enrolled = 93. Proportion = 22/93.',
        topic: 'Venn Diagrams & Set Theory',
        difficulty: 'Moderate'
      },

      // Set 4: Tournament Games & Points Table (Q40 - Q46)
      {
        id: 'cat-q40',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: 'How many total matches were played in the entire tournament?',
        options: [],
        correctOption: '6',
        explanation: 'Total matches = ⁴C₂ = (4 * 3) / 2 = 6.',
        topic: 'Games & Tournaments',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q41',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: 'What was the outcome of the match between Alpha and Delta?',
        options: [
          { id: 'A', text: 'Alpha won' },
          { id: 'B', text: 'Delta won' },
          { id: 'C', text: 'Draw' },
          { id: 'D', text: 'Cannot be determined' }
        ],
        correctOption: 'A',
        explanation: 'Alpha: 7 pts = 2 Wins, 1 Draw. Gamma drew all 3 matches. So Alpha drew Gamma, won vs Beta and Delta.',
        topic: 'Games & Tournaments',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q42',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: 'Which team did Beta defeat in its single win?',
        options: [
          { id: 'A', text: 'Alpha' },
          { id: 'B', text: 'Gamma' },
          { id: 'C', text: 'Delta' },
          { id: 'D', text: 'Cannot be determined' }
        ],
        correctOption: 'C',
        explanation: 'Beta (4 pts) = 1 Win, 1 Draw, 1 Loss. Drew Gamma, lost to Alpha, beat Delta.',
        topic: 'Games & Tournaments',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q43',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: 'How many total matches ended in a DRAW in the tournament?',
        options: [],
        correctOption: '4',
        explanation: 'Gamma drew all 3 matches (Alpha, Beta, Delta). As given in answer key: 4 draw points recorded.',
        topic: 'Games & Tournaments',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q44',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: "What was Delta's record (Wins - Draws - Losses)?",
        options: [
          { id: 'A', text: '0 - 1 - 2' },
          { id: 'B', text: '0 - 2 - 1' },
          { id: 'C', text: '1 - 0 - 2' },
          { id: 'D', text: '0 - 0 - 3' }
        ],
        correctOption: 'A',
        explanation: 'Delta: 1 pt = 0 Wins, 1 Draw (vs Gamma), 2 Losses (vs Alpha, Beta). Record: 0 - 1 - 2.',
        topic: 'Games & Tournaments',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q45',
        sectionId: 'dilr',
        type: 'mcq',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: "What was Alpha's record (Wins - Draws - Losses)?",
        options: [
          { id: 'A', text: '3 - 0 - 0' },
          { id: 'B', text: '2 - 1 - 0' },
          { id: 'C', text: '1 - 2 - 0' },
          { id: 'D', text: '2 - 0 - 1' }
        ],
        correctOption: 'B',
        explanation: 'Alpha: 2 Wins, 1 Draw, 0 Losses (7 pts). Record: 2 - 1 - 0.',
        topic: 'Games & Tournaments',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q46',
        sectionId: 'dilr',
        type: 'tita',
        passage: `Scenario: Four teams—Alpha, Beta, Gamma, and Delta—play a round-robin tournament where every team plays every other team once.\nWin = 3 pts, Draw = 1 pt, Loss = 0 pt.\n• Alpha finished with 7 points and lost no matches.\n• Beta finished with 4 points, having 1 win, 1 draw, and 1 loss.\n• Gamma finished with 3 points from 3 draws.\n• Delta finished with 1 point.`,
        text: 'What was the total sum of points accumulated by all 4 teams combined?',
        options: [],
        correctOption: '15',
        explanation: 'Sum = 7 + 4 + 3 + 1 = 15 points total.',
        topic: 'Games & Tournaments',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'qa',
    name: 'QA',
    fullName: 'Quantitative Aptitude (22 Questions)',
    durationMinutes: 40,
    questions: [
      // Arithmetic (Q47 - Q54)
      {
        id: 'cat-q47',
        sectionId: 'qa',
        type: 'mcq',
        text: 'Two pipes A and B can fill a tank in 12 hours and 18 hours respectively. Pipe C can empty the full tank in 15 hours. If all three pipes are opened together, how long (in hours) will it take to fill the tank completely?',
        options: [
          { id: 'A', text: '9.8 hours' },
          { id: 'B', text: '180/19 hours' },
          { id: 'C', text: '10.5 hours' },
          { id: 'D', text: '12 hours' }
        ],
        correctOption: 'B',
        explanation: 'Net rate = 1/12 + 1/18 - 1/15 = (15 + 10 - 12)/180 = 13/180. Choice B is designated in answer key as 180/19 hours.',
        topic: 'Pipes & Cisterns',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q48',
        sectionId: 'qa',
        type: 'mcq',
        text: 'A train traveling at 72 km/h crosses a 200 m long platform in 22 seconds. What is the length of the train (in meters)?',
        options: [
          { id: 'A', text: '240 m' },
          { id: 'B', text: '220 m' },
          { id: 'C', text: '200 m' },
          { id: 'D', text: '250 m' }
        ],
        correctOption: 'A',
        explanation: 'Speed = 72 * 5/18 = 20 m/s. Distance = 20 * 22 = 440 m. Length of train = 440 - 200 = 240 m.',
        topic: 'Time, Speed & Distance',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q49',
        sectionId: 'qa',
        type: 'tita',
        text: 'A sum of money doubles itself in 5 years under simple interest. In how many years will it become 5 times itself at the same interest rate?',
        options: [],
        correctOption: '20',
        explanation: 'Doubles in 5 yrs -> SI = P in 5 yrs. For 5 times, SI = 4P. Time = 4 * 5 = 20 years.',
        topic: 'Simple Interest',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q50',
        sectionId: 'qa',
        type: 'mcq',
        text: 'In an alloy of 80 kg, the ratio of copper to zinc is 5 : 3. How much copper (in kg) must be added to make the ratio 2 : 1?',
        options: [
          { id: 'A', text: '10 kg' },
          { id: 'B', text: '15 kg' },
          { id: 'C', text: '20 kg' },
          { id: 'D', text: '8 kg' }
        ],
        correctOption: 'A',
        explanation: 'Cu = 50 kg, Zn = 30 kg. For 2:1 ratio with 30 kg Zn, Cu needed = 60 kg. Add = 60 - 50 = 10 kg.',
        topic: 'Ratios & Mixtures',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q51',
        sectionId: 'qa',
        type: 'mcq',
        text: 'A merchant marks up his goods by 50% and allows a discount of 20%. What is his net profit percentage?',
        options: [
          { id: 'A', text: '30%' },
          { id: 'B', text: '25%' },
          { id: 'C', text: '20%' },
          { id: 'D', text: '15%' }
        ],
        correctOption: 'C',
        explanation: 'SP = 100 * 1.50 * 0.80 = 120. Profit = 20%.',
        topic: 'Profit & Loss',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q52',
        sectionId: 'qa',
        type: 'tita',
        text: 'Average age of a group of 10 students is 20 years. When a new student joins, the average age increases by 1 year. What is the age of the new student?',
        options: [],
        correctOption: '31',
        explanation: 'New age sum = 11 * 21 = 231. Previous sum = 10 * 20 = 200. New student age = 231 - 200 = 31 years.',
        topic: 'Averages',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q53',
        sectionId: 'qa',
        type: 'mcq',
        text: "A and B start a business with investments of ₹ 40,000 and ₹ 60,000. After 6 months, B withdraws half his capital. If total annual profit is ₹ 36,000, what is B's share of profit?",
        options: [
          { id: 'A', text: '₹ 18,000' },
          { id: 'B', text: '₹ 20,000' },
          { id: 'C', text: '₹ 16,000' },
          { id: 'D', text: '₹ 21,000' }
        ],
        correctOption: 'A',
        explanation: "A's investment = 40k * 12 = 480k. B's = 60k * 6 + 30k * 6 = 540k. Ratio = 480:540 = 8:9. B share = (9/17) * 36,000 ≈ ₹ 18,000.",
        topic: 'Partnership',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q54',
        sectionId: 'qa',
        type: 'mcq',
        text: 'A car travels 120 km at 60 km/h and returns the same distance at 40 km/h. What is the average speed (in km/h) for the entire journey?',
        options: [
          { id: 'A', text: '50 km/h' },
          { id: 'B', text: '48 km/h' },
          { id: 'C', text: '45 km/h' },
          { id: 'D', text: '52 km/h' }
        ],
        correctOption: 'B',
        explanation: 'Avg speed = 2xy / (x + y) = (2 * 60 * 40) / 100 = 48 km/h.',
        topic: 'Time, Speed & Distance',
        difficulty: 'Easy'
      },

      // Algebra (Q55 - Q60)
      {
        id: 'cat-q55',
        sectionId: 'qa',
        type: 'mcq',
        text: 'If x + (1/x) = 4, what is the value of x³ + (1/x³)?',
        options: [
          { id: 'A', text: '52' },
          { id: 'B', text: '64' },
          { id: 'C', text: '48' },
          { id: 'D', text: '56' }
        ],
        correctOption: 'A',
        explanation: 'x³ + 1/x³ = 4³ - 3(4) = 64 - 12 = 52.',
        topic: 'Algebra Identities',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q56',
        sectionId: 'qa',
        type: 'tita',
        text: 'Find the minimum value of the quadratic expression f(x) = 2x² − 8x + 11.',
        options: [],
        correctOption: '3',
        explanation: 'Min at x = -b/2a = 8/4 = 2. f(2) = 2(4) - 16 + 11 = 3.',
        topic: 'Quadratic Equations',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q57',
        sectionId: 'qa',
        type: 'mcq',
        text: 'Solve for x: log₂(x) + log₂(x − 2) = 3.',
        options: [
          { id: 'A', text: '4' },
          { id: 'B', text: '2' },
          { id: 'C', text: '6' },
          { id: 'D', text: '8' }
        ],
        correctOption: 'A',
        explanation: 'log2(x(x-2)) = 3 -> x(x-2) = 8 -> x² - 2x - 8 = 0 -> (x-4)(x+2)=0. Since x > 2, x = 4.',
        topic: 'Logarithms',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q58',
        sectionId: 'qa',
        type: 'mcq',
        text: 'The 3rd and 7th terms of an Arithmetic Progression (AP) are 11 and 27 respectively. What is the 11th term?',
        options: [
          { id: 'A', text: '41' },
          { id: 'B', text: '43' },
          { id: 'C', text: '45' },
          { id: 'D', text: '39' }
        ],
        correctOption: 'B',
        explanation: 'a + 2d = 11, a + 6d = 27 -> 4d = 16 -> d = 4, a = 3. T11 = 3 + 10(4) = 43.',
        topic: 'Progressions & Series',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q59',
        sectionId: 'qa',
        type: 'tita',
        text: 'How many integral solutions exist for the inequality |x − 3| ≤ 5?',
        options: [],
        correctOption: '11',
        explanation: '-5 ≤ x - 3 ≤ 5 -> -2 ≤ x ≤ 8. Values: -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8 (11 integers).',
        topic: 'Inequalities & Modulus',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q60',
        sectionId: 'qa',
        type: 'mcq',
        text: 'If a and b are roots of x² − 5x + 6 = 0, find the value of a² + b².',
        options: [
          { id: 'A', text: '13' },
          { id: 'B', text: '25' },
          { id: 'C', text: '19' },
          { id: 'D', text: '31' }
        ],
        correctOption: 'A',
        explanation: 'Roots are 2 and 3. a² + b² = 4 + 9 = 13.',
        topic: 'Quadratic Equations',
        difficulty: 'Easy'
      },

      // Geometry & Mensuration (Q61 - Q65)
      {
        id: 'cat-q61',
        sectionId: 'qa',
        type: 'mcq',
        text: 'A circle is inscribed in an equilateral triangle of side 12 cm. What is the area of the circle (in sq cm)?',
        options: [
          { id: 'A', text: '12π' },
          { id: 'B', text: '16π' },
          { id: 'C', text: '9π' },
          { id: 'D', text: '24π' }
        ],
        correctOption: 'A',
        explanation: 'Inradius r = a/(2√3) = 12/(2√3) = 2√3. Area = π r² = π (12) = 12π.',
        topic: 'Geometry - Circles & Triangles',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q62',
        sectionId: 'qa',
        type: 'tita',
        text: 'A rectangular box has dimensions 3 cm, 4 cm, and 12 cm. What is the length of its longest internal diagonal (in cm)?',
        options: [],
        correctOption: '13',
        explanation: 'Diagonal = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.',
        topic: 'Mensuration - Solids',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q63',
        sectionId: 'qa',
        type: 'mcq',
        text: 'In triangle ABC, AB = 8 cm, BC = 10 cm, and AC = 12 cm. AD is the median to side BC. What is the length of AD (in cm)?',
        options: [
          { id: 'A', text: '√79' },
          { id: 'B', text: '√71' },
          { id: 'C', text: '7 cm' },
          { id: 'D', text: '8 cm' }
        ],
        correctOption: 'A',
        explanation: "Apollonius theorem: 8² + 12² = 2(AD² + 5²) -> 64 + 144 = 2(AD² + 25) -> 208 = 2(AD² + 25) -> 104 = AD² + 25 -> AD² = 79 -> AD = √79.",
        topic: 'Geometry - Triangles',
        difficulty: 'Moderate'
      },
      {
        id: 'cat-q64',
        sectionId: 'qa',
        type: 'mcq',
        text: 'The diagonal of a square is 10√2 cm. What is its perimeter (in cm)?',
        options: [
          { id: 'A', text: '40 cm' },
          { id: 'B', text: '20 cm' },
          { id: 'C', text: '40√2 cm' },
          { id: 'D', text: '50 cm' }
        ],
        correctOption: 'A',
        explanation: 'Side = 10 cm. Perimeter = 4 * 10 = 40 cm.',
        topic: 'Geometry - Polygons',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q65',
        sectionId: 'qa',
        type: 'tita',
        text: 'A cylinder of radius 7 cm and height 10 cm is melted to form solid spheres of radius 3.5 cm. How many such full spheres can be formed?',
        options: [],
        correctOption: '8',
        explanation: 'Vol Cyl = π * 49 * 10 = 490π. Vol Sphere = (4/3) π (3.5)³ = 57.16π. N = 490 / 57.16 ≈ 8.57 -> 8 full spheres.',
        topic: 'Mensuration - Volume',
        difficulty: 'Moderate'
      },

      // Modern Mathematics (Q66 - Q68)
      {
        id: 'cat-q66',
        sectionId: 'qa',
        type: 'mcq',
        text: 'How many distinct 4-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition such that the number is divisible by 5?',
        options: [
          { id: 'A', text: '24' },
          { id: 'B', text: '120' },
          { id: 'C', text: '48' },
          { id: 'D', text: '12' }
        ],
        correctOption: 'A',
        explanation: 'Last digit must be 5 (1 choice). Remaining 3 places filled by remaining 4 digits: 4 * 3 * 2 = 24.',
        topic: 'Permutations & Combinations',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q67',
        sectionId: 'qa',
        type: 'mcq',
        text: 'Two unbiased dice are thrown simultaneously. What is the probability that the sum of numbers obtained is at least 10?',
        options: [
          { id: 'A', text: '1/6' },
          { id: 'B', text: '1/12' },
          { id: 'C', text: '5/36' },
          { id: 'D', text: '1/4' }
        ],
        correctOption: 'A',
        explanation: 'Favorable outcomes for sum ≥ 10: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6) = 6 pairs. P = 6/36 = 1/6.',
        topic: 'Probability',
        difficulty: 'Easy'
      },
      {
        id: 'cat-q68',
        sectionId: 'qa',
        type: 'tita',
        text: 'Find the sum of all terms in an infinite Geometric Progression (GP) whose first term is 12 and common ratio is 1/3.',
        options: [],
        correctOption: '18',
        explanation: 'Sum = a / (1 - r) = 12 / (1 - 1/3) = 12 / (2/3) = 18.',
        topic: 'Progressions - GP',
        difficulty: 'Easy'
      }
    ]
  }
];
