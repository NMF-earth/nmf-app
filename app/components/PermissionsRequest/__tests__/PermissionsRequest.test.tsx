import React from "react";
import { render } from "@testing-library/react-native";

import PermissionsRequest from "../";

jest.unmock("../");

it("renders correctly PermissionsRequest if camera", () => {
  const tree = render(<PermissionsRequest type={"camera"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly PermissionsRequest if notification", () => {
  const tree = render(<PermissionsRequest type={"notification"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
