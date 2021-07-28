import { pathOr } from "ramda";
import { ElectricityType } from "carbon-footprint";
import { locale } from "expo-localization";

import SupportedLanguages from "../../screens/Languages/SupportedLanguages";
import { namespace } from "./userPreferences.slice";

const getAcceptedTermsOfUseVersion = (state) =>
  pathOr(0, [namespace, "acceptedTermsOfUseVersion"], state);

const getLocation = (state) => pathOr(ElectricityType.world, [namespace, "location"], state);

const getActivateNotifications = (state) =>
  pathOr(false, [namespace, "activatedNotifications"], state);

const getLanguage = (state) =>
  pathOr(
    Object.keys(SupportedLanguages).includes(locale.substr(0, 2)) ? locale.substr(0, 2) : "en",
    [namespace, "language"],
    state
  );

export default {
  getAcceptedTermsOfUseVersion,
  getActivateNotifications,
  getLocation,
  getLanguage,
};
