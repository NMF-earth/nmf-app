/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { create } from "react-test-renderer";

import FaqScreen from "../FaqScreen";

it("FaqScreen renders correctly", () => {
  const tree = create(<FaqScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
