import * as fs from "fs";

//! FETCHING ALL TRANSLATION FILES

// Screens
import * as Act from "../../app/screens/Act/translations";
import * as Budget from "../../app/screens/Budget/translations";
import * as Emissions from "../../app/screens/Emissions/translations";
import * as Settings from "../../app/screens/Settings/translations";
import * as MonthlyBudget from "../../app/screens/MonthlyBudget/translations";
import * as ComingSoon from "../../app/screens/ComingSoon/translations";
import * as InfoModal from "../../app/screens/InfoModal/translations";
import * as AddEmission from "../../app/screens/AddEmission/translations";
import * as EmissionItem from "../../app/screens/EmissionItem/translations";
import * as Intro from "../../app/screens/Intro/translations";
import * as About from "../../app/screens/About/translations";
import * as SupportUs from "../../app/screens/SupportUs/translations";
import * as MyLocation from "../../app/screens/MyLocation/translations";
import * as ActDetail from "../../app/screens/ActDetail/translations";

// Components
import * as NoEmission from "../../app/components/NoEmission/translations";

// Utils
import * as UI from "../../app/utils/ui/translations";

//! PUTTING ALL TRANSLATIONS TOGETHER

// Languages
const usedLanguages = ["en", "de", "fr", "sv", "pt", "es", "pl", "ru", "da"];

const languageObjects = {};

usedLanguages.forEach((language) => {
  languageObjects[language] = {
    ...UI[language],
    ...About[language],
    ...MonthlyBudget[language],
    ...ComingSoon[language],
    ...NoEmission[language],
    ...Act[language],
    ...Budget[language],
    ...Emissions[language],
    ...Settings[language],
    ...InfoModal[language],
    ...AddEmission[language],
    ...EmissionItem[language],
    ...Intro[language],
    ...SupportUs[language],
    ...MyLocation[language],
    ...ActDetail[language],
  };
});

//! WRITING JSONs

usedLanguages.forEach((language) => {
  fs.writeFile(
    `${language}.json`,
    JSON.stringify(languageObjects[language]),
    (err) => {
      if (err) throw err;
      console.log("✔", language);
    }
  );
});
