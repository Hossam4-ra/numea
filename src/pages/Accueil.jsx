import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imag from "./img.jpg";

const HomeSection = () => {
  return (
    <div className="container-fluid p-0">
      <img src={imag} alt="Background" className="w-100" style={{ height: '100vh', objectFit: 'cover' }} />
      <div className="container-fluid p-5 position-absolute top-50 start-50 translate-middle text-center text-white" style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
        <h1 className="fw-bold">Bienvenue chez <br /><span className="text-primary">NUMEA</span></h1>
        <p className="text-light">Le choix de la Confiance, la Sécurité et la Robustesse</p>
        <button className="btn btn-primary btn-lg">En savoir plus</button>
      </div>
    </div>
  );
};

export default HomeSection;
