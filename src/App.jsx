import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import './App.css'
import Accueil from './pages/Accueil';
import Calendrier from './pages/Calendrier';
import Actualite from './pages/Actualite';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <main className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>

  );
}

export default App
