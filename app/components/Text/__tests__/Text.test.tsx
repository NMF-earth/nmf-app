import React from "react";
import renderer from "react-test-renderer";
import Text from "../";

jest.unmock("../");

/* H1 Tests */

it("renders correctly H1", () => {
  const tree = renderer.create(<Text.H1>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 darkGray", () => {
  const tree = renderer.create(<Text.H1 darkGray>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H1 lightGray", () => {
  const tree = renderer.create(<Text.H1 lightGray>test</Text.H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H2 Tests */

it("renders correctly H2", () => {
  const tree = renderer.create(<Text.H2>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 darkGray", () => {
  const tree = renderer.create(<Text.H2 darkGray>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H2 lightGray", () => {
  const tree = renderer.create(<Text.H2 lightGray>test</Text.H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* H3 Tests */

it("renders correctly H3", () => {
  const tree = renderer.create(<Text.H3>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 darkGray", () => {
  const tree = renderer.create(<Text.H3 darkGray>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly H3 lightGray", () => {
  const tree = renderer.create(<Text.H3 lightGray>test</Text.H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Primary Tests */

it("renders correctly Primary", () => {
  const tree = renderer.create(<Text.Primary>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary darkGray", () => {
  const tree = renderer
    .create(<Text.Primary darkGray>test</Text.Primary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary lightGray", () => {
  const tree = renderer
    .create(<Text.Primary lightGray>test</Text.Primary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary green", () => {
  const tree = renderer
    .create(<Text.Primary green>test</Text.Primary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary white", () => {
  const tree = renderer
    .create(<Text.Primary white>test</Text.Primary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Primary bold", () => {
  const tree = renderer.create(<Text.Primary bold>test</Text.Primary>).toJSON();
  expect(tree).toMatchSnapshot();
});

/* Primary Tests */

it("renders correctly Secondary", () => {
  const tree = renderer.create(<Text.Secondary>test</Text.Secondary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary darkGray", () => {
  const tree = renderer
    .create(<Text.Secondary darkGray>test</Text.Secondary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary lightGray", () => {
  const tree = renderer
    .create(<Text.Secondary lightGray>test</Text.Secondary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary green", () => {
  const tree = renderer
    .create(<Text.Secondary green>test</Text.Secondary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary white", () => {
  const tree = renderer
    .create(<Text.Secondary white>test</Text.Secondary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Secondary bold", () => {
  const tree = renderer
    .create(<Text.Secondary bold>test</Text.Secondary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* Tertiary Tests */

it("renders correctly Tertiary", () => {
  const tree = renderer.create(<Text.Tertiary>test</Text.Tertiary>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary darkGray", () => {
  const tree = renderer
    .create(<Text.Tertiary darkGray>test</Text.Tertiary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary lightGray", () => {
  const tree = renderer
    .create(<Text.Tertiary lightGray>test</Text.Tertiary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary green", () => {
  const tree = renderer
    .create(<Text.Tertiary green>test</Text.Tertiary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary white", () => {
  const tree = renderer
    .create(<Text.Tertiary white>test</Text.Tertiary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly Tertiary bold", () => {
  const tree = renderer
    .create(<Text.Tertiary bold>test</Text.Tertiary>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
