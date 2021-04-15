import React from "react";
import { create } from "react-test-renderer";

import ProgressChart from "../ProgressChart";

jest.unmock("../ProgressChart");

const props = {
  totalEmissions: 900,
  foodEmissions: 200,
  transportEmissions: 600,
  otherEmissions: 100,
  monthlyEmissionsBudget: 1000,
};

it("ProgressChart renders correctly", () => {
  const tree = create(<ProgressChart {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("ProgressChart should not render if monthlyEmissionsBudget equals 0", () => {
  const tree = create(<ProgressChart {...props} monthlyEmissionsBudget={0} />).toJSON();
  expect(tree).toBeNull();
});
