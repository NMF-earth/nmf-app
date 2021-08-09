import {
  FoodType,
  TransportType,
  StreamingType,
  ElectricityType,
  streaming,
  food,
  transport,
  electricity,
  getInternetUsageCarbonImpact,
  FashionType,
  PurchaseType,
  MealType,
  meal,
  purchase,
  fashion,
} from "carbon-footprint";

import { Emission, EmissionType } from "interfaces";

import calculation from "../";

const emissionFood: Emission = {
  id: "123",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionFoodRecent = {
  ...emissionFood,
  creationDate: "2020-03-27T11:04:55.334Z",
};

const emissionTransport = {
  ...emissionFood,
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
};

const emissionStreaming = {
  ...emissionFood,
  emissionModelType: StreamingType.HDVideo,
  emissionType: EmissionType.streaming,
  location: ElectricityType.argentina,
};

const emissionElectricity = {
  ...emissionFood,
  emissionModelType: ElectricityType.france,
  emissionType: EmissionType.electricity,
};

const emissionPurchase = {
  ...emissionFood,
  emissionModelType: PurchaseType.computer,
  emissionType: EmissionType.purchase,
};

const emissionFashion = {
  ...emissionFood,
  emissionModelType: FashionType.coat,
  emissionType: EmissionType.fashion,
};

const emissionMeal = {
  ...emissionFood,
  emissionModelType: MealType.highMeat,
  emissionType: EmissionType.meal,
};

const emissionCustom = {
  ...emissionFood,
  emissionModelType: "custom",
  emissionType: EmissionType.custom,
};

describe("getC02ValueFromEmission should return the correct co2 emitted value for", () => {
  it("food emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionFood)).toEqual(
      food.beans * emissionFood.value
    );
  });
  it("transport emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionTransport)).toEqual(
      transport.boat * emissionTransport.value
    );
  });
  it("meal emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionMeal)).toEqual(
      meal.highMeat * emissionMeal.value
    );
  });
  it("purchase emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionPurchase)).toEqual(
      purchase.computer * emissionPurchase.value
    );
  });
  it("fashion emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionFashion)).toEqual(
      fashion.coat * emissionFashion.value
    );
  });
  it("streaming emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionStreaming)).toEqual(
      getInternetUsageCarbonImpact(
        emissionStreaming.value,
        streaming[emissionStreaming.emissionModelType] * emissionStreaming.value,
        emissionStreaming.location
      )
    );
  });
  it("electricity emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionElectricity)).toEqual(
      emissionElectricity.value * electricity[emissionElectricity.emissionModelType]
    );
  });
  it("custom emission", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(calculation.getC02ValueFromEmission(emissionCustom)).toEqual(emissionCustom.value);
  });
});

describe("getFlightType should return the correct flight type for", () => {
  it("a short flight", () => {
    expect(calculation.getFlightType(60)).toEqual(TransportType.shortHaulFlight);
  });
  it("a medium flight", () => {
    expect(calculation.getFlightType(4 * 60)).toEqual(TransportType.mediumHaulFlight);
  });
  it("a long flight", () => {
    expect(calculation.getFlightType(8 * 60)).toEqual(TransportType.longHaulFlight);
  });
});

describe("getFlightEmissionValue should return the correct emission value for", () => {
  it("a short flight", () => {
    expect(calculation.getFlightEmissionValue(60)).toEqual(
      (((588 * 1000) / (60 + 15) + (1543 * 1000) / (2 * 60 + 35)) / 2) * 60
    );
  });
  it("a medium flight", () => {
    expect(calculation.getFlightEmissionValue(4 * 60)).toEqual(
      (((2255 * 1000) / (3 * 60 + 25) + (4205 * 1000) / (5 * 60 + 45)) / 2) * 4 * 60
    );
  });
  it("a long flight", () => {
    expect(calculation.getFlightEmissionValue(8 * 60)).toEqual(
      (((5837 * 1000) / (8 * 60 + 15) + (11648 * 1000) / (14 * 60 + 30)) / 2) * 8 * 60
    );
  });
});

describe("getLatestEmission should return the latest emission emitted", () => {
  it("if no emissions", () => {
    expect(calculation.getLatestEmission(null)).toEqual(null);
  });

  it("if no emission", () => {
    expect(calculation.getLatestEmission([])).toEqual(null);
  });

  it("if one emission, return this emission", () => {
    expect(calculation.getLatestEmission([emissionFood])).toEqual(emissionFood);
  });

  it("if several emissions, return the most recent emission", () => {
    expect(calculation.getLatestEmission([emissionFood, emissionFoodRecent])).toEqual(
      emissionFoodRecent
    );
  });
});

describe("getCarbonIntensityInGramPerKWHromKgPerJoules should convert data from kgCO2/J to gCO2/kWh", () => {
  it("if no emissions", () => {
    expect(calculation.getCarbonIntensityInGramPerKWHromKgPerJoules(electricity.france)).toEqual(
      35
    );
  });
});
