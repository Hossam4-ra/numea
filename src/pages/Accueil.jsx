import React from "react";
import GridDistortion from "../components/GridDistortion"; 
import "./Acceuil.css";
import image from "../components/cyber.jpg"
const Accueil = () => {
  return (
    <div className="accueil-container">
      {/* Background animé */}
      <GridDistortion
        imageSrc={image}
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="custom-class"
      />

      {/* Contenu au-dessus du fond animé */}
      <div className="accueil-content">
        <h1>Bienvenue chez NUMEA</h1>
        <p>Le choix de la Confiance, la Sécurité et la Robustesse.</p>
      </div>
    </div>
  );
};

export default Accueil;
