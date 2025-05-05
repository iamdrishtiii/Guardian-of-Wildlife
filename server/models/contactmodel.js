const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
     firstname:{
        type : String,
        required:true
     },
     lastname:{
        type:String,
     },
     emaill:{
        type:String,
        required:true
     },
     textarea:{
        type:String,
        required:true,
     }


})
const contact = mongoose.model("contact",contactSchema);
module.exports=contact;