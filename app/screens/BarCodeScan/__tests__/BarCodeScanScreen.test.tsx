import React from "react";
import { create } from "react-test-renderer";

import BarCodeScanScreen from "../BarCodeScanScreen";

it("BarCodeScanScreen renders correctly", () => {
  const tree = create(<BarCodeScanScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
