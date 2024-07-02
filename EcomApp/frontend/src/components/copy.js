





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

















