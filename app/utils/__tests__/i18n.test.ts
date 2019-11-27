import i18n from "i18n-js";
import { t } from "../i18n";

const en = {
  act: "some string",
  settings: "some string with {{value}}"
}

it("parses a simple string", () => {
  i18n.translations = { en };
  i18n.locale = "en"
  const result = t("act");

  expect(result).toEqual("some string");
});

it("parses a string with a value", () => {
  i18n.translations = { en };
  i18n.locale = "en"
  const result = t("settings", { value: "a value" });

  expect(result).toEqual("some string with a value");
});
