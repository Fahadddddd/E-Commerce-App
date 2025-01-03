const Return = require('../models/returnModel');
exports.createReturn = async (req, res) => {
    try {
        const {
            orderNo,
            phone,
          } = req.body;

        //   const orderId = uuidv4();
      
          const newReturn = new Return({
            orderNo,
            phone,
            
          });
      
          const savedReturn = await newReturn.save();
      
          res.status(201).json({ success: true, data: savedReturn });
        } catch (error) {
          res.status(500).json({ success: false, message: error.message });
        }
      };

// Get all addresses
// exports.getAllAddresses = async (req, res) => {
//     try {
//         const addresses = await Address.find();
//         res.status(200).json(addresses);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// Get an address by ID
// exports.getAddressById = async (req, res) => {
//     try {
//         const address = await Address.findById(req.params.id);
//         if (!address) {
//             return res.status(404).json({ message: 'Address not found' });
//         }
//         res.status(200).json(address);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// Update an address by ID
// exports.updateAddress = async (req, res) => {
//     try {
//         const { Firstname, Lastname, email, Address, State, City, Pincode } = req.body;
//         const updatedAddress = await Address.findByIdAndUpdate(
//             req.params.id,
//             { Firstname, Lastname, email, Address, State, City, Pincode },
//             { new: true, runValidators: true }
//         );
//         if (!updatedAddress) {
//             return res.status(404).json({ message: 'Address not found' });
//         }
//         res.status(200).json(updatedAddress);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Delete an address by ID
// exports.deleteAddress = async (req, res) => {
//     try {
//         const deletedAddress = await Address.findByIdAndDelete(req.params.id);
//         if (!deletedAddress) {
//             return res.status(404).json({ message: 'Address not found' });
//         }
//         res.status(200).json({ message: 'Address deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

