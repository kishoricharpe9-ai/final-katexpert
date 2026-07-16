import { useState, useMemo } from "react";
import { PageHero } from "@/components/site/page-hero";
import { Download, FileText, Phone, Mail, MapPin, MessageCircle, GraduationCap, Users, Target, BookOpen } from "lucide-react";

const GDPI_RESOURCES = [
  {
    title: "KATexpert GD/PI Prep",
    description: "Core preparation notes covering the fundamentals of Group Discussion and Personal Interview rounds.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-prep.docx_compressed-1.pdf",
    category: "Foundation",
  },
  {
    title: "KATexpert GD/PI Prep — 10/12",
    description: "Structured preparation guide with topics, frameworks and examples for the 10th December session.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-prep-10_12.docx_compressed-1-1.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 11/12",
    description: "Session material with current-affairs GD topics and interview pointers.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-11_12.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 13/12",
    description: "GD prompts, key arguments and PI questions curated for the 13th December class.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-13_12.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 14/12",
    description: "Discussion themes and PI practice questions for the 14th December session.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-14_12.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 19/12",
    description: "Weekly compilation of GD topics with structured points for and against.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-19-12.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 27/12",
    description: "Fresh set of GD topics and interview scenarios for the 27th December class.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-27-12.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 29/12",
    description: "Practice pack with GD case topics and personal interview response frameworks.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/KATexpert-GD-PI-29-12.docx_compressed-1.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 31/12",
    description: "Year-end wrap-up compilation with major GD themes and PI questions.",
    url: "https://katexperts.com/wp-content/uploads/2026/01/KATexpert-GD-PI-31-12.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 3/1",
    description: "New year kick-off session material with current GD topics.",
    url: "https://katexperts.com/wp-content/uploads/2026/01/KATexpert-GD-PI-3-1.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "KATexpert GD/PI — 4/1",
    description: "Follow-up session pack with additional GD topics and interview prompts.",
    url: "https://katexperts.com/wp-content/uploads/2026/01/KATexpert-GD-PI-4-1.docx_compressed.pdf",
    category: "Daily Notes",
  },
  {
    title: "Common MBA Interview Question Categories",
    description: "A structured breakdown of the most commonly asked MBA personal interview question categories.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/Common-MBA-Interview-Question-Categories.docx_compressed.pdf",
    category: "Interview Guide",
  },
  {
    title: "What to do after CAT '25",
    description: "Step-by-step guidance on next moves after the CAT exam — form filling, shortlists, and preparation.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/What-to-do-after-CAT-25_-1.pdf-1_compressed.pdf",
    category: "Post-CAT",
  },
  {
    title: "Top Certification Courses for an MBA Aspirant",
    description: "Curated list of high-value certifications that strengthen your MBA profile and shortlist chances.",
    url: "https://katexperts.com/wp-content/uploads/2025/12/Top-Certification-Courses-for-an-MBA-aspirant.docx_compressed.pdf",
    category: "Profile Building",
  },
];

export default function GdpiPage() {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const grouped = useMemo(() => {
    return GDPI_RESOURCES.reduce((acc, r) => {
      (acc[r.category] ||= []).push(r);
      return acc;
    }, {});
  }, []);

  return (
    <main className="bg-slate-50/50 min-h-screen pb-20 font-sans text-slate-800">
      <PageHero title="GD/PI Preparation" breadcrumb={["Student Resources", "GD/PI"]} />

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              About GD/PI
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl leading-tight">
              The final stage between you and your dream B-School
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Once written exam shortlists are out, the Group Discussion and Personal Interview
              rounds decide who converts a call into an admit. At KAT Experts, our GD/PI programme
              is designed to give you structured practice, current-affairs awareness, and confident
              communication — the three pillars that panels look for.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every resource on this page is used inside our live GD/PI sessions. Download the
              latest study material, revise interview categories, and walk into your panel prepared.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Users, title: "Live GD Practice", body: "Rotating panels with real-time feedback on content, structure and body language." },
              { icon: Target, title: "Personal Interview Drills", body: "Category-wise question banks covering academics, work-ex, hobbies and current affairs." },
              { icon: BookOpen, title: "Daily Session Notes", body: "Compressed, printable PDFs so you can revise between classes." },
              { icon: GraduationCap, title: "Profile Guidance", body: "What to do after CAT, top certifications, and shortlist strategy." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white mb-4">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-sm font-bold text-navy">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Area */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="inline-block rounded-full bg-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              Download Study Material
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              GD/PI Study Material
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every session PDF, interview question bank and post-CAT guide from the KAT Experts
              GD/PI programme — all in one place, ready to download.
            </p>
          </div>

          <div className="space-y-14">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="mb-6 flex items-center gap-3">
                  <h3 className="font-display text-lg font-extrabold text-navy">{category}</h3>
                  <span className="h-px flex-1 bg-slate-100" />
                  <span className="text-xs font-semibold text-muted-foreground">{items.length} file{items.length > 1 ? "s" : ""}</span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((r) => (
                    <article
                      key={r.url}
                      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="rounded bg-navy px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">PDF</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {r.category}
                          </span>
                        </div>
                        <h4 className="font-display text-sm font-bold leading-snug text-navy mb-2">
                          {r.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground">{r.description}</p>
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="inline-flex items-center gap-1.5 rounded-xl border border-[#ea580c] bg-transparent hover:bg-[#ea580c]/5 px-4 py-2.5 text-xs font-bold text-[#ea580c] transition-colors cursor-pointer"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download
                        </a>
                        <button
                          onClick={() => setSelectedPreview(r)}
                          className="text-xs font-bold text-navy hover:text-orange transition-colors cursor-pointer"
                        >
                          Preview
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Prep Roadmap */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl mb-10">
            <span className="inline-block rounded-full bg-navy/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              How to prepare
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              A simple 4-step GD/PI roadmap
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Follow this sequence alongside the downloadable material to build confidence before your interview date.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 1, title: "Understand the format", body: "Learn how B-Schools structure their GD, WAT and PI rounds and what each panel evaluates." },
              { n: 2, title: "Practice with the daily PDFs", body: "Use the session notes above to revise arguments, frameworks and interview categories every day." },
              { n: 3, title: "Join live mock panels", body: "Face rotating panels with KAT Experts mentors and get structured, actionable feedback." },
              { n: 4, title: "Refine your profile story", body: "Nail the ‘tell me about yourself’ answer and align your narrative with each B-School’s culture." },
            ].map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange font-display text-base font-extrabold text-white mb-4">
                  {s.n}
                </div>
                <h3 className="font-display text-sm font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-4 shadow-2xl flex flex-col h-[85vh]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div>
                <h3 className="font-display text-sm font-bold text-navy">{selectedPreview.title}</h3>
                <p className="text-[10px] text-muted-foreground">{selectedPreview.category}</p>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="rounded-full bg-slate-100 hover:bg-slate-200 p-1.5 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 rounded-xl bg-slate-100 overflow-hidden relative">
              <iframe
                src={`${selectedPreview.url}#toolbar=0&navpanes=0`}
                title={selectedPreview.title}
                className="absolute inset-0 w-full h-full border-0 bg-white"
              />
            </div>
            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 mt-3">
              <a
                href={selectedPreview.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-1 border border-[#ea580c] bg-transparent hover:bg-[#ea580c]/5 text-[#ea580c] text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors cursor-pointer"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
