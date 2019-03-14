import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './Affichage.css'


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
            <td><p>{product.id+1}</p></td>
						<td><p>{product.nom.charAt(0).toUpperCase() + product.nom.substring(1).toLowerCase()}</p></td>
						<td className="price"><p>{product.prix}</p></td>                        
            <td> 
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
              <button onClick={() => {
                      props.editProduct(product)
                    }
                /*
                              () => confirmAlert({
                                
                                customUI: ({ onClose }) => {
                                  return (
                                    <div className='custom-ui'>
                                      <p><input type="text" name="prix" value={product.prix}/></p>
                                      <br/>
                                      <button className="btn btn-sm btn-secondary" onClick={() => props.editProduct(product)}>OK</button>
                                      <button className="btn btn-sm btn-secondary" onClick={onClose}>Annuler</button>                                      
                                    </div>
                                  )
                                }
                              }) */
                }
                className="btn btn-success">Edit
              </button></td>						
					</tr>
          
          
                ))
      ) : ''}
      
		</tbody>    
	</table>
)



export default Affichage