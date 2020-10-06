import React from "react";
import { storiesOf } from "@storybook/react-native";
import { text } from "@storybook/addon-knobs";

import ListItem from "..";

storiesOf("ListItem", module).add("basic list item", () => (
  <ListItem
    title={text("Title", "France")}
    onPress={() => {
      // do nothing.
    }}
  />
));
