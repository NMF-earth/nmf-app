import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Button from "..";
import Text from "../../Text";

const DEFAULT_TEXT = "Fake button";
const onPressFake = () => {
  // do nothing.
};

const container: ViewStyle = { flexDirection: "row", margin: 20 };

storiesOf("Button", module)
  .add("Primary", () => (
    <View style={container}>
      <Button.Primary onPress={onPressFake} textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary fullWidth", () => (
    <View style={container}>
      <Button.Primary fullWidth onPress={onPressFake} textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary Black", () => (
    <View style={container}>
      <Button.Primary onPress={onPressFake} black textType={"Primary"}>
        <Text.Primary center white>
          {DEFAULT_TEXT}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Secondary", () => (
    <View style={container}>
      <Button.Secondary onPress={onPressFake} textType={"Secondary"}>
        <Text.Secondary center green>
          {DEFAULT_TEXT}
        </Text.Secondary>
      </Button.Secondary>
    </View>
  ));
