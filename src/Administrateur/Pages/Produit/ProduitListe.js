import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../../Services/api";

function ProduitListe()
{
    const [produits, setProduit] = useState([]);

    useEffect(() => {
            const fetchProduitListe = async () => {
                const response = await apiFetch(`/admin/produit`);
                const data = await response.json();
                setProduit(data);
            }
            fetchProduitListe();
        }, []);

    return(
        <>
            <h1>Produit index</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Poids</th>
                        <th>Unite</th>
                        <th>Prix</th>
                        <th>Stock</th>
                        <th>Date_debut_saison</th>
                        <th>Date_fin_saison</th>
                        <th>actions</th>
                    </tr>
                </thead>
            <tbody>
            {produits.map(produit => (
                <tr>
                    <td>{ produit.id }</td>
                    <td>{ produit.nom }</td>
                    <td>{ produit.poids }</td>
                    <td>{ produit.unite }</td>
                    <td>{ produit.prix }</td>
                    <td>{ produit.stock }</td>
                    <td>{ produit.dateDebutSaison ? new Date(produit.dateDebutSaison).toLocaleString().slice(0, 19).replace("T", " "): ""}</td>
                    <td>{ produit.dateFinSaison ? new Date(produit.dateFinSaison).toLocaleString().slice(0, 19).replace("T", " "): ""}</td>
                    <td>
                        <Link to='/admin/produit/show'> Regarder </Link>
                        <Link to='/admin/produit/edit'> Modifier </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    <Link to='/admin/produi/new'> Créer un nouveau produit </Link>
        </>
    )
}

export default ProduitListe;