import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Routes,Route} from "react-router-dom";
// import Home from './components/home';
// import Checkout from './components/checkout';
import Explore from './components/Explore';
import Review from './components/Review';

import ProductView from './components/ProductView/ProductView';
import ProductListing from './components/ProductListing/ProductListing';
import CartPage from './components/Cart/CartPage'
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    
    
    <Routes>
      <Route path="/" element={<Explore/>}/>
      {/* <Route path="/Explore" element={<Explore/>}/> */}
      {/* <Route path="/checkout" element={<Checkout/>}/> */}
      
      <Route path="/Review/:productId" element={<Review/>}/>
      <Route path="/product/:productId" element={<ProductView/>}/>
      <Route path="/shop" element={<ProductListing />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    
    
    </>
  );
}

export default App;
