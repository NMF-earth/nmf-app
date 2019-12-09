import React, { ReactElement, useState } from "react";
import { View, FlatList, ListViewDataSource } from "react-native";
import {Text} from "..";

import styles from "./ListView.styles";
//import colors from "../../style/colors";


interface Props {
  title: string;
  dataSource: ListViewDataSource;
}

export default function ListView(props: Props) {
  return (
    <View>
      <Text.H3 style={styles.title}>{props.title}</Text.H3>
      <FlatList 
        style={styles.list}
        data={props.dataSource} 
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text.Tertiary>{item.title}</Text.Tertiary>
          </View>
        )}
      />
    </View>
  )
}
