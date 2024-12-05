import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function ProductForm({products, setProducts}) {
  const [productName, setProductName] = useState ("")
  const [productPrice, setProductPrice] = useState (0)
  const [productCategory, setProductCategory] = useState ("")
  const [productFeatured, setproductFeatured] = useState (true) 

  let handleADD = () => {
    let newProduct = {
      id: 10,
      name: productName,
      price: productPrice,
      category: productCategory,
      featured: productFeatured // New field added
    }
  console.log (newProduct)

     setProducts ([...products,newProduct ])
  }


  return (
    <>
      <h1>Product form Component</h1>
      <Form.Control type="text" placeholder="Prodcut Name" onChange={(event)=>setProductName(event.target.value)} />
      <Form.Control type="text" placeholder="Prodcut Price" onChange={(event)=>setProductPrice(event.target.value)} />
      <Form.Select aria-label="Default select example" onChange={(event)=>setProductCategory(event.target.value)}>
        <option>Select Product Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home Essentials">Home Essentials</option>
      </Form.Select>

      <Form.Select aria-label="Default select example" onChange={(event)=>setproductFeatured(event.target.value)}>
        <option>Select Product Featured</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </Form.Select>

      <Button variant="outline-primary" onClick={handleADD}>Add Product</Button>


    </>
  )
}
