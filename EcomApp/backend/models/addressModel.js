const mongoose = require('mongoose')


const addressSchema = new mongoose.Schema({
    Firstname : String,
    Lastname : String,
     
    email : {
        type : String,
        unique : true,
        required : true
    },
    Address : String,
    State : String,
    City : String,
    Pincode : Number,   
},{
    timestamps : true
})


const addressModel =  mongoose.model("address",addressSchema)


module.exports = addressModel