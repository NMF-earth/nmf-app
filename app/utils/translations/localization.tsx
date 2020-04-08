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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withLocalization = (Component: React.ComponentType<any>) => (props) => (
  <LocalizationContext.Consumer>
    {({ localization, setLocalization }) => (
      <Component
        {...props}
        localization={localization}
        setLocalization={setLocalization}
        {...this.props}
      />
    )}
  </LocalizationContext.Consumer>
);

export { withLocalization, LocalizationContext, LocalizationContextProps };
