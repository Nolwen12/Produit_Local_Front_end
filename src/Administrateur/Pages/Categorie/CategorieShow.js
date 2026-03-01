import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CategorieShow()
{
    const [show, setShow] = useState();
    const { id } = useParams();

    useEffect(() => {
            const fetchCategorieShow = async () => {
                const response = await apiFetch(`/admin/categorie/${id}`);
                const data = await response.json();
                setShow(data);
            }
            fetchCategorieShow();
        }, []);

    return (
        <>
            <h1>Categorie</h1>
            {show.map( categorie => (
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{ categorie.id }</td>
                        </tr>
                        <tr>
                            <th>Libelle</th>
                            <td>{ categorie.libelle }</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            
            <Link to='/admin/categorie/index'> Retourner à la liste </Link>
            <Link to='/admin/categorie/edit'> Modifier </Link>
            <button type='button' onClick={() => handleDelete()}> Supprimer cette catégorie </button>
        </>
    )
}

export default CategorieShow;