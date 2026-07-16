import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { X, ChevronUp } from "lucide-react";

export function ReelsModal({ open, items, startId, onClose }) {
  const [index, setIndex] = useState(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (open && startId) {
      const i = items.findIndex((t) => t.id === startId);
      setIndex(i >= 0 ? i : 0);
    }
  }, [open, startId, items]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(delta) {
    setIndex((i) => Math.max(0, Math.min(items.length - 1, i + delta)));
  }

  const current = items[index];
  const next = items[index + 1];

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-30 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors backdrop-blur"
            aria-label="Close reels"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Swipeable Container */}
          <motion.div
            key={current.id}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.4}
            style={{ y }}
            onDragEnd={(_, info) => {
              if (info.offset.y < -80) go(1);
              else if (info.offset.y > 80) go(-1);
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 26 }}
            className="relative w-full h-[85vh] max-w-[340px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
          >
            <iframe
              src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&loop=1&playlist=${current.youtubeId}&rel=0&modestbranding=1&playsinline=1`}
              title={current.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full z-0"
            />
            
            {/* Overlay Gradients */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10" />
            
            {/* Student Text Panel */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-white z-20">
              <span className="inline-block rounded-full bg-orange-gradient px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide shadow-orange">
                {current.exam}
              </span>
              
              <h3 className="mt-2 text-base font-bold tracking-tight">{current.name}</h3>
              
              <div className="text-xs text-white/75 mt-0.5">
                {current.college} ·{" "}
                <span className="font-bold text-orange">{current.score}</span>
              </div>
              
              <p className="mt-1.5 text-xs text-white/90 font-medium leading-relaxed line-clamp-3">
                “{current.quote}”
              </p>
              
              {/* Swipe Indicator Footer */}
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/60">
                <ChevronUp className="h-3 w-3 animate-bounce" />
                <span>Swipe up for {next ? next.name : "start"}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// FIXED: Added the explicit hook layout module back into the file export lifecycle
export function useIsMobile() {
  const [m, setM] = useState(false);
  
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setM(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  
  return m;
}
