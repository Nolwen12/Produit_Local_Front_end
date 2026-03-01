import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CategorieForm from '../../Components/CategorieForm';
import { apiFetch } from '../../../Services/api';

function CategorieEdit()
{
    const [categorie, setCategorie] = useState([]);
    const { id } = useParams();
    
    useEffect(() => { 
        const fetchCategorieEdit = async () => {
            const response = await apiFetch(`/admin/categorie/${id}/edit`);
            const data = await response.json();
            setCategorie(data);
        }
        fetchCategorieEdit();
    }, []);

    const handleUpdate = async (data) => {
        await apiFetch(`/admin/categorie/${id}/edit`, {
        method: "PUT",
        body: JSON.stringify(data),
        });
    };

    if (!categorie) return <p>Chargement...</p>;

    return (
        <>
            <h1>Edit Categorie</h1>

            <CategorieForm initialData={categorie} onSubmit={handleUpdate}/>
            <Link to='/admin/categorie/index'> Retourner à la liste </Link>
            <button type='button' onClick={() => handleDelete()}> Supprimer cette catégorie </button>
        </>
    )
}

export default CategorieEdit;