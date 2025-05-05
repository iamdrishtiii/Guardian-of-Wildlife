const express = require("express");
const Jointeam = require("../models/joinusmodel");
const joinusroute = express.Router();

joinusroute.post("/jointeam", async (req, res) => {

    try {
        const { firstname, lastname, email, postcode } = req.body;
        const jointeam = new Jointeam({
            firstname: firstname,
            lastname: lastname,
            email: email,
            postcode:postcode,
        })
        await jointeam.save();
        res.status(200).json({ message: "Signup success" })

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = joinusroute;