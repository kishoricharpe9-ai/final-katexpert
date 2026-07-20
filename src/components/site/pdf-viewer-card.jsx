import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Share2,
  MoreHorizontal,
  LayoutGrid,
  List,
  FileText,
  Download
} from "lucide-react";

function PdfViewerCard({ title, subtitle, pdfUrl }) {
  const [viewing, setViewing] = useState(false);
  const [zoom, setZoom] = useState(100);
  const previewRef = useRef(null);

  const openPdf = () => {
    if (pdfUrl) window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const downloadPdf = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "");
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const toggleView = () => setViewing((v) => !v);

  const toggleFullscreen = () => {
    const el = previewRef.current;
    if (el) {
      if (!document.fullscreenElement) {
        el.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable fullscreen:", err);
          openPdf();
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-lg bg-[#3a3a3a] shadow-card">
      <div className="relative aspect-[3/4] w-full">
        {viewing && pdfUrl ? (
          <div ref={previewRef} className="absolute inset-0 h-full w-full bg-white z-10">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title={`${title} ${subtitle}`}
              className="absolute inset-0 h-full w-full border-0 bg-white"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
            />
            <div className="absolute right-2 top-2 z-20 flex gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="rounded-full bg-black/60 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/80 cursor-pointer h-7 w-7 flex items-center justify-center border-0"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={toggleView}
                className="rounded-full bg-black/60 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/80 cursor-pointer font-bold text-xs h-7 w-7 flex items-center justify-center border-0"
                aria-label="Close Preview"
              >
                ✕
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2d2d2d] p-4">
            <div className="flex w-full max-w-[150px] flex-col items-center rounded-sm bg-white px-3 py-4.5 shadow-lg">
              <span className="text-[9px] font-bold uppercase tracking-wider text-navy">
                KATexpert
              </span>
              <p className="mt-2 text-center font-display text-xs font-extrabold leading-tight text-navy">
                {title}
              </p>
              <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wide text-accent">
                {subtitle}
              </p>
              <button
                type="button"
                onClick={openPdf}
                className="mt-3 inline-flex items-center gap-1.5 bg-[#ea580c] hover:bg-[#d94e06] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="h-3 w-3" /> Preview PDF
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={toggleView}
          aria-label="Previous view"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/60"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={toggleView}
          aria-label="Next view"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/60"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-1 border-t border-white/10 bg-white px-2 py-1.5">
        <span className="text-[10px] font-medium text-foreground/70">
          {viewing ? "PDF" : "Cover"} · 1/1
        </span>
        <div className="flex items-center gap-0.5">
          <ToolbarButton icon={List} label="Outline" onClick={openPdf} />
          <ToolbarButton icon={LayoutGrid} label="Thumbnails" onClick={toggleView} />
          <ToolbarButton
            icon={ZoomOut}
            label="Zoom out"
            onClick={() => setZoom((z) => Math.max(50, z - 25))}
          />
          <ToolbarButton
            icon={ZoomIn}
            label="Zoom in"
            onClick={() => setZoom((z) => Math.min(200, z + 25))}
          />
          <ToolbarButton icon={Maximize2} label="Fullscreen" onClick={openPdf} />
          <ToolbarButton icon={Download} label="Download" onClick={downloadPdf} />
          <ToolbarButton icon={Share2} label="Share" onClick={openPdf} />
          <ToolbarButton icon={MoreHorizontal} label="More options" onClick={openPdf} />
        </div>
      </div>
    </div>
  );
}

function ToolbarButton({ icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-7 w-7 place-items-center rounded text-foreground/60 transition-colors hover:bg-secondary hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}

export { PdfViewerCard };
