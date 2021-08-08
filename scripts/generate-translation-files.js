const paths = [
  "app/screens/Act/translations/",
  "app/screens/Budget/translations/",
  "app/screens/Emissions/translations/",
  "app/screens/Settings/translations/",
  "app/screens/MonthlyBudget/translations/",
  "app/screens/ComingSoon/translations/",
  "app/screens/AddEmission/translations/",
  "app/screens/EmissionItem/translations/",
  "app/screens/Intro/translations/",
  "app/screens/About/translations/",
  "app/screens/SupportUs/translations/",
  "app/screens/MyLocation/translations/",
  "app/screens/ActDetail/translations/",
  "app/screens/Notifications/translations/",
  "app/screens/InfoModal/translations/",
  "app/screens/MyData/translations/",
  "app/screens/MonthlyEmissions/translations/",
  "app/screens/Languages/translations/",
  "app/components/NoEmission/translations/",
  "app/utils/ui/translations/",
];

const englishFile = "en.json";

const fs = require("fs");
const prompt = require("prompt-sync")();

// https://www.loc.gov/standards/iso639-2/php/code_list.php
const language = prompt("What is the new language ISO Code? ");
console.log("language", language);

const copyAndRename = (path) => {
  fs.copyFile(path + englishFile, path + language + ".json", (err) => {
    if (err) throw err;
    console.log("Creation of " + path + language + ".json");
  });
};

paths.forEach(copyAndRename);
