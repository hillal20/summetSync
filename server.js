const express = require("express");
const server = express();
const fn = require("./solution");
const bodyParser = require("body-parser");
const path = require("path");

const solution = fn([
  "art",
  "tra",
  "filo",
  "olif",
  "bilal",
  "labil",
  "hi",
  "ho",
  "oh"
]);

console.log(solution);

// we precise the static folder for css and images ...
const staticFolder = path.join(__dirname, "views");
server.use("/views", express.static(staticFolder));
server.use(bodyParser.json());

//// we tell ejs where is the locations of html files
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.get("/solution", (req, res) => {
  res.render("index.ejs", { solution });
});

server.listen(4000, () => {
  console.log(" === server is listening on port 4000");
});
