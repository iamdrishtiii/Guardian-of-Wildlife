const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    BlogTitle:{
        type:String,
        required:true
    },
    WebsiteURL:{
        type:String,
        required:true
    },
    Description:{
        type:String,
    },
    AuthorOrganization:{
        type:String,
    },
    LastUpdated:{
        type:String,Number,
        required:true
    },
    FocusArea:{
        type:String,
    },
    SocialMediaLinks:{
        type:String,
    },
    imageURL:{
        type:String,
    }
})
const Blogs=mongoose.model("blog",blogSchema)
module.exports=Blogs;