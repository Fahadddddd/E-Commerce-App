// import logo from '../images/logoo.png';
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const amount = `${cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10}`;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("https://yusii-backend.onrender.com/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      "key": "rzp_test_1wzX0gWhtHOMrI", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "Driftz.co", //your business name
      "description": "Test Transaction",
      // "image": "../images/logoo.png",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      "prefill": {
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    e.preventDefault();
  };

  

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

  const handleSubmit = async (event) => {
    // event.preventDefault();

    // Flattening cart items into separate fields
    const productDetails = cartItems.map(item => ({
      ProductName: item.name,
      ProductSize: item.size,
      ProductPrice: parseFloat(item.price),
    }));

    const requestBody = {
      email,
      phone: parseInt(phone),  // Ensuring phone is a number
      Firstname: firstname,
      Lastname: lastname,
      Country: country,
      State: state,
      Address: address,
      City: city,
      Pincode: parseInt(pincode),  // Ensuring Pincode is a number
      productDetails,
    };

    // Log the request body for debugging
    console.log('Request Body:', requestBody);

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
        setResponseMessage(`Order received: ${result.data.Address} to be delivered at ${result.data.City}`);
        alert("Order Placed Successfully");
        navigate('/order-Summary');
        // window.location.href = '/';  // Redirect to home page
      } else {
        console.error('Error:', result.message);
        alert(result.message);
        setResponseMessage(`Error: ${result.message}`);
      }

      console.log('Response:', result);  // Log the response for debugging

    } catch (error) {
      console.error('Fetch error:', error);
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
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
          {/* <button onClick={handleSubmit} className="shipping-button">Proceed To Payment</button> */}
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
        <button onClick={() => { handleSubmit(); paymentHandler(); }} className="shipping-button">Pay Online(Razorpay)</button>
        <br/>
        <br/>
        <button onClick={() => { handleSubmit(); }} className="shipping-button">COD (Pay On Delivery)</button>
      </div>
    </div>
  );
};

export default Checkout;

