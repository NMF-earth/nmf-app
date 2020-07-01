import {
  FoodEnum,
  TransportEnum,
  StreamingEnum,
  ElectricityEnum,
} from "carbon-footprint";

enum EmissionEnum {
  food = "food",
  transport = "transport",
  purchase = "purchase",
  streaming = "streaming",
  electricity = "electricity",
  custom = "custom",
}

interface EmissionPayload {
  name?: string;
  emissionType: EmissionEnum;
  emissionModelType:
    | FoodEnum
    | TransportEnum
    | StreamingEnum
    | ElectricityEnum
    | "custom";
  value: number;
  creationDate: string;
  location?: ElectricityEnum;
}

interface Emission extends EmissionPayload {
  id: string;
  isMitigated: boolean;
}

export { Emission, EmissionPayload, EmissionEnum };
