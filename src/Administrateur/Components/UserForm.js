import { useState, useEffect } from "react";

function UserForm({ initialData = {}, onSubmit })
{
    const [email, setEmail] = useState("");
    const [roles, setRoles] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tel, setTel] = useState("");

    useEffect(() => {
        if (initialData) {
            setEmail(initialData.email || "");
            setRoles(initialData.roles || "");
            setNom(initialData.nom || "");
            setPrenom(initialData.prenom || "");
            setTel(initialData.tel || "");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            email,
            roles,
            nom,
            prenom,
            tel,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Rôles</label>
                    <input
                    type="text"
                    value={roles}
                    onChange={(e) => setRoles(e.target.value)}
                    />
                </div>

                <div>
                    <label>Nom</label>
                    <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    />
                </div>

                <div>
                    <label>Prenom</label>
                    <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    />
                </div>

                <div>
                    <label>Tel</label>
                    <input
                    type="text"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    />
                </div>

                <button type="submit">Enregistrer</button>
            </form>
        </>
    )
} 

export default UserForm;