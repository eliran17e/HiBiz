import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  applyDocumentDirection,
  persistLanguage,
  isRTL,
  type SupportedLanguage,
} from "@/i18n";

export function useLanguage() {
  const { i18n } = useTranslation();

  const setLanguage = useCallback(
    (language: SupportedLanguage) => {
      i18n.changeLanguage(language);
      applyDocumentDirection(language);
      persistLanguage(language);
    },
    [i18n],
  );

  return {
    language: i18n.language as SupportedLanguage,
    setLanguage,
    isRTL: isRTL(i18n.language),
  };
}
