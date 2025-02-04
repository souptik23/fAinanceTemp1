import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import gsap from "gsap";

const LandingPage = () => {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 300, 500, 700, 900, 1200],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    gsap.from(".hero-text", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".chart-container", { opacity: 0, x: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 relative">
      {/* Hero Section */}
      <motion.div
        className="hero-text text-center mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">BankBandhu: AI-Driven Banking</h1>
        <p className="text-lg mt-2">Secure, Transparent, and Smarter Financial Decisions</p>
      </motion.div>

      {/* 3D Model Section */}
      <div className="w-full h-80 flex justify-center items-center">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="teal" />
          </mesh>
        </Canvas>
      </div>

      {/* Financial Insights */}
      <motion.div
        className="chart-container mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl font-semibold text-center">User Growth Analytics</h2>
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
          <Line data={data} />
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
