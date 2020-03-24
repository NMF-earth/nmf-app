/* eslint-env node, mocha */
/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require("path");
const fs = require("fs");
const appJsonTemplate = require(`${path.join(process.env.PWD, "app.example.json")}`);

appJsonTemplate.expo.hooks.postPublish
  .find(item => item.file == "sentry-expo/upload-sourcemaps").config.authToken = process.env.SENTRY_AUTH_TOKEN

fs.writeFile(
  `${path.join(process.env.PWD, "app.json")}`, 
  JSON.stringify(appJsonTemplate, null, 2), 
  () => { console.log("app.json file written") }
);

