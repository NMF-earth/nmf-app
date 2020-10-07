import React, { useState } from "react";
import { TextInput as TextInputRN, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./TextInput.styles";

interface Prop {
  isOptional: boolean;
  placeholder?: string;
  title: string;
  value: string;
  onChangeText: (text: string) => void;
}
const TextInput = ({
  isOptional,
  onChangeText,
  value,
  placeholder,
  title,
}: Prop) => {
  const [isVisible, setIsVisible] = useState(isOptional ? false : true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={isOptional ? 0.2 : 1}
        onPress={() => (isOptional ? setIsVisible(!isVisible) : {})}
        style={styles.containerOptionalTitle}
      >
        {isOptional && (
          <Ionicons
            name={"md-add-circle"}
            size={24}
            color={Colors.green50}
            style={styles.icon}
          />
        )}
        <Text.H3 green={isOptional}>{title}</Text.H3>
      </TouchableOpacity>
      {isVisible && (
        <TextInputRN
          placeholder={placeholder}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      )}
    </View>
  );
};

export default TextInput;
