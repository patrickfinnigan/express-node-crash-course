const express = require("express");
const path = require("path");

//init app
const app = express();

//load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Home Route
app.get("/", function (req, res) {
    let articles = [
        {
            id:1,
            title: "article 1",
            author: "noah baudy",
            body: "this is article 1"
        },
        {
            id:2,
            title: "article 2",
            author: "noah baudy",
            body: "this is article 2"
        },
        {
            id:3,
            title: "article 3",
            author: "noah baudy",
            body: "this is article 3"
        },
    ]
  res.render("index", {
    title: "articles",
    articles: articles
  });
});

// Add route
app.get("/articles/add", function (req, res) {
  res.render("add_article", {
    title: "add article",
  });
});

//Start Server
app.listen(3000, function () {
  console.log("Server started on Port 3000");
});
