"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATIONS } from "../i18n/translation";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load saved language only after client mount (avoids hydration mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sahyadri_lang");
      if (saved === "hi" || saved === "mr") {
        setLang(saved);
      }
    } catch {
      // ignore storage errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 2. Sync <html lang="..."> and localStorage whenever lang changes after mount
  useEffect(() => {
    if (!isLoaded) return;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("sahyadri_lang", lang);
    } catch {
      // ignore storage errors
    }
  }, [lang, isLoaded]);

  const t = (path) => {
    const keys = path.split(".");
    let cur = TRANSLATIONS[lang] || TRANSLATIONS.en;
    for (const k of keys) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, k)) {
        cur = cur[k];
      } else {
        // fallback to English
        let fallback = TRANSLATIONS.en;
        for (const fk of keys) {
          fallback = fallback ? fallback[fk] : undefined;
        }
        return fallback ?? path;
      }
    }
    return cur;
  };

  const pick = (value) => {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.en || "";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}