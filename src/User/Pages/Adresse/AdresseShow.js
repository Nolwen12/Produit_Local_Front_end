import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function AdresseShow()
{
    const [show, setShow] = useState();
    const { id } = useParams();

    useEffect(() => {
            const fetchAdresseShow = async () => {
                const response = await apiFetch(`/api/adresse/${id}`);
                const data = await response.json();
                setShow(data);
            }
            fetchAdresseShow();
        }, []);

    return (
        <>
            <h1>Adresse</h1>
            {show.map( adresse => (
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{ adresse.id }</td>
                        </tr>
                        <tr>
                            <th>Adresse</th>
                            <td>{ adresse.adresse }</td>
                        </tr>
                        <tr>
                            <th>Cp</th>
                            <td>{ adresse.cp }</td>
                        </tr>
                        <tr>
                            <th>Ville</th>
                            <td>{ adresse.ville }</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            
            <Link to='/adresse/index'> Retourner à la liste  d'adresse</Link>
            <Link to='/adresse/edit'> Modifier l'adresse</Link>
            <button type='button' onClick={() => handleDelete()}> Supprimer cet adresse </button>
        </>
    )
}

export default AdresseShow;