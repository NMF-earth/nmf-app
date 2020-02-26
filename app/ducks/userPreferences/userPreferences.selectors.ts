import { pathOr } from "ramda";
import { namespace } from "./userPreferences.slice";

const getAcceptedTermsOfUseVersion = state =>
  pathOr(0, [namespace, "acceptedTermsOfUseVersion"], state);

export default {
  getAcceptedTermsOfUseVersion
};
