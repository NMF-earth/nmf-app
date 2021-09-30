import React from "react";
import { create } from "react-test-renderer";

import Legend from "../Legend";

const props = {
  totalEmissions: 1000,
  foodEmissions: 200,
  mealEmissions: 300,
  transportEmissions: 200,
  streamingEmissions: 50,
  purchaseEmissions: 50,
  fashionEmissions: 100,
  electricityEmissions: 50,
  customEmissions: 20,
  productScannedEmissions: 30,
};

jest.unmock("../Legend");

it("Legend renders correctly", () => {
  const tree = create(<Legend {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
