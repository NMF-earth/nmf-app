import React from "react";
import { View, Image } from "react-native";

import { ImagesAssets } from "constant";

import styles from "./StickersImage.styles";

interface Prop {
  sticker: "restaurant" | "bike" | "earth";
  accessibilityLabel?: string;
}

const StickersImage = ({ sticker, accessibilityLabel }: Prop) => {
  let source = ImagesAssets.stickers.earth;

  if (sticker === "restaurant") {
    source = ImagesAssets.stickers.restaurant;
  } else if (sticker === "bike") {
    source = ImagesAssets.stickers.bike;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={source}
        accessible
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
};

export default StickersImage;
