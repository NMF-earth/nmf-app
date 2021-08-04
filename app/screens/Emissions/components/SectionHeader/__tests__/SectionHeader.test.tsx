import React from "react";
import { create } from "react-test-renderer";

import SectionHeader from "../SectionHeader";

jest.unmock("../SectionHeader");

describe("SectionHeader", () => {
  const date = new Date("2020-12-24T03:24:00");

  it("should render when user is over budget", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when user is below budget", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when user has budget below 1%", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when co2value equals 0", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when monthlyCarbonBudget equals 0", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when monthlyCarbonBudget and co2value equals 0", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
