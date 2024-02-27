import React from 'react';

interface Product {
  id: number;
  getProduct_id: {
    productname: string;
    price: number;
  };
  getUser_id: {
    fullname: string;
    email: string;
  };
  quantity: number;
  address: string;
}

interface Props {
  alllist: Product[];
}

const AdminProductList: React.FC<Props> = ({ alllist }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="nav-links">
          <li>
            <a href="/admin/viewallproduct">
              <i className='bx bx-box'></i>
              <span className="links_name">My Products</span>
            </a>
          </li>
          <li>
            <a href="/admin/viewallorder">
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Order List</span>
            </a>
          </li>
          <li className="log_out">
            <a href="/logout">
              <i className='bx bx-log-out'></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Administrator</span>
          </div>
        </nav>
      </section>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>User Name</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {alllist.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.getProduct_id.productname}</td>
                <td>{product.getUser_id.fullname}</td>
                <td>{product.quantity}</td>
                <td>{product.address}</td>
                <td>{product.getUser_id.email}</td>
                <td>{product.getProduct_id.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductList;
