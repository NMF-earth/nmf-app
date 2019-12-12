import React, { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../style/colors";

interface Props {
  name: string;
  focused: boolean;
}

export default function TabBarIcon(props: Props): ReactElement {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -6 }}
      color={props.focused ? colors.linkGreen : colors.swordGray}
    />
  );
}
