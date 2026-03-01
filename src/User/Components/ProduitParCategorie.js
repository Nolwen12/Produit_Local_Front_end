import { useState, useEffect } from 'react';
import { apiFetch } from '../../Services/api';

function ProduitParCategorie()
{
    const [cat, setCat] = useState([]);

    useEffect(() => {
            const fetchProduitCategorie = async () => {
                const response = await apiFetch(`/api/home`);
                const data = await response.json();
                setCat(data);
            }
            fetchProduitCategorie();
        }, []);

    function ajouterAuPanier(id) { apiFetch("/api/panier/ajouter", {
        method: "POST",
        body: JSON.stringify({ produitId: id })
      });
    }

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
                  <button onClick={() => ajouterAuPanier(produit.id)}>Ajoutez au panier</button>
                </div>
              ))}
            </div>
          ))}
        </div>
    )
}

export default ProduitParCategorie;