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
import { t } from "../../translations";
import { MeasureType } from "../../../types/measureType";

const emissionFood: Emission = {
  id: "123",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionFoodRecent: Emission = {
  ...emissionFood,
  creationDate: "2020-03-27T11:04:55.334Z",
};

const emissionTransport: Emission = {
  ...emissionFood,
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
};

const emissionStreaming: Emission = {
  ...emissionFood,
  emissionModelType: StreamingType.HDVideo,
  emissionType: EmissionType.streaming,
  location: ElectricityType.argentina,
};

const emissionElectricity: Emission = {
  ...emissionFood,
  emissionModelType: ElectricityType.france,
  emissionType: EmissionType.electricity,
};

const emissionPurchase: Emission = {
  ...emissionFood,
  emissionModelType: PurchaseType.computer,
  emissionType: EmissionType.purchase,
};

const emissionFashion: Emission = {
  ...emissionFood,
  emissionModelType: FashionType.coat,
  emissionType: EmissionType.fashion,
};

const emissionMeal: Emission = {
  ...emissionFood,
  emissionModelType: MealType.highMeat,
  emissionType: EmissionType.meal,
};

const emissionCustom: Emission = {
  ...emissionFood,
  emissionModelType: "custom",
  emissionType: EmissionType.custom,
};

const emissionProductScanned: Emission = {
  ...emissionFood,
  emissionModelType: "productScanned",
  emissionType: EmissionType.custom,
};

const imperialMetricBaseline: number[] = [
  0.02,
  0.4,
  0.454,
  0.9,
  1,
  1.1,
  7,
  62,
  150,
  777,
  1000,
  1258,
  13573,
];

const unitsBasline: {
  toGrams: number[];
  toKilograms: number[];
  toTonnes: number[];
  toOunces: number[];
  toPounds: number[];
} = {
  toGrams: [0.02, 0.4, 0.9, 1],
  toKilograms: [1.1, 7, 62, 150, 777, 1000],
  toTonnes: [1258, 13573],
  toOunces: [0.02, 0.4, 0.454],
  toPounds: [0.9, 7, 777, 1258],
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
    expect(calculation.getC02ValueFromEmission(emissionCustom)).toEqual(emissionCustom.value);
  });
  it("product scanned emission", () => {
    expect(calculation.getC02ValueFromEmission(emissionProductScanned)).toEqual(
      emissionProductScanned.value
    );
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

describe("getImperialMetricValue should return the correct measurement value", () => {
  for (const value of imperialMetricBaseline) {
    it("for a mass value in metric", () => {
      expect(calculation.getImperialMetricValue(value, true, MeasureType.mass)).toEqual(value);
    });

    it("for a length value in metric", () => {
      expect(calculation.getImperialMetricValue(value, true, MeasureType.length)).toEqual(value);
    });

    it("for a mass value in Imperial", () => {
      expect(calculation.getImperialMetricValue(value, false, MeasureType.mass)).toEqual(
        value * 2.205
      );
    });

    it("for a length value in Imperial", () => {
      expect(calculation.getImperialMetricValue(value, false, MeasureType.length)).toEqual(
        value / 1.609
      );
    });
  }
});

describe("getDisplayUnitsValue should convert the given kilogram value to", () => {
  it("grams", () => {
    for (const kgValue of unitsBasline.toGrams) {
      expect(calculation.getDisplayUnitsValue(kgValue, true)).toEqual(kgValue * 1000);
    }
  });

  it("kilograms", () => {
    for (const kgValue of unitsBasline.toKilograms) {
      expect(calculation.getDisplayUnitsValue(kgValue, true)).toEqual(kgValue);
    }
  });

  it("tonnes", () => {
    for (const kgValue of unitsBasline.toTonnes) {
      expect(calculation.getDisplayUnitsValue(kgValue, true)).toEqual(kgValue / 1000);
    }
  });

  it("ounces", () => {
    for (const kgValue of unitsBasline.toOunces) {
      expect(calculation.getDisplayUnitsValue(kgValue, false)).toEqual(kgValue * 2.205 * 16);
    }
  });

  it("pounds", () => {
    for (const kgValue of unitsBasline.toPounds) {
      expect(calculation.getDisplayUnitsValue(kgValue, false)).toEqual(kgValue * 2.205);
    }
  });
});

describe("getDisplayUnits should return the correct units given a kilogram value that should be converted to", () => {
  it("grams", () => {
    for (const kgValue of unitsBasline.toGrams) {
      expect(calculation.getDisplayUnits(kgValue, true)).toEqual(t("GRAMS_SYMBOL"));
      expect(calculation.getDisplayUnits(kgValue, true, false)).toEqual(t("GRAMS_FULL"));
    }
  });

  it("kilograms", () => {
    for (const kgValue of unitsBasline.toKilograms) {
      expect(calculation.getDisplayUnits(kgValue, true)).toEqual(t("KILOGRAMS_SYMBOL"));
      expect(calculation.getDisplayUnits(kgValue, true, false)).toEqual(t("KILOGRAMS_FULL"));
    }
  });

  it("tonnes", () => {
    for (const kgValue of unitsBasline.toTonnes) {
      expect(calculation.getDisplayUnits(kgValue, true)).toEqual(t("TONNES_SYMBOL"));
      expect(calculation.getDisplayUnits(kgValue, true, false)).toEqual(t("TONNES_FULL"));
    }
  });

  it("ounces", () => {
    for (const kgValue of unitsBasline.toOunces) {
      expect(calculation.getDisplayUnits(kgValue, false)).toEqual(t("OUNCES_SYMBOL"));
      expect(calculation.getDisplayUnits(kgValue, false, false)).toEqual(t("OUNCES_FULL"));
    }
  });

  it("pounds", () => {
    for (const kgValue of unitsBasline.toPounds) {
      expect(calculation.getDisplayUnits(kgValue, false)).toEqual(t("POUNDS_SYMBOL"));
      expect(calculation.getDisplayUnits(kgValue, false, false)).toEqual(t("POUNDS_FULL"));
    }
  });
});
