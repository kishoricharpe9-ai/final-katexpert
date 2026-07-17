import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./logo";
import { NAV_LINKS, BRAND } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

function NavLink({ link, scrolled, onNavigate }) {
  const isHash = link.href?.startsWith("/#");
  const isExternal = link.href?.startsWith("http");
  const className = `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
    scrolled
      ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
      : "text-white/85 hover:bg-white/10 hover:text-white"
  }`;

  if (isHash || isExternal) {
    return (
      <a 
        href={link.href} 
        className={className} 
        onClick={onNavigate}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link to={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </Link>
  );
}

function DesktopDropdown({ item, scrolled }) {
  const [open, setOpen] = useState(false);
  const [pyqsOpen, setPyqsOpen] = useState(false);

  const triggerClass = `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
    scrolled
      ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
      : "text-white/85 hover:bg-white/10 hover:text-white"
  }`;

  const panelClass =
    "absolute top-full left-0 z-50 min-w-[200px] rounded-lg border border-border bg-white py-1 shadow-card";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setPyqsOpen(false);
      }}
    >
      <button type="button" className={triggerClass} aria-expanded={open}>
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className={`${panelClass} mt-1`}
          >
            {item.children.map((child) =>
              child.children ? (
                <div
                  key={child.label}
                  className="relative"
                  onMouseEnter={() => setPyqsOpen(true)}
                  onMouseLeave={() => setPyqsOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-white ${
                      pyqsOpen ? "bg-accent text-white" : ""
                    }`}
                  >
                    {child.label}
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {pyqsOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.15 }}
                        className={`${panelClass} left-full top-0 ml-0.5`}
                      >
                        {child.children.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                child.href.startsWith("http") || child.href.startsWith("/#") ? (
                  <a
                    key={child.href}
                    href={child.href}
                    className="block border-t border-border/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors first:border-t-0 hover:bg-accent hover:text-white"
                  >
                    {child.label}
                  </a>
                ) : (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={() => setOpen(false)}
                    className="block border-t border-border/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors first:border-t-0 hover:bg-accent hover:text-white"
                  >
                    {child.label}
                  </Link>
                )
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CoursesDropdown({ scrolled }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const triggerClass = `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
    scrolled
      ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
      : "text-white/85 hover:bg-white/10 hover:text-white"
  }`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className={triggerClass}
      >
        Courses
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-2"
          >
            <div className="w-[500px] rounded-2xl border border-border bg-white p-3 shadow-card grid grid-cols-2 gap-1 text-left">
              {courses.map((c) => {
                const active = location.pathname === `/courses/${c.slug}`;
                return (
                  <Link
                    key={c.slug}
                    to={`/courses/${c.slug}`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-colors ${
                      active ? "bg-[#ea580c]/10" : "hover:bg-slate-50"
                    }`}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-white font-bold text-xs select-none">
                      {c.code.split(" ")[0]}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-navy leading-normal">{c.code}</span>
                      <span className="block text-[11px] text-muted-foreground truncate leading-normal">{c.name}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const [pyqsExpanded, setPyqsExpanded] = useState(false);

  if (item.label === "Courses") {
    return (
      <li>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
        >
          {item.label}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden pl-3"
            >
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/courses/${c.slug}`}
                    onClick={onNavigate}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-secondary"
                  >
                    <span className="font-semibold text-[#ea580c] mr-2">{c.code}</span>
                    <span className="text-muted-foreground">— {c.name}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  if (item.label === "Gallery") {
    return (
      <li>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
        >
          {item.label}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden pl-3"
            >
              {item.children.map((c) => (
                <li key={c.href}>
                  <Link
                    to={c.href}
                    onClick={onNavigate}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-secondary"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  if (!item.children) {
    const isHash = item.href?.startsWith("/#");
    return (
      <li>
        {isHash ? (
          <a
            href={item.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
          >
            {item.label}
          </a>
        ) : (
          <Link
            to={item.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
          >
            {item.label}
          </Link>
        )}
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pl-3"
          >
            {item.children.map((child) =>
              child.children ? (
                <li key={child.label}>
                  <button
                    type="button"
                    onClick={() => setPyqsExpanded((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary"
                  >
                    {child.label}
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${pyqsExpanded ? "rotate-90" : ""}`} />
                  </button>
                  {pyqsExpanded && (
                    <ul className="pl-3">
                      {child.children.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            to={sub.href}
                            onClick={onNavigate}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-accent hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={child.href}>
                  {child.href.startsWith("http") || child.href.startsWith("/#") ? (
                    <a
                      href={child.href}
                      onClick={onNavigate}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-secondary"
                    >
                      {child.label}
                    </a>
                  ) : (
                    <Link
                      to={child.href}
                      onClick={onNavigate}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-secondary"
                    >
                      {child.label}
                    </Link>
                  )}
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const closeMobile = () => setOpen(false);

  const tickerItems = Array(12).fill(
    " ADMISSIONS OPEN FOR BATCH 2026-27 • CRACK CAT, CLAT, IPMAT & CET • ENROLL NOW FOR EXPERT MENTORSHIP!"
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      <style>{`
        @keyframes ultraSlowScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        .animate-ultra-slow {
          animation: ultraSlowScroll 50s linear infinite;
        }
        .animate-ultra-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full bg-accent text-accent-foreground h-9 flex items-center overflow-hidden border-b border-accent/20 select-none cursor-pointer">
        <div className="flex whitespace-nowrap gap-16 text-xs font-bold uppercase tracking-wider pl-16 animate-ultra-slow">
          {tickerItems.map((text, index) => (
            <span key={index} className="flex-shrink-0 flex items-center gap-2">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft"
            : "bg-navy"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-4 md:h-18">
          <div className="lg:ml-20">
            <Logo light={!scrolled} />
          </div>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                {l.label === "Courses" ? (
                  <CoursesDropdown scrolled={scrolled} />

                ) : l.children ? (
                  <DesktopDropdown item={l} scrolled={scrolled} />
                ) : (
                  <NavLink link={l} scrolled={scrolled} />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <div
              className={`flex items-center gap-2 text-sm font-semibold whitespace-nowrap ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <div className="hidden xl:flex items-center gap-2">
                <a
                  href={`tel:${BRAND.phone?.replace(/\s/g, "") || ""}`}
                  className="hover:text-accent transition-colors"
                >
                  {BRAND.phone}
                </a>
                <span className="opacity-40 font-normal">/</span>
                <a
                  href={`tel:${BRAND.phoneAlt?.replace(/\s/g, "") || ""}`}
                  className="hover:text-accent transition-colors"
                >
                  {BRAND.phoneAlt}
                </a>
              </div>
            </div>

            <Button asChild variant="accent" size="sm">
              <a href="/#contact">Book Free Counselling</a>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border bg-background lg:hidden"
            >
              <ul className="container-x flex flex-col gap-1 py-4">
                {NAV_LINKS.map((l) => (
                  <MobileNavItem key={l.label} item={l} onNavigate={closeMobile} />
                ))}

                <li className="flex flex-col gap-2 pt-2 pb-1 px-3 border-t border-border mt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Phone className="h-3.5 w-3.5 text-accent" /> Talk to our expert mentors:
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-foreground pl-5">
                    <a href={`tel:${BRAND.phone?.replace(/\s/g, "") || ""}`}>{BRAND.phone}</a>
                    <a href={`tel:${BRAND.phoneAlt?.replace(/\s/g, "") || ""}`}>{BRAND.phoneAlt}</a>
                  </div>
                </li>

                <Button asChild variant="accent" className="mt-2 w-full">
                  <a href="/#contact" onClick={closeMobile}>
                    Book Free Counselling
                  </a>
                </Button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export { Navbar };
