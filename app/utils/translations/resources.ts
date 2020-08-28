/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as Methodology from "../../screens/Methodology/translations";
import * as AddEmission from "../../screens/AddEmission/translations";
import * as EmissionItem from "../../screens/EmissionItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as SupportUs from "../../screens/SupportUs/translations";
import * as MyLocation from "../../screens/MyLocation/translations";
import * as ActDetail from "../../screens/ActDetail/translations";

/* COMPONENTS */
import * as NoEmission from "../../components/NoEmission/translations";
import * as GuidePreview from "../../components/GuidePreview/translations";

/* UTILS */
import * as UI from "../../utils/ui/translations";

const en = {
  ...UI.en,
  ...About.en,
  ...MonthlyBudget.en,
  ...GuidePreview.en,
  ...NoEmission.en,
  ...Act.en,
  ...Budget.en,
  ...Emissions.en,
  ...Settings.en,
  ...ComingSoon.en,
  ...Methodology.en,
  ...AddEmission.en,
  ...EmissionItem.en,
  ...Intro.en,
  ...SupportUs.en,
  ...MyLocation.en,
  ...ActDetail.en
};

const de = {
  ...UI.de,
  ...About.de,
  ...MonthlyBudget.de,
  ...GuidePreview.de,
  ...NoEmission.de,
  ...Act.de,
  ...Budget.de,
  ...Emissions.de,
  ...Settings.de,
  ...ComingSoon.de,
  ...Methodology.de,
  ...AddEmission.de,
  ...EmissionItem.de,
  ...Intro.de,
  ...SupportUs.de,
  ...MyLocation.de,
  ...ActDetail.de
};

const fr = {
  ...UI.fr,
  ...About.fr,
  ...MonthlyBudget.fr,
  ...GuidePreview.fr,
  ...NoEmission.fr,
  ...Act.fr,
  ...Budget.fr,
  ...Emissions.fr,
  ...Settings.fr,
  ...ComingSoon.fr,
  ...Methodology.fr,
  ...AddEmission.fr,
  ...EmissionItem.fr,
  ...Intro.fr,
  ...SupportUs.fr,
  ...MyLocation.fr,
  ...ActDetail.fr
};

const sv = {
  ...UI.sv,
  ...About.sv,
  ...MonthlyBudget.sv,
  ...GuidePreview.sv,
  ...NoEmission.sv,
  ...Act.sv,
  ...Budget.sv,
  ...Emissions.sv,
  ...Settings.sv,
  ...ComingSoon.sv,
  ...Methodology.sv,
  ...AddEmission.sv,
  ...EmissionItem.sv,
  ...Intro.sv,
  ...SupportUs.sv,
  ...MyLocation.sv,
  ...ActDetail.sv
};

const pt = {
  ...UI.pt,
  ...About.pt,
  ...MonthlyBudget.pt,
  ...GuidePreview.pt,
  ...NoEmission.pt,
  ...Act.pt,
  ...Budget.pt,
  ...Emissions.pt,
  ...Settings.pt,
  ...Methodology.pt,
  ...AddEmission.pt,
  ...EmissionItem.pt,
  ...Intro.pt,
  ...SupportUs.pt,
  ...MyLocation.pt,
  ...ActDetail.pt
};

const es = {
  ...UI.es,
  ...About.es,
  ...MonthlyBudget.es,
  ...GuidePreview.es,
  ...NoEmission.es,
  ...Act.es,
  ...Budget.es,
  ...Emissions.es,
  ...Settings.es,
  ...Methodology.es,
  ...AddEmission.es,
  ...EmissionItem.es,
  ...Intro.es,
  ...SupportUs.es,
  ...MyLocation.es,
  ...ActDetail.es
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    MonthlyBudget.TranslationKeys,
    GuidePreview.TranslationKeys,
    NoEmission.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    ComingSoon.TranslationKeys,
    Methodology.TranslationKeys,
    AddEmission.TranslationKeys,
    EmissionItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    MyLocation.TranslationKeys,
    SupportUs.TranslationKeys,
    ActDetail.TranslationKeys {}

export { en, de, fr, sv, pt, es };
