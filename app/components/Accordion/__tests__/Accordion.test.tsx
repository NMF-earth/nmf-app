import React from "react";
import { create } from "react-test-renderer";

import Accordion from "../";

jest.unmock("../");

describe("Accordion", () => {
  it("renders correctly", () => {
    const tree = create(
      <Accordion>
        <Accordion.Item title="Test title 1">Test Description 1</Accordion.Item>

        <Accordion.Item title="Test title 2">Test Description 2</Accordion.Item>
      </Accordion>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
