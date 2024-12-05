import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductList({products,setProducts}) {
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Category</th>
          <th>Product Featured</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map ((product, index)=>(
            <tr key={index}>
            <td>1</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.featured ? "✦" : "✎"}</td>
          </tr>
          ))
        }
               
      </tbody>
      </Table>
    </>
  )
}
