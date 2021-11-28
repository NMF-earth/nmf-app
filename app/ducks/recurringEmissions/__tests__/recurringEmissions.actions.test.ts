import { TransportType, FoodType } from "carbon-footprint";

import { RecurringEmission, EmissionType, PeriodicityType, WeekDays } from "interfaces";

import recurringEmissions from "../";

describe("Emissions actions should", () => {
  it("export expected actions", () => expect(recurringEmissions.actions).toMatchSnapshot());

  it("be able to create a recurring emission", () => {
    const recurringEmission: RecurringEmission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.transport,
      emissionModelType: TransportType.boat,
      value: 200,
      periodType: PeriodicityType.monthly,
      weekDays: [],
      times: 1,
    };

    const expectedAction = {
      type: recurringEmissions.actions.createRecurringEmission.toString(),
      payload: recurringEmission,
    };

    expect(recurringEmissions.actions.createRecurringEmission(recurringEmission)).toEqual(
      expectedAction
    );
  });

  it("be able to delete a recurring emission", () => {
    const expectedAction = {
      type: recurringEmissions.actions.deleteRecurringEmission.toString(),
      payload: "123",
    };

    expect(recurringEmissions.actions.deleteRecurringEmission("123")).toEqual(expectedAction);
  });

  it("be able to load emissions", () => {
    const emissionsList: Array<RecurringEmission> = [
      {
        id: "1",
        creationDate: "2020-01-26T11:04:55.334Z",
        emissionType: EmissionType.transport,
        emissionModelType: TransportType.boat,
        value: 200,
        periodType: PeriodicityType.monthly,
        weekDays: [],
        times: 1,
      },
      {
        id: "2",
        creationDate: "2020-01-26T11:04:55.334Z",
        emissionType: EmissionType.food,
        emissionModelType: FoodType.beans,
        value: 200,
        periodType: PeriodicityType.weekly,
        weekDays: [WeekDays.friday],
        times: 2,
      },
    ];

    const expectedAction = {
      type: recurringEmissions.actions.loadRecurringEmissionsFromImport.toString(),
      payload: emissionsList,
    };

    expect(recurringEmissions.actions.loadRecurringEmissionsFromImport(emissionsList)).toEqual(
      expectedAction
    );
  });

  it("be able to delete all recurring emissions", () => {
    const expectedAction = {
      type: recurringEmissions.actions.deleteAllRecurringEmissions.toString(),
      payload: undefined,
    };

    expect(recurringEmissions.actions.deleteAllRecurringEmissions()).toEqual(expectedAction);
  });
});
