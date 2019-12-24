import React, { Component } from "react";
import { createMock } from "../../utils";

const MockedIonicons = createMock("Ionicons");

const createIconSet = () => jest.fn().mockResolvedValue();
class Ionicons extends Component {
  render() {
    return <MockedIonicons {...this.props} />;
  }
}

export { Ionicons, createIconSet };
