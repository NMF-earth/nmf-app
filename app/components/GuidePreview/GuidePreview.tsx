import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { t } from "../../utils/translations";

import { Button, Text } from "../../components";
import styles from "./GuidePreview.styles";
import { Guide } from "../../types/common-types";

interface Props {
  title: string;
  listItems: Guide[];
  onPress: (item: Guide) => void;
}

export default function GuidePreview(props: Props) {
  return (
    <React.Fragment>
      <Text.H3 style={styles.title}>{props.title}</Text.H3>
      <FlatList
        style={styles.list}
        data={props.listItems}
        renderItem={({ item }: { item: Guide }) => (
          <TouchableOpacity
            onPress={() => props.onPress(item)}
            style={styles.listItem}
          >
            <Text.Tertiary>{item.title}</Text.Tertiary>
          </TouchableOpacity>
        )}
      />
      <Button.Primary
        style={styles.button}
        onPress={() => {}}
        textType={"Primary"}
      >
        <Text.Primary bold white style={styles.buttonText}>
          {t("SEE_ALL")}
        </Text.Primary>
      </Button.Primary>
    </React.Fragment>
  );
}
