import React from "react";
import renderer from "react-test-renderer";
import AddEmissionScreen from "../AddEmissionScreen";
import { emissions } from "../../../ducks";

const props = {
  navigation: {
    goBack: jest.fn()
  }
};

it("AddEmissionScreen renders correctly", () => {
  const tree = renderer.create(<AddEmissionScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("AddEmissionScreen should go back and call usedispatch if save button is pressed", () => {
  const root = renderer.create(<AddEmissionScreen {...props} />).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const button = root.findByType("Button.Primary");
  jest.spyOn(emissions.actions, "createEmission");

  button.props.onPress();
  expect(props.navigation.goBack).toHaveBeenCalled();
  expect(emissions.actions.createEmission).toHaveBeenCalled();
});
