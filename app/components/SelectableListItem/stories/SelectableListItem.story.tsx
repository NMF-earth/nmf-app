import React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, text } from "@storybook/addon-knobs";

import SelectableListItem from "..";

storiesOf("SelectableListItem", module).add("basic list item", () => (
  <SelectableListItem
    selected={boolean("Selected", false)}
    title={text("Title", "France")}
    onPress={() => {
      // do nothing.
    }}
  />
));
