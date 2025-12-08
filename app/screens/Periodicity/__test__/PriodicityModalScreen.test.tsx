import React from "react";
import { render } from "@testing-library/react-native";

import { PeriodicityModalScreen } from "../PeriodicityModalScreen";

it("InfoModalScreen renders correctly", () => {
  const tree = render(<PeriodicityModalScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
