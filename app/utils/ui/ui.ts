import { Appearance, Linking, GestureResponderEvent } from "react-native";
import {
  TransportEnum,
  FoodEnum,
  StreamingEnum,
  ElectricityEnum,
} from "carbon-footprint";
import { contains, __ } from "ramda";

import { EmissionType } from "interfaces";

import { t } from "../translations";

const isElectricityEmission = contains(__, Object.keys(ElectricityEnum));

const getTranslationModelType = (emissionModelType) => {
  if (isElectricityEmission(emissionModelType)) {
    return t("UI_ELECTRICITY");
  }

  switch (emissionModelType) {
    case EmissionType.custom:
      return t("UI_CUSTOM");
    case FoodEnum.redMeat:
      return t("UI_RED_MEAT");
    case FoodEnum.whiteMeat:
      return t("UI_WHITE_MEAT");
    case FoodEnum.chocolate:
      return t("UI_CHOCOLATE");
    case FoodEnum.coffee:
      return t("UI_COFFEE");
    case FoodEnum.milk:
      return t("UI_MILK");
    case FoodEnum.cheese:
      return t("UI_CHEESE");
    case FoodEnum.eggs:
      return t("UI_EGGS");
    case FoodEnum.fish:
      return t("UI_FISH");
    case TransportEnum.shortHaulFlight:
    case TransportEnum.mediumHaulFlight:
    case TransportEnum.longHaulFlight:
    case TransportEnum.plane:
      return t("UI_PLANE");
    case TransportEnum.train:
      return t("UI_TRAIN");
    case TransportEnum.car:
      return t("UI_CAR");
    case TransportEnum.boat:
      return t("UI_BOAT");
    case TransportEnum.motorbike:
      return t("UI_MOTORBIKE");
    case TransportEnum.bus:
      return t("UI_BUS");
    case StreamingEnum.HDVideo:
      return t("UI_HD_VIDEO");
    case StreamingEnum.audioMP3:
      return t("UI_AUDIO");
    case StreamingEnum.fullHDVideo:
      return t("UI_FULL_HD_VIDEO");
    case StreamingEnum.ultraHDVideo:
      return t("UI_ULTRA_HD_VIDEO");
    default:
      return t("UI_CUSTOM");
  }
};

const getIconFromModelType = (emissionModelType) => {
  if (isElectricityEmission(emissionModelType)) {
    return "md-flash";
  }

  switch (emissionModelType) {
    case EmissionType.custom:
      return "md-build";
    case FoodEnum.redMeat:
    case FoodEnum.whiteMeat:
    case FoodEnum.chocolate:
    case FoodEnum.fish:
    case FoodEnum.milk:
    case FoodEnum.cheese:
    case FoodEnum.eggs:
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

const isDarkModeEnabled = () => Appearance.getColorScheme() === "dark";

const onHTMLBodyLinkPress = (_: GestureResponderEvent, link: string) => {
  if (link) {
    Linking.openURL(link);
  }
};

export default {
  getTranslationModelType,
  getIconFromModelType,
  isDarkModeEnabled,
  onHTMLBodyLinkPress,
};
