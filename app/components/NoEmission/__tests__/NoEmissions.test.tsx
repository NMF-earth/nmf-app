import React from "react";
import renderer from "react-test-renderer";
import NoEmission from "../";

jest.unmock("../");

it("renders correctly NoEmission", () => {
  const tree = renderer.create(<NoEmission addEmission={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
