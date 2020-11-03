import {
  ElectricityEnum,
  FoodEnum,
  StreamingEnum,
  TransportEnum,
} from "carbon-footprint";
import {
  Appearance,
  ColorSchemeName,
  GestureResponderEvent,
  Linking,
} from "react-native";

import { EmissionType } from "interfaces";

import ui from "../";
import * as translationUtils from "../../translations/i18n";

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
    jest
      .spyOn(Appearance, "getColorScheme")
      .mockImplementation((): ColorSchemeName => "light");

    // act
    const isEnabled = ui.isDarkModeEnabled();

    // assert
    expect(isEnabled).toBe(false);
  });
});

describe("tests for ui.getIconFromModelType", () => {
  describe("electricity type emissions", () => {
    it("returns md-flash if electricity Emission model", () => {
      // arrange
      const electricityEmissions = Object.keys(ElectricityEnum);
      const emissionModelType =
        electricityEmissions[
          Math.floor(Math.random() * electricityEmissions.length)
        ];

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
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
    it("returns md-restaurant if it is food of type redMeat", () => {
      // arrange
      const emissionModelType = FoodEnum.redMeat;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-restaurant if it is food of type whiteMeat", () => {
      // arrange
      const emissionModelType = FoodEnum.whiteMeat;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-restaurant if it is food of type chocolate", () => {
      // arrange
      const emissionModelType = FoodEnum.chocolate;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-restaurant if it is food of type fish", () => {
      // arrange
      const emissionModelType = FoodEnum.fish;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-cafe if it is food of type coffee", () => {
      // arrange
      const emissionModelType = FoodEnum.coffee;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-cafe");
    });
  });

  describe("transport type emissions", () => {
    it("returns md-airplane if it is transport of type shortHaulFlight", () => {
      // arrange
      const emissionModelType = TransportEnum.shortHaulFlight;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-airplane if it is transport of type mediumHaulFlight", () => {
      // arrange
      const emissionModelType = TransportEnum.mediumHaulFlight;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-airplane if it is transport of type longHaulFlight", () => {
      // arrange
      const emissionModelType = TransportEnum.longHaulFlight;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-train if it is transport of type train", () => {
      // arrange
      const emissionModelType = TransportEnum.train;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-train");
    });

    it("returns md-car if it is transport of type car", () => {
      // arrange
      const emissionModelType = TransportEnum.car;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-car");
    });

    it("returns md-boat if it is transport of type boat", () => {
      // arrange
      const emissionModelType = TransportEnum.boat;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-boat");
    });

    it("returns md-motorbike if it is transport of type motorbike", () => {
      // arrange
      const emissionModelType = TransportEnum.motorbike;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-bicycle");
    });

    it("returns md-bus if it is transport of type bus", () => {
      // arrange
      const emissionModelType = TransportEnum.bus;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-bus");
    });
  });

  describe("streaming emission type", () => {
    it("returns md-film for HDVideo", () => {
      // arrange
      const emissionModelType = StreamingEnum.HDVideo;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-film for fullHDVideo", () => {
      // arrange
      const emissionModelType = StreamingEnum.fullHDVideo;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-film for ultraHDVideo", () => {
      // arrange
      const emissionModelType = StreamingEnum.ultraHDVideo;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-musical-note for audioMP3", () => {
      // arrange
      const emissionModelType = StreamingEnum.audioMP3;

      // act
      const icon = ui.getIconFromModelType(emissionModelType);

      // assert
      expect(icon).toBe("md-musical-note");
    });
  });

  it("returns md-build for any random emission type", () => {
    // arrange
    const emissionModelType = "someRandomString";

    // act
    const icon = ui.getIconFromModelType(emissionModelType);

    // assert
    expect(icon).toBe("md-build");
  });
});

describe("tests for ui.getTranslationModelType", () => {
  beforeEach(() => {
    jest
      .spyOn(translationUtils, "t")
      .mockImplementation((key: string): string => key);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("electricity type emissions", () => {
    it("returns UI_ELECTRICITY if electricity Emission model", () => {
      // arrange
      const electricityEmissions = Object.keys(ElectricityEnum);
      const emissionModelType =
        electricityEmissions[
          Math.floor(Math.random() * electricityEmissions.length)
        ];

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_ELECTRICITY");
    });
  });

  describe("custom type emissions", () => {
    it("returns UI_CUSTOM if custom Emission model", () => {
      // arrange
      const emissionModelType = EmissionType.custom;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_CUSTOM");
    });
  });

  describe("food type emissions", () => {
    it("returns UI_RED_MEAT if it is food of type redMeat", () => {
      // arrange
      const emissionModelType = FoodEnum.redMeat;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_RED_MEAT");
    });

    it("returns UI_WHITE_MEAT if it is food of type whiteMeat", () => {
      // arrange
      const emissionModelType = FoodEnum.whiteMeat;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_WHITE_MEAT");
    });

    it("returns UI_CHOCOLATE if it is food of type chocolate", () => {
      // arrange
      const emissionModelType = FoodEnum.chocolate;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_CHOCOLATE");
    });

    it("returns UI_COFFEE if it is food of type coffee", () => {
      // arrange
      const emissionModelType = FoodEnum.coffee;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_COFFEE");
    });

    it("returns UI_FISH if it is food of type fish", () => {
      // arrange
      const emissionModelType = FoodEnum.fish;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_FISH");
    });
  });

  describe("transport type emissions", () => {
    it("returns UI_PLANE if it is transport of type shortHaulFlight", () => {
      // arrange
      const emissionModelType = TransportEnum.shortHaulFlight;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_PLANE if it is transport of type mediumHaulFlight", () => {
      // arrange
      const emissionModelType = TransportEnum.mediumHaulFlight;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_PLANE if it is transport of type longHaulFlight", () => {
      // arrange
      const emissionModelType = TransportEnum.longHaulFlight;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_TRAIN if it is transport of type train", () => {
      // arrange
      const emissionModelType = TransportEnum.train;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_TRAIN");
    });

    it("returns UI_CAR if it is transport of type car", () => {
      // arrange
      const emissionModelType = TransportEnum.car;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_CAR");
    });

    it("returns UI_BOAT if it is transport of type boat", () => {
      // arrange
      const emissionModelType = TransportEnum.boat;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_BOAT");
    });

    it("returns UI_MOTORBIKE if it is transport of type motorbike", () => {
      // arrange
      const emissionModelType = TransportEnum.motorbike;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_MOTORBIKE");
    });

    it("returns UI_BUS if it is transport of type bus", () => {
      // arrange
      const emissionModelType = TransportEnum.bus;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_BUS");
    });
  });

  describe("streaming emission type", () => {
    it("returns UI_HD_VIDEO for HDVideo", () => {
      // arrange
      const emissionModelType = StreamingEnum.HDVideo;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_HD_VIDEO");
    });

    it("returns UI_FULL_HD_VIDEO for fullHDVideo", () => {
      // arrange
      const emissionModelType = StreamingEnum.fullHDVideo;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_FULL_HD_VIDEO");
    });

    it("returns UI_ULTRA_HD_VIDEO for ultraHDVideo", () => {
      // arrange
      const emissionModelType = StreamingEnum.ultraHDVideo;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_ULTRA_HD_VIDEO");
    });

    it("returns UI_AUDIO for audioMP3", () => {
      // arrange
      const emissionModelType = StreamingEnum.audioMP3;

      // act
      const translationModelType = ui.getTranslationModelType(
        emissionModelType
      );

      // assert
      expect(translationModelType).toBe("UI_AUDIO");
    });
  });

  it("returns UI_CUSTOM for any random emission type", () => {
    // arrange
    const emissionModelType = "someRandomString";

    // act
    const translationModelType = ui.getTranslationModelType(emissionModelType);

    // assert
    expect(translationModelType).toBe("UI_CUSTOM");
  });
});
