<h1 align="center">🌱 NMF.earth app</h1>
<h3 align="center">Calculate, understand and reduce your carbon footprint</h3>

<br />

<p align="center">
  <a href="https://apps.apple.com/us/app/nmf-earth/id1494561829">
    <img alt="app-store" src="https://github.com/NotMyFaultEarth/nmf-app/blob/master/app-store.png" />
  </a>
  <a href="https://play.google.com/store/apps/details?id=nmf.earth">
    <img alt="google-play" src="https://github.com/NotMyFaultEarth/nmf-app/blob/master/play-store.png" />
  </a>
</p>

<br />

![screenshots](https://github.com/NotMyFaultEarth/nmf-app/blob/master/app-preview.png)

![](https://github.com/NotMyFaultEarth/nmf-app/workflows/Test%20CI/badge.svg)
[![Depfu](https://badges.depfu.com/badges/f3b06c819202baf2a14b3241cbf249c9/overview.svg)](https://depfu.com/repos/github/NotMyFaultEarth/nmf-app?project_id=10243)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Repository for the [NMF.earth](https://nmf.earth/) React Native application, built with Expo, Redux Toolkit and Typescript.

<br />

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

<br />

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

<br />

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

<br />

### 📚Storybook

Stories (\*.story.tsx) can be automatically added to `storyLoader.js` with :

```
$ yarn prestorybook
```

<br />

### 👨‍💻 Contributors

[Pierre Bresson](https://github.com/pierrebresson/) - [Theo Lampert](https://github.com/theolampert) - [Christopher Gwilliams](https://github.com/encima)

Have a look [here](https://github.com/NotMyFaultEarth/nmf-app/blob/master/contributing.md) if you want to contribute!

<br />

### 🏆 Backers

A big thank you to [Christopher Gwilliams](https://github.com/encima) and to the Phelps family for their amazing contribution to the [Kickstarter](https://www.kickstarter.com/projects/pierrebresson/not-my-fault)!

<br />

### ©️ Open source - licence

Repository and contributions are under [GNU General Public License v3.0](https://github.com/NotMyFaultEarth/nmf-app/blob/master/LICENSE)
