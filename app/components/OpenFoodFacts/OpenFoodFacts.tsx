import React from "react";
import { View, Image } from "react-native";

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
    ImagesAssets.nutriscore[getImageRef(nutriscoreGrade)],
    ImagesAssets.nova[getImageRef(novaGroup)],
    ImagesAssets.ecoscore[getImageRef(ecoScore)],
  ];

  return (
    <View style={styles.container}>
      <Text.Link center url={"https://world.openfoodfacts.org/"}>
        {t("OPEN_FOOD_FACTS_COMPONENT_DATA_FROM")}
      </Text.Link>
      <View style={styles.mainImageContainer}>
        {imageSources.map((src, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="contain" source={src} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default OpenFoodFacts;
