import React from "react";
import { filter, pathEq } from "ramda";
import { t } from "../../utils";
import { TabbedView, GuidePreview } from "../../components";
import { Guide, GuideCategory } from "../../types/common-types";
// import styles from "./ActScreen.styles";
import Guides from "../../../assets/guides/guides.json";
import navigationOptions from "./ActScreen.navigationOptions";
import { navigate } from "../../navigation";

const isKitchen = pathEq(["category"], GuideCategory.kitchen);
const isTechnology = pathEq(["category"], GuideCategory.technology);

const ActScreen = (props) => {
  const kitchenGuides = filter(isKitchen, Guides) as Guide[];
  const techGuides = filter(isTechnology, Guides) as Guide[];
  const navigator = navigate(props.navigation);

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
                onPressItem={(guide: Guide) => navigator.openDetails({ guide })}
                onPressSeeAll={() => {
                  // do nothing.
                }}
              />
              <GuidePreview
                title={t("ACT_SCREEN_TECHNOLOGY")}
                listItems={techGuides}
                onPressItem={(guide: Guide) => navigator.openDetails({ guide })}
                onPressSeeAll={() => {
                  // do nothing.
                }}
              />
            </React.Fragment>
          ),
        },
        {
          title: t("ACT_SCREEN_FOOD"),
          component: (
            <GuidePreview
              title={t("ACT_SCREEN_FOOD")}
              listItems={kitchenGuides}
              onPressItem={(guide: Guide) => navigator.openDetails({ guide })}
              onPressSeeAll={() => {
                // do nothing.
              }}
            />
          ),
        },
      ]}
    />
  );
};

ActScreen.navigationOptions = navigationOptions;

export default ActScreen;
