/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";

/* COMPONENTS */
import * as NoEmission from "../../components/NoEmission/translations";
import * as GuidePreview from "../../components/GuidePreview/translations";

const en = {
  ...MonthlyBudget.en,
  ...GuidePreview.en,
  ...NoEmission.en,
  ...Act.en,
  ...Budget.en,
  ...Emissions.en,
  ...Settings.en
};

const de = {
  ...MonthlyBudget.de,
  ...GuidePreview.de,
  ...NoEmission.de,
  ...Act.de,
  ...Budget.de,
  ...Emissions.de,
  ...Settings.de
};

const fr = {
  ...MonthlyBudget.fr,
  ...GuidePreview.fr,
  ...NoEmission.fr,
  ...Act.fr,
  ...Budget.fr,
  ...Emissions.fr,
  ...Settings.fr
};

export interface TranslationKeys
  extends MonthlyBudget.TranslationKeys,
    GuidePreview.TranslationKeys,
    NoEmission.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    Settings.TranslationKeys {}

export { en, de, fr };
