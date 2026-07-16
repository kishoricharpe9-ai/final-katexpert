import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { BRAND, COURSES } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  course: z.string().min(1, "Select a course")
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setDone(true);
    toast.success("Thank you! Our counsellor will call you within 24 hours.");
    form.reset();
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-navy to-[oklch(0.2_0.06_255)] py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        
       
        <Reveal>
          <SectionHeading
            align="left"
            light={true}
            eyebrow="Free Counselling"
            title={
              <>
                Let's plan your <span className="text-gradient-accent">rank story</span>
              </>
            }
            subtitle="Book a free 1-on-1 counselling session. Tell us your goal and we'll map the path."
          />
          
          <div className="mt-8 space-y-4">
          
            <a 
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`} 
              className="flex items-center gap-3 text-white/85 hover:text-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                <Phone className="h-5 w-5 text-accent" />
              </span>
              <span>
                <span className="block text-xs text-white/55">Call us</span>
                {BRAND.phone} · {BRAND.phoneAlt}
              </span>
            </a>

     
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20KAT%20Expert,%20I'd%20like%20free%20counselling`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/85 hover:text-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                <MessageCircle className="h-5 w-5 text-accent" />
              </span>
              <span>
                <span className="block text-xs text-white/55">WhatsApp</span>
                Chat with a counsellor
              </span>
            </a>

            <div className="flex items-center gap-3 text-white/85">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                <MapPin className="h-5 w-5 text-accent" />
              </span>
              <span>
                <span className="block text-xs text-white/55">Visit us</span>
                {BRAND.address}
              </span>
            </div>
          </div>
        </Reveal>

       
        <Reveal delay={0.12}>
          <div className="rounded-3xl bg-card p-6 shadow-card sm:p-8">
            {done ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" />
                <h3 className="mt-4 font-display text-xl font-bold text-navy">Request received!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our counsellor will reach out within 24 hours.</p>
                <Button variant="outline" className="mt-6" onClick={() => setDone(false)}>
                  Submit another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold text-navy">Book Free Counselling</h3>
                
                <Input name="name" placeholder="Full name" aria-label="Full name" />
                <Input name="email" type="email" placeholder="Email address" aria-label="Email" />
                <Input name="phone" placeholder="Phone number" aria-label="Phone" />
                
                <select
                  name="course"
                  aria-label="Course"
                  defaultValue=""
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-navy"
                >
                  <option value="" disabled>Select a course</option>
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>

                <Button type="submit" variant="accent" className="h-11 w-full text-base" disabled={submitting}>
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Request Callback <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground">We respect your privacy. No spam, ever.</p>
              </form>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}