import React from "react";
import renderer from "react-test-renderer";
import Intro from "..";

test("renders correctly ComingSoon", () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
