import React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, text } from "@storybook/addon-knobs";

import ClickableTag from "..";

storiesOf("ClickableTag", module).add("Clickable tag", () => {
  <ClickableTag
    text={text("Text", "Monday")}
    isSelected={boolean("Is selected", false)}
    onPress={() => {
      // do nothing.
    }}
  />;
});
