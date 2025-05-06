const mongoose = require('mongoose')

const jointeamSchema = mongoose.Schema({
    firstname:{
        type:String,
        required :true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    postcode:{
        type:Number,
        required:true
    }
})

const Jointeam = mongoose.model("jointeam",jointeamSchema)
module.exports = Jointeam;