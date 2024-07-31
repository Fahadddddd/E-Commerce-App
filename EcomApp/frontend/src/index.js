import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router}  from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './contexts/CartContext';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <Router>
    <CartProvider>
    <KindeProvider
    clientId="8b79739d5a9544aeb8d400203b8082b6"
    domain="https://driftz.kinde.com"
    logoutUri={window.location.origin}
    redirectUri={`${window.location.origin}/checkout`}
    >

        <App />

    </KindeProvider>

      
    </CartProvider>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
