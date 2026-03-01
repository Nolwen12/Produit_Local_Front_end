import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UserForm from '../../Components/UserForm';
import { apiFetch } from '../../../Services/api';


function UserEdit()
{
    const [user, setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
            const fetchUserEdit = async () => {
                const response = await apiFetch(`/admin/user/${id}/edit`);
                const data = await response.json();
                setUser(data);
            }
            fetchUserEdit();
        }, []);

    const handleUpdate = async (data) => {
    await apiFetch(`/admin/user/${id}/edit`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  };

  if (!user) return <p>Chargement...</p>;

    return (
        <>
            <h1>Edit User</h1>

            <UserForm  initialData={user} onSubmit={handleUpdate}/>
            <Link to='/admin/user/index'> Retourner à la liste </Link>

            <button type='button'  onClick={() => handleDelete()}> Suprimer cet utilisateur </button> 
        </>
    )
}

export default UserEdit;