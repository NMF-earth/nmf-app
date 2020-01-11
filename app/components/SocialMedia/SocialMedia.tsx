import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking } from "expo";

import styles from "./SocialMedia.styles";

const socialMedia = [
  {
    iconName: "instagram",
    url: "https://www.instagram.com/nmf_earth/",
    color: "#c32aa3"
  },
  {
    iconName: "slack",
    url:
      "https://join.slack.com/t/not-my-fault/shared_invite/enQtODMzMzcyNjExMzc3LTVlNDQwMTA0OGUxMmJmNTE4MTA4MTgwZGZmNTBiZmRhNTcxY2FlN2MzZGQyMmRjZDVjN2Q2MjFlNzE4ZGI5ZTI",
    color: "#4a154b"
  },
  {
    iconName: "github-circle",
    url: "https://github.com/NotMyFaultEarth",
    color: "#333333"
  },
  {
    iconName: "twitter",
    url: "https://twitter.com/nmf_earth",
    color: "#2b90d9"
  },
  {
    iconName: "mastodon",
    url: "https://mastodon.social/@nmf_earth",
    color: "#2b90d9"
  },
  {
    iconName: "medium",
    url: "https://medium.com/@nmf_earth",
    color: "#02b875"
  }
];

export default () => (
  <View style={styles.container}>
    {socialMedia.map((item, index) => (
      <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
        <MaterialCommunityIcons
          name={item.iconName}
          size={32}
          color={item.color}
        />
      </TouchableOpacity>
    ))}
  </View>
);
