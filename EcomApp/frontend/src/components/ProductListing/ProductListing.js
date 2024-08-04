import React, {useState , useEffect} from 'react';
import './ProductListing.css';
import Header from '../Header/header.js';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
// const products = [
//   {
//     id: 1,
//     name: "Basic Slim Fit T-Shirt",
//     price: "$199",
//     image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
//   },
//   {
//     id: 2,
//     name: "Basic Heavy Weight T-Shirt",
//     price: "$199",
//     image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
//   },
//   {
//     id: 3,
//     name: "Full Sleeve Zipper",
//     price: "$199",
//     image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
//   },
//   // Add more products as needed
// ];


const products = [
  {
    id: 1,
    name: 'Embroidered Seersucker Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    description: 'V-Look T Shirt',
    size : 'L',
    category: 'Over-Sized'
  },
  {
    id: 2,
    name: 'Basic Slim Fit T-Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
    description: 'Cotton T Shirt',
    size : 'L',
    category: 'Over-Sized'
  },
  {
    id: 3,
    name: 'Blurred Print T-Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
    description: 'Henley T Shirt',
    size : 'L',
    category: 'slim-Fit'
  },
  {
    id: 4,
    name: 'Full Sleeve Zipper',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
    description: 'Crewnock T Shirt',
    size : 'L',
    category: 'slim-Fit'
  },

  {
    id: 5,
    name: 'Embroidered Seersucker Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
    description: 'V-Look T Shirt',
    size : 'XL',
    category: 'Polo'
  },
  {
    id: 6,
    name: 'Basic Slim Fit T-Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
    description: 'Cotton T Shirt',
    size : 'L',
    category: 'Polo'
  },
  {
    id: 7,
    name: 'Blurred Print T-Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
    description: 'Henley T Shirt',
    size : 'S',
    category: 'Over-Sized'
  },
  {
    id: 8,
    name: 'Full Sleeve Zipper',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
    description: 'Crewnock T Shirt',
    size : 'L',
    category: 'Over-Sized'
  },

  {
    id: 9,
    name: 'Blurred Print T-Shirt',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
    description: 'Henley T Shirt',
    size : 'L',
    category: 'slim-Fit'
  },
  {
    id: 10,
    name: 'Full Sleeve Zipper',
    price: 99,
    image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
    description: 'Crewnock T Shirt',
    size : 'L',
    category: 'slim-Fit'
  },


];







  const ProductListing = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);



    const handleCategoryChange = (category) => {
      setSelectedCategories(prev => 
        prev.includes(category) 
          ? prev.filter(cat => cat !== category) 
          : [...prev, category]
      );
    };

    useEffect(() => {
      const filtered = products.filter(product =>
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    }, [selectedCategories]);




    return (
        <>
        <Header/>
      <div className="product-listing container">
        <div className="filters">
          <div className="filter-section">
            <h4>Size</h4>
            <ul className='d-flex justify-content-between'>
              <li><button className='sizee-btn'>XS</button></li>
              <li><button className='sizee-btn' >S</button></li>
              <li><button className='sizee-btn' >M</button></li>
              <li><button className='sizee-btn' >L</button></li>
              <li><button className='sizee-btn' >Xl</button></li>
              <li><button className='sizee-btn' >XXL</button></li>
            </ul>
          </div>
          <div className="filter-section">
            <h4>Availability</h4>
            <ul>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    In Stock (450)
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Out of stock (18)
  </label>
</div></li>
            </ul>
          </div>
          <div className="filter-section">
          <h4>Category</h4>
        <ul>
          {['Over-Sized', 'Polo', 'slim-Fit', 'Gym Wear'].map(category => (
            <li key={category}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={category}
                  id={`flexCheck${category}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label className="form-check-label" htmlFor={`flexCheck${category}`}>
                  {category}
                </label>
              </div>
            </li>
          ))}
        </ul>
            {/* <ul>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    Over-Sized
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Polo
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    slim-Fit
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Gym Wear
  </label>
</div></li>
            </ul> */}
          </div>
          <div className="filter-section">
            <h4>Rating</h4>
            <ul>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    1 stars & Up
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  2 stars & Up
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  3 stars & Up
  </label>
</div></li>
              <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  4 stars & Up
  </label>
</div></li>
            </ul>
          </div>
        </div>
        <div className="products-section">
          <div className="search-barr">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
          <div className="productss">
            {filteredProducts.map(product => (
              <div className="product-cardd" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  {/* <h3>{product.name}</h3> */}
                  <p> Rs. {product.price}</p>
                  <button className='btnnn'><Link to={`/product/${product.id}`}>{product.name}</Link></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };

export default ProductListing;
