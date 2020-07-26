const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mondodb://localhost/my_database", {
    useNewUrlParser: true
})

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/post", (req, res) => {
    res.render("post")
})

app.get("/posts/new", (req, res) => {
    res.render("create")
})

app.listen(4000, () => {
    console.log("App listening on port 4000")
})