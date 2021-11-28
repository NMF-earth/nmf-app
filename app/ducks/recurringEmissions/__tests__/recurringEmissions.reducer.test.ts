import { FoodType } from "carbon-footprint";

import { RecurringEmission, EmissionType, PeriodicityType, WeekDays } from "interfaces";

import recurringEmissions from "../";

describe("RecurringEmissions reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(recurringEmissions.reducer(undefined, {} as any)).toEqual([]);
  });

  it("handle recurring emission creation", () => {
    const recurringEmission: RecurringEmission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodType.nuts,
      value: 200,
      periodType: PeriodicityType.monthly,
      times: 1,
      weekDays: [],
    };
    const action = {
      type: recurringEmissions.actions.createRecurringEmission.toString(),
      payload: recurringEmission,
    };

    expect(recurringEmissions.reducer(undefined, action)).toEqual([recurringEmission]);

    expect(recurringEmissions.reducer([recurringEmission], action)).toEqual([
      recurringEmission,
      recurringEmission,
    ]);
  });

  it("handle emission delete", () => {
    const recurringEmission: RecurringEmission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodType.nuts,
      value: 200,
      periodType: PeriodicityType.weekly,
      weekDays: [WeekDays.friday],
      times: 2,
    };
    const action = {
      type: recurringEmissions.actions.deleteRecurringEmission.toString(),
      payload: recurringEmission.id,
    };

    expect(recurringEmissions.reducer([recurringEmission], action)).toEqual([]);
  });

  it("handle delete all emissions", () => {
    const emission: RecurringEmission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodType.nuts,
      value: 200,
      periodType: PeriodicityType.weekly,
      weekDays: [WeekDays.friday],
      times: 2,
    };
    const action = {
      type: recurringEmissions.actions.deleteAllRecurringEmissions.toString(),
    };

    expect(recurringEmissions.reducer([emission], action)).toEqual([]);
  });

  it("load emissions", () => {
    const recurringEmissionsList: Array<RecurringEmission> = [
      {
        id: "1",
        creationDate: "2020-01-26T11:04:55.334Z",
        emissionType: EmissionType.food,
        emissionModelType: FoodType.beans,
        value: 20,
        periodType: PeriodicityType.monthly,
        weekDays: [],
        times: 2,
      },
      {
        id: "2",
        creationDate: "2020-02-26T11:04:55.334Z",
        emissionType: EmissionType.food,
        emissionModelType: FoodType.beef,
        value: 100,
        periodType: PeriodicityType.weekly,
        weekDays: [WeekDays.friday],
        times: 1,
      },
    ];

    const action = {
      type: recurringEmissions.actions.loadRecurringEmissionsFromImport.toString(),
      payload: recurringEmissionsList,
    };

    expect(recurringEmissions.reducer(undefined, action)).toEqual(recurringEmissionsList);
  });
});
