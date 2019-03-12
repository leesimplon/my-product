import React, { useState } from 'react'

const Edition = props => {
	const [ product, setProduct ] = useState(props.currentProduct)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()

				props.updateProduct(product.id, product)
			}}
		>
			<input type="hidden" name="nom" value={product.nom} onChange={handleInputChange} />
			<input type="text" name="prix" value={product.prix} onChange={handleInputChange} />
			<button>OK</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Annuler
			</button>
		</form>
	)
}

export default Edition