import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Text, Tag } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import { t } from "../../utils/translations";
import { Food, Transport, Custom, AddEmissionButton } from "./components";
import { EmissionEnum } from "../../interfaces";

const AddEmissionScreen = ({ navigation }) => {
  const [emissionType, setEmissionType] = useState(EmissionEnum.transport);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_EMISSION_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={emissionType === EmissionEnum.transport}
            title={"Transport"}
            onPress={() => setEmissionType(EmissionEnum.transport)}
          />
          <Tag
            icon={"md-restaurant"}
            selected={emissionType === EmissionEnum.food}
            title={"Food"}
            onPress={() => setEmissionType(EmissionEnum.food)}
          />
          <Tag
            icon={"md-build"}
            selected={emissionType === EmissionEnum.custom}
            title={"Custon"}
            onPress={() => setEmissionType(EmissionEnum.custom)}
          />
        </ScrollView>
      </View>

      {emissionType === EmissionEnum.transport ? <Transport /> : null}
      {emissionType === EmissionEnum.food ? <Food /> : null}
      {emissionType === EmissionEnum.custom ? <Custom /> : null}

      <AddEmissionButton navigation={navigation} emissionType={emissionType} />
    </ScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default AddEmissionScreen;
