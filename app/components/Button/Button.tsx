import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./Button.styles";
import mainStyle from "./styles";

const PADDING_VERTICAL = 12;

type ButtonType = "Primary" | "Secondary" | "Danger";

type Props = {
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
  onPress: () => void;
  text: string;
  icon?: string;
};

interface ButtonFactory {
  (type: ButtonType): React.FC<Props>;
}

const buttonFactory: ButtonFactory = (type) => (props) => {
  const style = [mainStyle.default, styles[type].default, props.style];
  const { fullWidth, onPress, text, icon } = props;
  let iconItem = null;

  if (fullWidth) {
    style.push(mainStyle.fullWidth);
  }

  if (icon) {
    iconItem = <Ionicons name={icon} size={24} style={mainStyle.mainIcon} color={Colors.white} />;
  }

  const additionalStyle = {
    paddingVertical: PADDING_VERTICAL,
    borderRadius: PADDING_VERTICAL * 2,
  };
  return (
    <TouchableOpacity onPress={onPress} {...props} style={[style, additionalStyle]}>
      <Text.Primary bold center white>
        {text}
      </Text.Primary>
      {iconItem}
    </TouchableOpacity>
  );
};

const Primary = buttonFactory("Primary");
const Secondary = buttonFactory("Secondary");
const Danger = buttonFactory("Danger");

export default { Primary, Secondary, Danger };
