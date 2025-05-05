const express = require("express");
const Blogs = require("../models/blogmodel");
const blogroute = express.Router();

blogroute.get("/blog", async (req, res) => {
    console.log(req)
    try {
        const blog = await Blogs.find();
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = blogroute;