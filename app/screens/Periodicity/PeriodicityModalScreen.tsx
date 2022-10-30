import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { pathOr } from "ramda";
import { useRoute } from "@react-navigation/core";

import { NavStatelessComponent, PeriodicityType } from "interfaces";
import { Button, Text } from "components";
import ClickableTag from "components/ClickableTag";
import { t } from "utils";
import { WEEK_DAYS } from "constant/weekDays";

import styles from "./PeriodicityModalScreen.styles";

const DEFAULT_VALUES = {
  periodType: PeriodicityType.monthly,
  weekDays: [],
  periodTimes: 0,
};

const getPeriodType = pathOr(DEFAULT_VALUES.periodType, ["params", "periodType"]);
const getWeekDays = pathOr(DEFAULT_VALUES.weekDays, ["params", "periodWeekDays"]);
const getTimes = pathOr(DEFAULT_VALUES.periodTimes, ["params", "periodTimes"]);

export const PeriodicityModalScreen: NavStatelessComponent = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [periodType, setPeriodType] = useState<PeriodicityType>(getPeriodType(route));
  const [weekDays, setWeekdays] = useState<number[]>(getWeekDays(route));
  const [periodTimes, setTimes] = useState<number>(getTimes(route));

  function onWeekdaySelected(dayIndex: number) {
    setWeekdays(
      weekDays.includes(dayIndex) ? weekDays.filter((i) => i !== dayIndex) : [...weekDays, dayIndex]
    );
  }

  function onConfirm() {
    navigation.navigate(
      "AddEmission" as never,
      {
        periodType,
        periodWeekDays: periodType === PeriodicityType.weekly ? weekDays : null,
        periodTimes,
      } as never
    );
  }

  function onCancel() {
    navigation.navigate(
      "AddEmission" as never,
      {
        periodType: DEFAULT_VALUES.periodType,
        periodWeekDays: DEFAULT_VALUES.weekDays,
        periodTimes: DEFAULT_VALUES.periodTimes,
      } as never
    );
  }

  const hideConfirm =
    !periodType || !periodTimes || (periodType === PeriodicityType.weekly && weekDays.length === 0);

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
            {WEEK_DAYS.map(({ dayIndex, nameKey }) => {
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
              isSelected={periodTimes === index + 1}
              onPress={() => {
                setTimes(index + 1);
              }}
              text={`${index + 1} ${index > 0 ? t("UI_TIMES") : t("UI_TIME")}`}
            />
          ))}
        </View>
      </View>

      {!hideConfirm && (
        <View style={styles.confirmBtnContainer}>
          <Button.Primary
            fullWidth
            onPress={onConfirm}
            text={t("PERIODICITY_MODAL_SCREEN_COMFIRM")}
          />
          <View style={{ height: 12 }} />
          <Button.Secondary
            fullWidth
            onPress={onCancel}
            text={t("PERIODICITY_MODAL_SCREEN_CANCEL_NO_PERIODICITY")}
          />
        </View>
      )}
    </ScrollView>
  );
};

const TIMES_LIST = new Array(3).fill(null);
