function Produit(props)
{
    return (
        <div>
            <img src="..." alt="..."/>
            <div>
                <h5>{props.nom} </h5>
                <p>{props.poids} {props.unite}</p>
                <p>{props.prix}</p>
            </div>
        </div>
    )
}

export default Produit;