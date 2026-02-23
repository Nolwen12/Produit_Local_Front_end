function Commande(props)
{
    return (
        <>
            <p>La commande du {props.date} est {props.statut}</p>
            <p>Frais de livraison : {props.frais_livraison}</p>
        </>
    )
}

export default Commande;