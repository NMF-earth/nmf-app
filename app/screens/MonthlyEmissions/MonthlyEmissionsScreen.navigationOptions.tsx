import React from "react";

import { Text } from "components";
import { Layout, ComponentsStyle, Colors } from "style";

const navigationOptions = ({ route }) => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.grey100,
  headerTitle: () => (
    <Text.H3 style={Layout.androidNavTitle}>{route?.params?.monthAndYear}</Text.H3>
  ),
});

export default navigationOptions;
