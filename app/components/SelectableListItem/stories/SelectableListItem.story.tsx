import React from "react";
import { storiesOf } from "@storybook/react-native";

import SelectableListItem from "..";

storiesOf("SelectableListItem", module)
  .add("basic list item selected", () => (
    <SelectableListItem
      selected={true}
      title={"France"}
      onPress={() => {
        // do nothing.
      }}
    />
  ))
  .add("basic list item not selected", () => (
    <SelectableListItem
      selected={false}
      title={"Italy"}
      onPress={() => {
        // do nothing.
      }}
    />
  ));
