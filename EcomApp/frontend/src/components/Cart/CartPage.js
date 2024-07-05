import React from 'react';
import Header from '../Header/header';
import './CartPage.css';

const CartPage = () => {
  return (
    <>
    <Header/>
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-item">
            <img src="../../images/product2.jpg" alt="Full Sleeve Zipper" />
            <div className="item-details">
              <p>Full Sleeve Zipper</p>
              <p>$99</p>
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img src="../../images/product1.jpg" alt="Basic Slim Fit T-Shirt" />
            <div className="item-details">
              <p>Basic Slim Fit T-Shirt</p>
              <p>$99</p>
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Subtotal: $180</p>
            <p>Shipping: $10</p>
            <p>Total (TAX INCL.): $190</p>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;