import React from "react";
import renderer from "react-test-renderer";
import Chart from "../Chart";

const props = {
  totalEmissionsPercentage: 900,
  transportEmissionsPercentage: 600,
  foodEmissionsPercentage: 200
};

jest.unmock("../Chart");

it("Chart renders correctly", () => {
  const tree = renderer.create(<Chart {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
