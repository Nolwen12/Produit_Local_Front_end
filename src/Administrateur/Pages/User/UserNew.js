import { Link } from "react-router-dom";
import UserForm from '../../Components/UserForm';
import { apiFetch } from "../../../Services/api";

function UserNew()
{
    const handleCreate = async(data) => {
        await apiFetch(`/admin/user/new`, {
            method : "POST"?
            body: JSON.stringify(data),
         });
    };

    return (
        <>
            <h1>Create new User</h1>

            <UserForm onSubmit={handleCreate}/>
            <Link to='/admin/user/index'> Retourner à la liste </Link>
        </>
    )
}

export default UserNew;