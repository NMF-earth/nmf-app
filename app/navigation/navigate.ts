/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */
const openComingSoon = (navigation) => (props = {}) => {
  navigation.navigate("ComingSoon", props);
};

const openAddEmissionNavigator = (navigation) => (props = {}) => {
  navigation.navigate("AddEmissionNavigator", props);
};

const openEmissions = (navigation) => (props = {}) => {
  navigation.navigate("Emissions", props);
};

const openInfoModal = (navigation) => (props = {}) => {
  navigation.navigate("InfoModal", {
    screen: "InfoModal",
    params: props,
  });
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

const openFaq = (navigation) => (props = {}) => {
  navigation.push("Faq", props);
};

const openNotifications = (navigation) => (props = {}) => {
  navigation.push("Notifications", props);
};

const openSupportUs = (navigation) => (props = {}) => {
  navigation.push("SupportUs", props);
};

const openMyData = (navigation) => (props = {}) => {
  navigation.push("MyData", props);
};

const openStorybook = (navigation) => (props = {}) => {
  navigation.push("Storybook", props);
};

const openBudget = (navigation) => (props = {}) => {
  navigation.push("Budget", props);
};

const openSubCategorySelection = (navigation) => (props = {}) => {
  navigation.push("SubCategorySelection", props);
};

const openBarCodeScan = (navigation) => (props = {}) => {
  navigation.push("BarCodeScan", props);
};

const openAddEmissionBarCode = (navigation) => (props = {}) => {
  navigation.push("AddEmissionBarCode", props);
};

const openMonthlyEmissions = (navigation) => (props = {}) => {
  navigation.push("MonthlyEmissions", props);
};

const openLanguages = (navigation) => (props = {}) => {
  navigation.push("Languages", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openMonthlyEmissions: navigateOneTime(openMonthlyEmissions(navigation)),
  openAddEmissionNavigator: navigateOneTime(openAddEmissionNavigator(navigation)),
  openSubCategorySelection: navigateOneTime(openSubCategorySelection(navigation)),
  openMyData: navigateOneTime(openMyData(navigation)),
  openBarCodeScan: navigateOneTime(openBarCodeScan(navigation)),
  openAddEmissionBarCode: navigateOneTime(openAddEmissionBarCode(navigation)),
  openComingSoon: navigateOneTime(openComingSoon(navigation)),
  openInfoModal: navigateOneTime(openInfoModal(navigation)),
  openBudget: navigateOneTime(openBudget(navigation)),
  openMontlyBudget: navigateOneTime(openMontlyBudget(navigation)),
  openAddEmission: navigateOneTime(openAddEmission(navigation)),
  openActDetails: navigateOneTime(openActDetails(navigation)),
  openEmissionItem: navigateOneTime(openEmissionItem(navigation)),
  openAbout: navigateOneTime(openAbout(navigation)),
  openMyLocation: navigateOneTime(openMyLocation(navigation)),
  openFaq: navigateOneTime(openFaq(navigation)),
  openNotifications: navigateOneTime(openNotifications(navigation)),
  openSupportUs: navigateOneTime(openSupportUs(navigation)),
  openStorybook: navigateOneTime(openStorybook(navigation)),
  openLanguages: navigateOneTime(openLanguages(navigation)),
  openEmissions: navigateOneTime(openEmissions(navigation)),
});

export default navigate;
