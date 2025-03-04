import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "./Loader3D.css";

const Loader3D = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("loader-3d").appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347, metalness: 0.7, roughness: 0.3 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3000); // Adjust time if needed

    return () => {
      document.getElementById("loader-3d")?.removeChild(renderer.domElement);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return <div id="loader-3d" className="loader-container"></div>;
};

export default Loader3D;
