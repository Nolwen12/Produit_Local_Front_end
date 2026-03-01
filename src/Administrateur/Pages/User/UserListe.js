import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../../Services/api";

function UserListe()
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
            const fetchUserListe = async () => {
                const response = await apiFetch(`/admin/user`);
                const data = await response.json();
                setUsers(data);
            }
            fetchUserListe();
        }, []);

    return(
        <>
            <h1>User index</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Password</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Tel</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{ user.id }</td>
                            <td>{ user.email }</td>
                            <td>{ user.roles ? JSON.stringify(user.roles) : '' }</td>
                            <td>{ user.password }</td>
                            <td>{ user.nom }</td>
                            <td>{ user.prenom }</td>
                            <td>{ user.tel }</td>
                            <td>
                                <Link to='/admin/user/show'> Regarder </Link>
                                <Link to='/admin/user/edit'> Modifier </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to='/admin/user/new'> Créer un nouveau utilisateur </Link>
        </>
    )
}

export default UserListe;