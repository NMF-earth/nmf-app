import React from "react";
import { create } from "react-test-renderer";

import Tag from "../Tag";

jest.unmock("../Tag.tsx");

let props;

beforeEach(() => {
  props = {
    text: "Transport",
    onPress: () => {
      // do nothing.
    },
  };
});

/* TEXT ONLY */

it("Tag renders correctly with no icon", () => {
  const tree = create(<Tag {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/* WITH ICON */

it("Tag renders correctly with airplane icon", () => {
  const tree = create(<Tag {...props} icon="md-airplane" />).toJSON();
  expect(tree).toMatchSnapshot();
});
