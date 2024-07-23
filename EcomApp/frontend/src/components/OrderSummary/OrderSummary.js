import React from 'react';
import './OrderSummary.css';
import Header from '../Header/header';
import { useEffect, useState } from 'react';
const OrderSummary = () => {

//     const { result } = useParams();
//     let orderData;
//   try {
//     orderData = JSON.parse(decodeURIComponent(result));
//   } catch (e) {
//     console.error("Error parsing JSON:", e);
//     orderData = {}; // Fallback to an empty object
//   }


const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('orderSummary');
    if (storedData) {
      setOrderData(JSON.parse(storedData));
    }
  }, []);

  if (!orderData) {
    return <div>Loading...</div>;
  }




  return (
    <>
    <Header />

    <div className="order-summary container">
      <h1>Thank you, {orderData.Firstname}!</h1>
      <div className="order-status">
        <div className="status-item confirmed">
          <span>Confirmed</span>
          <span>July 21</span>
        </div>
        <div className="status-item on-its-way">
          <span>On its way</span>
          <span>July 22</span>
        </div>
        <div className="status-item out-for-delivery">
          <span>Out for delivery</span>
        </div>
        <div className="status-item delivered">
          <span>Delivered</span>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.0148754196347!2d86.4398906154779!3d23.795928484564003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bbba78a1a807%3A0x6e8a82674e4d6c7b!2sDhanbad%2C%20Jharkhand%20826001!5e0!3m2!1sen!2sin!4v1626191299257!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="shipping-address">Shipping address: Dhanbad, Jharkhand</div>
      </div>
      <div className="order-info">
        <h2>Your order is on its way</h2>
        <p>You'll receive updates on its progress.</p>
        <p>Shipclues tracking number: 81723024681</p>
      </div>
      <div className="order-details">
        <h3>Order details</h3>
        <div className="details-section">
          <div className="contact-info">
            <p>Contact information</p>
            <p>{orderData.email}</p>
          </div>
          <div className="payment-method">
            {/* <p>Payment method</p>
            <p>Simpl (UPI) - ₹1,329</p> */}

<h2>Products</h2>
          {orderData.productDetails && orderData.productDetails.length > 0 ? (
            orderData.productDetails.map((product, index) => (
              <div key={index}>
                <p><strong>Product Name:</strong> {product.ProductName}</p>
                <p><strong>Product Size:</strong> {product.ProductSize}</p>
                <p><strong>Product Price:</strong> Rs. {product.ProductPrice}</p>
              </div>
            ))
          ) : (
            <p>No products found in the order.</p>
          )}

          </div>
          <div className="address">
            <p>Shipping address</p>
            <p>{orderData.Firstname} {orderData.Lastname}</p>
            <p>{orderData.Address}</p>
            {/* <p>Rhamat Gunj</p> */}
            {/* <p>Rhamat Gunj wassepur</p> */}
            <p>{orderData.Pincode} {orderData.City} {orderData.State}</p>
            <p>India</p>
            <p>{orderData.phone}</p>
          </div>
        </div>
        <div className="shipping-method">
          <p>Shipping method</p>
          <p>Standard</p>
        </div>
      </div>
      {/* <div className="help">
        <p>Need help? <a href="#">Contact us</a></p>
      </div> */}
    </div>
    </>
  );
};

export default OrderSummary;
