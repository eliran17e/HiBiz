import { Hero } from "./components/Hero";
import { Industries } from "./components/Industries";
import { Capabilities } from "./components/Capabilities";
import { Blog } from "./components/Blog";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Industries />
      <Capabilities />
      <Blog />
    </>
  );
}
