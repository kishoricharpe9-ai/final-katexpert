import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, ChevronLeft, ChevronRight, User, Crown } from "lucide-react";
import { TOPPERS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./section";

const YEARS = ["All", "2026", "2025"];

export function Toppers() {
  const [year, setYear] = useState("All");
  const [page, setPage] = useState(0);

  const list = TOPPERS.filter((t) => year === "All" || String(t.year) === year);
  const perPage = 5;
  const pages = Math.max(1, Math.ceil(list.length / perPage));
  const safePage = Math.min(page, pages - 1);
  const visible = list.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <section id="toppers" className="bg-navy py-16 sm:py-20">
      <div className="container-x max-w-6xl mx-auto">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            light
            eyebrow="Wall of Fame"
            title={
              <>
                Our <span className="text-gradient-accent">toppers</span> speak for us
              </>
            }
            subtitle="Real students. Real ranks. Real admits at India's most prestigious institutes."
          />
        </Reveal>

        {/* Year Filter Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
          {YEARS.map((y) => (
            <button
              key={y}
              onClick={() => {
                setYear(y);
                setPage(0);
              }}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                year === y
                  ? "bg-accent text-accent-foreground"
                  : "glass text-white hover:bg-white/15"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${year}-${safePage}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center"
            >
              {visible.map((t) => (
                <article
                  key={t.name}
                  className="group relative overflow-hidden rounded-xl glass p-4 text-white shadow-card flex flex-col justify-between h-full w-full mx-auto transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Rounded Square Image + Exam Badge Side-by-Side */}
                    <div className="flex justify-between items-start gap-2">
                      <div className="relative shrink-0">
                        {/* Dynamic Floating Gold Crown Badge Indicator Layer */}
                        {t.hasCrown && (
                          <div className="absolute -top-3.5 -right-3.5 z-10 drop-shadow-[0_2px_6px_rgba(245,158,11,0.4)]">
                            <Crown className="h-7 w-6 text-amber-400 fill-amber-400" />
                          </div>
                        )}

                        {/* Slightly Rounded Square Image Container */}
                        <div className="relative h-18 w-18 rounded-lg bg-white/10 border border-white/5 overflow-hidden grid place-items-center">
                          <User className="absolute h-5 w-5 text-white/30 strokeWidth={1.4}" />
                          {t.image && (
                            <img
                              src={t.image}
                              alt={t.name}
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          )}
                        </div>
                      </div>

                      {/* Exam Tag Badge */}
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-accent px-2 py-0.5 text-[8px] font-bold uppercase text-accent-foreground whitespace-nowrap shadow-sm">
                        <Trophy className="h-2 w-2" />
                        {t.exam}
                      </span>
                    </div>

                    {/* Topper Name (Moved Up) */}
                    <h3 className="mt-3 text-sm font-bold line-clamp-1">{t.name}</h3>

                    {/* Metric Display (Moved Below Name with Score CSS applied) */}
                    <div className="mt-1 font-display text-xl font-extrabold text-gradient-accent leading-none line-clamp-1">
                      {t.score || t.college || t.education}
                    </div>
                  </div>

                  {/* Year Batch Metric */}
                  <span className="mt-3 block text-[9px] font-semibold text-white/40 border-t border-white/5 pt-2">
                    Batch of {t.year}
                  </span>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls Footer Banner */}
          {pages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2.5">
              <button
                aria-label="Previous"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={safePage === 0}
                className="grid h-8 w-8 place-items-center rounded-full glass text-white disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Progress Bullet Tracker Indicators */}
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === safePage ? "w-5 bg-accent" : "w-2 bg-white/30"
                  }`}
                />
              ))}

              <button
                aria-label="Next"
                onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
                disabled={safePage === pages - 1}
                className="grid h-8 w-8 place-items-center rounded-full glass text-white disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
