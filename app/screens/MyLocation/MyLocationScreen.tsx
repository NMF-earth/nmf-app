import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../components";
import { t } from "../../utils";
import navigationOptions from "./MyLocationScreen.navigationOptions";
import styles from "./MyLocationScreen.styles";
import { Colors } from "../../style";

const MyLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text.Primary style={styles.intro}>
        {t("MY_LOCATION_SCREEN_INTRO")}
      </Text.Primary>
      <View style={styles.carbonIntensityContainer}>
        <Text.Primary style={styles.carbonIntensity}>
          {t("MY_LOCATION_SCREEN_MY_CARBON_INTENSITY")}
        </Text.Primary>
        <Text.Primary bold green style={styles.carbonIntensity}>
          {"48 gCO₂eq/kWh"}
        </Text.Primary>
      </View>
      <ScrollView
        style={{ borderTopColor: Colors.linkGreen10, borderTopWidth: 2 }}
      >
        <Text.Primary bold style={styles.carbonIntensity}>
          {"World (default)"}
        </Text.Primary>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text.Primary bold green style={styles.carbonIntensity}>
            {"France"}
          </Text.Primary>
          <Ionicons
            name={"md-checkmark"}
            size={26}
            style={{ marginTop: 16 }}
            color={Colors.linkGreen}
          />
        </TouchableOpacity>
        <Text.Primary bold style={styles.carbonIntensity}>
          {"Sweden"}
        </Text.Primary>
        <Text.Primary bold style={styles.carbonIntensity}>
          {"Denmark"}
        </Text.Primary>
      </ScrollView>
    </View>
  );
};

MyLocationScreen.navigationOptions = navigationOptions;

export default MyLocationScreen;
