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

type EmissionModel =
  | FoodEnum
  | TransportEnum
  | StreamingEnum
  | ElectricityEnum
  | "custom";

interface EmissionPayload {
  name?: string;
  emissionType: EmissionEnum;
  emissionModelType: EmissionModel;
  value: number;
  creationDate: string;
  location?: ElectricityEnum;
}

interface Emission extends EmissionPayload {
  id: string;
  isMitigated: boolean;
}

export { Emission, EmissionPayload, EmissionEnum, EmissionModel };
