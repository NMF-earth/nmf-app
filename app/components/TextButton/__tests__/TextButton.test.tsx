import React from "react";
import { create } from "react-test-renderer";

import TextButton from "../TextButton";

jest.unmock("../TextButton.tsx");

let props;

beforeEach(() => {
  props = {
    onPress: () => {
      // do nothing.
    },
    text: "some text",
    iconLeft: "camera",
  };
});

it("TextButton renders correctly with camera icon", () => {
  const tree = create(<TextButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("TextButton renders correctly with repeat icon", () => {
  const tree = create(<TextButton {...props} iconLeft={"repeat"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
