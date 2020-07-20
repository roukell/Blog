const express = require("express");
const app = express();
const path = require("path");


app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.resolve("about.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("contact.html"))
})