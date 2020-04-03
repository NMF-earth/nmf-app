import React from "react";
import { storiesOf } from "@storybook/react-native";

import TextInput from "..";

const foo = () => {
  // do nothing.
};

storiesOf("TextInput", module)
  .add("TextInput", () => (
    <TextInput
      isOptional={false}
      placeholder={"placeholder"}
      title={"title"}
      onChangeText={foo}
      value={"value"}
    />
  ))
  .add("TextInput optional", () => (
    <TextInput
      isOptional={true}
      placeholder={"placeholder"}
      title={"title"}
      onChangeText={foo}
      value={"value"}
    />
  ));
