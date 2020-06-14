import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import SelectableListItem from "../SelectableListItem";

describe("<SelectableListItem />", () => {
  const defaultProps = {
    selected: true,
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };
  const wrapper = renderer.create(<SelectableListItem {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  const wrapperNotSelected = renderer.create(
    <SelectableListItem selected={false} {...defaultProps} />
  );

  test("render if not selected", () => {
    expect(wrapperNotSelected).toMatchSnapshot();
  });
});
