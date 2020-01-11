import React from "react";
import renderer from "react-test-renderer";
import ComingSoon from "../";

jest.unmock("../");

test("renders correctly ComingSoon", () => {
  const tree = renderer.create(<ComingSoon />).toJSON();
  expect(tree).toMatchSnapshot();
});
