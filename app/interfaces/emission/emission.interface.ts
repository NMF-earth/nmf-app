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

interface EmissionPayload {
  name?: string;
  emissionType: EmissionEnum;
  emissionModelType: FoodEnum | TransportEnum | "custom";
  value: number;
}

interface Emission extends EmissionPayload {
  id: string;
  creationDate: string;
  isMitigated: boolean;
}

export { Emission, EmissionPayload, EmissionEnum, EmissionPurchaseEnum };
