import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import SelectableListItem from "../SelectableListItem";

describe("<SelectableListItem />", () => {
  const defaultProps = {
    selected: true,
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };

  test("render", () => {
    const wrapper = render(<SelectableListItem {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("render if not selected", () => {
    const wrapperNotSelected = render(<SelectableListItem {...defaultProps} selected={false} />);
    expect(wrapperNotSelected.toJSON()).toMatchSnapshot();
  });
});
