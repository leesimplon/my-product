import React, { useState } from 'react';
import Affichage from './components/Affichage';
import Formulaire from './components/Formulaire';
import './App.css';

var App = () => {
  const productsData = []

  const [products, setProducts] = useState(productsData)
  const [count, setCount] = useState(0)
  const [ editing, setEditing ] = useState(false)

  const addProduct = product => {
	 	product.id = count
		setProducts([ ...products, product ])
  }
  
  const deleteProduct = id => {
    setProducts(products.filter(product => product.id !== id))
  }

  const editProduct = product => {
    setEditing(true)
    setProducts([ ...products, product ])
  }

  const updateProduct = (id, updatedProduct) => {
    setEditing(false)
  
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
  }

  return (
    <div className="container">      
      <div className="flex-row">
        <div className="flex-large">
          
          <Formulaire addProduct={addProduct} setCount={setCount} count={count}/>
        </div>
        <div className="flex-large">
          
          <Affichage products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
        </div>
      </div>
    </div>
  )
}

export default App

