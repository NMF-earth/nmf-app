import React from "react";

jest.mock(
  "react-native/Libraries/Components/Touchable/TouchableOpacity",
  () => "TouchableOpacity"
);
jest.mock("../../../app/components/TabbedView", () => "TabbedView");
jest.mock("../../../app/components/NoEmission", () => "NoEmission");
jest.mock("../../../app/components/Text", () => require("./Text.mock").default);
jest.mock(
  "../../../app/components/Button",
  () => require("./Button.mock").default
);
