import React from "react";
import { create } from "react-test-renderer";

import { PeriodicityModalScreen } from "../PeriodicityModalScreen";

it("InfoModalScreen renders correctly", () => {
  const tree = create(<PeriodicityModalScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
