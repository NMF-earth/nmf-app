import React, { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

interface Props {
  name: string;
  focused: boolean;
}

export default function TabBarIcon(props: Props): ReactElement {
  return (
    <Ionicons
      name={props.name}
      size={26}
      color={props.focused ? Colors.green50 : Colors.grey40}
    />
  );
}
