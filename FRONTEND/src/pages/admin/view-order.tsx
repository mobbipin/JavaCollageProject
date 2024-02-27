import AdminNavbar from "../../components/admin-navbar";
import "../../assets/css/admin.css";
import "../../assets/css/table.css";
const ViewOrder = () => {
  return (
    <>
      <AdminNavbar />

      <div
        style={{ marginLeft: "250px", marginTop: "100px", marginRight: "5px" }}
      >
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Productname</th>
              <th>UserName</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr each="product:${alllist}">
              <td text="${product.id}"></td>
              <td text="${product.getProduct_id().productname}"></td>
              <td text="${product.getUser_id().fullname}"></td>
              <td text="${product.quantity}"></td>
              <td text="${product.address}"></td>
              <td text="${product.getUser_id().email}"></td>
              <td text="${product.getProduct_id().price}"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewOrder;
