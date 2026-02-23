import { useState, useEffect } from 'react';

function ProduitParCategorie()
{
    const [cat, setCat] = useState([]);
  
    useEffect(() => {fetch(`http://localhost:8000/api/home`)
    .then(res => res.json())
    .then((data) => {
        setCat(data);
        console.log(data)
    })
    .catch(error => console.log(error));
    }, []);

    return (
        <div>
          {cat.map(cats => (
            <div key = {cats.id}>
              <h3>{cats.libelle}</h3>
              {cats.produits.map(produit => (
                <div key = {produit.id} > 
                  <h5>{produit.nom}</h5>
                  <p>{produit.poids} {produit.unite}</p>
                  <p>{produit.prix}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
    )
}

export default ProduitParCategorie;