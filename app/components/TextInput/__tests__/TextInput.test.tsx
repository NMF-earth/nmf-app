import React from "react";
import { render } from "@testing-library/react-native";

import TextInput from "../";

jest.unmock("../");

const foo = () => {
  // do nothing.
};

it("renders correctly TextInput", () => {
  const tree = render(
    <TextInput
      isOptional={false}
      placeholder={"placeholder"}
      title={"title"}
      onChangeText={foo}
      value={"value"}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly TextInput if optional", () => {
  const tree = render(
    <TextInput
      isOptional={false}
      placeholder={"placeholder"}
      title={"title"}
      onChangeText={foo}
      value={"value"}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
