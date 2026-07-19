import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Are these genuine student testimonials?", a: "Yes. Every video on this page is from an actual KatExpert student who consented to share their journey. We never use paid actors or scripted reviews." },
  { q: "Which exams are covered?", a: "We mentor students preparing for CAT,CLAT, IPMAT, MBA CET, MCA CET and Campus Recruitment Training (CRT). Each program has dedicated faculty and curriculum." },
  { q: "How do I book counselling?", a: "Click any 'Book Free Counselling' button on this page. A counsellor will call you within 24 hours to understand your goals and recommend the right program." },
  { q: "Are classes online or offline?", a: "Both. Our Nagpur centre runs full offline batches, and we offer pre-recorded lectures for students across India." },
  { q: "What makes KatExpert different?", a: "Small-batch mentorship, faculty who have themselves cracked these exams at top ranks, and a 25+ year track record of sending students to IIMs, JBIMS, VJTI and other top institutes." },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-navy-deep">{f.q}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 rounded-full bg-orange-soft p-1.5 text-orange-deep">
              <Plus className="h-4 w-4" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
