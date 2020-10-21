import React from "react";
import { create } from "react-test-renderer";

import InfoButton from "..";

it("renders correctly", () => {
  const tree = create(<InfoButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
