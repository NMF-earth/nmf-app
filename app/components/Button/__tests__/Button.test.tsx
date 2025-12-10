import React from "react";
import { render } from "@testing-library/react-native";

import Button from "../";

jest.unmock("../");

const foo = () => {
  // do nothing.
};

/* Primary Button Tests */

it("renders correctly Primary Button", () => {
  const tree = render(<Button.Primary onPress={foo} text={"Primary"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly fullwidth Primary Button", () => {
  const tree = render(<Button.Primary fullWidth onPress={foo} text={"Primary"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly fullwidth Primary Button with icon", () => {
  const tree = render(
    <Button.Primary icon={"calendar"} fullWidth onPress={foo} text={"Primary"} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Secondary Button Tests */

it("renders correctly Secondary Button", () => {
  const tree = render(<Button.Secondary onPress={foo} text={"Primary"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly fullwidth Secondary Button", () => {
  const tree = render(<Button.Secondary fullWidth onPress={foo} text={"Primary"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly fullwidth Secondary Button with icon", () => {
  const tree = render(
    <Button.Primary icon={"calendar"} fullWidth onPress={foo} text={"Primary"} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Secondary Button Tests */

it("renders correctly Danger Button", () => {
  const tree = render(<Button.Danger onPress={foo} text={"Primary"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly fullwidth Danger Button", () => {
  const tree = render(<Button.Secondary fullWidth onPress={foo} text={"Primary"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly fullwidth Danger Button with icon", () => {
  const tree = render(
    <Button.Primary icon={"calendar"} fullWidth onPress={foo} text={"Primary"} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
