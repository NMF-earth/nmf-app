import React from "react";

const createMock = (name) => {
  const component = (props) => React.createElement(name, props);

  component.displayName = name;

  return component;
};

export { createMock };
