import React from "react";
import { create } from "react-test-renderer";

import PermissionsRequest from "../";

jest.unmock("../");

it("renders correctly PermissionsRequest if camera", () => {
  const tree = create(<PermissionsRequest type={"camera"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly PermissionsRequest if notification", () => {
  const tree = create(<PermissionsRequest type={"notification"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
