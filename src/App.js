// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import APropos from './pages/AProps';
import NosServices from './pages/NosServices';
import Contact from './pages/diffContact';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <section id="accueil">
          <Accueil />
        </section>
        <section id="a-propos">
          <APropos />
        </section>
        <section id="nos-services">
          <NosServices />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
