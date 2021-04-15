import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import {
  streaming,
  StreamingType,
  getInternetUsageCarbonImpact,
  ElectricityType,
} from "carbon-footprint";

import { Text, Tag } from "components";
import { t, time, ui } from "utils";
import { Colors } from "style";

import styles from "./Streaming.styles";

const MIN_SLIDER_VALUE = 15 * 60;
const MAX_SLIDER_VALUE = 10 * 60 * 60;

interface Props {
  electricityCountry: ElectricityType;
  defaultValueSlider: number;
  streamingType: string;
  setStreamingType: (arg0: StreamingType) => void;
  setDurationSeconds: (arg0: number) => void;
}

const TAGS: Array<StreamingType> = [
  StreamingType.HDVideo,
  StreamingType.audioMP3,
  StreamingType.fullHDVideo,
  StreamingType.ultraHDVideo,
];

export default ({
  electricityCountry,
  setDurationSeconds,
  setStreamingType,
  streamingType,
  defaultValueSlider,
}: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setDurationSeconds(val);
  };
  const { hours, minutes } = time.convertMinutesToHoursAnMinutes(sliderValue / 60);
  const carbonValue = getInternetUsageCarbonImpact(
    sliderValue,
    streaming[streamingType] * sliderValue,
    electricityCountry
  );

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_SCREEN_STREAMING_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        {TAGS.map((item) => (
          <Tag
            key={item}
            selected={streamingType === item}
            title={ui.getTranslationModelType(item)}
            onPress={() => setStreamingType(item)}
          />
        ))}
        <View style={styles.separator} />
      </ScrollView>
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_DURATION")}</Text.H3>
        <Text.Primary lightGray>{hours + " hour(s) and " + minutes + " minute(s)."}</Text.Primary>
      </View>
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_TOTAL")}</Text.H3>
        <Text.H2 blue50>
          <FormattedNumber
            value={carbonValue > 1 ? carbonValue : carbonValue * 1000}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>{carbonValue > 1 ? "kgCO2eq" : "gCO2eq"}</Text.Primary>
        </Text.H2>
      </View>
    </React.Fragment>
  );
};
