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
      {/* Animated Banner */}
      <div className="promo-banner">
        Buy 3 and get 15% off, Get 5% extra off on prepaid orders
      </div>

      <nav className="navbar d-flex justify-content-space-around">
        <ul className="nav-links">
          <li>
            <Link to={`/`}>
              <a>Home</a>
            </Link>
          </li>

          {/* Dropdown Menu for Collections */}
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">
              Collections
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/shop/slim-fit">Slim-Fit</Link>
              </li>
              <li>
                <Link to="/shop/over-sized">Over-Sized</Link>
              </li>
              <li>
                <Link to="/shop/anime">Anime</Link>
              </li>
              <li>
                <Link to="/shop/polo">Polo</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div id="logo">
          <img src={logo} alt="YUSI LOGO" />
        </div>
        <div className="icons">
          <Link to={`/cart`}>
            <button type="button" className="btn btnnn_ btn-dark">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle text-bg-secondary border border-light rounded-circle">
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
