import throttle from "lodash.throttle";

const navigateOneTime = (navigate) =>
  throttle(navigate, 1000, { trailing: false });

/* navigate */
const openComingSoon = (navigation) => (props = {}) => {
  navigation.navigate("ComingSoon", props);
};

const openBudget = (navigation) => (props = {}) => {
  navigation.navigate("Budget", props);
};

/* push */
const openMontlyBudget = (navigation) => (props = {}) => {
  navigation.push("MontlyBudget", props);
};

const openAddEmission = (navigation) => (props = {}) => {
  navigation.push("AddEmission", props);
};

const openDetails = (navigation) => (props = {}) => {
  navigation.push("Details", props);
};

const openEmissionItem = (navigation) => (props = {}) => {
  navigation.push("EmissionItem", props);
};

const openAbout = (navigation) => (props = {}) => {
  navigation.push("About", props);
};

const openSupportUs = (navigation) => (props = {}) => {
  navigation.push("SupportUs", props);
};

const openStorybook = (navigation) => (props = {}) => {
  navigation.push("Storybook", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openComingSoon: navigateOneTime(openComingSoon(navigation)),
  openBudget: navigateOneTime(openBudget(navigation)),
  openMontlyBudget: navigateOneTime(openMontlyBudget(navigation)),
  openAddEmission: navigateOneTime(openAddEmission(navigation)),
  openDetails: navigateOneTime(openDetails(navigation)),
  openEmissionItem: navigateOneTime(openEmissionItem(navigation)),
  openAbout: navigateOneTime(openAbout(navigation)),
  openSupportUs: navigateOneTime(openSupportUs(navigation)),
  openStorybook: navigateOneTime(openStorybook(navigation)),
});

export default navigate;
