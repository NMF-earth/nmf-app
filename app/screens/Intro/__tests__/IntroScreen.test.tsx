import React from "react";
import { create } from "react-test-renderer";

import Intro from "..";

test("renders correctly ComingSoon", () => {
  const tree = create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
