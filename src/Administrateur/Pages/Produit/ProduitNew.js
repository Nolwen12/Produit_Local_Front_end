import { Link } from "react-router-dom";
import ProductForm from '../../Components/ProductForm';
import { apiFetch } from "../../../Services/api";

function ProduitNew()
{
    const handleCreate = async(data) => {
        await apiFetch(`admin/produit/new`, {
            method : "POST"?
            body: JSON.stringify(data),
         });
    };

    return (
        <>
            <h1>Create new Produit</h1>

            <ProductForm onSubmit={handleCreate}/>
            <Link to='/admin/produit/index'> Retourner à la liste </Link>
        </>
    )
}

export default ProduitNew;