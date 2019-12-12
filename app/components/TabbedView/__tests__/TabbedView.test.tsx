import React from "react";
import renderer from "react-test-renderer";
import TabbedView from "../";
import { Text } from "react-native";

jest.unmock("../");

it("renders correctly TabbedView", () => {
  const items = [
    {
      title: "Hello Tab 1",
      component: <Text>Some details</Text>
    },
    {
      title: "Hello Tab 1",
      component: <Text>Some details</Text>
    }
  ];
  const tree = renderer.create(<TabbedView items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});
