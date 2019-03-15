import React, { useState } from 'react';
import Affichage from './components/Affichage';
import Formulaire from './components/Formulaire';
import Somme from './components/Somme';
import './App.css';
import Edition from './components/Edition'
import { Alert } from 'reactstrap';
//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

var App = () => {
  //ajout
  const productsData = []
  const [products, setProducts] = useState(productsData)
  const [count, setCount] = useState(0)
  
  const addProduct = product => {
	 	product.id = count
		setProducts([ ...products, product ])
  }
  
  //suppr
  const deleteProduct = id => {
    setProducts(products.filter(product => product.id !== id))
  }

  //edit
  const [ editing, setEditing ] = useState(false)
  const initialFormState = { id: null, nom: '', prix: '' }
  const [ currentProduct, setCurrentProduct ] = useState(initialFormState)

  const editProduct = product => {
    setEditing(true)
    setCurrentProduct({ id: product.id, nom: product.nom, prix: product.prix })
  }
  
  const updateProduct = (id, updatedProduct) => {
    setEditing(false)  
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
  }

  return (
    <div className="container">      
      <div className="flex-row">
        <div className="flex-large"> 
          {editing?(
                                
                                <Alert className="popedit" color="secondary">                      
            <Edition
            editing={editing}
            setEditing={setEditing}
            currentProduct={currentProduct}
            updateProduct={updateProduct}
          />
            </Alert>
         /* )
          
			}*/
		  
            
            ):(''
              
          )}  
          <Formulaire addProduct={addProduct} setCount={setCount} count={count}/>       
          
        </div>
        <div className="flex-large">          
          <Affichage products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
          <Somme products={products}/>
        </div>
      </div>

      

    </div>

  )
}

export default App

