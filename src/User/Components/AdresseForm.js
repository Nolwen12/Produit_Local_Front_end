import { useState, useEffect } from "react";

function AdresseForm({ initialData = {}, onSubmit })
{
    const [adresse, setAdresse] = useState("");
    const [cp, setCp] = useState("");
    const [ville, setVille] = useState("");

    useEffect(() => {
        if (initialData) {
            setAdresse(initialData.adresse || "");
            setCp(initialData.cp || "");
            setVille(initialData.ville || "");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            adresse,
            cp,
            ville,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Adresse</label>
                    <input
                    type="text"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                    />
                </div>

                <div>
                    <label>Code Postal</label>
                    <input
                    type="text"
                    value={cp}
                    onChange={(e) => setCp(e.target.value)}
                    />
                </div>

                <div>
                    <label>Ville</label>
                    <input
                    type="text"
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    />
                </div>

                <button type="submit">Enregistrer</button>
            </form>
        </>
    )
} 

export default AdresseForm;
