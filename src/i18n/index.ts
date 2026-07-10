import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingEn from "./locales/landing.en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { landing: landingEn } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnEmptyString: false,
  returnObjects: true,
});

export default i18n;
