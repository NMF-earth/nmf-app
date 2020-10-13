import React from "react";
import { create } from "react-test-renderer";

import ActScreen from "../ActScreen";
import { GuideCategory } from "../../../types/guide";

const props = {
  route: {
    name: GuideCategory.digital,
  },
  navigation: {
    push: () => {
      // do nothing.
    },
  },
};

it("ActScreen renders correctly", () => {
  const tree = create(<ActScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
