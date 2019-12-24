import React from "react";
import renderer from "react-test-renderer";
import EmissionsScreen from "../EmissionsScreen";

const props = {
  navigation: {
    push: () => {
      // do nothing.
    }
  }
};

it("EmissionsScreen renders correctly", () => {
  const tree = renderer.create(<EmissionsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
