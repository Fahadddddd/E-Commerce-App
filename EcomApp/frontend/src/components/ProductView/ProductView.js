// // src/components/ProductView/ProductView.js

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import {useNavigate} from "react-router-dom";
// import { Link } from 'react-router-dom';
// import './ProductView.css';
// import Header from '../Header/header.js';

// const ProductView = () => {

  

//   const { productId } = useParams();

//   const products = [
//     {
//       id: 1,
//       name: 'Embroidered Seersucker Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
//       description: 'V-Look T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },
//     {
//       id: 2,
//       name: 'Basic Slim Fit T-Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
//       description: 'Cotton T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },
//     {
//       id: 3,
//       name: 'Blurred Print T-Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
//       description: 'Henley T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },
//     {
//       id: 4,
//       name: 'Full Sleeve Zipper',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
//       description: 'Crewnock T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },

//     {
//       id: 5,
//       name: 'Embroidered Seersucker Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
//       description: 'V-Look T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],

//     },
//     {
//       id: 6,
//       name: 'Basic Slim Fit T-Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
//       description: 'Cotton T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },
//     {
//       id: 7,
//       name: 'Blurred Print T-Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
//       description: 'Henley T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },
//     {
//       id: 8,
//       name: 'Full Sleeve Zipper',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
//       description: 'Crewnock T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },

//     {
//       id: 9,
//       name: 'Blurred Print T-Shirt',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
//       description: 'Henley T Shirt',
//       size : 'L',
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },
//     {
//       id: 10,
//       name: 'Full Sleeve Zipper',
//       price: 99,
//       image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
//       description: 'Crewnock T Shirt',
//       size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//       colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//     },


//   ];

//   const selectedProduct = products.find(product => product.id === parseInt(productId, 10));



//   if (!selectedProduct) {
//     return <div>Loading...</div>;
//   }

  

//   return (
//     <>
//     <Header />
//       <div className="product-view">
//       <div className="product-images">
//         <img src={selectedProduct.image} alt={selectedProduct.name} className="main-image" />
//         {/* <div className="thumbnail-images">
//           {selectedProduct.thumbnails.map((thumbnail, index) => (
//             <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
//           ))}
//         </div> */}
//       </div>
//       <div className="product-details">
//         <h1>{selectedProduct.name}</h1>
//         <p className="price">Rs. {selectedProduct.price}</p>
//         <p className="tax-info">MRP incl. of all taxes</p>
//         <p className="description">{selectedProduct.description}</p>
//         <div className="product-options">
//           <div className="colors">
//             <span>Color</span>
//             <div className="color-options">
//               {selectedProduct.colors.map((color, index) => (
//                 <div key={index} className="color" style={{ backgroundColor: color }}></div>
//               ))}
//             </div>
//           </div>
//           <div className="sizes">
//             <span>Size</span>
//             <div className="size-options">
//               {selectedProduct.size.map((size, index) => (
//                 <button key={index} className="size-button">{size}</button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <button  style={{marginRight: '10px'}} className="add-to-cart">Add To Cart</button>
        
//         <button className="add-to-cart "><Link to={`/Review/${selectedProduct.id}`}>Buy Now</Link></button>
//       </div>
//     </div>
//     </>
    
//   );
// };

// export default ProductView;





import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductView.css';
import Header from '../Header/header.js';
import { CartContext } from '../../contexts/CartContext'; // Adjust the import path as needed

const ProductView = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

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
 

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="product-view container">
        <div className="product-images">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="main-image" />
        </div>
        <div className="product-details">
          <h1>{selectedProduct.name}</h1>
          <p className="price">Rs. {selectedProduct.price}</p>
          <p className="tax-info">MRP incl. of all taxes</p>
          <p className="description">{selectedProduct.description}</p>
          <div className="product-options">
            <div className="colors">
              <span>Color</span>
              <div className="color-options">
                {selectedProduct.colors.map((color, index) => (
                  <div key={index} className="color" style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </div>
            <div className="sizes">
              <span>Size</span>
              <div className="size-options">
                {selectedProduct.size.map((size, index) => (
                  <button key={index} className="size-button">{size}</button>
                ))}
              </div>
            </div>
          </div>
          <button
            style={{ marginRight: '10px' }}
            className="add-to-cart"
            onClick={() => addToCart(selectedProduct)}
          >
            Add To Cart
          </button>
          <button className="add-to-cart"
          onClick={() => addToCart(selectedProduct)}
          >
            {/* <Link to= {`/Review/${selectedProduct.id}`} >Buy Now</Link> */}
            <Link to={`/cart`}>Buy Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductView;