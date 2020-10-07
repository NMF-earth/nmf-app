import React from "react";
import { create } from "react-test-renderer";

import AboutScreen from "../AboutScreen";

it("AboutScreen renders correctly", () => {
  const tree = create(<AboutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
