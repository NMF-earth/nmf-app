import * as Linking from "expo-linking";
import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

interface UseNavigateLinkProps {
  to?: string;
}

const useNavigateLink = ({ to }: UseNavigateLinkProps) => {
  const navigation = useNavigation();

  const urlCallback = useCallback(
    async (data) => {
      if (data && data?.url && !to) {
        const { path, queryParams } = Linking.parse(data.url);
        return navigation.navigate(path, {
          linkingQueryParams: queryParams,
        });
      }
    },
    [navigation, to]
  );

  useEffect(() => {
    Linking.addEventListener("url", urlCallback);
    //const a = Linking.getInitialURL().then((e) => alert(e));

    return () => {
      Linking.removeEventListener("url", urlCallback);
    };
  }, [urlCallback]);
};

export default useNavigateLink;
