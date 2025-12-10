import React from "react";
import { render } from "@testing-library/react-native";

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
  const tree = render(<Legend {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
