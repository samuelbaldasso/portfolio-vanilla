const express = require("express");
const nun = require("nunjucks");

const server = express();

server.use(express.static('public'))

server.set("view engine", "njk");

nun.configure("views", {
  express: server,
});

server.listen(5000, () => {
  console.log("server is running...");
});

server.get("/", function (req, res) {
  return res.render("about")
});

server.get("/portfolio", function (req, res) {
    return res.render("portfolio")
  });