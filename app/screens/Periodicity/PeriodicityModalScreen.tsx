import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NavStatelessComponent, PeriodicityType } from "interfaces";
import { TranslationKeys } from "screens/Periodicity/translations";
import { Button, Text } from "components";
import ClickableTag from "components/ClickableTag";
import { t } from "utils";

import styles from "./PeriodicityModalScreen.styles";
import navigationOptions from "./PeriodicityModal.navigationOptions";

const PeriodicityModalScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const [periodType, setPeriodType] = useState<PeriodicityType | null>(null);
  const [weekDays, setWeekdays] = useState<number[]>([]);
  const [times, setTimes] = useState<number | null>();

  function onWeekdaySelected(dayIndex: number) {
    setWeekdays(
      weekDays.includes(dayIndex) ? weekDays.filter((i) => i !== dayIndex) : [...weekDays, dayIndex]
    );
  }

  function onConfirm() {
    const periodicity = {
      periodType,
      periodWeekDays: periodType === PeriodicityType.weekly ? weekDays : null,
      times,
    };
    navigation.navigate("AddEmission", {
      periodicity,
    });
  }

  const hideConfirm =
    !periodType || !times || (periodType === PeriodicityType.weekly && weekDays.length === 0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tagSection}>
        <Text.H3>{t("PERIODICITY_MODAL_SCREEN_OFTEN")}</Text.H3>
        <View style={styles.tagsContainer}>
          <ClickableTag
            isSelected={periodType === PeriodicityType.monthly}
            onPress={() => {
              setPeriodType(PeriodicityType.monthly);
            }}
            text={t("PERIODICITY_MODAL_SCREEN_MONTHLY")}
            touchableStyle={styles.tag}
          />

          <ClickableTag
            isSelected={periodType === PeriodicityType.weekly}
            onPress={() => {
              setPeriodType(PeriodicityType.weekly);
            }}
            text={t("PERIODICITY_MODAL_SCREEN_WEEKLY")}
            touchableStyle={styles.tag}
          />
        </View>
      </View>
      {periodType === PeriodicityType.weekly && (
        <View style={styles.tagSection}>
          <Text.H3>{t("PERIODICITY_MODAL_SCREEN_DAYS")}</Text.H3>
          <View style={styles.tagsContainer}>
            {WEEK_DAYS_LIST.map(({ dayIndex, nameKey }) => {
              return (
                <ClickableTag
                  key={dayIndex}
                  isSelected={weekDays.includes(dayIndex)}
                  onPress={() => {
                    onWeekdaySelected(dayIndex);
                  }}
                  text={t(nameKey)}
                  touchableStyle={styles.tag}
                />
              );
            })}
          </View>
        </View>
      )}
      <View style={styles.tagSection}>
        <Text.H3>{t("PERIODICITY_MODAL_SCREEN_OCCURENES")}</Text.H3>
        <View style={styles.tagsContainer}>
          {TIMES_LIST.map((_, index) => (
            <ClickableTag
              key={index}
              isSelected={times === index + 1}
              onPress={() => {
                setTimes(index + 1);
              }}
              text={`${index + 1} ${t(`PERIODICITY_MODAL_SCREEN_TIME${index > 0 ? "S" : ""}`)}`}
              touchableStyle={styles.tag}
            />
          ))}
        </View>
      </View>

      {!hideConfirm && (
        <View style={styles.confirmBtnContainer}>
          <Button.Primary fullWidth onPress={onConfirm} textType={"Primary"}>
            <Text.Primary white center bold>
              {t("ADD_EMISSION_SCREEN_PICKER_MODAL_CONFIRM")}
            </Text.Primary>
          </Button.Primary>
        </View>
      )}
    </ScrollView>
  );
};

const TIMES_LIST = new Array(3).fill(null);

const WEEK_DAYS_LIST: {
  dayIndex: number;
  nameKey: keyof TranslationKeys;
}[] = [
  { dayIndex: 2, nameKey: "MONDAY" },
  { dayIndex: 3, nameKey: "TUESDAY" },
  { dayIndex: 4, nameKey: "WEDNESDAY" },
  { dayIndex: 5, nameKey: "THURSDAY" },
  { dayIndex: 6, nameKey: "FRIDAY" },
  { dayIndex: 0, nameKey: "SATURDAY" },
  { dayIndex: 1, nameKey: "SUNDAY" },
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PeriodicityModalScreen.navigationOptions = navigationOptions;

export default PeriodicityModalScreen;
