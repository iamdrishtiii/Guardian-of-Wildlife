const express = require ("express");
const Wildlife = require("../models/wildlifemodel");

const wildliferoute = express.Router();//middleware

wildliferoute.get("/wildlife",async(req,res)=>{
    console.log(req)
    try {
        const wildlife =await Wildlife.find();
        res.status(200).json(wildlife)
    } catch (error) {
        console.log("Error",error)
        res.status(500).json(error)
    }
})

module.exports = wildliferoute;