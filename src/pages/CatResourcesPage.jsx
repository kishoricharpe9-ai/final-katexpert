import { useState, useMemo } from "react";
import { PageHero } from "@/components/site/page-hero";
import { PdfViewerCard } from "@/components/site/pdf-viewer-card";

const CAT_PAPERS = [
  { year: 2025, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2025-Slot-1-Question-Paper-by-KATexpert.pdf.pdf" },
  { year: 2025, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2025-Slot-2-Question-Paper-by-KATexpert.pdf.pdf" },
  { year: 2025, slot: 3, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2025-Slot-3-Question-Paper-by-KatExpert.pdf.pdf" },
  { year: 2024, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2024-Slot-1-Question-Paper-by-KATexpert.pdf.pdf" },
  { year: 2024, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2024-Slot-2-Question-Paper-by-KATexpert.pdf" },
  { year: 2024, slot: 3, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2024-Slot-3-Question-Paper-by-KATexpert.pdf" },
  { year: 2023, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2023-Slot-1-Question-Paper-by-Katexpert-pdf.pdf.pdf" },
  { year: 2023, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2023-Slot-2-Question-Paper-by-Katexpert.pdf.pdf" },
  { year: 2023, slot: 3, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2023-Slot-3-Question-Paper-by-Katexpert.pdf.pdf.pdf" },
  { year: 2022, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2022-Slot-1-Question-Paper-by-KATexpert.pdf" },
  { year: 2022, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2022-Slot-2-Question-Paper-by-Katexpert.pdf.pdf" },
  { year: 2022, slot: 3, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2022-Slot-3-Question-Paper-by-Katexpert.pdf.pdf" },
  { year: 2021, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2021-Slot-1-Question-Paper-by-KATexpert.pdf.pdf" },
  { year: 2021, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2021-Slot-2-Question-Paper-by-Katexpert.pdf.pdf" },
  { year: 2021, slot: 3, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2021-Slot-3-Question-Paper-by-Katexpert.pdf.pdf" },
  { year: 2020, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2020-Slot-1-Question-Paper-by-KATexpert.pdf.pdf" },
  { year: 2020, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2020-Slot-2-Question-Paper-by-KATexpert.pdf.pdf" },
  { year: 2020, slot: 3, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2020-Slot-3-Question-Paper.pdf" },
  { year: 2019, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2019-Slot-1-Question-Paper-by-KATexpert.pdf" },
  { year: 2019, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2019-Slot-2-Question-Paper-by-KATexpert-pdf.pdf" },
  { year: 2018, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2018-Slot-1-Question-Paper-by-KATexpert.pdf" },
  { year: 2018, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2018-Slot-2-Question-Paper-by-KATexpert.pdf" },
  { year: 2017, slot: 1, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2017-Slot-1-Question-Paper-by-KATexpert.pdf" },
  { year: 2017, slot: 2, url: "https://katexperts.com/wp-content/uploads/2026/06/CAT-2017-Slot-2-Question-Paper-by-KATexpert.pdf" },
];

const YEARS = ["All", ...Array.from(new Set(CAT_PAPERS.map((p) => p.year))).sort((a, b) => b - a)];

function CatResourcesPage() {
  const [selectedYear, setSelectedYear] = useState("All");

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
            <PdfViewerCard
              key={`${paper.year}-${paper.slot}-${index}`}
              title={`CAT ${paper.year}`}
              subtitle={`Slot ${paper.slot}`}
              pdfUrl={paper.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default CatResourcesPage;
