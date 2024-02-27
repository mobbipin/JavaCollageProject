import { Link } from "react-router-dom";
import "../../assets/css/admin.css";
import "../../assets/css/table.css";
import AdminNavbar from "../../components/admin-navbar";
const AllProducts = () => {
  return (
    <>
      <AdminNavbar />
      <div
        style={{ marginLeft: "250px", marginTop: "100px", marginRight: " 5px" }}
      >
        <button
          style={{
            marginLeft: "45%",
            background: "green",
            padding: "5px",
            borderRadius: " 5px",
          }}
        >
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/add-product"
          >
            ADD PRODUCT
          </Link>
        </button>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Productname</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr each="product:${alllist}">
              <td text="${product.id}"></td>
              <td text="${product.productname}"></td>
              <td text="${product.quantity}"></td>
              <td text="${product.description}"></td>
              <td text="${product.price}"></td>
              <td>
                <img
                  src="'data:image/png;base64,'+${product.imageBase64}"
                  width="100"
                  height="100"
                />
              </td>
              <td>
                <a class="edit" href="@{~/admin/editproduct/}+${product.id}">
                  edit
                </a>
              </td>
              <td>
                <a
                  class="edit"
                  href="@{~/admin/deleteproduct/}+${product.id}"
                >
                  delete
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProducts;
