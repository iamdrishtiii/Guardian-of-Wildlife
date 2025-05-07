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

// DELETE a program by ID
programsroute.delete("/program/:num", async (req, res) => {
    const { num } = req.params;
    try {
        const deletedProgram = await Programs.findByIdAndDelete(num);
        if (!deletedProgram) {
            return res.status(404).json({ message: "Program not found" });
        }
        res.status(200).json({ message: `${deletedProgram.name} deleted Successfully` });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = programsroute;