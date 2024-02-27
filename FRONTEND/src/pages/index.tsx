import Navbar from "../components/navbar";
import "../assets/css/style.css";

import Footer from "../components/footer";
import BrandPartner from "../components/brand-partners";
import About from "../components/about";

const Index = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/*  Home */}
      <section className="nav-home" id="home">
        <div className="nav-home-text">
          <h1>
            <span>Make</span>Your Comfort <br /> Is Our <span>Happiness</span>
          </h1>
          <p>
            Our online store makes you feel the quality product is a part of
            your life. Our service is customer satisfaction.
          </p>
          <a href="#shop" className="nav-btn">
            Shop Now
          </a>
        </div>
      </section>
      {/*  Shop */}
      <section className="shop" id="shop">
        <div className="nav-heading">
          <span>New Arrival</span>
          <h2>Shop Now</h2>
        </div>
        <div className="nav-shop-container">
          <div className="nav-box">
            <a href="@{~/user/productinfo/}+${product.id}">
              <div className="nav-box-img">
                <img
                  src="'data:image/png;base64,'+${product.imageBase64}"
                  alt=""
                />
              </div>
              <div className="nav-title-price">
                {/* <h3 text="${product.productname}"></h3> */}
                <div className="nav-stars">
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star-half"></i>
                </div>
              </div>
              {/* <span th:text="${product.price}"></span> */}
            </a>
            <i className="bx bx-cart">buy</i>
          </div>
        </div>
      </section>
      {/* New Arrival */}
      <section className="new" id="new">
        <div className="nav-heading">
          <span>New Collection</span>
          <h2>Best Selling</h2>
        </div>
        <div className="nav-new-container">
          <div className="nav-box">
            <a href="@{~/user/productinfo/}+${product.id}">
              <div className="nav-box-img">
                <img
                  src="'data:image/png;base64,'+${product.imageBase64}"
                  alt=""
                />
              </div>
              <div className="nav-title-price">
                {/* <h3 th:text="${product.productname}"></h3> */}
                <div className="nav-stars">
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star"></i>
                  <i className="nav-bx nav-bxs-star-half"></i>
                </div>
              </div>
              {/* <span th:text="${product.price}"></span> */}
              <i className="nav-bx nav-bx-cart"></i>
            </a>
          </div>
        </div>
      </section>
      {/* About */}
      <About />
      {/* Brands */}
      <BrandPartner />
      <Footer />
    </>
  );
};

export default Index;
