import React from "react";
import renderer from "react-test-renderer";
import BudgetScreen from "../BudgetScreen";

const props = {
  navigation: {
    push: () => {
      // do nothing.
    }
  }
};

it("BudgetScreen renders correctly", () => {
  const tree = renderer.create(<BudgetScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO: add test to verify that monthly budget is opened
