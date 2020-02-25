import React from "react";
import renderer from "react-test-renderer";
import AddEmissionAndMitigateButtons from "../AddEmissionAndMitigateButtons";

const props = {
  navigation: {
    push: jest.fn(),
    navigate: jest.fn()
  }
};

jest.unmock("../AddEmissionAndMitigateButtons");

it("AddEmissionAndMitigateButtons renders correctly", () => {
  const tree = renderer
    .create(<AddEmissionAndMitigateButtons {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("AddEmissionAndMitigateButtons should navigate if any button is pressed", () => {
  const root = renderer.create(<AddEmissionAndMitigateButtons {...props} />)
    .root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const buttons = root.findAllByType("Button.Primary");

  buttons[0].props.onPress();
  buttons[1].props.onPress();
  expect(props.navigation.navigate).toHaveBeenCalled();
  expect(props.navigation.push).toHaveBeenCalled();
});
