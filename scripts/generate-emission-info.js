/* eslint-env node, mocha */
/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require("fs");
const glob = require("glob");
const fm = require("front-matter");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();
const data = [];
const guidesPath = "assets/emission-info/markdown/*.md";

/*
 * Copy of generate-methodoloy.js for methodology screen content generation
 * */
glob(guidesPath, {}, function (err, files) {
  if (err) {
    throw err;
  }

  files.forEach((file) => {
    fs.readFile(file, {}, (error, fileData) => {
      if (error) {
        throw error;
      }

      const parsed = fm(fileData.toString());

      data.push({
        ...parsed.attributes,
        body: md.render(parsed.body),
        key: file.split("markdown/").pop().slice(0, -3),
      });

      fs.writeFile(
        `${process.env.PWD}/assets/emission-info/emission-info.json`,
        JSON.stringify(data),
        () => {
          console.log("Wrote emission-info.json");
        }
      );
    });
  });
});
