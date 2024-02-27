import "../assets/css/product.css";
// import { useParams } from "react-router-dom";
const Product = () => {
  // const { id } = useParams();
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img
                src="'data:image/png;base64,'+${productdata.imageBase64}"
                alt="The img is corrupt."
              />
            </div>
          </div>
        </div>
        <div className="product-content">
          <h2
            className="product-title"
            //  text="${productdata.getProductname()}"
          ></h2>

          <div className="product-price">
            <p className="new-price">
              {/* New Price: <span text="${productdata.getPrice()}"></span> */}
            </p>
          </div>

          <div className="product-detail">
            <h2>About this Product: </h2>
            <ul>
              {/* <p>
                Name: <spantext="${productdata.getProductname()}"></span>
              </p>
              <p>
                Brand: <spantext="${productdata.getBrand()}"></span>
              </p>
              <p>
                Category: <spantext="${productdata.getCatrgory()}"></span>
              </p>
              <p>
                Color: <spantext="${productdata.getColor()}"></span>
              </p>
              <p>
                Price: <spantext="${productdata.getPrice()}"></span>
              </p>
              <p>
                Price: <spantext="${productdata.getDescription()}"></span>
              </p> */}
            </ul>
          </div>

          <form
          // th:action="@{/user/saveorder}"
          // th:object="${order}"
          // th:method="post"
          >
            <input type="text" hidden name="user_id" />
            <br />
            <input type="text" hidden name="product_id" />
            <br />
            Quantity: <input type="number" /> <br />
            Address: <input type="text" /> <br />
            <button type="submit" className="btn">
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Product;
