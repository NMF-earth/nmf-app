import { TransportEnum, FoodEnum } from "carbon-footprint";
import { EmissionEnum } from "../../interfaces";
import { t } from "../translations";

const getTranslationModelType = emissionModelType => {
  switch (emissionModelType) {
    case EmissionEnum.custom:
      return t("CUSTOM");
    case FoodEnum.redMeat:
      return t("RED_MEAT");
    case FoodEnum.whiteMeat:
      return t("WHITE_MEAT");
    case TransportEnum.shortHaulFlight:
    case TransportEnum.mediumHaulFlight:
    case TransportEnum.longHaulFlight:
      return t("PLANE");
    case TransportEnum.train:
      return t("TRAIN");
    case TransportEnum.car:
      return t("CAR");
    case TransportEnum.boat:
      return t("BOAT");
    case TransportEnum.bus:
      return t("BUS");
    default:
      return t("CUSTOM");
  }
};

export default { getTranslationModelType };
