/* eslint-env node, mocha */
/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require("path");
const fs = require("fs");

const pwd = process.env.PWD
const appJsonTemplate = require(`${path.join(pwd, "app.example.json")}`);
const SENTRY_DSN = process.env.SENTRY_DSN;

appJsonTemplate.expo.hooks.postPublish
  .find(item => item.file == "sentry-expo/upload-sourcemaps").config.authToken = process.env.SENTRY_AUTH_TOKEN

const secrets = `export default {
    dsn: ${SENTRY_DSN ? `"${SENTRY_DSN}"` : null }
  }`;

fs.writeFile(
  `${path.join(pwd, "app.json")}`, 
  JSON.stringify(appJsonTemplate, null, 2), 
  () => { console.log("app.json file written") }
);

fs.writeFile(
  `${path.join(pwd, "secret.ts")}`, 
  secrets,
  () => { console.log("secrets.ts file written") }
);

