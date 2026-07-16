import { Linkedin, Twitter, Mail, Briefcase, GraduationCap, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FACULTY } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./section";

export function Faculty() {
  return (
    <section id="faculty" className="bg-background py-16 sm:py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4 max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 rounded-full mb-3">
          Meet Your Mentors
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-navy">
          Learn from <span className="text-accent">the best</span>
        </h2>
      </div>

      {/* Faculty Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4 w-full">
        {/* Added .slice(0, 2) to only render the first two faculties */}
        {FACULTY.slice(0, 2).map((f, i) => (
          <Reveal key={f.name} delay={i * 0.05} className="w-full lg:w-[calc(50%-12px)]">
            <article className="group relative flex flex-col sm:flex-row h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card w-full gap-5">
              {/* Left Profile Image Side */}
              <div className="relative w-full sm:w-[160px] md:w-[180px] shrink-0">
                <div className="grid aspect-square w-full place-items-center overflow-hidden rounded-xl bg-navy/5 relative">
                  <User className="absolute h-12 w-12 text-navy/20 strokeWidth={1.2}" />
                  {f.image && (
                    <img
                      src={f.image}
                      alt={f.name}
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 loading=lazy"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 z-10 rounded-full bg-black/40 border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                    {f.experience} Exp
                  </span>
                </div>
              </div>

              {/* Right Text Body & Info Side */}
              <div className="flex flex-col flex-grow min-w-0 justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-navy transition-colors group-hover:text-accent truncate">
                    {f.name}
                  </h3>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {f.designation}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2 md:line-clamp-3">
                    {f.blurb}
                  </p>
                  
                  {/* Meta Qualification Specs Row */}
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-medium text-foreground/75 border-t border-border pt-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px]">
                      <Briefcase className="h-3 w-3 text-accent" /> {f.experience}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px]">
                      <User className="h-3 w-3 text-accent" /> Mentored {f.students} Students
                    </span>
                  </div>

                  {/* Subject Matter Expertise Pills Track */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {f.expertise.slice(0, 3).map((e) => (
                      <span
                        key={e}
                        className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions Container */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
                  <div className="flex gap-1">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#contact"
                        aria-label="Social Link Connection"
                        className="grid h-7 w-7 place-items-center rounded-md border border-border text-foreground/60 transition-all hover:border-accent hover:bg-accent/5 hover:text-accent"
                      >
                        <Icon className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                  <Link
                    to={`/about?tab=Faculty#${f.slug}`}
                    className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-accent text-white shadow-sm hover:bg-accent/90 active:scale-95 transition-all group/btn ml-auto cursor-pointer"
                  >
                    Learn More{" "}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
