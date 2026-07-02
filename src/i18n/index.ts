import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingEn from "./locales/landing.en.json";
import landingHe from "./locales/landing.he.json";

export const RTL_LANGUAGES = ["he"];
export const SUPPORTED_LANGUAGES = ["en", "he"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const STORAGE_KEY = "hibiz-language";

function getInitialLanguage(): SupportedLanguage {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
    return stored as SupportedLanguage;
  }
  return "en";
}

export function isRTL(language: string) {
  return RTL_LANGUAGES.includes(language);
}

export function applyDocumentDirection(language: string) {
  document.documentElement.dir = isRTL(language) ? "rtl" : "ltr";
  document.documentElement.lang = language;
}

export function persistLanguage(language: string) {
  localStorage.setItem(STORAGE_KEY, language);
}

const initialLanguage = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { landing: landingEn } },
    he: { translation: { landing: landingHe } },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnEmptyString: false,
  returnObjects: true,
});

applyDocumentDirection(initialLanguage);

export default i18n;
