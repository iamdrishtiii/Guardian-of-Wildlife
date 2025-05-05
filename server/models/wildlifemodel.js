const mongoose = require("mongoose");

const WildlifeSchema = mongoose.Schema({
    AnimalName: {
        type: String,
        required: true,
    },
    Species: {
        type: String,
        required: true,
    },
    Habitat: {
        type: String,
        required: true
    },
    Diet: {
        type: String,
    },
    ConservationStatus: {
        type: String,
    },
    AverageLifespanYears: {
        type: Number
    },
    Weightkg: {
        type: Number
    },
    Heightcm: {
        type: Number
    },
    Speedkmh: {
        type: Number
    },
    image: {
        type: String
    },
})

const wildlife = mongoose.model("wildlife", WildlifeSchema);
module.exports = wildlife;