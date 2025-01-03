import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Routes,Route} from "react-router-dom";
// import Home from './components/home';
// import Checkout from './components/checkout';
import Explore from './components/Explore';


import ProductView from './components/ProductView/ProductView';
import ProductListing from './components/ProductListing/ProductListing';
import CartPage from './components/Cart/CartPage'
import Checkout from './components/Checkout';
import OrderSummary from './components/OrderSummary/OrderSummary';
import ReturnRequest from './components/Return/ReturnRequest';


function App() {
  return (
    <>
    
    
    <Routes>
      <Route path="/" element={<Explore/>}/>
      {/* <Route path="/Explore" element={<Explore/>}/> */}
      {/* <Route path="/checkout" element={<Checkout/>}/> */}
      
      {/* <Route path="/Review/:productId" element={<Review/>}/> */}
      <Route path="/product/:productId" element={<ProductView/>}/>
      <Route path="/shop" element={<ProductListing />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/order-Summary" element={<OrderSummary/>}/>
      <Route path="/return" element={<ReturnRequest/>}/>
      

    </Routes>
    
    
    </>
  );
}

export default App;
