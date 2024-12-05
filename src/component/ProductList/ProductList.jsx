import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductList({products,setProducts}) {

  let handleDelete = (event, pindex, pname) => {
    console.log ("DELETE")
    console.log (event)
    console.log (pindex)
    console.log (pname)

    let newProductList = products.filter ((product,index)=>index!==pindex)
    setProducts (newProductList)
  }


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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map ((product, index)=>(
            <tr key={index}>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.featured ? "✦" : "✎"}</td>
            <td><Button variant="danger" onClick={(event)=>handleDelete(event,index, "product.name")}>DELETE</Button></td>
          </tr>
          ))
        }
               
      </tbody>
      </Table>
    </>
  )
}
