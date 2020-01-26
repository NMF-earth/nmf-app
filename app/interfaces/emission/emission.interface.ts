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

interface Emission {
  id?: string;
  creationDate?: number;
  name?: string;
  emissionType: EmissionEnum;
  isMitigated?: boolean;
  value: number;
  emissionModelType: FoodEnum | TransportEnum | "custom";
}

export { Emission, EmissionEnum, EmissionPurchaseEnum };
