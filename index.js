const express = require("express");
const app = express();
// steps to connecte to the mondoDB
// require mongoose
const mongoose = require("mongoose");
// connect to the database using the like with username and password, handle it with .then and .catch
const dbURI =
  "mongodb+srv://netninja:Password123@zaeemcluster.socit6z.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=zaeemcluster";
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(3000, () => {
      console.log("Listeining on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.set("view engine", "ejs");
//to make a folder,file static
app.use(express.static("public"));

//declaring constants 'blogs' and declaring it so that we can use it in ejs file
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Mohammed Zaeem",
      snippet: "Hi my name is mohammed Zaeem i'm 23 years old",
    },
    {
      title: "Mohammed younus",
      snippet: "Hi my name is mohammed Younus i'm 23 years old",
    },
    {
      title: "Mohammed Zaid",
      snippet: "Hi my name is mohammed Zaid i'm 23 years old",
    },
  ];
  //using the blogs, it also be used as blogs:blogs
  res.render("index", { title: "Home11", blogs });
});

app.get("/about", (req, res) => {
  res.render("About", { title: "About11" });
});

app.get("/newblogs", (req, res) => {
  res.render("newblogs", { title: "New Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// execute indexedDB.js file by using below commands
// you need mongoos installed
// you need ejs, express installed
// 1) node index.js
//files involved view folder, partials folder, public folder
