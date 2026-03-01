import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductForm from '../../Components/ProductForm';
import { apiFetch } from '../../../Services/api';

function ProduitEdit()
{
    const [produit, setProduit] = useState([]);
    const { id } = useParams();

    useEffect(() => {
            const fetchProduitEdit = async () => {
                const response = await apiFetch(`/admin/produit/${id}/edit`);
                const data = await response.json();
                setProduit(data);
            }
            fetchProduitEdit();
        }, []);

    const handleUpdate = async (data) => {
        await apiFetch(`/admin/produit/${id}/edit`, {
        method: "PUT",
        body: JSON.stringify(data),
        });
    };

    if (!produit) return <p>Chargement...</p>;

    return (
        <>
            <h1>Edit Produit</h1>

            <ProductForm initialData={produit} onSubmit={handleUpdate}/>
            <Link to='/admin/produit/index'> Retourner à la liste </Link>
            <button type='button' onClick={() => handleDelete()}> Supprimer ce produit </button>
        </>
    )
}

export default ProduitEdit;