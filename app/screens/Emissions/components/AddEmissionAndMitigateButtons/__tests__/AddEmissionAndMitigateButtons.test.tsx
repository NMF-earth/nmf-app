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
  const buttonPrimary = root.findByType("Button.Primary");
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const buttonSecondary = root.findByType("Button.Secondary");

  buttonPrimary.props.onPress();
  buttonSecondary.props.onPress();
  expect(props.navigation.navigate).toHaveBeenCalled();
  expect(props.navigation.push).toHaveBeenCalled();
});
