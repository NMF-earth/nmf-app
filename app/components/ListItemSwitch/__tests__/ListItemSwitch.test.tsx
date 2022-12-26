import "react-native";
import React from "react";
import { create } from "react-test-renderer";

import ListItemSwitch from "../ListItemSwitch";

describe("<ListItemSwitch />", () => {
  const props = {
    title: "Germany",
    value: true,
    onChange: () => {
      // do nothing.
    },
  };
  const wrapper = create(<ListItemSwitch {...props} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("ListItem renders correctly with topLine", () => {
    const tree = create(<ListItemSwitch showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly with bottomLine", () => {
    const tree = create(<ListItemSwitch showBottomLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly with both topLine and bottomLine", () => {
    const tree = create(<ListItemSwitch showBottomLine showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
