## 🌱 React Native app for Not My Fault.

![](https://github.com/NotMyFaultEarth/nmf-app/workflows/Test%20CI/badge.svg)

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

Use the following to run unit tests in watch mode while developing:
```
$ yarn test --watch
```