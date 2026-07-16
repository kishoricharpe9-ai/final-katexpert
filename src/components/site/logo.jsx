import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react"; 
import { BRAND } from "@/lib/site-data"; 

export function Logo({ light = false }) { 
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-[oklch(0.62_0.18_38)] text-accent-foreground shadow-glow">
        <GraduationCap className="h-5 w-5" strokeWidth={2.4} />
      </span>
      
      <span className="leading-none">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          KAT<span className="text-gradient-accent">expert</span>
        </span>
        <span className={`block text-[10px] font-medium ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {BRAND.tagline}
        </span>
      </span>
    </Link>
  ); 
}