import { GraduationCap, Scale, BookOpen, Briefcase, Building2, Target } from "lucide-react";

import faculty1 from "@/assets/faculty-1-aru.jpg"; 
import faculty2 from "@/assets/faculty-2-krish.jpg"; 
import facultySachin from "@/assets/sachin-sahu.png"; 

import heroNaman from "@/assets/hero-slide-naman-air1.jpeg";
import heroMca from "@/assets/hero-slide-mca-cet-2027.jpeg";
import heroMba from "@/assets/hero-slide-mba-cet-2027.jpeg";
import heroCat from "@/assets/hero-slide-cat-2027.png";
import heroIpmat2027 from "@/assets/hero-slide-ipmat-2027.jpeg";
import heroIpmat2028 from "@/assets/hero-slide-ipmat-2028.jpeg";
import heroCatInternship from "@/assets/hero-slide-cat-internship-2027.jpeg"; 



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
      { label: "Blogs & Articles", href: "/blog" }
    ]
  },
  { label: "Contact", href: "/#contact" }
];

const CAT_RESOURCES = [
  {
    id: "cat-2025-slot-3",
    title: "CAT 2025",
    subtitle: "Slot 3 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2025-Slot-3-Question-Paper-by-KatExpert.pdf.pdf"
  },
  {
    id: "cat-2025-slot-2",
    title: "CAT 2025",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2025-Slot-2-Question-Paper-by-KATexpert.pdf.pdf"
  },
  {
    id: "cat-2025-slot-1",
    title: "CAT 2025",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2025-Slot-1-Question-Paper-by-KATexpert.pdf.pdf"
  },
  {
    id: "cat-2024-slot-3",
    title: "CAT 2024",
    subtitle: "Slot 3 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2024-Slot-3-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2024-slot-2",
    title: "CAT 2024",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2024-Slot-2-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2024-slot-1",
    title: "CAT 2024",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2024-Slot-1-Question-Paper-by-KATexpert.pdf.pdf"
  },
  {
    id: "cat-2023-slot-3",
    title: "CAT 2023",
    subtitle: "Slot 3 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2023-Slot-3-Question-Paper-by-Katexpert.pdf.pdf.pdf"
  },
  {
    id: "cat-2023-slot-2",
    title: "CAT 2023",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2023-Slot-2-Question-Paper-by-Katexpert.pdf.pdf"
  },
  {
    id: "cat-2023-slot-1",
    title: "CAT 2023",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2023-Slot-1-Question-Paper-by-Katexpert-pdf.pdf.pdf"
  },
  {
    id: "cat-2022-slot-3",
    title: "CAT 2022",
    subtitle: "Slot 3 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2022-Slot-3-Question-Paper-by-Katexpert.pdf.pdf"
  },
  {
    id: "cat-2022-slot-2",
    title: "CAT 2022",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2022-Slot-2-Question-Paper-by-Katexpert.pdf.pdf"
  },
  {
    id: "cat-2022-slot-1",
    title: "CAT 2022",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2022-Slot-1-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2021-slot-3",
    title: "CAT 2021",
    subtitle: "Slot 3 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2021-Slot-3-Question-Paper-by-Katexpert.pdf.pdf"
  },
  {
    id: "cat-2021-slot-2",
    title: "CAT 2021",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2021-Slot-2-Question-Paper-by-Katexpert.pdf.pdf"
  },
  {
    id: "cat-2021-slot-1",
    title: "CAT 2021",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2021-Slot-1-Question-Paper-by-KATexpert.pdf.pdf"
  },
  {
    id: "cat-2020-slot-3",
    title: "CAT 2020",
    subtitle: "Slot 3 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2020-Slot-3-Question-Paper.pdf"
  },
  {
    id: "cat-2020-slot-2",
    title: "CAT 2020",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2020-Slot-2-Question-Paper-by-KATexpert.pdf.pdf"
  },
  {
    id: "cat-2020-slot-1",
    title: "CAT 2020",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2020-Slot-1-Question-Paper-by-KATexpert.pdf.pdf"
  },
  {
    id: "cat-2019-slot-2",
    title: "CAT 2019",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2019-Slot-2-Question-Paper-by-KATexpert-pdf.pdf"
  },
  {
    id: "cat-2019-slot-1",
    title: "CAT 2019",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2019-Slot-1-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2018-slot-2",
    title: "CAT 2018",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2018-Slot-2-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2018-slot-1",
    title: "CAT 2018",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2018-Slot-1-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2017-slot-2",
    title: "CAT 2017",
    subtitle: "Slot 2 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2017-Slot-2-Question-Paper-by-KATexpert.pdf"
  },
  {
    id: "cat-2017-slot-1",
    title: "CAT 2017",
    subtitle: "Slot 1 Question Paper",
    pdfUrl: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2017-Slot-1-Question-Paper-by-KATexpert.pdf"
  }
];

const IPMAT_RESOURCES = [
  {
    id: "ipmat-indore-2025",
    title: "IPMAT Indore",
    subtitle: "2025 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2025.pdf"
  },
  {
    id: "ipmat-indore-2024",
    title: "IPMAT Indore",
    subtitle: "2024 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2024.pdf"
  },
  {
    id: "ipmat-indore-2023",
    title: "IPMAT Indore",
    subtitle: "2023 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2023.pdf"
  },
  {
    id: "ipmat-indore-2022",
    title: "IPMAT Indore",
    subtitle: "2022 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2022.pdf"
  },
  {
    id: "ipmat-indore-2021",
    title: "IPMAT Indore",
    subtitle: "2021 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2021.pdf"
  },
  {
    id: "ipmat-indore-2020",
    title: "IPMAT Indore",
    subtitle: "2020 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2020.pdf"
  },
  {
    id: "ipmat-indore-2019",
    title: "IPMAT Indore",
    subtitle: "2019 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-indore-2019.pdf"
  },
  {
    id: "ipmat-rohtak-2020",
    title: "IPMAT Rohtak",
    subtitle: "2020 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-rohtak-2020.pdf"
  },
  {
    id: "ipmat-rohtak-2019",
    title: "IPMAT Rohtak",
    subtitle: "2019 Question Paper",
    pdfUrl: "/resources/ipmat/ipmat-rohtak-2019.pdf"
  },
  {
    id: "jipmat-2025",
    title: "JIPMAT",
    subtitle: "2025 Question Paper",
    pdfUrl: "/resources/ipmat/jipmat-2025.pdf"
  },
  {
    id: "jipmat-2024",
    title: "JIPMAT",
    subtitle: "2024 Question Paper",
    pdfUrl: "/resources/ipmat/jipmat-2024.pdf"
  },
  {
    id: "jipmat-2023",
    title: "JIPMAT",
    subtitle: "2023 Question Paper",
    pdfUrl: "/resources/ipmat/jipmat-2023.pdf"
  },
  {
    id: "jipmat-2022",
    title: "JIPMAT",
    subtitle: "2022 Question Paper",
    pdfUrl: "/resources/ipmat/jipmat-2022.pdf"
  },
  {
    id: "jipmat-2021",
    title: "JIPMAT",
    subtitle: "2021 Question Paper",
    pdfUrl: "/resources/ipmat/jipmat-2021.pdf"
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
    image: p9,
    name: "Rupali Kale",
    rating: 5,
    text: "I am incredibly grateful to KatExpert for providing the right mentorship, quality resources, and continuous motivation throughout my MCA CET preparation. Their expert guidance contributed greatly to my success in securing an impressive 97.7 percentile."
  },
  {
    image: p11,
    name: "Shimant Bijwe",
    rating: 5,
    text: "The interactive classes at KatExpert genuinely made learning enjoyable and kept me highly engaged throughout. Their proper direction, excellent study resources, and strategic guidance were exactly what I needed to successfully achieve my academic goal."
  },
  {
    image: p16,
    name: "Janhavi Pawaday",
    rating: 5,
    text: "I am grateful to the teachers of KatExpert for their support. I joined later than most, but they helped me cover the syllabus. Their structured worksheets helped me improve quickly, scoring 88% with constant support."
  },
  {
    image: p32,
    name: "Nandini Trivedi",
    rating: 5,
    text: "Learning from Arumita Ma'am has been an enriching experience. Her passion, patience, and ability to simplify complex concepts inspired me to think deeply. I will always cherish our bond, built on respect, trust, and a love for learning."
  },
  {
    image: p23,
    name: "Amisha Shukla",
    rating: 5,
    text: "Arumita Ma'am is a beautiful blend of wisdom and grace. Every class feels like a conversation that opens our minds. She teaches from experience with patience, creating a safe space for us to explore, grow, and succeed."
  },
  {
    image: p25,
    name: "Atharva Panbude",
    rating: 5,
    text: "I feel incredibly lucky to have been a student of Krish Sir. His passion for teaching and genuine care is inspiring. He goes above and beyond to make learning enjoyable, while teaching us valuable life lessons."
  },
  {
    image: p36,
    name: "Saniya Raghunath Sondarkar",
    rating: 5,
    text: "Krish Sir's teaching style has had a lasting impact on me. He explains concepts with clarity, connecting lessons to real-life situations. His encouragement inspired me to aim higher and believe in myself, making learning a true joy."
  },
  {
    image: p28,
    name: "Kunjal Sugandh",
    rating: 5,
    text: "Arumita Ma'am is one of the most impactful educators in my life. Her engaging, student-centered teaching style simplifies complex concepts. Her personal attention and belief in my potential helped me gain confidence and grow in unexpected ways."
  },
  {
    image: p29,
    name: "Khushi Yadav",
    rating: 5,
    text: "Krish Sir is the most incredible teacher I have ever met. His unique teaching style helped us gain complete clarity on all concepts. He guides us like an elder brother and acts as an amazing personal mentor."
  },
  {
    image: p30,
    name: "Maheshwari Urkude",
    rating: 5,
    text: "I feel incredibly grateful to have been taught by Krish Sir. His passion for teaching and dedication to each student's growth is truly inspiring. He simplifies complex topics, instills immense confidence, and ignites a lifelong love for learning."
  },
  {
    image: p37,
    name: "Vidhi Agrawal",
    rating: 5,
    text: "Krish Sir is a mentor, motivator, and guiding light. His kindness, patience, and genuine care make learning feel exciting and safe. I have grown academically and personally under his guidance, carrying his life lessons with me always."
  },
  {
    image: p35,
    name: "Rudra Amol Kshirsagar",
    rating: 5,
    text: "Krish Sir's passion for teaching and his ability to explain concepts with clarity and patience make his classes stand out. He is always supportive, approachable, and motivating, ensuring every student learns and enjoys the process thoroughly."
  },
  {
    image: p26,
    name: "Ifra Khan",
    rating: 5,
    text: "Krish Sir's teaching methods are exceptional. He makes complex concepts easy to understand, while his friendly approach makes learning stress-free. He is not just a teacher, but a supportive mentor who guides us with genuine care."
  },
  {
    image: p27,
    name: "Isha Dhatrak",
    rating: 5,
    text: "Krish Sir not only imparts knowledge but also motivates us. His classes are never boring because he explains concepts clearly and makes learning enjoyable. He creates a positive classroom environment where everyone feels encouraged to learn and grow."
  },
  {
    image: p24,
    name: "Arya Dhakate",
    rating: 5,
    text: "Learning under Arumita Ma'am has been an enriching experience. Her ability to explain concepts with clarity makes complex topics manageable. She balances professionalism with approachability, always supporting us and helping us build strong confidence for the future."
  },
  {
    image: p33,
    name: "Pawan Chandiramani",
    rating: 5,
    text: "Learning under Krish Sir has been one of the best parts of my journey. He teaches with clarity and patience, making difficult topics simple. His personal attention, constant guidance, and genuine care make a huge difference."
  },
  {
    image: p34,
    name: "Rimjhim Singh",
    rating: 5,
    text: "It has been a privilege to learn under Krish Sir. His commitment to excellence and deep knowledge made a lasting impact on us. He fosters a disciplined environment encouraging critical thinking, personal growth, and academic success."
  }
];


const FAQS = [
  {
    question: "What are the benefits of joining KatExpert?",
    answer: "Joining KatExpert provides expert faculty, a structured curriculum, personalized attention, and high-quality study materials. Students benefit from regular assessments, flexible learning options, and dedicated doubt resolution. Additionally, the competitive environment and career guidance help ensure effective preparation and success in IIM entrance exams."
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
  phoneAlt : BRAND.phoneAlt,
  address: BRAND.address
};

const ADDITIONAL_HERO_SLIDES = [
  {
    image: heroNaman,
    title: "Naman Agrawal - AIR 1 (100 Percentile) | Admission Open for MBA & MCA CET"
  },
  {
    image: heroMca,
    title: "IPMAT 2028 - 2-Year Classroom Program | Get Into an IIM Right After Class XII"
  },
  {
    image: heroMba,
    title: "IPMAT 2027 - 1-Year Classroom Program | Get Into an IIM Right After Class XII"
  },
  {
    image: heroCat,
    title: "CAT 2027 - Admissions Open | Internship Now Included"
  },
  {
    image: heroIpmat2027,
    title: "CAT 2027 - Start Your Prep Early | Admissions Open"
  },
  {
    image: heroIpmat2028,
    title: "MBA CET 2027 - Start Early, Stay Ahead | Batches Starting from 3rd August 2026"
  },
  {
    image: heroCatInternship,
    title: "MCA CET 2027 - Batches Starting from 3rd August 2026 | Start Early, Stay Ahead"
  }
];

export { BRAND, NAV_LINKS, COURSES, STATS, FACULTY, TOPPERS, TESTIMONIALS, FAQS, CAT_RESOURCES, IPMAT_RESOURCES, CONTACT_INFO, ADDITIONAL_HERO_SLIDES };