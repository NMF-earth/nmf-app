import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

import { ImagesAssets } from "constant";
import { t } from "utils";

import { getImageRef } from "./helper";
import Text from "../Text";
import styles from "./OpenFoodFacts.styles";

interface Props {
  ecoScore?: string;
  novaGroup?: number;
  nutriscoreGrade?: string;
}

const OpenFoodFacts: React.FC<Props> = ({ ecoScore, novaGroup, nutriscoreGrade }: Props) => {
  const imageSources = [
    {
      url: "https://world.openfoodfacts.org/nutriscore",
      src: ImagesAssets.nutriscore[getImageRef(nutriscoreGrade)],
    },
    { url: "https://world.openfoodfacts.org/nova", src: ImagesAssets.nova[getImageRef(novaGroup)] },
    {
      url: "https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products",
      src: ImagesAssets.ecoscore[getImageRef(ecoScore)],
    },
  ];

  return (
    <View style={styles.container}>
      <Text.Link center url={"https://world.openfoodfacts.org/"}>
        {t("OPEN_FOOD_FACTS_COMPONENT_DATA_FROM")}
      </Text.Link>
      <View style={styles.mainImageContainer}>
        {imageSources.map(({ src, url }, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => WebBrowser.openBrowserAsync(url)}
          >
            <Image style={styles.image} resizeMode="contain" source={src} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OpenFoodFacts;
