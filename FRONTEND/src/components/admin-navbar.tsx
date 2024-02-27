import { Link } from "react-router-dom";
import "../assets/css/admin.css";
import "../assets/css/table.css";
import { useState } from "react";
const AdminNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={`admin-sidebar ${isActive ? "active" : ""}`}>
        <ul className="admin-nav-links">
          <li>
            <Link to="/all-product">
              <i className="bx bx-box"></i>
              <span className="admin-links_name">My Product</span>
            </Link>
          </li>
          <li>
            <Link to="/view-order">
              <i className="bx bx-list-ul"></i>
              <span className="admin-links_name">Order list</span>
            </Link>
          </li>

          <li className="admin-log_out">
            <a href="@{~/logout}">
              <i className="bx bx-log-out"></i>
              <span className="admin-links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="admin-home-section">
        <nav>
          <div className="admin-sidebar-button" onClick={toggleSidebar}>
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Administrator</span>
          </div>
        </nav>
      </section>
    </>
  );
};

export default AdminNavbar;
