import { LandingNav } from "./components/LandingNav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProductDemo } from "./components/ProductDemo";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Industries } from "./components/Industries";
import { Blog } from "./components/Blog";
import { ContactCTA } from "./components/ContactCTA";
import { LandingFooter } from "./components/LandingFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <LandingNav />
      <main>
        <Hero />
        <Marquee />
        <ProductDemo />
        <HowItWorks />
        <Capabilities />
        <Industries />
        <Blog />
        <ContactCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
