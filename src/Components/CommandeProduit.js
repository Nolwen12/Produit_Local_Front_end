import Produit from "./Produit";

function CommandeProduit(props)
{
    return (
        <div>
            <Produit />
            <p>{props.quantite}</p>
            <p>{props.prix_unitaire}</p>
        </div>
    )
}

export default CommandeProduit;