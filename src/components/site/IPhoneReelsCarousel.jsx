import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, VolumeX, Volume2, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export function IPhoneReelsCarousel({ items, onVideoClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const progressIntervalRef = useRef(null);

  const totalItems = items.length;
  const AUTOPLAY_TIME = 7000; // 7 seconds

  // Get index wrappers
  const getIndex = (offset) => {
    return (currentIndex + offset + totalItems) % totalItems;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setProgress(0);
  };

  // Progress bar and auto-scroll timer logic
  useEffect(() => {
    if (isHovered) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    setProgress(0);
    const intervalTime = 100; // update progress every 100ms
    const step = (100 / (AUTOPLAY_TIME / intervalTime));

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isHovered]);

  const leftItem = items[getIndex(-1)];
  const centerItem = items[currentIndex];
  const rightItem = items[getIndex(1)];

  // Render a single phone frame content
  const renderPhoneScreen = (item, isCenter) => {
    const youtubeId = item.youtubeId;
    const isHosted = !youtubeId && item.videoUrl;
    
    // Auto-playing embedded player configuration for the active center phone
    const autoplayUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&loop=1&playlist=${youtubeId}&rel=0&playsinline=1&enablejsapi=1&showinfo=0` : '';
    
    // Thumbnail preview for non-center items
    const thumbnailUrl = youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : "/assets/placeholder-video.png";

    return (
      <div className="relative w-full h-full bg-black select-none overflow-hidden">
        {isCenter ? (
          isHosted ? (
            <video
              src={item.videoUrl}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{ border: "none" }}
            />
          ) : (
            <iframe
              src={autoplayUrl}
              title={item.title}
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full object-cover scale-[1.35] z-0 pointer-events-none"
              style={{ border: "none" }}
            />
          )
        ) : (
          <div className="absolute inset-0 w-full h-full z-0">
            {isHosted ? (
              <video
                src={item.videoUrl}
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 filter blur-[1px]"
              />
            ) : (
              <img
                src={thumbnailUrl}
                alt={item.name}
                className="w-full h-full object-cover opacity-80 filter blur-[1px]"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Glossy Overlay/Reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 z-10" />

        {/* Ambient Dark Gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/45 z-10" />

        {/* Reels Content UI Layer */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 pt-8 z-20 text-white select-none">
          {/* Top Progress Segment */}
          {isCenter && (
            <div className="w-full flex gap-1 px-1">
              <div className="h-1 flex-1 bg-white/35 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Spacer */}
          <div />

          <div className="space-y-2 text-left">
            {(item.exam || item.score) && (
              <div className="flex flex-wrap items-center gap-1.5">
                {item.exam && (
                  <span className="rounded-full bg-orange-gradient px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-orange">
                    {item.exam}
                  </span>
                )}
                {item.score && (
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white/90 backdrop-blur">
                    {item.score}
                  </span>
                )}
              </div>
            )}
            
            <div>
              <h4 className="text-sm font-extrabold tracking-tight leading-none text-white">{item.name}</h4>
              {item.college && (
                <p className="text-[10px] text-white/80 font-medium mt-0.5">{item.college}</p>
              )}
            </div>

            {isCenter ? (
              <p className="text-[10px] leading-relaxed text-white/90 line-clamp-3 italic font-medium">
                "{item.quote}"
              </p>
            ) : (
              <div className="h-[42px]" /> // placeholder spacer
            )}

            {/* Click Callout */}
            {isCenter && (
              <button 
                onClick={() => onVideoClick(item)}
                className="mt-1 flex items-center gap-1.5 w-full justify-center rounded-lg bg-white/95 py-2 text-[10px] font-extrabold text-navy-deep shadow-lg hover:bg-orange hover:text-white transition-all cursor-pointer pointer-events-auto"
              >
                <Eye className="h-3 w-3" />
                <span>Tap to watch full story</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto py-12 px-4 select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Glow representing the active reel */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange/15 blur-[120px] transition-all duration-1000 z-0" 
      />

      {/* Title block inside component to make it self-contained */}
      <div className="mb-10 text-center relative z-10">
        <span className="text-xs font-bold text-orange uppercase tracking-widest bg-orange-soft/10 px-3 py-1 rounded-full border border-orange-100">
          ★ Student Stories
        </span>
        <h3 className="mt-3 text-3xl font-extrabold text-navy-deep md:text-4xl">
         Topper Testimonials
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Short, real feedback straight from our achievers. Tap the active screen to watch the full interview.
        </p>
      </div>

      {/* Phone Showcase Stage */}
      <div className="relative flex items-center justify-center h-[580px] w-full mt-6">
        
        {/* Navigation Buttons for desktop */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full border border-slate-200 bg-white/95 text-navy-deep hover:bg-orange hover:text-white hover:border-orange flex items-center justify-center shadow-lg transition-all cursor-pointer"
          aria-label="Previous story"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full border border-slate-200 bg-white/95 text-navy-deep hover:bg-orange hover:text-white hover:border-orange flex items-center justify-center shadow-lg transition-all cursor-pointer"
          aria-label="Next story"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Mute/Unmute Float Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute right-20 lg:right-28 bottom-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur transition cursor-pointer"
          title={isMuted ? "Unmute preview" : "Mute preview"}
        >
          {isMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
        </button>

        {/* 3 iPhones Carousel Track */}
        <div className="relative w-full max-w-[800px] h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {/* Left iPhone */}
            <motion.div
              key={`left-${leftItem.id}`}
              onClick={handlePrev}
              initial={{ opacity: 0, x: -160, scale: 0.75 }}
              animate={{ opacity: 0.55, x: -220, scale: 0.8, rotate: -4 }}
              exit={{ opacity: 0, x: -300, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute hidden sm:block w-[240px] h-[480px] rounded-[40px] border-[8px] border-slate-900 bg-slate-950 shadow-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity z-10"
            >
              {renderPhoneScreen(leftItem, false)}
            </motion.div>

            {/* Center iPhone (Active Video) */}
            <motion.div
              key={`center-${centerItem.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => onVideoClick(centerItem)}
              className="absolute w-[265px] h-[530px] rounded-[45px] border-[10px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden ring-4 ring-slate-800/10 cursor-pointer z-20"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[18px] bg-slate-900 rounded-b-2xl z-40 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-800 rounded-full mr-2" />
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>
              {renderPhoneScreen(centerItem, true)}
            </motion.div>

            {/* Right iPhone */}
            <motion.div
              key={`right-${rightItem.id}`}
              onClick={handleNext}
              initial={{ opacity: 0, x: 160, scale: 0.75 }}
              animate={{ opacity: 0.55, x: 220, scale: 0.8, rotate: 4 }}
              exit={{ opacity: 0, x: 300, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute hidden sm:block w-[240px] h-[480px] rounded-[40px] border-[8px] border-slate-900 bg-slate-950 shadow-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity z-10"
            >
              {renderPhoneScreen(rightItem, false)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
