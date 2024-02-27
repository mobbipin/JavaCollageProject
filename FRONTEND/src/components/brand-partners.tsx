import Google from "../assets/images/Google.png";
import Amazon from "../assets/images/amazon.png";
import Netflix from "../assets/images/netflix.png";
import Tesla from "../assets/images/tesla.png";
import Starbucks from "../assets/images/starbucks.png";
import Zoom from "../assets/images/zoom.png";
const BrandPartner = () => {
  return (
    <>
      <section className="nav-brands" id="brands">
        <div className="nav-heading">
          <span>Brands</span>
          <h2>Our Brands Partners</h2>
        </div>
        <div className="nav-brands-container">
          <img src={Google} alt="" />
          <img src={Amazon} alt="" />
          <img src={Netflix} alt="" />
          <img src={Tesla} alt="" />
          <img src={Starbucks} alt="" />
          <img src={Zoom} alt="" />
        </div>
      </section>
      <section className="nav-newsletter" id="contact">
        <h2>Subscribe To Newsletter</h2>
        <div className="nav-news-box">
          <input type="text" placeholder="Enter Your Email..." />
          <a href="#" className="nav-btn">
            Subscribe
          </a>
        </div>
      </section>
    </>
  );
};

export default BrandPartner;
