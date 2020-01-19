import React from "react";
import { ScrollView } from "react-native";
import { Button, Text } from "../../components";
import { t } from "../../utils";
import styles from "./SettingsScreen.styles";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const SettingsScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Button.Primary
        textType={"Primary"}
        onPress={() => {
          props.navigation.push("Storybook");
        }}
      >
        <Text.Primary white center>
          Open Storybook
        </Text.Primary>
      </Button.Primary>
    </ScrollView>
  );
};

SettingsScreen.navigationOptions = {
  title: t("SETTINGS_SCREEN_TITLE")
};

export default SettingsScreen;
