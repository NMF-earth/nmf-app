import React from "react";
import * as Linking from "expo-linking";
import { create } from "react-test-renderer";

import SettingsRow from "../SettingsRow";

jest.unmock("../SettingsRow");

beforeEach(() => {
  jest.spyOn(Linking, "openURL").mockImplementation((url: string) => {
    if (url) {
      return Promise.resolve(true);
    }
    Promise.reject(false);
  });
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
