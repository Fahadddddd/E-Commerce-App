const Product = require('../models/productModel'); // Importing The Employee Model

// Function to Show the list of Products

const index = (req,res,next) => {
    Product.find() // Return The List Of All Employees
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : "An Error Occured!"
        })
    })
}

const show = (req,res,next) => {
    let productID = req.body.productID
    Product.findById(productID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"An Error Occured"
        })
        
    })
}

// Function To Store New Employee Detail

const store = (req,res,next) => {
    let product = new Productt({
        name: req.body.name,
        color : req.body.color,
        size : req.body.size,
        category : req.body.category,
        price : req.body.price,
        image : req.body.image,

    })
    if(req.file)
    {
        product.avatar = req.file.path
    }
    product.save()

    .then(response =>{
        res.json({
            message:'Product Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message:"An Error Occured"
        })
    })
}


// update employee function

// const update = (req,res,next) => {
//     let employeeID = req.body.employeeID;

//     let updatedData = {
//         name: req.body.name,
//         designation:req.body.designation,
//         email:req.body.email,
//         phone: req.body.phone,
//         age : req.body.age
//     }

//     Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    
//     .then(response =>{
//         res.json({
//             message:'Employee updated Successfully'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: "An Error Occured"
//         })
//     })
// }

// // Delete Employee Function

// const destroy = (req,res,next) => {
//     let employeeID = req.body.employeeID;
//     Employee.findByIdAndRemove(employeeID)
//     .then(() => {
//         res.json({
//             message:"Employee Deleted Sucessfully"
//         })
//     })
//     .catch(() => {
//         res.json({
//             message:"An Error Occured"
//         })
//     })
// }

// Exporting All The Functions

module.exports = {
    index,show,store
}