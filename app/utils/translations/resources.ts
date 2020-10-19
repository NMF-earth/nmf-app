/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as HtmlView from "../../screens/HtmlView/translations";
import * as AddEmission from "../../screens/AddEmission/translations";
import * as EmissionItem from "../../screens/EmissionItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as SupportUs from "../../screens/SupportUs/translations";
import * as MyLocation from "../../screens/MyLocation/translations";
import * as ActDetail from "../../screens/ActDetail/translations";

/* COMPONENTS */
import * as NoEmission from "../../components/NoEmission/translations";

/* UTILS */
import * as UI from "../../utils/ui/translations";

const en = {
  ...UI.en,
  ...About.en,
  ...MonthlyBudget.en,
  ...NoEmission.en,
  ...Act.en,
  ...Budget.en,
  ...Emissions.en,
  ...Settings.en,
  ...ComingSoon.en,
  ...HtmlView.en,
  ...AddEmission.en,
  ...EmissionItem.en,
  ...Intro.en,
  ...SupportUs.en,
  ...MyLocation.en,
  ...ActDetail.en,
};

const de = {
  ...UI.de,
  ...About.de,
  ...MonthlyBudget.de,
  ...NoEmission.de,
  ...Act.de,
  ...Budget.de,
  ...Emissions.de,
  ...Settings.de,
  ...ComingSoon.de,
  ...HtmlView.de,
  ...AddEmission.de,
  ...EmissionItem.de,
  ...Intro.de,
  ...SupportUs.de,
  ...MyLocation.de,
  ...ActDetail.de,
};

const fr = {
  ...UI.fr,
  ...About.fr,
  ...MonthlyBudget.fr,
  ...NoEmission.fr,
  ...Act.fr,
  ...Budget.fr,
  ...Emissions.fr,
  ...Settings.fr,
  ...ComingSoon.fr,
  ...HtmlView.fr,
  ...AddEmission.fr,
  ...EmissionItem.fr,
  ...Intro.fr,
  ...SupportUs.fr,
  ...MyLocation.fr,
  ...ActDetail.fr,
};

const sv = {
  ...UI.sv,
  ...About.sv,
  ...MonthlyBudget.sv,
  ...NoEmission.sv,
  ...Act.sv,
  ...Budget.sv,
  ...Emissions.sv,
  ...Settings.sv,
  ...ComingSoon.sv,
  ...HtmlView.sv,
  ...AddEmission.sv,
  ...EmissionItem.sv,
  ...Intro.sv,
  ...SupportUs.sv,
  ...MyLocation.sv,
  ...ActDetail.sv,
};

const pt = {
  ...UI.pt,
  ...About.pt,
  ...MonthlyBudget.pt,
  ...NoEmission.pt,
  ...Act.pt,
  ...Budget.pt,
  ...Emissions.pt,
  ...Settings.pt,
  ...HtmlView.pt,
  ...AddEmission.pt,
  ...EmissionItem.pt,
  ...Intro.pt,
  ...SupportUs.pt,
  ...MyLocation.pt,
  ...ActDetail.pt,
};

const es = {
  ...UI.es,
  ...About.es,
  ...MonthlyBudget.es,
  ...NoEmission.es,
  ...Act.es,
  ...Budget.es,
  ...Emissions.es,
  ...Settings.es,
  ...HtmlView.es,
  ...AddEmission.es,
  ...EmissionItem.es,
  ...Intro.es,
  ...SupportUs.es,
  ...MyLocation.es,
  ...ActDetail.es,
};

const ru = {
  ...UI.ru,
  ...About.ru,
  ...MonthlyBudget.ru,
  ...NoEmission.ru,
  ...Act.ru,
  ...Budget.ru,
  ...Emissions.ru,
  ...Settings.ru,
  ...HtmlView.ru,
  ...AddEmission.ru,
  ...EmissionItem.ru,
  ...Intro.ru,
  ...SupportUs.ru,
  ...MyLocation.ru,
  ...ActDetail.ru,
};

const pl = {
  ...UI.pl,
  ...About.pl,
  ...MonthlyBudget.pl,
  ...NoEmission.pl,
  ...Act.pl,
  ...Budget.pl,
  ...Emissions.pl,
  ...Settings.pl,
  ...HtmlView.pl,
  ...AddEmission.pl,
  ...EmissionItem.pl,
  ...Intro.pl,
  ...SupportUs.pl,
  ...MyLocation.pl,
  ...ActDetail.pl,
};

const da = {
  ...UI.da,
  ...About.da,
  ...MonthlyBudget.da,
  ...NoEmission.da,
  ...Act.da,
  ...Budget.da,
  ...Emissions.da,
  ...Settings.da,
  ...HtmlView.da,
  ...AddEmission.da,
  ...EmissionItem.da,
  ...Intro.da,
  ...SupportUs.da,
  ...MyLocation.da,
  ...ActDetail.da,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    MonthlyBudget.TranslationKeys,
    NoEmission.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    ComingSoon.TranslationKeys,
    HtmlView.TranslationKeys,
    AddEmission.TranslationKeys,
    EmissionItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    MyLocation.TranslationKeys,
    SupportUs.TranslationKeys,
    ActDetail.TranslationKeys {}

export { en, de, fr, sv, pt, es, pl, ru, da };
