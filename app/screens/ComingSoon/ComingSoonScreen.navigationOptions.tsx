import React from "react";
import { Header } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { Colors, ComponentsStyle } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { navigate } from "../../navigation";

const navigationOptions = ({ navigation }) => ({
  headerStyle: {
    ...ComponentsStyle.header,
    borderBottomWidth: 0,
    marginRight: PADDING_HORIZONTAL,
  },
  header: (props) => <Header {...props} />,
  headerLeft: null,
  headerRight: (
    <Ionicons
      name="md-close"
      size={32}
      color={Colors.darkLink}
      onPress={() => {
        navigate(navigation).goBack();
      }}
    />
  ),
});

export default navigationOptions;
