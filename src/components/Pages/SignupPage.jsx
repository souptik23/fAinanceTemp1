import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Email, Lock, Person } from "@mui/icons-material";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Squares from "../reactbits/Squares"; 

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const canvasRef = useRef(null);
  const threeSceneRef = useRef(null);
  const navigate = useNavigate(); // useNavigate hook

  // Three.js Scene Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // 3D Shape
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x4a90e2,
      metalness: 0.9,
      roughness: 0.1,
      opacity: 0.7,
      transparent: true,
      wireframe: true,
      emissive: 0x4a90e2,
      emissiveIntensity: 0.5,
    });

    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4a90e2, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.002;
      shape.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    threeSceneRef.current = { scene, camera, renderer, controls, shape };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // Form Handlers
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[\W_]/.test(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character."
      );
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    // Redirect to Home Page on successful signup
    navigate("/"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden">
      {/* Particle Background */}
      <Squares
        direction="diagonal"
        speed={1}
        borderColor="#999"
        squareSize={70}
        hoverFillColor="#222"
        className="absolute inset-0 z-0"
      />
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ["#4a90e2", "#9b51e0"] },
            links: { enable: true, opacity: 0.2, distance: 150 },
            move: { enable: true, speed: 1 },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Signup Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-11/12 max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white text-center">Create Account</h2>

        {error && (
          <div className="mt-4 p-3 text-center text-red-300 bg-red-500/20 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {[
            { name: "fullName", label: "Full Name", icon: Person },
            { name: "email", label: "Email", icon: Email, type: "email" },
            { name: "password", label: "Password", icon: Lock, type: "password" },
            { name: "confirmPassword", label: "Confirm Password", icon: Lock, type: "password" },
          ].map(({ name, label, icon: Icon, type = "text" }) => (
            <div key={name} className="relative">
              <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={label}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transition-all"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;
