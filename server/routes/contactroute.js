const express = require("express");
const Contact = require("../models/contactmodel");
const contactroute = express.Router();

contactroute.post("/contact", async (req, res) => {

    try {
        const { firstname, lastname, emaill, textarea } = req.body;
        const contact = new Contact({
            firstname: firstname,
            lastname: lastname,
            emaill: emaill,
            textarea: textarea,
        })
        await contact.save();
        res.status(200).json({ message: "Contact you soon" })

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = contactroute;