import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import NoEmission from "..";

const container: ViewStyle = { flex: 1, margin: 20, marginBottom: 50 };

storiesOf("NoEmission", module).add("NoEmission", () => (
  <View style={container}>
    <NoEmission />
  </View>
));
