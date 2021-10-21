import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NavStatelessComponent, PeriodicityType } from "interfaces";
import { Button, Text } from "components";
import ClickableTag from "components/ClickableTag";
import { TranslationKeys } from "utils/translations/resources";
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
          />

          <ClickableTag
            isSelected={periodType === PeriodicityType.weekly}
            onPress={() => {
              setPeriodType(PeriodicityType.weekly);
            }}
            text={t("PERIODICITY_MODAL_SCREEN_WEEKLY")}
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
                />
              );
            })}
          </View>
        </View>
      )}
      <View style={styles.tagSection}>
        <Text.H3>{t("PERIODICITY_MODAL_SCREEN_OCCURRENCES")}</Text.H3>
        <View style={styles.tagsContainer}>
          {TIMES_LIST.map((_, index) => (
            <ClickableTag
              key={index}
              isSelected={times === index + 1}
              onPress={() => {
                setTimes(index + 1);
              }}
              text={`${index + 1} ${
                index > 0 ? t("PERIODICITY_MODAL_SCREEN_TIMES") : t("PERIODICITY_MODAL_SCREEN_TIME")
              }`}
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
  { dayIndex: 2, nameKey: "UI_MONDAY" },
  { dayIndex: 3, nameKey: "UI_TUESDAY" },
  { dayIndex: 4, nameKey: "UI_WEDNESDAY" },
  { dayIndex: 5, nameKey: "UI_THURSDAY" },
  { dayIndex: 6, nameKey: "UI_FRIDAY" },
  { dayIndex: 0, nameKey: "UI_SATURDAY" },
  { dayIndex: 1, nameKey: "UI_SUNDAY" },
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PeriodicityModalScreen.navigationOptions = navigationOptions;

export default PeriodicityModalScreen;
