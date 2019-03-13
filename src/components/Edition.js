
import React, { useState, useEffect } from 'react'


const Edition = props => {
	
	const [ product, setProduct ] = useState(props.currentProduct)

	useEffect(
		() => {
		  setProduct(props.currentProduct)
		},
		[ props ]
	)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (/*
		confirmAlert({
                                      
			//title : 'Supression Produit',
			message: <input type="text" name="prix" value={product.prix} onChange={handleInputChange} />,
			buttons: [
			  {
				label: 'OK',
				onClick: () => event => {
					event.preventDefault()
					props.updateProduct(product.id, product)
				}
			  },
			  {
				label: 'Annuler',
				onClick: () => () => props.setEditing(false)
			  }
			]
		  })*/
		//confirmAlert({
                                
			//customUI: ({ onClose }) => {
			  //return (
				<form
					onSubmit={event => {
						event.preventDefault()
						props.updateProduct(product.id, product)
					}}
				>
					
					<input type="text" name="prix" value={product.prix} onChange={handleInputChange} />
					<button>OK</button>
					<button onClick={() => {props.setEditing(false);}} className="button muted-button">
						Annuler
					</button>
				</form>
			  //)
			//}
		 // })
		
	)
}

export default Edition