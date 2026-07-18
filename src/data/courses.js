import catHero from "../assets/cat.jpg";
import clatHero from "../assets/clat.jpg";
import ipmatHero from "../assets/ipmat.jpg";
import mbaCetHero from "../assets/mba-cet.jpg";
import mcaCetHero from "../assets/mca-cet.jpg";
import crtHero from "../assets/crt.jpg";
import cuetHero from "../assets/cuet.jpg";
import setHero from "../assets/set.jpg";
import p1 from "@/assets/naman-air1.jpeg";

// KAT Experts — Course content extracted from https://katexperts.com
// Each course preserves its own unique content from the source pages.

// Testimonials — shared brand testimonials from KAT Experts homepage.
export const testimonials = [
  { name: "Khushi Yadav", image: "https://katexperts.com/wp-content/uploads/2025/04/Untitled-design-54.jpg", quote: "Krish sir is the most incredible teacher I ever came across. His unique teaching style helped us to gain clarity of all concepts. He guides us like our own elder brother. Felt really grateful to have him as our mentor." },
  { name: "Rupali Kale", image: "https://katexperts.com/wp-content/uploads/2026/06/b05de27f-b5e8-4089-b02f-29905aac45e8.jpg", quote: "I am grateful to KATexpert for providing the right mentorship, quality resources, and continuous motivation throughout my MCA CET preparation. Their guidance contributed greatly to my success of securing 97.7 percentile." },
  { name: "Shimant Bijwe", image: "https://katexperts.com/wp-content/uploads/2026/06/1f96c26a-f23e-4959-9fde-4330b1b98bc5.jpg", quote: "The interactive Kat expert classes made learning enjoyable and helped me stay engaged throughout the course, their proper direction made me to achieve the goal." },
  { name: "Janhavi Pawaday", image: "https://katexperts.com/wp-content/uploads/2026/06/e3d700df-7c44-432c-a955-32c48547211e.jpg", quote: "I am grateful to the teachers and staff of Kat Expert for their support and guidance. I joined later than most students but teachers helped me to cover my syllabus. I am happy to have scored 88% and I sincerely thank the team for their constant support." },
  { name: "Nandini Trivedi", image: "https://katexperts.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-4.26.56-PM.jpeg", quote: "Learning from Arumita ma'am has been one of the most enriching experiences of my life. Her passion for teaching and her unique ability to make complex concepts feel simple truly set her apart." },
  { name: "Pawan Chandiramani", image: "https://katexperts.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-26-at-7.04.47-PM.jpeg", quote: "Learning under Krish Sir has been one of the best parts of my preparation journey. He treats every student like family. His personal attention, constant guidance, and genuine care for our progress make a huge difference." },
  { name: "Vidhi Agrawal", image: "https://katexperts.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-9.35.33-PM.jpeg", quote: "Some teachers leave a mark that stays with you forever — Krish Sir is one of them. His kindness, patience, and genuine care made learning feel exciting and safe. The best sir ever I met in my life." },
  { name: "Rimjhim Singh", image: "https://katexperts.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-26-at-7.38.17-PM.jpeg", quote: "It has been a privilege to learn under the guidance of Krish Sir. He fosters a learning environment that encourages critical thinking, discipline, and personal growth." },
];

export const brandFaqs = [
  { q: "What are the benefits of joining KATexpert?", a: "Joining KATexpert provides expert faculty, a structured curriculum, personalized attention, and high-quality study materials. Students benefit from regular assessments, flexible learning options, and dedicated doubt resolution. The competitive environment and career guidance help ensure effective preparation and success in IIM and NLU entrance exams." },
  { q: "How can I enroll in a course?", a: "You can enroll by visiting our website and filling out the registration form. Alternatively, you can contact our admissions team via phone or email for assistance with the enrollment process." },
  { q: "What is the fee structure?", a: "Our fee structure varies based on the course and duration. Detailed fee information can be obtained by contacting our admissions team at +91 95523 88015 or +91 99757 17636." },
  { q: "Do you offer online mocks?", a: "Yes, we offer online mocks for various courses to help students assess their preparation. These mock tests are designed to simulate real exam conditions and can be accessed from anywhere." },
];

export const galleryPool = [
  "https://katexperts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-27-at-12.52.52-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-27-at-12.52.50-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-27-at-12.52.49-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-27-at-12.52.48-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-10.22.47-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-10.22.46-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-10.24.41-PM.jpeg",
  "https://katexperts.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-10.24.44-PM.jpeg",
];

const cat = {
  slug: "cat",
  code: "CAT",
  name: "Common Admission Test",
  tagline: "Your gateway to the IIMs and top B-schools of India.",
  heroImage: catHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/CAT.png",
  description:
    "The Common Admission Test (CAT) is a national-level entrance examination conducted annually for admission into postgraduate management programs. It is primarily used for entry into the prestigious Indian Institutes of Management (IIMs) and several other top business schools across India.",
  highlights: [
    "Full-length mocks & sectionals",
    "Personalised mentorship by IIM alumni",
    "Comprehensive printed study material",
    "Regular current affairs & GD-PI prep",
  ],
  overview: [
    { label: "Duration", value: "10 – 18 Months" },
    { label: "Learning Mode", value: "Offline Classroom" },
    { label: "Batch Starts", value: "August 2027" },
    { label: "Mock Tests", value: "Topic wise and sectional mocks" },
    { label: "Mentorship", value: "1-on-1 Personal" },
    { label: "Material", value: "Printed + Online" },
  ],
  whyChoose: [
    { title: "Expert Faculty", description: "Workshops, guest lectures and one-on-one mentoring by CAT toppers and IIM, JBIMS & top B-school alumni." },
    { title: "Personalised Study Plans", description: "Roadmaps designed around your individual strengths and weaknesses." },
    { title: "Daily Practice & Doubt Solving", description: "Topic-wise assignments and daily practice questions with continuous doubt clearing." },
    { title: "Regular Mocks & Analysis", description: "Detailed post-mock analysis to track progress and fine-tune your strategy." },
    { title: "Profile Building", description: "One-on-one mentorship and profile building for B-school applications and interviews." },
    { title: "GD | PI | WAT Preparation", description: "WAT on time management, strategy and GD-PI for the final selection process." },
    { title: "Intership Program", description: "We provide internships as required by your college —through KatExpert’s tie-ups with organizations — timed around your CAT prep so your exam preparation stays smooth and uninterrupted." },
  ],
  journey: [
    { title: "Foundation", description: "Core concepts across VARC, DILR and QA." },
    { title: "Concept Building", description: "Structured classroom teaching with in-class practice." },
    { title: "Practice", description: "Daily practice questions and topic-wise assignments." },
    { title: "Mock Tests", description: "Full-length CAT mocks under real exam conditions." },
    { title: "Analysis & Revision", description: "Detailed mock analysis and targeted revision." },
    { title: "GD-PI-WAT", description: "Interview and profile-building workshops." },
    { title: "Success", description: "IIM & top B-school admissions." },
  ],
  curriculum: [
    {
      title: "Verbal Ability & Reading Comprehension (VARC)",
      items: [
        "Grammar and vocabulary fundamentals",
        "Reading comprehension strategy",
        "Para-jumbles, para-summary and odd-one-out",
        "Verbal reasoning and inference",
      ],
    },
    {
      title: "Data Interpretation & Logical Reasoning (DILR)",
      items: [
        "Analytical thinking and puzzles",
        "Data sets, tables, charts and caselets",
        "Logical arrangements and games",
        "Speed strategies for set selection",
      ],
    },
    {
      title: "Quantitative Aptitude (QA)",
      items: [
        "Arithmetic and number systems",
        "Algebra and equations",
        "Geometry and mensuration",
        "Modern math and advanced problem solving",
      ],
    },
  ],
  resources: [
    { title: "Printed Study Material" },
    { title: "Full length mocks / sectional mocks / topic wise mocks" },
    // { title: "Sectional Tests" },
    { title: "Current Affairs / GK Sessions" },
    { title: "Personalised Mentorship" },
    { title: "Doubt Solving Sessions" },
    { title: "Daily target groups" },
    { title: "Speaking club" },
    { title: "Read and Grow club" },
    { title: "Guest lectures/ expert workshops" },
  ],
  results: [
    { label: "Highest Package (IIM A/B/C)", value: "₹70 LPA – ₹1.46 Cr" },
    { label: "Average Package (Top IIMs)", value: "₹20 – 25 LPA" },
    { label: "Newer IIMs Highest", value: "₹30 – 70 LPA" },
    { label: "Newer IIMs Average", value: "₹10 – 20 LPA" },
  ],
  extraSections: [
    {
      heading: "Top Colleges Accepting CAT Scores",
      body: [
        "Indian Institutes of Management (IIMs): Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore and more",
        "Faculty of Management Studies (FMS), Delhi",
        "SP Jain Institute of Management and Research (SPJIMR), Mumbai",
        "Management Development Institute (MDI), Gurgaon",
        "Indian Institute of Foreign Trade (IIFT), Delhi & Kolkata",
        "National Institute of Industrial Engineering (NITIE) / IIM Mumbai",
        "Department of Management Studies (DoMS), IITs",
        "Xavier Institute of Management (XIM), Bhubaneswar",
      ],
    },
    {
      heading: "What We Do at KATexpert",
      body: [
        "A comprehensive and result-oriented CAT preparation program that caters to students from all academic backgrounds.",
        "Workshops, guest lectures and one-on-one mentoring by CAT toppers and IIM, JBIMS and top B-school alumni.",
        "Personalized study plans based on your strengths and weaknesses.",
        "Daily practice questions and doubt solving, including topic-wise assignments.",
        "Regular mocks and detailed analysis to track progress and fine-tune strategy.",
        "One-on-one mentorship and profile building for B-school applications and interviews.",
        "Workshops on time management, strategy, and GD-PI preparation for the final selection process.",
      ],
    },
  ],
  faqs: [
    { q: "What are the key subjects covered in CAT preparation?", a: "CAT preparation covers three sections — Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Aptitude (QA). Each section is taught with a balance of concept, practice and mock analysis." },
    { q: "How can I effectively prepare for semester exams and CAT simultaneously?", a: "Create a balanced study schedule that covers both your semester syllabus and CAT topics. Focus on understanding core concepts, practise problem-solving regularly, and take mock tests. Use study materials aligned with both curricula to ensure comprehensive preparation." },
    ...brandFaqs,
  ],
  cta: { heading: "Ready to start your IIM journey?", sub: "Join KATexpert's flagship CAT program and take your first step toward the top B-schools of India." },
};

const clat = {
  slug: "clat",
  code: "CLAT",
  name: "Common Law Admission Test",
  tagline: "Classroom-centric, mentor-driven CLAT preparation for admission to the top NLUs.",
  heroImage: clatHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/CLAT.png",
  description:
    "KATexpert's CLAT Offline Coaching Program is designed to help aspirants crack the Common Law Admission Test through expert-led classroom teaching, personalized study plans and individual mentoring. Targeted strategy sessions, concept-focused learning and proctored full-length mock tests in real exam-like conditions build the accuracy, speed and confidence required to secure admission to the top National Law Universities (NLUs).",
  highlights: [
    "Expert-led offline classroom teaching",
    "1-on-1 personalised mentorship",
    "Proctored full-length mock tests",
    "Structured concept + practice cycle",
  ],
  overview: [
    { label: "Program", value: "CLAT Offline" },
    { label: "Learning Mode", value: "Classroom" },
    { label: "Mentorship", value: "Personalised 1-on-1" },
    { label: "Mocks", value: "Proctored Full-length" },
    { label: "Faculty", value: "Trained CLAT Experts" },
    { label: "PTMs", value: "Regular" },
  ],
  whyChoose: [
    { title: "Personalised Learning Journey", description: "Tailor-made mentorship sessions aligned with each student's learning needs with continuous academic and strategic support." },
    { title: "Classroom-Centric Methodology", description: "Structured, concept-driven classroom approach delivered through a comprehensive long-term learning framework." },
    { title: "Top Educators", description: "Faculty undergo a rigorous training program to ensure high-quality, consistent classroom delivery with expertise, dedication and passion." },
    { title: "Dedicated WhatsApp Group", description: "Exclusive WhatsApp group for peer interaction, doubt-solving, timely guidance from mentors and staying motivated with the study community." },
    { title: "Doubt Clearing Sessions", description: "Dedicated time with experienced faculty to resolve academic queries, clarify concepts and strengthen weak areas." },
    { title: "Parent–Teacher Meetings", description: "Regular PTMs encourage open communication between parents, teachers and students to review academic progress." },
    { title: "Performance Analysis", description: "Comprehensive performance reports help you understand your strengths and identify areas for improvement." },
    { title: "Legal Updates & Quizzes", description: "Regularly updated legal news, articles and quizzes to strengthen your GK, current affairs and legal awareness." },
    { title: "Full-Length Mock Tests", description: "All India Mock Tests that simulate the actual exam, help measure performance against peers and build confidence." },
  ],
  journey: [
    { title: "In-Class Concept Learning", description: "Detailed classroom sessions conducted by experienced CLAT faculty." },
    { title: "Post-Class Practice", description: "Topic-wise exercises to strengthen understanding and application." },
    { title: "Regular Assessments", description: "Benchmarking tests to track progress and identify improvement areas." },
    { title: "Periodic Module Tests", description: "Comprehensive evaluations conducted at regular intervals." },
    { title: "Full-Length Mocks", description: "All India Mock Tests simulating the real CLAT experience." },
    { title: "Performance Analysis", description: "Detailed post-mock reviews to refine strategy." },
    { title: "NLU Admission", description: "Confidence and readiness for the top National Law Universities." },
  ],
  curriculum: [
    {
      title: "Verbal Ability & Reading Comprehension",
      items: [
        "Strong foundation in English usage, grammar and vocabulary",
        "Focused reading comprehension strategies for CLAT-length passages",
        "Guidance for students who find English intimidating",
        "Techniques to build accuracy and reading speed together",
      ],
    },
    {
      title: "General Knowledge & Current Affairs",
      items: [
        "Structured tracking of global and Indian current affairs",
        "Curated updates to keep aspirants informed month after month",
        "Focused GK sessions by trained CLAT faculty",
        "Practice quizzes and revision handouts",
      ],
    },
    {
      title: "Quantitative Ability",
      items: [
        "Fundamentals to help students overcome fear of math",
        "Special shortcut tips for large calculations under time pressure",
        "CLAT-specific quant problem sets and data interpretation",
        "Regular timed practice",
      ],
    },
    {
      title: "Legal Reasoning",
      items: [
        "Structured legal aptitude coaching — one of KATexpert's strongest verticals",
        "Principle–fact based questions and reasoning approaches",
        "Coverage of key legal concepts and current legal developments",
        "Practice sets designed around latest CLAT trends",
      ],
    },
    {
      title: "Logical Reasoning",
      items: [
        "Every topic likely to appear in CLAT covered in class",
        "Speed-solving methods for critical reasoning and analytical puzzles",
        "CLAT-format mock questions after every module",
        "Regular timed logical reasoning drills",
      ],
    },
  ],
  resources: [
    { title: "Classroom-Centric Study Framework" },
    { title: "Printed Legal Reasoning Material" },
    { title: "Regular Legal Updates & Quizzes" },
    { title: "All India Mock Tests" },
    { title: "Doubt Clearing Sessions" },
    { title: "Dedicated WhatsApp Support" },
    { title: "Parent–Teacher Meetings" },
    { title: "Detailed Performance Reports" },
  ],
  faqs: [
    { q: "Is the CLAT program fully offline?", a: "Yes — the CLAT program at KATexpert is delivered through offline classroom teaching. Doubt clearing, mocks, PTMs and mentorship are all conducted in person, with a WhatsApp group for updates and support." },
    { q: "How is legal reasoning taught?", a: "Legal reasoning is one of our strongest verticals. Very few institutions in India offer structured legal aptitude tutoring; our faculty covers principle-fact based questions, key legal concepts and current legal developments through class discussions and regular practice sets." },
    ...brandFaqs,
  ],
  cta: { heading: "Ready to crack CLAT and enter a top NLU?", sub: "Join KATexpert's classroom-centric CLAT program with personalised mentorship, mocks and legal reasoning by trained experts." },
};

const ipmat = {
  slug: "ipmat",
  code: "IPMAT",
  name: "Integrated Program in Management Aptitude Test",
  tagline: "Fully offline, mentor-driven IPMAT preparation with structured modules and updated printed courseware.",
  heroImage: ipmatHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/IPMAT.png",
  description:
    "The KATexpert IPMAT program is delivered fully offline through structured learning modules combining classroom concept teaching, guided problem-solving, in-class practice, short chapter tests and combined module tests — ensuring discipline, conceptual clarity and steady progress.",
  highlights: [
    "1-on-1 structured mentorship",
    "Fully offline modular program",
    "Updated printed courseware",
    "GD/PI/WAT preparation included",
  ],
  overview: [
    { label: "Learning Mode", value: "Fully Offline" },
    { label: "Mentorship", value: "1-on-1 Personal Mentor" },
    { label: "Material", value: "Printed Books & Worksheets" },
    { label: "Tests", value: "Chapter + Module + Mocks" },
    { label: "GD/PI/WAT", value: "Included" },
    { label: "Support", value: "Offline classes, doubt solving sessions and daily target groups." },
  ],
  whyChoose: [
    { title: "1-on-1 Structured Mentorship", description: "Every student is assigned a personal mentor who guides them throughout the preparation journey — study planning, doubt-solving, performance improvement and exam strategy, all offline and personalised." },
    { title: "Classroom Concept Teaching", description: "Structured modules with detailed in-class concept teaching by experienced faculty." },
    { title: "Guided Problem Solving", description: "Guided practice on curated question sets under mentor supervision." },
    { title: "In-Class Practice Exercises", description: "Hands-on practice exercises within class to build application skills." },
    { title: "Short Tests After Every Topic", description: "Instant reinforcement of concepts through quick chapter-end tests." },
    { title: "Combined Module Tests", description: "A comprehensive module test at the end of each module to check overall mastery." },
    { title: "Updated Printed Courseware", description: "Printed books with theory explanations, solved examples, practice questions and in-class exercises." },
    { title: "Full Syllabus Mock Tests", description: "Offline mocks reflecting actual exam patterns, difficulty levels and timings — for IPMAT, JIPMAT, CUET, NPAT, SET, Christ, MSUET, XET, MAH-CET (BBA/BMS/BBM), Ashoka, Krea, FLAME, Jindal." },
  ],
  journey: [
    { title: "Classroom Concept Teaching", description: "Structured, module-based classroom sessions." },
    { title: "Guided Problem Solving", description: "Mentor-supervised problem solving." },
    { title: "In-Class Practice", description: "Application-focused in-class exercises." },
    { title: "Chapter Tests", description: "Short tests at the end of every topic." },
    { title: "Module Tests", description: "Comprehensive combined module tests." },
    { title: "Full-Length Mocks", description: "Timed, exam-like mock tests with mentor review." },
    { title: "Masterclasses", description: "Post-board masterclasses on advanced techniques and last-phase strategy." },
    { title: "GD / PI / WAT", description: "Structured interview and written ability preparation." },
    { title: "Success", description: "Admission to top integrated management programs." },
  ],
  curriculum: [
    {
      title: "Concept & Practice Classes",
      items: [
        "Concept classes for complete topic explanation",
        "Practice sessions for solving different types of questions",
        "Doubt-solving hours for personalised attention",
        "Focus on both conceptual clarity and exam-ready speed",
      ],
    },
    {
      title: "In-Class Learning",
      items: [
        "Updated printed worksheets",
        "Step-by-step explanation of concepts",
        "Shortcut methods & exam-specific approaches",
        "Exercises solved in class under mentor supervision",
        "Quick chapter tests for instant reinforcement",
      ],
    },
    {
      title: "GK Zone (Offline Material)",
      items: [
        "Exam-wise GK notes",
        "General awareness handouts",
        "Distributed physically or via WhatsApp — no online portal required",
      ],
    },
    {
      title: "Masterclasses (Post Board Exams)",
      items: [
        "Advanced techniques",
        "Exam-level questions",
        "Last-phase strategy",
        "Mock paper discussion",
      ],
    },
    {
      title: "KATexpert Sessions",
      items: [
        "Form-filling guidance",
        "Exam updates",
        "Attempt strategy",
        "College selection planning",
      ],
    },
  ],
  resources: [
    { title: "Printed Books & Worksheets" },
    { title: "Solved Examples & Practice Questions" },
    { title: "In-Class Exercises" },
    { title: "Chapter & Module Tests" },
    { title: "Full length/sectional/topic wise mocks" },
    { title: "Dedicated Daily Target Group" },
    { title: "GK Handouts" },
    { title: "Masterclasses" },
  ],
  extraSections: [
    {
      heading: "Full Syllabus Mock Tests — Exams Covered",
      body: [
        "IPMAT Indore",
        "IPMAT Rohtak",
        "JIPMAT",
        "CUET",
        "NPAT",
        "SET",
        "Christ",
        "MSUET",
        "St. Xavier's (XET)",
        "MAH-CET (BBA/BMS/BBM)",
        "Ashoka, Krea, FLAME, Jindal",
      ],
    },
    {
      heading: "Personal Interview (PI) Preparation",
      body: [
        "One-on-one mock interviews with expert faculty and IIM alumni",
        "Feedback on communication, personality and content",
        "Guidance on resume building",
        "Stress interview training and confidence building",
        "Techniques to stay calm during stress interviews",
      ],
    },
    {
      heading: "Written Ability Test (WAT) Training",
      body: [
        "Practice on trending WAT topics",
        "Structure-building techniques (Intro–Body–Conclusion)",
        "Grammar, clarity and argument-building improvement",
        "Evaluation with detailed feedback",
        "Model essays and high-scoring samples",
      ],
    },
    {
      heading: "Group Discussion (GD) Sessions",
      body: [
        "Practice on current affairs, abstract and business topics",
        "Strategy to initiate, moderate and conclude discussions",
        "Techniques to speak confidently in a group",
        "Focus on teamwork, critical thinking and articulation",
      ],
    },
  ],
  faqs: [
    { q: "Is the IPMAT program fully offline?", a: "Yes. The IPMAT program is delivered fully offline through structured modules. All practice, revision and doubt solving happens through physical books and classroom interaction. A batch-wise WhatsApp group is provided only for updates, reminders and mentor support." },
    { q: "Which exams are covered under the IPMAT program?", a: "The IPMAT program covers offline mock tests for IPMAT Indore, IPMAT Rohtak, JIPMAT, CUET, NPAT, SET, Christ, MSUET, St. Xavier's (XET), MAH-CET (BBA/BMS/BBM), Ashoka, Krea, FLAME and Jindal." },
    ...brandFaqs,
  ],
  cta: { heading: "Ready to build your integrated management future?", sub: "Join KATexpert's fully offline IPMAT program with a personal mentor, printed courseware and structured module tests." },
};

const mbaCet = {
  slug: "mba-cet",
  code: "MBA CET",
  name: "Maharashtra MBA Common Entrance Test",
  tagline: "All-inclusive MBA CET preparation targeting JBIMS, SIMSREE, PUMBA, Welingkar and Maharashtra's top B-schools.",
  heroImage: p1,
  logo: p1,
  description:
    "Prepare for Maharashtra's top B-schools with our all-inclusive MBA CET Test Series designed for serious aspirants targeting JBIMS, SIMSREE, PUMBA, Welingkar and other leading institutes.",
  highlights: [
    "25 full-length MBA CET mock tests",
    "100+ topic-wise practice tests",
    "14 sectional tests",
    "Smart Study Planner & Challenge Zone",
  ],
  overview: [
    { label: "Full-Length Mocks", value: "25" },
    { label: "Topic Tests", value: "100+" },
    { label: "Sectional Tests", value: "14" },
    { label: "Learning Tools", value: "Study Planner + Challenge Zone" },
    { label: "Target B-Schools", value: "JBIMS, SIMSREE, PUMBA, Welingkar" },
  ],
  whyChoose: [
    { title: "25 Full-Length MBA CET Mocks", description: "Simulate the real exam with accurate pattern, difficulty level and time pressure." },
    { title: "100+ Topic-Wise Practice Tests", description: "Strengthen every concept with focused drills and unlimited practice." },
    { title: "14 Sectional Tests", description: "Sharpen your performance in Quant, Verbal Ability, Logical Reasoning, Visual Reasoning and Data Interpretation." },
    { title: "Challenge Zone", description: "A high-energy practice zone where you compete with peers, track your rank and learn in a game-like environment while improving speed and accuracy." },
    { title: "Smart Study Planner", description: "An adaptive practice tool that helps you stay consistent and exam-ready with a structured daily plan." },
  ],
  journey: [
    { title: "Set Your Deadline", description: "Fix your exam timeline and plan backwards." },
    { title: "Meet Daily Goals", description: "Follow personalised target checklists for steady progress." },
    { title: "Tag Questions", description: "Mark important, tricky or doubtful questions for quick revision." },
    { title: "Adjust Daily Effort Level", description: "Increase or reduce workload based on your schedule." },
    { title: "Revise Regularly", description: "Reinforce concepts and improve retention with smart revision cycles." },
    { title: "Compete in Challenge Zone", description: "Practice under real exam pressure with peer competition." },
    { title: "Full-Length Mocks", description: "Simulate the real MBA CET with accurate pattern and time pressure." },
    { title: "Admission to Top B-Schools", description: "JBIMS, SIMSREE, PUMBA, Welingkar and more." },
  ],
  curriculum: [
    {
      title: "Sectional Focus Areas",
      items: [
        "Quantitative Aptitude",
        "Verbal Ability",
        "Logical Reasoning",
        "Visual Reasoning",
        "Data Interpretation",
      ],
    },
    {
      title: "Smart Study Planner — How to Use",
      items: [
        "Tag Questions — mark important, tricky or doubtful questions for quick revision",
        "Meet Daily Goals — follow personalised target checklists for steady progress",
        "Revise Regularly — reinforce concepts and improve retention with smart revision cycles",
        "Adjust Daily Effort Level — increase or reduce workload based on your schedule",
        "Set Your Deadline — fix your exam timeline and plan backwards",
      ],
    },
  ],
  resources: [
    { title: "25 Full-Length MBA CET Mocks" },
    { title: "100+ Topic-Wise Practice Tests" },
    { title: "14 Sectional Tests" },
    { title: "Challenge Zone" },
    { title: "Smart Study Planner" },
    { title: "Dedicated daily target whatspp groups" },
  ],
  brochureUrl: "https://katexperts.com/wp-content/uploads/2025/12/CET-Syllabus.docx_compressed.pdf",
  faqs: [
    { q: "How many mock tests does the MBA CET program include?", a: "The program includes 25 full-length MBA CET mock tests that simulate the real exam pattern, difficulty and time pressure, along with 14 sectional tests and 100+ topic-wise practice tests." },
    { q: "What is the Challenge Zone?", a: "The Challenge Zone is a high-energy gamified practice arena where you compete with peers, track your rank and improve speed and accuracy — designed to make repeated practice more engaging." },
    { q: "What is the Smart Study Planner?", a: "The Smart Study Planner is an adaptive practice tool that helps you set your exam deadline, meet daily goals, tag important questions, adjust workload and revise regularly — keeping preparation consistent." },
    ...brandFaqs,
  ],
  cta: { heading: "Target JBIMS, SIMSREE, PUMBA and Welingkar with confidence.", sub: "Join KATexpert's all-inclusive MBA CET Test Series with 25 mocks, 100+ topic tests and adaptive study tools." },
};

const mcaCet = {
  slug: "mca-cet",
  code: "MCA CET",
  name: "Maharashtra MCA Common Entrance Test",
  tagline: "A comprehensive MCA CET test series for aspirants targeting top MCA colleges across Maharashtra.",
  heroImage: mcaCetHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/MCA-CET.png",
  description:
    "Prepare smarter with our comprehensive MCA CET Test Series, featuring 25+ full-length mock tests and 100+ topic-wise practice tests — the perfect toolkit for aspirants aiming for the top MCA colleges across Maharashtra.",
  highlights: [
    "25 full-length MCA CET mocks",
    "100+ topic-wise practice tests",
    "Challenge Zone with real-time feedback",
    "Adaptive Smart Study Planner",
  ],
  overview: [
    { label: "Full-Length Mocks", value: "25" },
    { label: "Topic Tests", value: "100+" },
    { label: "Target", value: "Top MCA Colleges, Maharashtra" },
    { label: "Learning Tools", value: "Study Planner + Challenge Zone" },
    { label: "Feedback", value: "Real-time" },
    { label: "Syllabus PDF", value: "Downloadable" },
  ],
  whyChoose: [
    { title: "25+ Full-Length MCA CET Mocks", description: "Experience the exact exam pattern with realistic difficulty and timing." },
    { title: "100+ Topic-Wise Practice Tests", description: "Strengthen every chapter in Mathematics, Logical Reasoning, English, Quants and Computer Applications." },
    { title: "Challenge Zone", description: "Boost your performance in a competitive gamified space — solve, challenge peers, improve speed and learn with real-time feedback." },
    { title: "Smart Study Planner", description: "A personalised practice tool that helps you plan, stay consistent and track your progress effortlessly." },
    { title: "Dedicated Daily Target group", description: "Daily Target Groups to accomplish." },
  ],
  journey: [
    { title: "Set Your Deadline", description: "Fix your exam timeline." },
    { title: "Meet Daily Goals", description: "Stay consistent with small, achievable targets." },
    { title: "Adjust Effort Levels", description: "Increase or reduce workload as per your schedule." },
    { title: "Tag Questions", description: "Mark tricky or important questions for quick revision." },
    { title: "Revise Smartly", description: "Reinforce concepts and improve retention." },
    { title: "Compete in Challenge Zone", description: "Real-time feedback in a gamified environment." },
    { title: "Full-Length Mocks", description: "Simulate the real MCA CET." },
    { title: "MCA Admission", description: "Top MCA colleges across Maharashtra." },
  ],
  curriculum: [
    {
      title: "Sectional Coverage",
      items: [
        "Mathematics",
        "Logical Reasoning",
        "English",
        "Quants",
        "Computer Applications",
      ],
    },
    {
      title: "Smart Study Planner — How It Works",
      items: [
        "Set Your Deadline — fix your exam timeline",
        "Meet Daily Goals — stay consistent with small, achievable targets",
        "Adjust Effort Levels — increase or reduce workload as per your schedule",
        "Tag Questions — mark tricky or important questions for quick revision",
        "Revise Smartly — reinforce concepts and improve retention",
      ],
    },
  ],
  resources: [
    { title: "25 Full-Length MCA CET Mocks" },
    { title: "100+ Topic-Wise Practice Tests" },
    { title: "Challenge Zone" },
    { title: "Smart Study Planner" },
  ],
  brochureUrl: "https://katexperts.com/wp-content/uploads/2025/12/MCA-CET-Syllabus.docx-1_compressed.pdf",
  faqs: [
    { q: "Which chapters does the MCA CET topic-test bank cover?", a: "The 100+ topic-wise practice tests strengthen every chapter across Mathematics, Logical Reasoning, English, Quants and Computer Applications." },
    { q: "What is the Challenge Zone in the MCA CET program?", a: "The Challenge Zone is a gamified space where you solve problems, challenge peers, get real-time feedback and improve speed under competitive pressure." },
    ...brandFaqs,
  ],
  cta: { heading: "Aim for the top MCA colleges of Maharashtra.", sub: "Get exam-ready with 25 MCA CET mocks, 100+ topic-wise tests and an adaptive Smart Study Planner." },
};

const crt = {
  slug: "crt",
  code: "CRT",
  name: "Campus Recruitment Training",
  tagline: "A specialised program to prepare you for placement drives — from written tests to HR interviews.",
  heroImage: crtHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/CRT.png",
  description:
    "Campus Recruitment Training (CRT) is a specialized program designed to prepare students for placement drives conducted by companies during campus recruitment. The goal is to equip students with the necessary skills to confidently crack written tests, group discussions, technical interviews and HR rounds.",
  highlights: [
    "Written test preparation",
    "Group Discussion training",
    "Technical interview prep",
    "HR round mock interviews",
  ],
  overview: [
    { label: "Program", value: "Campus Recruitment Training" },
    { label: "Focus", value: "Placement Readiness" },
    { label: "Includes", value: "Mocks, Sectionals, Study Material" },
    { label: "Mentorship", value: "Personalised" },
    { label: "Current Affairs", value: "Included" },
    { label: "Learning Mode", value: "Classroom" },
  ],
  whyChoose: [
    { title: "Written Test Preparation", description: "Aptitude, reasoning and technical MCQs designed for company placement patterns." },
    { title: "Group Discussion Training", description: "Practice on current affairs, business and abstract topics with articulation strategy." },
    { title: "Technical Interview Prep", description: "Domain-focused technical interview practice with expert feedback." },
    { title: "HR Round Mocks", description: "One-on-one HR interview mocks with feedback on communication, personality and content." },
    { title: "Full-Length Mocks", description: "Simulated placement-style assessments to build stamina and accuracy." },
    { title: "Personalised Mentorship", description: "Individual guidance to sharpen your profile and interview presence." },
  ],
  journey: [
    { title: "Foundation", description: "Aptitude, reasoning and communication fundamentals." },
    { title: "Written Test Prep", description: "Sectional and full-length mocks for company patterns." },
    { title: "Group Discussion", description: "Regular GD practice on current, business and abstract topics." },
    { title: "Technical Interview", description: "Domain-focused mock interviews and feedback." },
    { title: "HR Round", description: "Personality, communication and stress-interview training." },
    { title: "Profile Building", description: "Resume, LinkedIn and answer framing." },
    { title: "Placement Success", description: "Confidence-ready for campus and off-campus drives." },
  ],
  curriculum: [
    {
      title: "Course Details",
      items: [
        "Duration & Pricing — as per batch",
        "Batch Start Dates — announced periodically",
        "Key Focus Areas — Aptitude, Reasoning, GD, Tech & HR interviews",
        "Class Format — offline classroom",
      ],
    },
    {
      title: "What's Included",
      items: [
        "Full-length mocks",
        "Sectionals",
        "Study Material",
        "Current Affairs",
        "Personalized Mentorship",
      ],
    },
  ],
  resources: [
    { title: "Full-Length Mocks" },
    { title: "Sectional Tests" },
    { title: "Study Material" },
    { title: "Current Affairs Notes" },
    { title: "Personalised Mentorship" },
  ],
  faqs: [
    { q: "Who is the CRT program for?", a: "The Campus Recruitment Training program is for students preparing for placement drives — including written tests, group discussions, technical interviews and HR rounds — during campus recruitment." },
    { q: "What does the CRT program include?", a: "The program includes full-length mocks, sectional tests, structured study material, current affairs updates and personalized mentorship." },
    ...brandFaqs,
  ],
  cta: { heading: "Get placement-ready with confidence.", sub: "Join KATexpert's Campus Recruitment Training to crack written tests, GDs, technical rounds and HR interviews." },
};

const cuet = {
  slug: "cuet",
  code: "CUET",
  name: "CUET & MH - CET Classroom Program",
  tagline: "Program is an all-inclusive preparation package designed for students aiming to excel in both Common University Entrance Test (CUET UG) and Maharashtra CET (MH-CET).",
  heroImage: cuetHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/IPMAT.png",
  description:
    "The CUET & MH - CET Classroom Program is an all-inclusive preparation package designed for students aiming to excel in both the Common University Entrance Test (CUET UG) and the Maharashtra CET (MH-CET). This program offers structured concept building, physical classes, practice materials, and extensive full-length mock tests to ensure success.",
  highlights: [
    "General Aptitude preparation",
    "English Language drills",
    "General Awareness workshops",
    "Full-length mocks & analysis",
  ],
  overview: [
    { label: "Duration", value: "4 - 6 Months (Batches from October)" },
    { label: "Learning Mode", value: "Offline Classroom" },
    { label: "Mock Tests", value: "15+ Full-length" },
    { label: "Mentorship", value: "1-on-1 Personal" },
    { label: "Material", value: "Printed + Online" },
  ],
  whyChoose: [
    { title: "All-in-One Package", description: "Comprehensive coaching covering both CUET and MH-CET syllabi under one program." },
    { title: "Expert Guidance", description: "Learn from top educators who understand the test patterns of central and state-level exams." },
    { title: "Mock Series", description: "Regular mock tests simulating the actual exam environment with in-depth analysis." },
  ],
  journey: [
    { title: "Foundation", description: "Strengthening core concepts in language and general aptitude." },
    { title: "Concept building", description: "Classroom teaching focusing on syllabus topics." },
    { title: "Practice", description: "Solving daily practice sheets and chapter tests." },
    { title: "Mocks & Analysis", description: "Writing full-length mock tests and resolving doubts." },
  ],
  curriculum: [
    {
      title: "General Aptitude",
      items: [
        "Quantitative reasoning",
        "Logical and analytical reasoning",
        "Data interpretation",
      ],
    },
    {
      title: "English Language",
      items: [
        "Reading comprehension",
        "Vocabulary and grammar",
      ],
    },
  ],
  resources: [
    { title: "Concept Booklets" },
    { title: "Daily Practice Papers" },
    { title: "Full Syllabus Mocks" },
  ],
  faqs: [
    { q: "What is the duration of the CUET & MH-CET program?", a: "The program spans 4 - 6 months of intensive offline classroom training." },
    { q: "Which exams are covered?", a: "This program covers both the Central Universities Entrance Test (CUET UG) and the Maharashtra state CET." },
    ...brandFaqs,
  ],
  cta: { heading: "Prepare for top central & state universities.", sub: "Join the CUET & MH-CET classroom program at KATexpert today." },
};

const set = {
  slug: "set",
  code: "SET",
  name: "Symbiosis Entrance Test (SET)",
  tagline: "Your gateway for undergraduate admissions across prestigious Symbiosis institutes.",
  heroImage: setHero,
  logo: "https://katexperts.com/wp-content/uploads/2026/02/IPMAT.png",
  description:
    "The Symbiosis Entrance Test (SET – General) is conducted by Symbiosis International (Deemed University) and serves as the primary gateway for undergraduate admissions across various prestigious Symbiosis institutes including SLS, SSE, and SCMS.",
  highlights: [
    "General Awareness syllabus coverage",
    "Logical & Analytical Reasoning masterclass",
    "English Language skill refinement",
    "Mock test series with instant analytics",
  ],
  overview: [
    { label: "Duration", value: "4 - 6 months" },
    { label: "Learning Mode", value: "Offline Classroom" },
    { label: "Mock Tests", value: "15+ Full-length" },
    { label: "Mentorship", value: "1-on-1 Personal" },
    { label: "Material", value: "Printed + Online" },
  ],
  whyChoose: [
    { title: "Symbiosis Focused", description: "Specially designed mock tests and curriculum aligned with Symbiosis exam trends." },
    { title: "Mentorship", description: "Personal mentorship to guide you through both the written test and the personal interview rounds." },
  ],
  journey: [
    { title: "Concept building", description: "Structured coverage of general awareness, logic, and english sections." },
    { title: "Targeted Practice", description: "Solving mock papers tailored to SET pattern." },
  ],
  curriculum: [
    {
      title: "Sections Covered",
      items: [
        "General Awareness",
        "Logical and Analytical Reasoning",
        "Quantitative Aptitude",
        "English Language",
      ],
    },
  ],
  resources: [
    { title: "SET Practice Material" },
    { title: "Syllabus Books" },
    { title: "Mock Tests" },
  ],
  faqs: [
    { q: "What does the SET cover?", a: "It covers General English, Quantitative Aptitude, General Awareness, and Logical & Analytical Reasoning." },
    ...brandFaqs,
  ],
  cta: { heading: "Crack the Symbiosis Entrance Test.", sub: "Secure your admission in Symbiosis' premier undergraduate programs with KATexpert." },
};

export const courses = [cat, clat, ipmat, mbaCet, mcaCet, crt, cuet, set];
export const coursesBySlug = Object.fromEntries(
  courses.map((c) => [c.slug, c])
);
