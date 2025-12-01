import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import { Colors } from "style";

import styles from "./SocialMedia.styles";

const socialMedia = [
  {
    iconName: "github",
    url: "https://github.com/NMF-earth",
  },
  {
    iconName: "globe",
    url: "https://nmf-earth.github.io",
  },
];

const SocialMedia: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      {socialMedia.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
          <FontAwesome5 name={item.iconName} size={32} color={Colors.grey70} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default SocialMedia;
