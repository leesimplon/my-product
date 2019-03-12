import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Edition from './Edition'


const Affichage = props => (

	<table className="table table-striped table-bordered">
		<thead className="thead-dark">
			<tr>
          <th>Id</th>
          <th>Produits</th>
          <th>Prix</th>
          <th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.products.length > 0 ? (
                
				props.products.map(product => (
          
					<tr key={product.id}>
            <td>{product.id+1}</td>
						<td>{product.nom.charAt(0).toUpperCase() + product.nom.substring(1).toLowerCase()}</td>
						<td>{product.prix}</td>
            <td> <center>
							<button  onClick={
                                    () => confirmAlert({
                                        title : 'Supression Produit',
                                        message: product.nom.charAt(0).toUpperCase() + product.nom.substring(1).toLowerCase(),
                                        buttons: [
                                          {
                                            label: 'OUI',
                                            onClick: () => props.deleteProduct(product.id)
                                          },
                                          {
                                            label: 'NON',
                                            onClick: () => ''
                                          }
                                        ]
                                      }) 
                                    
                                }
                                className="btn btn-danger">X
                            </button>&nbsp;            
              <button onClick={
                              () => confirmAlert({
                                Edition
                                /*
                                customUI: ({ onClose }) => {
                                  return (
                                    <div className='custom-ui'>
                                      <input type="text" name="prix" value={product.prix}/>
                                      <br/>
                                      <button className="btn btn-sm btn-secondary" onClick={() => props.editProduct(product)}>OK</button>
                                      <button className="btn btn-sm btn-secondary" onClick={onClose}>Annuler</button>                                      
                                    </div>
                                  )
                                }*/
                              }) 
                }
                className="btn btn-success">Edit
              </button>              
            </center></td>						
					</tr>
                ))
			) : ''}
		</tbody>
	</table>
)

export default Affichage