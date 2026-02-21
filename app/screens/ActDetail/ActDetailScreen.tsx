import React from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RenderHTML } from "@native-html/render";

import { HTMLImage } from "components";
import { ui } from "utils";
import { NavStatelessComponent } from "interfaces";
import { useTabBarBottomPadding } from "hooks/useTabBarBottomPadding";

import styles from "./ActDetailScreen.styles";
import navigationOptions from "./ActDetailScreen.navigationOptions";

const baseFontStyle = { fontSize: 18 };

const ActDetailScreen: NavStatelessComponent = () => {
  const route = useRoute();

  // TODO : fix me
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { body } = route?.params;
  const contentWidth = useWindowDimensions().width;
  const paddingBottom = useTabBarBottomPadding();

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: paddingBottom }}
    >
      <RenderHTML
        source={{ html: body }}
        contentWidth={contentWidth}
        baseStyle={baseFontStyle}
        tagsStyles={{ a: styles.linkStyle }}
        renderersProps={{
          a: {
            onPress: ui.onHTMLBodyLinkPress,
          },
        }}
        renderers={{
          img: (attribs) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const [img] = attribs.src.split(".");
            return <HTMLImage uri={img} key={img} />;
          },
        }}
      />
    </ScrollView>
  );
};

ActDetailScreen.navigationOptions = navigationOptions();

export default ActDetailScreen;
