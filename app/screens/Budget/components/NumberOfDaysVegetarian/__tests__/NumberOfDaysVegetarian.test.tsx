import React from "react";
import { create } from "react-test-renderer";

import NumberOfDaysVegetarian from "../NumberOfDaysVegetarian";

jest.unmock("../NumberOfDaysVegetarian");

it("NumberOfDaysVegetarian renders correctly", () => {
  const tree = create(<NumberOfDaysVegetarian />).toJSON();
  expect(tree).toMatchSnapshot();
});
