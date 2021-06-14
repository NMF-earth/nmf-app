Accessibilty:

Accessible app is an app that is friendly to use for people with disabilities. We should create apps that are accessible for many reasons. Some of them are:
- positive PR
- equal opportunites for everyone
- has a good impact on rating and is usable by wider audience
- accessibility might be the factor that gives your app upper hand compared to other apps
- some countries have laws that requires app the be accessible

There are multiple factors that define whether your app is accessible or not. Major things to focus on are:
- everything within the app should be clearly visible in different device orientations and 	screen ratios.
- all messages and operations that could be performed should be understandable
- all important elements should be accessible for screen reader.

React Native components support multiple accessibility properties which are listed in docs - https://reactnative.dev/docs/accessibility . Most popular of them are:

* accessible - When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component. By default, all touchable elements are accessible.
* accessibilityLabel - When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view, so that people who use VoiceOver know what element they have selected. VoiceOver will read this string when a user selects the associated element.
* accessibilityHint - An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.


Sources:
- https://callstack.com/blog/react-native-accessibility-what-why-and-how/
- https://reactnative.dev/docs/accessibility
