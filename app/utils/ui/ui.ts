import { TransportEnum, FoodEnum } from "carbon-footprint";
import { EmissionEnum } from "../../interfaces";
import { t } from "../translations";

const getTranslationModelType = (emissionModelType) => {
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
    case TransportEnum.plane:
      return t("PLANE");
    case TransportEnum.train:
      return t("TRAIN");
    case TransportEnum.car:
      return t("CAR");
    case TransportEnum.boat:
      return t("BOAT");
    case TransportEnum.motorbike:
      return t("MOTORBIKE");
    case TransportEnum.bus:
      return t("BUS");
    default:
      return t("CUSTOM");
  }
};

const getIconFromModelType = (emissionModelType) => {
  switch (emissionModelType) {
    case EmissionEnum.custom:
      return "md-build";
    case FoodEnum.redMeat:
    case FoodEnum.whiteMeat:
      return "md-restaurant";
    case TransportEnum.shortHaulFlight:
    case TransportEnum.mediumHaulFlight:
    case TransportEnum.longHaulFlight:
      return "md-airplane";
    case TransportEnum.train:
      return "md-train";
    case TransportEnum.car:
      return "md-car";
    case TransportEnum.boat:
      return "md-boat";
    case TransportEnum.motorbike:
      return "md-bicycle";
    case TransportEnum.bus:
      return "md-bus";
    default:
      return "md-build";
  }
};

export default { getTranslationModelType, getIconFromModelType };
