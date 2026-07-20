import { PageHero } from "@/components/site/page-hero";
import { Link } from "react-router-dom";
import { ArrowLeft, Image } from "lucide-react";
import newsCricket1 from "@/assets/news-cricket-1.png";
import newsCricket2 from "@/assets/news-cricket-2.png";

import { EVENTS } from "@/data/news-page-events";

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

      {/* New Events Highlights Section */}
      <div className="container-x max-w-4xl mx-auto mt-16 px-4 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy font-display">Recent Events & Seminars</h2>
          <p className="mt-2 text-sm text-slate-500">Highlights from our extra-curricular activities, mental wellness sessions, and guest seminars.</p>
        </div>

        <div className="space-y-6">
          {EVENTS.map((event, index) => (
            <div key={index} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-soft flex flex-col md:flex-row gap-6 items-center md:items-start text-left">
              <div className="flex-1 space-y-2">
                <span className="text-[9px] font-bold text-[#ea580c] uppercase bg-[#ea580c]/10 px-2.5 py-0.5 rounded-full inline-block">
                  {event.category}
                </span>
                <h3 className="font-display text-base font-bold text-navy leading-snug">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                  {event.description}
                </p>
              </div>
              {event.image ? (
                <div className="w-full md:w-56 aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 shadow-sm shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full md:w-56 aspect-[4/3] bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center gap-1.5 p-4 text-slate-400 select-none shrink-0">
                  <Image className="h-6 w-6 stroke-[1.5]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Event Photo</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
