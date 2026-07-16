import { GraduationCap, Scale, BookOpen, Briefcase, Building2, Target } from "lucide-react";

import faculty1 from "@/assets/faculty-1-aru.jpg"; 
import faculty2 from "@/assets/faculty-2-krish.jpg"; 
import facultySachin from "@/assets/sachin-sahu.png"; 



import p1 from "@/assets/arpit.JPG";
import p2 from "@/assets/chitwan-agrawal.jpg";
import p3 from "@/assets/dhruv-naseri.jpg";
import p4 from "@/assets/kasak-ahuja.jpg";
import p5 from "@/assets/kasak-wadhwani.jpg";
import p6 from "@/assets/naman-agrawal.jpg";
import p7 from "@/assets/radhi-bha.jpg";
import p8 from "@/assets/riddhi-bapte.jpg";
import p9 from "@/assets/rupali-kale.png";
import p10 from "@/assets/saniya-kamble.jpg";
import p11 from "@/assets/shrimant-bijwe.png";
import p12 from "@/assets/surabhi-jaiswal.jpg";
import p13 from "@/assets/vansh-katekhaye.jpg";
import p14 from "@/assets/vedant-kohat.jpg";
import p15 from "@/assets/vinay-khanija.jpg";
import p16 from "@/assets/janhavi-pawaday.jpg";
import p17 from "@/assets/kiran-kumar.png";
import p18 from "@/assets/chitwan-ag.png";
import p19 from "@/assets/nikita-ag.png";
import p20 from "@/assets/hiten-kha.png";
import p21 from "@/assets/meet-patel.png";
// import p22 from "@/assets/vinay-khanija.jpg";
import p23 from "@/assets/amisha-shukla.png";
import p24 from "@/assets/arya-dhakate.jpg";
import p25 from "@/assets/atharva-panbude.png";
import p26 from "@/assets/ifra-khan.png";
import p27 from "@/assets/isha-dhatrak.png";
import p28 from "@/assets/kunjal-sugandh.png";
import p29 from "@/assets/khushi-yadav.png";
import p30 from "@/assets/maheshwari-urkude.jpg";
import p31 from "@/assets/naman-ag2.png";
import p32 from "@/assets/nandini-trivedi.jpg";
import p33 from "@/assets/pawan-chandiramani.jpg";
import p34 from "@/assets/rimjhim-singh.jpg";
import p35 from "@/assets/rudra-kshirsagar.jpg";
import p36 from "@/assets/saniya-sondarkar.png";
import p37 from "@/assets/vidhi-agrawal.jpg";

import p38 from "@/assets/aniruddha.jpeg";
import p39 from "@/assets/arnav-mahatme.jpeg";
import p40 from "@/assets/gauravi.jpeg";
import p41 from "@/assets/geetika.jpeg";
import p42 from "@/assets/priyanka-v.jpeg";
import p43 from "@/assets/arnav-raut.jpeg";
import p44 from "@/assets/deeksha-lanjewar.jpeg";

const BRAND = {
  name: "KAT Expert",
  tagline: "A Place to Learn, A Place to Grow",
  phone: "+91 9552388015", 
  phoneAlt: "+91 99757 17636",
  whatsapp: "919552388015",
  address: "901 A Khare Town, Dharampeth, Behind Batukbhai Jewellers, Nagpur - 440010",
  email: "katexpert1806@gmail.com"
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "About", href: "/about" },
  {
    label: "Student Resources",
    children: [
      {
        label: "PYQs",
        children: [
          { label: "IPMAT", href: "/resources/ipmat" },
          { label: "CAT", href: "/resources/cat" }
        ]
      },
      { label: "GD/PI", href: "/resources/gd-pi" },
      { label: "Blogs", href: "/blog" },
      { label: "Articles", href: "/blog" },
      { label: "Others", href: "/#contact" }
    ]
  },
  { label: "Contact", href: "/#contact" }
];

const CAT_RESOURCES = [
  {
    id: "cat-qa-2024",
    title: "CAT 2024",
    subtitle: "Quantitative Aptitude",
    pdfUrl: "/resources/cat/cat-2024-qa.pdf"
  },
  {
    id: "cat-varc-2024",
    title: "CAT 2024",
    subtitle: "Verbal Ability & RC",
    pdfUrl: "/resources/cat/cat-2024-varc.pdf"
  },
  {
    id: "cat-dilr-2024",
    title: "CAT 2024",
    subtitle: "Data Interpretation & LR",
    pdfUrl: "/resources/cat/cat-2024-dilr.pdf"
  },
  {
    id: "cat-qa-2023",
    title: "CAT 2023",
    subtitle: "Quantitative Aptitude",
    pdfUrl: "/resources/cat/cat-2023-qa.pdf"
  },
  {
    id: "cat-varc-2023",
    title: "CAT 2023",
    subtitle: "Verbal Ability & RC",
    pdfUrl: "/resources/cat/cat-2023-varc.pdf"
  },
  {
    id: "cat-dilr-2023",
    title: "CAT 2023",
    subtitle: "Data Interpretation & LR",
    pdfUrl: "/resources/cat/cat-2023-dilr.pdf"
  }
];

const IPMAT_RESOURCES = [
  {
    id: "ipmat-2022",
    title: "IPMAT Indore",
    subtitle: "2022 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2022.pdf"
  },
  {
    id: "ipmat-2021",
    title: "IPMAT Indore",
    subtitle: "2021 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2021.pdf"
  },
  {
    id: "ipmat-2020",
    title: "IPMAT Indore",
    subtitle: "2020 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2020.pdf"
  },
  {
    id: "ipmat-2019",
    title: "IPMAT Indore",
    subtitle: "2019 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2019.pdf"
  }
];

const COURSES = [
  {
    id: "cat",
    title: "CAT",
    category: "MBA",
    icon: GraduationCap,
    description: "Comprehensive CAT preparation for top IIMs with concept-first teaching and mock analytics.",
    duration: "12 Months",
    mode: "Offline",
    features: ["Recorded lectures", "40+ full mocks", "Personal mentorship"],
    featured: true
  },
  {
    id: "clat",
    title: "CLAT",
    category: "Law",
    icon: Scale,
    description: "Crack CLAT & AILET for premier NLUs with daily legal reasoning and current affairs drills.",
    duration: "10 Months",
    mode: "Offline",
    features: ["Legal reasoning mastery", "Daily GK capsules", "Sectional tests"]
  },
  {
    id: "ipmat",
    title: "IPMAT",
    category: "UG",
    icon: BookOpen,
    description: "Integrated Programme in Management coaching for IIM Indore & Rohtak after Class 12.",
    duration: "2 years / 1 year",
    mode: "Offline",
    features: ["Quant + Verbal focus", "PI & WAT prep", "Foundation building"]
  },
  {
    id: "mba-cet",
    title: "MBA CET",
    category: "MBA",
    icon: Target,
    description: "MAH MBA CET preparation targeting JBIMS, SIMSREE and top Maharashtra B-schools.",
    duration: "6 Months",
    mode: "Offline",
    features: ["Speed test training", "100+ practice sets", "CAP guidance"],
    featured: true
  },
  {
    id: "mca-cet",
    title: "MCA CET",
    category: "PG",
    icon: Building2,
    description: "MAH MCA CET coaching covering aptitude, computer concepts and programming logic.",
    duration: "6 Months",
    mode: "Offline",
    features: ["Logical reasoning", "Computer fundamentals", "Mock series"]
  },
  {
    id: "crt",
    title: "CRT",
    category: "Skills",
    icon: Briefcase,
    description: "Campus Recruitment Training to make you placement-ready with aptitude & soft skills.",
    duration: "4 Months",
    mode: "Offline",
    features: ["Aptitude + coding", "Group discussion", "Interview prep"]
  },
   {
    id: "cuet",
    title: "CUET & MH - CET Classroom Program",
    category: "UG",
    icon: Briefcase,
    description: "Program is an all-inclusive preparation package designed for students aiming to excel in both Common University Entrance Test (CUET UG) and Maharashtra CET (MH-CET).",
    duration: "4 Months",
    mode: "Offline",
    features: ["General Aptitude", "English Language", "General Awareness"]
  },
   {
    id: "set",
    title: "SET",
    category: "UG",
    icon: Briefcase,
    description: "The Symbiosis Entrance Test (SET – General) is conducted by Symbiosis International (Deemed University) and serves as the gateway for undergraduate admissions across various prestigious Symbiosis institutes.",
    duration: "4 Months",
    mode: "Offline",
    features: ["General Awareness", "Logical and Analytical Reasoning", "English Language"]
  }
];

const STATS = [
  { value: 5000, suffix: "+", label: "Students Trained" },
  // { value: 120, suffix: "+", label: "CAT 99%ilers" },
  // { value: 850, suffix: "+", label: "MBA Converts" },
  { value: 18, suffix: "+", label: "Years of Experience" },
  // { value: 96, suffix: "%", label: "Placement Success" }
];

const FACULTY = [
  {
    image: faculty1,
    name: "Dr Arumita Pawa",
    designation: "MA English Literature | B.Com | NLP Practitioner | TESOL & TEFL London Business School | Certified Soft Skill Trainer",
    experience: "18+ years",
    students: "10,000+",
    expertise: ["VARC", "Communication", "Mindset training"],
    blurb: "Dr. Arumita Pawa is a dynamic academician and trainer with a distinguished career spanning over two decades in education and leadership. Formerly the Head of the Department of Commerce and Management, as well as the Junior College at Raisoni College, she has been instrumental in shaping the academic and professional journeys of countless students.",
    slug: "arumita-pawa",
    longBio: [
      "Dr. Arumita Pawa is a dynamic academician and trainer with a distinguished career spanning over two decades in education and leadership. Formerly the Head of the Department of Commerce and Management, as well as the Junior College at Raisoni College, she has been instrumental in shaping the academic and professional journeys of countless students.",
      "With a strong academic foundation—holding a Ph.D. and MA in English Literature alongside a Bachelor's degree in Commerce—Dr Pawa seamlessly bridges the domains of language, business, and personality development. She is also a certified NLP Practitioner and Soft Skills Trainer, with additional credentials in TEFL and TESOL from the London College of Teachers. Her passion lies in empowering learners with not only subject knowledge but also the confidence,",
      "communication skills, and emotional intelligence essential for personal and professional success. Dr Pawa is especially dedicated to helping students prepare for Personal Interviews (PI) and Group Discussions (GD)—equipping them with the articulation, presence, and poise required to stand out in competitive environments.",
      "She continues to inspire through her commitment to lifelong teaching and learning, holistic education, and transformational training."
    ]
  },
  {
    image: faculty2,
    name: "Prof. Krish Vyas",
    designation: "BE | MBA | Master Mentor Specialized in Quantitative Aptitude (QA) & Data Interpretation & Logical Reasoning (DILR)",
    experience: "5+ years",
    students: "5,000+",
    expertise: ["Quantitative Ability", "DI-LR"],
    blurb: "An engineer and an MBA, Krish combines the analytical laser-like focus and business sense in a unique package for the competitive exam preparation arena. Having spent years of direct teaching and mentoring experience, he has emerged as the go-to guide for thousands of aspirants pursuing dreams through examinations such as CAT, CLAT, and many other entrance exams. Masters in Quants & LRDI.",
    slug: "krish-vyas",
    longBio: [
      "Krish Vyas is not only a mentor — he's a movement.",
      "An engineer and an MBA, Krish combines the analytical laser-like focus and business sense in a unique package for the competitive exam preparation arena. Having spent years of direct teaching and mentoring experience, he has emerged as the go-to guide for thousands of aspirants pursuing dreams through examinations such as CAT, CLAT, and many other entrance exams. Masters in Quants & LRDI.",
      "It's not merely his profound subject expertise or outcome-oriented techniques — it's his unshakeable dedication to his students. He doesn't merely teach; he stands with his students every step of the way, knowing their challenges, testing their limits, and celebrating each victory, big or small.",
      "His Track Record Speaks Loud:",
      "• Turned thousands of ordinary students into top-rankers",
      "• Delivered top scores consistently in competitive exams",
      "• Recognized for simplifying complex subjects into simple, actionable ideas",
      "• A mentor who's never more than a message away",
      "Ambition and a passion for teaching drive Krish Vyas, who is determined to not only build careers but confident, capable individuals ready to conquer the world.",
      "If you are seeking a mentor who will not only instruct you on what to learn, but also how to think, how to win, and how to never settle – your search is over."
    ]
  },
  {
    image: facultySachin,
    name: "Sachin Sahu",
    designation: "DILR Faculty & CAT Mentor | MBA (NMIMS) | 3x 99+ %ile in DILR",
    experience: "3+ years",
    students: "1,500+",
    expertise: ["DILR", "Quantitative Aptitude", "Exam Strategy"],
    blurb: "CAT mentor specializing in Data Interpretation & Logical Reasoning (DILR) with 99.2 overall percentile. NMIMS MBA alumnus and IIM Mumbai convert who emphasizes conceptual problem-solving and discipline.",
    slug: "sachin-sahu",
    longBio: [
      "Sachin Sahu is a CAT mentor specializing in Data Interpretation & Logical Reasoning (DILR), with a track record of 99+ percentile in DILR across three consecutive CAT attempts, an overall CAT percentile of 99.2, and 99 percentile in Quantitative Aptitude. His teaching philosophy centers on building strong problem-solving skills rather than relying on shortcuts.",
      "Beyond CAT, Sachin has scored 98.85 percentile in SNAP and 261 in NMAT, converted IIM Mumbai (2026), and completed his MBA from NMIMS.",
      "Off the desk, Sachin brings the same discipline to endurance sports — he’s an Ironman 70.3 Vietnam finisher (7th in his age group), a HYROX Pro finisher, and an ultra-cyclist who once rode 600 km non-stop in 36 hours."
    ]
  }
];

const TOPPERS = [
  { image: p6, name: "Naman Agrawal", exam: "MBA CET", score: "AIR 1", college: "JBIMS Mumbai", year: 2026, hasCrown: true },
  { image: p15, name: "Vinay Khanija", exam: "MBA CET", score: "99.35%ile", college: "IIM Ahmedabad", year: 2026 },
  { image: p3, name: "Dhruv Naseri", exam: "MBA CET", score: "97.26%ile", college: "IIM Bangalore", year: 2026 },
  { image: p7, name: "Radhika Bhattad", exam: "MBA CET", score: "95.84%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p12, name: "Surabhi Jaiswal", exam: "MBA CET", score: "95.81%ile", college: "IIM Indore", year: 2026 },
  { image: p4, name: "Kasak Ahuja", exam: "MBA CET", score: "93.13%ile", college: "SIMSREE Mumbai", year: 2026 },
  { image: p11, name: "Shrimant Bijwe", exam: "MBA CET", score: "91.85%ile", college: "JBIMS Mumbai", year: 2026},
  { image: p10, name: "Saniya Kamble", exam: "MBA CET", score: "91.58%ile", college: "IIM Ahmedabad", year: 2026 },
  { image: p16, name: "Janhavi Pawaday", exam: "MBA CET", score: "88.36%ile", college: "IIM Bangalore", year: 2026 },
  { image: p14, name: "Vedant Kohat", exam: "MBA CET", score: "87.71%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p5, name: "Kasak Wadhwani", exam: "MBA CET", score: "87.12%ile", college: "IIM Indore", year: 2026 },
  { image: p2, name: "Chitvan Agrawal", exam: "MBA CET", score: "86.95%ile", college: "SIMSREE Mumbai", year: 2026 },
  { image: p8, name: "Riddhi Bapte", exam: "MBA CET", score: "85.71%ile", college: "JBIMS Mumbai", year: 2026 },
  { image: p9, name: "Rupali Kale", exam: "MCA CET", score: "97.70%ile", college: "IIM Ahmedabad", year: 2026, hasCrown: true },
  { image: p1, name: "Arpit Khadatkar", exam: "MCA CET", score: "95.93%ile", college: "IIM Bangalore", year: 2026 },
  { image: p13, name: "Vansh Katekhaye", exam: "MCA CET", score: "87.93%ile", college: "IIM Indore", year: 2026 },
  { image: p17, name: "Kiran Kumar Rajurkar", exam: "CAT", score: "80.30%ile", college: "SIMSREE Mumbai", year: 2025 },
  { image: p19, name: "Nikita Agrawal", exam: "DILR", score: "88.71%ile", college: "JBIMS Mumbai", year: 2025 },
  { image: p18, name: "Chitvan Agrawal", exam: "DILR", score: "93.98%ile", college: "JBIMS Mumbai", year: 2025 },
  { image: p21, name: "Meet Patel", exam: "CAT", score: "87.97%ile", college: "IIM Ahmedabad", year: 2025 },
  { image: p20, name: "Hiten Khatod", exam: "CAT", score: "89.90%ile", college: "IIM Bangalore", year: 2025 },
  { image: p31, name: "Naman Agrawal", exam: "DILR", score: "98.81%ile", college: "NLSIU Bangalore", year: 2025 },
  { image: p38, name: "Anirudhha Bhuptani", exam: "BBA CET", score: "98.04%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p39, name: "Arnav Mahatme", exam: "BBA CET", score: "95.62%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p40, name: "Geetika Mundhada", exam: "BBA CET", score: "95.46%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p41, name: "Gauravi Chitrav", exam: "BBA CET", score: "90.72%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p42, name: "Priyanka Vithalani", exam: "BBA CET", score: "88.31%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p43, name: "Arnav Raut", exam: "BBA CET", college: "Christ University Bangalore", year: 2026 },
  { image: p44, name: "Deeksha Lanjewar", exam: "BBA CET", college: "NICMAR-Pune", year: 2026 },
  
  
];

const TESTIMONIALS = [
  {
    image:p9,
    name: "Rupali Kale",
    rating: 5,
    text: "I'm incredibly grateful to KATexpert for their amazing mentorship and resources during my MCA CET prep. Their constant motivation and structural support guided me to hit a 97.7 percentile. Joining them was definitely the right choice!"
  },
  {
    image:p11,
    name: "Shrimant Bijwe",
    rating: 5,
    text: "The interactive classes at KATexpert genuinely made learning enjoyable and kept me highly engaged throughout. The clear directions and strategic curriculum provided by the mentors were exactly what I needed to successfully achieve my goal."
  },
  {
     image:p16,
    name: "Janhavi Pawaday",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },


   {
     image:p32,
    name: "Nandini Trivedi",
    rating: 5,
    text: "Learning from Arumita Ma'am has been a truly enriching experience. Her passion, patience, and ability to simplify complex concepts inspired me to think deeply, express creatively, and grow continuously. I will always cherish our bond, built on respect, trust, and a shared love for learning."
  },
   {
     image:p23,
    name: "Amisha Shukla",
    rating: 5,
    text: "Arumita Ma'am's wisdom, warmth, and kindness make every class inspiring. She teaches with patience, encourages curiosity, and helps students grow with confidence. Her guidance, belief in us, and genuine care leave a lasting impact, making her an unforgettable teacher and mentor."
  },
   {
     image:p25,
    name: "Atharva Panbude",
    rating: 5,
    text: "I feel fortunate to have learned from Krish Sir. His passion, dedication, and genuine care made learning enjoyable and meaningful. Beyond academics, he taught valuable life lessons, inspired us, believed in our potential, and became the best teacher I have ever had."
  },
   {
     image:p36,
    name: "Saniya Raghunath Sondarkar",
    rating: 5,
    text: "Krish Sir's teaching combines clarity, passion, and real-life examples, making complex concepts easy to understand. His patience, encouragement, and positivity inspire confidence, curiosity, and personal growth. Every class motivates me to aim higher, making him an exceptional teacher who leaves a lasting impression."
  },
   {
     image:p28,
    name: "Kunjal Sugandh",
    rating: 5,
    text: "Arumita Ma'am's engaging teaching, personal attention, and genuine care made learning enjoyable and inspiring. She simplified complex concepts, encouraged confidence, and supported my growth beyond academics. Her guidance, warmth, and belief in my potential have left a lasting impact on my learning journey."
  },
   {
     image:p29,
    name: "Khushi Yadav",
    rating: 5,
    text: "Krish Sir's exceptional teaching style made every concept clear and easy to understand. His guidance, care, and mentorship felt like that of an elder brother, inspiring confidence and gratitude. I feel fortunate to have learned from such an incredible teacher and mentor."
  },

  
   {
     image:p30,
    name: "Maheshwari Urkude",
    rating: 5,
    text: "I feel grateful to have learned from Krish Sir. His passion, dedication, and ability to simplify complex topics made learning inspiring and engaging. Beyond teaching, he built confidence, encouraged growth, and instilled a lifelong love for learning, leaving a lasting impact on my life."
   },
   {
     image:p37,
    name: "Vidhi Agrawal",
    rating: 5,
    text: "Krish Sir is more than a teacher—he is a mentor and guiding light. His kindness, patience, and passion make learning enjoyable while simplifying complex concepts. His guidance has shaped both my academic and personal growth, leaving me with lifelong lessons and unforgettable inspiration."
  },
   {
     image:p35,
    name: "Rudra Amol Kshirsagar",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
     image:p26,
    name: "Ifra Khan",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
     image:p27,
    name: "Isha Dhatrak",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },

   {
     image:p24,
    name: "Arya Dhakate",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
     image:p33,
    name: "Pawan Chandiramani",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
     image:p34,
    name: "Rimjhim Singh",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  }
];


const FAQS = [
  {
    question: "What are the benefits of joining KATexpert?",
    answer: "Joining KATexpert provides expert faculty, a structured curriculum, personalized attention, and high-quality study materials. Students benefit from regular assessments, flexible learning options, and dedicated doubt resolution. Additionally, the competitive environment and career guidance help ensure effective preparation and success in IIM entrance exams."
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can enroll by visiting our website and filling out the registration form. Alternatively, you can contact our admissions team via phone or email for assistance with the enrollment process."
  },
  {
    question: "What is the fee structure?",
    answer: "Our fee structure varies based on the course and duration. Detailed fee information can be obtained by contacting our admissions team at +91 9552388015, +9199757 17636.."
  },
  {
    question: "Do you offer online mocks?",
    answer: "Yes, we offer online mock  for various courses to help students assess their preparation. These mock tests are designed to simulate real exam conditions and can be accessed from anywhere."
  }
];

const CONTACT_INFO = {
  phone: BRAND.phone,
  email: BRAND.email,
  address: BRAND.address
};

export { BRAND, NAV_LINKS, COURSES, STATS, FACULTY, TOPPERS, TESTIMONIALS, FAQS, CAT_RESOURCES, IPMAT_RESOURCES, CONTACT_INFO };