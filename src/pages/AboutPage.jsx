import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import p6 from "@/assets/naman-agrawal.jpg";
import {
  BookOpen,
  LineChart,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Award,
  Briefcase,
  GraduationCap,
  Star,
  Trophy,
  TrendingUp,
  Quote,
  MessageSquare,
  Send,
  Clock,
  ArrowRight,
  ArrowLeft,
  Play,
  Scale,
  Target,
  Eye,
  Heart,
  Image
} from 'lucide-react';
import { CONTACT_INFO, COURSES, FACULTY, TOPPERS, TESTIMONIALS } from "@/lib/site-data";
import DossierDrawer from "@/components/site/DossierDrawer";
import galleryData from "@/data/gallery.json";
import { Lightbox } from "@/components/site/Lightbox";
import newsCricket1 from "@/assets/news-cricket-1.png";
import newsCricket2 from "@/assets/news-cricket-2.png";

const VIDEO_TESTIMONIALS = [
  {
    id: "abeer",
    youtubeId: "I1Z6BsYjHXk",
    name: "Preet Rajwade",
    exam: "CAT",
    college: "IIM Ahmedabad",
    score: "99.8%ile",
    quote: "KATexpert gave me the structure I needed to convert my CAT dream into reality.",
    title: "Hear It From Our Achievers"
  },
  {
    id: "khushi",
    youtubeId: "RUch3M7DeR0",
    name: "Khushi Khandelwal",
    exam: "IPMAT",
    college: "IIM Indore",
    score: "AIR 12",
    quote: "The mentorship here is unmatched — every doubt cleared, every step guided.",
    title: "Why Students Trust KATexpert"
  },
  {
    id: "arpit",
    youtubeId: "QxO2NxT7BxA",
    name: "Arpit",
    exam: "MBA CET",
    college: "JBIMS Mumbai",
    score: "99.94%ile",
    quote: "From average scores to a top JBIMS seat — the KATexpert grind changed everything.",
    title: "Arpit's CET Success Story"
  },
  {
    id: "jay",
    youtubeId: "7WWzJHTznMs",
    name: " Jay",
    exam: "CAT",
    college: "IIM Bangalore",
    score: "99.6%ile",
    quote: "The faculty knows exactly where students struggle and how to fix it fast.",
    title: "Get the Guidance You Deserve"
  },
  {
    id: "atharv",
    youtubeId: "D2MOUroto0k",
    name: "Atharv",
    exam: "MBA CET",
    college: "SIMSREE Mumbai",
    score: "99.87%ile",
    quote: "Consistent mocks and honest feedback — that's the KATexpert formula.",
    title: "Atharv's CET Success Story"
  },
  {
    id: "why-love",
    youtubeId: "yYUONg1f-Sw",
    name: "Darshan",
    exam: "CAT",
    college: "IIM Lucknow",
    score: "99.5%ile",
    quote: "It stopped feeling like coaching and started feeling like a second home.",
    title: "Why Students Love KATexpert"
  },
  {
    id: "rupali",
    youtubeId: "e_e0P-FHeJ8",
    name: "Rupali",
    exam: "MCA CET",
    college: "VJTI Mumbai",
    score: "99.72%ile",
    quote: "Personal attention that big institutes just can't offer.",
    title: "Rupali's Success Story"
  },
  {
    id: "Shimant",
    youtubeId: "5QxsWC1Jkz4",
    name: "Shimant",
    exam: "IPMAT",
    college: "IIM Rohtak",
    score: "AIR 47",
    quote: "The environment lets you ask the silliest question without hesitation.",
    title: "Why Students Feel Comfortable Here"
  },
  {
    id: "guidance",
    youtubeId: "Ns_tSPuYHAA",
    name: "Radhika",
    exam: "CRT",
    college: "TCS Digital",
    score: "Placed",
    quote: "Cracked my first campus interview thanks to KATexpert's CRT program.",
    title: "Success Starts with the Right Guidance"
  },
  {
    id: "kasak",
    youtubeId: "5-BL0hHz0IQ",
    name: "Kasak",
    exam: "CAT",
    college: "IIM Kozhikode",
    score: "99.3%ile",
    quote: "Went from fearing quant to topping quant sectionals — literally.",
    title: "Kasak's Math Transformation Story"
  },
  {
    id: "yashi",
    youtubeId: "rjA_MCLB2UM",
    name: "Yashi",
    exam: "CAT",
    college: "IIM Calcutta",
    score: "99.91%ile",
    quote: "Strategy sessions with mentors saved months of misdirected effort.",
    title: "Yashi's CAT Preparation Strategy"
  },
  {
    id: "krish",
    youtubeId: "F1B35HJKOpM",
    name: "Krish Sir",
    exam: "CAT",
    college: "Multiple IIMs",
    score: "99+%ile",
    quote: "Krish Sir breaks down CAT into a plan you can execute.",
    title: "CAT 2025 Exam Pattern & Strategy"
  },
  {
    id: "arumita",
    youtubeId: "4F12hXxDKr4",
    name: "Arumita Ma'am",
    exam: "IPMAT",
    college: "IIM Indore & Rohtak",
    score: "Top Ranks",
    quote: "Every IPMAT trick condensed into actionable classroom insights.",
    title: "IPMAT Tips You Can't Miss"
  },
  {
    id: "varc",
    youtubeId: "Q-87AntscUw",
    name: "Featured Masterclass",
    exam: "CAT",
    college: "All Programs",
    score: "Featured",
    quote: "A masterclass on VARC strategy and attempt planning that changes how you approach the section.",
    title: "VARC Strategy 2025 — Attempt & Exam Pattern"
  }
];

const NEWS_EVENTS = [
  {
    id: 1,
    type: "News",
    title: "Sigmas Clinch KATexpert Box Cricket League Trophy",
    date: "Published July 12, 2026",
    time: "9:00 AM - 5:00 PM",
    venue: "Wings Turf, Bishop School, Civil Lines",
    desc: "Four teams competed fiercely in the annual KATexpert Box Cricket League. In a thrilling final, the 'Sigmas' captained by Hiten Khatod defeated the 'Vibers' by 8 runs, scoring 63 runs in 8 overs and defending it by restricting the opponents to 55 runs. Individual accolades went to Aniket Matte & Shravani Raut (Best Bowlers) and Vishal Sakharwade & Sanjana Manekar (Best Batsmen). The event was graced by directors Dr. Arumita Pawa, Krish Vyas, along with Manoj Pawa and Amit Gandhare.",
    images: [newsCricket1, newsCricket2]
  },
  {
    id: 2,
    type: "Session",
    title: "Detox Your Mind",
    date: "Mental Wellness",
    time: "Mindfulness Session",
    venue: "KATexpert Nagpur Classroom",
    desc: "KATexpert organized an enriching session titled \"Detox Your Mind\" led by Ms. Tina Chachra, Founder and Healer. The session focused on mental wellness, stress management, and maintaining a positive mindset during competitive exam preparation.\n\nThrough interactive guidance and simple mindfulness techniques, students learned practical ways to improve focus and emotional balance. The session served as a refreshing and rejuvenating experience for all participants.",
    rightImage: "/assets/gallery/2026/05/5.jpeg"
  },
  {
    id: 3,
    type: "Session",
    title: "LinkedIn Made Easy",
    date: "Personal Branding",
    time: "Career Session",
    venue: "KATexpert Nagpur Classroom",
    desc: "KATexpert conducted an engaging session titled \"LinkedIn Made Easy\" by Ms. Bhavya Magnani, Social Media Manager and Personal Branding Strategist. The session focused on building a strong LinkedIn profile, personal branding, and effective networking strategies.\n\nStudents gained practical insights on enhancing their professional presence online, making the session both informative and career-oriented.",
    rightImage: "/assets/gallery/2026/05/14.jpeg"
  },
  {
    id: 4,
    type: "Event",
    title: "Exploring BBA / MBA World : Their Way",
    date: "Alumni Interaction",
    time: "Success Session",
    venue: "KATexpert Nagpur Classroom",
    desc: "Mozzammil Khalil (MMS from JBIMS, 2023 Batch; CAT 2021: 99.49%ile, MAH-CET 2021: 99.94%ile) shared insights on CAT and MAH-CET preparation, his MMS journey, and the transition to the corporate world. The interactive session was highly informative and motivating for MBA aspirants.",
    rightImage: "/assets/gallery/2026/05/12.jpeg"
  },
  {
    id: 5,
    type: "Event",
    title: "Turfament 1",
    date: "Sports Day",
    time: "Box Cricket Tournament",
    venue: "Wings Turf, Bishop School, Civil Lines",
    desc: "KATexpert organized TURFAMENT, a fun-filled cricket tournament for students. Divided into teams, participants showcased teamwork, sportsmanship, and competitive spirit in exciting matches. The event aimed to build camaraderie and offer a refreshing stress-buster amid exam preparations.\n\nIt concluded with medals and trophies for the winners and snack boxes for everyone, making it a memorable blend of cricket and CAT camaraderie. The event was graced by Mr. Amit Gandhare and the Directors of KATexpert Dr Arumita Pawa and Krish Vyas.",
    rightImage: "/assets/gallery/2026/05/4.jpeg"
  },
  {
    id: 6,
    type: "News",
    title: "Turfament 2",
    date: "Box Cricket League",
    time: "Champions Trophy",
    venue: "Wings Turf, Bishop School, Civil Lines",
    desc: "SIGMAS defeated Vibers to clinch the KATexpert Champions trophy. The Box Cricket League was organised by KATexpert of Khare Town, Dharampeth, at Wings Turf, Bishop School, Civil Lines. Four teams competed against each other to reach the finals. In the final, Sigmas defeated Vibers by eight runs to claim the title. Sigmas posted 63 runs in 8 overs and restricted their opponents to 55 runs. Around 100 students participated in the event with full enthusiasm and excitement. It also gave them an opportunity to network with other students and show their leadership skills and sportsmanship. The event was graced by Manoj Pawa, Amit Gandhare and the Directors of KATexpert Dr Arumita Pawa and Krish Vyas.",
    rightImage: "/assets/gallery/2026/05/3.jpeg"
  }
];

function AboutVideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between">
      <div className="relative aspect-video bg-black overflow-hidden group">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-orange shadow-md transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            </div>
          </button>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between text-left">
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold text-brand-orange uppercase bg-brand-orange/5 px-2 py-0.5 rounded-full">
              {video.exam}
            </span>
          </div>
          <h3 className="font-display font-bold text-brand-blue text-xs leading-normal">
            {video.title}
          </h3>
          <p className="text-[11px] text-gray-500 italic">
            "{video.quote}"
          </p>
        </div>
        <div className="mt-3 pt-2.5 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold text-gray-400">
          <span>{video.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('About');
  const [selectedMentor, setSelectedMentor] = useState(null);

  // Gallery Sub-tab states
  const [gallerySubTab, setGallerySubTab] = useState("photos");
  const [galleryCategory, setGalleryCategory] = useState("All");
  const [galleryLightboxIndex, setGalleryLightboxIndex] = useState(null);
  const [galleryVideoFilter, setGalleryVideoFilter] = useState("All");

  const filteredPhotos = useMemo(() => {
    if (galleryCategory === "All") return galleryData;
    return galleryData.filter((i) => i.category === galleryCategory);
  }, [galleryCategory]);

  const lightboxImages = useMemo(() => {
    return filteredPhotos.map((f) => ({
      src: f.src,
      full: f.full,
      w: f.w,
      h: f.h,
      category: f.category,
      alt: `${f.category} — KATexpert`,
    }));
  }, [filteredPhotos]);

  const filteredVideos = useMemo(() => {
    if (galleryVideoFilter === "All") return VIDEO_TESTIMONIALS;
    return VIDEO_TESTIMONIALS.filter((t) => t.exam === galleryVideoFilter);
  }, [galleryVideoFilter]);

  // Sync state with URL query parameters and scroll to hash anchor
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['About', 'Faculty', 'Gallery', 'Contact'].includes(tab)) {
      setActiveTab(tab);
    }
    const mentor = params.get('mentor');
    if (mentor) {
      setSelectedMentor(mentor);
    } else {
      setSelectedMentor(null);
    }

    // Handle smooth scrolling to specific faculty member anchor
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 400); // 400ms delay ensures the DOM has updated and tab animation completed
    }
  }, [location.search, location.hash]);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'CAT',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: 'CAT',
          message: '',
        });
        setIsSubmitted(false);
      }, 4000);
    }
  };

  // Scroll animations observer
  useEffect(() => {
    const animObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.animate-on-scroll');
    revealElements.forEach((el) => {
      animObserver.observe(el);
    });

    return () => animObserver.disconnect();
  }, [activeTab]);

  const tabs = [
    { id: 'About', label: 'About Us' },
    { id: 'Faculty', label: 'Elite Mentors' },
    { id: 'Gallery', label: 'Gallery' },
    { id: 'Contact', label: 'Contact Us' }
  ];

  // Motion animation parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const pillars = [
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: 'Personal Mentorship',
      desc: 'One-on-one strategy sessions and individual doubt-clearing with elite faculty members to resolve concepts and map individual exam plans.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-brand-orange" />,
      title: 'Hybrid Mode Learning',
      desc: 'Flexible academic delivery combining structured offline physical classroom lectures in Nagpur with the modern convenience of live online backups.',
    },
    {
      icon: <LineChart className="w-8 h-8 text-brand-orange" />,
      title: 'Mock Analytics & Strategy',
      desc: 'In-depth diagnostic analytics of full-length mocks to track individual accuracy, speed variables, sectional benchmarks, and concept weak points.',
    },
  ];

  return (
    <div className="bg-slate-50/50 pt-20 pb-12 font-sans text-slate-800" id="about-tabbed-page-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-2 flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-brand-blue hover:text-brand-orange hover:border-brand-orange/30 shadow-sm transition-all hover:scale-101 mt-10"
            id="about-back-to-home-btn"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Navigation Tabs Bar - Inspired by the original about-us header layout */}
        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mb-6 border-b border-slate-200 pb-4" id="about-page-tab-bar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15 scale-102'
                    : 'text-brand-blue hover:bg-slate-100 hover:scale-101'
                }`}
                id={`about-tab-${tab.id.toLowerCase()}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="outline-none"
          >
             {/* ABOUT US TAB VIEW */}
            {activeTab === 'About' && (
              <div id="tab-pane-about-us" className="max-w-5xl mx-auto px-4 sm:px-8 pt-1 pb-6 space-y-12">
                {/* About Header Hero */}
                <div className="text-center max-w-3xl mx-auto mb-8" id="about-hero">
                  <span className="text-[11px] font-bold text-[#ea580c] uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Our Story & Philosophy
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight mb-3">
                    About <span className="bg-gradient-to-r from-brand-orange to-[#f97316] bg-clip-text text-transparent">KATexpert</span>
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 font-medium italic">
                    "A Place to Learn, A Place to Grow"
                  </p>
                  <div className="w-16 h-1 bg-[#ea580c] rounded-full mx-auto mt-4 shadow-sm" />
                </div>

                {/* About KATexpert Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 text-left" id="about-main-section">
                  {/* Left Column: Image with premium styling */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="relative group max-w-xs md:max-w-sm w-full">
                      {/* Background decorative elements */}
                      <div className="absolute -inset-1 bg-gradient-to-tr from-brand-orange to-orange-500 rounded-3xl blur-md opacity-25 group-hover:opacity-35 transition duration-500" />
                      <div className="relative bg-white border border-slate-100 p-2.5 rounded-3xl shadow-xl">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                          <img
                            src={p6}
                            alt="Graduate Student - KATexpert Nagpur"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                          />
                          <div className="absolute top-3 left-3 bg-brand-blue/90 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-md">
                            Nagpur's Premium Institute
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-blue tracking-tight">
                      Empowering Minds, Shaping Futures
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                      <strong className="text-brand-blue">KATexpert</strong> is a premier educational institute dedicated to empowering students with the knowledge and strategies needed to excel in competitive exams. With a strong focus on personalized learning and result-driven coaching, we specialize in preparing aspirants for:
                    </p>

                    {/* Dynamic Badges / Grid of courses */}
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-50px" }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
                    >
                      {[
                        { name: 'CAT', fullName: 'Common Admission Test', icon: <GraduationCap className="w-4 h-4 text-brand-orange" />, desc: 'Premium MBA Prep' },
                        { name: 'CLAT', fullName: 'Common Law Admission Test', icon: <Scale className="w-4 h-4 text-brand-orange" />, desc: 'Law Careers Gateway' },
                        { name: 'IPMAT', fullName: 'Integrated Program in Management', icon: <BookOpen className="w-4 h-4 text-brand-orange" />, desc: 'Direct IIM Admissions' },
                        { name: 'MBA CET', fullName: 'Maharashtra MBA Entrance', icon: <Trophy className="w-4 h-4 text-brand-orange" />, desc: 'State MBA Admissions' },
                        { name: 'MCA CET', fullName: 'Maharashtra MCA Entrance', icon: <TrendingUp className="w-4 h-4 text-brand-orange" />, desc: 'State MCA Admissions' },
                        { name: 'CRT', fullName: 'Campus Recruitment Training', icon: <Briefcase className="w-4 h-4 text-brand-orange" />, desc: 'Placement Preparation' },
                      ].map((course) => (
                        <motion.div 
                          key={course.name} 
                          variants={itemVariants}
                          className="flex items-start space-x-3 p-2.5 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-shadow duration-300 hover:scale-101 hover:border-brand-orange/20"
                        >
                          <div className="p-1.5 bg-brand-orange/5 rounded-xl shrink-0">
                            {course.icon}
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-brand-blue uppercase tracking-wider">{course.name}</h4>
                            <p className="text-[9px] text-slate-400 font-semibold mt-0.5">{course.fullName}</p>
                            <p className="text-[9px] text-slate-500 font-medium mt-1">{course.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Highlighted Quote Callout */}
                <div className="relative overflow-hidden bg-brand-blue text-white rounded-2xl p-6 sm:p-8 shadow-lg text-left" id="about-callout">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                  <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <div className="p-3 bg-white/10 backdrop-blur border border-white/10 rounded-2xl shrink-0">
                      <Quote className="w-6 h-6 text-brand-orange" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-200 italic">
                      "At KATexpert, we combine experienced faculty, comprehensive study material, and regular mock tests to ensure our students are fully prepared to achieve their academic and career goals. Whether you’re aiming for top business schools or technical institutions, our expert guidance paves the way to success."
                    </p>
                  </div>
                </div>

                {/* Mission, Vision & Values Grid */}
                <div className="space-y-8" id="about-identity-values">
                  <div className="text-center max-w-2xl mx-auto">
                    <span className="text-[11px] font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                      Identity & Principles
                    </span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-blue tracking-tight">
                      Our Mission, Vision & Values
                    </h2>
                    <p className="text-[10px] text-slate-400 font-bold mt-1.5 uppercase tracking-wider">
                      The core driving force behind our mentoring approach
                    </p>
                  </div>

                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {[
                      {
                        title: "MISSION",
                        icon: <Target className="w-5 h-5 text-brand-orange" />,
                        text: "We’re here to support every MBA dream with the right guidance, honest mentoring, and smart preparation. From your first step to the exam, we walk with you—helping you grow, stay confident, and reach the B-school you’ve set your heart on."
                      },
                      {
                        title: "VISION",
                        icon: <Eye className="w-5 h-5 text-brand-orange" />,
                        text: "To become the most trusted and result-oriented MBA entrance coaching institute in India, empowering every aspirant to realize their dream of getting into top B-schools through excellence in teaching, mentoring, and innovation."
                      },
                      {
                        title: "VALUES",
                        icon: <Heart className="w-5 h-5 text-brand-orange" />,
                        text: "We believe every student brings a dream that deserves real care and honest guidance. You’re not just here to crack an exam—you’re here to grow, to struggle, to believe in yourself a little more each day. And we’re here to walk that journey with you. We value truth over hype, effort over perfection, and people over numbers. Through every high and low, we’ll show up—for your goals, your growth, and your story. Because to us, you’re never just a student. You’re someone chasing something that matters—and we’re honored to be part of that."
                      }
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        variants={itemVariants}
                        className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left relative overflow-hidden"
                      >
                        {/* Soft background glow */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full -z-1" />
                        
                        <div className="w-11 h-11 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-center justify-center mb-4 shadow-sm p-2.5 shrink-0">
                          {item.icon}
                        </div>
                        
                        <h3 className="text-sm sm:text-base font-display font-bold text-brand-blue tracking-wide mb-2 flex items-center">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}

            {/* FACULTY TAB VIEW */}
            {activeTab === 'Faculty' && (
              <div id="tab-pane-faculty" className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm text-left">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-xl font-display font-extrabold text-brand-blue tracking-tight relative inline-block pb-2">
                    Faculty
                    <div className="absolute bottom-0 left-0 w-10 h-1 bg-[#ea580c] rounded-full" />
                  </h2>
                </div>

                {/* Faculty List */}
                <div className="space-y-8">
                  {FACULTY.map((member, idx) => {
                    // Helper function to render paragraphs and lists dynamically
                    const renderBioParagraphs = (paragraphs) => {
                      if (!paragraphs) return null;
                      let inList = false;
                      const elements = [];
                      let currentListItems = [];

                      paragraphs.forEach((p, pIdx) => {
                        const isBullet = p.startsWith('•') || p.startsWith('-') || p.startsWith('*');

                        if (isBullet) {
                          if (!inList) {
                            inList = true;
                            currentListItems = [];
                          }
                          const text = p.replace(/^[•\-\*]\s*/, '');
                          currentListItems.push(text);
                        } else {
                          if (inList) {
                            const listKey = `list-${pIdx}`;
                            elements.push(
                              <ul key={listKey} className="list-disc pl-5 space-y-1 text-slate-700 text-[11px] md:text-xs my-2.5">
                                {currentListItems.map((item, i) => (
                                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                              </ul>
                            );
                            inList = false;
                          }
                          elements.push(
                            <p
                              key={pIdx}
                              className="text-slate-700 text-[11px] md:text-xs leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: p
                                  .replace(/Personal Interviews \(PI\)/g, "<strong>Personal Interviews (PI)</strong>")
                                  .replace(/Group Discussions \(GD\)/g, "<strong>Group Discussions (GD)</strong>")
                                  .replace(/Group Discussion \(GD\)/g, "<strong>Group Discussion (GD)</strong>")
                                  .replace(/Personal Interview \(PI\)/g, "<strong>Personal Interview (PI)</strong>")
                              }}
                            />
                          );
                        }
                      });

                      if (inList && currentListItems.length > 0) {
                        elements.push(
                          <ul key="final-list" className="list-disc pl-5 space-y-1 text-slate-700 text-[11px] md:text-xs my-2.5">
                            {currentListItems.map((item, i) => (
                              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        );
                      }

                      return elements;
                    };

                    return (
                      <div key={member.name} id={member.slug} className="scroll-mt-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                          {/* Left Column: Photo */}
                          <div className="col-span-12 md:col-span-2 flex justify-center md:justify-start">
                            <div className="w-full max-w-[140px] aspect-[3/4] rounded-xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 flex items-center justify-center">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-brand-blue text-white">
                                  <span className="text-lg font-bold font-display">{member.name[0]}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right Column: Bio */}
                          <div className="col-span-12 md:col-span-10 space-y-2">
                            <div>
                              <h3 className="text-lg font-display font-extrabold text-brand-blue tracking-tight">
                                {member.name}
                              </h3>
                              <p className="mt-1 text-[10px] md:text-[11px] font-semibold text-[#ea580c] leading-relaxed uppercase tracking-wider">
                                {member.designation}
                              </p>
                            </div>

                            <div className="space-y-2">
                              {renderBioParagraphs(member.longBio)}
                            </div>
                          </div>
                        </div>

                        {/* Orange Divider between rows */}
                        {idx < FACULTY.length - 1 && (
                          <div className="w-full border-t border-[#ea580c] my-6" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* GALLERY TAB VIEW */}
            {activeTab === 'Gallery' && (
              <div id="tab-pane-gallery" className="max-w-5xl mx-auto px-4 sm:px-8 pt-1 pb-6 space-y-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-6">
                  <span className="text-[11px] font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Gallery
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-blue tracking-tight mb-3">
                    Life at KATexpert in <span className="text-brand-orange">Frames</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    A glimpse into our classrooms, victory celebrations, mock bootcamp sessions, and interactive workshops.
                  </p>
                </div>

                {/* Sub-tabs Nav */}
                <div className="flex justify-center border-b border-gray-200 max-w-md mx-auto mb-8">
                  <div className="flex space-x-8">
                    {[
                      { id: "photos", label: "Photos" },
                      { id: "videos", label: "Videos" },
                      { id: "news", label: "News & Events" },
                    ].map((tab) => {
                      const isActive = gallerySubTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setGallerySubTab(tab.id)}
                          className={`pb-3.5 text-xs font-semibold tracking-wide border-b-2 transition-all cursor-pointer ${
                            isActive
                              ? "border-brand-orange text-brand-orange"
                              : "border-transparent text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Content Render */}
                {gallerySubTab === "photos" && (
                  <div className="space-y-5">

                    {/* Photo Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {filteredPhotos.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => setGalleryLightboxIndex(idx)}
                          className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-square cursor-zoom-in border border-slate-200/60 shadow-sm"
                        >
                          <img
                            src={item.full}
                            alt={item.category}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                            <span className="text-[9px] font-bold text-white uppercase tracking-wider bg-brand-orange px-2 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Lightbox */}
                    {galleryLightboxIndex !== null && (
                      <Lightbox
                        images={lightboxImages}
                        index={galleryLightboxIndex}
                        onClose={() => setGalleryLightboxIndex(null)}
                        onIndexChange={setGalleryLightboxIndex}
                      />
                    )}
                  </div>
                )}

                {gallerySubTab === "videos" && (
                  <div className="space-y-5">


                    {/* Videos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredVideos.map((video, idx) => (
                        <AboutVideoCard key={idx} video={video} />
                      ))}
                    </div>
                  </div>
                )}

                {gallerySubTab === "news" && (
                  <div className="max-w-3xl mx-auto space-y-5">
                    <div className="flex flex-col gap-4">
                      {NEWS_EVENTS.map((event) => (
                        <div key={event.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md flex flex-col md:flex-row gap-5 text-left items-start md:items-center">
                          {/* Type Badge */}
                          <div className="md:w-32 shrink-0 flex flex-col items-start gap-0.5">
                            <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                              event.type === "News"
                                ? "bg-blue-50 text-blue-600 border border-blue-100"
                                : event.type === "Workshop"
                                ? "bg-amber-50 text-amber-600 border border-amber-100"
                                : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                            }`}>
                              {event.type}
                            </span>
                            <span className="mt-1.5 text-[11px] text-slate-500 font-semibold">{event.date}</span>
                            <span className="text-[10px] text-slate-400">{event.time}</span>
                          </div>
                          {/* Event Content */}
                          <div className="flex-1 flex flex-col justify-center">
                            <h3 className="font-display text-xs sm:text-sm font-bold text-brand-blue leading-normal">{event.title}</h3>
                            <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed whitespace-pre-line">{event.desc}</p>
                            {event.images && event.images.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2.5">
                                {event.images.map((img, index) => (
                                  <a 
                                    key={index}
                                    href={img}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block h-16 w-24 overflow-hidden rounded-lg border border-slate-200 shadow-sm hover:scale-105 transition-transform"
                                  >
                                    <img 
                                      src={img} 
                                      alt={`Press coverage ${index + 1}`} 
                                      className="h-full w-full object-cover" 
                                    />
                                  </a>
                                ))}
                              </div>
                            )}
                            <div className="mt-2.5 flex items-center gap-1 text-[11px] text-brand-orange font-semibold">
                              <MapPin className="h-3 w-3" />
                              {event.venue}
                            </div>
                          </div>
                          {/* Right Image Slot */}
                          {event.rightImage !== undefined && (
                            <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center relative group select-none">
                              {event.rightImage ? (
                                <img src={event.rightImage} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-slate-400 p-2">
                                  <Image className="w-5 h-5 text-slate-300 mb-1" />
                                  <span className="text-[8px] font-bold text-slate-400 tracking-wider">Placeholder</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* REVIEWS TAB VIEW */}
          

            {/* CONTACT COORD TAB VIEW */}
            {activeTab === 'Contact' && (
              <div id="tab-pane-contact" className="max-w-5xl mx-auto px-4 sm:px-8 pt-1 pb-6 space-y-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="text-[11px] font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Inquiries
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-blue tracking-tight mb-3">
                    Connect with our <span className="text-brand-orange">advisors</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    Have questions about batches, duration, hybrid mode resources, or want to schedule a
                    counselling session? Reach out directly or visit our Dharampeth campus.
                  </p>
                </div>

                {/* Contact layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                      <h3 className="text-lg font-bold text-brand-blue">Nagpur Center Details</h3>
                      <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                        Our advisors are active daily from 10:00 AM to 7:00 PM (IST) to handle admission
                        inquiries and mock counselling.
                      </p>

                      <div className="space-y-4 pt-1">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                            <MapPin className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-brand-blue">Institute Address</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed font-medium">
                              {CONTACT_INFO.address}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                            <Phone className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-brand-blue">Phone Numbers</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5 font-semibold">{CONTACT_INFO.phone} / {CONTACT_INFO.phoneAlt}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                            <Mail className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-brand-blue">Email Channel</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5 font-semibold">{CONTACT_INFO.email}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                            <Clock className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-brand-blue">Enquiry Timings</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                              Monday – Sunday (10:00 AM – 7:30 PM)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Google Map */}
                    <div className="h-56 rounded-3xl overflow-hidden relative border border-slate-100 shadow-md">
                      <iframe
                        src="https://maps.google.com/maps?q=KATexpert%20Dharampeth%20Nagpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="KATexpert Dharampeth Campus Map"
                      ></iframe>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="lg:col-span-7">
                    <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ea580c]" />

                      <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                          <motion.form
                            key="query-contact-form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleContactSubmit}
                            className="space-y-4"
                          >
                            <div className="space-y-1">
                              <h3 className="text-lg font-bold text-brand-blue tracking-tight">Send An Inquiry Message</h3>
                              <p className="text-[11px] text-gray-400 font-semibold">Fill out the details below. Our admissions desk will get in touch with you.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1">
                                <label className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Full Name *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Enter your name"
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-xs font-medium rounded-lg px-3.5 py-2.5 focus:outline-none bg-white text-[#1e293b]"
                                />
                              </div>

                              <div className="flex flex-col space-y-1">
                                <label className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Contact Number *</label>
                                <input
                                  type="tel"
                                  required
                                  placeholder="Enter mobile number"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-xs font-medium rounded-lg px-3.5 py-2.5 focus:outline-none bg-white text-[#1e293b]"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1">
                                <label className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Email Address</label>
                                <input
                                  type="email"
                                  placeholder="Enter email address"
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-xs font-medium rounded-lg px-3.5 py-2.5 focus:outline-none bg-white text-[#1e293b]"
                                />
                              </div>

                              <div className="flex flex-col space-y-1">
                                <label className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Select Target Course</label>
                                <select
                                  value={formData.course}
                                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                  className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-xs font-bold text-brand-blue rounded-lg px-3.5 py-2.5 focus:outline-none bg-white"
                                >
                                  {['CAT', 'CLAT', 'IPMAT', 'MBA CET', 'MCA CET', 'CRT'].map((course) => (
                                    <option key={course} value={course}>{course} Entrance Batch</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                              <label className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Your Message / Query Notes</label>
                              <textarea
                                rows={3}
                                placeholder="Write down any questions about batch timings, fee structures, offline classes, demo schedule, etc."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-xs font-medium rounded-lg px-3.5 py-2.5 focus:outline-none resize-none bg-white text-[#1e293b]"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full bg-[#ea580c] hover:bg-[#f97316] text-white font-bold py-2.5 px-5 rounded-lg text-xs transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                            >
                              <span>Submit Query to Advisors</span>
                              <Send className="w-3.5 h-3.5 text-white" />
                            </button>
                          </motion.form>
                        ) : (
                          <motion.div
                            key="query-success-screen"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="py-10 text-center flex flex-col items-center justify-center space-y-3"
                          >
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-200 shadow-md animate-bounce">
                              <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xl font-bold text-brand-blue">Message Dispatched!</h4>
                              <p className="text-xs text-gray-500 max-w-sm mx-auto font-semibold leading-relaxed">
                                Thank you. Your inquiry regarding <strong className="text-brand-orange">{formData.course}</strong> has been received successfully.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
          </motion.div>
        </AnimatePresence>
        
        {/* Floating Dossier drawer support for the Faculty tab */}
        <DossierDrawer mentorName={selectedMentor} onClose={() => setSelectedMentor(null)} />
      </div>
    </div>
  );
}
