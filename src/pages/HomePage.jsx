import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Courses } from "@/components/site/courses";
import { About } from "@/components/site/about";
import { Faculty } from "@/components/site/faculty";
import { Toppers } from "@/components/site/toppers";
import { Testimonials } from "@/components/site/testimonials";
import { ContactAndFaq } from "@/components/site/ContactAndFaq";

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Courses />
      <About />
      <Faculty />
      <Toppers />
      <Testimonials />
      <ContactAndFaq />
    </main>
  );
}

export default HomePage;
