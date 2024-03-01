import React from 'react';

//-------JUST THE TRIAL TO THE ADD PRODUCT SECTION -- TO FETCH THE DATA AND PUT IT ON DATABASE ---------//
interface Product {
  id: number;
  productname: string;
  quantity: number;
  description: string;
  price: number;
  imageBase64: string;
}

interface Props {
  alllistbyid: Product[];
}

const ProductTable: React.FC<Props> = ({ alllistbyid }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Productname</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {alllistbyid.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.productname}</td>
            <td>{product.quantity}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td><img src={`data:image/png;base64,${product.imageBase64}`} width="100" height="100" alt="Product" /></td>
            <td><a className="edit" href={`~/admin/editproduct/${product.id}`}>edit</a></td>
            <td><a className="" href={`~/admin/deleteproduct/${product.id}`}>delete</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
