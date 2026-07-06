import LandingPage from "@/landing/LandingPage";
import LegalPage, { type LegalKind } from "@/landing/LegalPage";
import { A11yWidget } from "@/landing/components/A11yWidget";

const LEGAL_ROUTES: Record<string, LegalKind> = {
  "/privacy": "privacy",
  "/terms": "terms",
  "/accessibility": "accessibility",
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const legal = LEGAL_ROUTES[path];

  return (
    <>
      {legal ? <LegalPage kind={legal} /> : <LandingPage />}
      <A11yWidget />
    </>
  );
}
