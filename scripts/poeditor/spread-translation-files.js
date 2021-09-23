/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const R = require("ramda");

const usedLanguages = ["en", "de", "fr", "sv", "pt", "es", "pl", "ru", "da", "zh", "ms"];
const relPrefix = "../../";
const translationDirs = [
  { path: "app/screens/Act/translations", prefix: "ACT_SCREEN" },
  { path: "app/screens/Budget/translations", prefix: "BUDGET_SCREEN" },
  { path: "app/screens/Emissions/translations", prefix: "EMISSIONS_SCREEN" },
  { path: "app/screens/Settings/translations", prefix: "SETTINGS_SCREEN" },
  { path: "app/screens/MonthlyBudget/translations", prefix: "MONTHLY_BUDGET_SCREEN" },
  { path: "app/screens/ComingSoon/translations", prefix: "COMING_SOON_SCREEN" },
  { path: "app/screens/InfoModal/translations", prefix: "INFO_MODAL_SCREEN" },
  { path: "app/screens/AddEmission/translations", prefix: "ADD_EMISSION_SCREEN" },
  { path: "app/screens/EmissionItem/translations", prefix: "EMISSION_ITEM_SCREEN" },
  { path: "app/screens/Intro/translations", prefix: "INTRO_SCREEN" },
  { path: "app/screens/About/translations", prefix: "ABOUT_SCREEN" },
  { path: "app/screens/SupportUs/translations", prefix: "SUPPORT_US_SCREEN" },
  { path: "app/screens/MyLocation/translations", prefix: "MY_LOCATION_SCREEN" },
  { path: "app/screens/ActDetail/translations", prefix: "ACT_DETAIL_SCREEN" },
  { path: "app/screens/Notifications/translations", prefix: "NOTIFICATIONS_SCREEN" },
  { path: "app/screens/MonthlyEmissions/translations", prefix: "MONTHLY_EMISSIONS_SCREEN" },
  { path: "app/screens/Languages/translations", prefix: "LANGUAGES_SCREEN" },
  { path: "app/components/NoEmission/translations", prefix: "NO_EMISSION_COMPONENT" },
  { path: "app/utils/ui/translations", prefix: "UI" },
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
  const reference = getJSONfrom(`./${lang}.json`);
  const ref = R.pickBy(R.identity, reference);

  // Browse all the translation dirs and make necessary changes in the corresponding files
  translationDirs.forEach(({ path, prefix }) => {
    // Select the file that matchs the current language
    const relPath = `${relPrefix + path}/${lang}.json`;
    const pathToWrite = `${path}/${lang}.json`;

    // Get its content
    const file = getJSONfrom(relPath);

    let keys = Object.keys(ref);
    keys = keys.filter((item) => item.startsWith(prefix));

    // Change content
    keys.forEach((key) => (file[key] = ref[key]));

    // remove keys with empty values
    const fileCleaned = R.pickBy(R.identity, file);

    // Merge changes to the file
    fs.writeFileSync(pathToWrite, JSON.stringify(fileCleaned, null, "\t"));
    console.log("✔", path);
  });
  console.groupEnd();
});
