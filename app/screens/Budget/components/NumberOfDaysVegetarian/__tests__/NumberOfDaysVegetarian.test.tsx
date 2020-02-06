import React from "react";
import renderer from "react-test-renderer";
import NumberOfDaysVegetarian from "../NumberOfDaysVegetarian";

jest.unmock("../NumberOfDaysVegetarian");

it("NumberOfDaysVegetarian renders correctly", () => {
  const tree = renderer.create(<NumberOfDaysVegetarian />).toJSON();
  expect(tree).toMatchSnapshot();
});
