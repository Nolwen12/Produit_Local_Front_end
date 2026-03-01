import { useState, useEffect } from "react";

function CategorieForm({ initialData = {}, onSubmit })
{
    const [libelle, setLibelle] = useState("");

    useEffect(() => {
        if (initialData) {
            setLibelle(initialData.libelle || "");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            libelle,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom</label>
                    <input
                    type="text"
                    value={libelle}
                    onChange={(e) => setLibelle(e.target.value)}
                    />
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </>
    )
} 

export default CategorieForm;
