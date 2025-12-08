import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import ListItem from "../ListItem";

describe("<ListItem />", () => {
  const props = {
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };

  test("render", () => {
    const wrapper = render(<ListItem {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("ListItem renders correctly wtesth topLine", () => {
    const tree = render(<ListItem showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly wtesth bottomLine", () => {
    const tree = render(<ListItem showBottomLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ListItem renders correctly both topLine and bottomLine", () => {
    const tree = render(<ListItem showBottomLine showTopLine {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
