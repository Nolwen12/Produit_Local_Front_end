import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProduitShow()
{
    const [show, setShow] = useState();
    const { id } = useParams();

    useEffect(() => {
            const fetchProduitShow = async () => {
                const response = await apiFetch(`/admin/produit/${id}`);
                const data = await response.json();
                setShow(data);
            }
            fetchProduitShow();
        }, []);

    return (
        <>
            <h1>Produit</h1>
            {show.map( produit => (
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{ produit.id }</td>
                        </tr>
                        <tr>
                            <th>Nom</th>
                            <td>{ produit.nom }</td>
                        </tr>
                        <tr>
                            <th>Poids</th>
                            <td>{ produit.poids }</td>
                        </tr>
                        <tr>
                            <th>Unite</th>
                            <td>{ produit.unite }</td>
                        </tr>
                        <tr>
                            <th>Prix</th>
                            <td>{ produit.prix }</td>
                        </tr>
                        <tr>
                            <th>Stock</th>
                            <td>{ produit.stock }</td>
                        </tr>
                        <tr>
                            <th>Date_debut_saison</th>
                            <td>{ produit.dateDebutSaison ? produit.dateDebutSaison|date('Y-m-d H:i:s') : '' }</td>
                        </tr>
                        <tr>
                            <th>Date_fin_saison</th>
                            <td>{ produit.dateFinSaison ? produit.dateFinSaison|date('Y-m-d H:i:s') : '' }</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            
            <Link to='/admin/produit/index'> Retourner à la liste </Link>
            <Link to='/admin/produit/edit'> Modifier </Link>
            <button type='button' onClick={() => handleDelete()}> Supprimer ce produit </button>
        </>
    )
}

export default ProduitShow;