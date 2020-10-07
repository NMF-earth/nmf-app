import React from "react";
import { Linking } from "expo";
import { create } from "react-test-renderer";

import SettingsRow from "../SettingsRow";

jest.unmock("../SettingsRow");

beforeEach(() => {
  Linking.openURL = jest.fn();
});

const props = {
  title: "title",
  onPress: () => Linking.openURL("http://nmf.earth"),
};

it("SettingsRow renders correctly", () => {
  const tree = create(<SettingsRow {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should open link", () => {
  const root = create(<SettingsRow {...props} />).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const item = root.findByType("TouchableOpacity");
  item.props.onPress();
  expect(Linking.openURL).toHaveBeenCalled();
});
