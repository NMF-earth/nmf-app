import React from "react";
import { create } from "react-test-renderer";

import Button from "../";
import Text from "../../Text";

jest.unmock("../");

const foo = () => {
  // do nothing.
};

/* Primary Button Tests */

it("renders correctly full width Primary Button with Primary font", () => {
  const tree = create(
    <Button.Primary fullWidth onPress={foo} textType={"Primary"}>
      <Text.Primary>test</Text.Primary>
    </Button.Primary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly full width Primary Button with black color", () => {
  const tree = create(
    <Button.Primary black fullWidth onPress={foo} textType={"Primary"}>
      <Text.Primary>test</Text.Primary>
    </Button.Primary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly full width Primary Button with red color", () => {
  const tree = create(
    <Button.Primary red fullWidth onPress={foo} textType={"Primary"}>
      <Text.Primary>test</Text.Primary>
    </Button.Primary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary Button with Secondary font", () => {
  const tree = create(
    <Button.Primary onPress={foo} textType={"Secondary"}>
      <Text.Secondary>test</Text.Secondary>
    </Button.Primary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Secondary Button Tests */

it("renders correctly full width Secondary Button with Primary font", () => {
  const tree = create(
    <Button.Secondary fullWidth onPress={foo} textType={"Primary"}>
      <Text.Primary>test</Text.Primary>
    </Button.Secondary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary Button with Secondary font", () => {
  const tree = create(
    <Button.Secondary onPress={foo} textType={"Secondary"}>
      <Text.Secondary>test</Text.Secondary>
    </Button.Secondary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
