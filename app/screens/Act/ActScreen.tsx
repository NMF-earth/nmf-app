import React from "react";
import { NavigationParams } from "react-navigation";
import { filter, pathEq } from "ramda";

import { t } from "../../utils/translations";
import { TabbedView, GuidePreview } from "../../components";
import { Guide, GuideCategory } from "../../types/common-types";
// import styles from "./ActScreen.styles";
import Guides from "../../../assets/guides/guides.json";
import navigationOptions from "./ActScreen.navigationOptions";

const isKitchen = pathEq(["category"], GuideCategory.kitchen);
const isTechnology = pathEq(["category"], GuideCategory.technology);

interface Props {
  navigation: {
    push: (screen: string, params: NavigationParams) => void;
  };
}

const ActScreen = (props: Props) => {
  const kitchenGuides = filter(isKitchen, Guides) as Guide[];
  const techGuides = filter(isTechnology, Guides) as Guide[];

  return (
    <TabbedView
      items={[
        {
          title: t("ACT_SCREEN_HABITS"),
          component: (
            <React.Fragment>
              <GuidePreview
                title={t("ACT_SCREEN_KITCHEN")}
                listItems={kitchenGuides}
                onPressItem={(guide: Guide) =>
                  props.navigation.push("Details", { guide })
                }
                onPressSeeAll={() => {
                  // do nothing.
                }}
              />
              <GuidePreview
                title={t("ACT_SCREEN_TECHNOLOGY")}
                listItems={techGuides}
                onPressItem={(guide: Guide) =>
                  props.navigation.push("Details", { guide })
                }
                onPressSeeAll={() => {
                  // do nothing.
                }}
              />
            </React.Fragment>
          )
        },
        {
          title: t("ACT_SCREEN_FOOD"),
          component: (
            <GuidePreview
              title={t("ACT_SCREEN_FOOD")}
              listItems={kitchenGuides}
              onPressItem={(guide: Guide) =>
                props.navigation.push("Details", { guide })
              }
              onPressSeeAll={() => {
                // do nothing.
              }}
            />
          )
        }
      ]}
    />
  );
};

ActScreen.navigationOptions = navigationOptions;

export default ActScreen;
