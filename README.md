## 🌱 React Native app for Not My Fault.

![](https://github.com/NotMyFaultEarth/nmf-app/workflows/Test%20CI/badge.svg)
[![Depfu](https://badges.depfu.com/badges/f3b06c819202baf2a14b3241cbf249c9/overview.svg)](https://depfu.com/repos/github/NotMyFaultEarth/nmf-app?project_id=10243)

Source code repository for the Not My Fault React Native application.

### 📦 Getting started

Installing Dependencies:

```sh
$ yarn
```

Running the app:

```sh
$ yarn start
```

For starting the app on a specfic OS:

```sh
$ yarn ios | yarn android
```

Copy the 2 files that contains secrets and replace them with yours

```
$ cp app.example.json app.json
$ cp secret.example.ts secret.ts
```

### 👩🏾‍💻 Development

- Eslint is used in the project to enforce code style and should be configured in your [editor](https://eslint.org/docs/user-guide/integrations).

- Typescript is used in the project for typechecking and should be configured in your [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

You can also check this manually by running:

```sh
yarn lint
```

or

```sh
yarn typescript
```

### 🛠 Testing

Use the following command to run unit tests with coverage:

```
$ yarn test
```

Use the following to update unit tests

```
$ yarn test -u
```

Use the following to run unit tests in watch mode while developing:

```
$ yarn test --watch
```

### 📚Storybook

Stories (\*.story.tsx) can be automatically added to `storyLoader.js` with :

```
$ yarn prestorybook
```

### 👨‍💻 Contributors

[Pierre Bresson](https://github.com/pierrebresson/) - [Theo Lampert](https://github.com/theolampert)

### 🏆 Backers

A big thank you to [Christopher Gwilliams](https://github.com/encima) and the to Phelps family for their amazing contribution to the [Kickstarter](https://www.kickstarter.com/projects/pierrebresson/not-my-fault)!
