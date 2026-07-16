import { Target, Eye, Award, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/about.jpg";
import { Reveal, SectionHeading } from "./section";

const POINTS = [
  { 
    icon: Target, 
    title: "Our Mission", 
    text: "We’re here to support every MBA, BBA, MCA, and NLU dream with the right guidance, honest mentorship, and smart preparation. From your first step to the final exam, we walk with you—helping you grow, stay confident, and achieve the college you’ve set your heart on." 
  },
  { 
    icon: Eye, 
    title: "Our Vision", 
    text: "To become the most trusted and result-driven institute that empowers students to secure admissions into top B-schools, MCA programs, and National Law Universities through excellence in teaching, mentorship, and innovation." 
  }
];

function About() {
  return (
    <section id="about" className="bg-secondary/40 py-16 sm:py-20">
     
      <div className="container-x max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
        
       
        <Reveal className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="About KAT Expert"
            title={
              <>
                A place to learn, <span className="text-gradient-accent">a place to grow</span>
              </>
            }
          />
          
          
          <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
            For over a decade, faculties of KAT Expert has guided thousands of students from Nagpur and across India into the country's most prestigious institutes. We combine concept-first teaching, relentless mentorship and data-driven mock analysis to build exam-day champions.
          </p>
          
        
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {POINTS.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-4 shadow-soft">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                  <p.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-2.5 font-display text-base font-bold text-navy">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          
         
          {/* <div className="mt-5 flex flex-wrap gap-5">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-navy">
              <Award className="h-4 w-4 text-accent" /> 12+ years of excellence
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-navy">
              <Users className="h-4 w-4 text-accent" /> 5000+ success stories
            </span>
          </div> */}

          <div className="mt-6">
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center gap-1.5 text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 active:scale-95 transition-all group/btn cursor-pointer"
            > 
              Learn More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 text-white" /> 
            </Link> 
          </div>
        </Reveal>

       
        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative max-w-md lg:max-w-none mx-auto">
            <div className="absolute -inset-2 -z-10 rounded-[1.5rem] bg-gradient-to-br from-accent/20 to-navy/10 blur-xl" />
            
            <img
              src={aboutImg}
              alt="KAT Expert students celebrating their success"
              width={1200}
              height={1000}
              loading="lazy"
              className="w-full rounded-[1.25rem] object-cover shadow-card"
            />
            
           
            {/* <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-3 shadow-card border border-border/40">
              <div className="font-display text-xl font-extrabold text-navy">96%</div>
              <div className="text-[10px] text-muted-foreground font-medium">Placement success</div>
            </div> */}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export { About };