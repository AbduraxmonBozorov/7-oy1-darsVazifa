import React, { useEffect, useState } from 'react';
import Form from "./components/Form";
import Cards from './components/Cards';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch(`https://strapi-store-server.onrender.com/api/products`)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data.data)
      })
  }, [])
  
  return (
    <div>
      <Form />
      <Cards products={products} /> 
    </div>
  )
}

export default App
