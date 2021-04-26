import {
  FoodType,
  FashionType,
  MealType,
  TransportType,
  StreamingType,
  PurchaseType,
} from "carbon-footprint";

const foodTypes: Array<FoodType> = [
  FoodType.redMeat,
  FoodType.whiteMeat,
  FoodType.coffee,
  FoodType.chocolate,
  FoodType.fish,
  FoodType.lamb,
  FoodType.beef,
  FoodType.cheese,
  FoodType.pork,
  FoodType.turkey,
  FoodType.chicken,
  FoodType.tuna,
  FoodType.eggs,
  FoodType.potatoes,
  FoodType.rice,
  FoodType.nuts,
  FoodType.beans,
  FoodType.tofu,
  FoodType.vegetables,
  FoodType.milk,
  FoodType.fruit,
  FoodType.lentils,
];

const fashionTypes: Array<FashionType> = [
  FashionType.coat,
  FashionType.dress,
  FashionType.jeans,
  FashionType.shirt,
  FashionType.shoes,
  FashionType.sweater,
  FashionType.tshirt,
];

const mealTypes: Array<MealType> = [
  MealType.highMeat,
  MealType.mediumMeat,
  MealType.lowMeat,
  MealType.pescetarian,
  MealType.vegetarian,
  MealType.vegan,
];

const purchaseTypes: Array<PurchaseType> = [
  PurchaseType.smartphone,
  PurchaseType.laptop,
  PurchaseType.tablet,
  PurchaseType.computer,
  PurchaseType.tv,
  PurchaseType.eletricCar,
  PurchaseType.fossilFuelCar,
  PurchaseType.hybridCar,
  PurchaseType.cryptoCurrencyPoW,
  PurchaseType.singleEditionNFT,
];

const streamingTypes: Array<StreamingType> = [
  StreamingType.audioMP3,
  StreamingType.HDVideo,
  StreamingType.fullHDVideo,
  StreamingType.ultraHDVideo,
];

const transportTypes: Array<TransportType> = [
  TransportType.train,
  TransportType.car,
  TransportType.bus,
  TransportType.plane,
  TransportType.boat,
  TransportType.motorbike,
];

export { fashionTypes, foodTypes, purchaseTypes, mealTypes, streamingTypes, transportTypes };
