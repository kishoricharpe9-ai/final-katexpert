import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function PageHero({ title, breadcrumb }) {
  return (
    <section
      className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)"
        }}
      />
      <div className="container-x relative mx-auto max-w-6xl text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-4 flex items-center justify-center gap-1.5 text-sm text-white/75">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {breadcrumb.map((item, index) => (
            <span key={item} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              {index === breadcrumb.length - 1 ? (
                <span className="text-white">{item}</span>
              ) : (
                <span className="text-white/75">{item}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

export { PageHero };
