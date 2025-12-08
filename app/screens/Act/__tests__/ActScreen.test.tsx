import React from "react";
import { render } from "@testing-library/react-native";

import ActScreen from "../ActScreen";

const stripReactInternals = (node: unknown): unknown => {
  if (!node) return node;
  if (Array.isArray(node)) {
    return node.map(stripReactInternals);
  }
  if (typeof node === "object") {
    const newNode = { ...node };

    // Remove volatile and internal keys
    const blockedKeys = [
      "actualDuration",
      "actualStartTime",
      "selfBaseDuration",
      "treeBaseDuration",
      "_owner",
      "_store",
      "return",
      "alternate",
      "child",
      "sibling",
      "stateNode" // stateNode often links back to fibers
    ];

    blockedKeys.forEach(key => delete newNode[key]);

    // Recursively clean all remaining properties
    // We break cycles by removing the linking keys above
    Object.keys(newNode).forEach((key) => {
      newNode[key] = stripReactInternals(newNode[key]);
    });

    return newNode;
  }
  return node;
};

it("ActScreen renders correctly", () => {
  const tree = render(<ActScreen />).toJSON();
  expect(stripReactInternals(tree)).toMatchSnapshot();
});
