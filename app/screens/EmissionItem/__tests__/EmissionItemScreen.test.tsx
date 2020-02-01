import React from "react";
import renderer from "react-test-renderer";
import EmissionItemScreen from "../EmissionItemScreen";

it("EmissionsScreen renders correctly", () => {
  let props: any;
  const tree = renderer.create(<EmissionItemScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
