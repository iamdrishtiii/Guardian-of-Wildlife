const mongoose = require("mongoose")

const ProgramsSchema = mongoose.Schema({
    ProgramName: {
        type: String,
        required: true
    },
    CountryRegion: {
        type: String,
        required: true
    },
    GovernmentAgency: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    ObjectivesandGoals: {
        type: String,
    },
    YearLaunched: {
        type: Number,
        required: true
    },
    CurrentStatus:{
        type:String,
        required:true
    },
    FundingUSD:{
        type:Number,String,
    },
    Duration:{
        type:String,
        required:true
    },
    TargetSpecies:{
        type:String,
    },
    programLink:{
        type:String,
    }
})

const programs = mongoose.model("programs", ProgramsSchema)
module.exports = programs;