import React from "react";
import { create } from "react-test-renderer";

import SupportUsScreen from "../SupportUsScreen";

it("SupportUsScreen renders correctly", () => {
  const tree = create(<SupportUsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
