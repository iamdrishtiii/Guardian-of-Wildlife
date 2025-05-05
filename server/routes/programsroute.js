const express = require("express");
const Programs = require("../models/programmodel");
const programsroute = express.Router()

programsroute.get("/programs", async (req, res) => {
    console.log(req)
    try {
        const program = await Programs.find();
        res.status(200).json(program)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = programsroute;