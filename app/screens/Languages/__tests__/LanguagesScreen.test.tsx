import React from "react";
import { render } from "@testing-library/react-native";

import LanguagesScreen from "../LanguagesScreen";

// jest.unmock("../");

it("LanguageScreen renders correctly", () => {
  const tree = render(<LanguagesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
