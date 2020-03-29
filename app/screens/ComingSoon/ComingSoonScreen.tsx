import React from "react";
import { ScrollView, View, Image } from "react-native";

import { Text, SocialMedia } from "../../components";
import ImagesAssets from "../../constants/ImagesAssets";
import styles from "./ComingSoonScreen.styles";
import { t, platform } from "../../utils";
import navigationOptions from "./ComingSoonScreen.navigationOptions";

const ComingSoonScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={ImagesAssets.stickers.bike}
        />
      </View>
      <View style={styles.textView}>
        <Text.Primary style={styles.paragraph}>
          {t("COMING_SOON_SCREEN_UNDER_DEVELOPMENT")}
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          {t("COMING_SOON_SCREEN_START_FOLLOW_US")}
        </Text.Primary>
      </View>
      <SocialMedia />
    </ScrollView>
  );
};

ComingSoonScreen.navigationOptions = platform.isAndroid
  ? null
  : navigationOptions;

export default ComingSoonScreen;
