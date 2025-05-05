const mongoose = require('mongoose')

const subscriberSchema =mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    }
})
const subscriber = mongoose.model("subscriber",subscriberSchema)
module.exports =subscriber;