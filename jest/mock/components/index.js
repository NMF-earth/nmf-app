/* React Native */
jest.mock(
  "react-native/Libraries/Components/Touchable/TouchableOpacity",
  () => "TouchableOpacity"
);

/* Budget Screen */
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart",
  () => "ProgressChart"
);
jest.mock(
  "../../../app/screens/Budget/components/NumberOfDaysVegetarian",
  () => "NumberOfDaysVegetarian"
);
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart/components/LegendItem",
  () => "LegendItem"
);
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart/components/Legend",
  () => "Legend"
);
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart/components/PeriodBudget",
  () => "PeriodBudget"
);
jest.mock(
  "../../../app/screens/Budget/components/ProgressChart/components/Chart",
  () => "Chart"
);

/* Emissions Screen */
jest.mock(
  "../../../app/screens/Emissions/components/EmissionsList",
  () => "EmissionsList"
);
jest.mock(
  "../../../app/screens/Emissions/components/EmissionsListItem",
  () => "EmissionsListItem"
);
jest.mock(
  "../../../app/screens/Emissions/components/SectionHeader",
  () => "SectionHeader"
);

/* Settings Screen */
jest.mock(
  "../../../app/screens/Settings/components/SettingsRow",
  () => "SettingsRow"
);

/* Shared Components */
jest.mock("../../../app/components/StickersImage", () => "StickersImage");
jest.mock("../../../app/components/TextInput", () => "TextInput");
jest.mock("../../../app/components/SocialMedia", () => "SocialMedia");
jest.mock("../../../app/components/Tag", () => "Tag");
jest.mock("../../../app/components/NoEmission", () => "NoEmission");
jest.mock("../../../app/components/Text", () => require("./Text.mock").default);
jest.mock(
  "../../../app/components/Button",
  () => require("./Button.mock").default
);
