import 'boxicons/css/boxicons.min.css';
import React from 'react';
import './mobgadgets_style.css';


//--------------THIS IS THE DATA HANDLING PART THAT I HAVENOT INTEGRATED YET -----------//
const App: React.FC = () => {
  const userdata = { id: 'yourUserId' }; 

  const add = []; 
  const productfetch = [];

  return (
    <>
      <header>
        <a href="#" className="logo">Gadget <span>Store.</span></a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#new">New Arrival</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#brands">Our Partners</a></li>
          <a href={`~/user/viewAllMyOrders/${userdata.id}`}>Profile</a>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h1><span>Explore</span> the Latest Gadgets <br /> for Your <span>Tech Lifestyle</span></h1>
          <p>Our online store brings you the latest and coolest gadgets to enhance your tech experience. Your satisfaction is our priority.</p>
          <a href="#shop" className="btn">Shop Now</a>
        </div>
        <div className="home-image">
          <img src="/images/gadgets.png" alt="Gadgets Image" />
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="heading">
          <span>New Arrival</span>
          <h2>Shop Now</h2>
        </div>
        <div className="shop-container">
          {add.map((product) => (
            <div className="box" key={product.id}>
              <a href={`~/user/productinfo/${product.id}`}>
                <div className="box-img">
                  <img src={`data:image/png;base64,${product.imageBase64}`} alt="" />
                </div>
                <div className="title-price">
                  <h3>{product.productname}</h3>
                  <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                </div>
                <span>{product.price}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Add similar sections for "new", "about", "brands", "footer", and "copyright" */}

      <section className="footer" id="footer">
        <div className="footer-box">
          <h2>Gadget <span>Store.</span></h2>
          <p>Discover the latest and coolest gadgets to elevate your tech lifestyle.</p>
          <div className="social">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Services</h3>
          <li><a href="#">Product</a></li>
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </div>
        <div className="footer-box">
          <h3>Product</h3>
          {productfetch.map((product) => (
            <li key={product.id}><a href="#" >{product.productname}</a></li>
          ))}
        </div>
        <div className="footer-box contact-info">
          <h3>Contact</h3>
          <span>Kathmandu, Nepal</span>
          <span>977 9803223892398</span>
          <span>info@gadgetstorefrmthemob.com</span>
        </div>
      </section>

      <div className="copyright">
        <p>&#169; Copyright All Right Reserved to MOB GADGETS from MOB CREATIVES.</p>
      </div>


      <script src="main.js"></script>
    </>
  );
};

export default App;
