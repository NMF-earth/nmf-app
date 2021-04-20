import React from "react";
import { create } from "react-test-renderer";

import MyDataScreen from "../MyDataScreen";

it("MyDataScreen renders correctly", () => {
  const tree = create(<MyDataScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
