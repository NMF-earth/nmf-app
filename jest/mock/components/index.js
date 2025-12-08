/* React Native */
jest.mock("react-native/Libraries/Components/Touchable/TouchableOpacity", () => "TouchableOpacity");

/* Budget Screen */
jest.mock("../../../app/screens/Budget/components/ProgressChart", () => "ProgressChart");
jest.mock(
  "../../../app/screens/Budget/components/NumberOfDaysVegetarian",
  () => "NumberOfDaysVegetarian"
);
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart/components/LegendItem",
  () => "LegendItem"
);
jest.mock("../../../app/screens/Budget/components/ProgressChart/components/Legend", () => "Legend");
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart/components/PeriodBudget",
  () => "PeriodBudget"
);

/* Emissions Screen */
jest.mock("../../../app/screens/Emissions/components/SectionHeader", () => ({
  __esModule: true,
  default: "SectionHeader",
}));

/* Shared Components */
jest.mock("../../../app/components/ListItem", () => "ListItem");
jest.mock("../../../app/components/ListItemSwitch", () => "ListItemSwitch");
jest.mock("../../../app/components/PermissionsRequest", () => "PermissionsRequest");
jest.mock("../../../app/components/StickersImage", () => "StickersImage");
jest.mock("../../../app/components/TextInput", () => "TextInput");
jest.mock("../../../app/components/SocialMedia", () => "SocialMedia");
jest.mock("../../../app/components/Tag", () => "Tag");
jest.mock("../../../app/components/TextButton", () => "TextButton");
jest.mock("../../../app/components/NoEmission", () => "NoEmission");
jest.mock("../../../app/components/OpenFoodFacts", () => "OpenFoodFacts");
jest.mock("../../../app/components/HTMLImage", () => "HTMLImage");
jest.mock("../../../app/components/TabBarIcon", () => "TabBarIcon");
jest.mock("../../../app/components/SelectableListItem", () => "SelectableListItem");
jest.mock("../../../app/components/Accordion", () => {
  const React = require("react");
  const Accordion = (props) => React.createElement("Accordion", props, props.children);
  Accordion.Item = (props) => React.createElement("AccordionItem", props, React.createElement("Text", {}, props.children));
  return Accordion;
});
jest.mock("../../../app/components/ClickableTag", () => "ClickableTag");
jest.mock("../../../app/components/StoreReviewChecker", () => "StoreReviewChecker");
jest.mock("../../../app/components/Text", () => require("./Text.mock").default);
jest.mock("../../../app/components/Button", () => require("./Button.mock").default);
jest.mock(
  "../../../app/components/EmissionListItem",
  () => require("./EmissionListItem.mock").default
);
