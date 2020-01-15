import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import { Text, Tag } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import { t } from "../../utils/translations";
import { Food, Transport, Custom, AddEmissionButton } from "./components";
import { EmissionTypeEnum } from "../../interfaces";

const AddEmissionScreen = ({ navigation }) => {
  const [emissionType, SetEmissionType] = useState(EmissionTypeEnum.transport);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_EMISSION_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={emissionType === EmissionTypeEnum.transport}
            title={"Transport"}
            onPress={() => SetEmissionType(EmissionTypeEnum.transport)}
          />
          <Tag
            icon={"md-restaurant"}
            selected={emissionType === EmissionTypeEnum.food}
            title={"Food"}
            onPress={() => SetEmissionType(EmissionTypeEnum.food)}
          />
          <Tag
            icon={"md-build"}
            selected={emissionType === EmissionTypeEnum.custom}
            title={"Custon"}
            onPress={() => SetEmissionType(EmissionTypeEnum.custom)}
          />
        </ScrollView>
      </View>

      {emissionType === EmissionTypeEnum.transport ? <Transport /> : null}
      {emissionType === EmissionTypeEnum.food ? <Food /> : null}
      {emissionType === EmissionTypeEnum.custom ? <Custom /> : null}

      <AddEmissionButton navigation={navigation} emissionType={emissionType} />
    </ScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default AddEmissionScreen;
