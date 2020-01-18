import React from "react";
import { SafeAreaView, View, Image } from "react-native";

import { Text, Button } from "../";
import ImagesAssets from "../../constants/ImagesAssets";
import styles from "./NoEmission.style";
import { t } from "../../utils/translations";

interface Props {
  addEmission: () => void;
}

export default function NoEmission({ addEmission }: Props) {
  return (
    <SafeAreaView style={styles.container}>
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
          {t("NO_EMISSION_THANKS")}
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          {t("NO_EMISSION_START_USING_APP")}
        </Text.Primary>
        <Button.Primary
          fullWidth
          style={styles.button}
          onPress={addEmission}
          textType={"Primary"}
        >
          <Text.Primary bold white>
            {t("NO_EMISSION_ADD_FIRST_EMISSION")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </SafeAreaView>
  );
}
