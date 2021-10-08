import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./FaqComponent.styles";
import Text from "../Text";

interface Props {
  title: string;
  showTopLine?: boolean;
  showBottomLine?: boolean;
  description?: string;
}

const FaqComponent: React.FC<Props> = ({ title, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => setIsClicked(!isClicked)} style={styles.toppomContainer}>
        {isClicked ? (
          <Ionicons
            color="#3957D0"
            style={styles.mainIcon}
            name="ios-chevron-down-outline"
            size={22}
          />
        ) : (
          <Ionicons
            color="#3957D0"
            style={styles.mainIcon}
            name="ios-chevron-up-outline"
            size={22}
          />
        )}
        <Text.Primary bold>{title}</Text.Primary>
      </TouchableOpacity>
      {isClicked && description && (
        <View style={styles.bottomContainer}>
          <Text.Tertiary>{description}</Text.Tertiary>
        </View>
      )}
    </View>
  );
};

export default FaqComponent;
