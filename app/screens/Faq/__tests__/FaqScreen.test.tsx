import React from "react";
import { render } from "@testing-library/react-native";

import FaqScreen from "../FaqScreen";

it("FaqScreen renders correctly", () => {
  const tree = render(<FaqScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
