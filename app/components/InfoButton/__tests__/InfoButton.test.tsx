import React from "react";
import { render } from "@testing-library/react-native";

import InfoButton from "..";

it("renders correctly", () => {
  const tree = render(<InfoButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
