const APP_KEY = 'asiFpbTrainer.v3';

const SYLLABUS = [
  {paper:'P1', name:'Paper I · English', marks:100, duration:180, qualifying:true, topics:[
    ['eng_usage','Usage'],['eng_vocab','Vocabulary'],['eng_grammar','Grammar'],['eng_comp','Comprehension'],
    ['eng_precis','Précis Writing',true],['eng_letters','Letters / Reports',true],['eng_essay','Essay',true],['eng_para','Topical Paragraphs',true],['eng_reading','Descriptive Reading Comprehension',true]
  ]},
  {paper:'P2', name:'Paper II · Arithmetic & Reasoning', marks:100, duration:180, qualifying:false, topics:[
    ['num_system','Number System'],['simple_interest','Simple Interest'],['compound_interest','Compound Interest'],['ratio','Ratio & Proportion'],['average','Average'],['percentage','Percentage'],['profit_loss','Profit & Loss'],['time_work','Time & Work'],['work_wages','Work & Wages'],['time_distance','Time & Distance'],['clocks_calendars','Clocks & Calendars'],['partnership','Partnership'],['mensuration','Mensuration'],
    ['analogy','Analogies'],['similarity','Similarities & Differences'],['spatial_visual','Spatial Visualization'],['spatial_orientation','Spatial Orientation'],['problem_solving','Problem Solving'],['analysis','Analysis'],['judgment','Judgment'],['decision','Decision Making'],['visual_memory','Visual Memory']
  ]},
  {paper:'P3', name:'Paper III · Technical', marks:200, duration:180, qualifying:false, topics:[
    ['architecture','Computer Architecture & Fundamentals'],['assembly','PC Assembling / Installation / Troubleshooting / Viruses'],['memory','Memory System / Storage / RAID / CPU / NIC'],['peripherals','Computer Peripherals'],
    ['os','Operating Systems / DOS / Windows Utilities'],['windows','Windows Administration & Maintenance'],['dbms','DBMS / RDBMS / Transactions / Concurrency'],
    ['word','MS Word'],['excel','MS Excel'],['powerpoint','MS PowerPoint'],['access','MS Access'],['networking','Networking / Topologies / LAN-MAN-WAN'],['security','Firewall / Authentication / Antivirus / Encryption / VPN / Internet / Intranet']
  ]}
];

const TOPIC_LEARNING = {
  "eng_usage": {
    "learn": [
      "Subject–verb agreement in practical sentences",
      "Articles, prepositions and common usage patterns",
      "Tense consistency and sentence correction",
      "Frequently confused words and standard expressions"
    ],
    "tricks": [
      "Read the whole sentence before judging one word.",
      "Check subject and time-marker first; they often reveal verb form instantly.",
      "Prefer standard usage over spoken-English habits."
    ],
    "traps": [
      "Ignoring the real subject because a nearby plural noun distracts you.",
      "Choosing a grammatically possible phrase that does not fit the context."
    ],
    "time": "Target 35–45 seconds. Mark and move if two options still look identical after the second read."
  },
  "eng_vocab": {
    "learn": [
      "Synonyms and antonyms",
      "Word meaning from context",
      "Common one-word substitutions",
      "Spelling and commonly confused vocabulary"
    ],
    "tricks": [
      "Use prefix/suffix clues before guessing.",
      "Eliminate options with the wrong tone or part of speech.",
      "Build revision cards from mistakes, not from every word you see."
    ],
    "traps": [
      "Picking a familiar-looking word without checking meaning in context.",
      "Treating near-synonyms as exact synonyms."
    ],
    "time": "20–35 seconds for direct vocabulary; skip early if the word is completely unknown."
  },
  "eng_grammar": {
    "learn": [
      "Parts of speech",
      "Tenses",
      "Subject–verb agreement",
      "Articles and prepositions",
      "Active/passive voice",
      "Direct/indirect basics",
      "Modifiers, pronouns and sentence correction"
    ],
    "tricks": [
      "Find subject → verb → tense marker before looking at options.",
      "For error spotting, divide the sentence into logical chunks.",
      "In passive voice, preserve tense first, then change structure."
    ],
    "traps": [
      "Being fooled by intervening phrases between subject and verb.",
      "Changing meaning while correcting grammar."
    ],
    "time": "40–55 seconds. Do not spend two minutes proving one grammar question."
  },
  "eng_comp": {
    "learn": [
      "Main idea",
      "Explicit fact retrieval",
      "Inference",
      "Tone and purpose",
      "Vocabulary in context"
    ],
    "tricks": [
      "Read the question first on short passages.",
      "For inference, choose what must follow—not what could be true.",
      "Reject options using extreme words unless the passage is equally extreme."
    ],
    "traps": [
      "Answering from your own knowledge instead of the passage.",
      "Choosing an option that repeats words but changes the meaning."
    ],
    "time": "Budget by passage, not by question. Answer direct factual items before inference."
  },
  "eng_precis": {
    "learn": [
      "Identify the central idea",
      "Remove examples/repetition",
      "Preserve logical sequence",
      "Write in your own words",
      "Give an accurate title"
    ],
    "tricks": [
      "Underline one sentence per paragraph that carries the idea.",
      "Draft a skeleton before writing the final précis.",
      "Aim near one-third length unless instructions say otherwise."
    ],
    "traps": [
      "Adding your opinion.",
      "Copying entire phrases from the passage.",
      "Losing the author’s core conclusion."
    ],
    "time": "Read/mark 8–10 min, plan 3–5 min, write 15–20 min, revise 3–5 min."
  },
  "eng_letters": {
    "learn": [
      "Formal letter structure",
      "Official report structure",
      "Purpose, facts and action requested",
      "Professional tone and closure"
    ],
    "tricks": [
      "Write purpose in the first paragraph.",
      "Use factual chronology in reports.",
      "End with a clear request/recommendation, not a vague closing."
    ],
    "traps": [
      "Informal language/slang.",
      "Long background that hides the purpose."
    ],
    "time": "Plan 3–4 min, write 12–15 min, proofread 2 min."
  },
  "eng_essay": {
    "learn": [
      "Clear thesis",
      "Logical paragraphing",
      "Balanced arguments",
      "Relevant examples",
      "Strong conclusion"
    ],
    "tricks": [
      "Spend 4–5 minutes making a 5-point skeleton.",
      "Use one core idea per paragraph.",
      "If unsure on facts, use general examples rather than risky statistics."
    ],
    "traps": [
      "Turning the essay into a list.",
      "Repeating the introduction in the conclusion."
    ],
    "time": "Plan 5 min, write 25–30 min, revise 5 min."
  },
  "eng_para": {
    "learn": [
      "Single central idea",
      "Topic sentence",
      "Supporting sentences",
      "Coherent closing"
    ],
    "tricks": [
      "Use 1-2-1 structure: topic → two supports → closing.",
      "Keep every sentence tied to the topic."
    ],
    "traps": [
      "Starting one topic and ending another.",
      "Using bullet points when a paragraph is asked."
    ],
    "time": "Usually 8–12 minutes including review."
  },
  "eng_reading": {
    "learn": [
      "Literal comprehension",
      "Inference",
      "Tone",
      "Contextual meaning",
      "Short written responses"
    ],
    "tricks": [
      "Quote the idea, not long text.",
      "For “why/how” questions, answer cause/effect directly."
    ],
    "traps": [
      "Over-answering.",
      "Using outside assumptions."
    ],
    "time": "Answer direct questions first, then inference/tone."
  },
  "num_system": {
    "learn": [
      "Natural/whole/integer/rational numbers",
      "Divisibility rules",
      "Factors, multiples, HCF and LCM",
      "Remainders",
      "Unit digit/cyclic patterns",
      "Fractions and decimals"
    ],
    "tricks": [
      "For HCF/LCM use prime factors or Euclid based on numbers.",
      "Use digit-sum tests for 3 and 9; last-two/last-three rules for 4 and 8.",
      "For unit digits, reduce exponents by the cycle length."
    ],
    "traps": [
      "Confusing HCF with LCM in word problems.",
      "Forgetting zero/negative-number conditions."
    ],
    "time": "Easy direct: 30–45 sec; HCF/LCM word problem: under 75 sec."
  },
  "simple_interest": {
    "learn": [
      "SI = PRT/100",
      "Amount = P + SI",
      "Finding missing P/R/T",
      "Comparison of rates/periods"
    ],
    "tricks": [
      "Convert months to years before applying formula.",
      "For fixed P and R, SI is directly proportional to time."
    ],
    "traps": [
      "Using compound-interest logic.",
      "Forgetting time-unit conversion."
    ],
    "time": "Most SI questions should finish in 30–50 sec."
  },
  "compound_interest": {
    "learn": [
      "A=P(1+r/100)^n",
      "CI=A−P",
      "Annual/half-yearly compounding",
      "Difference between SI and CI"
    ],
    "tricks": [
      "For 2 years: CI − SI = P(r/100)^2.",
      "For half-yearly, halve rate and double periods."
    ],
    "traps": [
      "Halving time instead of rate in half-yearly compounding.",
      "Subtracting principal incorrectly."
    ],
    "time": "Direct 2-year problems: 45–60 sec; multi-period problems: cap at 90 sec."
  },
  "ratio": {
    "learn": [
      "Simplifying ratios",
      "Proportion",
      "Direct/inverse variation",
      "Division in a ratio",
      "Mixture-style ratio reasoning"
    ],
    "tricks": [
      "Convert ratio shares to “parts” first.",
      "If A:B and B:C are given, equalize B before combining."
    ],
    "traps": [
      "Adding ratios directly when the common term is not equal.",
      "Using direct proportion where relation is inverse."
    ],
    "time": "Aim 40–60 sec for standard questions."
  },
  "average": {
    "learn": [
      "Average = total/number",
      "Combined average",
      "Weighted average",
      "Change in average",
      "Consecutive-number shortcuts"
    ],
    "tricks": [
      "For consecutive equally spaced values, average is the middle value.",
      "Change in total = change in average × count."
    ],
    "traps": [
      "Averaging averages without weighting group sizes."
    ],
    "time": "30–60 sec."
  },
  "percentage": {
    "learn": [
      "Fraction↔percentage conversions",
      "Percentage increase/decrease",
      "Successive percentage change",
      "Population/value comparison"
    ],
    "tricks": [
      "Memorise 1/2=50%, 1/3≈33.33%, 1/4=25%, 1/5=20%, 1/8=12.5%.",
      "Successive changes a% and b%: net = a+b+ab/100 with signs."
    ],
    "traps": [
      "Assuming +20% then −20% returns to original."
    ],
    "time": "Direct conversions 20–35 sec; successive change under 60 sec."
  },
  "profit_loss": {
    "learn": [
      "CP, SP, profit, loss",
      "Profit/loss percent",
      "Discount and marked price",
      "Successive discounts"
    ],
    "tricks": [
      "Assume CP=100 for pure-percent questions.",
      "Two discounts a,b → net discount a+b−ab/100."
    ],
    "traps": [
      "Calculating profit% on SP instead of CP.",
      "Mixing discount% with profit%."
    ],
    "time": "45–75 sec."
  },
  "time_work": {
    "learn": [
      "Work = rate×time",
      "Combined work",
      "Efficiency ratios",
      "Pipes/alternate work variants"
    ],
    "tricks": [
      "Take total work as LCM of given days to avoid fractions.",
      "Efficiency is inverse of time for same work."
    ],
    "traps": [
      "Adding days instead of rates."
    ],
    "time": "Standard two-worker question under 75 sec."
  },
  "work_wages": {
    "learn": [
      "Wages proportional to work",
      "Work = efficiency×time",
      "Sharing wages by contribution"
    ],
    "tricks": [
      "Convert each worker to efficiency×time units, then form ratio."
    ],
    "traps": [
      "Dividing wages only by days when efficiencies differ."
    ],
    "time": "45–75 sec."
  },
  "time_distance": {
    "learn": [
      "D=S×T",
      "Relative speed",
      "Average speed",
      "Trains/basic races",
      "Unit conversion"
    ],
    "tricks": [
      "km/h → m/s multiply by 5/18; reverse multiply 18/5.",
      "Equal-distance average speed = 2ab/(a+b)."
    ],
    "traps": [
      "Using arithmetic mean for equal-distance average speed."
    ],
    "time": "Simple D/S/T under 40 sec; relative speed under 75 sec."
  },
  "clocks_calendars": {
    "learn": [
      "Day/date remainder method",
      "Odd days",
      "Leap years",
      "Clock angle basics",
      "Gain/loss basics"
    ],
    "tricks": [
      "For day-of-week, reduce day shift modulo 7.",
      "Clock angle = |30H − 5.5M|; take smaller angle if asked."
    ],
    "traps": [
      "Treating century leap years incorrectly: divisible by 400."
    ],
    "time": "Calendar remainder questions 30–50 sec; clock-angle under 60 sec."
  },
  "partnership": {
    "learn": [
      "Profit share ∝ capital×time",
      "Changing investments",
      "Joining/leaving partnership"
    ],
    "tricks": [
      "Write capital-months immediately for each partner."
    ],
    "traps": [
      "Using capital ratio alone when time differs."
    ],
    "time": "45–70 sec."
  },
  "mensuration": {
    "learn": [
      "Perimeter/area of square, rectangle, triangle, circle",
      "Surface area/volume of cube, cuboid, cylinder",
      "Unit conversion"
    ],
    "tricks": [
      "Memorise only core formulas, derive related ones.",
      "Keep π symbolic until the end if options allow."
    ],
    "traps": [
      "Mixing area units and volume units.",
      "Using diameter where radius is required."
    ],
    "time": "Formula-direct questions under 45 sec."
  },
  "analogy": {
    "learn": [
      "Word relationship",
      "Number/letter analogy",
      "Functional/classification relationships"
    ],
    "tricks": [
      "State the relationship in words before checking options."
    ],
    "traps": [
      "Choosing an option with association but not the same relationship."
    ],
    "time": "20–40 sec."
  },
  "similarity": {
    "learn": [
      "Classification",
      "Odd-one-out",
      "Common property/difference"
    ],
    "tricks": [
      "Find the property shared by three items, not the strangest-looking item."
    ],
    "traps": [
      "Using a subjective category when a clear objective category exists."
    ],
    "time": "20–40 sec."
  },
  "spatial_visual": {
    "learn": [
      "2D/3D visualization",
      "Paper folding/cutting",
      "Embedded figures",
      "Mirror/water images"
    ],
    "tricks": [
      "Track fixed edges and orientation marks.",
      "Use elimination before mentally rotating every option."
    ],
    "traps": [
      "Rotating when the question asks reflection."
    ],
    "time": "45–75 sec."
  },
  "spatial_orientation": {
    "learn": [
      "Directions",
      "Turns",
      "Final direction",
      "Distance from start"
    ],
    "tricks": [
      "Use N-E-S-W on a tiny sketch; update after each turn.",
      "Assign coordinates for longer paths."
    ],
    "traps": [
      "Confusing left/right after facing South or West."
    ],
    "time": "30–60 sec."
  },
  "problem_solving": {
    "learn": [
      "Number/letter series",
      "Coding patterns",
      "Simple logical constraints",
      "Pattern recognition"
    ],
    "tricks": [
      "Check difference, ratio, alternating pattern, then squares/cubes.",
      "For coded relations, write the mapping once."
    ],
    "traps": [
      "Forcing a complex pattern before checking simple alternating rules."
    ],
    "time": "Give 45 sec to identify pattern; if no structure appears, move."
  },
  "analysis": {
    "learn": [
      "Statement analysis",
      "Ordering/grouping",
      "Cause-effect",
      "Data sufficiency style reasoning"
    ],
    "tricks": [
      "Separate given facts from assumptions.",
      "Write constraints compactly rather than rereading text."
    ],
    "traps": [
      "Adding real-world knowledge not supplied."
    ],
    "time": "60–90 sec for multi-condition items."
  },
  "judgment": {
    "learn": [
      "Choosing logically appropriate conclusions/actions",
      "Fact vs opinion",
      "Priority-based judgment"
    ],
    "tricks": [
      "Choose the option supported by stated facts and least extra assumption."
    ],
    "traps": [
      "Picking the morally nicest option when the question asks logical consequence."
    ],
    "time": "40–60 sec."
  },
  "decision": {
    "learn": [
      "Decision-making under stated conditions",
      "Eligibility rules",
      "Best action from constraints"
    ],
    "tricks": [
      "Convert criteria into yes/no checkpoints."
    ],
    "traps": [
      "Ignoring one disqualifying condition after several conditions are met."
    ],
    "time": "45–75 sec."
  },
  "visual_memory": {
    "learn": [
      "Recall of position, shape, sequence and differences",
      "Pattern retention"
    ],
    "tricks": [
      "Chunk items into groups and anchor positions."
    ],
    "traps": [
      "Reconstructing from expectation instead of remembered detail."
    ],
    "time": "Follow the exposure time strictly in practice; answer immediately."
  },
  "architecture": {
    "learn": [
      "Computer generations and fundamentals",
      "CPU components: ALU, CU, registers",
      "Instruction cycle basics",
      "Buses and I/O fundamentals",
      "Basic architecture terminology"
    ],
    "tricks": [
      "Remember CPU fast path: registers → cache → RAM → storage.",
      "Separate “processing” components from “storage” components."
    ],
    "traps": [
      "Calling secondary storage “memory” in hierarchy questions without context."
    ],
    "time": "Direct factual items 20–35 sec; architecture reasoning 45–60 sec."
  },
  "assembly": {
    "learn": [
      "PC components and compatibility",
      "POST/boot sequence",
      "Installation basics",
      "Common hardware troubleshooting",
      "Computer viruses/malware basics"
    ],
    "tricks": [
      "Troubleshoot from simplest/most likely layer: power → cable → POST → boot device → OS.",
      "One symptom, one layer: no power ≠ OS problem."
    ],
    "traps": [
      "Replacing parts before checking power/cables/configuration."
    ],
    "time": "Most troubleshooting MCQs should be solved by elimination in 30–50 sec."
  },
  "memory": {
    "learn": [
      "Memory hierarchy",
      "ROM/RAM/DRAM",
      "Cache and registers",
      "Secondary storage",
      "RAID 0/1/5/6/10 basics",
      "CPU and NIC basics"
    ],
    "tricks": [
      "RAID 0 = speed/no redundancy; RAID 1 = mirror; RAID 5 = distributed single parity; RAID 6 = dual parity.",
      "Volatility: registers/cache/RAM volatile; ROM/storage non-volatile."
    ],
    "traps": [
      "Assuming RAID is backup.",
      "Confusing RAID 1 mirroring with parity."
    ],
    "time": "20–45 sec per factual question."
  },
  "peripherals": {
    "learn": [
      "Input/output devices",
      "Display/video cards",
      "Printers",
      "Scanners/cameras",
      "Modems",
      "Sound cards",
      "Power supply basics"
    ],
    "tricks": [
      "Classify by primary role: input, output, communication, power.",
      "Printer questions: impact vs non-impact is a common split."
    ],
    "traps": [
      "Treating modem as storage or pure input/output."
    ],
    "time": "20–35 sec."
  },
  "os": {
    "learn": [
      "Operating-system functions",
      "Files/process/memory/device management",
      "DOS commands",
      "Windows accessories and utilities"
    ],
    "tricks": [
      "Group commands: navigation (cd/dir), file (copy/del/ren), system/utility.",
      "Ask what resource the OS is managing: CPU, memory, file, device or user."
    ],
    "traps": [
      "Confusing shell/application with operating-system core functions."
    ],
    "time": "Direct command/function questions 20–40 sec."
  },
  "windows": {
    "learn": [
      "Windows generations/basic features",
      "Installation and maintenance",
      "File management",
      "Users/passwords",
      "Administrative tools",
      "Control Panel/Settings",
      "Services, multimedia and printers"
    ],
    "tricks": [
      "For admin questions, distinguish user-level Settings from administrative/service tools.",
      "Remember service problems often persist independently of a user app."
    ],
    "traps": [
      "Assuming every setting requires registry editing."
    ],
    "time": "25–45 sec."
  },
  "dbms": {
    "learn": [
      "DBMS vs RDBMS",
      "Data types/tables/keys",
      "Views",
      "Transactions and ACID",
      "Concurrency",
      "Reports/basic SQL concepts"
    ],
    "tricks": [
      "ACID: Atomicity, Consistency, Isolation, Durability.",
      "Primary key identifies rows; foreign key links tables.",
      "View is usually a logical/virtual table from a query."
    ],
    "traps": [
      "Confusing DELETE, DROP and TRUNCATE concepts.",
      "Treating a view as always storing independent data."
    ],
    "time": "25–50 sec; transaction/concurrency questions up to 60 sec."
  },
  "word": {
    "learn": [
      "File operations",
      "Text/paragraph formatting",
      "Tables and objects",
      "Page design",
      "Macros",
      "Mail merge",
      "Printing"
    ],
    "tricks": [
      "Mail merge = main document + data source + merge fields.",
      "Separate paragraph formatting from page-layout settings."
    ],
    "traps": [
      "Confusing section/page breaks with ordinary line breaks."
    ],
    "time": "20–35 sec."
  },
  "excel": {
    "learn": [
      "Cell references/formatting",
      "Charts/graphic objects",
      "Data tools",
      "Pivot tables",
      "Data validation",
      "Math functions",
      "Templates/protection/printing"
    ],
    "tricks": [
      "$A$1 absolute; A$1 row fixed; $A1 column fixed.",
      "Pivot table summarizes data; data validation controls allowed input.",
      "Memorise SUM, AVERAGE, COUNT, MAX, MIN, IF basics."
    ],
    "traps": [
      "Confusing filtering with deleting data.",
      "Misreading relative vs absolute references after copying formulas."
    ],
    "time": "Formula/reference questions 30–50 sec."
  },
  "powerpoint": {
    "learn": [
      "Presentation elements",
      "Creating/adding slides",
      "Formatting/design/layout",
      "Slide show",
      "Printing"
    ],
    "tricks": [
      "Theme = overall design; layout = arrangement of placeholders.",
      "Transition is between slides; animation is on objects."
    ],
    "traps": [
      "Confusing transition and animation."
    ],
    "time": "20–30 sec."
  },
  "access": {
    "learn": [
      "Database objects",
      "Tables/datasheets",
      "Queries",
      "Forms",
      "Data entry/editing",
      "Reports"
    ],
    "tricks": [
      "Table stores data; query retrieves/transforms; form inputs/displays; report presents/prints."
    ],
    "traps": [
      "Calling forms the primary storage object."
    ],
    "time": "20–35 sec."
  },
  "networking": {
    "learn": [
      "Network topologies",
      "LAN/MAN/WAN",
      "Basic network devices",
      "Internet vs intranet",
      "Addressing/protocol fundamentals useful for MCQs"
    ],
    "tricks": [
      "Star topology usually centers on switch/hub.",
      "LAN local, MAN city-scale, WAN broad geographic.",
      "Switch forwards within LAN using MAC concepts; router connects networks."
    ],
    "traps": [
      "Confusing physical topology with network scope."
    ],
    "time": "20–45 sec."
  },
  "security": {
    "learn": [
      "Firewall policy",
      "Packet filters",
      "Application gateways",
      "Authentication",
      "Antivirus",
      "Encryption",
      "VPN",
      "Internet/intranet security concepts"
    ],
    "tricks": [
      "Authentication asks “who are you?”; authorization asks “what may you do?”.",
      "Encryption protects confidentiality; hashing is one-way integrity/password-verification primitive.",
      "VPN creates a protected logical tunnel over another network."
    ],
    "traps": [
      "Assuming antivirus replaces firewall or secure authentication.",
      "Calling encoding encryption."
    ],
    "time": "25–45 sec."
  }
};

const DETAILED_GUIDE = {
  "eng_usage": {
    "intro": "Usage questions test whether a sentence sounds standard in formal written English, not merely whether people say it in conversation. Treat each sentence as a small system: identify the subject, the verb, the time reference, the connector and the word that carries the intended meaning.",
    "concepts": [
      {
        "title": "Build the sentence skeleton first",
        "body": "Ignore decorative phrases for a moment and find the main subject and main verb. Once that pair is clear, agreement and tense errors become much easier to detect. A phrase such as “along with the officers” does not normally change the number of the main subject."
      },
      {
        "title": "Meaning controls grammar choices",
        "body": "Two options can both be grammatically possible but only one can fit the intended meaning. Prepositions, articles and word choice often depend on context, so read the complete sentence after inserting an option rather than judging the option alone."
      },
      {
        "title": "Formal usage beats spoken habit",
        "body": "Competitive exams generally expect standard written usage. Expressions common in casual speech may still be non-standard in formal grammar, so build your judgement from repeated examples and correction notes."
      }
    ],
    "worked": {
      "problem": "Neither the manager nor the employees ___ willing to delay the meeting.",
      "steps": [
        "With neither…nor, the verb normally agrees with the nearer subject.",
        "The nearer subject is “employees”, which is plural.",
        "Therefore the plural verb “are” fits."
      ],
      "result": "Answer: are."
    },
    "memory": [
      "Subject first, then verb, then time-marker, then preposition/article.",
      "After choosing an option, reread the entire sentence once for meaning."
    ],
    "ready": [
      "You can identify the real subject even when phrases intervene.",
      "You can explain why an option is wrong, not merely why another “sounds better”."
    ]
  },
  "eng_vocab": {
    "intro": "Vocabulary is not only memorising dictionary meanings. In the exam, the faster skill is to infer meaning from roots, prefixes, suffixes, tone and surrounding words, then eliminate options that do not fit the sentence.",
    "concepts": [
      {
        "title": "Use word parts",
        "body": "Prefixes such as un-, dis-, anti-, pre-, post- and suffixes such as -logy, -phobia, -ist, -able often give useful clues. Even when you do not know the exact word, these clues can eliminate impossible options."
      },
      {
        "title": "Context narrows meaning",
        "body": "A word may have several meanings. The sentence determines which sense is intended. Look for contrast words such as but/however, cause words such as therefore, and positive/negative tone around the unknown word."
      },
      {
        "title": "Near-synonyms are not identical",
        "body": "Competitive questions often place two close words together. Check intensity, formality and usage. “Angry”, “irritated” and “furious” belong to the same family but do not carry the same strength."
      }
    ],
    "worked": {
      "problem": "The witness gave a “concise” statement. Which meaning fits best?",
      "steps": [
        "The adjective describes the statement.",
        "Concise usually means brief but complete, not simply short because information is missing.",
        "Reject options meaning vague, lengthy or emotional."
      ],
      "result": "Best meaning: brief and clear."
    },
    "memory": [
      "Build a mistake-vocabulary list from questions you miss.",
      "Learn words in a sentence, not as isolated pairs."
    ],
    "ready": [
      "You can use context to eliminate at least two options for an unfamiliar word.",
      "You revise wrong vocabulary repeatedly instead of collecting huge unused word lists."
    ]
  },
  "eng_grammar": {
    "intro": "Grammar questions become faster when you stop scanning every word equally. Most errors fall into a small number of patterns: agreement, tense, articles, prepositions, pronouns, modifiers, voice and reported speech.",
    "concepts": [
      {
        "title": "Agreement and tense are the first checks",
        "body": "Find the main subject and verb, then locate time clues such as yesterday, since, for, already, by the time or every day. Many sentence-correction questions can be solved before you inspect the remaining words."
      },
      {
        "title": "Modifiers must sit next to what they modify",
        "body": "A misplaced modifier can create an absurd meaning even when each individual word is grammatical. Ask: “Who is doing this action?” and “Which noun does this phrase describe?”"
      },
      {
        "title": "Transformations must preserve meaning",
        "body": "When converting active/passive or direct/indirect speech, preserve tense, person, time reference and the original meaning. Do not select an option simply because the surface structure looks familiar."
      }
    ],
    "worked": {
      "problem": "Each of the candidates ___ submitted the document.",
      "steps": [
        "The grammatical subject is “Each”, not “candidates”.",
        "Each is singular.",
        "A singular auxiliary is required: “has”."
      ],
      "result": "Answer: has."
    },
    "memory": [
      "Subject → verb → tense → pronoun → modifier.",
      "An intervening plural noun does not automatically make the verb plural."
    ],
    "ready": [
      "You can name the rule behind your correction.",
      "You can solve common error-spotting items in under a minute."
    ]
  },
  "eng_comp": {
    "intro": "Comprehension is a reading-and-evidence test. The correct answer must be supported by the passage. Your outside knowledge, even if true, should not replace what the author actually says.",
    "concepts": [
      {
        "title": "Separate fact, inference and opinion",
        "body": "A factual question asks for something stated directly. An inference asks for what logically follows. Tone/purpose asks how or why the author presents the material. Use different reasoning for each type."
      },
      {
        "title": "Main idea is broader than one detail",
        "body": "A good main-idea answer covers most of the passage without being so broad that it could fit many unrelated passages. Reject options built around only one example."
      },
      {
        "title": "Extreme language is suspicious",
        "body": "Words such as always, never, completely and only often make an option stronger than the passage. Unless the passage itself is absolute, prefer the option that matches its actual level of certainty."
      }
    ],
    "worked": {
      "problem": "The passage says a policy “may reduce delays but cannot eliminate them completely.” Which conclusion follows?",
      "steps": [
        "The author allows a possible reduction.",
        "The author explicitly rejects complete elimination.",
        "Any option claiming guaranteed removal of delays is too strong."
      ],
      "result": "Choose the option saying delays may decrease, not disappear entirely."
    },
    "memory": [
      "Evidence first, intuition second.",
      "For inference ask “must this be supported?” not “could this be true?”."
    ],
    "ready": [
      "You can point to the sentence/idea supporting your answer.",
      "You do not choose options merely because they repeat passage vocabulary."
    ]
  },
  "eng_precis": {
    "intro": "Précis writing measures whether you can compress a passage without changing its central meaning. A good précis is not a list of sentences cut from the original; it is a shorter reconstruction of the same argument in your own words.",
    "concepts": [
      {
        "title": "Find the controlling idea",
        "body": "After the first reading, write one sentence answering: “What is the author mainly trying to say?” Every sentence in your précis should support that controlling idea."
      },
      {
        "title": "Delete examples, repetition and decoration",
        "body": "Examples help the original passage explain an idea, but a précis usually keeps the idea and removes most illustrations, quotations and repeated explanations."
      },
      {
        "title": "Preserve logical order",
        "body": "If the original moves problem → cause → solution, keep that structure. Compression should not rearrange the argument in a way that changes emphasis or meaning."
      }
    ],
    "worked": {
      "problem": "A 300-word passage contains a central argument, three examples and a repeated conclusion.",
      "steps": [
        "Underline the central argument in each paragraph.",
        "Remove the three examples unless one is essential to meaning.",
        "Combine repeated conclusion statements into one concise sentence.",
        "Rewrite in your own words at roughly one-third length if instructed."
      ],
      "result": "A clear ~100-word précis retaining the author’s logic and tone."
    },
    "memory": [
      "Idea, not illustration.",
      "Same meaning, fewer words.",
      "No personal opinion."
    ],
    "ready": [
      "You can state the passage’s main idea in one sentence.",
      "You can reduce length without deleting a necessary cause, condition or conclusion."
    ]
  },
  "eng_letters": {
    "intro": "Formal letters and reports are scored for clarity, structure and purpose. The examiner should understand why you are writing, what happened, and what action or conclusion is required without searching through long paragraphs.",
    "concepts": [
      {
        "title": "Purpose appears early",
        "body": "State the subject or purpose in the opening paragraph. Do not spend half the answer on background before revealing the actual request or issue."
      },
      {
        "title": "Reports are factual and chronological",
        "body": "A report usually answers what, when, where, who, impact and action/recommendation. Keep observations separate from unsupported opinions."
      },
      {
        "title": "Professional tone is simple, not decorative",
        "body": "Use direct sentences, neutral wording and clear paragraphs. Formal writing does not require difficult vocabulary; it requires precision."
      }
    ],
    "worked": {
      "problem": "Write a report on a network outage in an office.",
      "steps": [
        "Opening: date/time and affected service.",
        "Body: scope, observed symptoms, immediate actions and restoration time.",
        "Closing: likely cause if verified, preventive recommendation and pending follow-up."
      ],
      "result": "A factual report that can be understood quickly by an official reader."
    },
    "memory": [
      "Purpose → facts → action.",
      "Do not mix assumptions with confirmed facts."
    ],
    "ready": [
      "You can reproduce the format from memory.",
      "You can finish within the requested word limit and still proofread."
    ]
  },
  "eng_essay": {
    "intro": "Essay writing is controlled argument, not a memory dump. Your score improves when the essay has a clear position or central theme, logical paragraph order, relevant examples and a conclusion that genuinely follows from the discussion.",
    "concepts": [
      {
        "title": "Plan before writing",
        "body": "Use a 4–5 point skeleton: introduction, two or three major dimensions, counterpoint/limitation if relevant, conclusion. Five minutes of planning prevents repetition and missing arguments."
      },
      {
        "title": "One paragraph, one job",
        "body": "Each paragraph should begin with a clear idea, explain it, support it with an example or reasoning, and connect to the next paragraph."
      },
      {
        "title": "Accuracy matters more than impressive statistics",
        "body": "If you are uncertain about a number or quotation, do not invent it. A correct general example is safer than a false precise fact."      }
    ],
    "worked": {
      "problem": "Topic: Impact of AI on public services.",
      "steps": [
        "Intro: define the opportunity and need for responsible use.",
        "Body 1: efficiency and service delivery.",
        "Body 2: risks such as bias, privacy and accountability.",
        "Body 3: safeguards, human oversight and skills.",
        "Conclusion: balanced adoption with governance."
      ],
      "result": "A balanced, structured essay instead of a one-sided list of benefits."
    },
    "memory": [
      "Thesis → evidence → balance → conclusion.",
      "Examples support an argument; they are not the argument itself."
    ],
    "ready": [
      "You can outline an essay in under five minutes.",
      "Your conclusion answers the question rather than merely repeating the introduction."
    ]
  },
  "eng_para": {
    "intro": "A topical paragraph is a compact argument around one central idea. It should feel complete even though it is short: opening idea, support, and a closing sentence.",
    "concepts": [
      {
        "title": "Topic sentence controls the paragraph",
        "body": "The first one or two sentences should make the subject and direction clear. Every later sentence should support that same focus."
      },
      {
        "title": "Coherence comes from logical links",
        "body": "Use cause/effect, example, contrast or sequence to connect sentences. Avoid writing five independent statements that happen to be about the same topic."
      }
    ],
    "worked": {
      "problem": "Write a paragraph on cyber awareness.",
      "steps": [
        "State why cyber awareness matters.",
        "Explain one or two common risks.",
        "Give practical preventive behaviour.",
        "Close with the benefit of responsible digital habits."
      ],
      "result": "A single focused paragraph, not a mini-essay with unrelated subtopics."
    },
    "memory": [
      "One idea, one direction.",
      "Every sentence must earn its place."
    ],
    "ready": [
      "You can stay within the word limit.",
      "Removing any sentence would not reveal that the paragraph wandered off-topic."
    ]
  },
  "eng_reading": {
    "intro": "Descriptive reading comprehension requires concise written answers rather than selecting an option. The skill is to extract the exact idea asked for and express it clearly in your own words.",
    "concepts": [
      {
        "title": "Match answer length to the question",
        "body": "A one-mark direct question may need one precise sentence; a why/how question may need a cause and effect. Writing extra material can introduce errors."
      },
      {
        "title": "Paraphrase evidence",
        "body": "Use the passage’s idea but avoid copying long chunks. Paraphrasing demonstrates understanding and keeps the answer concise."
      }
    ],
    "worked": {
      "problem": "Question: Why did the author oppose the proposal?",
      "steps": [
        "Locate the paragraph discussing opposition.",
        "Identify the stated reason, not your own reason.",
        "Write one or two sentences linking proposal to consequence."
      ],
      "result": "A direct evidence-based explanation."
    },
    "memory": [
      "Answer the exact verb in the question: what, why, how, compare.",
      "Short and supported is better than long and speculative."
    ],
    "ready": [
      "You can answer without copying whole sentences.",
      "You distinguish direct evidence from inference."
    ]
  },
  "num_system": {
    "intro": "Number System is the foundation of arithmetic. Many apparently different questions reduce to four ideas: divisibility, factors/multiples, remainders and repeating digit patterns. The goal is to recognise which structure is present before doing calculation.",
    "concepts": [
      {
        "title": "Factors, multiples, HCF and LCM",
        "body": "A factor divides a number exactly; a multiple is produced by multiplying it. HCF captures the greatest common divisor, while LCM is the smallest number divisible by all given numbers. In grouping problems HCF often appears; in “when will events meet again?” problems LCM often appears."
      },
      {
        "title": "Remainders are modular arithmetic",
        "body": "Instead of carrying a huge number, keep only the remainder after each operation. For example, to find a large power modulo 7, reduce the base and use the repeating remainder cycle."
      },
      {
        "title": "Unit-digit cycles save time",
        "body": "Last digits of powers repeat. Powers of 2 cycle 2,4,8,6; powers of 3 cycle 3,9,7,1. Reduce the exponent by cycle length instead of computing the actual power."
      }
    ],
    "worked": {
      "problem": "Find the unit digit of 7^103.",
      "steps": [
        "Powers of 7 cycle: 7, 9, 3, 1. Cycle length = 4.",
        "103 mod 4 = 3.",
        "Take the third number in the cycle."
      ],
      "result": "Unit digit = 3."
    },
    "memory": [
      "HCF for maximum equal grouping; LCM for earliest common repetition.",
      "Huge power? Look for a cycle before calculating."
    ],
    "ready": [
      "You can decide HCF vs LCM from wording.",
      "You know divisibility tests for 2,3,4,5,6,8,9,10,11."
    ]
  },
  "simple_interest": {
    "intro": "Simple Interest assumes interest is calculated only on the original principal. Because the base does not change, interest grows linearly with principal, rate and time.",
    "concepts": [
      {
        "title": "Understand the variables",
        "body": "P is principal, R is annual percentage rate, T is time in years. SI = P×R×T/100. If the question gives months, convert them to years before substitution."
      },
      {
        "title": "Direct proportionality",
        "body": "For fixed rate and time, doubling the principal doubles interest. For fixed principal and rate, doubling time doubles interest. This lets you solve many comparison questions without full calculation."
      },
      {
        "title": "Amount includes principal",
        "body": "Interest and amount are different. Amount = Principal + Interest. Many easy marks are lost by returning SI when the question asks for total amount."
      }
    ],
    "worked": {
      "problem": "₹8,000 at 7.5% simple interest for 18 months. Find SI.",
      "steps": [
        "18 months = 1.5 years.",
        "SI = 8000×7.5×1.5/100.",
        "7.5% of 8000 = 600; for 1.5 years = 900."
      ],
      "result": "SI = ₹900."
    },
    "memory": [
      "Convert time first.",
      "Ask: interest only or amount?"
    ],
    "ready": [
      "You can rearrange the formula to find P, R or T.",
      "You can solve proportional-change questions mentally."
    ]
  },
  "compound_interest": {
    "intro": "Compound Interest changes the base after every compounding period: interest earns further interest. Thinking in growth factors is faster and safer than repeatedly calculating yearly interest.",
    "concepts": [
      {
        "title": "Use the multiplier model",
        "body": "A rise of r% means multiply by (1+r/100). Over n annual periods, Amount = P(1+r/100)^n. This same multiplier idea also solves population growth and depreciation-style questions."
      },
      {
        "title": "Successive changes multiply",
        "body": "Two percentage changes should not normally be added directly because the second acts on a changed base. +20% followed by −20% gives 1.2×0.8 = 0.96, a net 4% decrease."
      },
      {
        "title": "Difference between CI and SI",
        "body": "For two years at the same annual rate, the extra CI over SI equals interest on the first year’s interest: P(r/100)^2. This is a useful direct shortcut."
      }
    ],
    "worked": {
      "problem": "₹10,000 at 10% compounded annually for 2 years.",
      "steps": [
        "Growth factor = 1.10.",
        "Amount = 10000×1.1×1.1 = 12100.",
        "CI = 12100−10000."
      ],
      "result": "CI = ₹2,100."
    },
    "memory": [
      "Percentage change = multiplier.",
      "Second-year interest is on the increased amount."
    ],
    "ready": [
      "You can distinguish SI and CI immediately.",
      "You can handle successive increase/decrease without adding percentages."
    ]
  },
  "ratio": {
    "intro": "Ratio compares quantities using relative parts. Most ratio problems become easy once every quantity is converted to the same unit and represented as multiples of a common variable.",
    "concepts": [
      {
        "title": "Represent quantities as parts",
        "body": "If A:B = 3:5, write A=3k and B=5k. If their total is known, 8k equals the total. This single-variable representation prevents unnecessary equations."
      },
      {
        "title": "Combine ratios through a common term",
        "body": "If A:B=2:3 and B:C=4:5, make the B values equal before joining the ratios. The combined ratio is not simply 2:3:5."
      },
      {
        "title": "Direct and inverse proportion",
        "body": "In direct proportion both quantities move in the same ratio. In inverse proportion their product remains constant, as with workers and time for a fixed job under equal efficiency."
      }
    ],
    "worked": {
      "problem": "Divide ₹1,440 in the ratio 5:7.",
      "steps": [
        "Total parts = 12.",
        "One part = 1440/12 = 120.",
        "Shares = 5×120 and 7×120."
      ],
      "result": "₹600 and ₹840."
    },
    "memory": [
      "Same units before ratio.",
      "a:b means ak:bk."
    ],
    "ready": [
      "You can combine two linked ratios.",
      "You can identify inverse proportion from context."
    ]
  },
  "average": {
    "intro": "Average is a compact way of representing a total: Average × Number of items = Total. Most exam shortcuts come from manipulating totals rather than repeatedly adding all observations.",
    "concepts": [
      {
        "title": "Think in totals",
        "body": "If the average of 20 values is 35, their total is 700. If one value changes, update the total and divide again. This is faster than reconstructing all 20 values."
      },
      {
        "title": "Replacement shortcut",
        "body": "When one observation x is replaced by y among n items, average changes by (y−x)/n. This gives an immediate answer in many age/score replacement questions."
      },
      {
        "title": "Combined average is weighted",
        "body": "Two group averages cannot be simply averaged unless group sizes are equal. Convert each group to total, add totals, then divide by combined count."
      }
    ],
    "worked": {
      "problem": "Average of 10 numbers is 42. One number 30 is replaced by 50. New average?",
      "steps": [
        "Original total = 10×42 = 420.",
        "Total increases by 20.",
        "New total = 440; divide by 10."
      ],
      "result": "New average = 44."
    },
    "memory": [
      "Average × count = total.",
      "Replacement changes total only by the difference."
    ],
    "ready": [
      "You can solve combined averages using weights.",
      "You do not average averages blindly."
    ]
  },
  "percentage": {
    "intro": "Percentage is a ratio out of 100, but the fastest exam approach is to convert common percentages to fractions or multipliers. This avoids slow decimal work and makes successive changes intuitive.",
    "concepts": [
      {
        "title": "Fraction-percentage equivalence",
        "body": "Memorise common pairs: 50%=1/2, 25%=1/4, 20%=1/5, 12.5%=1/8, 16⅔%=1/6, 33⅓%=1/3, 66⅔%=2/3. These convert many calculations into simple division."
      },
      {
        "title": "Base matters",
        "body": "A percentage increase is measured on the original base; a later decrease is measured on the new base. That is why +20% and −20% do not cancel."
      },
      {
        "title": "Reverse percentage",
        "body": "If a value after a 20% increase is 120, the original is 120/1.2 = 100. Subtracting 20% from 120 would be wrong because 20% was applied to the original, not the final value."
      }
    ],
    "worked": {
      "problem": "Price increases by 25% and then decreases by 20%. Net change?",
      "steps": [
        "Use multipliers: 1.25×0.80 = 1.00.",
        "Final equals original."
      ],
      "result": "No net percentage change."
    },
    "memory": [
      "x% of y = y% of x.",
      "Reverse change = divide by multiplier."
    ],
    "ready": [
      "You can switch between fraction and percentage mentally.",
      "You can solve successive changes without assuming they cancel."
    ]
  },
  "profit_loss": {
    "intro": "Profit/Loss problems are percentage problems with named bases. The critical skill is to keep Cost Price (CP), Selling Price (SP) and Marked Price (MP) separate.",
    "concepts": [
      {
        "title": "Profit and loss use cost price",
        "body": "Profit = SP−CP and Loss = CP−SP. Unless otherwise stated, profit% and loss% are calculated on CP, not SP."
      },
      {
        "title": "Discount uses marked price",
        "body": "Discount = MP−SP and discount% is based on MP. A question can contain both discount and profit, which means two different percentage bases are present."
      },
      {
        "title": "Use multipliers for chains",
        "body": "If MP is 40% above CP and discount is 10%, take CP=100 → MP=140 → SP=126. Profit is then 26% on CP."
      }
    ],
    "worked": {
      "problem": "CP ₹800, marked 25% above CP, sold at 10% discount. Find SP and profit%.",
      "steps": [
        "MP = 800×1.25 = 1000.",
        "SP = 1000×0.90 = 900.",
        "Profit = 100; profit% = 100/800×100."
      ],
      "result": "SP ₹900; profit 12.5%."
    },
    "memory": [
      "Profit/loss base = CP. Discount base = MP.",
      "When only percentages matter, assume CP=100."
    ],
    "ready": [
      "You can solve a markup-discount-profit chain without mixing bases.",
      "You distinguish discount from loss."
    ]
  },
  "time_work": {
    "intro": "Time & Work is easiest when work is treated as a quantity and each worker has a rate. The famous LCM method avoids fractions by choosing a convenient total amount of work.",
    "concepts": [
      {
        "title": "Rate is inverse of time",
        "body": "If A finishes a job in 10 days, A’s rate is 1/10 job per day. A faster worker has a larger rate and therefore needs less time."
      },
      {
        "title": "LCM work method",
        "body": "If A takes 12 days and B takes 18 days, choose total work = LCM(12,18)=36 units. Then A does 3 units/day and B does 2 units/day. Together they do 5 units/day."
      },
      {
        "title": "Split changing-workforce problems into phases",
        "body": "When someone joins or leaves, calculate work completed in the first phase, subtract from total, then solve the remaining phase with the new combined rate."
      }
    ],
    "worked": {
      "problem": "A completes a job in 12 days, B in 18 days. Together?",
      "steps": [
        "Take total work = 36 units.",
        "A rate=3 units/day, B rate=2 units/day.",
        "Together rate=5 units/day; time=36/5 days."
      ],
      "result": "7.2 days."
    },
    "memory": [
      "Efficiency ∝ 1/time.",
      "Add rates, not days."
    ],
    "ready": [
      "You can switch between fraction-rate and LCM-unit methods.",
      "You can handle join/leave problems in phases."
    ]
  },
  "work_wages": {
    "intro": "Work & Wages combines productivity with proportional sharing. Wages should be divided in the ratio of actual work contributed, which depends on efficiency and time.",
    "concepts": [
      {
        "title": "Work contribution",
        "body": "For constant efficiency, work ∝ time. If efficiencies differ, work ∝ efficiency×time. This product gives the ratio in which wages should be split."
      },
      {
        "title": "Do not confuse attendance with contribution",
        "body": "Two workers may work the same number of days but deserve different shares if one is more efficient. Likewise, a more efficient worker working fewer days can still contribute the same total work."
      }
    ],
    "worked": {
      "problem": "A is twice as efficient as B. A works 6 days, B works 9 days. Divide ₹2,100.",
      "steps": [
        "Take B efficiency=1, A=2.",
        "Work contributions: A=2×6=12, B=1×9=9.",
        "Ratio=12:9=4:3.",
        "₹2,100 / 7 = ₹300 per part."
      ],
      "result": "A ₹1,200; B ₹900."
    },
    "memory": [
      "Wages follow work, not merely time.",
      "Work = efficiency × time."
    ],
    "ready": [
      "You can build a quick worker-efficiency-time table.",
      "You reduce the work ratio before dividing money."
    ]
  },
  "time_distance": {
    "intro": "Time, Speed and Distance questions become much easier when you first decide whether the problem is ordinary motion, relative motion, average speed or a train/length problem.",
    "concepts": [
      {
        "title": "Core relation",
        "body": "Distance = Speed×Time. Keep units consistent. The standard conversion is km/h to m/s ×5/18, and m/s to km/h ×18/5."
      },
      {
        "title": "Relative speed",
        "body": "For objects moving toward each other, add speeds. For the same direction, subtract speeds. Then use relative distance divided by relative speed."
      },
      {
        "title": "Average speed depends on time or distance",
        "body": "For equal distances at speeds x and y, average speed is 2xy/(x+y), not (x+y)/2. The simple mean works only for equal time intervals."
      }
    ],
    "worked": {
      "problem": "A travels 60 km at 30 km/h and 60 km at 60 km/h. Average speed?",
      "steps": [
        "Times: 2 h and 1 h.",
        "Total distance=120 km, total time=3 h.",
        "Average=120/3."
      ],
      "result": "40 km/h, not 45 km/h."
    },
    "memory": [
      "Equal distance → harmonic-style shortcut 2xy/(x+y).",
      "Same direction subtract; opposite direction add."
    ],
    "ready": [
      "You convert units without hesitation.",
      "You identify whether average is based on equal time or equal distance."
    ]
  },
  "clocks_calendars": {
    "intro": "Clock and calendar questions are cycle problems. Instead of counting everything, reduce movement to repeating cycles: 360°/12 hours for clocks and 7-day cycles for calendars.",
    "concepts": [
      {
        "title": "Clock-hand movement",
        "body": "Hour hand moves 30° per hour plus 0.5° per minute. Minute hand moves 6° per minute. Their angle difference at H:M is |30H−5.5M|; if needed take the smaller of θ and 360−θ."
      },
      {
        "title": "Odd-day calendar method",
        "body": "Weekdays repeat every 7 days. Reduce total extra days modulo 7. An ordinary year shifts by 1 day; a leap year shifts by 2."
      },
      {
        "title": "Leap-year rule",
        "body": "Years divisible by 4 are usually leap years, but century years must be divisible by 400. Thus 2000 was leap; 1900 was not."
      }
    ],
    "worked": {
      "problem": "Angle between hands at 3:20?",
      "steps": [
        "Hour-hand position = 30×3 + 0.5×20 = 100°.",
        "Minute-hand position = 6×20 = 120°.",
        "Difference = 20°."
      ],
      "result": "20°."
    },
    "memory": [
      "Clock: 30H−5.5M.",
      "Calendar: reduce by mod 7."
    ],
    "ready": [
      "You can apply the century leap rule.",
      "You use odd days instead of day-by-day counting."
    ]
  },
  "partnership": {
    "intro": "Partnership is a ratio problem where investment is weighted by time. Profit share reflects how much capital was exposed to the business and for how long.",
    "concepts": [
      {
        "title": "Capital-time product",
        "body": "If capital remains constant, share ∝ Capital×Months. Two people investing equal money for different periods do not receive equal profit."
      },
      {
        "title": "Changing capital",
        "body": "If someone adds or withdraws capital, split the year into periods and sum capital×time for each period before comparing with partners."
      }
    ],
    "worked": {
      "problem": "A invests ₹20,000 for 12 months; B invests ₹30,000 for 8 months. Profit ₹12,000.",
      "steps": [
        "A weight=240,000 capital-months.",
        "B weight=240,000 capital-months.",
        "Weights are equal."
      ],
      "result": "Each receives ₹6,000."
    },
    "memory": [
      "Profit share ∝ money × time.",
      "Use the same time unit for everyone."
    ],
    "ready": [
      "You can handle mid-year investment changes.",
      "You cancel common factors before large multiplication."
    ]
  },
  "mensuration": {
    "intro": "Mensuration rewards formula familiarity, but most mistakes come from choosing the wrong dimension or unit. Before calculation, decide whether the question asks length, area, surface area or volume.",
    "concepts": [
      {
        "title": "Dimension check",
        "body": "Perimeter is one-dimensional, area uses square units, and volume uses cubic units. A correct numerical value with the wrong dimension usually signals the wrong formula."
      },
      {
        "title": "Scaling rules",
        "body": "If every length is multiplied by k, perimeter scales by k, area by k² and volume by k³. This can answer many comparison questions without using formulas."
      },
      {
        "title": "Composite figures",
        "body": "Break an irregular figure into known shapes or use outer area minus inner area for paths, borders and hollow regions."
      }
    ],
    "worked": {
      "problem": "A square side doubles. How does area change?",
      "steps": [
        "Original area=s².",
        "New side=2s, new area=(2s)²=4s²."
      ],
      "result": "Area becomes four times."
    },
    "memory": [
      "Length k → area k² → volume k³.",
      "Write units before final answer."
    ],
    "ready": [
      "You know core formulas for rectangle, triangle, circle, cuboid, cylinder and sphere.",
      "You can recognise outer-minus-inner problems."
    ]
  },
  "analogy": {
    "intro": "Analogy tests whether you can detect the exact relationship between two items and reproduce the same relationship in another pair. The key is to name the relation before looking for an answer.",
    "concepts": [
      {
        "title": "Relationship must preserve direction",
        "body": "Doctor:hospital is not the same directional relation as hospital:doctor. Check who belongs to what, what performs what function, or what causes what."
      },
      {
        "title": "Use the strongest specific relation",
        "body": "If “bird:nest” is the pair, “bee:hive” matches home relationship more precisely than an option merely connecting two living things."
      }
    ],
    "worked": {
      "problem": "Book : Author :: Painting : ?",
      "steps": [
        "A book is created by an author.",
        "Need the creator of a painting."
      ],
      "result": "Artist."
    },
    "memory": [
      "Say the relationship in a sentence.",
      "Preserve both relation and direction."
    ],
    "ready": [
      "You test function, part-whole, cause-effect, degree and category.",
      "You avoid vague similarities."
    ]
  },
  "similarity": {
    "intro": "Similarity and difference questions are classification problems. Instead of asking “which looks odd?”, identify a rule shared by three items and absent in one.",
    "concepts": [
      {
        "title": "Test simple properties first",
        "body": "Check category, function, count, spelling pattern or numerical property before inventing a complex rule."
      },
      {
        "title": "The rule must fit all members",
        "body": "A valid classification should explain every included option cleanly. If your rule needs exceptions, it is probably not the intended rule."
      }
    ],
    "worked": {
      "problem": "Triangle, square, rectangle, sphere — odd one?",
      "steps": [
        "Triangle, square and rectangle are 2D plane figures.",
        "Sphere is a 3D solid."
      ],
      "result": "Sphere."
    },
    "memory": [
      "Shared property first, odd item second.",
      "Prefer the simplest complete rule."
    ],
    "ready": [
      "You can state the shared property explicitly.",
      "You do not choose based only on appearance."
    ]
  },
  "spatial_visual": {
    "intro": "Spatial visualization asks you to mentally manipulate shapes, cubes, folds and rotations. The safest approach is to track one property at a time instead of imagining the entire transformation at once.",
    "concepts": [
      {
        "title": "Painted-cube formulas",
        "body": "For an n×n×n cube painted on all six faces: 8 small cubes have three painted faces, 12(n−2) have exactly two, 6(n−2)² have exactly one, and (n−2)³ have none."
      },
      {
        "title": "Rotation preserves structure",
        "body": "A rigid rotation changes orientation but not side lengths, adjacency or the identity of opposite faces. Fix one reference face or edge and track others relative to it."
      },
      {
        "title": "Paper folding works backward",
        "body": "When holes/cuts are made after folding, unfold in reverse order and mirror the cut across each fold line."
      }
    ],
    "worked": {
      "problem": "A cube is cut into 5 pieces along each edge after all faces are painted. How many small cubes have no paint?",
      "steps": [
        "n=5.",
        "Interior cubes per edge = n−2 = 3.",
        "Unpainted = 3³."
      ],
      "result": "27."
    },
    "memory": [
      "Painted cube formulas save several minutes.",
      "Track adjacency, not screen position."
    ],
    "ready": [
      "You can solve basic painted-cube counts instantly.",
      "You sketch when mental rotation becomes uncertain."
    ]
  },
  "spatial_orientation": {
    "intro": "Direction questions are easiest on a coordinate grid. Treat east/west as horizontal movement and north/south as vertical movement; then calculate the net displacement.",
    "concepts": [
      {
        "title": "Coordinates prevent turn confusion",
        "body": "Assign east +x, west −x, north +y, south −y. After each movement update coordinates. Final direction comes from the signs of x and y."
      },
      {
        "title": "Facing direction changes after a turn",
        "body": "A left or right turn is relative to the person’s current facing direction, not the page. Update facing before applying the next movement."
      }
    ],
    "worked": {
      "problem": "Move 3 km east, 4 km north. Distance and direction from start?",
      "steps": [
        "Net x=+3, y=+4.",
        "Distance=√(3²+4²)=5.",
        "Both coordinates positive → north-east."
      ],
      "result": "5 km north-east."
    },
    "memory": [
      "Coordinates first, Pythagoras last.",
      "Turn changes facing before movement."
    ],
    "ready": [
      "You can track multi-turn paths without redrawing everything.",
      "You can determine quadrant before exact distance."
    ]
  },
  "problem_solving": {
    "intro": "Problem-solving questions reward structured representation. Convert words into slots, symbols, tables or equations so that your working memory is not carrying all constraints at once.",
    "concepts": [
      {
        "title": "Start with the strongest constraint",
        "body": "A statement such as “A sits immediately left of B” places two items at once and is usually more useful than a vague statement such as “C is somewhere left of D”."
      },
      {
        "title": "Use options strategically",
        "body": "If building the full arrangement is long, test answer choices against the constraints. One contradiction is enough to eliminate an option."
      }
    ],
    "worked": {
      "problem": "Five people stand in a row; A is immediately left of B and C is at one end.",
      "steps": [
        "Treat AB as one block first.",
        "Place C at an end.",
        "Use remaining conditions to position the block and others."
      ],
      "result": "A compact slot method avoids repeatedly rereading the sentence."
    },
    "memory": [
      "Externalize constraints.",
      "Most restrictive clue first."
    ],
    "ready": [
      "You draw a reusable base diagram for linked questions.",
      "You do not add unstated assumptions."
    ]
  },
  "analysis": {
    "intro": "Analysis questions test logical necessity. The exam often gives a statement and asks what follows, what is assumed or whether a relationship is valid. Your job is to distinguish certainty from possibility.",
    "concepts": [
      {
        "title": "Implication is one-way",
        "body": "If A implies B, you may conclude B when A occurs, but you cannot automatically conclude A from B. Reversing an implication is one of the most common traps."
      },
      {
        "title": "Counterexample method",
        "body": "To test whether a conclusion must follow, try to imagine one valid case where the statements are true but the conclusion is false. If such a case exists, the conclusion is not necessary."
      }
    ],
    "worked": {
      "problem": "All programmers are graduates. Ravi is a graduate. Must Ravi be a programmer?",
      "steps": [
        "Statement gives Programmer → Graduate.",
        "Ravi is Graduate does not reverse the arrow.",
        "He could be a graduate in another profession."
      ],
      "result": "No definite conclusion that Ravi is a programmer."
    },
    "memory": [
      "Must follow, not may follow.",
      "Never reverse an arrow without evidence."
    ],
    "ready": [
      "You can reject a conclusion with a valid counterexample.",
      "You separate facts from assumptions."
    ]
  },
  "judgment": {
    "intro": "Judgment/data-sufficiency questions ask whether the provided information is enough to reach a unique conclusion. Often you do not need the final numerical value; you only need to prove whether it can be determined.",
    "concepts": [
      {
        "title": "Test statements independently",
        "body": "Check statement I alone, then statement II alone, then combine only if necessary. Mixing them too early makes sufficiency questions slower."
      },
      {
        "title": "Unique answer is the goal",
        "body": "Information is sufficient only when it produces one determinate answer. A range of possible answers means insufficiency even if you learned something useful."
      }
    ],
    "worked": {
      "problem": "What is x? I: x+y=10. II: y=4.",
      "steps": [
        "I alone gives many x,y pairs → insufficient.",
        "II alone gives y only → insufficient.",
        "Together x=6 uniquely."
      ],
      "result": "Both statements together are sufficient."
    },
    "memory": [
      "Sufficiency ≠ full calculation.",
      "Stop when uniqueness is proven."
    ],
    "ready": [
      "You check I and II separately.",
      "You stop once sufficiency is established."
    ]
  },
  "decision": {
    "intro": "Decision-making questions ask for an action or conclusion that is reasonable given the stated facts. The best answer is usually the one that directly addresses the problem without assuming information that was never provided.",
    "concepts": [
      {
        "title": "Stay inside the case",
        "body": "Do not import your personal knowledge or preferences unless the question invites them. An option can sound sensible in real life but still be unsupported by the case."
      },
      {
        "title": "Prefer proportionate action",
        "body": "Extreme actions are often distractors when a simpler, directly relevant step would solve the stated problem."
      }
    ],
    "worked": {
      "problem": "A system is intermittently slow after a recent change. Which first action is best?",
      "steps": [
        "Do not immediately replace hardware without evidence.",
        "Check logs/metrics and compare before/after the change.",
        "Choose the reversible diagnostic step first."
      ],
      "result": "Investigate evidence before destructive action."
    },
    "memory": [
      "Supported, direct, proportionate.",
      "Do not solve a different problem than the one stated."
    ],
    "ready": [
      "You can explain what assumption each wrong option adds.",
      "You prefer evidence-gathering before irreversible action."
    ]
  },
  "visual_memory": {
    "intro": "Visual-memory questions are easier when you encode structure instead of trying to store a perfect mental photograph. Chunk the image into zones and attach distinctive features to fixed positions.",
    "concepts": [
      {
        "title": "Chunking",
        "body": "Divide a dense figure into top/middle/bottom or a 3×3 mental grid. Remember two or three features per zone rather than ten isolated symbols."
      },
      {
        "title": "Anchor distinctive items",
        "body": "Start with unusual shapes, colours or orientations, then remember nearby items relative to those anchors."
      }
    ],
    "worked": {
      "problem": "You see nine symbols in a 3×3 grid for five seconds.",
      "steps": [
        "Encode centre first, then four corners, then remaining edge positions.",
        "Use labels such as “star top-left, triangle centre”.",
        "On recall, rebuild the grid rather than the image."
      ],
      "result": "Structured recall is more reliable than trying to remember the picture as a whole."
    },
    "memory": [
      "Grid, anchors, relations.",
      "Scan systematically once before staring at details."
    ],
    "ready": [
      "You can use the same scan order every time.",
      "You recall positions relative to anchors."
    ]
  },
  "architecture": {
    "intro": "Computer Architecture questions become easier when you see the computer as a flow: input arrives, CPU processes instructions using registers/cache/RAM, results move through buses, and data may be stored or sent to output devices.",
    "concepts": [
      {
        "title": "CPU components",
        "body": "The ALU performs arithmetic and logical operations; the Control Unit coordinates instruction execution; registers hold very small, very fast values close to the CPU. These are distinct functions even though they cooperate every instruction cycle."
      },
      {
        "title": "Memory hierarchy",
        "body": "Registers are fastest and smallest, then cache, then RAM, then secondary storage. Moving downward generally increases capacity and latency while reducing cost per bit."
      },
      {
        "title": "Buses and instruction cycle",
        "body": "Address bus identifies locations, data bus carries data, and control bus carries control signals. The basic instruction cycle is fetch → decode → execute, often followed by storing a result."
      }
    ],
    "worked": {
      "problem": "Which storage is normally closest to the CPU core: RAM, SSD, cache or HDD?",
      "steps": [
        "Compare hierarchy positions.",
        "Cache is designed to supply frequently used instructions/data much faster than main memory."
      ],
      "result": "Cache."
    },
    "memory": [
      "ALU calculates; CU coordinates; registers hold immediate values.",
      "Registers → cache → RAM → storage."
    ],
    "ready": [
      "You can explain each CPU component by function.",
      "You can order common memory levels by speed/capacity."
    ]
  },
  "assembly": {
    "intro": "PC assembling and troubleshooting questions should be approached as diagnosis, not random replacement. Work from the lowest/basic layer upward: power, POST/hardware, storage/boot, OS, application.",
    "concepts": [
      {
        "title": "Layered troubleshooting",
        "body": "If the machine has no power signs, checking the operating system is pointless. If POST succeeds but no boot device is found, storage/boot configuration becomes relevant. Match the symptom to the earliest failing layer."
      },
      {
        "title": "Safe first action",
        "body": "Exams often ask the best first step. Prefer reversible checks such as cables, logs, device detection or known-good tests before destructive actions such as formatting or reinstalling."
      },
      {
        "title": "Malware distinctions",
        "body": "A virus normally attaches to files/programs; a worm spreads across networks without needing a host file; a Trojan disguises itself as legitimate software; ransomware encrypts/locks data to demand payment."
      }
    ],
    "worked": {
      "problem": "PC powers on, fans spin, but no storage device appears in firmware. What should you inspect first?",
      "steps": [
        "Power layer works.",
        "Firmware is running, so OS is not yet involved.",
        "Check storage power/data connection and whether the drive is detected."
      ],
      "result": "Investigate storage connection/detection before reinstalling the OS."
    },
    "memory": [
      "Power → POST → storage/boot → OS → app.",
      "Diagnose before replacing."
    ],
    "ready": [
      "You can map a symptom to the likely layer.",
      "You distinguish virus, worm, Trojan and ransomware."
    ]
  },
  "memory": {
    "intro": "Memory/storage questions mix several technologies, so classify each by volatility, speed, capacity, location and purpose. RAID questions add another dimension: performance versus redundancy.",
    "concepts": [
      {
        "title": "Volatile versus non-volatile",
        "body": "Registers, cache and RAM normally lose working contents when power is removed. ROM, flash, SSD and HDD retain data. “Primary memory” and “secondary storage” describe role/access, not merely whether the device is electronic."
      },
      {
        "title": "Cache and RAM serve different roles",
        "body": "Cache is smaller and faster and reduces CPU waiting by holding frequently used data close to the processor. RAM is the larger working area for active programs and data."
      },
      {
        "title": "RAID trade-offs",
        "body": "RAID 0 stripes for performance/capacity but offers no redundancy. RAID 1 mirrors. RAID 5 uses distributed parity with at least three drives. RAID 6 uses dual parity. RAID protects availability, not against every data-loss cause."
      }
    ],
    "worked": {
      "problem": "Two drives in RAID 1, each 1 TB. Approximate usable capacity?",
      "steps": [
        "RAID 1 stores a mirrored copy on the second drive.",
        "Usable data capacity is roughly one drive’s capacity."
      ],
      "result": "About 1 TB usable, with redundancy."
    },
    "memory": [
      "Volatile working memory vs persistent storage.",
      "RAID 0 speed, RAID 1 mirror, RAID 5 parity."
    ],
    "ready": [
      "You can explain why cache is faster but smaller than RAM.",
      "You do not call RAID a backup."
    ]
  },
  "peripherals": {
    "intro": "Peripheral questions are classification questions. Ask what direction information flows relative to the computer and what primary job the device performs.",
    "concepts": [
      {
        "title": "Input and output",
        "body": "Input devices send data into the system: keyboard, mouse, scanner, microphone. Output devices present results: monitor, printer, speakers. Some devices such as touchscreens do both."
      },
      {
        "title": "Interfaces matter",
        "body": "USB, HDMI, DisplayPort, audio connectors and network interfaces connect devices for different data/power purposes. Do not confuse a connector standard with the peripheral itself."
      }
    ],
    "worked": {
      "problem": "Why is a touchscreen both input and output?",
      "steps": [
        "The display presents visual output.",
        "The touch sensor captures user coordinates/gestures as input."
      ],
      "result": "It performs both directions of interaction."
    },
    "memory": [
      "Ask: data enters, leaves, or both?",
      "Primary function beats appearance."
    ],
    "ready": [
      "You classify common devices quickly.",
      "You know the role of PSU, NIC, printer, scanner, display and storage peripherals."
    ]
  },
  "os": {
    "intro": "An Operating System manages resources and provides services to programs. Organise the topic into process management, memory management, file systems, devices, users/security and the user interface.",
    "concepts": [
      {
        "title": "Program, process and thread",
        "body": "A program is stored code. A process is a running instance with its own resources. A thread is an execution path within a process and may share memory with other threads in that process."
      },
      {
        "title": "Memory management",
        "body": "The OS allocates RAM, isolates processes and may use virtual memory to provide a larger logical address space backed partly by storage. Virtual memory is much slower than RAM when paging heavily occurs."
      },
      {
        "title": "Kernel and user space",
        "body": "The kernel controls privileged operations and hardware/resource management. User applications normally request services through system interfaces rather than directly controlling hardware."
      }
    ],
    "worked": {
      "problem": "An application file exists on disk but is not running. Is it a process?",
      "steps": [
        "Stored executable is a program.",
        "It becomes a process only when loaded/executed with runtime state."
      ],
      "result": "No; it is a program until execution begins."
    },
    "memory": [
      "Program stored; process running; thread executes.",
      "OS = resource manager."
    ],
    "ready": [
      "You distinguish process/thread/program.",
      "You can explain virtual memory conceptually."
    ]
  },
  "windows": {
    "intro": "Windows administration questions focus on selecting the correct tool for a symptom. Think “which subsystem am I checking?” rather than memorising random menu paths.",
    "concepts": [
      {
        "title": "Task Manager, Device Manager and Services",
        "body": "Task Manager shows running processes, performance and startup information. Device Manager focuses on hardware devices and drivers. Services manages background Windows services and their startup/state."
      },
      {
        "title": "Logs and maintenance",
        "body": "Event Viewer records system/application/security events useful for time-correlating failures. Disk, update and system integrity tools address different maintenance tasks; use the least invasive appropriate tool first."
      },
      {
        "title": "User/admin separation",
        "body": "Administrative privileges allow system-wide changes. Standard-user operation reduces accidental or malicious modification risk."
      }
    ],
    "worked": {
      "problem": "A network adapter shows an error after a driver update. Which tool is most directly relevant?",
      "steps": [
        "Problem points to hardware/driver.",
        "Device Manager exposes device state and driver controls."
      ],
      "result": "Device Manager."
    },
    "memory": [
      "Process/performance → Task Manager. Hardware/driver → Device Manager. Service state → Services.",
      "Logs explain history; tools act on subsystems."
    ],
    "ready": [
      "You choose the Windows tool by problem type.",
      "You avoid destructive fixes before diagnosis."
    ]
  },
  "dbms": {
    "intro": "DBMS questions combine data modelling, SQL and transaction behaviour. Learn each concept by the problem it solves: keys identify/link rows, normalization controls redundancy, SQL retrieves/changes data, and transactions protect correctness under failure/concurrency.",
    "concepts": [
      {
        "title": "Keys and relationships",
        "body": "A primary key uniquely identifies a row. A candidate key is any minimal attribute set that could uniquely identify it. A foreign key references a key in another table and enforces/represents relationships."
      },
      {
        "title": "Normalization and dependency",
        "body": "Normalization separates data to reduce update anomalies and unnecessary repetition. The important exam idea is not memorising forms alone but understanding why repeating/dependent data creates inconsistency risks."
      },
      {
        "title": "SQL filtering and grouping",
        "body": "WHERE filters rows before grouping; GROUP BY creates groups; HAVING filters groups. ORDER BY sorts the final result. This logical order resolves many SQL MCQs."
      },
      {
        "title": "Transactions and ACID",        "body": "Atomicity means all-or-nothing, Consistency preserves valid rules, Isolation controls interference among concurrent transactions, and Durability keeps committed data after failure."
      }
    ],
    "worked": {
      "problem": "You need departments whose average salary exceeds 50,000. WHERE or HAVING?",
      "steps": [
        "Average salary is an aggregate over each department group.",
        "Groups are created with GROUP BY department.",
        "A condition on an aggregate belongs in HAVING."
      ],
      "result": "Use HAVING AVG(salary) > 50000."
    },
    "memory": [
      "WHERE rows; HAVING groups.",
      "ACID = Atomicity, Consistency, Isolation, Durability."
    ],
    "ready": [
      "You distinguish primary and foreign keys.",
      "You can reason about simple SELECT/GROUP BY/HAVING questions without executing SQL."
    ]
  },
  "word": {
    "intro": "MS Word questions are easiest when features are grouped by task: editing, formatting, page layout, references, review and mail merge. Shortcuts are useful, but understanding what a feature does is more valuable than memorising obscure keys.",
    "concepts": [
      {
        "title": "Styles versus manual formatting",
        "body": "A style applies a consistent bundle of formatting and allows document-wide changes. Manual formatting changes individual text directly and becomes harder to maintain in long documents."
      },
      {
        "title": "Headers, footers and page layout",
        "body": "Headers/footers repeat information at page boundaries; margins define page content space; section breaks allow different layouts within one document."
      },
      {
        "title": "Mail Merge",
        "body": "Mail Merge combines one template with a data source to create personalised letters, labels or emails for many recipients."
      }
    ],
    "worked": {
      "problem": "You must send the same appointment letter to 500 people with different names/addresses.",
      "steps": [
        "Create one Word template.",
        "Connect a recipient data source.",
        "Insert merge fields such as Name and Address.",
        "Complete the merge."
      ],
      "result": "Use Mail Merge."
    },
    "memory": [
      "Styles = consistent formatting.",
      "Mail Merge = template + data source."
    ],
    "ready": [
      "You know the high-frequency Ctrl shortcuts.",
      "You can choose Word features by task."
    ]
  },
  "excel": {
    "intro": "Excel exam questions usually test references, formulas/functions and data tools. The fastest improvement comes from understanding how a formula changes when copied, rather than memorising isolated examples.",
    "concepts": [
      {
        "title": "Relative, absolute and mixed references",
        "body": "A1 changes row and column when copied. $A$1 locks both. A$1 locks the row only; $A1 locks the column only. The dollar sign locks the element immediately following it."
      },
      {
        "title": "Functions have different counting rules",
        "body": "COUNT counts numeric cells, COUNTA counts non-empty cells, SUM adds, AVERAGE calculates mean, IF returns values based on a condition. Learn the input type each function expects."
      },
      {
        "title": "Sort, filter and pivot concepts",
        "body": "Sort changes order; Filter temporarily displays matching records; PivotTables summarize/group large data without manually rewriting formulas for every category."
      }
    ],
    "worked": {
      "problem": "Formula =$A1*B$2 is copied one column right and one row down.",
      "steps": [
        "$A locks column A, but row 1 is relative → becomes row 2.",
        "B is relative → moves to C; $2 locks row 2."
      ],
      "result": "New formula: =$A2*C$2."
    },
    "memory": [
      "Dollar locks what follows.",
      "Sort reorders; filter selects visibility; pivot summarizes."
    ],
    "ready": [
      "You can mentally move mixed references.",
      "You know when to use SUM, COUNT, COUNTA, AVERAGE and IF."
    ]
  },
  "powerpoint": {
    "intro": "PowerPoint questions mostly distinguish slide-level, presentation-level and object-level features. Once scope is clear, many options eliminate themselves.",
    "concepts": [
      {
        "title": "Transition versus animation",
        "body": "A transition controls how one slide changes to the next. An animation controls how an object on a slide enters, moves, emphasizes or exits."
      },
      {
        "title": "Slide Master",
        "body": "Slide Master controls repeated theme/layout elements across many slides. Editing every slide individually is slower and inconsistent when a master-level change is appropriate."
      },
      {
        "title": "Presentation shortcuts",
        "body": "F5 typically starts the slideshow from the beginning; Shift+F5 starts from the current slide."
      }
    ],
    "worked": {
      "problem": "You want the company logo to appear consistently on every slide.",
      "steps": [
        "This is a repeated presentation-wide design element.",
        "Use Slide Master rather than pasting the logo manually on every slide."
      ],
      "result": "Slide Master."
    },
    "memory": [
      "Between slides = transition. On object = animation.",
      "Repeated layout = master."
    ],
    "ready": [
      "You classify a feature by scope.",
      "You know common slideshow-start shortcuts."
    ]
  },
  "access": {
    "intro": "MS Access is a small relational database environment. Remember its four core user-facing objects by purpose: tables store data, queries retrieve/transform, forms enter/display, and reports present/print.",
    "concepts": [
      {
        "title": "Tables and relationships",
        "body": "Tables contain records (rows) and fields (columns). Primary and foreign keys connect related data while reducing duplication."
      },
      {
        "title": "Queries are dynamic views",
        "body": "A query can filter, join, calculate or summarize data from tables. It normally does not need to duplicate the underlying records."
      },
      {
        "title": "Forms and reports",
        "body": "Forms provide convenient data entry and user interaction. Reports are designed for formatted output, grouping and printing."
      }
    ],
    "worked": {
      "problem": "You need a printable monthly sales summary by region without creating a new permanent data table.",
      "steps": [
        "Use a query to select/group the required data.",
        "Use a report to format it for presentation/printing."
      ],
      "result": "Query + Report."
    },
    "memory": [
      "Table stores; Query asks; Form enters; Report presents.",
      "Keys create relationships."
    ],
    "ready": [
      "You can choose the right Access object from a task description.",
      "You understand that queries can combine multiple tables."
    ]
  },
  "networking": {
    "intro": "Networking questions become manageable when each item is mapped to a layer and purpose: physical transmission, local-frame delivery, IP routing, transport, or application service.",
    "concepts": [
      {
        "title": "OSI/TCP-IP function mapping",
        "body": "Physical handles signals/media; Data Link handles frames and MAC-level local delivery; Network handles IP addressing/routing; Transport handles end-to-end TCP/UDP; upper/application layers provide services such as HTTP and DNS."
      },
      {
        "title": "Switch versus router",
        "body": "A switch mainly forwards frames within a LAN using MAC information. A router connects different IP networks and makes forwarding decisions using IP routes."
      },
      {
        "title": "DNS and DHCP",
        "body": "DNS translates names to addresses. DHCP automatically supplies network configuration such as IP address, mask, gateway and DNS server to clients."
      },
      {
        "title": "Common ports",
        "body": "High-frequency exam ports include HTTP 80, HTTPS 443, DNS 53 and SMTP 25. Learn them together with the protocol purpose."
      }
    ],
    "worked": {
      "problem": "A PC can reach 8.8.8.8 but cannot open websites by name. Which service is most suspect?",
      "steps": [
        "IP connectivity works because a numeric address is reachable.",
        "Name-to-address resolution is failing.",
        "That is DNS functionality."
      ],
      "result": "Check DNS."
    },
    "memory": [
      "MAC/switch = local LAN; IP/router = between networks.",
      "DNS names; DHCP configuration."
    ],
    "ready": [
      "You can place common devices/protocols by layer.",
      "You can diagnose a basic name-resolution vs connectivity symptom."
    ]
  },
  "security": {
    "intro": "Security questions are easiest when each control is tied to a security goal. Avoid treating “security” as one generic function: authentication, authorization, encryption, hashing, firewalls, antivirus and VPNs solve different problems.",
    "concepts": [
      {
        "title": "CIA triad",
        "body": "Confidentiality prevents unauthorized disclosure, Integrity protects against unauthorized alteration, and Availability keeps systems/data accessible when needed. Controls may support one or more goals."
      },
      {
        "title": "Authentication versus authorization",
        "body": "Authentication establishes identity: “Who are you?” Authorization decides permissions after identity is known: “What are you allowed to do?”"
      },
      {
        "title": "Encryption versus hashing",
        "body": "Encryption is reversible with the appropriate key and primarily protects confidentiality. Cryptographic hashing is designed as a one-way digest useful for integrity checks and password verification."
      },
      {
        "title": "Network and endpoint controls",
        "body": "A firewall filters traffic according to rules; antivirus/endpoint protection detects or blocks malicious software; a VPN creates a protected logical tunnel across another network."
      }
    ],
    "worked": {
      "problem": "A user successfully logs in but cannot open an admin page. Authentication or authorization issue?",
      "steps": [
        "Identity was accepted, so authentication succeeded.",
        "The problem is whether the user has permission for the resource."
      ],
      "result": "Authorization issue."
    },
    "memory": [
      "AuthN = identity; AuthZ = permission.",
      "Hash one-way; encryption reversible with key.",
      "Firewall traffic; antivirus malware; VPN tunnel."
    ],
    "ready": [
      "You can classify a security control by purpose.",
      "You reject absolute claims such as “one control protects against every threat”."
    ]
  }
};

const VERIFIED_PYQ_ARCHIVE = [
  {year:2023,paper:'P3',name:'SCT ASI (FPB) Technical Paper',date:'11 Mar 2023',status:'Official preliminary answer key verified',sourceQuality:'Official TSLPRB key',url:'https://tslprbpartone.s3.ap-south-1.amazonaws.com/Preliminary_Key_ASI_FPB.pdf',note:'The official preliminary key confirms a 200-question Technical Paper. Question wording is not reconstructed from an answer key; technical PYQs enter the trainer only when the actual question text is source-verifiable.'},
  {year:2023,paper:'P2',name:'Arithmetic & Test of Reasoning / Mental Ability',date:'08 Apr 2023',status:'Source-traceable Booklet-A transcript available',sourceQuality:'Published transcript + exam schedule',url:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper-with-key.html',note:'A limited set of questions is included below as faithful English paraphrases with original question numbers. They are labelled PYQ-derived, not verbatim official booklet text.'},
  {year:2018,paper:'P2',name:'Arithmetic & Test of Reasoning',date:'2018 recruitment cycle',status:'Preliminary answer key mirror located',sourceQuality:'Key mirror',url:'https://www.adda247.com/jobs/wp-content/uploads/sites/22/2025/04/28160521/Telangana-Police-SI-2018-Mains-Paper-1-Question-Paper_English.pdf',note:'Answer-key evidence alone is not enough to recreate question wording. No invented questions are tagged as 2018 PYQ.'}
];
const OFFICIAL_RULES = {
  p1:'English: 50 MCQs = 25 marks in 45 minutes, with 25% of the full mark deducted for a wrong/multiple-marked response; descriptive 75 marks in 2h15m.',
  p2:'Arithmetic & Reasoning: 200 objective questions, 100 marks, 3 hours. The 2026 notification section verified here does not state a negative-mark penalty for Paper II.',
  p3:'Technical: 200 objective questions, 200 marks, 3 hours. The 2026 notification section verified here does not state a negative-mark penalty for Paper III.',
  merit:'Paper I is qualifying. Final merit uses the aggregate of Paper II and Paper III.'
};
const TOPIC_NAME = Object.fromEntries(SYLLABUS.flatMap(p=>p.topics.map(t=>[t[0],t[1]])));
const TOPIC_PAPER = Object.fromEntries(SYLLABUS.flatMap(p=>p.topics.map(t=>[t[0],p.paper])));

function defaults(){return {attempted:0,correct:0,history:[],mistakes:{},bookmarks:{},topicTests:{},reviews:{},learned:{},lastSeen:null,streak:0};}
let state = loadState();
let currentSession = null;
let timerHandle = null;

function loadState(){try{return {...defaults(),...JSON.parse(localStorage.getItem(APP_KEY)||'{}')}}catch{return defaults()}}
function saveState(){localStorage.setItem(APP_KEY,JSON.stringify(state));}
function pct(a,b){return b?Math.round(a*100/b):0}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function fmt(n){return Number.isInteger(n)?String(n):String(Math.round(n*100)/100)}
function gcd(a,b){while(b)[a,b]=[b,a%b];return a}
function options(correct, vals){return shuffle([...new Set([correct,...vals])]).slice(0,4)}
function q(id,paper,topic,prompt,opts,answer,explanation,difficulty='M',source='MODEL',meta={}){return {id,paper,topic,prompt,options:opts,answer,explanation,difficulty,source,...meta}}
function makeNumericQ(id,paper,topic,prompt,correct,distractors,explanation,difficulty='M'){
  const c=fmt(correct), opts=options(c,distractors.map(fmt)); while(opts.length<4) opts.push(fmt(Number(correct)+opts.length+1));
  return q(id,paper,topic,prompt,opts,opts.indexOf(c),explanation,difficulty)
}

function generateArithmetic(){
  const qs=[];
  for(let i=1;i<=13;i++){
    let a=12+i*2,b=18+i*3,h=gcd(a,b); qs.push(makeNumericQ(`ns${i}`,'P2','num_system',`What is the HCF of ${a} and ${b}?`,h,[h+1,Math.max(1,h-1),h*2],`Using repeated division / prime factors, the highest common factor is ${h}.`));
    let P=1000+i*200,R=4+(i%6),T=1+(i%4),si=P*R*T/100; qs.push(makeNumericQ(`si${i}`,'P2','simple_interest',`Find the simple interest on ₹${P} at ${R}% per annum for ${T} year(s).`,si,[si+P/100,si-R*10,si+R*10],`SI = P × R × T / 100 = ${P} × ${R} × ${T} / 100 = ₹${fmt(si)}.`));
    P=1000+(i%5)*500;R=[5,10,20,25][i%4];T=2;let ci=P*((1+R/100)**T-1); qs.push(makeNumericQ(`ci${i}`,'P2','compound_interest',`Find compound interest on ₹${P} at ${R}% p.a. for 2 years, compounded annually.`,ci,[P*R*T/100,ci+R,Math.max(0,ci-R)],`Amount = P(1+r)^2. CI = Amount − Principal = ₹${fmt(ci)}.`));
    let x=2+(i%5),y=3+(i%4),mult=20+i*5,total=(x+y)*mult,share=x*mult; qs.push(makeNumericQ(`ra${i}`,'P2','ratio',`₹${total} is divided in the ratio ${x}:${y}. What is the first share?`,share,[y*mult,total/(x+y),share+mult],`Total parts = ${x+y}; one part = ${mult}; first share = ${x} × ${mult} = ₹${share}.`));
    let start=10+i,count=5,avg=start+2; qs.push(makeNumericQ(`av${i}`,'P2','average',`What is the average of ${start}, ${start+1}, ${start+2}, ${start+3}, ${start+4}?`,avg,[avg-1,avg+1,avg+2],`For five consecutive numbers, the middle number is the average: ${avg}.`));
    let perc=[10,12.5,20,25,30,40,50,60,75,80][(i-1)%10],base=800+i*40,ans=base*perc/100; qs.push(makeNumericQ(`pc${i}`,'P2','percentage',`What is ${perc}% of ${base}?`,ans,[ans+base/20,ans-base/20,base-ans],`${perc}% × ${base} = ${fmt(ans)}.`));
    let cp=500+i*50,pr=10+(i%5)*5,sp=cp*(1+pr/100); qs.push(makeNumericQ(`pl${i}`,'P2','profit_loss',`An article costs ₹${cp} and is sold at ${pr}% profit. Find the selling price.`,sp,[cp*(1-pr/100),cp+pr,sp+cp/10],`SP = CP × (100 + profit%)/100 = ₹${fmt(sp)}.`));
    let da=10+i,db=15+i; let comb=1/(1/da+1/db); qs.push(makeNumericQ(`tw${i}`,'P2','time_work',`A can finish a job in ${da} days and B in ${db} days. Working together, how many days will they take?`,comb,[Math.min(da,db),Math.max(da,db),comb+2],`Combined rate = 1/${da} + 1/${db}; time = 1 / combined rate = ${fmt(comb)} days.`,'H'));
    let r1=2+(i%4),r2=3+(i%5),w=(r1+r2)*300,s1=r1*300; qs.push(makeNumericQ(`ww${i}`,'P2','work_wages',`A and B earn ₹${w} for work done in the ratio ${r1}:${r2}. What is A's share?`,s1,[r2*300,w/2,s1+300],`Wages are divided in the work ratio. A gets ${r1}/${r1+r2} of ₹${w} = ₹${s1}.`));
    let speed=40+i*5,time=2+(i%4),dist=speed*time; qs.push(makeNumericQ(`td${i}`,'P2','time_distance',`A vehicle travels at ${speed} km/h for ${time} hours. What distance does it cover?`,dist,[speed+time,dist-speed,dist+time*10],`Distance = speed × time = ${speed} × ${time} = ${dist} km.`));
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];let startIdx=i%7,n=15+i,di=(startIdx+n)%7,correct=days[di];let opts=shuffle([correct,days[(di+1)%7],days[(di+2)%7],days[(di+6)%7]]);qs.push(q(`cc${i}`,'P2','clocks_calendars',`If today is ${days[startIdx]}, what day will it be after ${n} days?`,opts,opts.indexOf(correct),`${n} mod 7 = ${n%7}. Moving ${n%7} day(s) from ${days[startIdx]} gives ${correct}.`));
    let c1=10000+i*1000,c2=15000+i*500,m1=12,m2=6+(i%6),weight1=c1*m1,weight2=c2*m2,profit=6000,ps=profit*weight1/(weight1+weight2);qs.push(makeNumericQ(`pa${i}`,'P2','partnership',`A invests ₹${c1} for ${m1} months and B ₹${c2} for ${m2} months. From a ₹${profit} profit, what is A's share?`,ps,[profit-ps,profit/2,ps+500],`Profit ratio is capital × time: ${weight1}:${weight2}. A's share = ₹${fmt(ps)}.`,'H'));
    let l=10+i,wid=5+(i%5),area=l*wid;qs.push(makeNumericQ(`me${i}`,'P2','mensuration',`Find the area of a rectangle of length ${l} cm and breadth ${wid} cm.`,area,[2*(l+wid),area+l,area-wid],`Area of rectangle = length × breadth = ${l} × ${wid} = ${area} cm².`));
  }
  return qs;
}

function generateReasoning(){
  const qs=[];
  const analogies=[
    ['Bird : Fly :: Fish : ?','Swim',['Run','Climb','Crawl'],'A fish characteristically moves by swimming.'],
    ['Book : Read :: Song : ?','Listen',['Write','Draw','Build'],'A book is read; a song is listened to.'],
    ['Doctor : Hospital :: Teacher : ?','School',['Court','Bank','Farm'],'A teacher commonly works in a school.'],
    ['Puppy : Dog :: Kitten : ?','Cat',['Cow','Goat','Horse'],'A puppy is a young dog; a kitten is a young cat.'],
    ['Eye : See :: Ear : ?','Hear',['Touch','Taste','Smell'],'The ear is used for hearing.'],
    ['Clock : Time :: Thermometer : ?','Temperature',['Weight','Speed','Distance'],'A thermometer measures temperature.'],
    ['Pen : Write :: Knife : ?','Cut',['Paint','Read','Measure'],'A knife is primarily used to cut.'],
    ['Leaf : Tree :: Petal : ?','Flower',['Root','Seed','Fruit'],'A petal is a part of a flower.'],
  ];
  analogies.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`an${i}`,'P2','analogy',a[0],opts,opts.indexOf(a[1]),a[3]))});
  const diffs=[
    ['Which is the odd one out?','Triangle',['Square','Rectangle','Circle'],'Triangle, square and rectangle are polygons; circle has no straight sides.'],
    ['Which is the odd one out?','Carrot',['Apple','Mango','Banana'],'Carrot is primarily a root vegetable; the others are fruits.'],
    ['Which is the odd one out?','Copper',['Wood','Plastic','Rubber'],'Copper is a metal and a good electrical conductor.'],
    ['Which is the odd one out?','January',['Monday','Tuesday','Friday'],'January is a month; the others are weekdays.'],
    ['Which is the odd one out?','Kilogram',['Metre','Centimetre','Kilometre'],'Kilogram measures mass; the others measure length.'],
    ['Which is the odd one out?','Keyboard',['Monitor','Printer','Speaker'],'Keyboard is mainly an input device; the others are output devices.'],
  ];
  diffs.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`sd${i}`,'P2','similarity',a[0],opts,opts.indexOf(a[1]),a[3]))});
  for(let i=1;i<=12;i++){
    const first=2+i,step=2+(i%5); const series=[first,first+step,first+2*step,first+3*step]; const correct=first+4*step; qs.push(makeNumericQ(`ps${i}`,'P2','problem_solving',`Find the next number: ${series.join(', ')}, ?`,correct,[correct-step,correct+step,correct+2],`The series increases by ${step} each time.`));
  }
  const dirs=[['North','East','North-East'],['North','West','North-West'],['South','East','South-East'],['South','West','South-West']];
  dirs.forEach((d,i)=>{let opts=shuffle([d[2],'North','South-East','South-West']);qs.push(q(`so${i}`,'P2','spatial_orientation',`A person walks 5 m ${d[0]}, then 5 m ${d[1]}. In which direction is the person from the starting point?`,opts,opts.indexOf(d[2]),`The final displacement combines ${d[0]} and ${d[1]}, so the direction is ${d[2]}.`))});
  const vis=[
    ['A square is rotated by 90°. Which property remains unchanged?','Its side lengths',['Its top side label','Its screen position','Its orientation'],'Rotation preserves shape and side lengths.'],
    ['A cube has how many faces?','6',['4','8','12'],'A cube has 6 square faces.'],
    ['How many diagonals does a rectangle have?','2',['1','3','4'],'A rectangle has two diagonals connecting opposite vertices.'],
    ['Which 2D shape can form the circular bases of a cylinder?','Circle',['Triangle','Pentagon','Rectangle'],'A cylinder has two circular bases.']
  ];
  vis.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`sv${i}`,'P2','spatial_visual',a[0],opts,opts.indexOf(a[1]),a[3]))});
  const analysisQs=[
    ['All routers are network devices. Some network devices are wireless. Which conclusion is definitely true?','All routers are network devices',['All routers are wireless','No routers are wireless','All wireless devices are routers'],'Only the first statement is guaranteed by the premise.'],
    ['If a process fails only when condition X is present, and it did not fail, what can you conclude with certainty?','No definite conclusion about X',['X was absent','X was present','The process was never run'],'“Fails only when X is present” does not mean it must fail whenever X is present.'],
    ['A report shows 80 correct answers out of 100. What is the accuracy?','80%',['20%','0.8%','180%'],'Accuracy = correct / total × 100 = 80%.']
  ];
  analysisQs.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`al${i}`,'P2','analysis',a[0],opts,opts.indexOf(a[1]),a[3]))});
  const judgmentQs=[
    ['You discover two answer keys conflict. What is the best exam-prep action?','Verify against the official notification / authoritative source',['Memorize both','Pick the longer explanation','Ignore the topic'],'Conflicting keys should be resolved using the most authoritative source available.'],
    ['During a timed mock you are stuck on one question. Best action?','Mark it and return later',['Spend unlimited time','Quit the mock','Change every previous answer'],'Time management protects total score and lets you return with remaining time.']
  ];
  judgmentQs.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`ju${i}`,'P2','judgment',a[0],opts,opts.indexOf(a[1]),a[3]))});
  const decisionQs=[
    ['You score 95% in one topic once but 55% one week later. What should the study system do?','Schedule retention review',['Mark permanently mastered','Delete the topic','Only study new topics'],'Mastery should include delayed retention, not only immediate performance.'],
    ['A mock has 20 minutes left and 30 unanswered questions. What is the sensible next step?','Prioritize quick, high-confidence questions',['Re-read the whole paper','Stop answering','Spend 20 minutes on one hard question'],'With limited time, maximize expected marks by taking quick high-confidence opportunities first.']
  ];
  decisionQs.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`de${i}`,'P2','decision',a[0],opts,opts.indexOf(a[1]),a[3]))});
  const memoryQs=[
    ['Memorize: 7-2-9-4. Which option matches exactly?','7-2-9-4',['7-9-2-4','7-2-4-9','2-7-9-4'],'The exact sequence is 7-2-9-4.'],
    ['Memorize: Blue, Circle, 8, East. Which was third?','8',['Blue','Circle','East'],'The third item in the sequence is 8.'],
    ['Memorize: K-R-M-P. Which letter came immediately after R?','M',['K','P','R'],'The sequence is K, R, M, P; M follows R.']
  ];
  memoryQs.forEach((a,i)=>{let opts=shuffle([a[1],...a[2]]);qs.push(q(`vm${i}`,'P2','visual_memory',a[0],opts,opts.indexOf(a[1]),a[3]))});
  return qs;
}

const TECH_FACTS = [
 ['architecture','What does CPU stand for?','Central Processing Unit',['Computer Processing Utility','Central Program Unit','Core Processing User'],'CPU means Central Processing Unit.'],
 ['architecture','Which CPU component performs arithmetic and logical operations?','ALU',['Control Unit','RAM','NIC'],'The Arithmetic Logic Unit performs arithmetic and Boolean logic operations.'],
 ['architecture','Which firmware interface commonly replaces legacy BIOS on modern PCs?','UEFI',['ASCII','DHCP','RAID'],'UEFI is the modern firmware interface used for system startup and hardware initialization.'],
 ['assembly','What is POST mainly used for during startup?','Checking basic hardware before boot',['Encrypting files','Formatting disks','Updating applications'],'POST performs initial hardware checks during system startup.'],
 ['assembly','An antistatic wrist strap helps prevent damage from what?','Electrostatic discharge',['Magnetic fields','Overclocking','Packet loss'],'ESD can damage sensitive electronic components.'],
 ['assembly','Which malware normally attaches itself to files and can replicate when the infected file runs?','Computer virus',['Firewall','Backup','Driver'],'A virus typically infects files or programs and replicates when they execute.'],
 ['memory','Which memory is normally volatile?','RAM',['ROM','SSD','Blu-ray disc'],'RAM loses its contents when power is removed.'],
 ['memory','Which memory is usually closest to the CPU for very fast access?','Cache',['Hard disk','Optical disc','Tape'],'CPU cache is high-speed memory used to reduce average memory access time.'],
 ['memory','DRAM typically needs what operation to retain data while powered?','Periodic refresh',['Defragmentation','Encryption','Formatting'],'DRAM cells must be refreshed periodically.'],
 ['memory','RAID 0 primarily provides what?','Striping without redundancy',['Mirroring','Distributed parity','Triple replication'],'RAID 0 stripes data for performance/capacity but has no fault tolerance.'],
 ['memory','RAID 1 is based on what principle?','Mirroring',['Striping only','Parity only','Compression'],'RAID 1 stores mirrored copies of data.'],
 ['memory','RAID 5 commonly combines striping with what?','Distributed parity',['No redundancy','Only mirroring','Tape backup'],'RAID 5 uses block-level striping with distributed parity.'],
 ['memory','Which storage device has no mechanical moving parts?','SSD',['HDD','Floppy disk','Magnetic tape'],'SSDs store data electronically without spinning platters.'],
 ['memory','What does NIC stand for?','Network Interface Card',['Network Internet Core','Node Interface Cache','Numeric Input Controller'],'A NIC connects a computer to a network.'],
 ['peripherals','Which device is primarily used to convert paper documents into digital images?','Scanner',['Printer','Speaker','Projector'],'A scanner captures physical documents/images into digital form.'],
 ['peripherals','Which component converts AC mains power into regulated DC voltages used by a PC?','Power Supply Unit',['NIC','GPU','Keyboard'],'The PSU provides DC power to internal computer components.'],
 ['peripherals','Which component is specialized for rendering graphics?','GPU / video card',['Modem','Scanner','Sound card'],'A graphics processing unit accelerates graphics rendering.'],
 ['peripherals','A modem is traditionally used to do what?','Modulate and demodulate communication signals',['Store files','Print pages','Cool the CPU'],'The name modem comes from modulator-demodulator.'],
 ['os','Which DOS command lists files and folders in the current directory?','DIR',['CD','DEL','CLS'],'DIR displays directory contents.'],
 ['os','Which DOS command changes the current directory?','CD',['DIR','COPY','TYPE'],'CD means change directory.'],
 ['os','Which DOS command deletes a file?','DEL',['MD','REN','TREE'],'DEL removes files.'],
 ['os','An operating system primarily manages what?','Hardware resources and application execution',['Only documents','Only internet traffic','Only printer ink'],'The OS manages system resources and provides services for applications.'],
 ['windows','Which Windows tool shows running processes and performance information?','Task Manager',['Paint','Notepad','Character Map'],'Task Manager displays processes, resource usage and related system information.'],
 ['windows','Which Windows file system supports permissions and journaling and is widely used on system drives?','NTFS',['FAT12','ISO 9660','ext2'],'NTFS supports ACL permissions, journaling and other Windows features.'],
 ['windows','Windows Services are commonly used for what?','Background system and application processes',['Only image editing','Only web browsing','Only BIOS setup'],'Services run background tasks, often without an interactive user interface.'],
 ['windows','A standard user account should generally be preferred over an administrator account for daily work because it does what?','Limits unnecessary privileged actions',['Makes the CPU faster','Disables passwords','Removes all malware'],'Least privilege reduces the impact of accidental or malicious changes.'],
 ['dbms','What does RDBMS stand for?','Relational Database Management System',['Remote Data Backup Management Service','Rapid Database Memory System','Relational Data Binary Machine'],'RDBMS means Relational Database Management System.'],
 ['dbms','Which key uniquely identifies a row in a relational table?','Primary key',['Foreign key','Sort key','View key'],'A primary key uniquely identifies each row.'],
 ['dbms','A foreign key is mainly used to do what?','Reference a key in another or related table',['Encrypt a table','Sort every row','Delete duplicates automatically'],'Foreign keys represent relationships and can enforce referential integrity.'],
 ['dbms','What is a database view?','A virtual table based on a query',['A physical disk partition','A backup cable','A printer setting'],'A view presents query results like a table without necessarily storing the data separately.'],
 ['dbms','Which ACID property means a transaction is all-or-nothing?','Atomicity',['Consistency','Isolation','Durability'],'Atomicity ensures the whole transaction succeeds or none of it takes effect.'],
 ['dbms','Which ACID property helps concurrent transactions avoid interfering with one another?','Isolation',['Atomicity','Durability','Compression'],'Isolation controls the visibility/effects of concurrent transactions.'],
 ['word','Which MS Word feature creates many personalized documents from one template and a data source?','Mail Merge',['Track Changes','WordArt','Find'],'Mail Merge combines a main document with recipient/data records.'],
 ['word','A macro in Word is mainly used to do what?','Automate repeated actions',['Increase monitor resolution','Repair RAM','Create a VPN'],'Macros automate sequences of commands or actions.'],
 ['word','Which feature is used to control page margins and orientation?','Page Layout / Layout settings',['Spell Check','Clipboard only','Task Manager'],'Page layout settings control margins, orientation and related page formatting.'],
 ['excel','Which Excel function adds numbers?','SUM',['COUNT','LEFT','IFERROR'],'SUM adds numbers or ranges.'],
 ['excel','Which Excel feature summarizes and groups large datasets interactively?','PivotTable',['WordArt','Slide Master','Mail Merge'],'PivotTables aggregate and summarize data by selected fields.'],
 ['excel','What does data validation in Excel help control?','Allowed values entered into cells',['CPU clock speed','Windows login rights','Printer toner'],'Data validation can restrict input to rules such as lists, ranges or data types.'],
 ['excel','In Excel, which reference normally stays fixed when a formula is copied?','$A$1',['A1','A$','1A'],'Dollar signs make the row and column absolute.'],
 ['excel','Which Excel function returns the arithmetic mean?','AVERAGE',['SUM','MAX','COUNTIF'],'AVERAGE returns the arithmetic mean of numeric values.'],
 ['powerpoint','Which PowerPoint feature controls consistent placeholders, fonts and layouts across slides?','Slide Master',['Mail Merge','PivotTable','Query Design'],'Slide Master defines shared presentation formatting and layouts.'],
 ['powerpoint','What is a slide transition?','An effect used when moving from one slide to another',['A database relation','A spreadsheet formula','A firewall rule'],'Transitions control how one slide changes to the next during a slideshow.'],
 ['powerpoint','An animation in PowerPoint is primarily applied to what?','Objects on a slide',['Hard disk sectors','Database transactions','Windows services'],'Animations affect slide objects such as text and shapes.'],
 ['access','In MS Access, where are records primarily stored?','Tables',['Forms','Reports','Macros only'],'Tables store records and fields.'],
 ['access','Which Access object is commonly used to retrieve/filter data?','Query',['Slide','Workbook','Printer'],'Queries select, join, filter and calculate data.'],
 ['access','Which Access object is designed mainly for user-friendly data entry?','Form',['Report','Relationship line','Module only'],'Forms provide an interface for viewing and entering records.'],
 ['access','Which Access object is intended for formatted presentation/printing of data?','Report',['Table','Index','Field'],'Reports format data for viewing and printing.'],
 ['networking','Which network type generally covers a small area such as an office or building?','LAN',['WAN','MAN','VPN only'],'A Local Area Network covers a limited local area.'],
 ['networking','Which network type usually spans a city or metropolitan region?','MAN',['LAN','PAN only','ROM'],'A Metropolitan Area Network spans a metropolitan area.'],
 ['networking','Which network type can span countries or continents?','WAN',['LAN','MAN only','RAM'],'A Wide Area Network covers large geographic areas.'],
 ['networking','In a star topology, devices typically connect to what central point?','Switch or hub',['One continuous backbone cable only','No central device','A printer cartridge'],'Star topology uses a central networking device.'],
 ['security','What is the main purpose of a firewall?','Control network traffic according to security rules',['Defragment RAM','Create spreadsheets','Cool the CPU'],'A firewall permits or blocks traffic according to configured rules.'],
 ['security','A packet-filtering firewall commonly examines which information?','Packet headers such as addresses, ports and protocol',['Only document fonts','Only disk temperature','Only keyboard layout'],'Packet filters make decisions using header fields and rules.'],
 ['security','An application gateway firewall is also commonly called what?','Proxy firewall',['RAID controller','Print server only','Cache memory'],'An application gateway/proxy mediates traffic at the application layer.'],
 ['security','Using a password plus an OTP is an example of what?','Multi-factor authentication',['Single-factor authentication','Data compression','RAID striping'],'It combines different authentication factors.'],
 ['security','Symmetric encryption generally uses what?','The same secret key for encryption and decryption',['No key','A public key only for both operations','A printer PIN'],'Symmetric systems use a shared secret key.'],
 ['security','Asymmetric encryption normally uses what pair?','Public and private keys',['Two identical public keys','No keys','Two passwords only'],'Public-key cryptography uses mathematically related public/private keys.'],
 ['security','What does VPN stand for?','Virtual Private Network',['Verified Public Node','Variable Packet Number','Virtual Processing Network'],'A VPN creates a protected logical connection across another network.'],
 ['security','An intranet is best described as what?','A private network using internet technologies for an organization',['The entire public internet','A type of printer','A CPU bus'],'An intranet is restricted to an organization or authorized users.'],
 ['security','Antivirus software mainly aims to do what?','Detect, block and remove malicious software',['Increase screen brightness','Create database keys','Replace a firewall in every case'],'Antivirus tools scan for and respond to malware; they are one layer of security.']
];

function generateTech(){
  const qs=[]; let idx=0;
  TECH_FACTS.forEach(f=>{
    const [topic,prompt,correct,distractors,exp]=f; let opts=shuffle([correct,...distractors]);
    qs.push(q(`t${idx++}`,'P3',topic,prompt,opts,opts.indexOf(correct),exp));
    if(correct.length<45){
      const reversePrompt=`Which description best matches “${correct}”?`;
      let distractDesc=shuffle(TECH_FACTS.filter(x=>x[0]===topic && x[2]!==correct).map(x=>x[4]).slice(0,3));
      if(distractDesc.length<3) distractDesc=[...distractDesc,'A different concept not described here','A feature unrelated to this term','None of the listed functions'];
      const revOpts=shuffle([exp,...distractDesc.slice(0,3)]); qs.push(q(`tr${idx++}`,'P3',topic,reversePrompt,revOpts,revOpts.indexOf(exp),exp,'H'));
    }
  });
  return qs;
}

const ENGLISH_QS = [
 ['eng_grammar','Choose the grammatically correct sentence.','She has completed the work.',['She have completed the work.','She has complete the work.','She having completed the work.'],'“She” takes “has”, followed by the past participle “completed”.'],
 ['eng_grammar','Choose the correct form: Neither of the answers ___ correct.','is',['are','were','have'],'“Neither” is treated as singular here: “is correct.”'],
 ['eng_grammar','Choose the correct article: He is ___ honest officer.','an',['a','the','no article'],'“Honest” begins with a vowel sound, so “an” is used.'],
 ['eng_grammar','Choose the correct preposition: She is interested ___ computers.','in',['on','at','for'],'The standard collocation is “interested in”.'],
 ['eng_usage','Choose the correct usage: The officer ___ the report yesterday.','submitted',['submits','has submit','submitting'],'The simple past “submitted” matches “yesterday”.'],
 ['eng_usage','Choose the correct word: Please ___ the form carefully.','fill in',['fill on','fill at','filled by'],'“Fill in the form” is standard usage.'],
 ['eng_usage','Choose the correct sentence.','The information is useful.',['The informations are useful.','The information are useful.','An information is useful.'],'“Information” is an uncountable noun and takes singular agreement.'],
 ['eng_vocab','Choose the synonym of “concise”.','brief',['confusing','lengthy','careless'],'“Concise” means brief and to the point.'],
 ['eng_vocab','Choose the antonym of “expand”.','contract',['increase','extend','enlarge'],'“Contract” can mean become smaller, opposite to expand.'],
 ['eng_vocab','Choose the word closest in meaning to “verify”.','confirm',['ignore','damage','delay'],'To verify is to check or confirm accuracy/truth.'],
 ['eng_vocab','Choose the word closest in meaning to “mandatory”.','compulsory',['optional','temporary','unclear'],'Mandatory means required or compulsory.'],
 ['eng_comp','Passage: “Regular revision strengthens recall because information is retrieved repeatedly over time.” What strengthens recall according to the passage?','Regular revision',['Avoiding tests','Studying once','Skipping retrieval'],'The passage directly states that regular revision strengthens recall.'],
 ['eng_comp','Passage: “The network failed because the central switch lost power.” What was the direct cause of failure?','The central switch lost power',['A printer jammed','A user logged out','The monitor turned off'],'The passage names loss of power to the central switch as the cause.'],
 ['eng_comp','Passage: “A firewall can reduce unwanted traffic, but it does not replace secure passwords.” Which statement follows?','A firewall and secure passwords serve different security roles',['A firewall makes passwords unnecessary','Passwords replace all network controls','Firewalls only protect printers'],'The passage says a firewall does not replace secure passwords.'],
 ['eng_grammar','Choose the correct passive form of “The team completed the task.”','The task was completed by the team.',['The task is completed by the team yesterday.','The team was completed by the task.','The task completed the team.'],'Simple past active becomes “was/were + past participle” in passive voice.'],
 ['eng_usage','Choose the correct word: The results were ___ than expected.','better',['best','gooder','more good'],'“Better” is the comparative form of “good”.'],
 ['eng_vocab','Choose the antonym of “scarce”.','abundant',['rare','limited','insufficient'],'“Abundant” means plentiful, opposite to scarce.'],
 ['eng_grammar','Choose the correct sentence.','Each candidate has a hall ticket.',['Each candidate have a hall ticket.','Each candidates has a hall ticket.','Each candidate having a hall ticket.'],'“Each candidate” is singular and takes “has”.'],
 ['eng_usage','Choose the correct spelling.','maintenance',['maintainance','maintenence','maintainence'],'The correct spelling is “maintenance”.'],
 ['eng_vocab','Choose the synonym of “accurate”.','precise',['vague','random','false'],'“Precise” is a close synonym of accurate.']
].map((a,i)=>{let opts=shuffle([a[2],...a[3]]);return q(`e${i}`,'P1',a[0],a[1],opts,opts.indexOf(a[2]),a[4])});

const PYQ_2023_P2 = [
  q('pyq23p2q001','P2','average','In the 2023 Booklet-A problem, one set contains 10 consecutive odd numbers with average 64 and another contains 5 consecutive even numbers with average 49. What is the average of the smallest and largest numbers of both sets?',['56.5','57.5','58.5','55.5'],0,'For any consecutive arithmetic sequence, the average of its two extremes equals the sequence average. So the four extremes total 2×64 + 2×49 = 226; 226/4 = 56.5.','M','PYQ',{year:2023,booklet:'A',questionNo:1,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q1–50',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper-with-key.html'}),
  q('pyq23p2q002','P2','simple_interest','A 2023 question gives an article costing ₹1,200, sold on credit at 10% profit. If simple interest at 10% per year is charged for 4 years on the sale amount, what is finally due?',['₹1,848','₹1,800','₹1,728','₹1,920'],0,'Credit sale price = 1200×1.10 = ₹1,320. Four-year SI = 1320×10×4/100 = ₹528. Amount due = ₹1,848.','M','PYQ',{year:2023,booklet:'A',questionNo:2,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q1–50',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper-with-key.html'}),
  q('pyq23p2q009','P2','num_system','Find the least prime number that leaves remainder 2 when divided by 7 and remainder 5 when divided by 9.',['23','37','47','59'],0,'23 satisfies both conditions: 23 mod 7 = 2 and 23 mod 9 = 5, and 23 is prime.','M','PYQ',{year:2023,booklet:'A',questionNo:9,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q1–50',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper-with-key.html'}),
  q('pyq23p2q017','P2','profit_loss','An item costs ₹3,000. Its marked price is 25% above cost and a 10% discount is then given. What is the selling price?',['₹3,375','₹3,350','₹3,250','₹3,450'],0,'Marked price = 3000×1.25 = ₹3,750; after 10% discount, SP = 3750×0.90 = ₹3,375.','E','PYQ',{year:2023,booklet:'A',questionNo:17,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q1–50',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper-with-key.html'}),

  q('pyq23p2q052','P2','clocks_calendars','Which day of the week was 12 January 1863?',['Monday','Tuesday','Wednesday','Sunday'],0,'Applying standard odd-day/calendar arithmetic to 12 January 1863 gives Monday.','M','PYQ',{year:2023,booklet:'A',questionNo:52,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q51–100',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TSLPRB-si-FWE-2023-question-paper-with-answer-key.html'}),
  q('pyq23p2q055','P2','percentage','A buyer purchases 70% of some books for cash at a 20% discount and the remaining 30% on credit at a 10% discount. What is the effective overall discount?',['17%','15%','16%','18%'],0,'Use a weighted average because both percentages refer to the same list-price base: 0.70×20 + 0.30×10 = 17%.','M','PYQ',{year:2023,booklet:'A',questionNo:55,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q51–100',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TSLPRB-si-FWE-2023-question-paper-with-answer-key.html'}),
  q('pyq23p2q061','P2','time_work','A tank doubles its filled volume every 3 minutes and becomes completely full at 27 minutes. At what time was it one-eighth full?',['18 min','21 min','24 min','15 min'],0,'One-eighth → one-quarter → one-half → full is three doublings. Three intervals × 3 minutes = 9 minutes, so 27−9 = 18 minutes.','M','PYQ',{year:2023,booklet:'A',questionNo:61,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q51–100',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TSLPRB-si-FWE-2023-question-paper-with-answer-key.html'}),
  q('pyq23p2q062','P2','time_distance','In a 4 km race, A beats B by 400 m, which corresponds to a 2-minute difference. How long does A take to finish 4 km?',['18 min','20 min','16 min','22 min'],0,'When A covers 4,000 m, B covers 3,600 m, so their speed ratio is 10:9. If A takes t minutes, B takes 10t/9; the gap t/9 = 2, hence t = 18.','H','PYQ',{year:2023,booklet:'A',questionNo:62,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q51–100',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TSLPRB-si-FWE-2023-question-paper-with-answer-key.html'}),

  q('pyq23p2q120','P2','spatial_orientation','From B, move 2 km west to C, then 3 km north to D, then 6 km east to E. Where is E relative to B?',['5 km north-east','5 km south-east','4 km east','3 km north'],0,'Relative to B, the net movement is 4 km east and 3 km north, forming a 3-4-5 triangle. E is 5 km north-east.','M','PYQ',{year:2023,booklet:'A',questionNo:120,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q101–150',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TS-SI-final-exam-2023-question-paper-with-answers.html'}),
  q('pyq23p2q122','P2','spatial_visual','A cube of side 24 units is painted on all faces and cut into small cubes of side 3. What is the difference between the number of cubes with no painted face and the number with exactly one painted face?',['0','36','72','216'],0,'There are 8 small cubes per edge. Unpainted = (8−2)^3 = 216. Exactly one face painted = 6(8−2)^2 = 216. Difference = 0.','H','PYQ',{year:2023,booklet:'A',questionNo:122,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q101–150',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TS-SI-final-exam-2023-question-paper-with-answers.html'}),
  q('pyq23p2q135','P2','analogy','If SUM is represented by 53 using the sum of alphabet positions, what is TEN represented by?',['39','36','41','35'],0,'S+U+M = 19+21+13 = 53. Therefore T+E+N = 20+5+14 = 39.','E','PYQ',{year:2023,booklet:'A',questionNo:135,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q101–150',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TS-SI-final-exam-2023-question-paper-with-answers.html'}),
  q('pyq23p2q147','P2','analogy','Anthropology is to humans as ornithology is to _____.',['birds','plants','insects','fish'],0,'Ornithology is the scientific study of birds, just as anthropology studies humans/human societies.','E','PYQ',{year:2023,booklet:'A',questionNo:147,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q101–150',sourceUrl:'https://tsstudies.blogspot.com/2023/04/TS-SI-final-exam-2023-question-paper-with-answers.html'}),

  q('pyq23p2q151','P2','analysis_judgment','Statement: economic progress can be achieved if people work hard. Conclusion I: economic progress causes people to work hard. Conclusion II: it is impossible to make everyone work hard. Which conclusion follows?',['Neither I nor II','Only I','Only II','Both I and II'],0,'The statement gives one direction: hard work can lead to progress. It does not justify the converse, and it says nothing about impossibility of making everyone work hard.','M','PYQ',{year:2023,booklet:'A',questionNo:151,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q151–200',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper.html'}),
  q('pyq23p2q153','P2','analysis_judgment','P advises Q: “If you want to buy a refrigerator, choose brand X.” Assumption I: Q definitely wants to buy a refrigerator. Assumption II: P considers brand X a good choice. Which assumption is implicit?',['Only II','Only I','Both I and II','Neither I nor II'],0,'The advice is conditional, so Q’s definite intention is not required. Recommending X does rely on the assumption that X is a suitable/good choice.','M','PYQ',{year:2023,booklet:'A',questionNo:153,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q151–200',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper.html'}),
  q('pyq23p2q156','P2','analysis_judgment','What is A’s age? I: A is twice B’s age and C is four times B’s age. II: D is 60 years old and D is 3/2 of C’s age. Which data is sufficient?',['I and II together','I alone','II alone','Even together insufficient'],0,'II gives C = 40. Combining I gives B = 10 and A = 20. Neither statement alone determines A, but together they do.','H','PYQ',{year:2023,booklet:'A',questionNo:156,wording:'PARAPHRASED',sourceTitle:'TG STUDIES – 2023 Paper II transcript Q151–200',sourceUrl:'https://tsstudies.blogspot.com/2023/04/ts-si-final-exam-2023-question-paper.html'})
];

let QUESTION_BANK = [...PYQ_2023_P2,...ENGLISH_QS,...generateArithmetic(),...generateReasoning(),...generateTech()];

function topicQuestions(topic){return QUESTION_BANK.filter(x=>x.topic===topic)}
function paperQuestions(paper){return QUESTION_BANK.filter(x=>x.paper===paper)}
function topicStats(topic){
  const h=state.history.filter(x=>x.topic===topic); return {attempts:h.length, correct:h.filter(x=>x.correct).length, accuracy:pct(h.filter(x=>x.correct).length,h.length)};
}
function topicTestBest(topic){return state.topicTests[topic]?.best||0}
function isLearned(topic){return !!state.learned?.[topic]}
function markLearned(topic){state.learned=state.learned||{};state.learned[topic]=true;saveState();renderLearn();renderSyllabus();toast('Learning module marked complete.');}
function isMastered(topic){const s=topicStats(topic), t=topicTestBest(topic); return s.attempts>=10 && s.accuracy>=75 && t>=80;}
function dueReviews(){const now=Date.now();return Object.entries(state.reviews).filter(([_,v])=>v.due<=now).map(([id])=>QUESTION_BANK.find(q=>q.id===id)).filter(Boolean)}
function overallMastery(){const objective=SYLLABUS.flatMap(p=>p.topics).filter(t=>!t[2]).map(t=>t[0]); return pct(objective.filter(isMastered).length,objective.length)}
function updateStreak(){const d=new Date().toISOString().slice(0,10); if(state.lastSeen===d)return; const y=new Date(Date.now()-86400000).toISOString().slice(0,10); state.streak=state.lastSeen===y?(state.streak||0)+1:1;state.lastSeen=d;saveState()}
updateStreak();

function renderDashboard(){
  const acc=pct(state.correct,state.attempted), due=dueReviews().length, mastery=overallMastery();
  const paperCard=SYLLABUS.map(p=>{const obj=p.topics.filter(t=>!t[2]);const m=pct(obj.filter(t=>isMastered(t[0])).length,obj.length);return `<div class="card paper-card"><div class="row spread"><h3>${p.name}</h3><span class="badge ${p.qualifying?'warn':'good'}">${p.qualifying?'Qualifying':'Merit'}</span></div><p>${p.paper==='P1'?'English objective + descriptive practice':p.paper==='P2'?'200 objective questions · 100 marks · 3 hours':'200 objective questions · 200 marks · 3 hours'}</p><div class="progress"><span style="width:${m}%"></span></div><div class="row spread"><span class="muted">Mastery</span><strong>${m}%</strong></div></div>`}).join('');
  document.querySelector('#view-dashboard').innerHTML=`
    <div class="grid stats">
      <div class="card"><div class="stat-label">Questions attempted</div><div class="stat-value">${state.attempted}</div><div class="stat-foot">Across practice and tests</div></div>
      <div class="card"><div class="stat-label">Accuracy</div><div class="stat-value">${acc}%</div><div class="stat-foot">Live corrected answers</div></div>
      <div class="card"><div class="stat-label">Overall mastery</div><div class="stat-value">${mastery}%</div><div class="stat-foot">Requires practice + topic test</div></div>
      <div class="card"><div class="stat-label">Review due</div><div class="stat-value">${due}</div><div class="stat-foot">Spaced repetition queue · streak ${state.streak} day(s)</div></div>
    </div>
    <div class="section-title"><h2>Exam papers</h2><span>Weighted toward the papers that decide merit</span></div>
    <div class="grid paper-grid">${paperCard}</div>
    <div class="section-title"><h2>Recommended learning loop</h2><span>Do not unlock “mastered” by reading alone</span></div>
    <div class="card grid path">
      ${[['1','Learn','Official syllabus + shortcuts'],['2','PYQ','Source-traceable previous questions'],['3','Model drill','10–25 questions'],['4','Topic test','Timed + retention'],['5','Mock','Cumulative → full exam']].map(x=>`<div class="path-step"><div class="num">${x[0]}</div><strong>${x[1]}</strong><span>${x[2]}</span></div>`).join('')}
    </div>
    <div class="section-title"><h2>Recruitment alerts</h2><span>Official TGPRB monitoring</span></div>
    <div class="card"><div class="row spread"><div><strong>🔔 Press-note email alerts are enabled</strong><p class="muted">New material TGPRB press notes are checked separately and summarized by email. Open the Press Notes tab for details.</p></div><button class="secondary" onclick="navigate('alerts')">View alert setup</button></div></div>
    <div class="section-title"><h2>Today</h2><span>Best next action from your current data</span></div>
    <div class="card">${due?`<strong>${due} review question(s) are due.</strong><p class="muted">Clear these before starting a new topic; delayed recall is where weak memory shows up.</p><button class="primary" onclick="startReview()">Start due review</button>`:`<strong>No spaced reviews are due yet.</strong><p class="muted">Start a topic drill. Wrong answers will automatically enter the review queue.</p><button class="primary" onclick="navigate('practice')">Start practice</button>`}</div>`;
}



const ADVANCED_TIPS = {
  eng_usage:{tricks:['Check the true subject before the verb; ignore distracting phrases between them.','Use time markers (yesterday, since, by the time, already) to narrow tense quickly.','When two options are grammatical, read the whole sentence for standard usage/collocation.'],master:'Build a personal error list by rule: articles, prepositions, tense, agreement, modifiers. Repeated error types matter more than individual questions.',pro:'Do a first pass for obvious usage items. If two options still look equally plausible after a second read, mark it and return instead of burning time.'},
  eng_vocab:{tricks:['Use roots/prefixes/suffixes when the word is unfamiliar.','For synonym/antonym questions, determine tone first: positive, negative or neutral.','Substitute the option back into the sentence for context-based vocabulary.'],master:'Learn words in families and context, not isolated word-meaning pairs. That protects you against close distractors.',pro:'If you truly do not know a word, eliminate by tone/part-of-speech and move on. Do not manufacture a meaning from spelling resemblance.'},
  eng_grammar:{tricks:['Find subject → verb → tense marker before reading all options.','For error spotting, split the sentence into logical chunks.','For voice/narration changes, preserve tense and meaning first.'],master:'Master the high-yield rules: subject–verb agreement, tense consistency, articles, prepositions, pronouns and modifiers before rare exceptions.',pro:'Grammar questions should usually be quick marks. If a sentence needs repeated rereading, park it for pass 2.'},
  eng_comp:{tricks:['Read the question stem before scanning for a factual answer.','For inference, choose what the passage supports—not what is generally true.','For tone, identify the author’s attitude from repeated wording.'],master:'Separate explicit fact, inference, tone and vocabulary-in-context; each needs a different reading method.',pro:'Answer direct retrieval questions first, then inference/tone. This protects time and builds confidence.'},
  eng_precis:{tricks:['Underline thesis + major supports; remove examples, repetition and decoration.','Aim for roughly one-third length unless instructions specify otherwise.','Write in your own words while preserving sequence and meaning.'],master:'A strong précis preserves the author’s logic, not merely keywords. Practise reducing paragraphs to one sentence each before writing the final version.',pro:'Do not chase elegant language. Accuracy, compression, coherence and word-limit discipline score more reliably.'},
  eng_letters:{tricks:['Memorise the formal structure so you spend exam time on content.','State purpose early; use factual chronology in reports.','End with a clear request/recommendation.'],master:'Practise one reusable skeleton for complaint/request/report formats and adapt content without sounding memorised.',pro:'Reserve 2–3 minutes to check names, subject line, dates, salutation, closure and paragraphing—cheap marks are lost here.'},
  eng_essay:{tricks:['Use a 5-point skeleton before writing.','One core idea per paragraph; examples should support the point, not replace it.','If unsure of exact statistics, use defensible general examples instead of inventing numbers.'],master:'Practise balanced structure: define → explain → benefits/risks → examples → conclusion. Depth beats random facts.',pro:'Do not write the longest essay you can. Stop early enough to edit grammar, repetition and incomplete sentences.'},
  eng_para:{tricks:['Use topic sentence → 2–3 supports → closing sentence.','Keep every sentence tied to one central idea.','Use linking words sparingly to preserve flow.'],master:'Train to produce a coherent paragraph within a fixed word limit without bullets or topic drift.',pro:'If time is short, a clean, focused paragraph is safer than a longer one with grammar errors and repetition.'},
  eng_reading:{tricks:['Answer literal questions before inference.','For “why/how”, state cause/effect directly.','Quote ideas briefly; do not copy long passages.'],master:'Practise identifying main idea, evidence, inference and tone separately.',pro:'Do not over-answer. A precise 1–3 sentence response is often stronger than a long response with unsupported additions.'},

  num_system:{tricks:['Use divisibility rules before long division.','For last-digit questions, reduce powers by the repeating cycle.','For two positive integers: HCF × LCM = product.','Reduce large remainder expressions modulo the divisor at every step.'],master:'First classify the question: divisibility, factors, multiples, remainder, digit cycle or fractions. The correct tool becomes obvious faster.',pro:'If options are far apart, test divisibility/remainders on the options instead of completing full arithmetic.'},
  simple_interest:{tricks:['Think 1% of principal first, then multiply by rate × time.','SI scales linearly with P, R and T.','Amount = P(1+RT/100).'],master:'Convert all time units before calculation and identify exactly which amount is the principal.',pro:'For percentage-only comparisons, assume a convenient principal such as 100 or 1000 to eliminate algebra.'},
  compound_interest:{tricks:['Treat percentage growth as multipliers.','For 2 years at equal rate: CI−SI = P(r/100)^2.','Half-yearly: halve rate, double periods.'],master:'Memorise common growth factors such as 1.1², 1.2² and 1.25²; recognise when successive change logic is enough.',pro:'Estimate with the multiplier first. If only one option is plausible, avoid unnecessary exact multiplication.'},
  ratio:{tricks:['Write a:b as ak:bk immediately.','Divide total T in a:b using T·a/(a+b), T·b/(a+b).','Equalise the common term before combining ratios.','Inverse proportion means product stays constant.'],master:'Normalize units first. Many ratio mistakes are unit mistakes disguised as arithmetic.',pro:'If equations become long, test options backward; for ratio problems this is often faster and safer.'},
  average:{tricks:['Average × count = total.','For equally spaced consecutive terms, the centre is the average.','Replacement shortcut: new avg = old avg +(new−old)/n.','Use assumed mean/deviations for long lists.'],master:'Always rebuild totals for combined averages; never average averages unless group sizes are equal.',pro:'When one value is unknown, use total-balance logic instead of resumming every known value.'},
  percentage:{tricks:['Memorise 1/2=50%, 1/3=33⅓%, 1/4=25%, 1/5=20%, 1/6=16⅔%, 1/8=12.5%.','x% of y = y% of x.','Successive changes a%, b% give a+b+ab/100 using signs.','Reverse percentage: divide by the multiplier; do not simply subtract.'],master:'See percentages as fractions and multipliers. This removes much of the calculation and exposes traps.',pro:'Convert awkward percentages such as 12.5%, 16⅔%, 33⅓% to fractions immediately.'},
  profit_loss:{tricks:['If only percentages matter, take CP=100.','SP=CP×(100±p)/100.','After discount, SP=MP×(100−d)/100.','Successive discounts multiply; they do not add.'],master:'Keep CP, SP and MP as three separate bases. Most difficult questions only mix these bases.',pro:'Use multiplier chains (CP→MP→SP) and calculate rupees only at the end.'},
  time_work:{tricks:['Take LCM of days as total work to avoid fractions.','Efficiency is inverse to time for equal work.','Combined rate = sum of individual rates.','If efficiency rises x%, time falls by x/(100+x)%.'],master:'Write each worker’s work/day first. When someone joins/leaves, split into phases and track remaining work.',pro:'On pass 1, skip long multi-phase work questions unless the LCM structure appears immediately.'},
  work_wages:{tricks:['Wages ∝ work done.','Work ∝ efficiency × time.','If time is equal, wage ratio = efficiency ratio.'],master:'Use a tiny table: person | efficiency | time | work. Then split wages by work ratio.',pro:'Cancel common time/efficiency factors before multiplying; ratios often avoid actual work values completely.'},
  time_distance:{tricks:['D=ST.','km/h→m/s ×5/18; m/s→km/h ×18/5.','Opposite direction relative speed adds; same direction subtracts.','Equal-distance average speed = 2xy/(x+y).'],master:'Identify the subtype first: ordinary motion, relative motion, train, boat/stream or average speed.',pro:'For equal distance, use inverse speed-time ratios. This is usually faster than calculating each time separately.'},
  clocks_calendars:{tricks:['Clock angle = |30H−5.5M|; use the smaller angle if asked.','Weekday shift = total days mod 7.','Ordinary year adds 1 odd day; leap year adds 2.','Century leap year must be divisible by 400.'],master:'Reduce years/months to odd days instead of counting calendar days directly.',pro:'Historical dates can become arithmetic-heavy; work from a reference date and reduce modulo 7 aggressively.'},
  partnership:{tricks:['Profit share ∝ capital × time.','Use capital-months as the common measure.','If capital changes, split the investment into periods.'],master:'Do not compare capital alone unless durations are identical.',pro:'Cancel common months and zeros before multiplication; keep the ratio small.'},
  mensuration:{tricks:['Write the required formula before substituting values.','Scale factor k → area k² → volume k³.','Border/path area = outer area − inner area.','Keep π symbolic until late when possible.'],master:'Always label whether the answer is length, area or volume and keep units consistent.',pro:'Use 22/7 when dimensions clearly favour cancellation; otherwise avoid premature decimal π calculations.'},
  analogy:{tricks:['State the relationship in words before reading options.','Check function, part-whole, cause-effect, degree, category, synonym/antonym.','Use alphabet positions only when semantic relationships fail.'],master:'The correct relation must preserve direction as well as similarity.',pro:'Eliminate options that match only one member of the pair; do not accept a vague relationship when a precise one exists.'},
  similarity:{tricks:['Find one property shared by three and missing in one.','Check category, function, structure, spelling or numerical property.','Prefer the simplest rule that explains all items.'],master:'Test your rule on every option; do not invent complex exceptions to rescue a first guess.',pro:'If two plausible classifications remain after ~30 seconds, mark and return rather than over-investing time.'},
  spatial_visual:{tricks:['Painted cube: unpainted=(n−2)^3; exactly one face=6(n−2)^2; exactly two=12(n−2); three=8.','For rotations, fix one reference face/edge.','For paper folding, unfold in reverse order.'],master:'Track position, orientation and count separately; combining all mentally causes avoidable errors.',pro:'A 10-second sketch is often faster than repeated mental rotation. Draw only the necessary faces/turns.'},
  spatial_orientation:{tricks:['Use coordinates: E +x, W −x, N +y, S −y.','Update facing direction immediately after each turn.','Use Pythagoras only after net x/y displacement is known.'],master:'Draw only turning points; a minimal coordinate sketch is enough.',pro:'If options only ask direction, determine quadrant first and skip exact distance unless needed.'},
  problem_solving:{tricks:['Convert words into slots, symbols, a table or equations.','Apply the most restrictive condition first.','When construction is long, test answer options.'],master:'Separate stated facts from assumptions; never add “common sense” constraints that are not given.',pro:'For linked arrangement questions, create one base diagram and reuse it across the set.'},
  analysis:{tricks:['Ask “must this follow?” rather than “could this be true?”.','Separate facts, implications and assumptions.','Try a counterexample to reject a conclusion.'],master:'Do not reverse implication: A→B does not establish B→A.',pro:'If one valid counterexample exists, the conclusion is not necessary. This can be faster than formal derivation.'},
  judgment:{tricks:['For data sufficiency, decide whether a unique answer can be obtained; you may not need to calculate it.','Test each statement independently before combining.','Reject conclusions that add new facts.'],master:'Train to distinguish sufficiency from actually solving the full problem.',pro:'Stop the moment uniqueness is established. Extra calculation wastes time and introduces errors.'},
  decision:{tricks:['Choose an action supported by the stated facts and objective.','Reject options requiring missing information.','Prefer direct, proportionate action over extreme/unrelated action.'],master:'Separate what sounds desirable in real life from what logically follows from the case.',pro:'If two options are reasonable, choose the one solving the stated problem with fewer unsupported assumptions.'},
  visual_memory:{tricks:['Chunk the figure into zones.','Anchor distinctive items first.','Remember relative positions rather than isolated symbols.'],master:'Recall structure first, details second. A simple grid in memory is more stable than a visual “snapshot”.',pro:'Do not stare at one unusual item too long; one full systematic scan is better.'},

  architecture:{tricks:['CPU: ALU=arithmetic/logic, CU=control, registers=fast internal storage.','Hierarchy: registers → cache → RAM → secondary storage.','Separate address, data and control buses by function.'],master:'Learn hardware as a system—component + purpose + relative speed/location—not as isolated definitions.',pro:'Use category elimination. An option from storage cannot be the answer to a control-unit question just because it sounds technical.'},
  assembly:{tricks:['Troubleshoot layer by layer: power → POST/hardware → storage/boot → OS → application.','One symptom, one likely layer; no power is not an OS problem.','Virus/malware questions: distinguish virus, worm, Trojan and ransomware by behaviour.'],master:'Build a diagnostic decision tree instead of memorising random fixes.',pro:'In troubleshooting MCQs, choose the safest first diagnostic step before invasive replacement/reinstallation.'},
  memory:{tricks:['Volatile: registers/cache/RAM; non-volatile: ROM/flash/SSD/HDD.','Faster memory is generally smaller and costlier per bit.','RAID 0=striping, RAID 1=mirror, RAID 5=single distributed parity, RAID 6=dual parity.'],master:'Learn memory/storage by volatility, speed, capacity, location and purpose; learn RAID by performance + redundancy trade-off.',pro:'Be suspicious of “RAID is backup.” RAID improves availability but does not replace an independent backup.'},
  peripherals:{tricks:['Classify by data direction: input, output, storage or mixed.','Touchscreen is both input and output.','Scanner captures; printer outputs hard copy.'],master:'Link every peripheral to its primary function and interface rather than memorising a list.',pro:'When two devices seem similar, ask what information enters or leaves the computer.'},
  os:{tricks:['Program=passive code; process=program in execution; thread=execution unit.','Virtual memory uses secondary storage to extend the memory abstraction.','Kernel manages core resources; shell/UI is an interaction layer.'],master:'Organise OS topics into process, memory, files, devices, security and user management.',pro:'Prefer stable functional concepts over version-specific menu locations unless the question explicitly asks a Windows path.'},
  windows:{tricks:['Separate user issue, service issue, driver issue, disk issue and network issue.','Use Task Manager for processes/performance; Device Manager for hardware/drivers; Services for service state.','Event logs help correlate failures and timestamps.'],master:'Think diagnosis before action: symptom → scope → likely subsystem → lowest-risk check.',pro:'In maintenance questions, a reversible diagnostic step is usually safer than immediately reinstalling software or deleting data.'},
  dbms:{tricks:['Primary key uniquely identifies; foreign key references; candidate key is a minimal unique choice.','ACID = Atomicity, Consistency, Isolation, Durability.','WHERE filters rows; HAVING filters groups.','Reason SQL as FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.'],master:'Understand dependency and transaction behaviour, not just definitions; twisted questions often describe the concept indirectly.',pro:'For long SQL questions, identify output columns + filters/grouping first and ignore irrelevant table details.'},
  word:{tricks:['Ctrl+B/I/U for bold/italic/underline; Ctrl+F find; Ctrl+H replace.','Styles give consistent formatting; headers/footers repeat page elements.','Mail Merge = template + recipient data.'],master:'Group Word features by editing, formatting, layout, references, review and mail merge.',pro:'Drill a compact high-frequency shortcut set until automatic; obscure shortcuts are lower value than feature concepts.'},
  excel:{tricks:['$A$1 locks row+column; A$1 locks row; $A1 locks column.','SUM adds, AVERAGE averages, COUNT numeric, COUNTA non-empty.','IF gives conditional output; sort reorders, filter hides non-matches.'],master:'Before calculating a formula, inspect cell references and operator precedence; many exam traps are reference errors.',pro:'For copied-formula questions, move the references exactly as Excel would instead of recalculating the whole worksheet.'},
  powerpoint:{tricks:['F5 starts from beginning; Shift+F5 from current slide.','Transition=between slides; animation=object on slide.','Slide Master controls repeated design/layout.'],master:'Classify each feature by scope: presentation, slide or object.',pro:'If transition and animation are both options, ask whether the effect occurs between slides or on an object.'},
  access:{tricks:['Table stores; Query retrieves/transforms; Form enters/displays; Report presents/prints.','Primary/foreign keys link related tables.','Use queries for calculated/filtered views without duplicating base data.'],master:'Map every Access object to its job and relationship to the data model.',pro:'When asked for a subset/calculation from stored data, examine “Query” before choosing a new table.'},
  networking:{tricks:['OSI bottom→top: Physical, Data Link, Network, Transport, Session, Presentation, Application.','Switch mainly forwards frames within LAN; router forwards packets between networks.','HTTP 80, HTTPS 443, DNS 53, SMTP 25.','DNS resolves names; DHCP supplies network configuration.'],master:'Answer by layer/function: MAC/switch→Data Link, IP/router→Network, TCP/UDP→Transport, HTTP/DNS→Application.',pro:'When unsure about a device, ask what boundary it crosses: same LAN suggests switching; different IP networks require routing.'},
  security:{tricks:['CIA = Confidentiality, Integrity, Availability.','Authentication=who you are; authorization=what you may do.','Hashing is one-way; encryption is reversible with a key.','Firewall filters traffic; antivirus targets malicious software.'],master:'Classify controls by purpose: prevent, detect, authenticate, authorize, encrypt or recover.',pro:'Beware absolute claims such as “antivirus blocks all malware” or “encryption guarantees integrity”. Controls solve specific risks.'}
};

function advancedFor(topic){
  return ADVANCED_TIPS[topic] || {
    tricks:['Identify the question type before calculating.','Use elimination when it is faster than full solving.','Write only the minimum working needed to avoid careless mistakes.'],
    master:'Mastery means solving unfamiliar variants, not repeating memorised examples.',
    pro:'Collect quick, sure marks on pass 1; mark lengthy or ambiguous questions and return with remaining time.'
  };
}

function renderLearn(){
  const learnedCount=Object.values(state.learned||{}).filter(Boolean).length;
  const learnable=Object.keys(TOPIC_LEARNING).length;
  document.querySelector('#view-learn').innerHTML=`
    <div class="card hero-learn">
      <div><span class="badge good">Official syllabus first</span><h2>Learn → Shortcuts → PYQ → Model → Test</h2><p class="muted">This is the required order. A topic is not treated as exam-ready just because you answered model MCQs.</p></div>
      <div class="learn-score"><strong>${learnedCount}/${learnable}</strong><span>learning modules completed</span></div>
    </div>
    <div class="card strategy-card">
      <h3>Negative-mark + time strategy</h3>
      <div class="strategy-grid">
        <div><strong>English Part-A</strong><p>${OFFICIAL_RULES.p1}</p><p><b>Decision rule:</b> with a 25% penalty, break-even accuracy is 20%. If there are four options and you can eliminate even one, an attempt is mathematically favourable—but OMR/time mistakes still matter.</p></div>
        <div><strong>Paper II</strong><p>${OFFICIAL_RULES.p2}</p><p><b>Pace:</b> 200 questions / 180 minutes = 54 seconds per question on average. Use 3 passes: direct → solvable → time-heavy.</p></div>
        <div><strong>Paper III</strong><p>${OFFICIAL_RULES.p3}</p><p><b>Pace:</b> same 54-second average, but factual Technical questions should often finish in 20–40 seconds, creating reserve time for DBMS/networking/troubleshooting items.</p></div>
      </div>
    </div>
    ${SYLLABUS.map(p=>`<div class="card topic-group"><div class="topic-header"><div><h3>${p.name}</h3><div class="muted">Open a topic to learn concepts, shortcuts, traps and its attempt strategy before questions.</div></div><span class="badge">${p.topics.length} topics</span></div><div class="topic-list">${p.topics.map(t=>{const c=TOPIC_LEARNING[t[0]];return `<div class="topic-item"><div><strong>${t[1]}</strong><div class="meta">${c?`${c.learn.length} core areas · ${c.tricks.length} shortcuts · ${c.traps.length} traps`:'Learning module'} ${isLearned(t[0])?'· completed':''}</div></div><div class="topic-actions">${isLearned(t[0])?'<span class="badge good">Learned</span>':'<span class="badge warn">Learn first</span>'}<button class="primary" onclick="showLearnTopic('${t[0]}')">Open module</button></div></div>`}).join('')}</div></div>`).join('')}
    <div class="section-title"><h2>Verified previous-exam archive</h2><span>Source labels stay honest</span></div>
    <div class="grid paper-grid">${VERIFIED_PYQ_ARCHIVE.map(x=>`<div class="card"><span class="badge">${x.year} · ${x.paper}</span><h3>${x.name}</h3><p><strong>${x.date}</strong></p><p class="muted">${x.status}</p><p><span class="badge">${x.sourceQuality}</span></p><div class="note">${x.note}</div><p style="margin-top:12px"><a class="source-link" href="${x.url}" target="_blank" rel="noopener">Open source ↗</a></p></div>`).join('')}</div>`;
}

function showLearnTopic(topic){
  const c=TOPIC_LEARNING[topic]||{learn:['Follow the official syllabus wording and build concept notes.'],tricks:['Use elimination and retrieval practice.'],traps:['Do not memorise answers without understanding.'],time:'Use a timed drill after learning.'};
  const a=advancedFor(topic);
  const d=DETAILED_GUIDE[topic]||{
    intro:`This module explains ${TOPIC_NAME[topic]} from the exam point of view. First understand the concept, then study the shortcut, then practise until you can explain why the shortcut works.`,
    concepts:(c.learn||[]).slice(0,4).map((x,i)=>({title:`Core idea ${i+1}`,body:`${x}. Learn the definition, identify when it applies, and connect it to one worked example before memorising any shortcut.`})),
    worked:{problem:'Take one representative model question from this topic.',steps:['Identify what the question is really asking.','Choose the minimum formula/rule required.','Solve step by step and verify the option/units.'],result:'You should be able to explain every step without looking at the answer.'},
    memory:c.tricks||[],ready:['You can explain the concept in your own words.','You can solve a fresh timed question without copying a memorised pattern.']
  };
  const paper=TOPIC_PAPER[topic]; const qs=topicQuestions(topic); const modelCount=qs.filter(x=>(x.source||'MODEL')==='MODEL').length; const pyqCount=qs.filter(x=>x.source==='PYQ').length;
  const conceptCards=d.concepts.map((x,i)=>`<div class="deep-concept"><div class="concept-num">${i+1}</div><div><h4>${x.title}</h4><p>${x.body}</p></div></div>`).join('');
  document.querySelector('#view-learn').innerHTML=`<div class="learn-module">
    <button class="ghost" onclick="renderLearn()">← All topics</button>
    <div class="card module-head"><div><span class="badge">${paper}</span><h2>${TOPIC_NAME[topic]}</h2><p class="muted">Detailed learning module: understand the idea → see how it works → learn shortcuts → practise → prove it under time.</p></div>${isLearned(topic)?'<span class="badge good">Learning complete</span>':'<span class="badge warn">Not completed</span>'}</div>

    <div class="card deep-overview"><div class="level-tag">FOUNDATION</div><h3>📘 Detailed explanation</h3><p class="deep-intro">${d.intro}</p>${conceptCards}</div>

    <div class="grid deep-work-grid">
      <div class="card worked-card"><div class="level-tag">WORKED EXAMPLE</div><h3>✍️ Understand it step by step</h3><div class="worked-problem">${d.worked.problem}</div><ol class="worked-steps">${d.worked.steps.map(x=>`<li>${x}</li>`).join('')}</ol><div class="worked-result"><b>Result:</b> ${d.worked.result}</div></div>
      <div class="card recall-card"><div class="level-tag">MEMORY HOOKS</div><h3>🧩 What to remember quickly</h3><ul class="clean-list">${(d.memory||[]).map(x=>`<li>${x}</li>`).join('')}</ul><h4 class="ready-title">Before moving on, make sure:</h4><ul class="clean-list ready-list">${(d.ready||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div>
    </div>

    <div class="grid module-grid">
      <div class="card"><h3>1. Official-syllabus points to cover</h3><p class="muted small-note">Use this as your checklist after reading the detailed explanation above.</p><ul class="clean-list">${c.learn.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="card"><h3>2. Basic tricks & shortcuts</h3><p class="muted small-note">Shortcuts are safe only after the concept is clear.</p><ul class="clean-list">${c.tricks.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="card"><h3>3. Common traps</h3><p class="muted small-note">These are the mistakes to actively look for while solving.</p><ul class="clean-list trap-list">${c.traps.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="card"><h3>4. Time-management target</h3><div class="exam-rule">${c.time}</div><p class="muted">Do not chase one stubborn question. Protect the paper-level average pace and return on pass 2/3.</p></div>
    </div>
    <div class="card advanced-shortcuts"><h3>⚡ 5. Advanced shortcuts for this topic</h3><p class="muted small-note">Use these only when you can also solve the same type by the normal method.</p><ul class="clean-list">${a.tricks.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="grid advanced-grid">
      <div class="card master-card"><div class="level-tag">MASTER LEVEL</div><h3>🧠 How to become reliable in this topic</h3><p>${a.master}</p><div class="mastery-note"><b>Mastery check:</b> target ≥80% in a timed topic test and prove it again in delayed retention. If the delayed score falls, the topic returns to revision.</div></div>
      <div class="card pro-card"><div class="level-tag pro">PRO EXAM LEVEL</div><h3>🏆 What to do inside the real exam</h3><p>${a.pro}</p><div class="mastery-note"><b>Paper rule:</b> take quick/sure marks first. One difficult question must not steal the time of several easy ones.</div></div>
    </div>
    <div class="card"><div class="level-tag">TOPIC ATTEMPT STRATEGY</div><h3>🎯 How to attempt this topic in the exam</h3>${(()=>{const z=topicAttemptStrategy(topic);return `<p><b>First approach:</b> ${z.first}</p><p><b>If stuck:</b> ${z.stuck}</p><p><b>After practice:</b> ${z.review}</p>`})()}</div>\n    <div class="card progression"><h3>7. Required practice order</h3><div class="progression-row"><div><span>①</span><b>Learn deeply</b><small>Concept + example</small></div><div><span>②</span><b>Verified PYQ</b><small>${pyqCount?pyqCount+' loaded':'Only when source is verified'}</small></div><div><span>③</span><b>Model drill</b><small>${modelCount} loaded</small></div><div><span>④</span><b>Topic test</b><small>Timed, no hints</small></div><div><span>⑤</span><b>Retention</b><small>1d · 3d · 7d · 14d</small></div></div>
      <div class="source-warning">PYQ-derived questions remain source-traceable. Model questions remain clearly separate. The Practice section is intentionally kept for repeated topic-wise drilling.</div>
      <div class="row wrap" style="margin-top:14px">${!isLearned(topic)?`<button class="primary" onclick="markLearned('${topic}')">I studied this module</button>`:''}<button class="secondary" onclick="startTopicSource('${topic}','PYQ',10)">Previous questions</button><button class="secondary" onclick="startTopicSource('${topic}','MODEL',10)">Model questions</button><button class="ghost" onclick="startTopic('${topic}',Math.min(20,topicQuestions('${topic}').length),'topicTest')">Topic test</button></div>
    </div>
  </div>`;
}

function startTopicSource(topic,source,count){
  if(!isLearned(topic)) return toast('Finish the learning module first.');
  const pool=shuffle(topicQuestions(topic).filter(q=>(q.source||'MODEL')===source));
  if(!pool.length) return toast(source==='PYQ'?'No source-traceable PYQ-derived questions are loaded for this topic yet. Model questions are kept separate.':'No model questions loaded for this topic yet.');
  startSession(pool.slice(0,Math.min(count,pool.length)),'practice',{topic,source});
}


function topicAttemptStrategy(topic){
  const p=TOPIC_PAPER[topic];
  const arithmetic=['num_system','simple_interest','compound_interest','ratio','average','percentage','profit_loss','time_work','work_wages','time_distance','clocks_calendars','partnership','mensuration'];
  const reasoning=['analogy','similarity','spatial_visual','spatial_orientation','problem_solving','analysis','judgment','decision','visual_memory'];
  if(p==='P1') return {first:'Identify the rule/question type immediately. Take direct grammar/vocabulary/comprehension marks first; keep descriptive planning separate.',stuck:'Because English Part-A has the stated negative-mark rule, avoid repeatedly rereading one doubtful item. Mark it, move, and return after sure marks.',review:'For every error, record the grammar/vocabulary/comprehension rule—not just the correct option.'};
  if(arithmetic.includes(topic)) return {first:'Write the minimum relation/formula first, then look for cancellation, ratio, fraction or option-elimination shortcuts before long arithmetic.',stuck:'If a clean route does not appear within about 20–30 seconds, mark it for pass 2. Do not let a calculation-heavy item consume the time of two direct questions.',review:'Redo wrong questions once by the normal method and once by the shortcut; keep the shortcut only if you can explain why it works.'};
  if(reasoning.includes(topic)) return {first:'Translate the wording into a diagram, relation, slots, coordinates or a one-line rule. Externalizing the information reduces working-memory errors.',stuck:'If two options remain and the pattern is not becoming clearer, preserve time and return later. A counterexample/elimination test is often faster than full reconstruction.',review:'Classify the mistake: missed condition, reversed relation, assumption, visual tracking error or time-pressure guess.'};
  return {first:'Classify the question by subsystem/function before reading every option. Direct factual technical items should become quick marks.',stuck:'Use category and layer elimination. If the item needs deeper reasoning, park it for pass 2 rather than spending the factual-question time reserve.',review:'Build paired contrasts from errors: RAM vs ROM, switch vs router, authentication vs authorization, WHERE vs HAVING, transition vs animation, and so on.'};
}

function renderStrategy(){
  document.querySelector('#view-strategy').innerHTML=`
    <div class="card hero-learn"><div><span class="badge good">Exam execution plan</span><h2>Know it → retrieve it → score it under time</h2><p class="muted">This strategy is designed around the current ASI FPB scheme used in the trainer: English qualifying, Paper II + III for merit, and 54 seconds/question average in the 200-question objective papers.</p></div></div>
    <div class="section-title"><h2>Paper-level strategy</h2><span>Use passes instead of solving strictly from Q1 to Q200</span></div>
    <div class="grid paper-grid">
      <div class="card"><h3>Paper I · English</h3><p><b>Part-A:</b> collect grammar/vocabulary/comprehension questions you know first. Do not spend repeated reads on one doubtful MCQ.</p><p><b>Descriptive:</b> plan before writing. Keep a final proofreading buffer for grammar, spelling, format and missed sub-parts.</p><div class="exam-rule"><b>Risk rule:</b> the trainer applies the notified negative-mark caution only to English Part-A. Never transfer that penalty to Paper II/III unless TGPRB later says so.</div></div>
      <div class="card"><h3>Paper II · Arithmetic & Reasoning</h3><p><b>Pass 1:</b> direct formula, obvious series/analogy, quick percentage/ratio and straightforward reasoning.</p><p><b>Pass 2:</b> medium calculations, multi-step reasoning and questions you marked after identifying a route.</p><p><b>Pass 3:</b> time-heavy items and final unanswered scan.</p><div class="exam-rule"><b>Pace:</b> 200 questions / 180 minutes ≈ 54 sec each on average. Easy questions must finish faster to create reserve time.</div></div>
      <div class="card"><h3>Paper III · Technical</h3><p><b>Pass 1:</b> direct facts—hardware roles, memory, Office, basic networking/security terminology.</p><p><b>Pass 2:</b> DBMS/SQL, troubleshooting, Windows administration and scenario questions.</p><p><b>Pass 3:</b> ambiguous wording, deeper elimination and unanswered review.</p><div class="exam-rule"><b>Goal:</b> Paper III carries the largest merit weight, so accuracy here matters more than merely finishing quickly.</div></div>
    </div>
    <div class="section-title"><h2>Training phases</h2><span>Do not wait until the syllabus ends to test cumulative recall</span></div>
    <div class="card progression"><div class="progression-row">
      <div><span>1</span><b>Foundation</b><small>Detailed explanation + worked example</small></div>
      <div><span>2</span><b>Controlled practice</b><small>Shortcut + instant correction</small></div>
      <div><span>3</span><b>Topic test</b><small>Timed, no help</small></div>
      <div><span>4</span><b>Retention</b><small>1d · 3d · 7d · 14d</small></div>
      <div><span>5</span><b>Cumulative</b><small>50Q → 100Q → full paper</small></div>
    </div></div>
    <div class="grid">
      <div class="card"><h3>When a topic is “mastered”</h3><ul class="clean-list"><li>You can explain the core idea without seeing notes.</li><li>You can solve a fresh question by the normal method.</li><li>You know when the shortcut is valid and when it is unsafe.</li><li>You score ≥80% in a timed topic test.</li><li>You retain it in delayed revision instead of only same-day memory.</li></ul></div>
      <div class="card"><h3>How to protect marks</h3><ul class="clean-list"><li>Read what is asked before calculating.</li><li>Keep units and bases visible in arithmetic.</li><li>Use elimination aggressively on technical/reasoning MCQs.</li><li>Do not change an answer without a concrete reason.</li><li>Reserve a final scan for unanswered/multiple-mark/reading mistakes.</li></ul></div>
      <div class="card"><h3>Daily study pattern</h3><ul class="clean-list"><li>Start with due retention questions.</li><li>Learn one new topic deeply.</li><li>Do 10–25 targeted questions.</li><li>Review every wrong answer immediately.</li><li>Finish with a short mixed set from older topics.</li></ul></div>
      <div class="card"><h3>Final-stage pattern</h3><ul class="clean-list"><li>Shift from chapter completion to mixed retrieval.</li><li>Track accuracy and time separately.</li><li>Repeat weak-topic tests until error type disappears.</li><li>Take full mocks in the actual paper duration.</li><li>Use the next day to analyse the mock, not merely take another one.</li></ul></div>
    </div>`;
}

function renderSyllabus(){
  document.querySelector('#view-syllabus').innerHTML=SYLLABUS.map(p=>`<div class="card topic-group"><div class="topic-header"><div><h3>${p.name}</h3><div class="muted">${p.marks} marks · ${p.duration} minutes ${p.qualifying?'· qualifying':'· contributes to final merit'}</div></div><span class="badge">${p.topics.length} topics</span></div><div class="topic-list">${p.topics.map(t=>{const descriptive=!!t[2],s=topicStats(t[0]),m=isMastered(t[0]);return `<div class="topic-item"><div><strong>${t[1]}</strong><div class="meta">${descriptive?'Descriptive practice · rubric/self-check':`${topicQuestions(t[0]).length} questions loaded · ${s.attempts} attempted · ${s.accuracy}% accuracy · best test ${topicTestBest(t[0])}%`}</div></div><div class="topic-actions">${m?'<span class="badge good">Mastered</span>':descriptive?'<span class="badge warn">Manual scoring</span>':'<span class="badge">Learning</span>'}${descriptive?`<button class="primary" onclick="navigate('learn');showLearnTopic('${t[0]}')">Learn</button><button class="ghost" onclick="showDescriptive('${t[0]}')">Writing task</button>`:`<button class="primary" onclick="navigate('learn');showLearnTopic('${t[0]}')">Learn</button><button class="secondary" onclick="startTopicSource('${t[0]}','MODEL',10)">Model drill</button><button class="ghost" onclick="startTopic('${t[0]}',Math.min(20,topicQuestions('${t[0]}').length),'topicTest')">Test</button>`}</div></div>`}).join('')}</div></div>`).join('');
}

function showDescriptive(topic){
  const tasks={eng_precis:'Read a 250–300 word passage, reduce it to roughly one-third while preserving the central idea, logical sequence and tone. Give a suitable title.',eng_letters:'Write a formal letter/report in 180–250 words. Practice subject line, purpose, facts, recommendations and professional closing.',eng_essay:'Write a structured essay: introduction, 3–4 coherent body paragraphs, balanced analysis and conclusion.',eng_para:'Write a focused 120–150 word paragraph on a current social/technology topic with one clear central idea.',eng_reading:'Read a passage and answer inference, tone, vocabulary-in-context and main-idea questions in complete sentences.'};
  const rubric='Self-score out of 10: relevance 2, organization 2, grammar 2, vocabulary/clarity 2, concision & instruction-following 2.';
  document.querySelector('#view-syllabus').innerHTML=`<div class="card"><button class="ghost" onclick="renderSyllabus()">← Back to syllabus</button><h2>${TOPIC_NAME[topic]}</h2><p>${tasks[topic]}</p><div class="exam-rule">${rubric}</div><p class="muted">Objective questions can be corrected instantly. Descriptive writing needs a rubric or an AI/human evaluator; this offline version does not pretend to auto-grade free-form writing reliably.</p><textarea id="descText" rows="14" placeholder="Write your answer here..."></textarea></div>`;
}

function renderPractice(){
  const options=SYLLABUS.flatMap(p=>p.topics.filter(t=>!t[2] && topicQuestions(t[0]).length).map(t=>`<option value="${t[0]}">${p.paper} · ${t[1]} (${topicQuestions(t[0]).length})</option>`)).join('');
  document.querySelector('#view-practice').innerHTML=`<div class="card"><h2>Topic practice</h2><p class="muted">Use this after learning. Source labels are explicit: verified previous questions are never mixed with model questions.</p><div class="form-grid"><div class="field"><label>Topic</label><select id="practiceTopic">${options}</select></div><div class="field"><label>Questions</label><select id="practiceCount"><option>10</option><option>15</option><option>20</option><option>25</option><option>50</option></select></div><div class="field"><label>Question source</label><select id="practiceSource"><option value="MODEL">Model questions</option><option value="PYQ">Verified previous questions only</option><option value="ALL">All verified + model</option></select></div><div class="field"><label>Mode</label><select id="practiceMode"><option value="practice">Instant correction + explanation</option><option value="topicTest">Timed topic test</option></select></div></div><div style="margin-top:14px"><button class="primary" onclick="startPracticeFromForm()">Start session</button></div></div>`;
}

function renderTests(){
  const p2=paperQuestions('P2').length,p3=paperQuestions('P3').length;
  document.querySelector('#view-tests').innerHTML=`
  <div class="card"><h2>Exam ladder</h2><p class="muted">Do not jump straight from chapter study to a 3-hour paper.</p><div class="progression-row"><div><span>1</span><b>Topic</b><small>10–20 Q</small></div><div><span>2</span><b>Cluster</b><small>50 Q mixed</small></div><div><span>3</span><b>Cumulative</b><small>100 Q</small></div><div><span>4</span><b>Paper</b><small>200 Q / 3 h</small></div><div><span>5</span><b>Error replay</b><small>weak-only test</small></div></div></div>
  <div class="grid paper-grid" style="margin-top:16px">
    <div class="card"><h3>Paper II mixed mock</h3><p class="muted">Official target: 200 questions · 100 marks · 180 min.</p><p><strong>${p2}</strong> model/verified questions currently loaded.</p><div class="row wrap"><button class="primary" onclick="startPaperMock('P2',Math.min(50,${p2}))">50Q cluster</button><button class="secondary" onclick="startPaperMock('P2',Math.min(100,${p2}))">100Q cumulative</button>${p2>=200?`<button class="ghost" onclick="startPaperMock('P2',200)">200Q strict</button>`:''}</div></div>
    <div class="card"><h3>Paper III technical mock</h3><p class="muted">Official target: 200 questions · 200 marks · 180 min.</p><p><strong>${p3}</strong> model/verified questions currently loaded.</p><div class="row wrap"><button class="primary" onclick="startPaperMock('P3',Math.min(50,${p3}))">50Q cluster</button><button class="secondary" onclick="startPaperMock('P3',Math.min(100,${p3}))">100Q cumulative</button>${p3>=200?`<button class="ghost" onclick="startPaperMock('P3',200)">200Q strict</button>`:''}</div></div>
    <div class="card"><h3>Weak-area exam</h3><p class="muted">Build a test only from questions you previously missed.</p><button class="primary" onclick="startWeakMock()">Start mistake replay</button></div>
  </div>
  <div class="section-title"><h2>Official paper rules used by this trainer</h2></div>
  <div class="card exam-rule"><b>Paper I:</b> ${OFFICIAL_RULES.p1}<br><br><b>Paper II:</b> ${OFFICIAL_RULES.p2}<br><br><b>Paper III:</b> ${OFFICIAL_RULES.p3}<br><br><b>Merit:</b> ${OFFICIAL_RULES.merit}</div>`;
}
function startWeakMock(){const pool=shuffle(Object.keys(state.mistakes).map(id=>QUESTION_BANK.find(q=>q.id===id)).filter(Boolean));if(!pool.length)return toast('No mistakes yet.');startSession(pool.slice(0,Math.min(50,pool.length)),'mock',{weak:true});}

function renderMistakes(){
  const rows=Object.entries(state.mistakes).map(([id,m])=>{const qq=QUESTION_BANK.find(x=>x.id===id);if(!qq)return '';return `<tr><td>${qq.paper}</td><td>${TOPIC_NAME[qq.topic]}</td><td>${qq.prompt}</td><td>${m.count}</td><td>${new Date(m.last).toLocaleDateString()}</td><td><button class="secondary" onclick="startQuestionById('${id}')">Retry</button></td></tr>`}).filter(Boolean).join('');
  document.querySelector('#view-mistakes').innerHTML=`<div class="card"><div class="row spread"><div><h2>Mistake book</h2><p class="muted">Every wrong answer stays visible until you beat it in later review.</p></div><span class="badge bad">${Object.keys(state.mistakes).length} unique mistakes</span></div><div class="table-wrap">${rows?`<table class="table"><thead><tr><th>Paper</th><th>Topic</th><th>Question</th><th>Wrong times</th><th>Last wrong</th><th></th></tr></thead><tbody>${rows}</tbody></table>`:'<div class="empty">No mistakes recorded yet.</div>'}</div></div>`;
}


function renderAlerts(){
  document.querySelector('#view-alerts').innerHTML=`
    <div class="card">
      <div class="row spread"><div><h2>Latest TGPRB Press Notes</h2><p class="muted">The trainer can be hosted or used locally. The separate email monitor checks the official TGPRB site hourly for every new recruitment press release / notice.</p></div><span class="badge good">Email alerts enabled</span></div>
      <div class="source-warning"><strong>Build-time snapshot:</strong> on 28 Sep 2026 the TGPRB Latest News list showed Police Recruitment press releases dated 17 Sep, 10 Sep and 8 Sep 2026, followed by earlier notices. Always use the official site for the newest publication.</div>
      <div class="grid" style="margin-top:14px">
        <div class="card"><h3>What the alert summarizes</h3><ul><li>Press-note date, exact title and posts affected</li><li>Every useful table/statistic: total, post-wise, gender-wise, community-wise and SC Group-I/II/III where provided</li><li>ASI FPB / Post Code 33 impact</li><li>SC Group-II candidate view, including vacancy/application ratios when supported</li><li>Dates, deadlines, PET/PMT, exam, hall-ticket, document or result actions</li><li>Official source link and caution about any derived ratio</li></ul></div>
        <div class="card"><h3>Email behavior</h3><p>No email is sent when nothing changes. Every new official recruitment release triggers a detailed summary; no release should be skipped simply because it is not directly about ASI FPB.</p><p class="muted">Because this is a local HTML app, closing the browser does not stop the separate alert monitor.</p></div>
      </div>
      <div class="row"><a class="primary" style="text-decoration:none" href="https://www.tgprb.in/" target="_blank" rel="noopener">Open official TGPRB site ↗</a><button class="secondary" onclick="navigate('dashboard')">Back to dashboard</button></div>
    </div>`;
}
function renderSettings(){
  const pyqs=QUESTION_BANK.filter(q=>q.source==='PYQ');
  document.querySelector('#view-settings').innerHTML=`<div class="grid paper-grid"><div class="card"><h3>Export progress</h3><p class="muted">Download your attempts, scores, mistakes and review schedule as JSON.</p><button class="primary" onclick="exportProgress()">Export JSON</button></div><div class="card"><h3>Import progress</h3><p class="muted">Restore a previous trainer backup on another browser/device.</p><input id="importFile" type="file" accept="application/json"><div style="margin-top:10px"><button class="secondary" onclick="importProgress()">Import</button></div></div><div class="card"><h3>Reset</h3><p class="muted">Deletes local progress on this browser only.</p><button class="danger" onclick="resetProgress()">Reset progress</button></div></div><div class="section-title"><h2>Question bank</h2></div><div class="card"><p><strong>${QUESTION_BANK.length}</strong> objective questions are loaded.</p><p><strong>${pyqs.length}</strong> are source-traceable 2023 PYQ-derived questions (paraphrased from a published Booklet-A transcript) and <strong>${QUESTION_BANK.filter(q=>(q.source||'MODEL')==='MODEL').length}</strong> are model questions.</p><p class="muted">Every PYQ-derived item shows year, booklet, original question number and a source link. Technical Paper III currently has an official answer key source but no reconstructed question text: an answer key is never used to invent a question.</p></div>`;
}

function startPracticeFromForm(){const topic=document.querySelector('#practiceTopic').value;if(!isLearned(topic))return toast('Open Learn and finish this topic module first.');const source=document.querySelector('#practiceSource').value;const mode=document.querySelector('#practiceMode').value;let pool=topicQuestions(topic);if(source!=='ALL')pool=pool.filter(q=>(q.source||'MODEL')===source);if(!pool.length)return toast(source==='PYQ'?'No source-traceable PYQ-derived questions are loaded for this topic yet.':'No questions in this selection.');startSession(shuffle(pool).slice(0,Math.min(Number(document.querySelector('#practiceCount').value),pool.length)),mode,{topic,source});}
function startTopic(topic,count,mode='practice'){const pool=shuffle(topicQuestions(topic)); startSession(pool.slice(0,Math.min(count,pool.length)),mode,{topic});}
function startPaperMock(paper,count){startSession(shuffle(paperQuestions(paper)).slice(0,count),'mock',{paper});}
function startReview(){const pool=shuffle(dueReviews()); if(!pool.length)return toast('No reviews due.');startSession(pool,'review',{})}
function startQuestionById(id){const qq=QUESTION_BANK.find(x=>x.id===id);if(qq)startSession([qq],'review',{})}
function startSession(questions,mode,meta){
  if(!questions.length)return toast('No questions available for this selection.');
  clearInterval(timerHandle); const secondsPerQ=mode==='mock'?54:mode==='topicTest'?60:0;
  currentSession={questions,index:0,score:0,answered:false,mode,meta,start:Date.now(),seconds:secondsPerQ?questions.length*secondsPerQ:0};
  navigate('practice'); renderQuestion();
  if(currentSession.seconds){timerHandle=setInterval(()=>{currentSession.seconds--; if(currentSession.seconds<=0){clearInterval(timerHandle);finishSession()}else updateTimer()},1000)}
}
function renderQuestion(){
  const s=currentSession,qq=s.questions[s.index]; if(!qq)return finishSession(); s.answered=false;
  const pyqMeta=qq.source==='PYQ'?`<div class="source-box"><strong>${qq.year} PYQ-derived · Booklet ${qq.booklet} · original Q${qq.questionNo}</strong><span>Wording: ${qq.wording==='PARAPHRASED'?'faithful English paraphrase':'source text'}</span><a href="${qq.sourceUrl}" target="_blank" rel="noopener">View source ↗</a></div>`:'';
  document.querySelector('#view-practice').innerHTML=`<div class="question-shell"><div class="question-top"><span class="badge">${qq.paper} · ${TOPIC_NAME[qq.topic]}</span><div class="row"><span>${s.index+1}/${s.questions.length}</span>${s.seconds?`<span id="timer" class="timer"></span>`:''}</div></div><div class="progress"><span style="width:${((s.index)/s.questions.length)*100}%"></span></div><div class="card"><div class="row spread"><span class="badge">Difficulty ${qq.difficulty}</span><span class="badge ${qq.source==='PYQ'?'good':''}">${qq.source==='PYQ'?'PYQ-derived · source-traceable':'Model question'}</span><button class="ghost" onclick="toggleBookmark('${qq.id}')">${state.bookmarks[qq.id]?'★ Bookmarked':'☆ Bookmark'}</button></div>${pyqMeta}<div class="question-text">${qq.prompt}</div><div class="options">${qq.options.map((o,i)=>`<button class="option" data-i="${i}" onclick="answerQuestion(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div id="feedback"></div><div class="session-footer"><button class="ghost" onclick="finishSession()">End session</button><button id="nextBtn" class="primary" style="display:none" onclick="nextQuestion()">Next</button></div></div></div>`; updateTimer();
}
function answerQuestion(i){
  const s=currentSession;if(s.answered)return;s.answered=true;const qq=s.questions[s.index],correct=i===qq.answer;if(correct)s.score++;
  state.attempted++;if(correct)state.correct++;state.history.push({id:qq.id,paper:qq.paper,topic:qq.topic,correct,ts:Date.now(),mode:s.mode});
  if(!correct){const m=state.mistakes[qq.id]||{count:0};m.count++;m.last=Date.now();state.mistakes[qq.id]=m; scheduleReview(qq.id,false)}else scheduleReview(qq.id,true);
  saveState();
  document.querySelectorAll('.option').forEach((b,idx)=>{b.disabled=true;if(idx===qq.answer)b.classList.add('correct');if(idx===i&&!correct)b.classList.add('wrong')});
  const fb=document.querySelector('#feedback');fb.className=`feedback ${correct?'good':'bad'}`;fb.innerHTML=`<strong>${correct?'Correct':'Incorrect'}.</strong> ${qq.explanation}`;document.querySelector('#nextBtn').style.display='inline-block';
}
function scheduleReview(id,correct){
  const r=state.reviews[id]||{stage:0,due:0}; if(correct) r.stage=clamp(r.stage+1,0,4); else r.stage=0;
  const days=[1,3,7,14,30][r.stage]||30; r.due=Date.now()+days*86400000;state.reviews[id]=r;
  if(correct && r.stage>=2) delete state.mistakes[id];
}
function nextQuestion(){if(currentSession.index+1>=currentSession.questions.length)finishSession();else{currentSession.index++;renderQuestion()}}
function finishSession(){
  if(!currentSession)return;clearInterval(timerHandle);const s=currentSession,score=pct(s.score,s.questions.length);
  if(s.mode==='topicTest'&&s.meta.topic){const prev=state.topicTests[s.meta.topic]||{best:0,attempts:0};prev.best=Math.max(prev.best,score);prev.attempts++;prev.last=Date.now();state.topicTests[s.meta.topic]=prev;saveState()}
  document.querySelector('#view-practice').innerHTML=`<div class="question-shell"><div class="card"><h2>Session complete</h2><div class="stat-value">${score}%</div><p>${s.score} correct out of ${s.questions.length}.</p><div class="progress"><span style="width:${score}%"></span></div><p class="muted">${score>=80?'Strong result. Keep it with delayed review before calling it secure.':score>=60?'Useful attempt, but this topic is not stable yet. Review mistakes and retest.':'This is a weakness signal. Return to the concept, then retry a shorter drill before another test.'}</p><div class="row"><button class="primary" onclick="navigate('dashboard')">Dashboard</button><button class="secondary" onclick="navigate('mistakes')">Review mistakes</button></div></div></div>`;currentSession=null;renderDashboard();renderSyllabus();renderMistakes();
}
function updateTimer(){const el=document.querySelector('#timer');if(!el||!currentSession)return;let s=currentSession.seconds;el.textContent=`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
function toggleBookmark(id){state.bookmarks[id]=!state.bookmarks[id];saveState();renderQuestion()}

function exportProgress(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='asi-fpb-progress.json';a.click();URL.revokeObjectURL(a.href)}
function importProgress(){const f=document.querySelector('#importFile').files[0];if(!f)return toast('Choose a JSON file first.');const r=new FileReader();r.onload=()=>{try{state={...defaults(),...JSON.parse(r.result)};saveState();renderAll();toast('Progress imported.')}catch{toast('Invalid progress file.')}};r.readAsText(f)}
function resetProgress(){if(!confirm('Delete all local progress?'))return;state=defaults();saveState();renderAll();toast('Progress reset.')}
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}

const TITLES={dashboard:['Dashboard','Train by mastery, not by chapter completion.'],learn:['Learn','Official syllabus → concepts → shortcuts → traps → questions.'],strategy:['Exam Strategy','Paper execution, time management, mastery and revision plan.'],syllabus:['Syllabus','Every official topic mapped into a trackable unit.'],practice:['Practice','Instant correction, explanations and review scheduling.'],tests:['Tests & Mocks','Move from topic tests to realistic timed papers.'],mistakes:['Mistake Book','Your weak points should become tomorrow’s revision list.'],alerts:['Press Notes','Official TGPRB updates + separate email-alert status.'],settings:['Data & Settings','Keep your progress portable and under your control.']};
function navigate(view){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.querySelector(`#view-${view}`).classList.add('active');document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));document.querySelector('#pageTitle').textContent=TITLES[view][0];document.querySelector('#pageSubtitle').textContent=TITLES[view][1];document.querySelector('#sidebar').classList.remove('open')}
function renderAll(){renderDashboard();renderLearn();renderStrategy();renderSyllabus();renderPractice();renderTests();renderMistakes();renderAlerts();renderSettings()}
renderAll();
document.querySelector('#nav').addEventListener('click',e=>{const b=e.target.closest('.nav-btn');if(b)navigate(b.dataset.view)});
document.querySelector('#menuBtn').onclick=()=>document.querySelector('#sidebar').classList.toggle('open');
document.querySelector('#quickPractice').onclick=()=>{const pool=shuffle(QUESTION_BANK.filter(q=>q.paper==='P2'||q.paper==='P3'));startSession(pool.slice(0,10),'practice',{})};