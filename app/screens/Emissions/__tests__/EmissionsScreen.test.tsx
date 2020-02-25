import React from "react";
import renderer from "react-test-renderer";
import EmissionsScreen from "../EmissionsScreen";

const props = {
  emissionsMitigated: [],
  emissionsToMitigate: [],
  navigation: {
    push: () => {
      // do nothing.
    },
    navigate: () => {
      // do nothing.
    }
  }
};

it("EmissionsScreen renders correctly", () => {
  const tree = renderer.create(<EmissionsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
