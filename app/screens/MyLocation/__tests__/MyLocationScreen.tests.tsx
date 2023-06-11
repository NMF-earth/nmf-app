/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { ElectricityType } from "carbon-footprint";

import MyLocationScreen from "../MyLocationScreen";

// jest.unmock("../");

it("MyLocationScreen renders correctly", () => {
  const tree = create(<MyLocationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Change current location to ireland", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const useDispatchMock = jest.spyOn(require("react-redux"), "useDispatch");

  useSelectorMock.mockReturnValue(ElectricityType.france);

  const dummyDispatch = jest.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);

  render(<MyLocationScreen />);
  fireEvent.press(screen.root.findByProps({ title: ElectricityType.ireland.toUpperCase() }));

  expect(dummyDispatch).toHaveBeenCalled();

  useSelectorMock.mockReturnValue(ElectricityType.ireland);

  expect(screen.root.findByProps({ title: ElectricityType.ireland.toUpperCase() })).toBeTruthy();

  useSelectorMock.mockRestore();
  useDispatchMock.mockRestore();
});
