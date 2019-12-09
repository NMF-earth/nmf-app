import React from "react";
import renderer from "react-test-renderer";
import Button from "../";
import Text from "../../Text";

jest.unmock("../");

/* Primary Button Tests */

it("renders correctly full width Primary Button with Primary font", () => {
  const tree = renderer
    .create(
      <Button.Primary fullWidth onPress={() => {}} textType={"Primary"}>
        <Text.Primary>test</Text.Primary>
      </Button.Primary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary Button with Secondary font", () => {
  const tree = renderer
    .create(
      <Button.Primary onPress={() => {}} textType={"Secondary"}>
        <Text.Secondary>test</Text.Secondary>
      </Button.Primary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary Button with Tertiary font", () => {
  const tree = renderer
    .create(
      <Button.Primary onPress={() => {}} textType={"Tertiary"}>
        <Text.Tertiary>test</Text.Tertiary>
      </Button.Primary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* Secondary Button Tests */

it("renders correctly full width Secondary Button with Primary font", () => {
  const tree = renderer
    .create(
      <Button.Secondary fullWidth onPress={() => {}} textType={"Primary"}>
        <Text.Primary>test</Text.Primary>
      </Button.Secondary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary Button with Secondary font", () => {
  const tree = renderer
    .create(
      <Button.Secondary onPress={() => {}} textType={"Secondary"}>
        <Text.Secondary>test</Text.Secondary>
      </Button.Secondary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary Button with Tertiary font", () => {
  const tree = renderer
    .create(
      <Button.Secondary onPress={() => {}} textType={"Tertiary"}>
        <Text.Tertiary>test</Text.Tertiary>
      </Button.Secondary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
