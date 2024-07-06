import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import logo from '../images/logoo.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header/header';



export default function Explore()
{

  

  // const products = [
  //   { id: 1, name: 'PUMA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 99.00 },
  //   { id: 2, name: 'RED TAPE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 49.00 },
  //   { id: 3, name: 'NIKE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 69.00 },
  // ];

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


  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const navigate = useNavigate();
 
  return (
    <>
      <div className='container'>
      {/* <header className="header">
      <nav className="navbar d-flex justify-content-space-around">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
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
          
        </div>
      </nav>
    </header> */}

    <Header/>



    
    <br/>

    <ul className="category-link">
          <li><a href="/">Over-Sized</a></li>
          <li><a href="/">Slim-Fit</a></li>
          <li><a href="/">Polo</a></li>
    </ul>
    
    <div className="search-bar" style={{paddingLeft: '40px'}}>
          <input style={{height: '40px',width: '400px'}} type="text" placeholder="Search" />
    </div>

  
    <main className="home">
      <section className="intro">
        <h1>NEW COLLECTION</h1>
        <p>Summer 2024</p>
        <Link to="/shop">
        <button>Go To Shop</button>
        </Link>
        
      </section>
      <section className="products">
         <div className="product">
<img src=" data:image/jpeg;base64,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 " alt="Product 1" />
</div>
<div className="product">
  <img src=" data:image/jpeg;base64,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 " alt="Product 2" />
</div> 
      </section>

    




    </main>


    <div className="App">
      <div className="product-grid">
        <div style={{background: '#e9e9e9'}} className="headerr">
          <h2>NEW 
            <br/>THIS WEEK <span>(50)</span></h2>
          <button id='btnn'>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Explore All
          </button>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
            
          
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <p className="description">{product.description}</p>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button className='btnnn'><Link to={`/product/${product.id}`}>{product.name}</Link></button>
              </div>
            </div>
          ))}
        </Slider>
        
        <div className="pagination">
          <button onClick={() => sliderRef.current.slickPrev()} >&lt;</button>
          <button onClick={() => sliderRef.current.slickNext()}>&gt;</button>
        </div>
      </div>
    </div>

    </div>


  


    </>
  )
}

