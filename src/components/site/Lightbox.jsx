import { useEffect, useRef, useState, useCallback } from "react";

export function Lightbox({ images, index, onClose, onIndexChange }) {
  const [zoom, setZoom] = useState(1);
  const touchStart = useRef(null);
  const img = images[index];

  const prev = useCallback(() => {
    setZoom(1);
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    setZoom(1);
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  if (!img) return null;

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ url: img.full, title: "KAT Experts Gallery" });
      } else {
        await navigator.clipboard.writeText(img.full);
      }
    } catch {
      /* noop */
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      onTouchStart={(e) => {
        touchStart.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }}
      onTouchEnd={(e) => {
        const s = touchStart.current;
        if (!s) return;
        const dx = e.changedTouches[0].clientX - s.x;
        const dy = e.changedTouches[0].clientY - s.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        }
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 text-white/90"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0 text-sm flex items-center gap-3">
          <button
            onClick={onClose}
            aria-label="Back to gallery"
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white transition cursor-pointer text-xs font-semibold"
          >
            ← Back
          </button>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
            <span className="truncate text-xs font-semibold">{img.category}</span>
          </span>
          <span className="ml-1 text-white/60 text-xs">
            {index + 1} / {images.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IconBtn label="Zoom out" onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}>
            −
          </IconBtn>
          <span className="w-10 text-center text-xs font-semibold tabular-nums text-white/70">
            {Math.round(zoom * 100)}%
          </span>
          <IconBtn label="Zoom in" onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}>
            +
          </IconBtn>
          <a
            href={img.full}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Download image"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
          >
            ↓
          </a>
          <IconBtn label="Share" onClick={share}>
            ↗
          </IconBtn>
          <IconBtn label="Close" onClick={onClose}>
            ✕
          </IconBtn>
        </div>
      </div>

      {/* Image stage */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-2 sm:px-14">
        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:grid cursor-pointer"
        >
          ‹
        </button>
        <img
          key={img.full}
          src={img.full}
          alt={img.alt || img.category}
          className="max-h-[85vh] max-w-full select-none rounded-md object-contain shadow-2xl transition-transform duration-300 animate-in zoom-in-95 fade-in"
          style={{ transform: `scale(${zoom})`, cursor: zoom > 1 ? "grab" : "zoom-in" }}
          onClick={(e) => {
            e.stopPropagation();
            setZoom((z) => (z === 1 ? 2 : 1));
          }}
          draggable={false}
        />
        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:grid cursor-pointer"
        >
          ›
        </button>
      </div>

      {/* Bottom caption */}
      <div
        className="flex flex-col items-center gap-2 px-4 py-4 text-white/70"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center text-xs">
          Use ← → to navigate · + / − to zoom · Esc to close
        </p>
      </div>
    </div>
  );
}

function IconBtn({ children, label, onClick }) {
  return (
    <button
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
    >
      {children}
    </button>
  );
}
