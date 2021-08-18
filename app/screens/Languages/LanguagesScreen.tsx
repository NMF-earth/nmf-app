import React, { useCallback, useContext } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

import { SelectableListItem } from "components";
import { userPreferences } from "ducks";
import { LocalizationContext, supportedLanguages } from "utils";
import { NavStatelessComponent } from "interfaces";

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
      title={supportedLanguages[language]}
      onPress={onClickLanguage}
    />
  );
};

const LanguagesScreen: NavStatelessComponent = () => {
  const dispatch = useDispatch();
  const { language, setLanguage } = useContext(LocalizationContext);
  const onPress = useCallback(
    (lang: string) => {
      dispatch(userPreferences.actions.changeLanguage(lang));
      setLanguage(lang);
    },
    [dispatch, setLanguage]
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.keys(supportedLanguages).map((lang: string) => (
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

LanguagesScreen.navigationOptions = navigationOptions();

export default LanguagesScreen;
