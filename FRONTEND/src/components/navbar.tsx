import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="nav-header">
        <a href="#" className="logo">
          MOB <span>Shop.</span>
        </a>
        <div className="bx bx-menu" id="nav-menu-icon"></div>

        <ul className="nav-navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#new">New Arrival</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#brands">Our Partners</a>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/*            <li><a href="#contact">Contact</a></li>
           <li><a href="demo.html" className="btn">Profile</a></li> */}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
