import React from "react";

import { storiesOf } from "@storybook/react-native";

import Text from "..";

const DEFAULT_TEXT = "The lazy dog jump around!";

storiesOf("Text", module)
  .add("H1", () => <Text.H1>{DEFAULT_TEXT}</Text.H1>)
  .add("H2", () => <Text.H2>{DEFAULT_TEXT}</Text.H2>)
  .add("H3", () => <Text.H3>{DEFAULT_TEXT}</Text.H3>)
  .add("Primary", () => <Text.Primary>{DEFAULT_TEXT}</Text.Primary>)
  .add("Secondary", () => <Text.Secondary>{DEFAULT_TEXT}</Text.Secondary>)
  .add("Tertiary", () => <Text.Tertiary>{DEFAULT_TEXT}</Text.Tertiary>);
