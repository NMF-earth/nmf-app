/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";

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
  ...Settings.en,
  ...ComingSoon.en
};

const de = {
  ...MonthlyBudget.de,
  ...GuidePreview.de,
  ...NoEmission.de,
  ...Act.de,
  ...Budget.de,
  ...Emissions.de,
  ...Settings.de,
  ...ComingSoon.de
};

const fr = {
  ...MonthlyBudget.fr,
  ...GuidePreview.fr,
  ...NoEmission.fr,
  ...Act.fr,
  ...Budget.fr,
  ...Emissions.fr,
  ...Settings.fr,
  ...ComingSoon.fr
};

export interface TranslationKeys
  extends MonthlyBudget.TranslationKeys,
    GuidePreview.TranslationKeys,
    NoEmission.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    Settings.TranslationKeys,
    ComingSoon.TranslationKeys {}

export { en, de, fr };
