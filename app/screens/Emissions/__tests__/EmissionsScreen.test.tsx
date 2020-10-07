import React from "react";
import { create } from "react-test-renderer";

import EmissionsScreen from "../EmissionsScreen";

it("EmissionsScreen renders correctly", () => {
  const tree = create(<EmissionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
