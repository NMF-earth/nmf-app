import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

import { Text, Button } from "../../components";
import ImagesAssets from "../../constants/ImagesAssets";
import styles from "./IntroScreen.styles";
import { t } from "../../utils";

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={ImagesAssets.screens.logoNMF}
        />
      </View>
      <View style={styles.textView}>
        <Text.Primary bold style={styles.paragraph}>
          {t("INTRO_SCREEN_WELCOME")}
        </Text.Primary>
        <Text.Secondary style={styles.paragraph}>
          {t("INTRO_SCREEN_PRELUDE")}
        </Text.Secondary>
        <Text.Tertiary style={styles.paragraph}>
          {t("INTRO_SCREEN_CONTINUE_AND_ACCEPT_TERMS_OF_USE")}
        </Text.Tertiary>
        <TouchableOpacity
          onPress={() =>
            WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf")
          }
        >
          <Text.Tertiary green>{t("INTRO_SCREEN_TERMS_OF_USE")}</Text.Tertiary>
        </TouchableOpacity>
        <Button.Primary
          fullWidth
          style={styles.button}
          onPress={() => navigation.navigate("BudgetStack")}
          textType={"Primary"}
        >
          <Text.Primary white center bold>
            {t("INTRO_SCREEN_START_APP")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </View>
  );
};

export default IntroScreen;
