import * as React from 'react';

import { useParams } from 'react-router-dom';



// const products = [
//   {
//     // name: <Explore document.getElementById('shoeone').innerHTML />,
//     name:'',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

const Review = () => {

  const { productId } = useParams();

  const products = [
    { id: 1, name: 'PUMA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 99.00 },
    { id: 2, name: 'RED TAPE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 49.00 },
    { id: 3, name: 'NIKE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 69.00 },
  ];

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Product: {selectedProduct.name}</p>
      <p>Description: {selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
    </div>
  );
};

export default Review;







