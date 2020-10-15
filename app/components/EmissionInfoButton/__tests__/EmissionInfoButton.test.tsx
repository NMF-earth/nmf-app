import React from "react";
import { create } from "react-test-renderer";

import EmissionInfoButton from "../";

it("renders correctly full width Primary Button with Primary font", () => {
  const tree = create(<EmissionInfoButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
