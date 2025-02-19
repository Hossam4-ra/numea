// src/components/Footer.js
//new test
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
    <div className="text-center p-3">
      © {new Date().getFullYear()} NUMEA. Tous droits réservés.
    </div>
  </footer>
  );
};

export default Footer;
