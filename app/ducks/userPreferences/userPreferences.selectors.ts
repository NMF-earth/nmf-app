/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { pathOr } from "ramda";
import { ElectricityType } from "carbon-footprint";

import { currentLanguage } from "utils";

import { namespace } from "./userPreferences.slice";

const getAcceptedTermsOfUseVersion = (state) =>
  pathOr(0, [namespace, "acceptedTermsOfUseVersion"], state);

const getLocation = (state) => pathOr(ElectricityType.world, [namespace, "location"], state);

const getActivateNotifications = (state) =>
  pathOr(false, [namespace, "activatedNotifications"], state);

const getLanguage = (state) => pathOr(currentLanguage, [namespace, "language"], state);

export default {
  getAcceptedTermsOfUseVersion,
  getActivateNotifications,
  getLocation,
  getLanguage,
};
