import React from "react";
import renderer from "react-test-renderer";

import TextInput from "../";

jest.unmock("../");

const foo = () => {
  // do nothing.
};

it("renders correctly TextInput", () => {
  const tree = renderer
    .create(
      <TextInput
        isOptional={false}
        placeholder={"placeholder"}
        title={"title"}
        onChangeText={foo}
        value={"value"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly TextInput if optional", () => {
  const tree = renderer
    .create(
      <TextInput
        isOptional={false}
        placeholder={"placeholder"}
        title={"title"}
        onChangeText={foo}
        value={"value"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
