import { FoodEnum } from "carbon-footprint";
import React from "react";

import { create } from "react-test-renderer";
import { FormattedProvider } from "react-native-globalize";

import { TextInput } from "components";

import { EmissionEnum } from "../../../interfaces/emission/emission.interface";
import { emissions } from "../../../ducks";
import AddEmissionScreen from "../AddEmissionScreen";
import { Food } from "../components";

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

it("AddEmissionScreen should test if the states are loaded with linkingQueryParams", () => {
  const localProps = {
    ...props,
    route: {
      params: {
        linkingQueryParams: {
          name: "new emission name",
          emissionType: EmissionEnum.food,
          foodType: FoodEnum.chocolate,
          quantity: 17,
        },
      },
    },
  };

  const root = create(
    <FormattedProvider locale="en">
      <AddEmissionScreen {...localProps} />
    </FormattedProvider>
  ).root;

  expect(root.findByType(TextInput).props.value).toEqual("new emission name");
  expect(root.findByType(Food).props.foodType).toEqual("chocolate");
  expect(
    root.props.children.props.route.params.linkingQueryParams.quantity
  ).toEqual(17);
});
