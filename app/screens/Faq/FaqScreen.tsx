import React from "react";
import { ScrollView, View } from "react-native";

import { NavStatelessComponent } from "interfaces";
import { t } from "utils";
import FaqComponent from "components/Faq/FaqComponent";

import styles from "./FaqScreen.styles";
import navigationOptions from "./FaqScreen.navigationOptions";

const FaqScreen: NavStatelessComponent = () => (
  <ScrollView style={styles.container}>
    <FaqComponent title={t("FAQ_SCREEN_WHY_ENTER_MANUALLY_EMISSIONS")} />
    <FaqComponent
      description={
        "We are working on adding recurrent emissions but we won't go further than that, meaning you won't be able to get your carbon footprint automatically calculated from your expenses for example. It's annoying by design, as a kind reminder to pollute and consume less."
      }
      title={t("FAQ_SCREEN_HOW_ACCURATE_CARBON_EMISSIONS")}
    />

    <View style={styles.separator} />
  </ScrollView>
);

FaqScreen.navigationOptions = navigationOptions();

export default FaqScreen;
