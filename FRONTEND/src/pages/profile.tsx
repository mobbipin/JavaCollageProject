import React from 'react';

interface Product {
  id: string;
  quantity: number;
  getProduct_id: () => {
    productname: string;
    price: number;
  };
  getUser_id: () => {
    fullname: string;
    email: string;
  };
}

interface Props {
  signup: {
    id: string;
    fullname: string;
    email: string;
    password: string;
  };
  userdata: {
    fullname: string;
    email: string;
  };
  orderList: Product[];
}

const Profile: React.FC<Props> = ({ signup, userdata, orderList }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("id");
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const password = formData.get("password");
    // const user = { id, fullname, email, password };
    // const res = await _axios.post("user/updateprofile", user);
  };

  return (
    <>
      <header>
        <h1>Gadget Profile</h1>
      </header>

      <div className="profile-container">
        <form action="/user/updateprofile" method="post" onSubmit={onSubmit}>
          <input type="text" className="form-control is-valid" hidden name="id" value={signup.id} />
          <div className="profile-image">
            <img src="https://source.unsplash.com/1600x900/?technology" alt="Profile Picture" />
          </div>
          <div className="profile-name">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" className="profile-input" name="fullname" value={userdata.fullname} />
          </div>
          <div className="profile-email">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="profile-input" value={userdata.email} />
          </div>
          <div className="profile-password">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="profile-input" />
          </div>
          <div className="profile-links">
            <button type="submit">Save</button>
            <button><a style={{ color: 'white', textDecoration: 'none' }} href="/logout">Logout</a></button>
          </div>
        </form>
      </div>

      <h2 style={{ textAlign: 'center' }}>Your Gadget Orders</h2>
      <table id="gadgetTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Productname</th>
            <th>UserName</th>
            <th>Quantity</th>
            <th>Email</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.getProduct_id().productname}</td>
              <td>{product.getUser_id().fullname}</td>
              <td>{product.quantity}</td>
              <td>{product.getUser_id().email}</td>
              <td>{product.getProduct_id().price}</td>
              <td><a className="edit" href={`/user/delete/${product.id}`}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/bootstrap-table@1.21.2/dist/bootstrap-table.min.js"></script>
    </>
  );
};

export default Profile;
