// src/pages/APropos.js
import React from 'react';
import './AProps.css';
import { FaShieldAlt, FaNetworkWired, FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa';
import image1 from '../assets/images/first.jpeg';
import image2 from '../assets/images/second.jpg';
const APropos = () => {
  return (
    <div>
      <section id="about">
            <div className="container">
              <h2>À Propos</h2>
              <div className="about-content">
                <div className="about-text">
                  <h3>Qui Sommes-Nous ?</h3>
                  <p>NUMEA est une société de consulting et de service en Systèmes d'Information à taille humaine. Elle accompagne ses clients dans la définition et la mise en œuvre de leur stratégie de confiance digitale en s'appuyant sur les axes suivants :</p>
                  <ul className="custom-list">
                    <li><FaShieldAlt className="icon" /> la Cybersécurité</li>
                    <li><FaNetworkWired className="icon" /> l'Infrastructure IT</li>
                    <li><FaBriefcase className="icon" /> les Solutions Métier</li>
                    <li><FaChalkboardTeacher className="icon" /> la Formation</li>
                  </ul>

                </div>
                <div className="about-image">
                  <img src={image2} alt="about" />
                </div>
              </div>
              <div className="mission">
                <h3>Notre Mission</h3>
                <p>Notre stratégie s'appuie sur une vision globale de la protection de toute catégorie de l'information, ainsi que la digitalisation des processus de nos clients. En mettant à disposition de nos clients un Système d'Information et un Système Informatique fiables et sécurisés, qui leur permettent de réaliser leurs objectifs stratégiques avec la qualité visée. Ayant un savoir et une expertise dans le domaine, nous offrons à nos clients un package complet de conseil et de service et nous les accompagnons dans leurs projets SI.</p>
                <div classNameName="about-image">
                  <img src={image1} alt="about" />
                </div>
              </div>
              <div className="engagement">
                <h3>Notre Engagement</h3>
                <p>Accompagner nos clients afin de renforcer leur Leadership, en accélérant la transformation digitale de leur processus, pour maintenir et améliorer leur avantage compétitif avec la conservation des données et la performance ciblée de leur SI.</p>
                <div classNameName="about-image">
                  <img src={image1} alt="about" />
                </div>
              </div>
            </div>
          </section>

    </div>
  );
};

export default APropos;
