import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router}  from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
    <CartProvider>
      <App />
    </CartProvider>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
