const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
let id = "5f1d7bf7c988983a85c59392"

mongoose.connect("mongodb://localhost/my_database", {
    useNewUrlParser: true
});

// BlogPost.create({
//     title: "The Mythbuster's Guide to Saving Money on Energy Bills",
//     body: "If you have been here a long time, you might remember when I went on ITV tonight"
// }, (error, blogpost) => {
//     console.log(error, blogpost);
// })

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost);
})

