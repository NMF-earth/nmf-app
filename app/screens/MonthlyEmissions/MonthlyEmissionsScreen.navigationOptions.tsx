/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
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
    <Text.Header style={[Layout.androidNavTitle, { textTransform: "capitalize" }]}>
      {route?.params?.monthAndYear}
    </Text.Header>
  ),
});

export default navigationOptions;
