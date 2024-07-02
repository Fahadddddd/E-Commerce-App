
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Review = () => {

  const { productId } = useParams();

  const products = [
    {
      id: 1,
      name: 'Embroidered Seersucker Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
      description: 'V-Look T Shirt',
      size : 'L',
    },
    {
      id: 2,
      name: 'Basic Slim Fit T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
      description: 'Cotton T Shirt',
      size : 'L',
    },
    {
      id: 3,
      name: 'Blurred Print T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
      description: 'Henley T Shirt',
      size : 'L',
    },
    {
      id: 4,
      name: 'Full Sleeve Zipper',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
      description: 'Crewnock T Shirt',
      size : 'L',
    },

    {
      id: 5,
      name: 'Embroidered Seersucker Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
      description: 'V-Look T Shirt',
    },
    {
      id: 6,
      name: 'Basic Slim Fit T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
      description: 'Cotton T Shirt',
      size : 'L',
    },
    {
      id: 7,
      name: 'Blurred Print T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
      description: 'Henley T Shirt',
    },
    {
      id: 8,
      name: 'Full Sleeve Zipper',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
      description: 'Crewnock T Shirt',
      size : 'L',
    },

    {
      id: 9,
      name: 'Blurred Print T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
      description: 'Henley T Shirt',
      size : 'L',
    },
    {
      id: 10,
      name: 'Full Sleeve Zipper',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
      description: 'Crewnock T Shirt',
      size : 'L',
    },


  ];

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  const amount = selectedProduct.price;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:5000/order" , {
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
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
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



  }

  



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

    const productname = selectedProduct.name;
    const productprice = selectedProduct.price;
    const productsize = selectedProduct.size;

    //setProduct = selectedProduct
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     // const apiUrl = 'http://localhost:3000/api/address';
    //     // console.log(`Making a request to: ${apiUrl}`);
    //     const response = await fetch('/api/address', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           email: email,
    //           phone: phone,
    //           Firstname: firstname,
    //           Lastname: lastname,
    //           country: country,
    //           state: state,
    //           Address: address,
    //           City: city,
    //           Pincode: pincode,
    //           ProductName: productname,
    //           ProductSize: productsize,
    //           ProductPrice: productprice,
    //       })
    //     });

    //     const result = await response.json();
    //     setResponseMessage(`Order received: ${result.Address} to be delivered at ${result.City}`);


    //   };

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const requestBody = {
          email: email,
          phone: parseInt(phone),  // Ensuring phone is a number
          Firstname: firstname,
          Lastname: lastname,
          Country: country,
          State: state,
          Address: address,
          City: city,
          Pincode: parseInt(pincode),  // Ensuring Pincode is a number
          ProductName: productname,
          ProductSize: productsize,
          ProductPrice: parseFloat(productprice),  // Ensuring ProductPrice is a number
      };
  
      try {
          console.log('Request Body:', requestBody);  // Log the request body for debugging
  
          const response = await fetch('/api/address', {
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
              window.location.href = '/';  // Redirect to home page
          } else {
              console.error('Error:', result.message);
              alert(result.message)
              setResponseMessage(`Error: ${result.message}`);
          }
  
          console.log('Response:', result);  // Log the response for debugging
          

      } catch (error) {
          console.error('Fetch error:', error);
          setResponseMessage(`Error: ${error.message}`);
      }
  };



  if (!selectedProduct) {
    return <div>Product not found</div>;
  }
  else
  {
    // console.log(selectedProduct);
    return (


    <div className="checkout-container">
      <div className="checkout-info">
        <h1>CHECKOUT</h1>
        <nav className="checkout-steps">
          <a href="#information" className="active">INFORMATION</a>
          {/* <a href="#shipping">SHIPPING</a>
          <a href="#payment">PAYMENT</a> */}
        </nav>
        <div className="checkout-form">
          <h2>Contact Info</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          
          <h2>Shipping Address</h2>
          <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}  required />
          <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Country</option>
            {/* Add more country options as needed */}
            
          </select>
          <input type="text" placeholder="State / Region" value={state} onChange={(e) => setState(e.target.value)} required/>
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required/>
          <input type="text" placeholder="Postal Code" value={pincode} onChange={(e) => setPincode(e.target.value)} required/>
          <button onClick={handleSubmit} className="shipping-button">Proceed To Payment</button>
        </div>
      </div>
      <div className="checkout-summary">
        <h2>YOUR ORDER</h2>
        <div className="order-item">
          <img src={selectedProduct.image}  alt="Basic Heavy T-Shirt" />
          <div>
            <p>{selectedProduct.name}</p>
            <p>Black, L</p>
            <p>{selectedProduct.price}</p>
          </div>
          <button>Change</button>
        </div>
        <div className="order-item">
          <img src={selectedProduct.image} alt="Basic Fit T-Shirt" />
          <div>
            <p>{selectedProduct.name}</p>
            <p>Black, L</p>
            <p>{selectedProduct.price}</p>
          </div>
          <button>Change</button>
        </div>
        <div className="order-summary">
          <p>Subtotal: $180.00</p>
          <p>Shipping: Calculated at next step</p>
          <p>Total: $180.00</p>
        </div>
      </div>
    </div>



      
    );
  }
  
};

export default Review;







