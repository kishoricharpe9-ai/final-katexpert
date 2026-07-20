import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Small local helpers                                                 */
/* ------------------------------------------------------------------ */

function useCounter(target, active, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(target * (0.2 + 0.8 * p * (2 - p))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function extractNumber(value) {
  const m = value.match(/(\d+(?:\.\d+)?)/);
  return m ? Math.round(parseFloat(m[1])) : 0;
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  invert = false,
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
            invert ? "bg-white/10 text-[#ea580c]" : "bg-[#ea580c]/10 text-[#ea580c]"
          }`}
        >
          <span className="h-1 w-1 rounded-full bg-[#ea580c]" /> {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2.5 text-xl sm:text-2xl font-bold text-balance ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-2 text-xs sm:text-sm text-pretty ${invert ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                             */
/* ------------------------------------------------------------------ */

function Hero({ c }) {
  return (
    <section className="relative bg-hero-radial pt-32 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="text-white">
          {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ea580c]">
            <span className="h-1 w-1 rounded-full bg-[#ea580c]" /> {c.code} Program
          </span> */}
          <h1 className="mt-3.5 text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-[1.1]">
            {c.name}
          </h1>
          <p className="mt-3.5 text-sm text-white/80 text-pretty max-w-xl">{c.tagline}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2 max-w-xl">
            {c.highlights.map((h) => (
              <li key={h} className="flex items-start gap-1.5 text-white/90 text-xs">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#ea580c]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href="#enquire" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-accent hover:bg-accent/90 shadow transition-all cursor-pointer">Enquire Now</a>
            {c.brochureUrl && (
              <a href={c.brochureUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-transparent border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">Download Syllabus</a>
            )}
            <a href="tel:+919552388015" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-transparent border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">Call Now</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#ea580c]/40 via-[#ea580c]/10 to-transparent blur-2xl" aria-hidden />
          <div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-2 shadow-soft">
            <img
              src={c.heroImage}
              alt={`${c.code} — ${c.name}`}
              className={c.slug === "mba-cet" ? "w-full h-auto rounded-xl" : "w-full aspect-[16/10] rounded-xl object-cover max-h-72"}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white text-navy shadow-soft px-4 py-3 hidden sm:block">
              <p className="font-display font-bold text-sm leading-tight">Trusted by 5,000+<br/>students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickOverview({ c }) {
  return (
    <section className="py-10 sm:py-12 bg-cream-mesh">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        <SectionHeading eyebrow="Quick Overview" title="Everything you need to know at a glance" />
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {c.overview.map((o, i) => (
            <div
              key={o.label}
              className="card-premium p-4.5 reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#ea580c]">{o.label}</p>
              <p className="mt-1.5 text-lg font-display font-bold text-navy">{o.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ c }) {
  return (
    <section className="py-10 sm:py-12">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8 grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHeading eyebrow="About the Course" title={`Why ${c.code} at KATexpert?`} />
        </div>
        <div className="prose max-w-none text-xs sm:text-sm text-navy-soft leading-relaxed">
          <p>{c.description}</p>
        </div>
      </div>
    </section>
  );
}

function WhyChoose({ c }) {
  return (
    <section className="py-10 sm:py-12 bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#ea580c]/20 blur-3xl" aria-hidden />
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8 relative">
        <SectionHeading eyebrow="Why Choose This Course" title={`The KATexpert ${c.code} Advantage`} invert
          sub={`Only the features and strengths that apply to the ${c.code} program.`} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.whyChoose.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4.5 backdrop-blur-sm hover:border-[#ea580c]/60 hover:-translate-y-1 transition-all duration-300 reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#ea580c] to-[#ea580c] text-white text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3.5 text-sm sm:text-base font-semibold text-white">{f.title}</h3>
              {f.description && <p className="mt-1.5 text-xs text-white/70">{f.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey({ c }) {
  return (
    <section className="py-10 sm:py-12 bg-cream-mesh">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        <SectionHeading eyebrow="Course Journey" title="Your learning path, step by step"
          sub="A structured pathway from first concept to final selection." />
        <div className="mt-10 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ea580c] via-[#ea580c]/40 to-transparent -translate-x-1/2" aria-hidden />
          <ol className="grid gap-6 md:gap-8">
            {c.journey.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.title}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 items-center reveal`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className={left ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}>
                    <div className={`card-premium p-4.5 ${left ? "md:ml-auto md:max-w-sm" : "md:mr-auto md:max-w-sm"}`}>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#ea580c]">Step {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-0.5 font-display text-sm sm:text-base font-bold text-navy">{s.title}</h3>
                      {s.description && <p className="mt-1.5 text-xs text-muted-foreground">{s.description}</p>}
                    </div>
                  </div>
                  <span className="hidden md:grid absolute left-1/2 -translate-x-1/2 h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#ea580c] to-[#ea580c] text-white text-xs font-bold shadow-soft">
                    {i + 1}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Curriculum({ c }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-10 sm:py-12">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        <SectionHeading eyebrow="Detailed Curriculum" title="Modules built for real exam performance"
          sub="Expand each module to see everything covered inside the classroom." />
        <div className="mt-8 grid gap-2.5 max-w-3xl mx-auto">
          {c.curriculum.map((m, i) => {
            const isOpen = open === i;
            return (
              <div
                key={m.title}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-[#ea580c]/50 shadow-soft bg-white" : "border-border bg-white hover:border-[#ea580c]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-3.5 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm sm:text-base font-bold text-navy">{m.title}</span>
                    {/* <span className="block text-[10px] text-muted-foreground">{m.items.length} topics</span> */}
                  </span>
                  <svg className={`h-4.5 w-4.5 shrink-0 text-navy transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <ul className="px-4 sm:px-5 pb-5 pt-0.5 grid gap-1.5 sm:grid-cols-2">
                      {m.items.map((it) => (
                        <li key={it} className="flex items-start gap-1.5 text-xs text-navy-soft">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#ea580c]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Resources({ c }) {
  const icons = ["📚","📝","🎯","📊","💡","🎓","🧠","⚡","🏆","📖","🎥","✅"];
  return (
    <section className="py-10 sm:py-12 bg-cream-mesh">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        <SectionHeading eyebrow="Learning Resources" title="Everything included in your program"
          sub={`Only what's actually available in the ${c.code} program is shown below.`} />
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {c.resources.map((r, i) => (
            <div key={r.title} className="card-premium p-4.5 flex items-start gap-3.5 reveal" style={{ animationDelay: `${i * 50}ms` }}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-white text-base">
                {icons[i % icons.length]}
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm text-navy">{r.title}</h3>
                {r.description && <p className="mt-0.5 text-xs text-muted-foreground">{r.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraSections({ c }) {
  if (!c.extraSections?.length) return null;
  return (
    <section className="py-10 sm:py-12">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8 grid gap-8 mt-10">
        {c.extraSections.map((s, i) => (
          <div key={s.heading} className={`grid gap-6 lg:grid-cols-[1fr_1.6fr] items-start ${i % 2 ? "lg:flex-row-reverse" : ""}`}>
            <SectionHeading title={s.heading} />
            <div className="grid gap-2.5">
              {s.body.map((line) => (
                <div key={line} className="flex items-start gap-2.5 rounded-xl border border-border bg-white p-3.5 hover:border-[#ea580c]/40 transition-colors">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]" />
                  <p className="text-navy-soft text-xs sm:text-sm">{line}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Results({ c }) {
  const { ref, inView } = useInView();
  if (!c.results?.length) return null;
  return (
    <section className="py-10 sm:py-12 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" aria-hidden style={{
        background: "radial-gradient(600px 300px at 20% 20%, color-mix(in oklab, var(--accent) 40%, transparent), transparent 60%)",
      }} />
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8 relative">
        <SectionHeading title="Numbers that speak for themselves" invert />
        <div ref={ref} className="mt-8 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {c.results.map((r, i) => {
            const target = extractNumber(r.value);
            const n = useCounter(target, inView);
            return (
              <div key={r.label} className="rounded-xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-sm reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <p className="text-2xl sm:text-3xl font-display font-bold text-[#ea580c]">
                  {r.value.includes("₹") ? r.value : n > 0 ? r.value.replace(/\d+/, String(n)) : r.value}
                </p>
                <p className="mt-1 text-xs text-white/80">{r.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQs({ c }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-10 sm:py-12 bg-cream-mesh" id="faqs">
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        <SectionHeading title="Frequently asked questions" align="center" />
        <div className="mt-8 max-w-2xl mx-auto grid gap-2.5">
          {c.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-xl border bg-white transition-all ${isOpen ? "border-[#ea580c]/50 shadow-soft" : "border-border hover:border-[#ea580c]/40"}`}>
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-3.5 px-4 sm:px-5 py-3 text-left" aria-expanded={isOpen}>
                  <span className="min-w-0 flex-1 font-display font-semibold text-xs sm:text-sm text-navy">{f.q}</span>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "bg-[#ea580c] text-white rotate-45" : "bg-[#ea580c]/10 text-[#ea580c]"}`}>
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor"><path d="M5.25 1.5v3H2.25v3H5.25v3h1.5v-3H9.75v-3H6.75v-3z"/></svg>
                  </span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-navy-soft leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ c }) {
  return (
    <section id="enquire" className="py-10 sm:py-12" >
      <div className="container-x max-w-5xl mx-auto px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-hero-radial p-6 sm:p-10 text-white shadow-soft">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#ea580c]/30 blur-3xl" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ea580c]">
                Start today
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-balance">{c.cta.heading}</h2>
              {c.cta.sub && <p className="mt-3 text-white/80 text-sm text-pretty">{c.cta.sub}</p>}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a href="tel:+919552388015" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-accent hover:bg-accent/90 shadow transition-all cursor-pointer">Call Now</a>
                <a href="https://api.whatsapp.com/send/?phone=919552388015" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-transparent border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">WhatsApp</a>
                {c.brochureUrl && <a href={c.brochureUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-transparent border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">Download Brochure</a>}
              </div>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you — our team will get in touch."); }}
              className="rounded-xl bg-white text-navy p-5 shadow-soft"
            >
              <h3 className="font-display text-sm font-bold">Enquire about {c.code}</h3>
              <div className="mt-3 grid gap-2.5">
                <input required placeholder="Full Name" className="rounded-lg border border-border px-3.5 py-2.5 text-xs outline-none focus:border-[#ea580c]" />
                <input required placeholder="Phone" className="rounded-lg border border-border px-3.5 py-2.5 text-xs outline-none focus:border-[#ea580c]" />
                <input type="email" required placeholder="Email" className="rounded-lg border border-border px-3.5 py-2.5 text-xs outline-none focus:border-[#ea580c]" />
                <input placeholder="City" className="rounded-lg border border-border px-3.5 py-2.5 text-xs outline-none focus:border-[#ea580c]" />
                <button type="submit" className="inline-flex items-center justify-center gap-1.5 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-accent hover:bg-accent/90 shadow transition-all mt-1 w-full cursor-pointer">Submit Enquiry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyMobileCTA({ c }) {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
      <div className="rounded-2xl bg-navy text-white shadow-soft flex items-center gap-2 p-2">
        <a href="tel:+919552388015" className="flex-1 grid place-items-center rounded-xl bg-[#ea580c] text-white font-semibold py-3 text-sm">Call {c.code}</a>
        <a href="https://api.whatsapp.com/send/?phone=919552388015" target="_blank" rel="noreferrer" className="flex-1 grid place-items-center rounded-xl bg-white/10 text-white font-semibold py-3 text-sm">WhatsApp</a>
        <a href="#enquire" className="flex-1 grid place-items-center rounded-xl bg-white text-navy font-semibold py-3 text-sm">Enquire</a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function CoursePage({ course }) {
  const isClat = course.slug === "clat";
  return (
    <main className="bg-background">
      <Hero c={course} />
      <QuickOverview c={course} />
      <About c={course} />
      <WhyChoose c={course} />
      <Journey c={course} />
      {!isClat && <Curriculum c={course} />}
      {!isClat && <Resources c={course} />}
      <ExtraSections c={course} />
      <Results c={course} />

      <FAQs c={course} />
      <CTA c={course} />
      <StickyMobileCTA c={course} />
    </main>
  );
}
