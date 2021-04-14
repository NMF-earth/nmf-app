import { Appearance, Linking, GestureResponderEvent } from "react-native";
import {
  TransportType,
  FoodType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
} from "carbon-footprint";
import { contains, __ } from "ramda";

import { EmissionType } from "interfaces";

import { t } from "../translations";

const isElectricityEmission = contains(__, Object.keys(ElectricityType));

const getTranslationModelType = (emissionModelType) => {
  if (isElectricityEmission(emissionModelType)) {
    return t("UI_ELECTRICITY");
  }

  switch (emissionModelType) {
    case EmissionType.custom:
      return t("UI_CUSTOM");
    case FoodType.redMeat:
      return t("UI_RED_MEAT");
    case FoodType.whiteMeat:
      return t("UI_WHITE_MEAT");
    case FoodType.chocolate:
      return t("UI_CHOCOLATE");
    case FoodType.coffee:
      return t("UI_COFFEE");
    case FoodType.milk:
      return t("UI_MILK");
    case FoodType.cheese:
      return t("UI_CHEESE");
    case FoodType.eggs:
      return t("UI_EGGS");
    case FoodType.fish:
      return t("UI_FISH");
    case TransportType.shortHaulFlight:
    case TransportType.mediumHaulFlight:
    case TransportType.longHaulFlight:
    case TransportType.plane:
      return t("UI_PLANE");
    case TransportType.train:
      return t("UI_TRAIN");
    case TransportType.car:
      return t("UI_CAR");
    case TransportType.boat:
      return t("UI_BOAT");
    case TransportType.motorbike:
      return t("UI_MOTORBIKE");
    case TransportType.bus:
      return t("UI_BUS");
    case StreamingType.HDVideo:
      return t("UI_HD_VIDEO");
    case StreamingType.audioMP3:
      return t("UI_AUDIO");
    case StreamingType.fullHDVideo:
      return t("UI_FULL_HD_VIDEO");
    case StreamingType.ultraHDVideo:
      return t("UI_ULTRA_HD_VIDEO");
    case PurchaseType.computer:
      return t("UI_COMPUTER");
    case PurchaseType.eletricCar:
      return t("UI_ELECTRIC_CAR");
    case PurchaseType.fossilFuelCar:
      return t("UI_FOSSIL_FUEL_CAR");
    case PurchaseType.hybridCar:
      return t("UI_HYBRID_CAR");
    case PurchaseType.laptop:
      return t("UI_LAPTOP");
    case PurchaseType.smartphone:
      return t("UI_SMARTPHONE");
    case PurchaseType.tablet:
      return t("UI_TABLET");
    case PurchaseType.tv:
      return t("UI_TV");
    case FashionType.coat:
      return t("UI_COAT");
    case FashionType.dress:
      return t("UI_DRESS");
    case FashionType.jeans:
      return t("UI_JEANS");
    case FashionType.shirt:
      return t("UI_SHIRT");
    case FashionType.shoes:
      return t("UI_SHOES");
    case FashionType.sweater:
      return t("UI_SWEATER");
    case FashionType.tshirt:
      return t("UI_T_SHIRT");
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
    case FoodType.redMeat:
    case FoodType.whiteMeat:
    case FoodType.chocolate:
    case FoodType.fish:
    case FoodType.milk:
    case FoodType.cheese:
    case FoodType.eggs:
      return "md-restaurant";
    case FoodType.coffee:
      return "md-cafe";
    case TransportType.shortHaulFlight:
    case TransportType.mediumHaulFlight:
    case TransportType.longHaulFlight:
      return "md-airplane";
    case TransportType.train:
      return "md-train";
    case TransportType.car:
      return "md-car";
    case TransportType.boat:
      return "md-boat";
    case TransportType.motorbike:
      return "md-bicycle";
    case TransportType.bus:
      return "md-bus";
    case StreamingType.audioMP3:
      return "md-musical-note";
    case StreamingType.HDVideo:
    case StreamingType.fullHDVideo:
    case StreamingType.ultraHDVideo:
      return "md-film";
    case PurchaseType.computer:
    case PurchaseType.eletricCar:
    case PurchaseType.fossilFuelCar:
    case PurchaseType.hybridCar:
    case PurchaseType.laptop:
    case PurchaseType.smartphone:
    case PurchaseType.tablet:
    case PurchaseType.tv:
      return "md-card";
    case FashionType.coat:
    case FashionType.dress:
    case FashionType.jeans:
    case FashionType.shirt:
    case FashionType.shoes:
    case FashionType.sweater:
    case FashionType.tshirt:
      return "md-shirt";
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
