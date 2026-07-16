import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20KAT%20Expert,%20I'd%20like%20more%20information`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}