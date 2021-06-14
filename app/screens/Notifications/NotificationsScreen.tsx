import React, { useCallback, useState } from "react";
import { View, Switch, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";

import { Text } from "components";
import { userPreferences } from "ducks";
import { t } from "utils";

import navigationOptions from "./NotificationsScreen.navigationOptions";
import styles from "./NotificationsScreen.styles";

const NotificationsScreen = () => {
  const dispatch = useDispatch();
  const [activated, setActivated] = useState(
    useSelector(userPreferences.selectors.getActivateNotifications)
  );

  const onValueChange = useCallback(
    async (value: boolean) => {
      try {
        await Notifications.requestPermissionsAsync();
        if (value) {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: t("NOTIFICATIONS_SCREEN_NOTIFICATION_TITLE"),
              body: t("NOTIFICATIONS_SCREEN_NOTIFICATION_BODY"),
            },
            trigger: {
              weekday: 1,
              hour: 21,
              minute: 0,
              repeats: true,
            },
          });
        } else {
          await Notifications.cancelAllScheduledNotificationsAsync();
        }
      } catch (e) {
        Alert.alert("Error", e);
      }
      setActivated(value);
      dispatch(userPreferences.actions.toggleNotifications(value));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <Text.Primary style={styles.intro}>{t("NOTIFICATIONS_SCREEN_INTRO")}</Text.Primary>
      <View style={styles.rowContainer}>
        <Text.Secondary bold>{t("NOTIFICATIONS_SCREEN_ACTIVATED")}</Text.Secondary>
        <Switch
          value={activated}
          onValueChange={onValueChange}
          accessibilityLabel="Notifications switch"
          accessibilityHint="Press to toggle notifications"
        />
      </View>
    </View>
  );
};

NotificationsScreen.navigationOptions = navigationOptions;

export default NotificationsScreen;
