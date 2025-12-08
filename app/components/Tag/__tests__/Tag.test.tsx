import React from "react";
import { render } from "@testing-library/react-native";

import Tag from "../Tag";

interface TagProps {
  onPress: () => void;
  text: string;
  icon?: string;
}

let props: TagProps;

beforeEach(() => {
  props = {
    onPress: jest.fn(),
    text: "Transport",
  };
});

/* TEXT ONLY */

it("Tag renders correctly with no icon", () => {
  const tree = render(<Tag {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/* WITH ICON */

it("Tag renders correctly with airplane icon", () => {
  const tree = render(<Tag {...props} icon="airplane" />).toJSON();
  expect(tree).toMatchSnapshot();
});
