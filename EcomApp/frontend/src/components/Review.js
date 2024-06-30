
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
    },
    {
      id: 2,
      name: 'Basic Slim Fit T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
      description: 'Cotton T Shirt',
    },
    {
      id: 3,
      name: 'Blurred Print T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
      description: 'Henley T Shirt',
    },
    {
      id: 4,
      name: 'Full Sleeve Zipper',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
      description: 'Crewnock T Shirt',
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
    },

    {
      id: 9,
      name: 'Blurred Print T-Shirt',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
      description: 'Henley T Shirt',
    },
    {
      id: 10,
      name: 'Full Sleeve Zipper',
      price: 99,
      image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
      description: 'Crewnock T Shirt',
    },


  ];

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  const amount = 500;
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

  




  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    //setProduct = selectedProduct
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const apiUrl = 'http://localhost:3000/api/address';
        // console.log(`Making a request to: ${apiUrl}`);
        const response = await fetch('/api/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Firstname: firstname,
              Lastname: lastname,
              email: email,
              Address: address,
              State: state,
              City: city,
              Pincode: pincode
          })
        });

        const result = await response.json();
        setResponseMessage(`Order received: ${result.Address} to be delivered at ${result.City}`);


      };



  if (!selectedProduct) {
    return <div>Product not found</div>;
  }
  else
  {
    // console.log(selectedProduct);
    return (
      <div className='container'>
       

        <div class="row g-5 reviewform">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Order Summary</span>
          {/* <span class="badge bg-primary rounded-pill">3</span> */}
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{selectedProduct.name}</h6>
              <small class="text-body-secondary">{selectedProduct.description}</small>
            </div>
            <span class="text-body-secondary">${selectedProduct.price}</span>
          </li>
          
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${selectedProduct.price}</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code"/>
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <form onSubmit={handleSubmit} id="orderForm" class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
            </div>

            <div class="col-sm-6">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
            </div>


            <div class="col-12">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} required />
            </div>

            <div class="col-md-5">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
              <div class="invalid-feedback">
                Please select a valid city.
              </div>
            </div>


            <div class="col-md-3">
            <label htmlFor="pincode">Pincode:</label>
            <input type="number" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          {/* <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div> */}

          <hr class="my-4"/>

          {/* <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
              <small class="text-body-secondary">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div> */}

          <hr class="my-4"/>

          <button onClick={paymentHandler} class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
    </div>





      
    );
  }
  
};

export default Review;







