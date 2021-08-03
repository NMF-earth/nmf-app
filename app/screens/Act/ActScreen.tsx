import React from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { filter, pathEq } from "ramda";

import { ListItem, Text } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";

import { Guide } from "../../types/guide";
import Guides from "../../../assets/guides/guides.json";
import navigationOptions from "./ActScreen.navigationOptions";
import styles from "./ActScreen.styles";

const getCategory = pathEq(["category"]);

const ActScreen: NavStatelessComponent = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = filter(getCategory(route.name), Guides) as Guide[];
  const navigator = navigate(navigation);

  const renderItem = ({ item, index }) => (
    <ListItem
      key={index}
      showBottomLine={index != data.length - 1}
      title={item.title}
      onPress={() => navigator.openActDetails(item)}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      ListFooterComponent={
        <Text.Tertiary style={styles.comingSoonText} center lightGray>
          More coming soon! Stay tuned ✌️
        </Text.Tertiary>
      }
    />
  );
};

ActScreen.navigationOptions = navigationOptions();

export default ActScreen;
