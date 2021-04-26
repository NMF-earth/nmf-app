import "react-native";
import React from "react";
import { create } from "react-test-renderer";

import ListItem from "../ListItem";

describe("<ListItem />", () => {
  const props = {
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };
  const wrapper = create(<ListItem {...props} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("ListItem renders correctly wtesth topLine", () => {
    const tree = create(<ListItem showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly wtesth bottomLine", () => {
    const tree = create(<ListItem showBottomLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly both topLine and bottomLine", () => {
    const tree = create(<ListItem showBottomLine showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
