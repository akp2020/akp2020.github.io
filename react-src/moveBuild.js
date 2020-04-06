const fs = require("fs-extra");
const rimraf = require("rimraf");
/* Moving build to akp2020.github.io/react*/

const source = "build";
const destination = "./../react";

rimraf("../react/*", () => {
  console.log("deleted");
  fs.copy(source, destination, () => {
    console.log("copied");
  });
});
