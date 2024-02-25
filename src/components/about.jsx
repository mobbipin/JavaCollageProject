import AboutImage from "../assets/images/about.png";
const About = () => {
  return (
    <>
      <section className="nav-about" id="about">
        <div className="nav-about-img">
          <img src={AboutImage} alt="" />
        </div>
        <div className="nav-about-text">
          <span>About Us</span>
          <h2>
            Cosmetic is important part <br />
            for comfort
          </h2>
          <p>
            A beauty store, beauty supply store or cosmetics store is a
            specialty retailer that sells cosmetics, hair-care products and/or
            beauty tools.
          </p>
          <p>
            Cosmetics designed to enhance or alter one&apos;s appearance
            (makeup) can be used to conceal blemishes, enhance one&apos;s
            natural features
          </p>
          <a href="#shop" className="btn">
            Learn More.
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
