import { useState, useMemo, useEffect, useRef } from "react";
import { PageHero } from "@/components/site/page-hero";
import galleryData from "@/data/gallery.json";
import { Lightbox } from "@/components/site/Lightbox";

const CATEGORIES = ["All", "Achievers", "Institute Buzz", "Victory Celebration", "GD / PI Preparation"];

export default function VisualGalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const lightboxImages = useMemo(() => {
    return filteredItems.map((f) => ({
      src: f.src,
      full: f.full,
      w: f.w,
      h: f.h,
      category: f.category,
      alt: `${f.category} — KatExpert`,
    }));
  }, [filteredItems]);

  const counts = useMemo(() => {
    const c = { All: galleryData.length };
    for (const it of galleryData) {
      c[it.category] = (c[it.category] || 0) + 1;
    }
    return c;
  }, []);

  return (
    <main className="bg-slate-50/50 min-h-screen pb-20 font-sans text-slate-800">
      <style>{`
        .masonry {
          column-gap: 1rem;
          column-count: 1;
        }
        @media (min-width: 640px) {
          .masonry {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .masonry {
            column-count: 3;
          }
        }
        @media (min-width: 1400px) {
          .masonry {
            column-count: 4;
          }
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
      `}</style>

      <PageHero
        title="Visual Gallery"
        subtitle="Moments that build tomorrow's leaders"
        breadcrumb={["Gallery", "Visual Gallery"]}
      />

      {/* Category selector */}
      <div className="container-x max-w-6xl mx-auto mt-12 px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="gallery-category-tabs">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            const count = counts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#ea580c] text-white shadow-md scale-105"
                    : "bg-white hover:bg-slate-100 text-navy border border-slate-100"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="masonry" id="gallery-masonry-grid">
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={`${item.full}-${index}`}
                item={item}
                onOpen={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center text-muted-foreground p-12 border border-dashed rounded-2xl">
            No moments in this category yet.
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </main>
  );
}

function GalleryCard({ item, onOpen }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      onClick={onOpen}
      className="masonry-item w-full group overflow-hidden rounded-2xl bg-white border border-slate-100 p-2 shadow-sm hover:shadow-md transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-100">
        {inView ? (
          <img
            src={item.full}
            alt={`${item.category} moment`}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
          />
        ) : (
          <div className="aspect-[4/3] w-full bg-slate-50" />
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-3 left-3 bg-navy/80 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          {item.category}
        </span>
      </div>
    </button>
  );
}
