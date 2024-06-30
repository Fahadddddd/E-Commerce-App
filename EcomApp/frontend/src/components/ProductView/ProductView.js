// src/components/ProductView/ProductView.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import './ProductView.css';
import Header from '../Header/header.js';

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data based on productId
    // Example product data fetching (replace with actual API call or data fetching logic)
    const fetchProduct = async () => {
      // Replace with actual API call or data fetching logic
      const productData = {
        id: productId,
        name: 'Abstract Print Shirt',
        price: 99,
        mainImage: `${process.env.PUBLIC_URL}/images/product2.jpg`,
        thumbnails: [
          `${process.env.PUBLIC_URL}/images/product2.jpg`,
          `${process.env.PUBLIC_URL}/images/product4.jpg`,
          `${process.env.PUBLIC_URL}/images/product3.jpg`,
          `${process.env.PUBLIC_URL}/images/product8.jpg`,
        ],
        description: 'Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.',
        colors: ['#000000', '#FFFFFF', '#808080', '#00FF00', '#0000FF'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      };

      setProduct(productData);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
      <div className="product-view">
      <div className="product-images">
        <img src={product.mainImage} alt={product.name} className="main-image" />
        <div className="thumbnail-images">
          {product.thumbnails.map((thumbnail, index) => (
            <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="tax-info">MRP incl. of all taxes</p>
        <p className="description">{product.description}</p>
        <div className="product-options">
          <div className="colors">
            <span>Color</span>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <div key={index} className="color" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
          <div className="sizes">
            <span>Size</span>
            <div className="size-options">
              {product.sizes.map((size, index) => (
                <button key={index} className="size-button">{size}</button>
              ))}
            </div>
          </div>
        </div>
        <button style={{marginRight: '10px'}} className="add-to-cart">Add To Cart</button>
        <button className="add-to-cart "><Link to={`/Review/${product.id}`}>Buy Now</Link></button>
      </div>
    </div>
    </>
    
  );
};

export default ProductView;
