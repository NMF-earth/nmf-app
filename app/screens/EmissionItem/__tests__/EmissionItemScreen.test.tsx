import React from "react";
import { create } from "react-test-renderer";

import EmissionItemScreen from "../EmissionItemScreen";

it("EmissionsScreen renders correctly", () => {
  const tree = create(<EmissionItemScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
