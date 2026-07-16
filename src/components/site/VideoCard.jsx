import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";

function thumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function VideoCard({ t, onClick, index }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: (index % 9) * 0.03 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-xl bg-card text-left p-3 border border-border/50 shadow-soft transition-shadow hover:shadow-lift"
    >
      {/* Video Thumbnail Area Wrapper */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-navy-deep">
        <img
          src={thumb(t.youtubeId)}
          loading="lazy"
          alt={t.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop";
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
        
        {/* Ribbon Badges overlay inside frame */}
        <span className="absolute left-2 top-2 rounded-full bg-orange-gradient px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-orange">
          Success Story
        </span>
        
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur">
          <Clock className="h-2.5 w-2.5" /> {t.duration || "4 mins"}
        </span>
        
        {/* Floating Play Action Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-navy-deep shadow-lift transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </div>
        </div>
        
        {/* Profile Card Overlay inside Image layout */}
        <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
          <div className="text-xs font-bold">{t.name}</div>
          <div className="text-[10px] text-white/80 line-clamp-1">{t.college}</div>
        </div>
      </div>

      {/* Card Content Details Footer Blocks */}
      <div className="flex items-center justify-between gap-2 pt-2.5 px-0.5">
        <div className="min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-orange">
            {t.exam}
          </div>
          <div className="mt-0.5 line-clamp-1 text-xs font-bold text-navy-deep">
            {t.title}
          </div>
        </div>
        
        <div className="shrink-0 rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-black text-navy-deep">
          {t.score}
        </div>
      </div>
    </motion.button>
  );
}
