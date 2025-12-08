import React from "react";
import { render } from "@testing-library/react-native";

import InfoModalScreen from "../InfoModalScreen";

it("InfoModalScreen renders correctly", () => {
  const tree = render(<InfoModalScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
