import { useEffect } from "react";
import { BookOpen, Binary, Check, ArrowRight } from "lucide-react";
import "@/course-pages.css";

export default function CurriculumPage() {
  useEffect(() => {
    // Add page-specific scroll animation triggers
    const animObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".animate-on-scroll");
    revealElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(25px)";
      el.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      animObserver.observe(el);
    });

    return () => animObserver.disconnect();
  }, []);

  return (
    <div className="curriculum-page text-slate-800">
      {/* Hero Section */}
      <section className="hero-section curriculum-hero animate-on-scroll">
        <div className="container-course hero-container">
          <div className="hero-badge animate-fade-in-up">
            <span className="badge-line"></span>
            <span className="badge-text">TACTICAL STRATEGY & PEDAGOGY</span>
          </div>
          <h1 className="hero-title animate-fade-in-up">
            The Architecture <br /> of <span className="highlight">Success.</span>
          </h1>
          <p className="hero-description animate-fade-in-up">
            Our curriculum doesn't rely on rote memorization. It is built on first-principles cognitive strategy and formula-free reasoning, designed to withstand the highest pressures of elite competitive exams.
          </p>
        </div>
      </section>

      {/* Core Tracks Section */}
      <section className="curriculum-tracks-section animate-on-scroll">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle">CHOOSE YOUR PATHWAY</span>
            <h2 className="section-title">The Academic Tracks</h2>
          </div>

          <div className="tracks-grid">
            {/* Track 1: Verbal */}
            <div className="track-card track-blue">
              <div className="track-icon-wrapper">
                <BookOpen className="w-8 h-8 text-brand-blue" />
              </div>
              <div className="track-content">
                <span className="track-badge">8 WEEKS</span>
                <h3 className="track-title">Cognitive Verbal Mastery</h3>
                <p className="track-desc">
                  Led by Dr. Arumita Pawa. Retrain your mind to read actively, deconstruct structural arguments, and navigate Reading Comprehension and Verbal Reasoning with absolute precision.
                </p>
                
                <ul className="track-features">
                  <li><Check className="check-icon w-4 h-4" /> <strong>Cognitive Behavioral Reading (CBRS)</strong></li>
                  <li><Check className="check-icon w-4 h-4" /> Semantic & Structural Mapping</li>
                  <li><Check className="check-icon w-4 h-4" /> Logic & Inference Architecture</li>
                  <li><Check className="check-icon w-4 h-4" /> Elimination Techniques for Tough Options</li>
                </ul>
                
                <a href="/#faculty" className="btn btn-secondary track-btn">Meet Chief Mentor &rarr;</a>
              </div>
            </div>

            {/* Track 2: Quant */}
            <div className="track-card track-peach">
              <div className="track-icon-wrapper">
                <Binary className="w-8 h-8 text-brand-orange" />
              </div>
              <div className="track-content">
                <span className="track-badge">10 WEEKS</span>
                <h3 className="track-title">Logic-First Quantitative Aptitude</h3>
                <p className="track-desc">
                  Led by Krish Vyas. Move away from formulas and equations. Develop absolute numerical mastery through logical symmetry, patterns, and intuitive problem-solving workflows.
                </p>
                
                <ul className="track-features">
                  <li><Check className="check-icon w-4 h-4" /> <strong>Formula-Free Logic</strong></li>
                  <li><Check className="check-icon w-4 h-4" /> Numerical Pattern Recognition</li>
                  <li><Check className="check-icon w-4 h-4" /> Speed Calculation Sprints</li>
                  <li><Check className="check-icon w-4 h-4" /> High-Speed Data Interpretation</li>
                </ul>
                
                <a href="/#faculty" className="btn btn-secondary track-btn">Meet Lead Strategist &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Phases Timeline Section */}
      <section className="phases-section animate-on-scroll">
        <div className="container-course">
          <div className="section-header">
            <span className="subtitle">THE LEARNING ARC</span>
            <h2 className="section-title">Program Phases</h2>
          </div>

          <div className="phases-timeline">
            {/* Phase 1 */}
            <div className="phase-item">
              <div className="phase-number">01</div>
              <div className="phase-content">
                <h3 className="phase-title">Foundation & Mindset Reset</h3>
                <span className="phase-duration">Weeks 1 - 4</span>
                <p className="phase-desc">
                  Dismantle bad habits, formula dependency, and speed reading myths. We reconstruct core mathematical logic and reading patterns from the ground up, establishing structured cognitive baselines.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="phase-item">
              <div className="phase-number">02</div>
              <div className="phase-content">
                <h3 className="phase-title">Tactical Execution & Speed</h3>
                <span className="phase-duration">Weeks 5 - 8</span>
                <p className="phase-desc">
                  Introduce advanced time-saving hacks, option-elimination frameworks, and pattern recognition rules. Students practice real-time strategic decisions to solve questions in under 30 seconds.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="phase-item">
              <div className="phase-number">03</div>
              <div className="phase-content">
                <h3 className="phase-title">Elite Diagnostics & Mentoring</h3>
                <span className="phase-duration">Weeks 9 - 12</span>
                <p className="phase-desc">
                  High-intensity mock testing combined with personalized diagnostic audits. Dr. Pawa and Krish Vyas conduct 1-on-1 profile mapping to curate custom exam-day strategies for each aspirant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section animate-on-scroll" id="apply">
        <div className="cta-watermark">EXCEL</div>
        <div className="container-course cta-container">
          <h2 className="cta-title">Are you ready to transcend?</h2>
          <p className="cta-description">
            Applications for our elite mentorship program are screened on a rolling basis. Join a cohort built strictly for academic excellence.
          </p>
          <a href="/#contact" className="btn btn-primary cta-btn">
            <span>START YOUR APPLICATION</span>
          </a>
        </div>
      </section>
    </div>
  );
}
