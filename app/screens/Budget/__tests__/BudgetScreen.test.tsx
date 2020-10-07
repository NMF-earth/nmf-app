import React from "react";
import { create } from "react-test-renderer";

import BudgetScreen from "../BudgetScreen";

const props = {
  navigation: {
    push: () => {
      // do nothing.
    },
  },
};

it("BudgetScreen renders correctly", () => {
  const tree = create(<BudgetScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO: add test to verify that monthly budget is opened
