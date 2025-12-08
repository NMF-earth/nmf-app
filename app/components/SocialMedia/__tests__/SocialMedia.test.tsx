import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import * as Linking from "expo-linking";

import SocialMedia from "..";

jest.unmock("../");

jest.mock("@expo/vector-icons", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { View } = require("react-native");
  return {
    FontAwesome5: View,
  };
});

jest.mock("expo-linking");

it("renders correctly SocialMedia", () => {
  const tree = render(<SocialMedia />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should open link", () => {
  const { getAllByTestId } = render(<SocialMedia />);

  const icons = getAllByTestId("social-media-button");
  icons.forEach((item) => fireEvent.press(item));

  expect(Linking.openURL).toHaveBeenCalledTimes(icons.length);
});
