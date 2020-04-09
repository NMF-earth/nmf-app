import React from "react";

interface LocalizationContextProps {
  localization?: string;
}

const LocalizationContext = React.createContext({
  localization: "en",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocalization: (localization: string) => {
    //do nothing.
  },
});

const withLocalization = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return class extends React.Component<P> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    static navigationOptions = Component.navigationOptions;

    render() {
      return (
        <LocalizationContext.Consumer>
          {({ localization, setLocalization }) => (
            <Component
              localization={localization}
              setLocalization={setLocalization}
              {...this.props}
            />
          )}
        </LocalizationContext.Consumer>
      );
    }
  };
};

export { withLocalization, LocalizationContext, LocalizationContextProps };
