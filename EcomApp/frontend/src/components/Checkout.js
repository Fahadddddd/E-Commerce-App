import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';


const BagAnimation = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    className="bag-svg"
  >
    <g>
      <path
        d="M75,35H65V30c0-8.3-6.7-15-15-15s-15,6.7-15,15v5H25c-2.8,0-5,2.2-5,5v45c0,2.8,2.2,5,5,5h50c2.8,0,5-2.2,5-5V40
		C80,37.2,77.8,35,75,35z M40,30c0-5.5,4.5-10,10-10s10,4.5,10,10v5H40V30z"
        fill="#D2B48C" /* Paper bag color */
      />
      <circle cx="35" cy="50" r="3" className="item-1" />
      <circle cx="50" cy="50" r="3" className="item-2" />
      <circle cx="65" cy="50" r="3" className="item-3" />
    </g>
  </svg>
);


const Checkout = () => {
  
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const amount = `${cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10}`;

  // const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const [responseMessage, setResponseMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      email &&
      phone &&
      firstname &&
      lastname &&
      state &&
      address &&
      city &&
      pincode;

    setIsFormValid(isValid);
  }, [email, phone, firstname, lastname, country, state, address, city, pincode]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    

    const productDetails = cartItems.map(item => ({
      ProductName: item.name,
      ProductSize: item.selectedSize,
      ProductPrice: parseFloat(item.price),
    }));

    const requestBody = {
      email,
      phone: parseInt(phone),
      Firstname: firstname,
      Lastname: lastname,
      Country: country,
      State: state,
      Address: address,
      City: city,
      Pincode: parseInt(pincode),
      productDetails,
    };

    try {
      const response = await fetch('https://yusii-backend.onrender.com/api/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (response.ok) {
      // setOrderId(result.data._id);
      alert("Order Placed Successfully");
      const orderId = result.data._id;
      navigate('/order-summary', { state: { orderId, orderSummary: result.data } }); // Pass data to the order summary page
    } else {
      alert(result.message);
      setResponseMessage(`Error: ${result.message}`);
    }
  } catch (error) {
    setResponseMessage(`Error: ${error.message}`);
  } finally {
    setLoading(false);
  }

  };

  return (
    <>
      {/* Page overlay and loading animation */}
      <div className={`page-overlay ${loading ? 'active' : ''}`}>
        <div className="bag-animation-container">
          <BagAnimation />
          <div className="loading-message">Placing Order... Please Wait</div>
        </div>
      </div>

      {/* Main checkout form */}
      <div className="checkout-container container">
        <div className="checkout-info">
          <h1>CHECKOUT</h1>
          <nav className="checkout-steps">
            <a href="#information" className="active">INFORMATION</a>
          </nav>
          <div className="checkout-form">
            <h2>Contact Info</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <h2>Shipping Address</h2>
            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
            <select value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="">Country</option>
            </select>
            <input type="text" placeholder="State / Region" value={state} onChange={(e) => setState(e.target.value)} required />
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
            <input type="text" placeholder="Postal Code" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <p>Product Name: {item.name}</p>
                <p>Product Price: Rs. {item.price}</p>
                <p>Product Size: {item.selectedSize}</p>
              </div>
            </div>
          ))}

          <div className="summary-details">
            <p>Subtotal: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            <p>Shipping: $10</p>
            <p>Total (TAX INCL.): ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10}</p>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <div className="button-container">
            <button
              onClick={handleSubmit}
              className={`shipping-button ${!isFormValid ? 'disabled-button' : ''}`}
              disabled={!isFormValid || loading}
              title={!isFormValid ? "Fill the required details first" : ""}
            >
              COD (Pay On Delivery)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
