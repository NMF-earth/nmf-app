import React from "react";
import { FlatList } from "react-native";
import { filter, pathEq } from "ramda";

import { ListItem, Text } from "components";
import { navigate } from "navigation";

import { Guide } from "../../types/guide";
import Guides from "../../../assets/guides/guides.json";
import navigationOptions from "./ActScreen.navigationOptions";
import styles from "./ActScreen.styles";

const getCategory = pathEq(["category"]);

const ActScreen = (props) => {
  const { route, navigation } = props;
  const data = filter(getCategory(route.name), Guides) as Guide[];
  const navigator = navigate(navigation);

  const renderItem = ({ item }) => (
    <ListItem
      key={item.title}
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

ActScreen.navigationOptions = navigationOptions;

export default ActScreen;
