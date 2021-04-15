import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { text, boolean } from "@storybook/addon-knobs";

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
      <Button.Primary
        fullWidth={boolean("FullWidth", false)}
        onPress={onPressFake}
        textType={"Primary"}
      >
        <Text.Primary center white>
          {text("Title", DEFAULT_TEXT)}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary Black", () => (
    <View style={container}>
      <Button.Primary onPress={onPressFake} black textType={"Primary"}>
        <Text.Primary center white>
          {text("Title", DEFAULT_TEXT)}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Primary Red", () => (
    <View style={container}>
      <Button.Primary onPress={onPressFake} red textType={"Primary"}>
        <Text.Primary center white>
          {text("Title", DEFAULT_TEXT)}
        </Text.Primary>
      </Button.Primary>
    </View>
  ))
  .add("Secondary", () => (
    <View style={container}>
      <Button.Secondary onPress={onPressFake} textType={"Secondary"}>
        <Text.Secondary center green>
          {text("Title", DEFAULT_TEXT)}
        </Text.Secondary>
      </Button.Secondary>
    </View>
  ));
