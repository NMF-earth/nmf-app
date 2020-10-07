import React from "react";
import { create } from "react-test-renderer";

import Legend from "../Legend";

const props = {
  totalEmissions: 900,
  foodEmissions: 200,
  transportEmissions: 600,
  otherEmissions: 100,
};

jest.unmock("../Legend");

it("Legend renders correctly", () => {
  const tree = create(<Legend {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
