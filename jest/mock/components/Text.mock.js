import React from "react";

// Universal Test Renderer requires text to be in RCTText elements
export default {
  Primary: (props) => React.createElement("RCTText", props, props.children),
  Secondary: (props) => React.createElement("RCTText", props, props.children),
  Tertiary: (props) => React.createElement("RCTText", props, props.children),
  H1: (props) => React.createElement("RCTText", props, props.children),
  H2: (props) => React.createElement("RCTText", props, props.children),
  H3: (props) => React.createElement("RCTText", props, props.children),
  Link: (props) => React.createElement("RCTText", props, props.children),
  Header: (props) => React.createElement("RCTText", props, props.children),
};
