<h1 align="center">🌱 NMF.earth app</h1>
<h3 align="center">Understand and reduce your carbon footprint</h3>

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

![](https://github.com/NMF-earth/nmf-app/workflows/Test%20CI/badge.svg)
[![Depfu](https://badges.depfu.com/badges/f3b06c819202baf2a14b3241cbf249c9/overview.svg)](https://depfu.com/repos/github/NotMyFaultEarth/nmf-app?project_id=10243)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://github.com/climate-strike/license)

Repository for the [NMF.earth](https://nmf.earth/) React Native application, built with Expo, Redux Toolkit and Typescript.

<br />

### 📦 Getting started

Installing Dependencies:

```bash
$ yarn
```

Running the app:

```bash
$ yarn start
```

For starting the app on a specfic OS:

```bash
$ yarn ios | yarn android
```

Copy the 2 files that contains secrets and replace them with yours

```bash
$ cp app.example.json app.json
$ cp secret.example.ts secret.ts
```

<br />

### 👩🏾‍💻 Development

- Eslint is used in the project to enforce code style and should be configured in your [editor](https://eslint.org/docs/user-guide/integrations).

- Prettier is also used and apply automatically by eslint

- Typescript is used in the project for typechecking and should be configured in your [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

You can check this manually by running:

```bash
yarn lint
```

or

```bash
yarn typescript
```

You can ask eslint to fix issues by running:

```bash
yarn lint:fix
```

<br />

### 🛠 Testing

Use the following command to run unit tests with coverage:

```bash
$ yarn test
```

Use the following to update unit tests

```bash
$ yarn test -u
```

Use the following to run unit tests in watch mode while developing:

```bash
$ yarn test --watch
```

<br />

### 🎨 Storybook

Stories (\*.story.tsx) can be automatically added to `storyLoader.js` with :

```bash
$ yarn prestorybook
```
<br />

### 📗 Sustainable guide

To place a new `.md` files inside `guides` folder or modify existing guide and then run `node scripts/generate-guides.js` to generate a new sustainable guide. Images can be used in the `.md` as follow : `![Earth](earth.png)` and should be place in `assets/images/guide`.

<br />

Same for methodology screen, just run `node scripts/generate-methodology.js` to update `methodology.json` from `methodology.md`.

<br />

### 🚀 Deployment

Any branches merged into master will trigger a github action that runs expo publish.
During this step `app.example.json` is used to generate an `app.json` file for expo's deployment, this is done with the following script `scripts/generate-app-json.js`.

<br />

### 👨‍💻 Contributors

Have a look [here](https://github.com/NotMyFaultEarth/nmf-app/blob/master/contributing.md) if you want to contribute!

🌐 You can help us with translations with our online tool [POEditor](https://poeditor.com/join/project/0MbginCsWp).

<br />

### 🏆 Backers

A big thank you to [Christopher Gwilliams](https://github.com/encima) and to the Phelps family for their amazing contribution to the [Kickstarter](https://www.kickstarter.com/projects/pierrebresson/not-my-fault)!

<br />

### ©️ Open source - licence

Repository and contributions are under [GNU General Public License v3.0](https://github.com/NotMyFaultEarth/nmf-app/blob/master/LICENSE)
