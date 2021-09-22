import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { en, de, fr, sv, ru, pl, pt, da, zh, ms, es, TranslationKeys } from "./resources";

// Configure
i18n.fallbacks = true;
i18n.translations = { en, de, fr, sv, ru, pl, pt, da, zh, ms, es };

// Test locales quickly by overriding this value
i18n.locale = Localization.locale;

/*
 * Pass a translation key and receive a translated string, optionally passing a template value.
 * eg.
 * t('act') // Act
 * t('monthlyEmissionNumber', { co2: '100kg' }) // Your emissions this month 100kg
 **/
export function t(key: keyof TranslationKeys, values?: { [id: string]: string }): string {
  return values ? i18n.t(key, values) : i18n.t(key);
}
