import Categorie from "../Components/Categorie";
import Produit from "../Components/Produit";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { apiFetch } from "../../Services/api";

function CategoriePage()
{
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
            const fetchCategorie = async () => {
                const response = await apiFetch(`/api/${id}/produit`);
                const data = await response.json();
                setProduct(data);
            }
            fetchCategorie();
        }, [id]);

    return (
        <div className="Categorie">
            <Categorie />
            {product.map( (produit, index) => (
                <Produit 
                    key = {index}
                    nom = {produit.nom}
                    poids = {produit.poids}
                    unite = {produit.unite}
                    prix = {produit.prix}
                />
            ))} 
        </div>
    )
}

export default CategoriePage;