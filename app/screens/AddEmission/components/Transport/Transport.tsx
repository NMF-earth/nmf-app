import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "react-native-slider";

import styles from "./Transport.styles";
import { Text, Tag } from "../../../../components";
import colors from "../../../../style/colors";
import { t } from "../../../../utils/translations";

const DEFAULT_SLIDER_VALUE = 120;
const MIN_SLIDER_VALUE = 20;
const MAX_SLIDER_VALUE = 1200;

const TRAIN = "Train";
const CAR = "Car";
const PLANE = "Plane";
const BOAT = "Boat";

export default () => {
  const [sliderValue, setValue] = useState(DEFAULT_SLIDER_VALUE);
  const [typeOfTransport, setTypeOfTransport] = useState(PLANE);

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_TRANSPORT_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        <Tag
          selected={typeOfTransport === TRAIN}
          title={t("ADD_EMISSION_TRAIN")}
          onPress={() => setTypeOfTransport(TRAIN)}
        />
        <Tag
          selected={typeOfTransport === CAR}
          title={t("ADD_EMISSION_CAR")}
          onPress={() => setTypeOfTransport(CAR)}
        />
        <Tag
          selected={typeOfTransport === PLANE}
          title={t("ADD_EMISSION_PLANE")}
          onPress={() => setTypeOfTransport(PLANE)}
        />
        <Tag
          selected={typeOfTransport === BOAT}
          title={t("ADD_EMISSION_BOAT")}
          onPress={() => setTypeOfTransport(BOAT)}
        />
      </ScrollView>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_DURATION")}
        </Text.H3>
        <Text.Primary lightGray>
          {Math.round(sliderValue) + "minutes"}
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
