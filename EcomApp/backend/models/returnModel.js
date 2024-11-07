const mongoose = require('mongoose')




  const ReturnSchema = new mongoose.Schema({
    orderNo:{ type:String, required: true},
    phone: { type: Number, required: true },
    
  }, {
    timestamps: true
  });


const returnModel =  mongoose.model("return",ReturnSchema)


module.exports = returnModel