import React from "react";
import { View, Image } from "react-native";

import { Text } from "../";
import ImagesAssets from "../../constants/ImagesAssets";
import styles from "./NoEmission.style";
import { t } from "../../utils/translations";

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
        <Text.H1 style={styles.header}>{t("NO_EMISSION_TITLE")}</Text.H1>
        <Text.Primary style={styles.paragraph}>
          Thanks for joining the fight to save our beautiful planet!
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          You can start using the app by
          <Text.Primary bold> adding your first emission.</Text.Primary>
        </Text.Primary>
      </View>
    </View>
  );
}
