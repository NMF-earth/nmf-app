import React from "react";
import renderer from "react-test-renderer";
import Text from "../";

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
