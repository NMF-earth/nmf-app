/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/ban-types */
/* eslint-disable  @typescript-eslint/ban-ts-comment */

import React from "react";

/* leave optional or ts complains */
interface LocalizationContextProps {
  language?: string;
  locale?: string;
}

const LocalizationContext = React.createContext({
  language: "en",
  locale: "en_GB",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (language: string) => {
    //do nothing.
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocale: (locale: string) => {
    //do nothing.
  },
});

const withLocalization = <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P> {
    // @ts-ignore
    static navigationOptions = Component.navigationOptions;

    render() {
      return (
        <LocalizationContext.Consumer>
          {({ language, setLanguage, locale, setLocale }) => (
            <Component
              language={language}
              setLanguage={setLanguage}
              locale={locale}
              setLocale={setLocale}
              {...this.props}
            />
          )}
        </LocalizationContext.Consumer>
      );
    }
  };
};

export { withLocalization, LocalizationContext, LocalizationContextProps };
