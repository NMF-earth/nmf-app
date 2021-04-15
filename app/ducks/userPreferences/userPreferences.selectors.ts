import { pathOr } from "ramda";
import { ElectricityType } from "carbon-footprint";

import { namespace } from "./userPreferences.slice";

const getAcceptedTermsOfUseVersion = (state) =>
  pathOr(0, [namespace, "acceptedTermsOfUseVersion"], state);

const getLocation = (state) => pathOr(ElectricityType.world, [namespace, "location"], state);

const getActivateNotifications = (state) =>
  pathOr(false, [namespace, "activatedNotifications"], state);

export default {
  getAcceptedTermsOfUseVersion,
  getActivateNotifications,
  getLocation,
};
