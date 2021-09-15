import React from "react";
import { create } from "react-test-renderer";
import * as WebBrowser from "expo-web-browser";

import Text from "../";

jest.unmock("../");

/* NavHeader Tests */

it("renders correctly NavHeader", () => {
  const tree = create(<Text.Header>test</Text.Header>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H1 Tests */

it("renders correctly H1", () => {
  const tree = create(<Text.H1>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 darkGray", () => {
  const tree = create(<Text.H1 darkGray>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 lightGray", () => {
  const tree = create(<Text.H1 lightGray>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 green", () => {
  const tree = create(<Text.H1 green>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H2 Tests */

it("renders correctly H2", () => {
  const tree = create(<Text.H2>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 darkGray", () => {
  const tree = create(<Text.H2 darkGray>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 blue50", () => {
  const tree = create(<Text.H2 blue50>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 lightGray", () => {
  const tree = create(<Text.H2 lightGray>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 green", () => {
  const tree = create(<Text.H2 green>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H3 Tests */

it("renders correctly H3", () => {
  const tree = create(<Text.H3>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 darkGray", () => {
  const tree = create(<Text.H3 darkGray>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 lightGray", () => {
  const tree = create(<Text.H3 lightGray>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 green", () => {
  const tree = create(<Text.H3 green>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 center", () => {
  const tree = create(<Text.H3 center>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Primary Tests */

it("renders correctly Primary", () => {
  const tree = create(<Text.Primary>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary darkGray", () => {
  const tree = create(<Text.Primary darkGray>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary lightGray", () => {
  const tree = create(<Text.Primary lightGray>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary green", () => {
  const tree = create(<Text.Primary green>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary white", () => {
  const tree = create(<Text.Primary white>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary bold", () => {
  const tree = create(<Text.Primary bold>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary center", () => {
  const tree = create(<Text.Primary bold>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary red", () => {
  const tree = create(<Text.Primary red>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary blue", () => {
  const tree = create(<Text.Primary blue>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Primary Tests */

it("renders correctly Secondary", () => {
  const tree = create(<Text.Secondary>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary darkGray", () => {
  const tree = create(<Text.Secondary darkGray>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary lightGray", () => {
  const tree = create(<Text.Secondary lightGray>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary green", () => {
  const tree = create(<Text.Secondary green>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary white", () => {
  const tree = create(<Text.Secondary white>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary bold", () => {
  const tree = create(<Text.Secondary bold>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary center", () => {
  const tree = create(<Text.Secondary center>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary lightWeightText", () => {
  const tree = create(<Text.Secondary lightWeightText>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary red", () => {
  const tree = create(<Text.Secondary red>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary orange", () => {
  const tree = create(<Text.Secondary orange>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Tertiary Tests */

it("renders correctly Tertiary", () => {
  const tree = create(<Text.Tertiary>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary darkGray", () => {
  const tree = create(<Text.Tertiary darkGray>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary lightGray", () => {
  const tree = create(<Text.Tertiary lightGray>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary green", () => {
  const tree = create(<Text.Tertiary green>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary white", () => {
  const tree = create(<Text.Tertiary white>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary bold", () => {
  const tree = create(<Text.Tertiary bold>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary center", () => {
  const tree = create(<Text.Tertiary center>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary lightWeightText", () => {
  const tree = create(<Text.Tertiary lightWeightText>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary red", () => {
  const tree = create(<Text.Tertiary red>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Link Tests */

it("renders correctly Link", () => {
  const tree = create(<Text.Link url="http://nmf.earth">test</Text.Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("open links", () => {
  const spy = jest.spyOn(WebBrowser, "openBrowserAsync");
  const root = create(<Text.Link url="http://nmf.earth">test</Text.Link>).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const btn = root.findByType("TouchableOpacity");
  btn.props.onPress();
  expect(spy).toHaveBeenCalled();
});
