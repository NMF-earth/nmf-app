import {
  ElectricityType,
  FoodType,
  StreamingType,
  TransportType,
  PurchaseType,
  FashionType,
  MealType,
} from "carbon-footprint";
import { Appearance, ColorSchemeName, GestureResponderEvent, Linking } from "react-native";

import { EmissionType } from "interfaces";

import ui from "../";
import * as translationUtils from "../../translations/i18n";

describe("tests for ui.getTranslationEmissionType", () => {
  beforeEach(() => {
    jest.spyOn(translationUtils, "t").mockImplementation((key: string): string => key);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("electricity type emissions", () => {
    it("returns UI_ELECTRICITY if electricity type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.electricity);

      expect(translationModelType).toBe("UI_ELECTRICITY");
    });

    it("returns UI_CUSTOM if custom type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.custom);

      expect(translationModelType).toBe("UI_CUSTOM");
    });

    it("returns UI_FASHION if custom type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.fashion);

      expect(translationModelType).toBe("UI_FASHION");
    });

    it("returns UI_Food if food type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.food);

      expect(translationModelType).toBe("UI_FOOD");
    });

    it("returns UI_MEAL if meal type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.meal);

      expect(translationModelType).toBe("UI_MEAL");
    });

    it("returns UI_PURCHASE if purchase type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.purchase);

      expect(translationModelType).toBe("UI_PURCHASE");
    });

    it("returns UI_STREAMING if streaming type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.streaming);

      expect(translationModelType).toBe("UI_STREAMING");
    });

    it("returns UI_TRANSPORT if transport type", () => {
      const translationModelType = ui.getTranslationEmissionType(EmissionType.transport);

      expect(translationModelType).toBe("UI_TRANSPORT");
    });
  });
});

describe("tests for ui.onHTMLBodyLinkPress", () => {
  beforeEach(() => {
    jest
      .spyOn(Linking, "openURL")
      .mockImplementation((url: string) => Promise.resolve(url ? true : true));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("invokes openUrl for the link which is passed, if a link exists", () => {
    // arrange
    const link = "some dummy URL link";

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).toBeCalledWith(link);
  });

  it("does not invoke openURL, if the link is undefined", () => {
    // arrange
    const link = undefined;

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).not.toBeCalled();
  });

  it("does not invoke openURL, if the link is null", () => {
    // arrange
    const link = null;

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).not.toBeCalled();
  });

  it("does not invoke openURL, if the link is empty string", () => {
    // arrange
    const link = "";

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).not.toBeCalled();
  });
});

describe("tests for ui.isDarkModeEnabled", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns true if the color scheme is 'dark'", () => {
    // arrange
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => "dark");

    // act
    const isEnabled = ui.isDarkModeEnabled();

    // assert
    expect(isEnabled).toBe(true);
  });

  it("returns false if the color scheme is 'light'", () => {
    // arrange
    jest.spyOn(Appearance, "getColorScheme").mockImplementation((): ColorSchemeName => "light");

    // act
    const isEnabled = ui.isDarkModeEnabled();

    // assert
    expect(isEnabled).toBe(false);
  });
});

describe("tests for ui.getIconFromModelType", () => {
  describe("electricity type emissions", () => {
    it("returns md-flash if electricity Emission model", () => {
      const emissionModelType = ElectricityType.argentina;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-flash");
    });
  });

  describe("custom type emissions", () => {
    it("returns md-build if custom Emission model", () => {
      // arrange
      const emissionModelType = EmissionType.custom;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-build");
    });
  });

  describe("food type emissions", () => {
    it("returns md-nutrition if it is food of type redMeat", () => {
      // arrange
      const emissionModelType = FoodType.redMeat;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-nutrition");
    });

    it("returns md-nutrition if it is food of type whiteMeat", () => {
      // arrange
      const emissionModelType = FoodType.whiteMeat;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-nutrition");
    });

    it("returns md-nutrition if it is food of type chocolate", () => {
      // arrange
      const emissionModelType = FoodType.chocolate;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-nutrition");
    });

    it("returns md-cafe if it is food of type coffee", () => {
      // arrange
      const emissionModelType = FoodType.coffee;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-cafe");
    });
  });

  describe("transport type emissions", () => {
    it("returns md-airplane if it is transport of type shortHaulFlight", () => {
      // arrange
      const emissionModelType = TransportType.shortHaulFlight;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-airplane if it is transport of type mediumHaulFlight", () => {
      // arrange
      const emissionModelType = TransportType.mediumHaulFlight;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-airplane if it is transport of type longHaulFlight", () => {
      // arrange
      const emissionModelType = TransportType.longHaulFlight;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-train if it is transport of type train", () => {
      // arrange
      const emissionModelType = TransportType.train;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-train");
    });

    it("returns md-car if it is transport of type car", () => {
      // arrange
      const emissionModelType = TransportType.car;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-car");
    });

    it("returns md-boat if it is transport of type boat", () => {
      // arrange
      const emissionModelType = TransportType.boat;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-boat");
    });

    it("returns md-motorbike if it is transport of type motorbike", () => {
      // arrange
      const emissionModelType = TransportType.motorbike;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-bicycle");
    });

    it("returns md-bus if it is transport of type bus", () => {
      // arrange
      const emissionModelType = TransportType.bus;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-bus");
    });
  });

  describe("streaming emission type", () => {
    it("returns md-film for HDVideo", () => {
      // arrange
      const emissionModelType = StreamingType.HDVideo;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-film for fullHDVideo", () => {
      // arrange
      const emissionModelType = StreamingType.fullHDVideo;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-film for ultraHDVideo", () => {
      // arrange
      const emissionModelType = StreamingType.ultraHDVideo;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-musical-note for audioMP3", () => {
      // arrange
      const emissionModelType = StreamingType.audioMP3;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-musical-note");
    });
  });

  describe("purchase emission type", () => {
    it("returns md-card for computer", () => {
      const emissionModelType = PurchaseType.computer;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for eletricCar", () => {
      const emissionModelType = PurchaseType.eletricCar;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for fossilFuelCar", () => {
      const emissionModelType = PurchaseType.fossilFuelCar;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for hybridCar", () => {
      const emissionModelType = PurchaseType.hybridCar;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for laptop", () => {
      const emissionModelType = PurchaseType.laptop;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for smartphone", () => {
      const emissionModelType = PurchaseType.smartphone;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for tablet", () => {
      const emissionModelType = PurchaseType.tablet;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });

    it("returns md-card for tv", () => {
      const emissionModelType = PurchaseType.tv;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-card");
    });
  });

  describe("fashion emission type", () => {
    it("returns md-shirt for coat", () => {
      const emissionModelType = FashionType.coat;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });

    it("returns md-shirt for dress", () => {
      const emissionModelType = FashionType.dress;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });

    it("returns md-shirt for jeans", () => {
      const emissionModelType = FashionType.jeans;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });

    it("returns md-shirt for shirt", () => {
      const emissionModelType = FashionType.shirt;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });

    it("returns md-shirt for shoes", () => {
      const emissionModelType = FashionType.shoes;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });

    it("returns md-shirt for sweater", () => {
      const emissionModelType = FashionType.sweater;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });

    it("returns md-shirt for tshirt", () => {
      const emissionModelType = FashionType.tshirt;
      const icon = ui.getIconFromModelType(emissionModelType);

      expect(icon).toBe("md-shirt");
    });
  });

  it("returns md-build for any random emission type", () => {
    const emissionModelType = "someRandomString";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const icon = ui.getIconFromModelType(emissionModelType);

    // assert
    expect(icon).toBe("md-build");
  });
});

describe("tests for ui.getTranslationEmissionModelType", () => {
  beforeEach(() => {
    jest.spyOn(translationUtils, "t").mockImplementation((key: string): string => key);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("electricity type emissions", () => {
    it("returns UI_ELECTRICITY if electricity Emission model", () => {
      const emissionModelType = ElectricityType.argentina;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_ELECTRICITY");
    });
  });

  describe("custom type emissions", () => {
    it("returns UI_CUSTOM if custom Emission model", () => {
      const emissionModelType = EmissionType.custom;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_CUSTOM");
    });
  });

  describe("meal type emissions", () => {
    it("returns UI_HIGH_MEAT if MealType is high meat", () => {
      const emissionModelType = MealType.highMeat;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_HIGH_MEAT");
    });

    it("returns UI_MEDIUM_MEAT if MealType is medium meat", () => {
      const emissionModelType = MealType.mediumMeat;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_MEDIUM_MEAT");
    });

    it("returns UI_LOW_MEAT if MealType is low meat", () => {
      const emissionModelType = MealType.lowMeat;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_LOW_MEAT");
    });

    it("returns UI_PESCETARIAN if MealType is pescetarian", () => {
      const emissionModelType = MealType.pescetarian;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_PESCETARIAN");
    });

    it("returns UI_VEGAN if MealType is pescetarian", () => {
      const emissionModelType = MealType.vegan;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_VEGAN");
    });

    it("returns UI_VEGETARIAN if MealType is pescetarian", () => {
      const emissionModelType = MealType.vegetarian;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_VEGETARIAN");
    });
  });

  describe("food type emissions", () => {
    it("returns UI_RED_MEAT if it is food of type redMeat", () => {
      const emissionModelType = FoodType.redMeat;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_RED_MEAT");
    });

    it("returns UI_WHITE_MEAT if it is food of type whiteMeat", () => {
      const emissionModelType = FoodType.whiteMeat;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_WHITE_MEAT");
    });

    it("returns UI_CHOCOLATE if it is food of type chocolate", () => {
      const emissionModelType = FoodType.chocolate;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_CHOCOLATE");
    });

    it("returns UI_COFFEE if it is food of type coffee", () => {
      const emissionModelType = FoodType.coffee;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_COFFEE");
    });

    it("returns UI_FISH if it is food of type fish", () => {
      const emissionModelType = FoodType.fish;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_FISH");
    });

    /* TODO: and the rest later... */
  });

  describe("transport type emissions", () => {
    it("returns UI_PLANE if it is transport of type shortHaulFlight", () => {
      const emissionModelType = TransportType.shortHaulFlight;
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_PLANE if it is transport of type mediumHaulFlight", () => {
      // arrange
      const emissionModelType = TransportType.mediumHaulFlight;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_PLANE if it is transport of type longHaulFlight", () => {
      // arrange
      const emissionModelType = TransportType.longHaulFlight;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_TRAIN if it is transport of type train", () => {
      // arrange
      const emissionModelType = TransportType.train;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_TRAIN");
    });

    it("returns UI_CAR if it is transport of type car", () => {
      // arrange
      const emissionModelType = TransportType.car;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_CAR");
    });

    it("returns UI_BOAT if it is transport of type boat", () => {
      // arrange
      const emissionModelType = TransportType.boat;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_BOAT");
    });

    it("returns UI_MOTORBIKE if it is transport of type motorbike", () => {
      // arrange
      const emissionModelType = TransportType.motorbike;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_MOTORBIKE");
    });

    it("returns UI_BUS if it is transport of type bus", () => {
      // arrange
      const emissionModelType = TransportType.bus;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_BUS");
    });
  });

  describe("streaming emission type", () => {
    it("returns UI_HD_VIDEO for HDVideo", () => {
      // arrange
      const emissionModelType = StreamingType.HDVideo;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_HD_VIDEO");
    });

    it("returns UI_FULL_HD_VIDEO for fullHDVideo", () => {
      // arrange
      const emissionModelType = StreamingType.fullHDVideo;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_FULL_HD_VIDEO");
    });

    it("returns UI_ULTRA_HD_VIDEO for ultraHDVideo", () => {
      // arrange
      const emissionModelType = StreamingType.ultraHDVideo;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_ULTRA_HD_VIDEO");
    });

    it("returns UI_AUDIO for audioMP3", () => {
      // arrange
      const emissionModelType = StreamingType.audioMP3;

      // act
      const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

      // assert
      expect(translationModelType).toBe("UI_AUDIO");
    });
  });

  it("returns UI_CUSTOM for any random emission type", () => {
    // arrange
    const emissionModelType = "someRandomString";

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const translationModelType = ui.getTranslationEmissionModelType(emissionModelType);

    // assert
    expect(translationModelType).toBe("UI_CUSTOM");
  });
});
