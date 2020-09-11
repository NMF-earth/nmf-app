import React from "react";
import renderer from "react-test-renderer";
import ActScreen from "../ActScreen";
import { GuideCategory } from "../../../types/guide";

const props = {
  route: {
    name: GuideCategory.technology,
  },
  navigation: {
    push: () => {
      // do nothing.
    },
  },
};

it("ActScreen renders correctly", () => {
  const tree = renderer.create(<ActScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
