import React, { useCallback, useState } from "react";
import { View, Switch, Alert, Linking } from "react-native";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";

import { NavStatelessComponent } from "interfaces";
import { Text } from "components";
import { userPreferences } from "ducks";
import { t } from "utils";

import navigationOptions from "./NotificationsScreen.navigationOptions";
import styles from "./NotificationsScreen.styles";

const notification = {
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
};

const NotificationsScreen: NavStatelessComponent = () => {
  const dispatch = useDispatch();
  const [activated, setActivated] = useState(
    useSelector(userPreferences.selectors.getActivateNotifications)
  );

  const onValueChange = useCallback(
    async (value: boolean) => {
      try {
        const permission = await Notifications.requestPermissionsAsync();

        if (permission.granted && value) {
          await Notifications.scheduleNotificationAsync(notification);
        } else {
          await Notifications.cancelAllScheduledNotificationsAsync();

          if (!permission.granted) {
            Linking.openSettings();
          }
        }

        setActivated(permission.granted && value);
        dispatch(userPreferences.actions.toggleNotifications(permission.granted && value));
      } catch (e) {
        Alert.alert("Error", e);
      }
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <Text.Primary style={styles.intro}>{t("NOTIFICATIONS_SCREEN_INTRO")}</Text.Primary>
      <View style={styles.rowContainer}>
        <Text.Secondary bold>{t("NOTIFICATIONS_SCREEN_ACTIVATED")}</Text.Secondary>
        <Switch value={activated} onValueChange={onValueChange} />
      </View>
    </View>
  );
};

NotificationsScreen.navigationOptions = navigationOptions();

export default NotificationsScreen;
