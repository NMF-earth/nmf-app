import { FoodEnum, TransportEnum, StreamingEnum } from "carbon-footprint";

enum EmissionEnum {
  food = "food",
  transport = "transport",
  purchase = "purchase",
  streaming = "streaming",
  custom = "custom",
}

interface EmissionPayload {
  name?: string;
  emissionType: EmissionEnum;
  emissionModelType: FoodEnum | TransportEnum | StreamingEnum | "custom";
  value: number;
  creationDate: string;
}

interface Emission extends EmissionPayload {
  id: string;
  isMitigated: boolean;
}

export { Emission, EmissionPayload, EmissionEnum };
