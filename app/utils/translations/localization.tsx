import React from "react";

interface LocalizationContextInterface {
  localization?: string;
}

const LocalizationContext = React.createContext({
  localization: "en",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocalization: (localization: string) => {
    //do nothing.
  },
});

const withLocalization = (Component) => {
  return class extends React.Component {
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

export { withLocalization, LocalizationContext, LocalizationContextInterface };
