import React from "react";
import renderer from "react-test-renderer";
import { Linking } from "expo";
import SocialMedia from "../";

jest.unmock("../");

beforeEach(() => {
  Linking.openURL = jest.fn();
});

test("renders correctly SocialMedia", () => {
  const tree = renderer.create(<SocialMedia />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should open link", () => {
  const root = renderer.create(<SocialMedia />).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const icons = root.findAllByType("TouchableOpacity");
  icons.map((item) => item.props.onPress());
  expect(Linking.openURL).toHaveBeenCalledTimes(icons.length);
});
