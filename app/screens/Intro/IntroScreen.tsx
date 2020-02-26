import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useSelector, useDispatch } from "react-redux";

import { Text, Button } from "../../components";
import ImagesAssets from "../../constants/ImagesAssets";
import styles from "./IntroScreen.styles";
import { t } from "../../utils";
import { userPreferences } from "../../ducks";

const currentTermsOfUseVersion = 1;

const IntroScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const acceptedTermsOfUseVersion = useSelector(
    userPreferences.selectors.getAcceptedTermsOfUseVersion
  );
  console.log(
    "TCL: IntroScreen -> acceptedTermsOfUseVersion",
    acceptedTermsOfUseVersion
  );
  if (currentTermsOfUseVersion === acceptedTermsOfUseVersion) {
    navigation.navigate("BudgetStack");
  }

  const onPress = () => {
    dispatch(
      userPreferences.actions.acceptTermsOfUse(currentTermsOfUseVersion)
    );

    navigation.navigate("BudgetStack");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeView}>
        <Text.Primary bold style={styles.paragraph}>
          {t("INTRO_SCREEN_WELCOME")}
        </Text.Primary>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={ImagesAssets.stickers.restaurant}
        />
      </View>
      <View style={styles.termsOfUseView}>
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
          onPress={onPress}
          textType={"Primary"}
        >
          <Text.Primary white center bold>
            {t("INTRO_SCREEN_I_AGREE")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
