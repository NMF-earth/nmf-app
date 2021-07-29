import React from "react";
import { create } from "react-test-renderer";

import LanguagesScreen from "../LanguagesScreen";

// jest.unmock("../");

it("LanguageScreen renders correctly", () => {
  const tree = create(<LanguagesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
