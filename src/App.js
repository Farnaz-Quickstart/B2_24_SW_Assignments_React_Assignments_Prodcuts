import './App.css';
import { useState } from 'react'
import ProductList from './component/ProductList/ProductList';
import ProductForm from './component/ProductForm/ProductForm';
import React from 'react';

function App() {
  
  const InitialProducts = [
    {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    featured: false // New field added
    },
    {
    id: 2,
    name: "T-shirt",
    price: 19.99,
    category: "Clothing",
    featured: true // New field added
    },
    {
    id: 3,
    name: "Microwave",
    price: 89.99,
    category: "Home Essentials",
    featured: false // New field added
    },
    {
    id: 4,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    featured: true // New field added
    },
    {
    id: 5,
    name: "Jeans",
    price: 39.99,
    category: "Clothing",
    featured: false // New field added
    },
    {
    id: 6,
    name: "Blender",
    price: 49.99,
    category: "Home Essentials",
    featured: false // New field added
    },
    {
    id: 7,
    name: "Wireless Headphones",
    price: 159.99,
    category: "Electronics",
    featured: false // New field added
    },
    {
    id: 8,
    name: "Socks",
    price: 5.99,
    category: "Clothing",
    featured: false // New field added
    }
    ];

    const [products, setProducts] = useState (InitialProducts)

  return (
    <>
       <h1>This is main component</h1>
       <ProductList products={products} setProducts={setProducts} />
       <ProductForm products={products} setProducts={setProducts} />
    </>
  );
}

export default App;
