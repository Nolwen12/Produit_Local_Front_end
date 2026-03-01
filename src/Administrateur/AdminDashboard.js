import CategorieListe from "./Pages/Categorie/CategorieListe";
import ProduitListe from "./Pages/Produit/ProduitListe";
import UserListe from "./Pages/User/UserListe";

function AdminDashboard()
{
    return (
        <div>
            <h1>Bienvenue dans l'administration</h1>
            <CategorieListe />
            <ProduitListe />
            <UserListe />
        </div>
    );
}

export default AdminDashboard;