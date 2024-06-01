const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController')
// const upload = require('../middleware/upload')

router.get('/index',ProductController.index)
router.post('/show',ProductController.show)
router.post('/store',ProductController.store)

// router.post('/update',EmployeeController.update)
// router.post('/delete',EmployeeController.destroy)

module.exports = router
