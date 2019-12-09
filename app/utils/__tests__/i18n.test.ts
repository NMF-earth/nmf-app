import i18n from "i18n-js";
import { t } from "../translations";

const en = {
  ACT: "some string",
  SETTINGS: "some string with {{value}}"
};

it("parses a simple string", () => {
  i18n.translations = { en };
  i18n.locale = "en";
  const result = t("ACT");

  expect(result).toEqual("some string");
});

it("parses a string with a value", () => {
  i18n.translations = { en };
  i18n.locale = "en";
  const result = t("SETTINGS", { value: "a value" });

  expect(result).toEqual("some string with a value");
});
