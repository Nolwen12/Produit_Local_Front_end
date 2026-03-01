import { useState} from 'react';
import { apiFetch } from '../../Services/api';

function Recherche()
{
    const [rechercher, setRechercher] = useState("");
    const [resultat, setResultat] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await apiFetch(`/api/recherche?q=${rechercher}`);
        const data = await response.json();

        setResultat(data);
    };
    
    return (
       <>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="text" placeholder="Rechercher un produit" value={rechercher} onChange={(e) => setRechercher(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit"> Rechercher </button>
        </form>
        <ul>
            {resultat.map((produit) => (
                <li key={produit.id}>{produit.nom}</li>
            ))}
        </ul>
       </>
    )
}

export default Recherche;