import { useState } from "react";
import { PageHero } from "@/components/site/page-hero";
import { ResourcesGrid } from "@/components/site/resources-grid";
import { CAT_RESOURCES, IPMAT_RESOURCES } from "@/lib/site-data";

export default function PyqsPage() {
  const [selectedTab, setSelectedTab] = useState("cat");

  return (
    <main className="bg-background min-h-screen pb-16 font-sans">
      <PageHero title="Previous Year Questions (PYQs)" breadcrumb={["Student Resources", "PYQs"]} />
      
      {/* Tab Selectors */}
      <div className="container-x max-w-6xl mx-auto mt-10 mb-8 flex justify-center gap-4">
        <button
          onClick={() => setSelectedTab("cat")}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all cursor-pointer ${
            selectedTab === "cat"
              ? "bg-[#1e293b] text-white shadow-md shadow-[#1e293b]/10 scale-105"
              : "bg-slate-100 hover:bg-slate-200 text-brand-blue"
          }`}
        >
          CAT Entrance PYQs
        </button>
        <button
          onClick={() => setSelectedTab("ipmat")}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all cursor-pointer ${
            selectedTab === "ipmat"
              ? "bg-[#1e293b] text-white shadow-md shadow-[#1e293b]/10 scale-105"
              : "bg-slate-100 hover:bg-slate-200 text-brand-blue"
          }`}
        >
          IPMAT Entrance PYQs
        </button>
      </div>

      {/* Dynamic Resources Grid */}
      <div className="container-x max-w-6xl mx-auto">
        <ResourcesGrid resources={selectedTab === "cat" ? CAT_RESOURCES : IPMAT_RESOURCES} />
      </div>
    </main>
  );
}
