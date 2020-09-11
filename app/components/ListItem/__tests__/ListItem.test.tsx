import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import ListItem from "../ListItem";

describe("<ListItem />", () => {
  const defaultProps = {
    selected: true,
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };
  const wrapper = renderer.create(<ListItem {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
