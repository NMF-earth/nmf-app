import React from "react";
import { View, Image } from "react-native";

import { ImagesAssets } from "constant";

import styles from "./StickersImage.styles";

interface Prop {
  sticker: "restaurant" | "bike" | "earth";
}

const StickersImage = ({ sticker }: Prop) => {
  let source = ImagesAssets.stickers.earth;

  if (sticker === "restaurant") {
    source = ImagesAssets.stickers.restaurant;
  } else if (sticker === "bike") {
    source = ImagesAssets.stickers.bike;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={source} />
    </View>
  );
};

export default StickersImage;
