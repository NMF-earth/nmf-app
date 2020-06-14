import { pathOr } from "ramda";
import { namespace } from "./userPreferences.slice";
import { ElectricityEnum } from "carbon-footprint";

const getAcceptedTermsOfUseVersion = (state) =>
  pathOr(0, [namespace, "acceptedTermsOfUseVersion"], state);

const getLocation = (state) =>
  pathOr(ElectricityEnum.world, [namespace, "location"], state);

export default {
  getAcceptedTermsOfUseVersion,
  getLocation,
};
