import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site-data";
import { useCountUp } from "@/hooks/use-count-up";

function Stat({ value, suffix, label, active }) {
  const n = useCountUp(value, 2000, active);
  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
        {n.toLocaleString("en-IN")}
        <span className="text-accent ml-0.5">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">
        {label}
      </div>
    </div>
  );
}

function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-navy to-[oklch(0.2_0.06_255)] py-16 sm:py-14">
      <div 
        ref={ref} 
        className="container-x mx-auto flex flex-row items-center justify-center gap-12 sm:gap-24 md:gap-32 max-w-4xl px-6"
      >
        {STATS.map((s) => (
          <Stat key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}

export { Stats };