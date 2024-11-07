const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    ProductName: String,
    ProductSize: String,
    ProductPrice: Number,
  });



  const addressSchema = new mongoose.Schema({
    // orderId: { type: String, required: true, unique: true },
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
    // Payment : { type: String, required: true }
  }, {
    timestamps: true
  });


const addressModel =  mongoose.model("address",addressSchema)


module.exports = addressModel