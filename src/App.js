import './App.css';
//import Categorie from './Components/Categorie';
import ProduitParCategorie from './Components/ProduitParCategorie';
//import { useState, useEffect } from 'react';

function App() {

  // const [cat, setCat] = useState([]);

  // useEffect(() => {fetch('http://localhost:8000/api/categorie')
  // .then(res => res.json())
  // .then((data) => {
  //   setCat(data);
  //    console.log(data)
  //   })
  // .catch(error => console.log(error));
  // }, []);
  

  return (  
    <div className='App'>
      <h1 className='App'> Bienvenue à la ferme d'Epau</h1> 
      <ProduitParCategorie />
    </div>
  );
}

export default App;
