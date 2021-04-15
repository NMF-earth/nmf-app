import React from "react";
import { storiesOf } from "@storybook/react-native";
import { text } from "@storybook/addon-knobs";

import Text from "..";

const DEFAULT_TEXT = "The lazy dog jump around!";

storiesOf("Text", module)
  .add("H1", () => <Text.H1>{text("Some text", DEFAULT_TEXT)}</Text.H1>)
  .add("H2", () => <Text.H2>{text("Some text", DEFAULT_TEXT)}</Text.H2>)
  .add("H3", () => <Text.H3>{text("Some text", DEFAULT_TEXT)}</Text.H3>)
  .add("Primary", () => <Text.Primary>{text("Some text", DEFAULT_TEXT)}</Text.Primary>)
  .add("Secondary", () => <Text.Secondary>{text("Some text", DEFAULT_TEXT)}</Text.Secondary>)
  .add("Tertiary", () => <Text.Tertiary>{text("Some text", DEFAULT_TEXT)}</Text.Tertiary>);
