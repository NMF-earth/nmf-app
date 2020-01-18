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
  durationHours: number;
}

interface EmissionPurchase {
  purchaseType: EmissionPurchaseEnum;
}

interface Emission {
  id: number;
  creationDate: string;
  customName?: string;
  emissionType: EmissionEnum;
  co2eqKilograms: number;
  co2eqModelVersion: number;
  isMitigated: boolean;
  food?: EmissionFood;
  transport?: EmissionTransport;
  purchase?: EmissionPurchase;
}

export {
  Emission,
  EmissionFood,
  EmissionPurchase,
  EmissionTransport,
  EmissionEnum,
  EmissionPurchaseEnum
};
