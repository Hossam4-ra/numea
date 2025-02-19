import { useRef, useEffect } from "react";
import * as THREE from "three";
import "./GridDistortion.css";

const GridDistortion = ({ imageSrc, className = "" }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  let frameId = null;

  useEffect(() => {
    if (!containerRef.current) return;

    // Création de la scène
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Création de la caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    cameraRef.current = camera;

    // Création du renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Chargement de la texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageSrc, (texture) => {
      const geometry = new THREE.PlaneGeometry(2, 2, 30, 30);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      // Démarrer l'animation
      animate();
    });

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (meshRef.current) {
        meshRef.current.rotation.z += 0.005; // Effet de rotation
      }
      renderer.render(scene, camera);
    };

    // Gestion du redimensionnement
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, [imageSrc]);

  return <div ref={containerRef} className={`distortion-container ${className}`} />;
};

export default GridDistortion;
