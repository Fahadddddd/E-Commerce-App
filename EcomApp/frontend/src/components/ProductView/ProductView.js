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





// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import './ProductView.css';
// import Header from '../Header/header.js';
// import { CartContext } from '../../contexts/CartContext'; // Adjust the import path as needed
// import size from '../../images/sizeee.PNG'

// const ProductView = () => {
//   const { productId } = useParams();
//   const { addToCart } = useContext(CartContext);

//   const products = [
//         {
//           id: 1,
//           name: 'Embroidered Seersucker Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
//           description: 'V-Look T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
//         {
//           id: 2,
//           name: 'Basic Slim Fit T-Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
//           description: 'Cotton T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
//         {
//           id: 3,
//           name: 'Blurred Print T-Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
//           description: 'Henley T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
//         {
//           id: 4,
//           name: 'Full Sleeve Zipper',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
//           description: 'Crewnock T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
    
//         {
//           id: 5,
//           name: 'Embroidered Seersucker Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
//           description: 'V-Look T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
    
//         },
//         {
//           id: 6,
//           name: 'Basic Slim Fit T-Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
//           description: 'Cotton T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
//         {
//           id: 7,
//           name: 'Blurred Print T-Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
//           description: 'Henley T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
//         {
//           id: 8,
//           name: 'Full Sleeve Zipper',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
//           description: 'Crewnock T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
    
//         {
//           id: 9,
//           name: 'Blurred Print T-Shirt',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
//           description: 'Henley T Shirt',
//           size : 'L',
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
//         {
//           id: 10,
//           name: 'Full Sleeve Zipper',
//           price: 99,
//           image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
//           description: 'Crewnock T Shirt',
//           size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//           colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
//         },
    
    
//       ];
 

//   const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

//   if (!selectedProduct) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Header />
//       <div className="product-view container">
//         <div className="product-images">
//           <img src={selectedProduct.image} alt={selectedProduct.name} className="main-image" />
//         </div>
//         <div className="product-details">
//           <h1>{selectedProduct.name}</h1>
//           <p className="price">Rs. {selectedProduct.price}</p>
//           <p className="tax-info">MRP incl. of all taxes</p>
//           <p className="description">{selectedProduct.description}</p>
//           <div className="product-options">
//             {/* <div className="colors">
//               <span>Color</span>
//               <div className="color-options">
//                 {selectedProduct.colors.map((color, index) => (
//                   <div key={index} className="color" style={{ backgroundColor: color }}></div>
//                 ))}
//               </div>
//             </div> */}
//             <div className="sizes">
//               <span>Size</span>
//               <div className="size-options">
//                 {selectedProduct.size.map((size, index) => (
//                   <button key={index} className="size-button">{size}</button>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <button
//             style={{ marginRight: '10px' }}
//             className="add-to-cart"
//             onClick={() => addToCart(selectedProduct)}
//           >
//             Add To Cart
//           </button>
//           <button className="add-to-cart"
//           onClick={() => addToCart(selectedProduct)}
//           >
//             {/* <Link to= {`/Review/${selectedProduct.id}`} >Buy Now</Link> */}
//             <Link to={`/cart`}>Buy Now</Link>
//           </button>

//          <br/>
//          <br/>

//           <div class="accordion" id="accordionExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header">
//       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//         Description
//       </button>
//     </h2>
//     <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//       <div class="accordion-body">
//         <img src={size} />
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         Product Care
//       </button>
//     </h2>
//     <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div class="accordion-body">
//         Machine wash inside out in cold water, use mild detergent. Dry and iron inside out, avoid fabric softeners.
//       </div>
//     </div>
//   </div>
  
// </div>





//         </div>
//       </div>
      

      





//     </>
//   );
// };

// export default ProductView;





import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProductView.css';
import Header from '../Header/header.js';
import { CartContext } from '../../contexts/CartContext'; // Adjust the import path as needed
import size from '../../images/sizeee.PNG';

const ProductView = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');

  const products = [
    {
      id: 1,
      name: 'Embroidered Seersucker Shirt',
      price: 99,
      images: [
        `${process.env.PUBLIC_URL}/images/product1.jpg`,
        `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
        `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
      ],
      description: 'V-Look T Shirt',
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
    },
    {
      id: 2,
      name: 'Basic Slim Fit T-Shirt',
      price: 99,
      images: [
        `${process.env.PUBLIC_URL}/images/product2.jpg`,
        `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
        `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
      ],
      description: 'Cotton T Shirt',
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
    },
        {
          id: 3,
          name: 'Blurred Print T-Shirt',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product3.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Henley T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 4,
          name: 'Full Sleeve Zipper',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product4.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Crewnock T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
    
        {
          id: 5,
          name: 'Embroidered Seersucker Shirt',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product5.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'V-Look T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
    
        },
        {
          id: 6,
          name: 'Basic Slim Fit T-Shirt',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product6.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Cotton T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 7,
          name: 'Blurred Print T-Shirt',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product7.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Henley T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 8,
          name: 'Full Sleeve Zipper',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product8.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Crewnock T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
    
        {
          id: 9,
          name: 'Blurred Print T-Shirt',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product9.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Henley T Shirt',
          size : 'L',
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
        {
          id: 10,
          name: 'Full Sleeve Zipper',
          price: 99,
          images: [
            `${process.env.PUBLIC_URL}/images/product10.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-1.jpg`,
            `${process.env.PUBLIC_URL}/images/product1-2.jpg`,
          ],
          description: 'Crewnock T Shirt',
          size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        },
  ];

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...selectedProduct, selectedSize });
    } else {
      alert('Please select a size before adding to cart.');
    }
  };

  const handleBuyNow = () => {
    if (selectedSize) {
      addToCart({ ...selectedProduct, selectedSize });
      navigate('/cart');
      // <Link to={`/cart`}></Link>
      // Navigate to cart or checkout page
    } else {
      alert('Please select a size before buying.');
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Set initial main image
  if (!mainImage && selectedProduct.images.length > 0) {
    setMainImage(selectedProduct.images[0]);
  }

  return (
    <>
      <Header />
      <div className="product-view container">
        <div className="product-images">
          <img src={mainImage} alt={selectedProduct.name} className="main-image" />
          <div className="thumbnails">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className="thumbnail"
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>{selectedProduct.name}</h1>
          <p className="price">Rs. {selectedProduct.price}</p>
          <p className="tax-info">MRP incl. of all taxes</p>
          <p className="description">{selectedProduct.description}</p>
          <div className="product-options">
            <div className="sizes">
              <span>Size</span>
              <div className="size-options">
                {selectedProduct.size.map((size, index) => (
                  <button
                    key={index}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            style={{ marginRight: '10px' }}
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          <button className="add-to-cart" onClick={handleBuyNow}>
          
            Buy Now
          </button>

          <br />
          <br />

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Description
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <img src={size} className="imgggg" alt="Size chart" />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Product Care
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Machine wash inside out in cold water, use mild detergent. Dry and iron inside out, avoid fabric softeners.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;


