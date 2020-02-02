import React from "react";
import renderer from "react-test-renderer";
import Intro from "..";

const props = {
  navigation: {
    navigate: jest.fn()
  }
};

test("renders correctly ComingSoon", () => {
  const tree = renderer.create(<Intro {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
