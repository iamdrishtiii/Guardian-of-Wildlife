const express= require("express");
const subscriber = require("../models/footermodel")
const subsroute = express.Router();

subsroute.post(["/","/wildlife","/contact","/blog","/jointeam","/program","/dashboard"],async(req,res)=>{
    try{
        const {email} = req.body;
        const Subscriber = new subscriber({
            email:email,
        })
        await Subscriber.save();
        res.status(200).json({message:"Subscribed successfully"})
    }catch(error){
        res.status(500).json(error)
    }
})
module.exports = subsroute;