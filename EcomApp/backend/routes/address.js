const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
// const singleAddressController =require('../controllers/SingleaddressController')

// Route to create a new address
router.post('/', addressController.createAddress);



// Route to get all addresses
router.get('/', addressController.getAllAddresses);



// Route to get an address by ID
router.get('/:id', addressController.getAddressById);



// Route to update an address by ID
router.put('/:id', addressController.updateAddress);

// Route to delete an address by ID
router.delete('/:id', addressController.deleteAddress);

module.exports = router;
