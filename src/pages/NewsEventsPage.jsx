import { PageHero } from "@/components/site/page-hero";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import newsCricket1 from "@/assets/news-cricket-1.png";
import newsCricket2 from "@/assets/news-cricket-2.png";

export default function NewsEventsPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen pb-20 font-sans text-slate-800 animate-fade-in">
      <PageHero title="News & Events" subtitle="KATexpert Press & Media Coverage" breadcrumb={["Gallery", "News & Events"]} />

      <div className="container-x max-w-4xl mx-auto mt-6 px-4">
        <Link 
          to="/about?tab=Gallery" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#ea580c] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Gallery</span>
        </Link>
      </div>

      <div className="container-x max-w-4xl mx-auto mt-6 px-4 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy font-display">Box Cricket League Press Release</h2>
          <p className="mt-2 text-sm text-slate-500">Official newspaper coverage of the annual KATexpert Box Cricket League championship.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { src: newsCricket1, alt: "Sigmas beat Vibers for trophy" },
            { src: newsCricket2, alt: "The Sigmas triumph" }
          ].map((img, i) => (
            <div key={i} className="bg-white border border-slate-200/60 p-4 rounded-2xl shadow-soft flex flex-col items-center">
              <a href={img.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:scale-[1.02] transition-transform cursor-zoom-in">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-contain max-h-[600px]" />
              </a>
              <span className="mt-3.5 text-xs font-semibold text-slate-500">{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
