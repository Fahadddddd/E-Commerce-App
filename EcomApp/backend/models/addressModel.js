const mongoose = require('mongoose')


const addressSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    phone : {
        type : Number,
        unique : true,
        required : true
    },
    Firstname : String,
    Lastname : String,
    Country : String,
    State : String,
    Address : String,
    City : String,
    Pincode : Number, 
    ProductName: String,
    ProductSize: String,
    ProductPrice: Number,
    
},{
    timestamps : true
})


const addressModel =  mongoose.model("address",addressSchema)


module.exports = addressModel