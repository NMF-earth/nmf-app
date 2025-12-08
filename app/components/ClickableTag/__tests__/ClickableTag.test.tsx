import React from "react";
import { render } from "@testing-library/react-native";

import ClickableTag from "..";

describe("ClickableTag tests", () => {
  const mockOnPress = jest.fn();
  const props = {
    text: "Monday",
    isSelected: false,
    onPress: () => mockOnPress(),
  };

  it("should render correctly", () => {
    const element = render(<ClickableTag {...props} />).toJSON();

    expect(element).toMatchSnapshot();
  });

  it("given onPress should be called", () => {
    const element = render(<ClickableTag {...props} />).toJSON() as { props: { onPress: () => void } };
    element.props.onPress();

    expect(mockOnPress).toHaveBeenCalled();
  });
});
