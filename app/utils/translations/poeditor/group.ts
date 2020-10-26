export {};
import * as fs from "graceful-fs";

//! FETCHING ALL TRANSLATION FILES

// Screens
import * as Act from "../../../screens/Act/translations";
import * as Budget from "../../../screens/Budget/translations";
import * as Emissions from "../../../screens/Emissions/translations";
import * as Settings from "../../../screens/Settings/translations";
import * as MonthlyBudget from "../../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../../screens/ComingSoon/translations";
import * as InfoModal from "../../../screens/InfoModal/translations";
import * as AddEmission from "../../../screens/AddEmission/translations";
import * as EmissionItem from "../../../screens/EmissionItem/translations";
import * as Intro from "../../../screens/Intro/translations";
import * as About from "../../../screens/About/translations";
import * as SupportUs from "../../../screens/SupportUs/translations";
import * as MyLocation from "../../../screens/MyLocation/translations";
import * as ActDetail from "../../../screens/ActDetail/translations";

// Components
import * as NoEmission from "../../../components/NoEmission/translations";

// Utils
import * as UI from "../../ui/translations";

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
