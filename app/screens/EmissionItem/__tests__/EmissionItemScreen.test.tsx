import React from "react";
import renderer from "react-test-renderer";
import EmissionItemScreen from "../EmissionItemScreen";

it("EmissionsScreen renders correctly", () => {
  const props = {
    navigation: {
      goBack: jest.fn(),
      state: {
        params: {
          id: "ejew034-dsd"
        }
      }
    }
  };
  const tree = renderer.create(<EmissionItemScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
