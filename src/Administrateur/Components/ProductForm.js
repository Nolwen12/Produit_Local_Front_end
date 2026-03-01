import { useState, useEffect } from "react";

function ProductForm({ initialData = {}, onSubmit }) {
  const [nom, setNom] = useState("");
  const [poid, setPoid] = useState("");
  const [unite, setUnite] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");
  const [dateDebutSaison, setDateDebutSaison] = useState("");
  const [dateFinSaison, setDateFinSaison] = useState("");

  useEffect(() => {
    if (initialData) {
      setNom(initialData.nom || "");
      setPoid(initialData.poid ||  "");
      setUnite(initialData.unite || "");
      setPrix(initialData.prix || "");
      setStock(initialData.stock || "");
      setDateDebutSaison(initialData.dateDebutSaison || "");
      setDateFinSaison(initialData || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      nom,
      poid,
      unite,
      prix,
      stock,
      dateDebutSaison,
      dateFinSaison,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>

      <div>
        <label>Poids</label>
        <input
          type="text"
          value={poid}
          onChange={(e) => setPoid(e.target.value)}
        />
      </div>

      <div>
        <label>Unité</label>
        <input
          type="text"
          value={unite}
          onChange={(e) => setUnite(e.target.value)}
        />
      </div>

      <div>
        <label>Prix</label>
        <input
          type="number"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
      </div>

      <div>
        <label>Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <div>
        <label>Date du début de la saison</label>
        <input
          type="text"
          value={dateDebutSaison}
          onChange={(e) => setDateDebutSaison(e.target.value)}
        />
      </div>

      <div>
        <label>Date de la fin de la saison</label>
        <input
          type="text"
          value={dateFinSaison}
          onChange={(e) => setDateFinSaison(e.target.value)}
        />
      </div>

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default ProductForm;