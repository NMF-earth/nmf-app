import "react-native";
import React from "react";
import { create } from "react-test-renderer";

import ListItem from "../ListItem";

describe("<ListItem />", () => {
  const defaultProps = {
    selected: true,
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };
  const wrapper = create(<ListItem {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
