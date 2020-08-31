const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUPload = require("express-fileupload");
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const validateMiddleware = require("./middleware/validationMiddleware")
const newUserController = require("./controllers/newUser");

app.use(fileUPload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/my_database", {
    useNewUrlParser: true
});

app.set("view engine", "ejs");

app.get("/", homeController);
app.get("/post/:id", getPostController);
app.post("/posts/store", storePostController);
app.get("/posts/new", newPostController);
app.get("/auth/register", newUserController);

app.listen(4000, () => {
    console.log("App listening on port 4000")
})