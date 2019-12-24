import React from "react";
import renderer from "react-test-renderer";
import ActScreen from "../ActScreen";

const props = {
  navigation: {
    push: () => {
      // do nothing.
    }
  }
};

it("EmissionsScreen renders correctly", () => {
  const tree = renderer.create(<ActScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
