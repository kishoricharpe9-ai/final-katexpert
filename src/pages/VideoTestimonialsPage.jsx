import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Play, GraduationCap, Users, Star, Trophy, Sparkles, ArrowRight, Phone } from "lucide-react";
import { VideoModal } from "@/components/site/VideoModal";
import { ReelsModal, useIsMobile } from "@/components/site/ReelsModal";
import { IPhoneReelsCarousel } from "@/components/site/IPhoneReelsCarousel";
import { Counter } from "@/components/site/Counter";
import { Faq } from "@/components/site/Faq";
import { testimonials } from "@/lib/testimonials";
import { BRAND } from "@/lib/site-data";

const featured = testimonials.find((t) => t.id === "varc");
const gridItems = testimonials.filter((t) => t.id !== "varc");

export default function VideoTestimonialsPage() {
  const [active, setActive] = useState(null);
  const [reels, setReels] = useState({ open: false, id: null });
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "Video Testimonials — KATexpert | Real Student Success Stories";
  }, []);

  function openVideo(t) {
    if (isMobile && t.isShort) {
      setReels({ open: true, id: t.id });
    } else {
      setActive(t);
    }
  }

  function step(dir) {
    if (!active) return;
    const i = gridItems.findIndex((x) => x.id === active.id);
    if (i === -1) return;
    const nextTestimonial = gridItems[(i + dir + gridItems.length) % gridItems.length];
    setActive(nextTestimonial);
  }

  const related = active ? gridItems.filter((x) => x.id !== active.id).slice(0, 4) : [];

  return (
    <div className="min-h-screen bg-background pt-16 mt-6">
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white pt-10 pb-16 md:pt-12 md:pb-22">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(245,130,32,0.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
              <Sparkles className="h-3 w-3 text-orange" /> Real Students · Real Results
            </div>
            <h1 className="text-balance text-3xl font-extrabold leading-tight md:text-5xl text-white">
              Hear From Students Who Achieved Their{" "}
              <span className="text-orange">Dream Colleges</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 md:text-base">
              Real success stories from CAT, IPMAT, MBA CET, MCA CET and other KATexpert students.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20KAT%20Expert,%20I'd%20like%20free%20counselling`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-orange transition hover:scale-[1.02]"
              >
                Book Free Counselling <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#topper-testimonials"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-current" /> Watch Stories
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              { icon: Users, label: "Students Trained", value: 5000, suffix: "+" },
              { icon: GraduationCap, label: "Years of Experience", value: 18, suffix: "+" },
              { icon: Star, label: "Student Satisfaction", value: 5, suffix: "★" },
              { icon: Trophy, label: "Success Stories", value: 500, suffix: "+" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur">
                <s.icon className="mx-auto mb-1.5 h-4.5 w-4.5 text-orange" />
                <div className="text-xl font-extrabold text-white">
                  {typeof s.value === "number" ? <Counter to={s.value} suffix={s.suffix} /> : s.value}
                </div>
                <div className="mt-0.5 text-[9px] uppercase tracking-wide text-white/70">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="mx-auto -mt-10 max-w-5xl px-4 md:-mt-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid overflow-hidden rounded-2xl bg-white shadow-lift md:grid-cols-[1.4fr_1fr] border border-border"
          >
            <button
              onClick={() => openVideo(featured)}
              className="group relative aspect-video w-full overflow-hidden bg-black md:aspect-auto cursor-pointer"
            >
              <img
                src={`https://i.ytimg.com/vi/${featured.youtubeId}/hqdefault.jpg`}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-orange-gradient px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-orange">
                ★ Featured Story
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-deep shadow-lift transition group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </div>
              </div>
            </button>
            <div className="flex flex-col justify-center gap-3.5 p-6 md:p-8 bg-white">
              <span className="w-fit rounded-full bg-orange-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-deep border border-orange-100">
                {featured.exam} · Masterclass
              </span>
              <h2 className="text-2xl font-bold text-navy-deep">{featured.title}</h2>
              <div>
                <div className="text-xs text-muted-foreground">{featured.name}</div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-orange">{featured.score}</span>
                  <span className="text-xs text-navy">· {featured.college}</span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">&ldquo;{featured.quote}&rdquo;</p>
              <button
                onClick={() => openVideo(featured)}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-navy-deep px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-navy-deep/90 cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 fill-current" /> Watch Story
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* SHORTS/REELS SHOWCASE */}
      <section id="topper-testimonials" className="bg-secondary/20 py-10 mt-12 border-y border-border/40 overflow-hidden">
        <IPhoneReelsCarousel 
          items={testimonials.filter((t) => t.isShort)} 
          onVideoClick={(t) => openVideo(t)} 
        />
      </section>

      {/* STATS COUNTERS */}
      <section className="mx-auto mt-12 max-w-5xl px-4 py-4">
        <div className="rounded-2xl bg-white border border-border p-6 shadow-soft md:p-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { to: 5000, suffix: "+", label: "Students Trained" },
              { to: 18, suffix: "+", label: "Years of Experience" },
              { to: 95, suffix: "%", label: "Success Rate" },
              { to: 500, suffix: "+", label: "Video Testimonials" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-navy-deep md:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto mt-12 max-w-5xl px-4 py-4">
        <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-6 text-center text-white shadow-lift md:p-10">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(245,130,32,0.6), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2), transparent 45%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold md:text-4xl text-white">
              Ready to Become Our Next{" "}
              <span className="text-orange">Success Story?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs md:text-sm text-white/85">
              Join thousands of successful students who achieved their dream colleges with KATexpert.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20KAT%20Expert,%20I'd%20like%20free%20counselling`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-orange hover:scale-[1.02] transition-transform"
              >
                <Phone className="h-4 w-4" /> Book Free Counselling
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-12 max-w-5xl px-4 py-6">
        <div className="mb-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-orange">FAQ</div>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">Everything You Wanted to Ask</h2>
        </div>
        <Faq />
      </section>

      <VideoModal
        testimonial={active}
        onClose={() => setActive(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        related={related}
        onPickRelated={(t) => setActive(t)}
      />
      <ReelsModal
        open={reels.open}
        items={gridItems.filter((t) => t.isShort)}
        startId={reels.id}
        onClose={() => setReels({ open: false, id: null })}
      />
    </div>
  );
}
