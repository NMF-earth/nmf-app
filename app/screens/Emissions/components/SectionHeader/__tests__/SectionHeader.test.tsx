import React from "react";
import { render } from "@testing-library/react-native";

import SectionHeader from "../SectionHeader";

jest.unmock("../SectionHeader");

describe("SectionHeader", () => {
  const date = new Date("2020-12-24T03:24:00");

  it("should render when date", () => {
    const tree = render(<SectionHeader date={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when title", () => {
    const tree = render(<SectionHeader title={"some title"} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should not render if no props", () => {
    const tree = render(<SectionHeader />).toJSON();

    expect(tree).toBeUndefined();
  });
});
