import { Fragment, useState } from "react";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { BRAND, COURSES, FAQS } from "@/lib/site-data"; // FAQS array is imported directly here
import { Reveal, SectionHeading } from "./section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  course: z.string().min(1, "Select a course")
});

export function ContactAndFaq() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues.message);
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
    <section id="contact" className="bg-white py-16 sm:py-20 text-slate-900">
      <div className="container-x max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
        
        {/* FAQ Accordion Side */}
        <div className="w-full">
          <Reveal>
            <div className="relative inline-block bg-[#FFF4F0] text-[#F15A24] font-semibold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
              FAQ
            </div>
            
            <h2 className="text-[#0B2545] font-display text-2xl font-bold tracking-tight sm:text-3xl mb-6">
              Questions? <span className="text-[#F15A24]">Answered.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full border-t border-slate-100">
              {FAQS?.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100">
                  <AccordionTrigger className="flex flex-row-reverse justify-end gap-3 text-left font-display text-sm font-semibold text-[#0B2545] hover:text-[#F15A24] hover:no-underline py-3.5 [&>svg]:shrink-0 transition-colors duration-200">
                    <span>{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 text-xs text-slate-500 leading-relaxed pb-3.5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        {/* Counselling Form Side */}
        <div className="w-full">
          <Reveal delay={0.12}>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.08)] sm:p-8 border border-slate-100/80 max-w-md mx-auto lg:mr-0">
              {done ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="h-10 w-10 text-[#F15A24]" />
                  <h3 className="mt-3 font-display text-lg font-bold text-[#0B2545]">Request received!</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Our counsellor will reach out within 24 hours.</p>
                  <Button variant="outline" size="sm" className="mt-4 text-[#0B2545]" onClick={() => setDone(false)}>
                    Submit another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-[#0B2545] mb-1">Book Free Counselling</h3>
                  
                  <Input name="name" placeholder="Full name" aria-label="Full name" className="h-10 text-xs bg-white text-[#0B2545] border-slate-200 rounded-xl placeholder:text-slate-400 focus-visible:ring-[#F15A24]" />
                  <Input name="email" type="email" placeholder="Email address" aria-label="Email" className="h-10 text-xs bg-white text-[#0B2545] border-slate-200 rounded-xl placeholder:text-slate-400 focus-visible:ring-[#F15A24]" />
                  <Input name="phone" placeholder="Phone number" aria-label="Phone" className="h-10 text-xs bg-white text-[#0B2545] border-slate-200 rounded-xl placeholder:text-slate-400 focus-visible:ring-[#F15A24]" />
                  
                  <div className="relative">
                    <select
                      name="course"
                      aria-label="Course"
                      defaultValue=""
                      className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F15A24] text-[#0B2545] appearance-none"
                    >
                      <option value="" disabled>Select a course</option>
                      {COURSES?.map((c) => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      )) || (
                        <>
                          <option value="kat-expert">KatExpert Program</option>
                          <option value="mock-series">Mock Analysis Series</option>
                        </>
                      )}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <svg className="fill-current h-3.5 w-3.5" xmlns="http://w3.org" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <Button type="submit" className="h-10 w-full text-sm font-semibold bg-[#F15A24] text-white hover:bg-[#e04f1e] rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2" disabled={submitting}>
                    {submitting ? "Submitting..." : (
                      <>
                        Request Callback <Send className="h-3.5 w-3.5 ml-0.5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-[11px] text-slate-400 pt-0.5">We respect your privacy. No spam, ever.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}