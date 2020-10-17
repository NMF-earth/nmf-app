import React from "react";
import { create } from "react-test-renderer";

import EmissionInfoButton from "../";

it("renders correctly", () => {
  const tree = create(<EmissionInfoButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
