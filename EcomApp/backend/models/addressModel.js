const mongoose = require('mongoose')


// const addressSchema = new mongoose.Schema({
//     email : {
//         type : String,
//         unique : true,
//         required : true
//     },
//     phone : {
//         type : Number,
//         unique : true,
//         required : true
//     },
//     Firstname : String,
//     Lastname : String,
//     Country : String,
//     State : String,
//     Address : String,
//     City : String,
//     Pincode : Number, 
//     ProductName: String,
//     ProductSize: String,
//     ProductPrice: Number,
    
// },{
//     timestamps : true
// })

const ProductSchema = new mongoose.Schema({
    ProductName: String,
    ProductSize: String,
    ProductPrice: Number,
  });



  const addressSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    Country: { type: String, required: false },
    State: { type: String, required: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    Pincode: { type: Number, required: true },
    Products: [ProductSchema],  // Array of ProductSchema
  }, {
    timestamps: true
  });


const addressModel =  mongoose.model("address",addressSchema)


module.exports = addressModel