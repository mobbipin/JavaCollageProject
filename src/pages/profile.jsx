import "../assets/css/profile.css";

const Profile = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id");
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const password = formData.get("password");
    const user = { id, fullname, email, password };
    // const res = await _axios.post("user/updateprofile", user);
    // action="@{/user/updateprofile}"
  };
  return (
    <>
      <div className="profile-container">
        <form>
          <input
            type="text"
            className="form-control is-valid"
            hidden="hidden"
            name="id"
            // value="${signup.id}"
          />
          <div className="profile-image">
            <img
              src="https://source.unsplash.com/1600x900/?nature"
              alt="Profile Picture"
            />
          </div>
          <div className="profile-name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="profile-input"
              name="fullname"
            />
          </div>
          <div className="profile-email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="profile-input"
            />
          </div>
          <div className="profile-password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="profile-input"
            />
          </div>
          <div className="profile-links">
            <button type="submit">Save</button>
            <button>
              <a
                style={{ color: "white", textDecoration: "none" }}
                // href="@{~/logout}"
              >
                Logout
              </a>
            </button>
          </div>
        </form>
      </div>

      <h2 style={{ textAlign: "center" }}>Your Orders</h2>
      <table id="sortTable" className="profile-table">
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
          {/* <tr each="product:${orderList}">
        <td text="${product.id}"></td>
        <td text="${product.getProduct_id().productname}"></td>
        <td text="${product.getUser_id().fullname}"></td>
        <td text="${product.quantity}"></td>
        <td text="${product.getUser_id().email}"></td>
        <td text="${product.getProduct_id().price}"></td>
        <td> <a className="profile-edit" href="@{~/user/delete/}+${product.id}" >Delete</a></td>


    </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default Profile;
