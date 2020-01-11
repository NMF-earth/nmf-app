import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import { Text, Button, Tag } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import { t } from "../../utils/translations";
import { Food, Transport, Custom } from "./components";

const TRANSPORT = "transport";
const FOOD = "food";
const CUSTOM = "custom";

const AddThisEmissionButton = ({ navigation }) => (
  <Button.Primary
    onPress={() => navigation.goBack()}
    textType={"Primary"}
    style={styles.button}
  >
    <Text.Primary white center bold>
      {t("ADD_EMISSION_ADD_THIS_EMISSION")}
    </Text.Primary>
  </Button.Primary>
);

const AddEmissionScreen = ({ navigation }) => {
  const [typeOfEmission, setTypeOfEmission] = useState(TRANSPORT);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_EMISSION_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={typeOfEmission === TRANSPORT}
            title={"Transport"}
            onPress={() => setTypeOfEmission(TRANSPORT)}
          />
          <Tag
            icon={"md-restaurant"}
            selected={typeOfEmission === FOOD}
            title={"Food"}
            onPress={() => setTypeOfEmission(FOOD)}
          />
          <Tag
            icon={"md-build"}
            selected={typeOfEmission === CUSTOM}
            title={"Custon"}
            onPress={() => setTypeOfEmission(CUSTOM)}
          />
        </ScrollView>
      </View>
      {typeOfEmission === TRANSPORT ? <Transport /> : null}
      {typeOfEmission === FOOD ? <Food /> : null}
      {typeOfEmission === CUSTOM ? <Custom /> : null}
      <AddThisEmissionButton navigation={navigation} />
    </ScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default AddEmissionScreen;
