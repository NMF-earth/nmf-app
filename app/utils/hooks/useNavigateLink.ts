import * as Linking from "expo-linking";
import { QueryParams } from "expo-linking";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import navigate from "../../navigation/navigate";
interface LinkData {
  path: string;
  queryParams: QueryParams;
}

const useNavigateLink = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [linkData, setLinkData] = useState<LinkData | undefined>();

  const parseURLCallback = useCallback((data) => {
    if (data && data?.url) {
      const { path, queryParams } = Linking.parse(data.url);
      return setLinkData({ path, queryParams });
    }
    setLinkData(undefined);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const url = await Linking.getInitialURL();
        parseURLCallback({ url });
      } catch (e) {
        //TODO: Will this display a warning to the user?
        console.error(e);
      }
    })();
  }, [parseURLCallback]);

  useEffect(() => {
    Linking.addEventListener("url", parseURLCallback);
    if (linkData && linkData.path) {
      if (navigator[linkData.path]) {
        navigator[linkData.path]({ linkingQueryParams: linkData.queryParams });
      } else {
        navigation.navigate(linkData.path, {
          linkingQueryParams: linkData.queryParams,
        });
      }
    }
    return () => {
      Linking.removeEventListener("url", parseURLCallback);
    };
  }, [parseURLCallback, linkData, navigation, navigator]);
};

export default useNavigateLink;
