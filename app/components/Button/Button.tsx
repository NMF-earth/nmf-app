import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Font } from "style";
import { Text } from "components";

import styles from "./Button.styles";
import mainStyle from "./styles";

const PADDING_VERTICAL = 12;

type ButtonType = "Primary" | "Secondary";

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  fullWidth?: boolean;
  textType: ButtonType;
  black?: boolean;
  red?: boolean;
  text?: string;
  icon?: string;
  onPress: () => void;
};

interface ButtonFactory {
  (type: ButtonType): React.FC<Props>;
}

const buttonFactory: ButtonFactory = (type) => (props) => {
  let iconItem = null;
  let textItem = null;

  const customStyle = [mainStyle.default, styles[type].default, props.style];
  const { fullWidth, children, textType, black, red, onPress, icon, text } = props;

  if (fullWidth) {
    customStyle.push(mainStyle.fullWidth);
  }

  if (black) {
    customStyle.push(mainStyle.black);
  }

  if (red) {
    customStyle.push(mainStyle.red);
  }

  const additionalStyle = {
    paddingVertical: PADDING_VERTICAL,
    borderRadius: PADDING_VERTICAL * 2 + Font.FontSize[textType],
  };

  if (icon) {
    iconItem = <Ionicons name={icon} size={24} style={mainStyle.mainIcon} color={Colors.white} />;
  }

  if (text) {
    textItem = (
      <Text.Primary bold center white>
        {text}
      </Text.Primary>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} {...props} style={[customStyle, additionalStyle]}>
      {iconItem}

      {textItem}

      {children}
    </TouchableOpacity>
  );
};

const Primary = buttonFactory("Primary");
const Secondary = buttonFactory("Secondary");

export default { Primary, Secondary };
