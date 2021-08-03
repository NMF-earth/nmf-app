import React from "react";
import { create } from "react-test-renderer";

import ActScreen from "../ActScreen";

it("ActScreen renders correctly", () => {
  const tree = create(<ActScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
