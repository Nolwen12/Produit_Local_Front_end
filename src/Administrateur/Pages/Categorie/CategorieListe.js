import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../../Services/api";

function CategorieListe()
{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategorieListe = async () => {
            const response = await apiFetch(`/admin/categorie`);
            const data = await response.json();
            setCategories(data);
        }
        fetchCategorieListe();
    }, []);

    return(
        <>
            <h1>Categorie index</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Libelle</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {categories.map(categorie => (
                        <tr>
                            <td>{ categorie.id }</td>
                            <td>{ categorie.libelle }</td>
                            <td>
                                <Link to='/admin/categorie/show'> Regarder </Link>
                                <Link to='/admin/categorie/edit'> Modifier </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to='/admin/categorie/new'> Créer une nouvelle catégorie </Link>
        </>
    )
}

export default CategorieListe;