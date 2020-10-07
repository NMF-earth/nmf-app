import i18n from "i18n-js";

import { t } from "..";

const en = {
  ACT_SCREEN_TAB_NAME: "some string",
  SETTINGS_SCREEN_TITLE: "some string with {{value}}",
};

it("parses a simple string", () => {
  i18n.translations = { en };
  i18n.locale = "en";
  const result = t("ACT_SCREEN_TAB_NAME");

  expect(result).toEqual("some string");
});

it("parses a string with a value", () => {
  i18n.translations = { en };
  i18n.locale = "en";
  const result = t("SETTINGS_SCREEN_TITLE", { value: "a value" });

  expect(result).toEqual("some string with a value");
});
