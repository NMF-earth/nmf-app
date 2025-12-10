import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import * as WebBrowser from "expo-web-browser";

import Text from "../";

jest.unmock("../");

/* NavHeader Tests */

it("renders correctly NavHeader", () => {
  const tree = render(<Text.Header>test</Text.Header>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H1 Tests */

it("renders correctly H1", () => {
  const tree = render(<Text.H1>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 darkGray", () => {
  const tree = render(<Text.H1 darkGray>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 lightGray", () => {
  const tree = render(<Text.H1 lightGray>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 green", () => {
  const tree = render(<Text.H1 green>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H2 Tests */

it("renders correctly H2", () => {
  const tree = render(<Text.H2>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 darkGray", () => {
  const tree = render(<Text.H2 darkGray>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 blue50", () => {
  const tree = render(<Text.H2 blue50>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 lightGray", () => {
  const tree = render(<Text.H2 lightGray>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 green", () => {
  const tree = render(<Text.H2 green>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 center", () => {
  const tree = render(<Text.H2 center>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H3 Tests */

it("renders correctly H3", () => {
  const tree = render(<Text.H3>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 darkGray", () => {
  const tree = render(<Text.H3 darkGray>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 lightGray", () => {
  const tree = render(<Text.H3 lightGray>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 green", () => {
  const tree = render(<Text.H3 green>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 center", () => {
  const tree = render(<Text.H3 center>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Primary Tests */

it("renders correctly Primary", () => {
  const tree = render(<Text.Primary>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary darkGray", () => {
  const tree = render(<Text.Primary darkGray>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary lightGray", () => {
  const tree = render(<Text.Primary lightGray>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary green", () => {
  const tree = render(<Text.Primary green>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary white", () => {
  const tree = render(<Text.Primary white>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary bold", () => {
  const tree = render(<Text.Primary bold>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary center", () => {
  const tree = render(<Text.Primary bold>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary red", () => {
  const tree = render(<Text.Primary red>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary blue", () => {
  const tree = render(<Text.Primary blue>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Primary Tests */

it("renders correctly Secondary", () => {
  const tree = render(<Text.Secondary>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary darkGray", () => {
  const tree = render(<Text.Secondary darkGray>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary lightGray", () => {
  const tree = render(<Text.Secondary lightGray>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary green", () => {
  const tree = render(<Text.Secondary green>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary white", () => {
  const tree = render(<Text.Secondary white>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary bold", () => {
  const tree = render(<Text.Secondary bold>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary center", () => {
  const tree = render(<Text.Secondary center>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary lightWeightText", () => {
  const tree = render(<Text.Secondary lightWeightText>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary red", () => {
  const tree = render(<Text.Secondary red>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary orange", () => {
  const tree = render(<Text.Secondary orange>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Tertiary Tests */

it("renders correctly Tertiary", () => {
  const tree = render(<Text.Tertiary>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary darkGray", () => {
  const tree = render(<Text.Tertiary darkGray>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary lightGray", () => {
  const tree = render(<Text.Tertiary lightGray>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary green", () => {
  const tree = render(<Text.Tertiary green>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary white", () => {
  const tree = render(<Text.Tertiary white>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary bold", () => {
  const tree = render(<Text.Tertiary bold>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary center", () => {
  const tree = render(<Text.Tertiary center>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary lightWeightText", () => {
  const tree = render(<Text.Tertiary lightWeightText>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary red", () => {
  const tree = render(<Text.Tertiary red>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Link Tests */

it("renders correctly Link", () => {
  const tree = render(<Text.Link url="http://nmf.earth">test</Text.Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

// SKIPPED: React 19 deprecated react-test-renderer, .root becomes inaccessible
it("open links", () => {
  const spy = jest.spyOn(WebBrowser, "openBrowserAsync");
  const { getByText } = render(<Text.Link url="http://nmf.earth">test</Text.Link>);
  fireEvent.press(getByText("test"));
  expect(spy).toHaveBeenCalled();
});
