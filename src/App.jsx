import React, { useEffect, useState } from 'react';
import Form from "./components/Form";
import Cards from './components/Cards';


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sendProducts, setSendProducts] = useState([]);

  useEffect(()=>{
    fetch(`https://strapi-store-server.onrender.com/api/products`)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data.data)
      })
  }, [])

  useEffect(() => {
    setSendProducts(filteredProducts.length > 0 ? filteredProducts : products);
  }, [products, filteredProducts]);
    
  return (
    <div>
      <Form filter={{setFilteredProducts, products}} />
      <Cards products={sendProducts} /> 
    </div>
  )
}

export default App
