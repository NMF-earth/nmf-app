// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// Languages
const usedLanguages = ["en", "de", "fr", "sv", "pt", "es", "pl", "ru", "da"];
// Imports all files
const toBeImported = {
  Act: "../../app/screens/Act/translations",
  Budget: "../../app/screens/Budget/translations",
  Emissions: "../../app/screens/Emissions/translations",
  Settings: "../../app/screens/Settings/translations",
  MonthlyBudget: "../../app/screens/MonthlyBudget/translations",
  ComingSoon: "../../app/screens/ComingSoon/translations",
  InfoModal: "../../app/screens/InfoModal/translations",
  AddEmission: "../../app/screens/AddEmission/translations",
  EmissionItem: "../../app/screens/EmissionItem/translations",
  Intro: "../../app/screens/Intro/translations",
  About: "../../app/screens/About/translations",
  SupportUs: "../../app/screens/SupportUs/translations",
  MyLocation: "../../app/screens/MyLocation/translations",
  ActDetail: "../../app/screens/ActDetail/translations",
  Notifications: "../../app/screens/Notifications/translations",
  NoEmission: "../../app/components/NoEmission/translations",
  UI: "../../app/utils/ui/translations",
};
// eslint-disable-next-line prefer-const
let imports = {};

Object.keys(toBeImported).forEach((key) => {
  imports[key] = {};
  imports[key].path = toBeImported[key];
  usedLanguages.forEach((lang) => {
    imports[key][lang] = require(`${imports[key].path}/${lang}.json`);
  });
});

//! PUTTING ALL TRANSLATIONS TOGETHER

const languageObjects = {};
usedLanguages.forEach((language) => {
  languageObjects[language] = {
    ...imports.UI[language],
    ...imports.About[language],
    ...imports.MonthlyBudget[language],
    ...imports.ComingSoon[language],
    ...imports.NoEmission[language],
    ...imports.Act[language],
    ...imports.Budget[language],
    ...imports.Emissions[language],
    ...imports.Settings[language],
    ...imports.InfoModal[language],
    ...imports.AddEmission[language],
    ...imports.EmissionItem[language],
    ...imports.Intro[language],
    ...imports.SupportUs[language],
    ...imports.MyLocation[language],
    ...imports.ActDetail[language],
    ...imports.Notifications[language],
  };
});

//! WRITING JSONs
usedLanguages.forEach((language) => {
  fs.writeFile(
    `scripts/poeditor/${language}.json`,
    JSON.stringify(languageObjects[language], null, "\t"),
    (err) => {
      if (err) throw err;
      console.log("✔", language);
    }
  );
});
