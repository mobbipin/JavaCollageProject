import React from 'react';

interface Product {
  id: number;
  productname: string;
  quantity: number;
  description: string;
  price: number;
  imageBase64: string;
}

interface Props {
  alllist: Product[];
}

const AdminProductList: React.FC<Props> = ({ alllist }) => {
  return (
    <div style={{ marginLeft: '250px', marginTop: '100px', marginRight: '5px' }}>
      <button style={{ marginLeft: '45%', background: '#800000', padding: '5px', borderRadius: '5px' }}>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="/admin/addproduct">
          ADD PRODUCT
        </a>
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
          {alllist.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productname}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={`data:image/png;base64,${product.imageBase64}`} width="100" height="100" alt="Product" />
              </td>
              <td>
                <a className="edit" href={`/admin/editproduct/${product.id}`}>
                  edit
                </a>
              </td>
              <td>
                <a className="edit" href={`/admin/deleteproduct/${product.id}`}>
                  delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
