/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const usedLanguages = ["en", "de", "fr", "sv", "pt", "es", "pl", "ru", "da"];
const relPrefix = "../../";
const translationDirs = [
  "app/screens/Act/translations",
  "app/screens/Budget/translations",
  "app/screens/Emissions/translations",
  "app/screens/Settings/translations",
  "app/screens/MonthlyBudget/translations",
  "app/screens/ComingSoon/translations",
  "app/screens/InfoModal/translations",
  "app/screens/AddEmission/translations",
  "app/screens/EmissionItem/translations",
  "app/screens/Intro/translations",
  "app/screens/About/translations",
  "app/screens/SupportUs/translations",
  "app/screens/MyLocation/translations",
  "app/screens/ActDetail/translations",
  "app/components/NoEmission/translations",
  "app/screens/Notifications/translations",
  "app/utils/ui/translations",
];

/**
 * Quickly reads JSON files
 * @param  {string} path Path to the JSON
 * @returns {object} JSON file as an object
 */
const getJSONfrom = (path) => JSON.parse(JSON.stringify(require(path)));

usedLanguages.forEach((lang) => {
  console.group(lang.toUpperCase() + ":");
  // Get reference JSON file with the source-of-truth content that'll be copied across other translation files
  const ref = getJSONfrom(`./${lang}.json`);
  // Browse all the translation dirs and make necessary changes in the corresponding files
  translationDirs.forEach((translationDir) => {
    // Select the file that matchs the current language
    const relPath = `${relPrefix + translationDir}/${lang}.json`;
    const path = `${translationDir}/${lang}.json`;
    // Get its content
    const file = getJSONfrom(relPath);
    const keys = Object.keys(file);
    // Change content
    keys.forEach((key) => {
      if (ref[key]) {
        // File is modified only if the ref JSON has data (in case it's incomplete)
        return (file[key] = ref[key]);
      } else {
        return console.warn(
          `⚠ Reference doesn't have property '${key}' (from: '${translationDir}')`
        );
      }
    });
    // Merge changes to the file
    fs.writeFileSync(path, JSON.stringify(file, null, "\t"));
    console.log("✔", translationDir);
  });
  console.groupEnd();
});
