import React from "react";

const Footer = () => {
  return (
    <>
      <section className="nav-footer" id="footer">
        <div className="nav-footer-box">
          <h2>
            MOB <span>Shop.</span>
          </h2>
          <p>
            Cosmetic products aids extra beauty to the lady. They look
            attractive and beautiful.
          </p>
          <div className="nav-social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="nav-footer-box">
          <h3>Services</h3>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Help & Support</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </div>
        <div className="nav-footer-box">
          <h3>Product</h3>

          {/* <li th:each="product:${productfetch}" ><a href="#" th:text="${product.productname}" ></a></li> */}
        </div>
        <div className="nav-ooter-box nav-contact-info">
          <h3>Contact</h3>
          <span>Kathmandy city, Nepal 10004</span>
          <span>01 523 6784</span>
          <span>cosmeticshop@gmail.com</span>
        </div>
      </section>
      <div className="nav-copyright">
        <p>&#169; Copyright All Right Reserved 2022.</p>
      </div>
    </>
  );
};

export default Footer;
