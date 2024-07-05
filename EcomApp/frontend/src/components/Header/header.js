import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logoo.png';


const Header = () => {
    return (
<header className="header">
<nav className="navbar d-flex justify-content-space-around">
  <ul className="nav-links">
    <li><a href="../">Home</a></li>
    <li><a href="/">Collections</a></li>
    <li><a href="/">New</a></li>
  </ul>
  <div id="logo">
  <img src={logo} style={{height: '75px', width: '75px', borderRadius: '27px'}} alt="YUSI LOGO"/>
  </div>
  <div className="icons">
  <Link to={`/cart`}>
  <button style={{fontSize: 'x-large',fontFamily: 'fantasy'}} type="button" class="btn btn-dark">Cart</button>
  </Link>
    {/* <a href="/">User</a> */}
  </div>
</nav>
</header>

);
};

export default Header;