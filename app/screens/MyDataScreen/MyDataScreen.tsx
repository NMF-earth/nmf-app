import React from "react";
import { ScrollView } from "react-native";

import { Text, Button } from "components";
import { t } from "utils";

import styles from "./MyDataScreen.styles";
import navigationOptions from "./MyDataScreen.navigationOptions";

const MyDataScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text.Primary style={styles.paragraph}>
        {t("MY_DATA_SCREEN_BODY")}
      </Text.Primary>
      <Button.Primary
        style={styles.button}
        textType={"Primary"}
        onPress={() => {
          //do nothing.
        }}
      >
        <Text.Primary numberOfLines={1} center white bold>
          {t("MY_DATA_SCREEN_EXPORT_MY_DATA")}
        </Text.Primary>
      </Button.Primary>
      <Button.Secondary
        style={styles.button}
        textType={"Primary"}
        onPress={() => {
          //do nothing.
        }}
      >
        <Text.Primary numberOfLines={1} center green bold>
          {t("MY_DATA_SCREEN_IMPORT_DATA")}
        </Text.Primary>
      </Button.Secondary>
      <Button.Primary
        red
        style={styles.button}
        textType={"Primary"}
        onPress={() => {
          //do nothing.
        }}
      >
        <Text.Primary numberOfLines={1} center white bold>
          {t("MY_DATA_SCREEN_DELETE_ALL_MY_DATA")}
        </Text.Primary>
      </Button.Primary>
    </ScrollView>
  );
};

MyDataScreen.navigationOptions = navigationOptions;

export default MyDataScreen;
