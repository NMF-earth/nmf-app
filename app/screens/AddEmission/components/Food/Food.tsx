import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "react-native-slider";

import styles from "./Food.styles";
import { Text, Tag } from "../../../../components";
import colors from "../../../../style/colors";
import { t } from "../../../../utils/translations";

const DEFAULT_SLIDER_VALUE = 200;
const MIN_SLIDER_VALUE = 20;
const MAX_SLIDER_VALUE = 500;

const READ_MEAT = "Read Meat";
const WHITE_MEAT = "White Meat";

export default () => {
  const [sliderValue, setValue] = useState(DEFAULT_SLIDER_VALUE);
  const [typeOfFood, setTypeOfFood] = useState(READ_MEAT);

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_FOOD_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        <Tag
          selected={typeOfFood === READ_MEAT}
          title={t("ADD_EMISSION_RED_MEAT")}
          onPress={() => setTypeOfFood(READ_MEAT)}
        />
        <Tag
          selected={typeOfFood === WHITE_MEAT}
          title={t("ADD_EMISSION_WHITE_MEAT")}
          onPress={() => setTypeOfFood(WHITE_MEAT)}
        />
      </ScrollView>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_QUANTITY")}
        </Text.H3>
        <Text.Primary lightGray>
          {Math.round(sliderValue) + " grams"}
        </Text.Primary>
      </View>
      <Slider
        minimumTrackTintColor={colors.linkGreen}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onValueChange={setValue}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_TOTAL")}</Text.H3>
        <Text.H1 green>
          1500 <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H1>
      </View>
    </React.Fragment>
  );
};
