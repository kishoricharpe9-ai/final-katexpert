import { useState, useMemo } from "react";
import { PageHero } from "@/components/site/page-hero";
import { Download } from "lucide-react";

const CAT_PAPERS = [
  { year: 2025, slot: 1, url: "https://katexperts.com/cat-2/#df_13190" },
  { year: 2025, slot: 2, url: "https://katexperts.com/cat-2/#df_13193" },
  { year: 2025, slot: 3, url: "https://katexperts.com/cat-2/#df_13196" },
  { year: 2024, slot: 1, url: "https://katexperts.com/cat-2/#df_13181" },
  { year: 2024, slot: 2, url: "https://katexperts.com/cat-2/#df_13184" },
  { year: 2024, slot: 3, url: "https://katexperts.com/cat-2/#df_13187" },
  { year: 2023, slot: 1, url: "https://katexperts.com/cat-2/#df_13172" },
  { year: 2023, slot: 2, url: "https://katexperts.com/cat-2/#df_13176" },
  { year: 2023, slot: 3, url: "https://katexperts.com/cat-2/#df_13179" },
  { year: 2022, slot: 1, url: "https://katexperts.com/cat-2/#df_13163" },
  { year: 2022, slot: 2, url: "https://katexperts.com/cat-2/#df_13166" },
  { year: 2022, slot: 3, url: "https://katexperts.com/cat-2/#df_13169" },
  { year: 2021, slot: 1, url: "https://katexperts.com/cat-2/#df_13153" },
  { year: 2021, slot: 2, url: "https://katexperts.com/cat-2/#df_13156" },
  { year: 2021, slot: 3, url: "https://katexperts.com/cat-2/#df_13161" },
  { year: 2020, slot: 1, url: "https://katexperts.com/cat-2/#df_13143" },
  { year: 2020, slot: 2, url: "https://katexperts.com/cat-2/#df_13147" },
  { year: 2020, slot: 3, url: "https://katexperts.com/cat-2/#df_13149" },
  { year: 2019, slot: 1, url: "https://katexperts.com/cat-2/#df_13137" },
  { year: 2019, slot: 2, url: "https://katexperts.com/cat-2/#df_13140" },
  { year: 2018, slot: 1, url: "https://katexperts.com/cat-2/#df_13131" },
  { year: 2018, slot: 2, url: "https://katexperts.com/cat-2/#df_13134" },
  { year: 2017, slot: 1, url: "https://katexperts.com/cat-2/#df_13122" },
  { year: 2017, slot: 2, url: "https://katexperts.com/cat-2/#df_13124" },
];

const YEARS = ["All", ...Array.from(new Set(CAT_PAPERS.map((p) => p.year))).sort((a, b) => b - a)];

function CatResourcesPage() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedPreview, setSelectedPreview] = useState(null);

  const filteredPapers = useMemo(() => {
    if (selectedYear === "All") return CAT_PAPERS;
    return CAT_PAPERS.filter((p) => p.year === Number(selectedYear));
  }, [selectedYear]);

  return (
    <main className="bg-slate-50/50 min-h-screen pb-12 font-sans text-slate-800">
      <PageHero title="CAT Previous Year Papers" breadcrumb={["Student Resources", "CAT PYQs"]} />

      <div className="container-x max-w-5xl mx-auto mt-8 px-4 sm:px-8">
        {/* Year selectors */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-8" id="cat-pyq-years-tabs">
          {YEARS.map((y) => {
            const isActive = String(y) === String(selectedYear);
            return (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#ea580c] text-white shadow-md scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-[#1e293b]"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="cat-pyqs-grid">
          {filteredPapers.map((paper, index) => (
            <article
              key={`${paper.year}-${paper.slot}-${index}`}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-4.5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="rounded bg-navy px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white">PDF</span>
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                    CAT {paper.year}
                  </span>
                </div>
                <h4 className="font-display text-xs sm:text-sm font-bold leading-snug text-navy mb-1.5">
                  CAT {paper.year} — Slot {paper.slot}
                </h4>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  Official CAT {paper.year} Slot {paper.slot} question paper. Ideal for full-length mock practice and topic-wise revision.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg bg-orange hover:bg-orange-deep px-3.5 py-2 text-[11px] font-bold text-white shadow transition-colors cursor-pointer"
                >
                  <Download className="h-3 w-3" />
                  Download PDF
                </a>
                <button
                  onClick={() => setSelectedPreview(paper)}
                  className="text-[11px] font-bold text-navy hover:text-orange transition-colors cursor-pointer"
                >
                  Preview PDF
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl flex flex-col h-[80vh]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div>
                <h3 className="font-display text-xs sm:text-sm font-bold text-navy">CAT {selectedPreview.year} — Slot {selectedPreview.slot}</h3>
                <p className="text-[9px] text-muted-foreground">Previous Year Paper Preview</p>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="rounded-full bg-slate-100 hover:bg-slate-200 p-1 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 rounded-xl bg-slate-100 overflow-hidden relative">
              <iframe
                src={`${selectedPreview.url}#toolbar=0&navpanes=0`}
                title={`CAT ${selectedPreview.year} Slot ${selectedPreview.slot} Preview`}
                className="absolute inset-0 w-full h-full border-0 bg-white"
              />
            </div>
            <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100 mt-3">
              <a
                href={selectedPreview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-[#ea580c] hover:bg-[#d94e06] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition-colors cursor-pointer"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CatResourcesPage;
