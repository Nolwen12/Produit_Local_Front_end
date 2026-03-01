import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UserShow()
{
    const [show, setShow] = useState();
    const { id } = useParams();

    useEffect(() => {
            const fetchUserShow = async () => {
                const response = await apiFetch(`/admin/user/${id}`);
                const data = await response.json();
                setShow(data);
            }
            fetchUserShow();
        }, []);

    return (
        <>
            <h1>User</h1>
            {show.map( user => (
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{ user.id }</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{ user.email }</td>
                        </tr>
                        <tr>
                            <th>Roles</th>
                            <td>{ user.roles ? user.roles|json_encode : '' }</td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>{ user.password }</td>
                        </tr>
                        <tr>
                            <th>Nom</th>
                            <td>{ user.nom }</td>
                        </tr>
                        <tr>
                            <th>Prenom</th>
                            <td>{ user.prenom }</td>
                        </tr>
                        <tr>
                            <th>Tel</th>
                            <td>{ user.tel }</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            
            <Link to='/admin/user/index'> Retourner à la liste </Link>
            <Link to='/admin/user/edit'> Modifier </Link>
            <button type='button' onClick={() => handleDelete()}>Suprimer cet utilisateur</button>
        </>
    )
}

export default UserShow;