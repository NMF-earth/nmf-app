import { Appearance, Linking, GestureResponderEvent } from "react-native";
import {
  TransportType,
  FoodType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
  MealType,
} from "carbon-footprint";
import { contains, __ } from "ramda";

import { EmissionType, EmissionModelType } from "interfaces";

import { t } from "../translations";

const isElectricityEmission = contains(__, Object.keys(ElectricityType));
const isMealEmission = contains(__, Object.keys(MealType));
const isFoodEmission = contains(__, Object.keys(FoodType));
const isPurchaseEmission = contains(__, Object.keys(PurchaseType));
const isFashionEmission = contains(__, Object.keys(FashionType));

const getTranslationEmissionType = (emissionType: EmissionType): string => {
  switch (emissionType) {
    case EmissionType.custom:
      return t("UI_CUSTOM");
    case EmissionType.electricity:
      return t("UI_ELECTRICITY");
    case EmissionType.fashion:
      return t("UI_FASHION");
    case EmissionType.food:
      return t("UI_FOOD");
    case EmissionType.meal:
      return t("UI_MEAL");
    case EmissionType.purchase:
      return t("UI_PURCHASE");
    case EmissionType.streaming:
      return t("UI_STREAMING");
    case EmissionType.transport:
      return t("UI_TRANSPORT");
    case EmissionType.productScanned:
      return t("UI_SCAN_PRODUCT");
    default:
      return "";
  }
};

const getTranslationEmissionModelType = (emissionModelType: EmissionModelType): string => {
  switch (emissionModelType) {
    case EmissionType.custom:
      return t("UI_CUSTOM");
    case EmissionType.productScanned:
      return t("UI_SCAN_PRODUCT");
    case FoodType.beans:
      return t("UI_BEANS");
    case FoodType.beef:
      return t("UI_BEEF");
    case FoodType.chicken:
      return t("UI_CHICKEN");
    case FoodType.fruit:
      return t("UI_FRUIT");
    case FoodType.lamb:
      return t("UI_LAMB");
    case FoodType.lentils:
      return t("UI_LENTILS");
    case FoodType.nuts:
      return t("UI_NUTS");
    case FoodType.pork:
      return t("UI_PORK");
    case FoodType.potatoes:
      return t("UI_POTATOES");
    case FoodType.rice:
      return t("UI_RICE");
    case FoodType.tofu:
      return t("UI_TOFU");
    case FoodType.tuna:
      return t("UI_TUNA");
    case FoodType.turkey:
      return t("UI_TURKEY");
    case FoodType.vegetables:
      return t("UI_VEGETABLES");
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
    case PurchaseType.cryptoCurrencyPoW:
      return t("UI_CRYPTO_CURRENCY_POW");
    case PurchaseType.singleEditionNFT:
      return t("UI_SINGLE_EDITION_NFT");
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
    case MealType.highMeat:
      return t("UI_HIGH_MEAT");
    case MealType.mediumMeat:
      return t("UI_MEDIUM_MEAT");
    case MealType.lowMeat:
      return t("UI_LOW_MEAT");
    case MealType.pescetarian:
      return t("UI_PESCETARIAN");
    case MealType.vegan:
      return t("UI_VEGAN");
    case MealType.vegetarian:
      return t("UI_VEGETARIAN");
  }

  if (isElectricityEmission(emissionModelType)) {
    return t("UI_ELECTRICITY");
  }

  return t("UI_CUSTOM");
};

const getIconFromModelType = (emissionModelType: EmissionModelType): string => {
  switch (emissionModelType) {
    case EmissionType.custom:
      return "md-build";
    case EmissionType.productScanned:
      return "barcode-sharp";
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
  }

  if (isFoodEmission(emissionModelType)) {
    return "md-nutrition";
  }

  if (isElectricityEmission(emissionModelType)) {
    return "md-flash";
  }

  if (isMealEmission(emissionModelType)) {
    return "md-restaurant";
  }

  if (isPurchaseEmission(emissionModelType)) {
    return "md-card";
  }

  if (isFashionEmission(emissionModelType)) {
    return "md-shirt";
  }

  return "md-build";
};

const isDarkModeEnabled = (): boolean => Appearance.getColorScheme() === "dark";

const onHTMLBodyLinkPress = (_: GestureResponderEvent, link: string): void => {
  if (link) {
    Linking.openURL(link);
  }
};

export default {
  getTranslationEmissionType,
  getTranslationEmissionModelType,
  getIconFromModelType,
  isDarkModeEnabled,
  onHTMLBodyLinkPress,
};
