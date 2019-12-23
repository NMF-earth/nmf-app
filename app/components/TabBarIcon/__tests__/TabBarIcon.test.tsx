import React from "react";
import renderer from "react-test-renderer";
import TabBarIcon from "../TabBarIcon";

it("renders correctly", () => {
  const tree = renderer
    .create(<TabBarIcon focused={false} name="ios-information-circle" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
