import '../assets/css/mobgadgets_style.css';


const App = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo">Gadget <span>Store.</span></a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#new">New Arrival</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#brands">Our Partners</a></li>
          <a href="~/user/viewAllMyOrders/">Profile</a>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h1><span>Explore</span> the Latest Gadgets <br/> for Your <span>Tech Lifestyle</span></h1>
          <p>Our online store brings you the latest and coolest gadgets to enhance your tech experience. Your satisfaction is our priority.</p>
          <a href="#shop" className="btn">Shop Now</a>
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="heading">
          <span>New Arrival</span>
          <h2>Shop Now</h2>
        </div>

        <div className="shop-container">
          {/* Box components go here */}
        </div>
      </section>

      <section className="new" id="new">
        <div className="heading">
          <span>New Collection</span>
          <h2>Best Selling</h2>
        </div>

        <div className="new-container">
          {/* Box components go here */}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="@{~images/about.jpg}" alt=""/>
        </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>Gadgets for Your Tech Comfort</h2>
          <p>A gadget store that provides the latest and most innovative tech products to enhance your lifestyle.</p>
          <p>Explore our collection of gadgets designed to make your tech experience enjoyable and convenient.</p>
          <a href="#shop" className="btn">Learn More.</a>
        </div>
      </section>

      <section className="brands" id="brands">
        <div className="heading">
          <span>Brands</span>
          <h2>Our Brands Partners</h2>
        </div>

        <div className="brands-container">
          <img src="@{~/images/apple.png}" alt=""/>
          <img src="@{~/images/samsung.png}" alt=""/>
          <img src="@{~/images/sony.png}" alt=""/>
          <img src="@{~/images/microsoft.png}" alt=""/>
          <img src="@{~/images/logitech.png}" alt=""/>
          <img src="@{~/images/hp.png}" alt=""/>
        </div>
      </section>

      <section className="footer" id="footer">
        {/* Footer components go here */}
      </section>

      <div className="copyright">
        <p>&#169; Copyright All Right Reserved to MOB GADGETS from MOB CREATIVES.</p>
      </div>

      <script src="main.js"></script>
    </div>
  );
}

export default App;
