import { PageHero } from "@/components/site/page-hero";
import { Link } from "react-router-dom";
import { ArrowLeft, Image } from "lucide-react";
import newsCricket1 from "@/assets/news-cricket-1.png";
import newsCricket2 from "@/assets/news-cricket-2.png";

const EVENTS = [
  {
    category: "Away From Classrooms",
    title: "Turfament 1",
    description: "KATexpert organized TURFAMENT, a fun-filled cricket tournament for students. Divided into teams, participants showcased teamwork, sportsmanship, and competitive spirit in exciting matches. The event aimed to build camaraderie and offer a refreshing stress-buster amid exam preparations. It concluded with medals and trophies for the winners and snack boxes for everyone, making it a memorable blend of cricket and CAT camaraderie. The event was graced by Mr. Amit Gandhare and the Directors of KATexpert Dr Arumita Pawa and Krish Vyas."
  },
  {
    category: "Away From Classrooms",
    title: "Turfament 2",
    description: "SIGMAS defeated Vibers to clinch the KATexpert Champions trophy. The Box Cricket League was organised by KATexpert of Khare Town, Dharampeth, at Wings Turf, Bishop School, Civil Lines. Four teams competed against each other to reach the finals. In the final, Sigmas defeated Vibers by eight runs to claim the title. Sigmas posted 63 runs in 8 overs and restricted their opponents to 55 runs. Around 100 students participated in the event with full enthusiasm and excitement. It also gave them an opportunity to network with other students and show their leadership skills and sportsmanship. The event was graced by Manoj Pawa, Amit Gandhare and the Directors of KATexpert Dr Arumita Pawa and Krish Vyas."
  },
  {
    category: "Sessions",
    title: "Detox Your Mind",
    description: "KATexpert organized an enriching session titled \"Detox Your Mind\" led by Ms. Tina Chachra, Founder and Healer. The session focused on mental wellness, stress management, and maintaining a positive mindset during competitive exam preparation. Through interactive guidance and simple mindfulness techniques, students learned practical ways to improve focus and emotional balance. The session served as a refreshing and rejuvenating experience for all participants."
  },
  {
    category: "Events at KATexpert",
    title: "Exploring BBA / MBA World : Their Way — Mozzammil Khalil",
    description: "Mozzammil Khalil (MMS from JBIMS, 2023 Batch, CAT 2021 Score: 99.49%ile, MAH-CET 2021 Score: 99.94%ile) shared insights on CAT and MAH-CET preparation, his MMS journey, and the transition to the corporate world. The interactive session was highly informative and motivating for MBA aspirants."
  },
  {
    category: "Events at KATexpert",
    title: "LinkedIn Made Easy",
    description: "KATexpert conducted an engaging session titled \"LinkedIn Made Easy\" by Ms. Bhavya Magnani, Social Media Manager and Personal Branding Strategist. The session focused on building a strong LinkedIn profile, personal branding, and effective networking strategies. Students gained practical insights on enhancing their professional presence online, making the session both informative and career-oriented."
  }
];

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
              <div className="w-full md:w-56 aspect-[4/3] bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center gap-1.5 p-4 text-slate-400 select-none shrink-0">
                <Image className="h-6 w-6 stroke-[1.5]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Event Photo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
