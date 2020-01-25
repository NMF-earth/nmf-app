import { FoodEnum, TransportEnum } from "carbon-footprint";

enum EmissionEnum {
  food = "food",
  transport = "transport",
  purchase = "purchase",
  custom = "custom"
}

enum EmissionPurchaseEnum {
  tv = "tv",
  computer = "computer",
  phone = "phone",
  tablet = "tablet",
  car = "car"
}

interface EmissionFood {
  foodType: FoodEnum;
  quantityKilograms: number;
}

interface EmissionTransport {
  transportType: TransportEnum;
  durationHours?: number;
  distanceKilometers?: number;
}

interface EmissionPurchase {
  purchaseType: EmissionPurchaseEnum;
}

interface Emission {
  id: string;
  creationDate: number;
  name?: string;
  emissionType: EmissionEnum;
  isMitigated: boolean;
  value: number;
  unit: string;
  emissionModelType: FoodEnum | TransportEnum | "custom";
}

export {
  Emission,
  EmissionFood,
  EmissionPurchase,
  EmissionTransport,
  EmissionEnum,
  EmissionPurchaseEnum
};
