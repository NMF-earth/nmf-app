import React from "react";
import { ScrollView, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { useSelector, useDispatch } from "react-redux";

import { Text, Button } from "components";
import { t } from "utils";
import {
  emissions as emissionsDucks,
  budget,
  userPreferences,
  recurringEmissions as recurringEmissionsDucks,
} from "ducks";
import { NavStatelessComponent } from "interfaces";

import styles from "./MyDataScreen.styles";
import navigationOptions from "./MyDataScreen.navigationOptions";

const MyDataScreen: NavStatelessComponent = () => {
  const dispatch = useDispatch();
  const emissions = useSelector(emissionsDucks.selectors.getAllEmissions);
  const recurringEmissions = useSelector(
    recurringEmissionsDucks.selectors.getAllRecurringEmissions
  );
  const monthlyCarbonBudget = useSelector(budget.selectors.getMonthlyCarbonBudget);
  const location = useSelector(userPreferences.selectors.getLocation);

  const onDelete = () => {
    Alert.alert(t("MY_DATA_SCREEN_ALERT_CONFIRM"), t("MY_DATA_SCREEN_ALERT_CONFIRM_DELETE"), [
      {
        text: t("MY_DATA_SCREEN_CANCEL"),
        onPress: () => null,
      },
      {
        style: "destructive",
        text: t("MY_DATA_SCREEN_OK"),
        onPress: () => {
          dispatch(emissionsDucks.actions.deleteAllEmissions());
          dispatch(recurringEmissionsDucks.actions.deleteAllRecurringEmissions());
          Alert.alert(t("MY_DATA_SCREEN_DELETE_SUCCESSFUL"));
        },
      },
    ]);
  };

  const onImport = () => {
    Alert.alert(t("MY_DATA_SCREEN_ALERT_CONFIRM"), t("MY_DATA_SCREEN_ALERT_CONFIRM_IMPORT"), [
      {
        text: t("MY_DATA_SCREEN_CANCEL"),
        style: "cancel",
        onPress: () => null,
      },
      {
        text: t("MY_DATA_SCREEN_OK"),
        onPress: async () => {
          const result = await DocumentPicker.getDocumentAsync({});

          if (!result.canceled) {
            try {
              const pickedFile = new File(result.assets[0].uri);
              const content = await pickedFile.text();
              const data = JSON.parse(content);
              const {
                budget: { monthlyCarbonBudget },
                emissions,
                recurringEmissions,
                userPreferences: { location },
              } = data;

              if (monthlyCarbonBudget && location && emissions) {
                dispatch(budget.actions.setMonthlyCarbonBudget(monthlyCarbonBudget));
                dispatch(emissionsDucks.actions.loadEmissionsFromImport(emissions));
                dispatch(
                  recurringEmissionsDucks.actions.loadRecurringEmissionsFromImport(
                    recurringEmissions
                  )
                );
                dispatch(userPreferences.actions.updateLocation(location));
              } else {
                throw `monthlyCarbonBudget :${!!monthlyCarbonBudget}, location: ${!!location}, emissions: ${!!emissions}, recurringEmissions: ${!!recurringEmissions}`;
              }
            } catch (error) {
              Alert.alert(
                t("MY_DATA_SCREEN_GENERIC_ERROR"),
                JSON.stringify(error.message ? error.message : error)
              );
            }
          }
        },
      },
    ]);
  };

  const onExport = async () => {
    const data = JSON.stringify({
      emissions,
      recurringEmissions,
      budget: {
        monthlyCarbonBudget,
      },
      userPreferences: {
        location,
      },
    });

    try {
      const exportFile = new File(Paths.cache, "my-data-nmf-earth.json");
      // Delete existing file if it exists to avoid "already exists" error
      if (exportFile.exists) {
        exportFile.delete();
      }
      exportFile.create();
      exportFile.write(data);
      await Sharing.shareAsync(exportFile.uri);
    } catch (error) {
      Alert.alert(t("MY_DATA_SCREEN_GENERIC_ERROR"), error.message);
    }
  };

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <Text.Primary style={styles.paragraph}>{t("MY_DATA_SCREEN_BODY")}</Text.Primary>
      <Button.Primary
        fullWidth
        icon={"cloud-upload"}
        style={styles.button}
        text={t("MY_DATA_SCREEN_EXPORT_MY_DATA")}
        onPress={onExport}
      />
      <Button.Secondary
        fullWidth
        icon={"cloud-download"}
        style={styles.button}
        text={t("MY_DATA_SCREEN_IMPORT_DATA")}
        onPress={onImport}
      />
      <Button.Danger
        fullWidth
        icon={"trash"}
        style={styles.button}
        text={t("MY_DATA_SCREEN_DELETE_ALL_MY_DATA")}
        onPress={onDelete}
      />
    </ScrollView>
  );
};

MyDataScreen.navigationOptions = navigationOptions();

export default MyDataScreen;
