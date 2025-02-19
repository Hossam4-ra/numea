// src/pages/NosServices.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ConseilsGouvernance from './NosServices/ConseilsGouvernance';
import IntegrationSolutions from './NosServices/IntegrationSolutions';
import Infogerance from './NosServices/Infogerance';
import Formation from './NosServices/Formation';

const NosServices = () => {
  return (
    <div>
      <h1>Nos Services</h1>
      <ul>
        <li><Link to="conseils-gouvernance">Conseils & Gouvernance</Link></li>
        <li><Link to="integration-solutions">Intégration de Solutions</Link></li>
        <li><Link to="infogerance">Infogérance</Link></li>
        <li><Link to="formation">Formation</Link></li>
      </ul>
      <Routes>
        <Route path="conseils-gouvernance" element={<ConseilsGouvernance />} />
        <Route path="integration-solutions" element={<IntegrationSolutions />} />
        <Route path="infogerance" element={<Infogerance />} />
        <Route path="formation" element={<Formation />} />
      </Routes>
    </div>
  );
};

export default NosServices;
