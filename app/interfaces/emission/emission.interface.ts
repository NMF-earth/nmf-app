export enum EmissionTypeEnum {
  food = "food",
  transport = "transport",
  purchase = "purchase",
  custom = "custom"
}

export enum EmissionFoodTypeEnum {
  redMeat = "red meat",
  whiteMeat = "white meat",
  fish = "fish"
}

export enum EmissionTransportTypeEnum {
  car = "car",
  plane = "plane",
  bus = "bus",
  boat = "boat"
}

export enum EmissionPurchaseTypeEnum {
  tv = "tv",
  computer = "computer",
  phone = "phone",
  tablet = "tablet",
  car = "car"
}

export interface EmissionFood {
  foodType: EmissionFoodTypeEnum;
  quantityKilograms: number;
}

export interface EmissionTransport {
  transportType: EmissionTransportTypeEnum;
  durationHours: number;
}

export interface EmissionPurchase {
  purchaseType: EmissionPurchaseTypeEnum;
}

export interface Emission {
  id: number;
  creationDate: string;
  customName?: string;
  emissionType: EmissionTypeEnum;
  co2eqKilograms: number;
  co2eqModelVersion: number;
  isMitigated: boolean;
  food?: EmissionFood;
  transport?: EmissionTransport;
  purchase?: EmissionPurchase;
}
