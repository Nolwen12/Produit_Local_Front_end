import ProduitParCategorie from './Components/ProduitParCategorie';
import Panier from './Pages/Panier';
import CategoriePage from './Pages/Categorie';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Routes, Route} from "react-router-dom";

function UserDashboard() {
  return (  
      <Routes>
        
        <Route path='/'
          element = {
            <>
              <Header />
              <h1 className='App'> Bienvenue à la ferme de Comunhas</h1> 
              <ProduitParCategorie />
              <Footer />
            </>
          } 
        />
        <Route path="/panier" element={<Panier />} />
        <Route path={"/categorie/:id"} element={<CategoriePage />} />
        
      </Routes>
  );
}

export default UserDashboard;
