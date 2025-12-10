import React from "react";
import { render } from "@testing-library/react-native";

import Intro from "..";

test("renders correctly ComingSoon", () => {
  const tree = render(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
