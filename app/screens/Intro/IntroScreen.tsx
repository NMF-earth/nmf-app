import React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useDispatch } from "react-redux";

import { Text, Button, StickersImage } from "components";
import { userPreferences } from "ducks";
import { t } from "utils";

import styles from "./IntroScreen.styles";
import { Preferences } from "../../constant";

const IntroScreen = () => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(
      userPreferences.actions.acceptTermsOfUse(
        Preferences.currentTermsOfUseVersion
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <StickersImage sticker="bike" />
      </View>
      <View style={styles.termsOfUseView}>
        <Text.H3 style={styles.text}>{t("INTRO_SCREEN_WELCOME")}</Text.H3>
        <Text.Tertiary style={styles.text}>
          {t("INTRO_SCREEN_CONTINUE_AND_ACCEPT_TERMS_OF_USE")}
        </Text.Tertiary>
        <TouchableOpacity
          onPress={() =>
            WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf")
          }
        >
          <Text.Tertiary green>{t("INTRO_SCREEN_TERMS_OF_USE")}</Text.Tertiary>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button.Primary fullWidth onPress={onPress} textType={"Primary"}>
            <Text.Primary white center bold>
              {t("INTRO_SCREEN_I_AGREE")}
            </Text.Primary>
          </Button.Primary>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
