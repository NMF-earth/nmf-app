export {};
import * as fs from "graceful-fs";

const used_languages = ["en", "de", "fr", "sv", "pt", "es", "pl", "ru", "da"];
const path_prefix = "../../../";
const translation_dirs = [
  "screens/Act/translations",
  "screens/Budget/translations",
  "screens/Emissions/translations",
  "screens/Settings/translations",
  "screens/MonthlyBudget/translations",
  "screens/ComingSoon/translations",
  "screens/InfoModal/translations",
  "screens/AddEmission/translations",
  "screens/EmissionItem/translations",
  "screens/Intro/translations",
  "screens/About/translations",
  "screens/SupportUs/translations",
  "screens/MyLocation/translations",
  "screens/ActDetail/translations",
  "components/NoEmission/translations",
  "utils/ui/translations",
];

/**
 * Quickly reads JSON files
 * @param  {string} path Path to the JSON
 * @returns {object} JSON file as an object
 */
const getJSONfrom = (path: string) =>
  JSON.parse(JSON.stringify(fs.readFileSync(path)));

used_languages.forEach((lang) => {
  // Log lang and create group for children logs
  console.log(
    ["🌎", "🌍", "🌏"][Math.round(Math.random() * 2)],
    lang.toUpperCase()
  );
  console.group(lang);
  // Get reference JSON file with the source-of-truth content that'll be copied across other translation files
  const ref = getJSONfrom(`${lang}.json`);
  // Browse all the translation dirs and make necessary changes in the corresponding files
  translation_dirs.forEach((translation_dir) => {
    // Select the file that matchs the current language
    const path = `${path_prefix + translation_dir}/${lang}.json`;
    // Get its content
    let file = getJSONfrom(path);
    const keys = Object.keys(file);
    // Change content
    keys.forEach((key) => {
      if (ref[key]) {
        // File is modified only if the ref JSON has data (in case it's incomplete)
        return (file[key] = ref[key]);
      } else {
        return console.warn(
          `⚠ Reference doesn't have property '${key}' (from: '${translation_dir}')`
        );
      }
    });
    // Merge changes to the file
    fs.writeFileSync(path, JSON.stringify(file));
    console.log("✔", translation_dir);
  });
  console.groupEnd();
});
