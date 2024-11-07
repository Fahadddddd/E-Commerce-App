import React from 'react';
import './OrderSummary.css';
import Header from '../Header/header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
const OrderSummary = () => {

  const location = useLocation();
  const { orderSummary , orderId } = location.state || {};

  if (!orderSummary) return <p>Loading...</p>;
  return (
    <>
    <Header />

    <div className="order-summary container">
      <h1>Thank you</h1>

      <div className="order-info">
        <h2>Your order is on its way</h2>
        <p>You'll receive updates on its progress.</p>
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Copy And Store The OrderId For Return , Refund Purpose You will Recive a copy of It in your mail and Whatsapp Also</strong></p>
        {/* <p>Shipclues tracking number: 81723024681</p> */}
      </div>
      <div className="order-details">
        <h3>Order details</h3>
        <div className="details-section">
        <p><strong>Shipping To:</strong> {orderSummary.Firstname} {orderSummary.Lastname}</p>
        <p><strong>Contact:</strong> {orderSummary.phone}</p>
          <div className="payment-method">
            {/* <p>Payment method</p>
            <p>Simpl (UPI) - ₹1,329</p> */}
          </div>
          <div className="address">
          
          <p><strong>Shipping Address:</strong> {orderSummary.Address}</p>
          <p><strong>City:</strong> {orderSummary.City}</p>
          </div>
        </div>
        <div className="shipping-method">
          <p><strong>Shipping method:</strong> Standard</p>
          {/* <p>Standard</p> */}
        </div>
      </div>
      {/* <div className="help">
        <p>Need help? <a href="#">Contact us</a></p>
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default OrderSummary;