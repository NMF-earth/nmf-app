import React from "react";
import { create } from "react-test-renderer";
import { GlobalizeProvider } from "react-native-globalize";

import AddEmissionScreen from "../AddEmissionScreen";

const RealDate = Date.now;

beforeAll(() => {
  Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
});

afterAll(() => {
  Date.now = RealDate;
});

it("AddEmissionScreen renders correctly", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <AddEmissionScreen />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
