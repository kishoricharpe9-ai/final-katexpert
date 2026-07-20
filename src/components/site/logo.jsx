import { Link } from "react-router-dom";
import logoImg from "@/assets/kat-expert-logo-cropped.png";

export function Logo({ light = false }) { 
  return (
    <Link to="/" className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
      <div className="bg-white px-3.5 py-1.5 rounded-xl flex items-center justify-center shadow-sm">
        <img 
          src={logoImg} 
          alt="KatExpert Logo" 
          className="h-8 w-auto object-contain md:h-9"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </Link>
  ); 
}