import React from "react";
import renderer from "react-test-renderer";
import EmissionListItem from "../EmissionListItem";

jest.unmock("../EmissionListItem.tsx");

const TITLE = "170 g of red meat";
const SUBTITLE = "2.1 kg CO2";

it("EmissionListItem renders correctly by default", () => {
  const tree = renderer
    .create(<EmissionListItem title={TITLE} subTitle={SUBTITLE} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with restaurant icon", () => {
  const tree = renderer
    .create(<EmissionListItem title={TITLE} subTitle={SUBTITLE} restaurant />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with plane icon", () => {
  const tree = renderer
    .create(<EmissionListItem title={TITLE} subTitle={SUBTITLE} plane />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with build icon", () => {
  const tree = renderer
    .create(<EmissionListItem title={TITLE} subTitle={SUBTITLE} build />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
