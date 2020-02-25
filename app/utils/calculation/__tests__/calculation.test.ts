import calculation from "../";
import { Emission, EmissionEnum } from "../../../interfaces";
import { FoodEnum, TransportEnum, food, transport } from "carbon-footprint";

const emissionFood: Emission = {
  id: "123",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10
};

const emissionTransport = {
  ...emissionFood,
  emissionModelType: TransportEnum.boat,
  emissionType: EmissionEnum.transport
};

const emissionCustom = {
  ...emissionFood,
  emissionModelType: "custom",
  emissionType: EmissionEnum.custom
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
  it("custom emission", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(calculation.getC02ValueFromEmission(emissionCustom)).toEqual(
      emissionCustom.value
    );
  });
});
