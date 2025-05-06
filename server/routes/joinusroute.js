const express = require("express");
const Jointeam = require("../models/joinusmodel");
const joinusroute = express.Router();

joinusroute.post("/jointeam", async (req, res) => {
    try {
        const { firstname, lastname, email, postcode } = req.body;

        // Check if email already exists
        const existingUser = await Jointeam.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already registered" });
        }

        // Create new entry
        const jointeam = new Jointeam({
            firstname,
            lastname,
            email,
            postcode,
        });

        await jointeam.save();
        res.status(201).json({ message: "Signup success" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = joinusroute;