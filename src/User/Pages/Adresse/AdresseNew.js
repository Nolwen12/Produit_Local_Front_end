import { Link } from "react-router-dom";
import ProductForm from '../../Components/ProductForm';
import AdresseForm from "../../Components/AdresseForm";
import { apiFetch } from "../../../Services/api";

function AdressetNew()
{
    const handleCreate = async(data) => {
        await apiFetch(`api/adresse/new`, {
            method : "POST"?
            body: JSON.stringify(data),
         });
    };

    return (
        <>
            <h1>Créer une adresse</h1>

            <AdresseForm onSubmit={handleCreate}/>
            <Link to='/adresse/index'> Retourner à la liste d'adresse </Link>
        </>
    )
}

export default AdressetNew;