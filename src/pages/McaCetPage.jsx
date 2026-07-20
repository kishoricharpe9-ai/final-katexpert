import { useState, useEffect } from "react";
import { ArrowRight, Download, FileText, Target, Clock, CalendarDays, Monitor, GitBranch, Gamepad2 } from "lucide-react";
import "@/course-pages.css";

import { SYLLABUS_DATA } from "@/data/syllabus-mca";

export default function McaCetPage() {
  const [activeTab, setActiveTab] = useState('maths');
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [weeklyHours, setWeeklyHours] = useState(15);
  const [isPlannerConfigured, setIsPlannerConfigured] = useState(false);

  useEffect(() => {
    const animObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.animate-on-scroll');
    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      animObserver.observe(el);
    });

    return () => animObserver.disconnect();
  }, []);

  const activeSubject = SYLLABUS_DATA.find(s => s.id === activeTab);

  return (
    <div className="mca-cet-page text-slate-800">
      {/* React Page Hero Section */}
      <section className="hero-section mca-hero animate-on-scroll">
        <div className="container-course hero-container">
          <div className="grid-hero">
            <div className="hero-left">
              <div className="mca-badge">
                <span className="badge-dot">•</span>
                <span className="badge-text">IM CERTIFIED COACHING</span>
              </div>
              <h1 className="hero-title">
                Master the <span className="highlight">MCA CET</span> <br /> with Academic Rigor
              </h1>
              <p className="hero-description">
                Prepare smarter with our comprehensive MCA CET Test Series. The perfect toolkit for aspirants aiming for top MCA colleges across Maharashtra.
              </p>

              {/* Key stats row */}
              <div className="stats-row">
                <div className="stat-card">
                  <span className="stat-num">25+</span>
                  <span className="stat-lbl">Full Mock Tests</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">100+</span>
                  <span className="stat-lbl">Topic Tests</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">99%</span>
                  <span className="stat-lbl">Success Rate</span>
                </div>
              </div>

              <div className="hero-actions-container">
                <a href="/#contact" className="btn btn-primary cta-btn">
                  <span>Start Free Trial</span>
                </a>
                <a 
                  href="/resources/docs/MAH_MCA_CET_2026_Syllabus.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary mca-outlined-btn"
                >
                  Download Syllabus
                </a>
              </div>
            </div>
            <div className="hero-right relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#ea580c]/30 via-[#ea580c]/5 to-transparent blur-2xl" aria-hidden />
              <div className="relative rounded-2xl border border-slate-200/50 bg-slate-50/50 p-2 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                  alt="MCA CET Prep"
                  className="w-full aspect-[16/10] rounded-xl object-cover max-h-72"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Caliber Curriculum Section */}
      <section className="high-caliber-section animate-on-scroll">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle">HIGH-CALIBER CURRICULUM</span>
            <h2 className="section-title">Focused on Core Domains</h2>
            <p className="section-desc">Focused on the core domains of MCA CET: Mathematics, Logic, and Computer Applications.</p>
          </div>

          {/* Top Row: Challenge Zone and Smart Study Planner */}
          <div className="curriculum-top-grid">
            
            <div className="curriculum-interactive-card challenge-zone text-left">
              <span className="card-pill">NEW FEATURE</span>
              <h3>Challenge Zone</h3>
              <p>Boost your performance in a competitive environment. Solve challenge questions, improve speed, and learn with real-time feedback. Play. Compete. Learn.</p>
              <ul className="card-list">
                <li><span className="check-bullet">✓</span> Real-time Leaderboards & Rankings</li>
                <li><span className="check-bullet">✓</span> Micro-League Tests for Group studies</li>
              </ul>
              
              <div className="game-placeholder">
                <div className="game-icon-bg">
                  <Gamepad2 className="w-8 h-8 text-white mx-auto mt-2" />
                </div>
              </div>
            </div>

            <div className="curriculum-interactive-card smart-planner text-left">
              <div className="card-icon-header">
                <CalendarDays className="w-8 h-8 text-[#ea580c]" />
              </div>
              <h3>Smart Study Planner</h3>
              <p>Your adaptive prep partner that plans, stays consistent, and tracks progress effortlessly.</p>
              
              {/* Interactive planner slider widgets */}
              <div className="planner-interactive-box">
                <label className="text-sm font-semibold text-[#1e293b] block mb-2">
                  Weekly Study Commitment: <strong className="text-[#ea580c]">{weeklyHours} Hours</strong>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  value={weeklyHours} 
                  onChange={(e) => {
                    setWeeklyHours(Number(e.target.value));
                    setIsPlannerConfigured(true);
                  }} 
                  className="planner-slider w-full accent-[#ea580c]"
                />
                
                <div className="study-outcome-box mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 min-h-[50px] flex items-center">
                  {isPlannerConfigured ? (
                    <p className="outcome-text text-active text-xs text-slate-600 font-semibold leading-relaxed">
                      ✨ At {weeklyHours}h/week, you'll complete the full syllabus in <strong>{Math.ceil(240 / weeklyHours)} weeks</strong>.
                    </p>
                  ) : (
                    <p className="outcome-text text-xs text-slate-400 font-medium">Slide the bar to calculate your learning pace.</p>
                  )}
                </div>
              </div>

              <button className="planner-link-btn mt-4 font-bold text-xs uppercase tracking-wider text-[#ea580c] hover:text-[#f97316] flex items-center gap-1 cursor-pointer" onClick={() => setIsPlannerConfigured(true)}>
                <span>Configure Planner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Bottom Row: Mathematics, Computer Apps, Logical Reasoning */}
          <div className="curriculum-bottom-cards mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="subject-item-card p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <span className="subject-icon text-3xl font-bold text-[#0a2e5c] block mb-3">∑</span>
              <h4 className="font-bold text-[#0a2e5c] mb-1">Mathematics</h4>
              <p className="text-xs text-slate-500">Rigorous problem-solving for higher educational outcomes.</p>
            </div>

            <div className="subject-item-card p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <span className="subject-icon block mb-3">
                <Monitor className="w-6 h-6 text-[#0a2e5c]" />
              </span>
              <h4 className="font-bold text-[#0a2e5c] mb-1">Computer Apps</h4>
              <p className="text-xs text-slate-500">OS, Networking, and Programming fundamentals simplified.</p>
            </div>

            <div className="subject-item-card p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <span className="subject-icon block mb-3">
                <GitBranch className="w-6 h-6 text-[#0a2e5c]" />
              </span>
              <h4 className="font-bold text-[#0a2e5c] mb-1">Logical Reasoning</h4>
              <p className="text-xs text-slate-500">Enhance analytical thinking and deductive logic skills.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Syllabus Section */}
      <section id="syllabus" className="syllabus-section animate-on-scroll">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle">OFFICIAL SYLLABUS DIRECTORY</span>
            <h2 className="section-title">The Complete Syllabus & marking Scheme</h2>
            <p className="section-desc">Examine the MAH-MCA-CET 2026 course curriculum by clicking on each section below.</p>
          </div>

          <div className="syllabus-container text-left">
            
            {/* Horizontal Category Tabs */}
            <div className="syllabus-tabs">
              {SYLLABUS_DATA.map((subject) => (
                <button 
                  key={subject.id} 
                  className={`syllabus-tab-btn ${activeTab === subject.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(subject.id);
                    setExpandedTopic(null);
                  }}
                >
                  {subject.title}
                  <span className="tab-meta">{subject.questions} Qs | {subject.marks} Marks</span>
                </button>
              ))}
            </div>

            {/* Tab content area */}
            <div className="syllabus-content-box">
              <div className="syllabus-intro">
                <h3>{activeSubject.title} Syllabus</h3>
                <p>{activeSubject.description}</p>
              </div>

              {/* Accordion topics list */}
              <div className="accordion-list">
                {activeSubject.topics.map((topic, index) => {
                  const isExpanded = expandedTopic === index;
                  return (
                    <div key={index} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                      <button 
                        className="accordion-header flex justify-between items-center w-full"
                        onClick={() => setExpandedTopic(isExpanded ? null : index)}
                      >
                        <span>{topic.name}</span>
                        <span className="accordion-toggle-icon font-bold text-lg">{isExpanded ? '−' : '+'}</span>
                      </button>
                      
                      {isExpanded && (
                        <div className="accordion-body p-4 bg-slate-50 border-t border-slate-100">
                          <p className="text-sm text-slate-600 leading-relaxed">{topic.details}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marking Scheme Table */}
      <section className="marking-scheme-section animate-on-scroll" id="markingSchemeSection">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle">EXAM FORMAT BREAKDOWN</span>
            <h2 className="section-title">Syllabus Weightages & Marking Scheme</h2>
          </div>

          <div className="table-wrapper">
            <table className="marking-table w-full text-left">
              <thead>
                <tr>
                  <th className="p-4 bg-[#0a2e5c] text-white">Section Topic</th>
                  <th className="p-4 bg-[#0a2e5c] text-white">No. of Questions</th>
                  <th className="p-4 bg-[#0a2e5c] text-white">Marks per Question</th>
                  <th className="p-4 bg-[#0a2e5c] text-white">Maximum Marks</th>
                </tr>
              </thead>
              <tbody>
                {SYLLABUS_DATA.map((subject) => (
                  <tr key={subject.id} className="border-b border-slate-100">
                    <td className="p-4"><strong>{subject.title}</strong></td>
                    <td className="p-4">{subject.questions}</td>
                    <td className="p-4">{subject.marks / subject.questions}</td>
                    <td className="p-4">{subject.marks}</td>
                  </tr>
                ))}
                <tr className="totals-row bg-slate-50 font-bold border-b border-slate-200">
                  <td className="p-4"><strong>Total Weightage</strong></td>
                  <td className="p-4"><strong>100 Questions</strong></td>
                  <td className="p-4"><strong>2 Marks</strong></td>
                  <td className="p-4"><strong>200 Marks</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key format stats list */}
          <div className="format-grid mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="format-card p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <h5 className="font-bold text-[#0a2e5c] mb-2">Negative Marking</h5>
              <p className="text-xs text-slate-500">There is no negative marking system for this test.</p>
            </div>
            <div className="format-card p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <h5 className="font-bold text-[#0a2e5c] mb-2">Test Duration</h5>
              <p className="text-xs text-slate-500">90 Minutes (Composite time limit)</p>
            </div>
            <div className="format-card p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <h5 className="font-bold text-[#0a2e5c] mb-2">Medium of CET</h5>
              <p className="text-xs text-slate-500">English Language only</p>
            </div>
            <div className="format-card p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <h5 className="font-bold text-[#0a2e5c] mb-2">Mode of Exam</h5>
              <p className="text-xs text-slate-500">Online (Computer Based Test)</p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="mba-bottom-cta animate-on-scroll py-16" id="bottomCtaSection">
        <div className="container-course">
          <div className="mba-cta-card p-8 sm:p-12 rounded-3xl text-center text-white relative overflow-hidden bg-brand-blue">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl -z-1" />
            
            <span className="subtitle" style={{ color: 'var(--color-orange)', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 800 }}>LIMITED BATCH SEATS</span>
            <h2 className="text-3xl font-bold font-display mt-2 mb-4">Your Adaptive Prep Partner Awaits</h2>
            <p className="cta-subtext text-slate-300 max-w-xl mx-auto text-sm leading-relaxed mb-8">Join the ranks of successful MCA candidates who secured seats at top colleges. Get started today.</p>
            
            <div className="mba-cta-actions flex flex-wrap justify-center gap-4">
              <a href="/#contact" className="btn-3d-orange-cta" id="bottomCtaEnroll">
                <span>Enroll Now for 2026</span>
              </a>
              <a href="/#contact" className="btn-3d-secondary-cta" id="bottomCtaTalk">
                <span>Talk to Academic Mentor</span>
              </a>
            </div>

            <div className="mba-rating-footer mt-8 text-xs text-slate-400 font-semibold">
              <span className="stars text-brand-orange mr-2">★★★★★</span>
              <span>30k+ Students Rated Across All Platforms</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
