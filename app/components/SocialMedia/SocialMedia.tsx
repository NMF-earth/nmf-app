import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import { Colors } from "style";

import styles from "./SocialMedia.styles";

const socialMedia = [
  {
    iconName: "slack",
    url:
      "https://join.slack.com/t/not-my-fault/shared_invite/enQtODMzMzcyNjExMzc3LTVlNDQwMTA0OGUxMmJmNTE4MTA4MTgwZGZmNTBiZmRhNTcxY2FlN2MzZGQyMmRjZDVjN2Q2MjFlNzE4ZGI5ZTI",
  },
  {
    iconName: "github-circle",
    url: "https://github.com/NMF-earth",
  },
  {
    iconName: "mastodon",
    url: "https://mastodon.social/@nmf_earth",
  },
  {
    iconName: "medium",
    url: "https://medium.com/@nmf_earth",
  },
];

export default () => (
  <View style={styles.container}>
    <View style={styles.box}>
      {socialMedia.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
          <MaterialCommunityIcons
            name={item.iconName}
            size={32}
            color={Colors.grey70}
          />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
