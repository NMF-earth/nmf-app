import React from "react";
import renderer from "react-test-renderer";
import MonthSelector from "../MonthSelector";

jest.unmock("../MonthSelector");

it("MonthSelector renders correctly", () => {
  const tree = renderer.create(<MonthSelector />).toJSON();
  expect(tree).toMatchSnapshot();
});
