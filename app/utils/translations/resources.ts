/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as AddEmission from "../../screens/AddEmission/translations";
import * as EmissionItem from "../../screens/EmissionItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as SupportUs from "../../screens/SupportUs/translations";

/* COMPONENTS */
import * as NoEmission from "../../components/NoEmission/translations";
import * as GuidePreview from "../../components/GuidePreview/translations";

const en = {
  ...About.en,
  ...MonthlyBudget.en,
  ...GuidePreview.en,
  ...NoEmission.en,
  ...Act.en,
  ...Budget.en,
  ...Emissions.en,
  ...Settings.en,
  ...ComingSoon.en,
  ...AddEmission.en,
  ...EmissionItem.en,
  ...Intro.en,
  ...SupportUs.en
};

const de = {
  ...About.de,
  ...MonthlyBudget.de,
  ...GuidePreview.de,
  ...NoEmission.de,
  ...Act.de,
  ...Budget.de,
  ...Emissions.de,
  ...Settings.de,
  ...ComingSoon.de,
  ...AddEmission.de,
  ...EmissionItem.de,
  ...Intro.de,
  ...SupportUs.de
};

const fr = {
  ...About.fr,
  ...MonthlyBudget.fr,
  ...GuidePreview.fr,
  ...NoEmission.fr,
  ...Act.fr,
  ...Budget.fr,
  ...Emissions.fr,
  ...Settings.fr,
  ...ComingSoon.fr,
  ...AddEmission.fr,
  ...EmissionItem.fr,
  ...Intro.fr,
  ...SupportUs.fr
};

export interface TranslationKeys
  extends MonthlyBudget.TranslationKeys,
    GuidePreview.TranslationKeys,
    NoEmission.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    ComingSoon.TranslationKeys,
    AddEmission.TranslationKeys,
    EmissionItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    SupportUs.TranslationKeys {}

export { en, de, fr };
