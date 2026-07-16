import { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, MapPin, Check, ArrowRight, BookOpen, Scale, GraduationCap, Trophy, Terminal, Briefcase, Sparkles } from 'lucide-react';
import { courses } from "@/data/courses";
import { Reveal, SectionHeading } from "./section";
import { Button } from "@/components/ui/button";

const getCourseIcon = (slug) => {
  switch (slug) {
    case 'cat': return BookOpen;
    case 'clat': return Scale;
    case 'ipmat': return GraduationCap;
    case 'mba-cet': return Trophy;
    case 'mca-cet': return Terminal;
    case 'crt': return Briefcase;
    case 'cuet': return BookOpen;
    case 'set': return Sparkles;
    default: return BookOpen;
  }
};

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'MBA', 'Law', 'UG', 'PG', 'Skills'];

  // Map and filter internal course data schema safely
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All') return courses;
    return courses.filter((c) => {
      if (c.slug === "cat" || c.slug === "mba-cet") return selectedCategory === "MBA";
      if (c.slug === "clat") return selectedCategory === "Law";
      if (c.slug === "ipmat" || c.slug === "cuet" || c.slug === "set") return selectedCategory === "UG";
      if (c.slug === "mca-cet") return selectedCategory === "PG";
      if (c.slug === "crt") return selectedCategory === "Skills";
      return false;
    });
  }, [selectedCategory]);

  return (
    <section id="courses" className="bg-background py-10 sm:py-12">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        
        <Reveal>
          <SectionHeading
            eyebrow="Our Programs"
            title={
              <>
                Courses built to deliver{" "}
                <span className="text-gradient-accent">results</span>
              </>
            }
            subtitle="Choose your exam track. Every program runs in offline mode with classes, mocks and personal mentorship."
          />
        </Reveal>

        {/* Categories Tab Bar */}
        <div className="mt-5 flex flex-wrap justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-navy text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <motion.div 
          layout="position" 
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => {
              const IconComponent = getCourseIcon(course.slug);
              const isFeatured = course.slug === "cat" || course.slug === "mba-cet";
              
              const durationObj = course.overview?.find(o => o.label === "Duration");
              const duration = durationObj ? durationObj.value : "4 Months";
              const mode = "Offline";

              return (
                <motion.article
                  key={course.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  {/* Featured Badge */}
                  {isFeatured && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-accent to-[oklch(0.62_0.18_38)] px-2 py-0.5 text-[8px] font-bold uppercase text-accent-foreground">
                      <Star className="h-2 w-2 fill-current" />
                      Featured
                    </span>
                  )}

                  {/* Icon Header */}
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <IconComponent className="h-4 w-4" />
                  </span>

                  {/* Title & Description */}
                  <h3 className="mt-2.5 font-display text-base font-bold text-navy">
                    {course.code}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground min-h-[34px]">
                    {course.tagline}
                  </p>

                  {/* Meta Row: Duration & Mode */}
                  <div className="mt-2.5 flex flex-wrap gap-2 text-[10px] font-medium text-foreground/70">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3 text-accent" />
                      {duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-accent" />
                      {mode}
                    </span>
                  </div>

                  {/* Highlights List */}
                  <ul className="mt-3 space-y-1 flex-1">
                    {course.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-[10px] text-foreground/80">
                        <Check className="h-3 w-3 shrink-0 text-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link Wrapper Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 h-8 text-[11px] w-full group-hover:border-accent group-hover:text-accent"
                  >
                    <Link to={`/courses/${course.slug}`}>
                      Explore Program <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
