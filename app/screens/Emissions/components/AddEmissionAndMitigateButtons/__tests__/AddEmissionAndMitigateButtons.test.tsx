import React from "react";
import { create } from "react-test-renderer";

import AddEmissionAndMitigateButtons from "../AddEmissionAndMitigateButtons";

jest.unmock("../AddEmissionAndMitigateButtons");

describe("AddEmissionAndMitigateButtons", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      const tree = create(<AddEmissionAndMitigateButtons />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
