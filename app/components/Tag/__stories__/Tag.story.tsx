import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Tag from "..";

const props = {
  selected: false,
  title: "Transport",
  onPress: () => alert("onPress")
};

const container: ViewStyle = { flexDirection: "row", margin: 20 };

storiesOf("Tag", module)
  .add("no icon", () => (
    <View style={container}>
      <Tag {...props} />
    </View>
  ))
  .add("no icon and selected", () => (
    <View style={container}>
      <Tag {...props} selected />
    </View>
  ))
  .add("airplane icon and not selected", () => (
    <View style={container}>
      <Tag {...props} icon="md-airplane" />
    </View>
  ))
  .add("airplane icon and selected", () => (
    <View style={container}>
      <Tag {...props} icon="md-airplane" selected />
    </View>
  ))
  .add("restaurant icon and selected", () => (
    <View style={container}>
      <Tag {...props} icon="md-restaurant" />
    </View>
  ))
  .add("restaurant icon and not selected", () => (
    <View style={container}>
      <Tag {...props} icon="md-restaurant" />
    </View>
  ))
  .add("build icon and not selected", () => (
    <View style={container}>
      <Tag {...props} icon="md-build" />
    </View>
  ))
  .add("build icon and selected", () => (
    <View style={container}>
      <Tag {...props} icon="md-build" selected />
    </View>
  ));
