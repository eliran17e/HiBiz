import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "@/landing/LandingPage";
import LegalPage from "@/landing/LegalPage";
import IndustryPage from "@/landing/pages/IndustryPage";
import BlogIndexPage from "@/landing/pages/BlogIndexPage";
import BlogPostPage from "@/landing/pages/BlogPostPage";
import ContactPage from "@/landing/pages/ContactPage";
import { LandingNav } from "@/landing/components/LandingNav";
import { LandingFooter } from "@/landing/components/LandingFooter";
import { A11yWidget } from "@/landing/components/A11yWidget";

const NAV_HEIGHT = 64; // h-16 fixed header
const ANCHOR_GAP = 24; // breathing room between nav and section heading

// Scrolls to top on route change; honors #hash targets (also cross-page,
// e.g. navigating to /#capabilities from another page). Compensates each
// section's own top padding so the heading lands right below the fixed
// nav instead of a screen of dead space.
function ScrollManager() {
  // `key` changes on every navigation, including re-clicking a link for the
  // URL we're already on — without it, a second "Capabilities" click is a no-op.
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Effects run after the new route's DOM is committed, so the target exists.
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      const paddingTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
      const top =
        el.getBoundingClientRect().top + window.scrollY + paddingTop - NAV_HEIGHT - ANCHOR_GAP;
      // No explicit behavior: the html element's scroll-behavior decides,
      // which the a11y "stop animations" toggle switches to instant.
      window.scrollTo({ top: Math.max(top, 0) });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

function SiteLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <LandingNav />
      <main id="main">
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/industries/:key" element={<IndustryPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        {/* Legal pages render their own minimal header/footer */}
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/accessibility" element={<LegalPage kind="accessibility" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <A11yWidget />
    </BrowserRouter>
  );
}
