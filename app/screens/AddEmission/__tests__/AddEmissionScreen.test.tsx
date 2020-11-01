import React from "react";
import { create } from "react-test-renderer";
import { FormattedProvider } from "react-native-globalize";

import { emissions } from "ducks";

import AddEmissionScreen from "../AddEmissionScreen";

const props = {
  navigation: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
};

const RealDate = Date.now;

beforeAll(() => {
  Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
});

afterAll(() => {
  Date.now = RealDate;
});

it("AddEmissionScreen renders correctly", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <AddEmissionScreen {...props} />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("AddEmissionScreen should go back and call usedispatch if save button is pressed", () => {
  const root = create(
    <FormattedProvider locale="en">
      <AddEmissionScreen {...props} />
    </FormattedProvider>
  ).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const button = root.findByType("Button.Primary");
  jest.spyOn(emissions.actions, "createEmission");

  button.props.onPress();
  expect(props.navigation.goBack).toHaveBeenCalled();
  expect(emissions.actions.createEmission).toHaveBeenCalled();
});
