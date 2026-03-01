import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdresseListe()
{
    const [adresses, setAdresses] = useState();
    
    useEffect(() => {
            const fetchAdresseListe = async () => {
                const response = await apiFetch(`/api/adresse`);
                const data = await response.json();
                setAdresses(data);
            }
            fetchAdresseListe();
        }, []);

    return(
        <>
            <h1>Vos adresses : </h1>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Adresse</th>
                        <th>Cp</th>
                        <th>Ville</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {adresses.map(adresse => (
                        <tr>
                            <td>{ adresse.id }</td>
                            <td>{ adresse.adresse }</td>
                            <td>{ adresse.cp }</td>
                            <td>{ adresse.ville }</td>
                            <td>
                                <Link to='/adresse/show'> Regarder </Link>
                                <Link to='/adresse/edit'> Modifier </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to='/adresse/new'> Ajouter une nouvelle adresse </Link>
        </>
    )
}

export default AdresseListe;