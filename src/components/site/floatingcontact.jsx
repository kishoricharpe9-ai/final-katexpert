import { useState } from "react";
import { MessageCircle, Phone, X, MessageSquare } from "lucide-react"; 
import { BRAND } from "@/lib/site-data"; 

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
   
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
     
      <div 
        className={`flex flex-col gap-2 transition-all duration-300 transform origin-bottom ${
          open 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
      
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Expert,%20I'd%20like%20to%20know%20more%20about%20courses.`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold shadow-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="h-4 w-4" /> 
          WhatsApp
        </a>

       
        <a
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 rounded-full bg-navy text-white px-4 py-2.5 text-sm font-semibold shadow-lg border border-white/10 hover:bg-navy/90 hover:scale-105 active:scale-95 transition-all"
        >
          <Phone className="h-4 w-4 text-accent" /> 
          Call Us
        </a>
      </div>

    
      <button
        aria-label="Contact Navigation Toggle Menu"
        onClick={() => setOpen((o) => !o)}
        className={`grid h-14 w-14 place-items-center rounded-full text-white shadow-2xl transition-all duration-300 active:scale-90 ${
          open 
            ? "bg-navy border border-white/10 rotate-90" 
            : "bg-accent hover:bg-accent/90 animate-bounce"
        }`}
        style={{ animationDuration: '3s' }} 
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6 text-accent-foreground" />
        )}
      </button>

    </div>
  );
}