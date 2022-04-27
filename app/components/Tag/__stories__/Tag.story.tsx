import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { select, text } from "@storybook/addon-knobs";
import { Ionicons } from "@expo/vector-icons";

import Tag from "..";

const props = {
  text: "Transport",
  onPress: () => alert("onPress"),
};

const iconOptions: {
  airplane: keyof typeof Ionicons.glyphMap;
  restaurant: keyof typeof Ionicons.glyphMap;
  build: keyof typeof Ionicons.glyphMap;
  circle: keyof typeof Ionicons.glyphMap;
  flash: keyof typeof Ionicons.glyphMap;
} = {
  airplane: "md-airplane",
  restaurant: "md-restaurant",
  build: "md-build",
  circle: "md-play-circle",
  flash: "md-flash",
};
const container: ViewStyle = { flexDirection: "row", margin: 20 };

storiesOf("Tag", module)
  .add("no icon", () => (
    <View style={container}>
      <Tag {...props} text={text("Title", "transport")} />
    </View>
  ))
  .add("with Icons", () => {
    return (
      <View style={container}>
        <Tag
          {...props}
          text={text("Title", "transport")}
          icon={select("Type of Icon", iconOptions, "md-airplane")}
        />
      </View>
    );
  });
