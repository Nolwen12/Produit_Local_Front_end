import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductForm from '../../Components/ProductForm';
import AdresseForm from '../../Components/AdresseForm';
import { apiFetch } from '../../../Services/api';

function AdresseEdit()
{
    const [adresses, setAdresses] = useState();
    const { id } = useParams();

    useEffect(() => {
            const fetchAdresseEdit = async () => {
                const response = await apiFetch(`/api/adresse/${id}/edit`);
                const data = await response.json();
                setAdresses(data);
            }
            fetchAdresseEdit();
        }, []);

    const handleUpdate = async (data) => {
        await apiFetch(`/api/adresse/${id}/edit`, {
        method: "PUT",
        body: JSON.stringify(data),
        });
    };

    if (!adresses) return <p>Chargement...</p>;

    return (
        <>
            <h1>Edit Produit</h1>

            <AdresseForm initialData={adresses} onSubmit={handleUpdate}/>
            <Link to='/adresse/index'> Retourner à la liste </Link>
            <button type='button' onClick={() => handleDelete()}> Supprimer cet adresse </button>
        </>
    )
}

export default AdresseEdit;