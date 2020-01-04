import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Button from "..";
import Text from "../../Text";

const DEFAULT_TEXT = "Fake button";
const onPressFake = () => {
  // do nothing.
};

const DEFAULT_VIEW_STYLE: ViewStyle = { alignItems: "flex-start" };

storiesOf("Button", module)
  .add("Primary", () => (
    <View style={DEFAULT_VIEW_STYLE}>
      <Button.Primary onPress={onPressFake} textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary fullWidth", () => (
    <View style={DEFAULT_VIEW_STYLE}>
      <Button.Primary fullWidth onPress={onPressFake} textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary Black", () => (
    <View style={DEFAULT_VIEW_STYLE}>
      <Button.Primary onPress={onPressFake} black textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary Black", () => (
    <View style={DEFAULT_VIEW_STYLE}>
      <Button.Primary onPress={onPressFake} black textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Secondary", () => (
    <View style={DEFAULT_VIEW_STYLE}>
      <Button.Secondary onPress={onPressFake} textType={"Secondary"}>
        <Text.Secondary center green>
          {DEFAULT_TEXT}
        </Text.Secondary>
      </Button.Secondary>
    </View>
  ));
