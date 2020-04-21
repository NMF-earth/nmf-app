import React from "react";
import renderer from "react-test-renderer";
import SectionHeader from "../SectionHeader";

jest.unmock("../SectionHeader");

it("should render SectionHeader when user is over budget", () => {
  const date = new Date("2020-12-24T03:24:00");

  const tree = renderer
    .create(
      <SectionHeader co2value={30} monthlyCarbonBudget={20} date={date} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render SectionHeader when user is below budget", () => {
  const date = new Date("2020-12-24T03:24:00");

  const tree = renderer
    .create(
      <SectionHeader co2value={10} monthlyCarbonBudget={20} date={date} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render SectionHeader when user has budget below 0.5%", () => {
  const date = new Date("2020-12-24T03:24:00");

  const tree = renderer
    .create(
      <SectionHeader co2value={1} monthlyCarbonBudget={1000} date={date} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
