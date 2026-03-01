import { Link } from "react-router-dom";
import Recherche from "./Recherche";
import { useState, useEffect } from 'react';
import { apiFetch } from "../../Services/api";

function Header({libelle})
{
    const [cat, setCat ]= useState([]);

    useEffect(() => {fetch()
 .then(res => res.text())
.then(text => {
  console.log("Réponse brute:", text);
})
    .then((data) => {
        setCat(data);
        console.log(data);
        })
    .catch(error => console.log(error));
    }, []);

    useEffect(() => {
            const fetchHearder = async () => {
                const response = await apiFetch(`/api/categorie`);
                const data = await response.json();
                setCat(data);
            }
            fetchHearder();
        }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">La ferme de Comunhas</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorie
                            </button>
                            <ul className="dropdown-menu">    
                                {cat.map(cats => ( 
                                    <li key={cats.id}>
                                        <Link className="dropdown-item" to={`categorie/${cats.id}`}>{cats.libelle}</Link>
                                    </li>
                                ))}
                                
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/panier'> Panier </Link>
                        </li>
                    </ul>
                    <Recherche />
                </div>
            </div>
        </nav>
        
    )
}

export default Header;