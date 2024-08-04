import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import logo from '../../images/logo.jpg';
import { CartContext } from '../../contexts/CartContext';


const Header = () => {

  const { cartItemCount } = useContext(CartContext);
    return (
<header className="header">
<nav className="navbar d-flex justify-content-space-around">
  <ul className="nav-links">
  
    <li><Link to={`/`}><a>Home</a></Link></li>
  
    <Link to="/shop">
    <li><a href="#">Collections</a></li>
    </Link>
    
    {/* <li><a href="#">New</a></li> */}
  </ul>
  <div id="logo">
  <img src={logo} alt="YUSI LOGO"/>
  </div>
  <div className="icons">

  {/* <Link to={`/login`}>
      <a href="/">User</a>
  </Link> */}

  
  <Link to={`/cart`}>
    
  <button type="button" class="btn btnnn_ btn-dark">Cart
  {/* {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>} */}
  <span class="position-absolute top-0 start-100 translate-middle text-bg-secondary border border-light rounded-circle">
    
  {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
    
    
  </span>
  </button>
  
  </Link>

  
    
  </div>
</nav>
</header>

);
};

export default Header;