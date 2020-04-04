import React from "react";
import renderer from "react-test-renderer";
import SectionHeader from "../SectionHeader";

it("should render SectionHeader", () => {
  const tree = renderer.create(<SectionHeader date={"month year"} />).toJSON();

  expect(tree).toMatchSnapshot();
});
