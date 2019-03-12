import React, { useState } from 'react'

var Formulaire = props => {
	const initialFormState = { id: null, nom: '', prix: '' }
	const [ product, setProduct ] = useState(initialFormState)
	

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		<form 
			onSubmit={event => {
				event.preventDefault()
				
				if (!product.nom || !product.prix) return
					if (isNaN(product.prix)){
						document.getElementById("erreur").innerHTML="Entrer un nombre"
					}else{
						document.getElementById("erreur").innerHTML=""
						props.addProduct(product)
						props.setCount(props.count +1)
						setProduct(initialFormState)
					}				
			}}
		>
			<table  className="table">
        <tr>
          <td>
            Produit&nbsp;
            <input type="text" name="nom" value={product.nom} onChange={handleInputChange} />
          </td>
          <td>
            Prix&nbsp;
			      <input type="text" name="prix" value={product.prix} onChange={handleInputChange} />
						&nbsp;Ar<br/><span id="erreur"></span>
          </td>
          <td>
						<button className="btn btn-primary">Ajouter</button>
          </td>
        </tr>				
			</table>

		</form>
	)
}



export default Formulaire