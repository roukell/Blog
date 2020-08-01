const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BlogPost = require("./models/BlogPost");
const { expr } = require("jquery");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/my_database", {
    useNewUrlParser: true
});

app.set("view engine", "ejs");


app.get("/", async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render("index", {
        blogposts
    });
})

BlogPost.find({}, (error, blogspot) => {
    console.log(error, blogspot)
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/post/:id", async (req, res) => {
    const blogposts = await BlogPost.findById(req.params.id);
    res.render("post", {
        blogposts
    })
})

app.get("/posts/new", (req, res) => {
    res.render("create")
})

app.post("/posts/store", async (req, res) => {
    await BlogPost.create(req.body);
    res.redirect("/"); 
    })


app.listen(4000, () => {
    console.log("App listening on port 4000")
})