import React from "react";
import { View, Linking } from "react-native";

import { t } from "utils";

import Button from "../Button";
import Text from "../Text";
import styles from "./PermissionsRequest.styles";

type PermissionType = "camera" | "notification";

interface Props {
  type: PermissionType;
}

const PermissionsRequest: React.FC<Props> = ({ type }) => {
  const onPress = () => Linking.openSettings();
  let title = "";
  let subTitle = "";

  if (type === "camera") {
    title = t("PERMISSIONS_REQUEST_COMPONENT_CAMERA_TITLE");
    subTitle = t("PERMISSIONS_REQUEST_COMPONENT_CAMERA_SUBTITLE");
  }

  if (type === "notification") {
    title = t("PERMISSIONS_REQUEST_COMPONENT_NOTIFICATION_TITLE");
    subTitle = t("PERMISSIONS_REQUEST_COMPONENT_NOTIFICATION_SUBTITLE");
  }

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.centeredContainer]}>
        <Text.H2 center>{title}</Text.H2>
        <Text.Primary center>{subTitle}</Text.Primary>
      </View>
      <Button.Secondary
        icon={"settings"}
        style={styles.button}
        text={t("PERMISSIONS_REQUEST_COMPONENT_OPEN_SETTINGS")}
        onPress={onPress}
      />
    </View>
  );
};

export default PermissionsRequest;
