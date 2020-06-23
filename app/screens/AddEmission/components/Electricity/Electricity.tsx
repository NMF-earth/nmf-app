import React, { useState } from "react";
import { View, Slider } from "react-native";

import { Text } from "../../../../components";
import { Colors } from "../../../../style";
import { t } from "../../../../utils";
import styles from "./Electricity.styles";

const MIN_SLIDER_VALUE = 10;
const MAX_SLIDER_VALUE = 10000;

interface Props {
  defaultValueSlider: number;
  setElectricityConsumption: (arg0: number) => void;
}

const Electricity = ({
  setElectricityConsumption,
  defaultValueSlider,
}: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);
  setElectricityConsumption(sliderValue);

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>
          {t("ADD_EMISSION_ELECTRICITY_CONSUMPTION")}
        </Text.H3>
        <View style={{ flexDirection: "row" }}>
          <Text.H2 blue50>
            {Math.round(sliderValue)}
            <Text.Primary>{" kWh"}</Text.Primary>
          </Text.H2>
        </View>
      </View>
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={setSliderValue}
      />
    </>
  );
};

export default Electricity;
