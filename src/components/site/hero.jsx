import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Trophy,
  Star,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.png";

import { ADDITIONAL_HERO_SLIDES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/use-count-up";

const slides = [
  {
    image: hero1,
    title: "Learn from India's Top Mentors",
  },
  {
    image: hero2,
    title: "Crack CAT,CLAT ,MBA CET,MCA CET, CRT & IPMAT",
  },
  ...ADDITIONAL_HERO_SLIDES
];

function HeroStat({ value, suffix, label }) {
  const n = useCountUp(value, 2000, true);

  return (
    <div>
      <div className="font-display text-xl font-extrabold text-navy sm:text-2xl">
        {n.toLocaleString("en-IN")}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

function FloatingCard({ className = "", delay = 0, icon, title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`bg-white/80 backdrop-blur-md border border-slate-200/80 flex items-center gap-3 rounded-2xl px-4 py-2.5 shadow-xl z-30 ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100">
        {icon}
      </span>
      <div>
        <h4 className="text-xs font-bold text-navy">{title}</h4>
        <p className="text-[11px] text-slate-500">{sub}</p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-50">
      
      <div className="container-x max-w-6xl mx-auto grid gap-8 pt-36 pb-16 md:pt-40 lg:grid-cols-2 lg:items-center lg:pb-24">
        
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pr-4"
        >
          {/* Badge */}
          <span className="bg-white border border-slate-200 shadow-sm inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold text-slate-700">
            <Sparkles className="h-3 w-3 text-accent" />
            Trusted by 5000+ students across India
          </span>

          {/* Heading */}
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl lg:text-5xl">
            The story of <span className="text-gradient-accent">your success</span>
            <br />
            starts now
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
            Premium coaching for CAT, CLAT, IPMAT, MBA CET, MCA CET & CRT.
            Concept-first teaching, personal mentorship, data-driven mocks and expert faculty that help you achieve your dream college.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="default" className="h-11 px-6 text-sm">
              <a href="#contact" className="text-white">
                Book Free Counselling
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </a>
            </Button>
            <Button asChild variant="outline" size="default" className="h-11 px-6 text-sm border-slate-300 text-navy hover:bg-slate-100">
              <a href="#courses">Explore Courses</a>
            </Button>
          </div>
{/* 
          Stats */}
          {/* <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-slate-200 pt-5">
            <HeroStat value={5000} suffix="+" label="Students Trained" />
            <HeroStat value={120} suffix="+" label="99%ilers" />
            <HeroStat value={96} suffix="%" label="Success Rate" />
          </div> */}
        </motion.div>

   
        <div className="relative w-full max-w-[360px] mx-auto lg:pl-4">

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl aspect-[3/4] w-full border border-slate-200">
            
            {/* Slide Images */}
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ${
                  current === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

   
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

           
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl bg-black/40 px-3.5 py-2 backdrop-blur-md border border-white/10">
              <h3 className="text-xs font-medium text-white sm:text-sm">
                {slides[current].title}
              </h3>
            </div>

       
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur hover:bg-black/60 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur hover:bg-black/60 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

        
            <div className="absolute top-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1 rounded-full transition-all ${
                    current === index ? "w-4 bg-white" : "w-1 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

         
          <div className="hidden lg:block">
            <FloatingCard
              className="absolute -right-4 -top-4"
              delay={0.2}
              icon={<Trophy className="h-4 w-4 text-accent" />}
              title="AIR 1 -  100%ile  — MBA CET"
              sub="Naman Agrawal"
            />

            <FloatingCard
              className="absolute -left-12 top-2/3"
              delay={0.4}
              icon={<Star className="h-4 w-4 text-accent" />}
              title="99.35 %ile MBA CET"
              sub="Vinay Khanija"
            />

            {/* <FloatingCard
              className="absolute right-4 -bottom-2"
              delay={0.6}
              icon={<TrendingUp className="h-4 w-4 text-accent" />}
              title="850+ MBA Converts"
              sub="Across 2025–2026"
            /> */}
          </div>

        </div>

      </div>
    </section>
  );
}