import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "./logo";
import { BRAND, NAV_LINKS, COURSES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Enter a valid email");
      return;
    }
    toast.success("Subscribed! Watch your inbox for prep tips.");
    setEmail("");
  };

  return (
  
    <footer className="bg-[#0a0f1d] text-white/70 border-t border-white/10">
   
      <div className="container-x max-w-6xl mx-auto grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        
    
        <div>
       
          <Logo light={true} />
        
          <p className="mt-3.5 max-w-xs text-xs leading-relaxed text-white/60">
            KATexpert is a leading institute for competitive exam preparation, offering expert coaching for CAT, CLAT, IPMAT, MBA CET, MCA CET, and CRT. With experienced faculty, personalized guidance, and a proven track record of success, we are committed to helping students achieve their academic and career goals.
          </p>
          <div className="mt-4 flex gap-1.5">
            {[
              { Icon: Facebook, url: "https://www.facebook.com/katexpertinstitute/" },
              { Icon: Instagram, url: "https://www.instagram.com/katexpert_nagpur/" },
              { Icon: Youtube, url: "https://www.youtube.com/channel/UCxc-E0Jkn7EUBlCg7I9WXrw" },
              { Icon: Linkedin, url: "https://www.linkedin.com/company/katexpertnagpur/" }
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social link"
                className="grid h-8 w-8 place-items-center rounded-md bg-white/5 text-white/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

    
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-3 space-y-1.5 text-xs">
            {NAV_LINKS.flatMap((l) =>
              l.children
                ? [
                    { label: "CAT Resources", href: "/resources/cat" },
                    { label: "IPMAT Resources", href: "/resources/ipmat" },
                    ...l.children.filter((c) => !c.children)
                  ]
                : [l]
            ).map((l) => (
              <li key={l.href + l.label}>
                {l.href?.startsWith("/#") || l.href?.startsWith("#") ? (
                  <a href={l.href.startsWith("#") ? `/${l.href}` : l.href} className="transition-colors hover:text-accent text-white/60 hover:text-white">
                    {l.label}
                  </a>
                ) : (
                  <Link to={l.href} className="transition-colors hover:text-accent text-white/60 hover:text-white">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
            Courses
          </h4>
        
          <ul className="mt-3 space-y-1.5 text-xs">
            {COURSES.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link to="/courses" className="transition-colors hover:text-accent text-white/60 hover:text-white truncate block">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
            Contact Us
          </h4>
          <ul className="mt-3.5 space-y-2 text-xs text-white/60">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-accent transition-colors hover:text-white">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
              <a href={`tel:${BRAND.phoneAlt}`} className="hover:text-accent transition-colors hover:text-white">
                {BRAND.phoneAlt}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-accent shrink-0" /> {BRAND.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> <span className="line-clamp-2">{BRAND.address}</span>
            </li>
          </ul>
        </div>

      </div>

   
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-x max-w-6xl mx-auto flex flex-col items-center justify-between gap-2 py-4 text-[11px] text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };