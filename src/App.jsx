import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Accueil from './pages/Accueil';
import Calendrier from './pages/Calendrier';
import Actualite from './pages/Actualite';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Myfooter from './components/footer';
import Impact from "./pages/Impact";

function App() {

  return (

    // div app-shell  = Pour que le footer reste en bas meme si pas assez de contenu sur la page
    <div className="app-shell">
      <main className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Myfooter />
      </main>
      
      
     
    </div>

  );
}

export default App
