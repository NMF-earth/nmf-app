import React from "react";

// Universal Test Renderer requires text to be in RCTText elements
export default {
  Primary: (props) => React.createElement("RCTText", { ...props, testID: "Primary" }, props.children),
  Secondary: (props) => React.createElement("RCTText", { ...props, testID: "Secondary" }, props.children),
  Tertiary: (props) => React.createElement("RCTText", { ...props, testID: "Tertiary" }, props.children),
  H1: (props) => React.createElement("RCTText", { ...props, testID: "H1" }, props.children),
  H2: (props) => React.createElement("RCTText", { ...props, testID: "H2" }, props.children),
  H3: (props) => React.createElement("RCTText", { ...props, testID: "H3" }, props.children),
  Link: (props) => React.createElement("RCTText", { ...props, testID: "Link" }, props.children),
  Header: (props) => React.createElement("RCTText", { ...props, testID: "Header" }, props.children),
};
