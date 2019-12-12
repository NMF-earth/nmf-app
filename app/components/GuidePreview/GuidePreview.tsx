import React from "react";
import { View, FlatList , TouchableOpacity } from "react-native";
import { t } from "../../utils/translations";

import { Button, Text } from "../../components";
import styles from "./GuidePreview.styles";
import { Guide } from "../../types/common-types";

interface Props {
  title: string;
  listItems: Guide[];
  onPress: (item: Guide) => void;
}

export default function ListView(props: Props) {
  return (
    <View>
      <Text.H3 style={styles.title}>{props.title}</Text.H3>
      <FlatList 
        style={styles.list}
        data={props.listItems} 
        renderItem={({ item }: { item: Guide }) => (
          <TouchableOpacity onPress={() => props.onPress(item)} style={styles.listItem}>
            <Text.Tertiary>{item.title}</Text.Tertiary>
          </TouchableOpacity>
        )}
      />
      <Button.Primary
        style={{ marginTop: 20, alignSelf: "center" }}
        onPress={() => {}}
        textType={"Primary"}
      >
        <Text.Primary bold white style={styles.buttonText}>
          {t("SEE_ALL")}
        </Text.Primary>
      </Button.Primary>
    </View>
  )
}
