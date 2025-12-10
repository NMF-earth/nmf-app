import React from "react";
import { render } from "@testing-library/react-native";

import TextButton from "../TextButton";

jest.unmock("../TextButton.tsx");

interface TextButtonProps {
  onPress: () => void;
  text: string;
  iconLeft: "calendar" | "repeat";
}

let props: TextButtonProps;

beforeEach(() => {
  props = {
    onPress: () => {
      // do nothing.
    },
    text: "some text",
    iconLeft: "calendar",
  };
});

it("TextButton renders correctly with calendar icon", () => {
  const tree = render(<TextButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("TextButton renders correctly with repeat icon", () => {
  const tree = render(<TextButton {...props} iconLeft={"repeat"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
