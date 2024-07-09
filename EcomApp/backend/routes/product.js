// Import necessary modules
const express = require('express');
const router = express.Router();



const products = [
  {
    id: 1,
    name: 'Embroidered Seersucker Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    description: 'V-Look T Shirt',
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
  },
  {
          id: 2,
          name: 'Basic Slim Fit T-Shirt',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
          description: 'Cotton T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 3,
          name: 'Blurred Print T-Shirt',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
          description: 'Henley T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 4,
          name: 'Full Sleeve Zipper',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
          description: 'Crewnock T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
    
        {
          id: 5,
          name: 'Embroidered Seersucker Shirt',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
          description: 'V-Look T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
    
        },
        {
          id: 6,
          name: 'Basic Slim Fit T-Shirt',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
          description: 'Cotton T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 7,
          name: 'Blurred Print T-Shirt',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
          description: 'Henley T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 8,
          name: 'Full Sleeve Zipper',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
          description: 'Crewnock T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
    
        {
          id: 9,
          name: 'Blurred Print T-Shirt',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
          description: 'Henley T Shirt',
          size : 'L',
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 10,
          name: 'Full Sleeve Zipper',
          price: 99,
          image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
          description: 'Crewnock T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
  
];


// Route to fetch product details by ID
router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find(product => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json({ product });
});

module.exports = router;
