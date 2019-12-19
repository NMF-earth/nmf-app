import React from "react";

const createMock = name => props => React.createElement(name, props);

export { createMock };
