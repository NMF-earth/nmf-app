import { locale } from "expo-localization";

const supportedLanguages = {
  // Key-value pairs
  // State the name of the language in its own language :)
  en: "English",
  fr: "Français",
  de: "Deutsche",
  cs: "Čeština",
  sv: "Svenska",
  ru: "Pусский",
  pt: "Português",
  pl: "Polski",
  da: "Dansk",
  zh: "中文（简体）",
  ms: "Bahasa Melayu",
  es: "Español",
  it: "Italiano",
  ar: "عربي",
};

const currentLanguage = Object.keys(supportedLanguages).includes(locale.substring(0, 2))
  ? locale.substring(0, 2)
  : supportedLanguages[0];

export { supportedLanguages, currentLanguage };
