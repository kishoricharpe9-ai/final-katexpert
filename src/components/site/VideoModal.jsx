import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";

function embedUrl(t) {
  return `https://www.youtube.com/embed/${t.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
}

export function VideoModal({
  testimonial,
  onClose,
  onPrev,
  onNext,
  related,
  onPickRelated
}) {
  useEffect(() => {
    function onKey(e) {
      if (!testimonial) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [testimonial, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {testimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 p-4 sm:p-6 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-background shadow-lift border border-border/40"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-1.5 text-white backdrop-blur transition hover:bg-orange"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white backdrop-blur transition hover:bg-orange"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white backdrop-blur transition hover:bg-orange"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Main Content Scroll Engine */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid md:grid-cols-[1.5fr_1fr]">
                
                {/* Embedded Player Component Panel */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  {testimonial.youtubeId ? (
                    <iframe
                      src={embedUrl(testimonial)}
                      title={testimonial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full absolute inset-0"
                      key={testimonial.id}
                    />
                  ) : (
                    <video
                      src={testimonial.videoUrl}
                      controls
                      autoPlay
                      className="h-full w-full absolute inset-0 object-contain"
                      key={testimonial.id}
                    />
                  )}
                </div>

                {/* Sidebar Detail Card Blocks */}
                <div className="flex flex-col gap-3 p-4 sm:p-5 justify-center">
                  <span className="w-fit rounded-full bg-orange-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-deep">
                    {testimonial.exam}
                  </span>
                  
                  <h3 className="text-xl font-bold text-navy-deep tracking-tight">
                    {testimonial.name}
                  </h3>
                  
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100/60">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Achievement
                    </div>
                    <div className="text-base font-black text-orange leading-tight mt-0.5">
                      {testimonial.score}
                    </div>
                    <div className="text-xs font-semibold text-navy mt-0.5">
                      {testimonial.college}
                    </div>
                  </div>

                  <blockquote className="rounded-lg bg-secondary p-3 text-xs italic text-navy leading-relaxed border-l-2 border-orange/40">
                    “{testimonial.quote}”
                  </blockquote>

                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20KAT%20Expert,%20I'd%20like%20free%20counselling`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 rounded-lg bg-orange-gradient w-full py-2 text-xs font-bold text-white shadow-orange tracking-wide transition-all active:scale-[0.98] inline-block text-center"
                  >
                    Book Free Counselling
                  </a>
                </div>
              </div>

              {/* Related Success Stories Shelf */}
              {related.length > 0 && (
                <div className="border-t border-border p-4 sm:p-5 bg-slate-50/50">
                  <h4 className="mb-3 text-[10px] font-black uppercase tracking-wider text-navy-deep">
                    Related Success Stories
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                    {related.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => onPickRelated(r)}
                        className="group overflow-hidden rounded-lg bg-background border border-border/40 text-left transition hover:shadow-lift p-1.5"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-md bg-black">
                          <img
                            src={r.youtubeId ? `https://i.ytimg.com/vi/${r.youtubeId}/hqdefault.jpg` : "/assets/placeholder-video.png"}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            alt={r.name}
                          />
                        </div>
                        <div className="pt-1.5 px-0.5">
                          <div className="text-xs font-bold text-navy-deep truncate">
                            {r.name}
                          </div>
                          <div className="text-[10px] font-medium text-muted-foreground mt-0.5">
                            {r.exam} · {r.college}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
