// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// Languages
const usedLanguages = ["ar", "en", "de", "fr", "cs", "sv", "pt", "es", "pl", "ru", "da", "zh", "ms", "it"];
// Imports all files
const toBeImported = {
  AppStore: "./app-store",
  Act: "../../app/screens/Act/translations",
  Budget: "../../app/screens/Budget/translations",
  Emissions: "../../app/screens/Emissions/translations",
  Settings: "../../app/screens/Settings/translations",
  MonthlyBudget: "../../app/screens/MonthlyBudget/translations",
  AddEmission: "../../app/screens/AddEmission/translations",
  ComingSoon: "../../app/screens/ComingSoon/translations",
  EmissionItem: "../../app/screens/EmissionItem/translations",
  Intro: "../../app/screens/Intro/translations",
  About: "../../app/screens/About/translations",
  SupportUs: "../../app/screens/SupportUs/translations",
  MyLocation: "../../app/screens/MyLocation/translations",
  ActDetail: "../../app/screens/ActDetail/translations",
  Notifications: "../../app/screens/Notifications/translations",
  InfoModal: "../../app/screens/InfoModal/translations",
  MyData: "../../app/screens/MyData/translations",
  MonthlyEmissions: "../../app/screens/MonthlyEmissions/translations",
  Languages: "../../app/screens/Languages/translations",
  RecurringEmissions: "../../app/screens/RecurringEmissions/translations",
  Faq: "../../app/screens/Faq/translations",
  SubCategorySelection: "../../app/screens/SubCategorySelection/translations",
  BarCodeScan: "../../app/screens/BarCodeScan/translations",
  Periodicity: "../../app/screens/Periodicity/translations",
  UI: "../../app/utils/ui/translations",
  Calculation: "../../app/utils/calculation/translations",
  NoEmission: "../../app/components/NoEmission/translations",
  PermissionsRequest: "../../app/components/PermissionsRequest/translations",
  OpenFoodFacts: "../../app/components/OpenFoodFacts/translations",
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
    ...imports.AppStore[language],
    ...imports.Act[language],
    ...imports.Budget[language],
    ...imports.Emissions[language],
    ...imports.Settings[language],
    ...imports.MonthlyBudget[language],
    ...imports.ComingSoon[language],
    ...imports.AddEmission[language],
    ...imports.EmissionItem[language],
    ...imports.Intro[language],
    ...imports.About[language],
    ...imports.SupportUs[language],
    ...imports.MyLocation[language],
    ...imports.ActDetail[language],
    ...imports.Notifications[language],
    ...imports.InfoModal[language],
    ...imports.MyData[language],
    ...imports.MonthlyEmissions[language],
    ...imports.Languages[language],
    ...imports.Faq[language],
    ...imports.Periodicity[language],
    ...imports.BarCodeScan[language],
    ...imports.SubCategorySelection[language],
    ...imports.RecurringEmissions[language],
    ...imports.UI[language],
    ...imports.Calculation[language],
    ...imports.NoEmission[language],
    ...imports.PermissionsRequest[language],
    ...imports.OpenFoodFacts[language],
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
