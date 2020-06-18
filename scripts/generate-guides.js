/* eslint-env node, mocha */
/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require("fs");
const glob = require("glob");
const fm = require("front-matter");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();
const data = [];
const guidesPath = "./guides/*.md";

/*
 * Script to parse and build all guides into
 * a single JSON file for distribution. Also use to pre-require images
 * for renderting HTML content from markdown files.
 * */
glob(guidesPath, {}, function (err, files) {
  if (err) {
    throw err;
  }

  files.forEach(file => {
    fs.readFile(file, {}, (error, fileData) => {
      if (error) {
        throw error;
      }
      const parsed = fm(fileData.toString());
      data.push({
        ...parsed.attributes,
        body: md.render(parsed.body),
        key: file.replace("guides", "")
      });
      fs.writeFile(
        `${process.env.PWD}/assets/guides/guides.json`,
        JSON.stringify(data),
        () => {
          console.log("Wrote guides.json");
        }
      );
    });
  });

  // pre-requiring image that are used in markdown files.
  const imageFiles = fs
    .readdirSync(`${process.env.PWD}/assets/images/guide`)
    .filter(x => x.includes("png" || "jpg"));
  const imagePath =
    "{\n" +
    imageFiles
      .map(
        x =>
          `"${
            x.split(".png")[0]
          }": require("../../../assets/images/guide/${x}"),`
      )
      .join("\n") +
    "}";
  const res = "export default " + imagePath;
  fs.writeFileSync(
    `${process.env.PWD}/app/screens/ActDetail/imagePath.ts`,
    res
  );
});
