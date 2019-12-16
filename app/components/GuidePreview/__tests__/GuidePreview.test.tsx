import React from "react";
import renderer from "react-test-renderer";
import GuidePreview from "../";

it("renders correctly TabbedView", () => {
  const tree = renderer
    .create(
      <GuidePreview
        title="Foo"
        listItems={[]}
        onPress={() => {
          // do nothing.
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
