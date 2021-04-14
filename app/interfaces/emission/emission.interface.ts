import {
  FoodType,
  TransportType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
} from "carbon-footprint";

enum EmissionType {
  food = "food",
  transport = "transport",
  purchase = "purchase",
  streaming = "streaming",
  electricity = "electricity",
  fashion = "fashion",
  custom = "custom",
}

type EmissionModel =
  | FoodType
  | TransportType
  | StreamingType
  | ElectricityType
  | PurchaseType
  | FashionType
  | "custom";

interface EmissionPayload {
  name?: string;
  emissionType: EmissionType;
  emissionModelType: EmissionModel;
  value: number;
  creationDate: string;
  location?: ElectricityType;
}

interface Emission extends EmissionPayload {
  id: string;
  isMitigated: boolean;
}

export { Emission, EmissionPayload, EmissionType, EmissionModel };
