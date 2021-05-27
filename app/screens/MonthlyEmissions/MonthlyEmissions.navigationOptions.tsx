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
    <Text.Primary style={Layout.androidNavTitle}>{route?.params?.dateHeader}</Text.Primary>
  ),
});

export default navigationOptions;
