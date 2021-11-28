import React from "react";
import { create } from "react-test-renderer";

import SectionHeader from "../SectionHeader";

jest.unmock("../SectionHeader");

describe("SectionHeader", () => {
  const date = new Date("2020-12-24T03:24:00");

  it("should render when date", () => {
    const tree = create(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when title", () => {
    const tree = create(<SectionHeader title={"some title"} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should not render if no props", () => {
    const tree = create(<SectionHeader />).toJSON();

    expect(tree).toBeNull();
  });
});
