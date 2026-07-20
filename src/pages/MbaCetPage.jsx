import { useState, useEffect } from "react";
import { ArrowRight, Download, FileText, Target, Clock, Tag, Compass, RefreshCw, Sliders, Calendar } from "lucide-react";
import "@/course-pages.css";

import { SYLLABUS_DATA } from "@/data/syllabus-mba";

export default function MbaCetPage() {
  const [activeTab, setActiveTab] = useState('logical');
  const [expandedTopic, setExpandedTopic] = useState(null);

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
    <div className="mba-cet-page text-slate-800">
      {/* React Page Hero Section */}
      <section className="hero-section mca-hero animate-on-scroll" id="mbaHeroSection">
        <div className="container-course hero-container">
          <div className="grid-hero">
            <div className="hero-left">
              <div className="mba-badge" id="mbaBadge">
                <span className="badge-dot">•</span>
                <span className="badge-text">1M CERTIFIED COACHING - MASTERCLASS 2026</span>
              </div>
              <h1 className="hero-title" id="mbaHeroTitle">
                Master the <span className="highlight">Maharashtra</span> <br /> MBA CET Roadmap
              </h1>
              <p className="hero-description" id="mbaHeroDesc">
                Prepare for Maharashtra's top B-schools like JBIMS, SIMSREE, PUMBA, and Welingkar with our ultimate Test Series.
              </p>

              <div className="hero-actions-container" style={{ marginTop: '2rem' }}>
                <a href="/#contact" className="btn-3d-orange" id="btnHeroCta">
                  <span>Start Free Trial</span>
                  <ArrowRight style={{ marginLeft: '0.5rem', width: '18px', height: '18px' }} />
                </a>
                <a 
                  href="/resources/docs/MAH_MBA_CET_2026_Syllabus.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-3d-blue-outline"
                  id="btnHeroDownload"
                >
                  <Download className="w-[18px] h-[18px] mr-2 inline" />
                  <span>Download Syllabus</span>
                </a>
              </div>
            </div>
            <div className="hero-right relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#ea580c]/30 via-[#ea580c]/5 to-transparent blur-2xl" aria-hidden />
              <div className="relative rounded-2xl border border-slate-200/50 bg-slate-50/50 p-2 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
                  alt="MBA CET Prep"
                  className="w-full aspect-[16/10] rounded-xl object-cover max-h-72"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get in the Program Section */}
      <section className="program-features-section animate-on-scroll" id="programSection">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle" style={{ color: 'var(--color-orange)' }}>ELITE INCLUSIONS</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800 }}>What You Get in the Program</h2>
            <p className="section-desc">Get access to premium test tracks designed by India's top MBA consultants.</p>
          </div>

          <div className="program-grid">
            <div className="program-card">
              <div className="program-card-icon">
                <FileText className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="program-card-num">25</div>
              <h4 className="program-card-title">Full-Length MBA CET Mock Tests</h4>
              <p className="program-card-desc">Simulate actual exam scenarios with expert-created question papers.</p>
            </div>

            <div className="program-card">
              <div className="program-card-icon">
                <Target className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="program-card-num">100+</div>
              <h4 className="program-card-title">Topic-Wise Practice Tests</h4>
              <p className="program-card-desc">Master every chapter with targeted questions and solutions.</p>
            </div>

            <div className="program-card">
              <div className="program-card-icon">
                <Clock className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="program-card-num">14</div>
              <h4 className="program-card-title">Sectional Tests</h4>
              <p className="program-card-desc">Deep-dive into specific sections to eliminate your weak areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Ecosystem Section (Challenge Zone & Planner) */}
      <section className="interactive-ecosystem-section animate-on-scroll" id="ecosystemSection">
        <div className="container-course">
          <div className="ecosystem-grid">
            
            {/* Left Side Info Blocks */}
            <div className="ecosystem-left text-left">
              <div className="ecosystem-block">
                <h3>Challenge Zone - Play. Compete. Learn.</h3>
                <p>Play interactive, high-energy practice games. Compete with peers to see where you rank, and learn through a gamified environment.</p>
              </div>
              
              <div className="ecosystem-block mt-8">
                <h3>Smart Study Planner - Your Adaptive Prep Partner</h3>
                <p>A powerful practice tool that helps you stay organized and consistent with a structured daily plan that adapts to your pace.</p>
              </div>
            </div>

            {/* Right Side Guide List */}
            <div className="ecosystem-right text-left">
              <div className="planner-guide-title">How To Use The Planner</div>
              
              <div className="step-item step-tag">
                <div className="step-icon-wrapper">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div className="step-details">
                  <h4>Tag Questions</h4>
                  <p>Mark important, tricky, or critical questions for quick revision later.</p>
                </div>
              </div>

              <div className="step-item step-goal">
                <div className="step-icon-wrapper">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <div className="step-details">
                  <h4>Meet Daily Goals</h4>
                  <p>Follow recommended targets tailored to match your prep phase and progress.</p>
                </div>
              </div>

              <div className="step-item step-revise">
                <div className="step-icon-wrapper">
                  <RefreshCw className="w-5 h-5 text-white" />
                </div>
                <div className="step-details">
                  <h4>Revise Regularly</h4>
                  <p>Reinforce core concepts regularly using our dynamic smart revision cycles.</p>
                </div>
              </div>

              <div className="step-item step-effort">
                <div className="step-icon-wrapper">
                  <Sliders className="w-5 h-5 text-white" />
                </div>
                <div className="step-details">
                  <h4>Adjust Daily Effort</h4>
                  <p>Dynamically increase or decrease workload based on your daily study schedule.</p>
                </div>
              </div>

              {/* Highlighted Active Step */}
              <div className="step-item step-active">
                <div className="step-icon-wrapper">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="step-details">
                  <h4>Set Your Deadline</h4>
                  <p>Specify your target dates and plans to visualize how you're moving toward success.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Syllabus Section (SEO & Academic Rigor) */}
      <section id="syllabus" className="syllabus-section animate-on-scroll">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle">OFFICIAL SYLLABUS DIRECTORY</span>
            <h2 className="section-title">The Complete Syllabus & Marking Scheme</h2>
            <p className="section-desc">Examine the MAH-MBA-CET 2026 course curriculum by clicking on each section below.</p>
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
                  id={`tabBtn-${subject.id}`}
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
                        id={`accordionHeader-${activeTab}-${index}`}
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
                  <td className="p-4"><strong>200 Questions</strong></td>
                  <td className="p-4"><strong>1 Mark</strong></td>
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
              <p className="text-xs text-slate-500">150 Minutes (Composite time limit)</p>
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
            <p className="cta-subtext text-slate-300 max-w-xl mx-auto text-sm leading-relaxed mb-8">Join the ranks of successful MBA candidates who secured seats at JBIMS and SIMSREE. Get started today.</p>
            
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
