import React from "react";
import { create } from "react-test-renderer";
import { FoodType, TransportType } from "carbon-footprint";

import { emissions, recurringEmissions } from "ducks";
import { RecurringEmission, Emission, EmissionType, PeriodicityType } from "interfaces";
import { t } from "utils";

import { selectors } from "../ducks";
import EmissionsScreen from "../EmissionsScreen";

const emissionNotMitigatedOld: Emission = {
  id: "1",
  creationDate: new Date("2020-01-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: Emission = {
  id: "2",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: Emission = {
  id: "3",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  isMitigated: true,
  value: 100,
};

const recurringEmission: RecurringEmission = {
  id: "4",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  value: 100,
  periodType: PeriodicityType.monthly,
  weekDays: [],
  times: 1,
};

const state = {
  [emissions.namespace]: [emissionNotMitigated, emissionMitigated, emissionNotMitigatedOld],
  [recurringEmissions.namespace]: [recurringEmission],
};

it("EmissionsScreen renders correctly", () => {
  const props = {
    emissions: selectors.getEmissions(state),
    recurringEmissions: {
      data: selectors.getRecurringEmisions(state),
      title: t("EMISSIONS_SCREEN_RECURRING_EMISSIONS"),
    },
  };
  const tree = create(<EmissionsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsScreen renders correctly if only normal emissions", () => {
  const props = {
    emissions: selectors.getEmissions(state),
  };
  const tree = create(<EmissionsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsScreen renders correctly if only recurring emissions", () => {
  const props = {
    recurringEmissions: {
      data: selectors.getRecurringEmisions(state),
      title: t("EMISSIONS_SCREEN_RECURRING_EMISSIONS"),
    },
  };
  const tree = create(<EmissionsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsScreen renders correctly if no emissions", () => {
  const tree = create(
    <EmissionsScreen emissions={[]} recurringEmissions={{ title: null, data: [] }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
