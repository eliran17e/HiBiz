import { LandingNav } from "./components/LandingNav";
import { Hero } from "./components/Hero";
import { Industries } from "./components/Industries";
import { Capabilities } from "./components/Capabilities";
import { Blog } from "./components/Blog";
import { ContactCTA } from "./components/ContactCTA";
import { LandingFooter } from "./components/LandingFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <LandingNav />
      <main id="main">
        <Hero />
        <Industries />
        <Capabilities />
        <Blog />
        <ContactCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
