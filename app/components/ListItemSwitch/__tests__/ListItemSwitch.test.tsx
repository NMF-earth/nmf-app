import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import ListItemSwitch from "../ListItemSwitch";

describe("<ListItemSwitch />", () => {
  const props = {
    title: "Germany",
    value: true,
    onChange: () => {
      // do nothing.
    },
  };

  test("render", () => {
    const wrapper = render(<ListItemSwitch {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("ListItem renders correctly with topLine", () => {
    const tree = render(<ListItemSwitch showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly with bottomLine", () => {
    const tree = render(<ListItemSwitch showBottomLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly with both topLine and bottomLine", () => {
    const tree = render(<ListItemSwitch showBottomLine showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
