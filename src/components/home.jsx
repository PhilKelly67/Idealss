import Hero from "../sections/hero";
import About from "../sections/about";

import CTA from "../sections/cta";
import Footer from "../sections/footer";
import Nav from "../sections/nav";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Nav />
      <Hero />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
