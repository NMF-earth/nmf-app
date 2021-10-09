import React from "react";
import { create } from "react-test-renderer";

import ClickableTag from "..";

describe("ClickableTag tests", () => {
  const mockOnPress = jest.fn();
  const props = {
    text: "Monday",
    isSelected: false,
    onPress: () => mockOnPress(),
  };

  it("should render correctly", () => {
    const element = create(<ClickableTag {...props} />).toJSON();

    expect(element).toMatchSnapshot();
  });

  it("given onPress should be called", () => {
    const element = create(<ClickableTag {...props} />).toJSON();
    element.props.onPress();

    expect(mockOnPress).toBeCalled();
  });
});
