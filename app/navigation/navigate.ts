import throttle from "lodash.throttle";

const navigateOneTime = (navigate) =>
  throttle(navigate, 1000, { trailing: false });

/* navigate */
const openComingSoon = (navigation) => (props = {}) => {
  navigation.navigate("ComingSoon", props);
};

const openMethodology = (navigation) => (props = {}) => {
  navigation.navigate("Methodology", props);
};

/* push */
const openMontlyBudget = (navigation) => (props = {}) => {
  navigation.push("MonthlyBudget", props);
};

const openAddEmission = (navigation) => (props = {}) => {
  navigation.push("AddEmission", props);
};

const openActDetails = (navigation) => (props = {}) => {
  navigation.push("ActDetail", props);
};

const openEmissionItem = (navigation) => (props = {}) => {
  navigation.push("EmissionItem", props);
};

const openAbout = (navigation) => (props = {}) => {
  navigation.push("About", props);
};

const openMyLocation = (navigation) => (props = {}) => {
  navigation.push("MyLocation", props);
};

const openSupportUs = (navigation) => (props = {}) => {
  navigation.push("SupportUs", props);
};

const openStorybook = (navigation) => (props = {}) => {
  navigation.push("Storybook", props);
};

const openBudget = (navigation) => (props = {}) => {
  navigation.push("Budget", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openComingSoon: navigateOneTime(openComingSoon(navigation)),
  openMethodology: navigateOneTime(openMethodology(navigation)),
  openBudget: navigateOneTime(openBudget(navigation)),
  openMontlyBudget: navigateOneTime(openMontlyBudget(navigation)),
  openAddEmission: navigateOneTime(openAddEmission(navigation)),
  openActDetails: navigateOneTime(openActDetails(navigation)),
  openEmissionItem: navigateOneTime(openEmissionItem(navigation)),
  openAbout: navigateOneTime(openAbout(navigation)),
  openMyLocation: navigateOneTime(openMyLocation(navigation)),
  openSupportUs: navigateOneTime(openSupportUs(navigation)),
  openStorybook: navigateOneTime(openStorybook(navigation)),
});

export default navigate;
