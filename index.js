const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BlogPost = require("./models/BlogPost");
const { expr } = require("jquery");
const fileUPload = require("express-fileupload");

app.use(fileUPload());
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

app.get("/post/:id", async(req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render("post", {
        blogpost
    })
})

app.get("/posts/new", (req, res) => {
    res.render("create")
})

app.post("/posts/store", (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image:"/img/" + image.name
        });
        res.redirect("/"); 
    })
    })

app.get("*", (req, res) => {
    res.render("index")
})

app.listen(4000, () => {
    console.log("App listening on port 4000")
})