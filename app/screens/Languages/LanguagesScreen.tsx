import React, { useCallback } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { SelectableListItem } from "components";
import { userPreferences } from "ducks";

import SupportedLanguages from "./SupportedLanguages";
import navigationOptions from "./LanguagesScreen.navigationOptions";
import styles from "./LanguagesScreen.styles";

const Language: React.FC<{
  selectedLanguage: string;
  language: string;
  onSelectLanguage: (language: string) => void;
}> = ({ language, onSelectLanguage, selectedLanguage }) => {
  const onClickLanguage = useCallback(() => {
    onSelectLanguage?.(language);
  }, [language, onSelectLanguage]);

  return (
    <SelectableListItem
      key={language}
      selected={selectedLanguage === language}
      title={SupportedLanguages[language]}
      onPress={onClickLanguage}
    />
  );
};

const LanguagesScreen = () => {
  const dispatch = useDispatch();
  const language = useSelector(userPreferences.selectors.getLanguage);
  const onPress = useCallback(
    (lang: string) => {
      dispatch(userPreferences.actions.changeLanguage(lang));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.keys(SupportedLanguages).map((lang: string) => (
          <Language
            key={lang}
            selectedLanguage={language}
            language={lang}
            onSelectLanguage={onPress}
          />
        ))}
      </ScrollView>
    </View>
  );
};

LanguagesScreen.navigationOptions = navigationOptions;

export default LanguagesScreen;
