/* eslint-env node, mocha */
/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require("fs");
const glob = require("glob");
const fm = require("front-matter");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();
const data = [];
const guidesPath = "assets/methodology/markdown/*.md";

/*
 * Copy of generate-guides.js for methodology screen content generation
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
        key: file.replace("guides", ""),
      });
      fs.writeFile(
        `${process.env.PWD}/assets/methodology/methodology.json`,
        JSON.stringify(data),
        () => {
          console.log("Wrote methodology.json");
        }
      );
    });
  });
});
