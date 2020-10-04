import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { boolean, select, text } from "@storybook/addon-knobs";

import Tag from "..";

const props = {
  selected: false,
  title: "Transport",
  onPress: () => alert("onPress"),
};

const iconOptions = {
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
      <Tag
        {...props}
        title={text("Title", "transport")}
        selected={boolean("Selected", false)}
      />
    </View>
  ))
  .add("with Icons", () => {
    return (
      <View style={container}>
        <Tag
          {...props}
          title={text("Title", "transport")}
          icon={select("Type of Icon", iconOptions, "md-airplane")}
          selected={boolean("Selected", false)}
        />
      </View>
    );
  });
