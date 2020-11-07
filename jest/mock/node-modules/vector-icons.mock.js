import React, { Component } from "react";

import { createMock } from "../../utils";

const createIconSet = () => jest.fn().mockResolvedValue();
const MockedIonicons = createMock("Ionicons");
const MockedMaterialCommunityIcons = createMock("MaterialCommunityIcons");

class Ionicons extends Component {
  render() {
    return <MockedIonicons {...this.props} />;
  }
}

class MaterialCommunityIcons extends Component {
  render() {
    return <MockedMaterialCommunityIcons {...this.props} />;
  }
}

export { Ionicons, MaterialCommunityIcons, createIconSet };
