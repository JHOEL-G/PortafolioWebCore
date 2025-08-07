import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    {
      size: "w-64 h-64",
      color: "bg-blue-500/10",
      position: "top-20 right-20",
      delay: 0,
    },
    {
      size: "w-48 h-48",
      color: "bg-purple-500/10",
      position: "bottom-32 right-32",
      delay: 1,
    },
    {
      size: "w-32 h-32",
      color: "bg-pink-500/10",
      position: "top-1/2 right-10",
      delay: 2,
    },
    {
      size: "w-40 h-40",
      color: "bg-cyan-500/10",
      position: "bottom-20 left-1/4",
      delay: 1.5,
    },
    {
      size: "w-24 h-24",
      color: "bg-indigo-500/10",
      position: "top-40 left-1/3",
      delay: 0.5,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full blur-3xl ${element.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-indigo-900/10" />
    </div>
  );
};

export default FloatingElements;
