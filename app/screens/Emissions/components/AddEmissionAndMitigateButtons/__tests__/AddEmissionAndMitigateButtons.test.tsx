import React from "react";
import renderer from "react-test-renderer";
import AddEmissionAndMitigateButtons from "../AddEmissionAndMitigateButtons";

jest.unmock("../AddEmissionAndMitigateButtons");

describe("AddEmissionAndMitigateButtons", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<AddEmissionAndMitigateButtons />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
