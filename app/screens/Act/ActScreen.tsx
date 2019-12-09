import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { t } from "../../utils/translations";
import TabbedView from "../../components/TabbedView";
import ListView from "../../components/ListView/ListView";
import { Button, Text } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

const dataList = [
  {
    title: "Don’t throw away peels",
    key: "1",
  },
  {
    title: "Make a compost on your balcony",
    key: "2",
  },
  {
    title: "Make your own soap",
    key: "3"
  }
]

const dataList2 = [
  {
    title: "Install an ad blocker",
    key: "1",
  },
  {
    title: "Clean your mailbox",
    key: "2",
  },
  {
    title: "Find replacement for GAFA services",
    key: "3"
  }
]

export default function ActScreen(): React.ReactElement {
  return <ScrollView style={styles.container}>
    <TabbedView
      items={[
        { title: t("HABITS"), component: (
          <View>
            <ListView title="Kitchen" dataSource={dataList} />
            <Button.Primary
              style={{ marginTop: 20, alignSelf: "center" }}
              onPress={() => {}}
              textType={"Primary"}
            >
              <Text.Primary bold white style={{ textAlign: "center" }}>
                See All
              </Text.Primary>
            </Button.Primary>
            <ListView title="Technology" dataSource={dataList2} />
            <Button.Primary
              style={{ marginTop: 20, alignSelf: "center" }}
              onPress={() => {}}
              textType={"Primary"}
            >
              <Text.Primary bold white style={{ textAlign: "center" }}>
                See All
              </Text.Primary>
            </Button.Primary>
          </View>
        )},
        { title: t("FOOD"), component: (
          <React.Fragment>
            <ListView title="Food" dataSource={dataList} />
            <Button.Primary
              fullWidth={false}
              onPress={() => {}}
              textType={"Primary"}
            >
              <Text.Primary bold white style={{ textAlign: "center" }}>
                See All
              </Text.Primary>
            </Button.Primary>
          </React.Fragment>
        )},
      ]}
    />
  </ScrollView>;
}

ActScreen.navigationOptions = {
  title: t("ACT")
};
