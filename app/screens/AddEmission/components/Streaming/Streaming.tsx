import React, { useState } from "react";
import { View, ScrollView, Slider } from "react-native";
import { FormattedNumber } from "react-native-globalize";
import {
  streaming,
  StreamingEnum,
  getInternetUsageCarbonImpact,
  ElectricityEnum,
} from "carbon-footprint";
import styles from "./Streaming.styles";
import { Text, Tag } from "../../../../components";
import { Colors } from "../../../../style";
import { t, time, ui } from "../../../../utils";

const MIN_SLIDER_VALUE = 15 * 60;
const MAX_SLIDER_VALUE = 10 * 60 * 60;

interface Props {
  defaultValueSlider: number;
  streamingType: string;
  setStreamingType: (arg0: StreamingEnum) => void;
  setDurationSeconds: (arg0: number) => void;
}

const TAGS: Array<StreamingEnum> = [
  StreamingEnum.HDVideo,
  StreamingEnum.audioMP3,
  StreamingEnum.fullHDVideo,
  StreamingEnum.ultraHDVideo,
];

export default ({
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
  const { hours, minutes } = time.convertMinutesToHoursAnMinutes(
    sliderValue / 60
  );
  const carbonValue = getInternetUsageCarbonImpact(
    sliderValue,
    streaming[streamingType] * sliderValue,
    ElectricityEnum.world
  );

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_STREAMING_TYPE")}</Text.H3>
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
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_DURATION")}
        </Text.H3>
        <Text.Primary lightGray>
          {hours + " hour(s) and " + minutes + " minute(s)."}
        </Text.Primary>
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
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_TOTAL")}</Text.H3>
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
