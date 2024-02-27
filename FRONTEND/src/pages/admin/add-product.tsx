import React from 'react';

interface Product {
  id: string;
  productname: string;
  price: string;
  brand: string;
  quantity: string;
  color: string;
  category: string;
  description: string;
}

interface Props {
  add: Product;
}

const AddProductForm: React.FC<Props> = ({ add }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // You can handle the form data as needed.
    // For example, you can send it to your server using an API.
  };

  return (
    <div className="container">
      <div className="title">
        <h2>MobGadgets Product Adding Form</h2>
      </div>
      <div className="d-flex">
        <form method="post" action="/admin/saveproduct" onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" hidden name="id" value={add.id} />
          <label>
            <span className="fname">Product Name <span className="required">*</span></span>
            <input type="text" placeholder="Name" name="productname" value={add.productname} />
          </label>
          <label>
            <span className="lname">Price <span className="required">*</span></span>
            <input type="text" placeholder="Price" name="price" value={add.price} />
          </label>
          <label>
            <span>Brand</span>
            <input type="text" placeholder="Brand" name="brand" required value={add.brand} />
          </label>
          {/* Add other input fields here */}
          <label>
            <span>Description<span className="required">*</span></span>
            <input type="text" placeholder="Description" name="description" required value={add.description} />
          </label>
          <label>
            <span>Image<span className="required">*</span></span>
            <input type="file" name="image" accept="image/*" required />
          </label>
          <label>
            <button type="submit">Add Product</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
