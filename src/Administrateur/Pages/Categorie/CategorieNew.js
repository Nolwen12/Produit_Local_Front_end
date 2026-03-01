import { Link } from "react-router-dom";
import CategorieForm from "../../Components/CategorieForm";
import { apiFetch } from "../../../Services/api";


function CategorieNew()
{
    const handleCreate = async(data) => {
        await apiFetch(`admin/categorie/new`, {
            method : "POST"?
            body: JSON.stringify(data),
         });
    };

    return (
        <>
            <h1>Create new Categorie</h1>

            <CategorieForm onSubmit={handleCreate} />
            <Link to='/admin/categorie/index'> Retourner à la liste </Link>
        </>
    )
}

export default CategorieNew;