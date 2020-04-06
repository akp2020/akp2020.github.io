const fs = require("fs-extra");
const rimraf = require("rimraf");

const source = "dist";
const destination = "./../angular";

rimraf("../angular/*", () => {
  console.log("deleted");
  fs.copy(source, destination, () => {
    console.log("copied");
  });
});
