import React from "react";
import { View, Image } from "react-native";
import { Text } from "../";
import ImagesAssets from "../../constants/ImagesAssets";
import styles from "./NoEmission.style";

interface Props {
  addEmission: () => void;
}

export default function NoEmission(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={ImagesAssets.components.nmfStickerEarth}
        />
      </View>
      <View style={styles.textView}>
        <Text.H1 style={styles.header}>Hi there 👋</Text.H1>
        <Text.Primary style={styles.paragraph}>
          Thanks for joining the fight to save our beautiful planet!
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          You can start by setting your monthly
          <Text.Primary bold> Carbon Budget</Text.Primary>, or head over to the
          <Text.Primary bold> Emissions</Text.Primary> tab to add your first
          emission.
        </Text.Primary>
      </View>
    </View>
  );
}
