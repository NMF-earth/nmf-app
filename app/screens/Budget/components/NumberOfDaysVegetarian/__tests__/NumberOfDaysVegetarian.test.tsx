import React from "react";
import { render } from "@testing-library/react-native";

import NumberOfDaysVegetarian from "../NumberOfDaysVegetarian";

jest.unmock("../NumberOfDaysVegetarian");

it("NumberOfDaysVegetarian renders correctly", () => {
  const tree = render(<NumberOfDaysVegetarian />).toJSON();
  expect(tree).toMatchSnapshot();
});
