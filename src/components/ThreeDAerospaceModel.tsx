import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface ThreeDAerospaceModelProps {
  modelUrl?: string;
  rotationSpeed?: number;
  backgroundColor?: string;
}

const ThreeDAerospaceModel = ({
  modelUrl = "/models/spacecraft.glb",
  rotationSpeed = 0.005,
  backgroundColor = "#000000",
}: ThreeDAerospaceModelProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    renderer.setClearColor(backgroundColor);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create a more complex aircraft shape
    const fuselageGeometry = new THREE.CylinderGeometry(0.5, 0.3, 4, 32);
    const fuselageMaterial = new THREE.MeshStandardMaterial({
      color: 0x303030,
      metalness: 0.8,
      roughness: 0.2,
    });
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial);
    fuselage.rotation.z = Math.PI / 2;
    scene.add(fuselage);

    // Wings
    const wingGeometry = new THREE.BoxGeometry(3, 0.1, 1);
    const wingMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e88e5,
      metalness: 0.6,
      roughness: 0.3,
    });
    const wings = new THREE.Mesh(wingGeometry, wingMaterial);
    wings.position.y = -0.2;
    scene.add(wings);

    // Tail wings
    const tailWingGeometry = new THREE.BoxGeometry(1, 0.1, 0.4);
    const tailWings = new THREE.Mesh(tailWingGeometry, wingMaterial);
    tailWings.position.x = -1.5;
    tailWings.position.y = -0.2;
    scene.add(tailWings);

    // Vertical stabilizer
    const stabilizerGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.1);
    const stabilizer = new THREE.Mesh(stabilizerGeometry, wingMaterial);
    stabilizer.position.x = -1.5;
    stabilizer.position.y = 0.2;
    scene.add(stabilizer);

    // Cockpit
    const cockpitGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const cockpitMaterial = new THREE.MeshStandardMaterial({
      color: 0x88ccff,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
    });
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.position.x = 1.5;
    cockpit.scale.x = 1.5;
    scene.add(cockpit);

    // Group all parts
    const aircraft = new THREE.Group();
    aircraft.add(fuselage, wings, tailWings, stabilizer, cockpit);
    scene.add(aircraft);

    // Position camera
    camera.position.set(5, 2, 5);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      aircraft.rotation.y += rotationSpeed;
      aircraft.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        mountRef.current &&
        renderer.domElement &&
        mountRef.current.contains(renderer.domElement)
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [backgroundColor, rotationSpeed]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-black min-h-[500px]"
      style={{ background: backgroundColor }}
    />
  );
};

export default ThreeDAerospaceModel;
