import { useState, useEffect } from "react";
import { X, Award, Compass, LineChart } from "lucide-react";
import arumitaImg from "@/assets/arumita_pawa.png";
import krishImg from "@/assets/krish_vyas.png";
import sachinImg from "@/assets/sachin-sahu.png";
import "@/course-pages.css";

const DOSSIERS = {
  "Dr Arumita Pawa": {
    name: "Dr. Arumita Pawa",
    role: "CHIEF MENTOR & VISIONARY",
    image: arumitaImg,
    academic: {
      bio: "Dr. Arumita Pawa has spent over two decades researching, refining, and teaching cognitive verbal strategies. Holding a PhD in Cognitive Linguistics, she has developed standard-setting frameworks for Reading Comprehension and Verbal Reasoning that have helped thousands of students crack top-tier business school exams.",
      highlights: [
        "<strong>Doctorate in Cognitive Linguistics</strong> from a premier research university.",
        "<strong>20+ Years</strong> of core pedagogical design and high-level classroom instruction.",
        "Created the <strong>Cognitive Behavioral Reading System (CBRS)</strong> for competitive reading.",
        "Chief designer of KatExpert's elite Verbal curriculum."
      ]
    },
    philosophy: {
      bio: "Dr. Pawa believes that standard tutoring focuses purely on grammar and vocabulary rules, which fail under pressure. True verbal mastery comes from restructuring how students read—analyzing structural intention, tracking semantic progression, and maintaining cognitive control.",
      highlights: [
        "Focus on <strong>Structural Reading</strong> rather than word-by-word comprehension.",
        "Integration of <strong>Logical Frameworks</strong> into reading passages.",
        "Mindset training to eliminate anxiety and cognitive overload in test scenarios."
      ]
    },
    metrics: {
      stats: [
        { number: "10K+", label: "Success Stories & Alumni" },
        { number: "99.8%", label: "Top Verbal Percentiles Coached" },
        { number: "250+", label: "IIM Ahmedabad admits in last decade" },
        { number: "15+", label: "National research papers published" }
      ]
    }
  },
  "Prof. Krish Vyas": {
    name: "Krish Vyas",
    role: "LEAD QUANT STRATEGIST",
    image: krishImg,
    academic: {
      bio: "Krish Vyas is an IIT alumnus and a premier quantitative reasoning expert. Known for his legendary speed-calculation methods, Krish has spent 10 years breaking down complex algebra, geometry, and number theory topics into logic-based intuition that bypasses tedious formulas.",
      highlights: [
        "<strong>B.Tech from IIT Bombay</strong> with honors.",
        "<strong>10+ Years</strong> of training elite high-performing math and quant cohorts.",
        "Author of the <strong>'Logic-First Quant'</strong> methodology series.",
        "Designed the 'Quant Speedrun' calculation system for IPMAT and CAT."
      ]
    },
    philosophy: {
      bio: "Krish teaches that formulas are a crutch that limits speed and accuracy in high-stakes environments. His approach reclaims the natural logic of numbers, training students to look for symmetry, scale, and pattern recognition to solve problems in under 30 seconds.",
      highlights: [
        "<strong>Formula-Free Logic</strong>: solving 80% of problems through deduction.",
        "Focus on <strong>Strategic Time Management</strong> and question selection principles.",
        "Calculation sprints to build deep numerical familiarity and speed."
      ]
    },
    metrics: {
      stats: [
        { number: "99.99", label: "His Personal Highest Quant Score" },
        { number: "300+", label: "99+ Percentile Coached in Quant" },
        { number: "40%", label: "Average Speed Improvement in 8 Weeks" },
        { number: "5000+", label: "Hours of live classroom coaching" }
      ]
    }
  },
  "Sachin Sahu": {
    name: "Sachin Sahu",
    role: "DILR FACULTY & CAT MENTOR",
    image: sachinImg,
    academic: {
      bio: "Sachin Sahu is a CAT mentor specializing in Data Interpretation & Logical Reasoning (DILR), with an outstanding track record of academic excellence. Over multiple attempts, he has mastered the logic required to crack the toughest parts of the entrance exam and now guides aspirants to achieve similar results.",
      highlights: [
        "<strong>99+ Percentile in DILR</strong> across three consecutive CAT attempts.",
        "<strong>99.2 Overall CAT Percentile</strong> with 99 percentile in Quantitative Aptitude.",
        "Converted <strong>IIM Mumbai (2026)</strong> and completed MBA from <strong>NMIMS</strong>.",
        "Scored <strong>98.85 percentile in SNAP</strong> and <strong>261 in NMAT</strong>."
      ]
    },
    philosophy: {
      bio: "Sachin's teaching philosophy centers on building strong, concept-driven problem-solving skills rather than relying on tricks or shortcuts. He believes that mastering non-standard DILR sets requires structured analytical logic, consistency, and a disciplined mindset.",
      highlights: [
        "Focus on <strong>fundamental concepts</strong> over shortcuts that fail in complex exam scenarios.",
        "Training to tackle <strong>unconventional and non-standard DILR sets</strong>.",
        "Bringing athletic discipline and focus to exam preparation strategy."
      ]
    },
    metrics: {
      stats: [
        { number: "99.9+", label: "Personal DILR Percentile" },
        { number: "3x", label: "Consecutive 99+ %ile in DILR" },
        { number: "99.2", label: "Overall CAT Percentile" },
        { number: "7th", label: "Age Group - Ironman 70.3 Vietnam" }
      ]
    }
  }
};

export default function DossierDrawer({ mentorName, onClose }) {
  const [activeTab, setActiveTab] = useState("academic");
  const data = DOSSIERS[mentorName];

  // Disable body scroll when drawer is open
  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [data]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!data) return null;

  return (
    <div className="dossier-drawer active text-slate-800 text-left">
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer-content">
        <button className="close-drawer cursor-pointer" onClick={onClose} aria-label="Close Drawer">
          <X className="w-5 h-5" />
        </button>

        <div className="drawer-inner">
          {/* Header of Dossier */}
          <div className="dossier-header flex items-center gap-5">
            <div className="dossier-avatar-wrapper shrink-0">
              <img src={data.image} alt={data.name} className="dossier-avatar w-full h-full object-cover" />
            </div>
            <div className="dossier-title-group">
              <h2 className="text-2xl font-bold text-navy font-display">{data.name}</h2>
              <span className="dossier-subtitle text-xs font-bold text-brand-orange uppercase tracking-wider block mt-1">
                {data.role}
              </span>
            </div>
          </div>

          {/* Dossier Navigation Tabs */}
          <div className="dossier-tabs flex border-b border-slate-100 gap-6 mb-6">
            <button
              onClick={() => setActiveTab("academic")}
              className={`dossier-tab-btn pb-2 font-display font-bold text-xs uppercase tracking-wider cursor-pointer relative ${
                activeTab === "academic" ? "active text-navy" : "text-slate-400"
              }`}
            >
              Academic Dossier
              {activeTab === "academic" && <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#0a2e5c]" />}
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`dossier-tab-btn pb-2 font-display font-bold text-xs uppercase tracking-wider cursor-pointer relative ${
                activeTab === "philosophy" ? "active text-navy" : "text-slate-400"
              }`}
            >
              Philosophy
              {activeTab === "philosophy" && <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#0a2e5c]" />}
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`dossier-tab-btn pb-2 font-display font-bold text-xs uppercase tracking-wider cursor-pointer relative ${
                activeTab === "metrics" ? "active text-navy" : "text-slate-400"
              }`}
            >
              Success Metrics
              {activeTab === "metrics" && <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#0a2e5c]" />}
            </button>
          </div>

          {/* Academic Tab Content */}
          {activeTab === "academic" && (
            <div className="dossier-tab-pane active" id="tab-academic">
              <h3 className="dossier-section-title text-sm font-bold text-navy flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-brand-orange" />
                <span>Academic Credentials & Background</span>
              </h3>
              <p className="dossier-text-block text-sm text-slate-600 leading-relaxed mb-6">{data.academic.bio}</p>
              <ul className="dossier-list space-y-3 pl-4 list-disc text-sm text-slate-600">
                {data.academic.highlights.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          )}

          {/* Philosophy Tab Content */}
          {activeTab === "philosophy" && (
            <div className="dossier-tab-pane active" id="tab-philosophy">
              <h3 className="dossier-section-title text-sm font-bold text-navy flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-brand-orange" />
                <span>Mentorship Philosophy</span>
              </h3>
              <p className="dossier-text-block text-sm text-slate-600 leading-relaxed mb-6">{data.philosophy.bio}</p>
              <ul className="dossier-list space-y-3 pl-4 list-disc text-sm text-slate-600">
                {data.philosophy.highlights.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          )}

          {/* Metrics Tab Content */}
          {activeTab === "metrics" && (
            <div className="dossier-tab-pane active" id="tab-metrics">
              <h3 className="dossier-section-title text-sm font-bold text-navy flex items-center gap-2 mb-4">
                <LineChart className="w-5 h-5 text-brand-orange" />
                <span>Track Record of Success</span>
              </h3>
              <div className="metric-grid grid grid-cols-2 gap-4 mb-6">
                {data.metrics.stats.map((item, idx) => (
                  <div key={idx} className="metric-card p-4 bg-slate-50 border-l-4 border-navy rounded">
                    <div className="metric-number text-2xl font-bold text-brand-orange font-display">{item.number}</div>
                    <div className="metric-label text-xs text-navy font-semibold mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="dossier-text-block text-xs text-slate-500 leading-relaxed">
                Our track record is validated by audits. We focus strictly on elite mentoring, restricting cohorts to maintain standard excellence.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
