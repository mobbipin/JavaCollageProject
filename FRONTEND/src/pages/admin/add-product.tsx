import "../../assets/css/add_product.css";
import { _axios } from "../../config";

const AddProduct = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      brand: formData.get("brand"),
      quantity: formData.get("quantity"),
      color: formData.get("color"),
      category: formData.get("category"),
      description: formData.get("description"),
      image: formData.get("image"),
    };
    await _axios.post("/admin/saveproduct", data);
  };
  return (
    <div className="add-product-container">
      <div className="add-product-title">
        <h2>Product adding Form</h2>
      </div>
      <div className="add-product-d-flex">
        <form onSubmit={(e) => handleSubmit(e)} className="add-product-form">
          <input type="text" hidden />
          <label>
            <span className="fname">
              Product Name <span className="add-product-required">*</span>
            </span>
            <input type="text" placeholder="name" />
          </label>
          <label>
            <span className="lname">
              Price <span className="add-product-required">*</span>
            </span>
            <input type="text" placeholder="price" />
          </label>
          <label>
            <span>Brand</span>
            <input type="text" placeholder="brand" required />
          </label>
          <label>
            <span>
              Quantity<span className="add-product-required">*</span>
            </span>
            <input type="text" placeholder="quantity" />
          </label>

          <label>
            <span>
              Color <span className="add-product-required">*</span>
            </span>
            <input type="text" placeholder="colors" required />
          </label>
          <label>
            <span>
              Category<span className="add-product-required">*</span>
            </span>
            <input type="text" placeholder="Category" required />
          </label>
          <label>
            <span>
              Description<span className="add-product-required">*</span>
            </span>
            <input type="text" placeholder="Description" required />
          </label>
          <label>
            <span>
              Image<span className="add-product-required">*</span>
            </span>
            <input type="file" name="image" accept="image/*" required />
          </label>
          <label>
            {/* <!--                <input type="submit" value="Add Product">--> */}
            <button type="submit">Add Product</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
