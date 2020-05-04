import { TransportEnum, FoodEnum, StreamingEnum } from "carbon-footprint";
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
    case FoodEnum.chocolate:
      return t("CHOCOLATE");
    case FoodEnum.coffee:
      return t("COFFEE");
    case FoodEnum.fish:
      return t("FISH");
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
    case StreamingEnum.HDVideo:
      return t("HD_VIDEO");
    case StreamingEnum.audioMP3:
      return t("AUDIO");
    case StreamingEnum.fullHDVideo:
      return t("FULL_HD_VIDEO");
    case StreamingEnum.ultraHDVideo:
      return t("ULTRA_HD_VIDEO");
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
    case FoodEnum.chocolate:
    case FoodEnum.fish:
      return "md-restaurant";
    case FoodEnum.coffee:
      return "md-cafe";
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
    case StreamingEnum.audioMP3:
      return "md-musical-note";
    case StreamingEnum.HDVideo:
    case StreamingEnum.fullHDVideo:
    case StreamingEnum.ultraHDVideo:
      return "md-film";
    default:
      return "md-build";
  }
};

export default { getTranslationModelType, getIconFromModelType };
